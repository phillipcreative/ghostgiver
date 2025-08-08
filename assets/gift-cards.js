/**
 * Gift Cards Module — Vanilla JS
 * - Fast first paint (100), background prefetch to ~500 with small concurrency
 * - In-memory + localStorage cache with expiry
 * - Debounced search, request cancellation
 * - Event delegation (no duplicate listeners), lazy images, minimal DOM churn
 */

(function () {
  'use strict';

  // ===== Config =====
  const API_BASE = "https://yourgreetings-server.azurewebsites.net/api/EGifter/GetProducts?";
  const FIRST_PAGE_SIZE = 100;      // quick first paint
  const TARGET_TOTAL = 500;         // how many to accumulate in background
  const BG_PAGE_SIZE = 200;         // bigger pages in background to reduce roundtrips
  const CACHE_KEY = "giftCards_all_data_v2"; // bump key if shape changes
  const CACHE_DAYS = 7;

  // ===== State =====
  let memCache = { data: null, ts: 0 };      // session cache
  let currentQuery = "";                     // last search query
  let currentPage = 1;
  let currentPageSize = 20;
  let activeFetchController = null;          // cancel in-flight fetches on new searches
  let searchDebounceTimer = null;

  // ===== Small utils =====
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Schedule something during idle time or asap as a fallback
  const scheduleIdle = (cb) => {
    if ('requestIdleCallback' in window) {
      // Pass proper IdleRequestOptions object
      return window.requestIdleCallback(() => cb(), { timeout: 250 });
    }
    return setTimeout(cb, 0);
  };


  // Simple event delegation
  function delegate(root, eventType, selector, handler) {
    root.addEventListener(eventType, (e) => {
      const potential = e.target.closest(selector);
      if (potential && root.contains(potential)) handler(e, potential);
    });
  }

  // Bootstrap modal helpers (fallback if Bootstrap not present)
  function showModalById(id) {
    const el = document.getElementById(id);
    if (!el) return;
    // Bootstrap 5
    if (window.bootstrap?.Modal) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(el);
      modal.show();
      return;
    }
    // Fallback: toggle an "open" class
    el.classList.add('is-open');
    el.style.display = 'block';
  }
  function hideModalById(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.bootstrap?.Modal) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(el);
      modal.hide();
      return;
    }
    el.classList.remove('is-open');
    el.style.display = 'none';
  }

  // ===== Cache helpers =====
  function isValid(ls) {
    if (!ls) return false;
    try {
      const parsed = JSON.parse(ls);
      return Date.now() < (parsed.ts + CACHE_DAYS * 864e5) && Array.isArray(parsed.data);
    } catch { return false; }
  }
  function loadFromStorage() {
    console.log('🔍 Checking localStorage cache for gift cards...');
    const raw = localStorage.getItem(CACHE_KEY);
    if (!isValid(raw)) {
      console.log('❌ Cache invalid or missing');
      return null;
    }
    const { data, ts } = JSON.parse(raw);
    console.log(`✅ Found valid cache with ${data.length} gift cards`);
    return { data, ts };
  }
  function saveToStorage(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
      console.log(`💾 Saved ${data.length} gift cards to cache`);
    } catch (e) {
      console.warn("Cache save failed", e);
    }
  }

  // ===== Fetch helpers =====
  async function fetchPage(pageIndex, pageSize, signal) {
    console.log(`📡 Fetching gift cards page ${pageIndex} (size: ${pageSize})...`);
    const url = `${API_BASE}pageIndex=${pageIndex}&pageSize=${pageSize}&productName=&productDescription=`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Fetch ${pageIndex} failed: ${res.status}`);
    const json = await res.json();
    const data = Array.isArray(json?.data) ? json.data : [];
    console.log(`✅ Fetched ${data.length} gift cards from page ${pageIndex}`);
    return data;
  }

  // ===== Data bootstrap (block until we have ~500) =====
async function ensureDataFast(signal) {
  console.log('🔍 Checking for cached gift card data...');

  // Use in-memory if present
  if (Array.isArray(memCache.data) && memCache.data.length > 0) {
    console.log(`✅ Found ${memCache.data.length} gift cards in memory cache.`);
    return memCache.data;
  }

  // Check localStorage first - this is our primary cache
  const ls = loadFromStorage();
  if (ls && Array.isArray(ls.data) && ls.data.length > 0) {
    memCache = ls;
    console.log(`✅ Found ${memCache.data.length} gift cards in localStorage cache.`);
    return memCache.data;
  }

  // Only fetch if we have no valid cache
  console.log('🔄 No valid cache found - fetching gift cards from API...');

  // Fresh pull: try one big request first, then top up sequentially.
  const collected = [];

  // 1) Try to fetch everything in one go (server may cap pageSize)
  try {
    const first = await fetchPage(1, TARGET_TOTAL, signal); // request 500
    collected.push(...first);
    console.log(`✅ Fetched ${first.length} gift cards from page 1.`);
  } catch (e) {
    if (e.name !== 'AbortError') console.warn('Big fetch failed, continuing with smaller pages.', e);
  }

  // 2) If we didn't hit TARGET_TOTAL, keep fetching more pages until we do
  let pageIndex = 2;
  while (collected.length < TARGET_TOTAL) {
    const remaining = TARGET_TOTAL - collected.length;
    const pageSize = Math.min(BG_PAGE_SIZE, remaining); // e.g., 200s

    const chunk = await fetchPage(pageIndex, pageSize, signal);
    if (!chunk.length) break; // no more data available from API

    // Deduplicate by id
    const seen = new Set(collected.map(p => p.id));
    for (const item of chunk) if (!seen.has(item.id)) collected.push(item);

    // If server gave fewer than requested, we might be near the end
    if (chunk.length < pageSize) break;

    pageIndex++;
  }

  memCache = { data: collected, ts: Date.now() };
  saveToStorage(memCache.data);
  console.log(`💾 Saved ${memCache.data.length} gift cards to localStorage.`);

  return memCache.data;
}


  // ===== Search + paginate =====
  function filterAndPaginate(all, q, page, size) {
    let list = all;
    const term = (q || "").trim().toLowerCase();
    if (term) {
      list = all.filter(p => {
        const name = (p._name || (p._name = (p.name || "").toLowerCase()));
        const desc = (p._desc || (p._desc = (p.description || "").toLowerCase()));
        return name.includes(term) || desc.includes(term);
      });
    }
    const totalCount = list.length;
    const totalPages = Math.max(Math.ceil(totalCount / size), 1);
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const start = (currentPage - 1) * size;
    const slice = list.slice(start, start + size);
    return { products: slice, totalCount, totalPages, currentPage };
  }

  // ===== Rendering =====
  function render(productsObj, searchTerm) {
    const { products, totalPages, currentPage } = productsObj;

    const cards = products.map(s => {
      const img = s?.media?.faceplates?.[0]?.path || '';
      const denoms = JSON.stringify(s.denominations || []);
      const type = s.denominationType || '';
      const safeId = String(s.id || '').trim();

      return `
      <div class="voucher-card egifter-card" style="position:relative">
        <a href="#" data-eg-id="${safeId}" data-eg-denoms='${denoms.replace(/'/g, "&apos;")}' data-eg-type="${type}" data-eg-img="${img}">
          <img src="${img}" alt="${s.name || ''}" class="voucher-img" loading="lazy" decoding="async"/>
          <div class="voucher-card-footer"><p class="voucher-name">${s.name || ''}</p></div>
        </a>
        <div class="d-none" id="${safeId}">
          <div id="redemptionNote" class="d-none">${s.redemptionNote || ''}</div>
          <div id="terms" class="d-none">${s.terms || ''}</div>
        </div>
        <button class="tooltip1 btn-terms" data-terms-id="${safeId}" style="position:absolute;top:0;right:0;background:black;border-radius:50%;height:25px;width:25px;display:flex;align-items:center;justify-content:center;margin:0.25rem">
          <i class="fa fa-info-circle" style="color:white"></i>
        </button>
      </div>`;
    }).join("");

    const clearSearchHtml = searchTerm
      ? `<div class="clear-search-container" style="margin:auto;margin-top:10px;text-align:center">
           <button id="clear-search-btn" class="btn-clear-search" style="background:#f8f9fa;border:1px solid #dee2e6;border-radius:4px;padding:8px 16px;color:#000;font-weight:bold;cursor:pointer;font-size:14px;line-height:normal;border:1px solid">
             <i class="fa fa-times" style="margin-right:5px"></i>Clear Search
           </button>
         </div>`
      : "";

    const bodyHtml = products.length
      ? cards
      : `<div style="text-align:center;padding:40px 20px">
           <p style="font-size:18px;color:#666;margin-bottom:20px">
             There are no results but clear search to find other awesome gift ideas!
           </p>
         </div>`;

    const html = `
    <div class="gift-card">
      <div class="header-sec">
        <h1 class="heading">Select a Gift card</h1>
        <p class="sub-heading">(You'll choose dollar amount on next screen)</p>
      </div>
      <div class="box-fluid">
        <div class="box-header">
          <h2 class="box-heading">Featured Cards</h2>
          <div class="search-box">
            <input type="text" id="gift-search-bar" placeholder="Search for brands or products" class="search-input" value="${searchTerm || ''}" />
            <button class="btn-search" id="gift-search-btn"><i class="icon icon-magnify"></i></button>
          </div>
          ${clearSearchHtml}
        </div>
        <div class="box-body">${bodyHtml}</div>
        <div class="box-footer">
          <button class="btn-prev" id="btn-prev" ${currentPage <= 1 ? "disabled" : ""}>Prev</button>
          <button class="btn-next" id="btn-next" ${currentPage >= totalPages || !products.length ? "disabled" : ""}>Next</button>
        </div>
      </div>
    </div>`;

    const root = document.getElementById("modalGiftCardSelection1");
    if (!root) return;
    root.innerHTML = html;

    // keep cursor where it was if possible
    const input = document.getElementById("gift-search-bar");
    if (input) {
      const pos = window.lastSearchCursorPosition ?? input.value.length;
      input.focus();
      input.setSelectionRange(pos, pos);
    }
  }

  // ===== Controller =====
  async function doSearchAndRender({ page=1, size=20, query="" } = {}) {
    if (activeFetchController) activeFetchController.abort();
    const ac = new AbortController();
    activeFetchController = ac;

    const root = document.getElementById("modalGiftCardSelection1");
    if (!memCache.data && root) {
      root.innerHTML = '<div class="gift-card-text"><p>Loading gift cards...</p></div>';
    }

    try {
      console.log(`🔍 Searching gift cards: page ${page}, size ${size}, query "${query}"`);
      const data = await ensureDataFast(ac.signal);
      currentQuery = query;
      currentPage = page;
      currentPageSize = size;
      const pageObj = filterAndPaginate(data, query, page, size);
      console.log(`✅ Found ${pageObj.products.length} gift cards (${pageObj.totalCount} total, page ${pageObj.currentPage}/${pageObj.totalPages})`);
      render(pageObj, query);
    } catch (e) {
      if (e.name === 'AbortError') return;
      console.error(e);
      if (root) root.innerHTML = '<div class="gift-card"><p>Unable to load gift cards. Please try again later.</p></div>';
    }
  }

  // ===== Public API =====
  async function GetGiftCards(pageNumber = 1, pageSize = 20, productName = "", productDescription = "") {
    const q = (productName || productDescription || "").trim();
    await doSearchAndRender({ page: pageNumber, size: pageSize, query: q });
  }

  // ===== Delegated events (no jQuery) =====
  // Search click
  delegate(document, "click", "#gift-search-btn", () => {
    const input = document.getElementById("gift-search-bar");
    const value = (input?.value || "").trim();
    if (!value) return;
    window.lastSearchCursorPosition = value.length;
    GetGiftCards(1, currentPageSize, value, value);
  });

  // Search Enter
  delegate(document, "keydown", "#gift-search-bar", (e, el) => {
    if (e.key === "Enter") {
      const value = el.value.trim();
      if (!value) return;
      window.lastSearchCursorPosition = el.selectionStart ?? value.length;
      GetGiftCards(1, currentPageSize, value, value);
    }
  });

  // Debounced input
  delegate(document, "input", "#gift-search-bar", (e, el) => {
    const value = el.value.trim();
    const cursor = el.selectionStart;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      window.lastSearchCursorPosition = cursor ?? value.length;
      GetGiftCards(1, currentPageSize, value, value);
    }, 250);
  });

  // Clear search
  delegate(document, "click", "#clear-search-btn", () => {
    const el = document.getElementById("gift-search-bar");
    if (el) el.value = "";
    window.lastSearchCursorPosition = 0;
    GetGiftCards(1, currentPageSize, "", "");
  });

  // Pagination
  delegate(document, "click", "#btn-next", (_, btn) => {
    if (btn.disabled) return;
    GetGiftCards(currentPage + 1, currentPageSize, currentQuery, currentQuery);
  });
  delegate(document, "click", "#btn-prev", (_, btn) => {
    if (btn.disabled) return;
    GetGiftCards(Math.max(1, currentPage - 1), currentPageSize, currentQuery, currentQuery);
  });

  // Card click
  delegate(document, "click", ".egifter-card a", (e, a) => {
    e.preventDefault();
    const id = a.getAttribute("data-eg-id") || "";
    const denoms = a.getAttribute("data-eg-denoms") || "[]";
    const type = a.getAttribute("data-eg-type") || "";
    const img = a.getAttribute("data-eg-img") || "";
    window.clickvoucher(id, denoms, type, img);
  });

  // Terms click
  delegate(document, "click", ".btn-terms", (_, btn) => {
    const id = btn.getAttribute("data-terms-id");
    window.openterms(id);
  });

  // ===== Existing functions preserved (vanilla) =====
  function clickvoucher(id, denominations, denominationType, image) {
    const denomObj = JSON.parse(denominations);

    // Hide selection modal, show price modal
    hideModalById("modalGiftCardSelection");
    setTimeout(() => showModalById("modalGiftPrice"), 600);

    // Get cart
    fetch("/cart.js")
      .then(r => r.json())
      .then(r => {
        const indices = [];
        // assumes global $digitalGiftCardIds exists
        ($digitalGiftCardIds || []).forEach((valor) => {
          const u = (r.items || []).findIndex((_item) => _item.id === valor);
          if (u >= 0) indices.push(valor);
        });

        const msgContainer = document.querySelector(".js-mdlchk-rows2");
        if (!msgContainer) return;

        if (indices.length > 0) {
          msgContainer.innerHTML = `<p>You can only add one gift card per order</p>`;
          return;
        }

        // Render handlebars template (unchanged expectation)
        const tmplScript = document.getElementById("giftcard-template");
        if (!tmplScript) return;

        const theTemplate = Handlebars.compile(tmplScript.innerHTML);
        msgContainer.innerHTML = theTemplate({});

        // Collect gift prices from list items
        const ul = document.getElementById("gift-options-ul");
        const items = ul ? Array.from(ul.children) : [];
        const giftPrices = items.map(li => ({
          price: Number(li.dataset.price) / 100,
          id: li.dataset.variant
        }));

        const giftImg = document.getElementById("giftImage");
        if (giftImg) giftImg.setAttribute("src", image);

        if ((denominationType || "").includes("Variable")) {
          const firstDenom = denomObj[0];
          const lastDenom = denomObj[denomObj.length - 1];

          giftPrices.forEach((gp) => {
            if (gp.price < firstDenom) {
              const li = ul?.querySelector(`li[data-variant='${gp.id}']`);
              li?.remove();
            }
          });
          giftPrices.forEach((gp) => {
            if (gp.price > lastDenom) {
              const li = ul?.querySelector(`li[data-variant='${gp.id}']`);
              li?.remove();
            }
          });

          const firstVariant = ul?.children?.[0];
          if (firstVariant) {
            const numbergift = document.getElementById("numbergift");
            const addBag = document.getElementById("add_bag");
            if (numbergift) numbergift.value = firstVariant.getAttribute("data-price-format") || "";
            if (addBag) addBag.setAttribute("data-id", firstVariant.getAttribute("data-variant") || "");
          }
        } else {
          // Fixed
          $$(".value-button").forEach(el => (el.style.display = "none"));
          giftPrices.forEach((gp) => {
            if (!denomObj.includes(gp.price)) {
              const li = ul?.querySelector(`li[data-variant='${gp.id}']`);
              li?.remove();
            }
          });
          const firstVariant = ul?.children?.[0];
          if (firstVariant) {
            const numbergift = document.getElementById("numbergift");
            const addBag = document.getElementById("add_bag");
            if (numbergift) numbergift.value = firstVariant.getAttribute("data-price-format") || "";
            if (addBag) addBag.setAttribute("data-id", firstVariant.getAttribute("data-variant") || "");
          }
        }

        const gcContent = document.querySelector(".gifcard-content");
        if (gcContent) {
          gcContent.insertAdjacentHTML(
            "beforeend",
            `<input id="productId" type="hidden" value="${id}"><input id="productImage" type="hidden" value="${image}">`
          );
        }
      });
  }

  function openterms(id) {
    const container = document.querySelector(`#${CSS.escape(id)}`);
    const redemptionNote = container?.querySelector("#redemptionNote")?.innerHTML || "";
    const terms = container?.querySelector("#terms")?.innerHTML || "";

    const modalDialog = document.querySelector("#modalGiftCardSelection .modal-dialog") || document.body;
    const t = document.createElement("div");
    t.id = "termModal";
    t.style.cssText = "width:100%;height:100%;position:absolute;background:white;z-index:999;padding:1rem clamp(0.15rem,3rem,8.5rem);";
    t.innerHTML = `
      <div style="padding-top:clamp(0px, 9rem, 10rem);">
        <div><b>Redemption Note :</b> ${redemptionNote}</div>
        <div><b>Terms :</b> ${terms}</div>
        <button id="btn-close-terms">Close</button>
      </div>
    `;
    modalDialog.prepend(t);

    const closeBtn = document.getElementById("btn-close-terms");
    if (closeBtn) closeBtn.addEventListener("click", closeDisclaimer, { once: true });
  }

  function closeDisclaimer() {
    const el = document.getElementById("termModal");
    if (el) el.remove();
  }

  // ===== Public export =====
  window.GetGiftCards = GetGiftCards;
  window.clickvoucher = clickvoucher;
  window.openterms = openterms;
  window.closeDisclaimer = closeDisclaimer;

  // ===== Warm start =====
  document.addEventListener("DOMContentLoaded", () => {
    // First render (cache-first approach)
    setTimeout(() => {
      doSearchAndRender({ page: 1, size: 20, query: "" });
    }, 300);
  });
})();
