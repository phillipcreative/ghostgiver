/**
 * Opens one landing-page FAQ item and closes the others.
 * @param {HTMLButtonElement} button
 */
function handleLandingFaqToggle(button) {
  const item = button.closest('.gg-faq__item');
  const list = item.parentElement;
  const willOpen = !item.classList.contains('is-open');

  list.querySelectorAll('.gg-faq__item').forEach((entry) => {
    entry.classList.remove('is-open');
    const toggle = entry.querySelector('.gg-faq__toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });

  if (!willOpen) return;

  item.classList.add('is-open');
  button.setAttribute('aria-expanded', 'true');
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.gg-faq__toggle');
  if (!button) return;
  handleLandingFaqToggle(button);
});

/**
 * Routes clicks to open a video modal, or to close it via its close button or backdrop.
 * @param {MouseEvent} event
 */
function handleLandingVideoClick(event) {
  const trigger = event.target.closest('[data-gg-video-open]');
  if (trigger) {
    handleLandingVideoOpen(trigger);
    return;
  }

  const closeButton = event.target.closest('.gg-video-modal__close');
  if (closeButton) {
    closeButton.closest('.gg-video-modal').close();
    return;
  }

  if (event.target.classList.contains('gg-video-modal')) event.target.close();
}

/**
 * Opens the video modal a trigger controls and starts playback.
 * @param {HTMLElement} trigger
 */
function handleLandingVideoOpen(trigger) {
  const modal = document.getElementById(trigger.getAttribute('aria-controls'));
  if (!modal || typeof modal.showModal !== 'function') return;

  modal.showModal();

  const iframe = modal.querySelector('iframe[data-src]');
  if (iframe) iframe.src = iframe.dataset.src;

  const video = modal.querySelector('video');
  if (video) video.play().catch(() => {});
}

/**
 * Stops playback once a video modal closes (close button, backdrop or Escape).
 * @param {Event} event
 */
function handleLandingVideoClose(event) {
  const modal = event.target;
  if (!modal.classList || !modal.classList.contains('gg-video-modal')) return;

  const iframe = modal.querySelector('iframe[data-src]');
  if (iframe) iframe.removeAttribute('src');

  const video = modal.querySelector('video');
  if (video) video.pause();
}

document.addEventListener('click', handleLandingVideoClick);
document.addEventListener('close', handleLandingVideoClose, true);
