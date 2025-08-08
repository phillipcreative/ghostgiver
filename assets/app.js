"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }
      var f = (n[o] = { exports: {} });
      t[o][0].call(
        f.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        f,
        f.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        window.mobileCheck = function () {
          var i = !1;
          return (
            (function (a) {
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  a.substr(0, 4)
                )) &&
                (i = !0);
            })(navigator.userAgent || navigator.vendor || window.opera),
            i
          );
        };
        /*!
         * jQuery.ellipsis
         * http://github.com/jjenzz/jquery.ellipsis
         * --------------------------------------------------------------------------
         * Copyright (c) 2013 J. Smith (@jjenzz)
         * Dual licensed under the MIT and GPL licenses:
         * http://www.opensource.org/licenses/mit-license.php
         * http://www.gnu.org/licenses/gpl.html
         */
        (function (e) {
          "use strict";
          if (typeof define === "function" && define.amd) {
            define(["jquery"], e);
          } else {
            e(jQuery);
          }
        })(function (e) {
          "use strict";
          function i(i, s) {
            function g() {
              o.text = o.$cont.text();
              o.opts.ellipLineClass = o.opts.ellipClass + "-line";
              o.$el = e('<span class="' + o.opts.ellipClass + '" />');
              o.$el.text(o.text);
              o.$cont.empty().append(o.$el);
              y();
            }
            function y() {
              if (typeof o.opts.lines === "number" && o.opts.lines < 2) {
                o.$el.addClass(o.opts.ellipLineClass);
                return;
              }
              d = o.$cont.height();
              if (o.opts.lines === "auto" && o.$el.prop("scrollHeight") <= d) {
                return;
              }
              if (!f) {
                return;
              }
              v = e.trim(w(o.text)).split(/\s+/);
              o.$el.html(n + v.join(" " + n) + "</span>");
              o.$el.find("span").each(f);
              if (l != null) {
                b(l);
              }
            }
            function b(e) {
              v[e] = '<span class="' + o.opts.ellipLineClass + '">' + v[e];
              v.push("</span>");
              o.$el.html(v.join(" "));
            }
            function w(e) {
              return String(e).replace(/[&<>"'\/]/g, function (e) {
                return m[e];
              });
            }
            var o = this,
              u = 0,
              a = [],
              f,
              l,
              c,
              h,
              p,
              d,
              v,
              m;
            m = {
              "&": "&",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;",
              "`": "&#x60;",
            };
            o.$cont = e(i);
            o.opts = e.extend({}, r, s);
            if (o.opts.lines === "auto") {
              var E = function E(t, n) {
                var r = e(n),
                  i = r.position().top;
                p = p || r.height();
                if (i === h) {
                  a[u].push(r);
                } else {
                  h = i;
                  u += 1;
                  a[u] = [r];
                }
                if (i + p > d) {
                  l = t - a[u - 1].length;
                  return false;
                }
              };
              f = E;
            }
            if (typeof o.opts.lines === "number" && o.opts.lines > 1) {
              var S = function S(t, n) {
                var r = e(n),
                  i = r.position().top;
                if (i !== h) {
                  h = i;
                  u += 1;
                }
                if (u === o.opts.lines) {
                  l = t;
                  return false;
                }
              };
              f = S;
            }
            if (o.opts.responsive) {
              var x = function x() {
                a = [];
                u = 0;
                h = null;
                l = null;
                o.$el.html(w(o.text));
                clearTimeout(c);
                c = setTimeout(y, 100);
              };
              e(window).on("resize." + t, x);
            }
            g();
          }
          var t = "ellipsis",
            n = '<span style="white-space: nowrap;">',
            r = { lines: "auto", ellipClass: "ellip", responsive: false };
          e.fn[t] = function (n) {
            return this.each(function () {
              try {
                e(this).data(t, new i(this, n));
              } catch (r) {
                if (window.console) {
                  console.error(t + ": " + r);
                }
              }
            });
          };
        });

        // PLUGINS
        $.fn.megaMenu = function () {
          var $menu = $(this);
          var $window = $(window);
          var $submenu = $(".sub-menu", $menu);
          var $wrapper = $("#blackOut");

          // Megamenu Max Height
          function setMaxHeight(wHeight) {
            var maxH = $("body").hasClass("hdr-sticky")
              ? $(window).height() - $(".header-sticky").height()
              : $(window).height() -
              $(".page-header").height() -
              $(".page-header").offset().top;
            if (!$menu.hasClass("vertical")) {
              $submenu.each(function () {
                var el = $(this);
                el.find(".container").css({
                  "max-height": maxH + "px",
                });
              });
              //$('.slick-initialized', $menu).slick('setPosition');
            }
            if (!$menu.is(":visible")) {
              $("body").addClass("has-mobilemenu");
            } else {
              $("body").removeClass("has-mobilemenu");
            }
          }

          // check menu type
          function checkMenu() {
            if (!$menu.is(":visible")) {
              $("body").addClass("has-mobilemenu");
            } else {
              $("body").removeClass("has-mobilemenu");
            }
          }

          $.fn.hasScrollBar = function () {
            return this.get(0).scrollHeight > this.get(0).clientHeight;
          };

          if ($("body").hasClass("touch")) {
            $menu.on("click.megamenu", ".sub-menu a", function (e) {
              var $this = $(this);
              if (!$this.data("firstclick")) {
                $this.data("firstclick", true);
                e.preventDefault();
              }
            });
            $menu.on(
              "click.megamenu",
              "li.mega-dropdown > a,li.simple-dropdown > a",
              function (e) {
                if (!$(this).parent("li").hasClass("hovered")) {
                  setMaxHeight($(window).height());
                  $submenu.find(".container").scrollTop(0);
                  $("li", $menu).removeClass("hovered");
                  $(this).parent("li").addClass("hovered");
                  $menu.data("opened", true);
                  if ($menu.hasClass("blackout") && $(this).next().length) {
                    $wrapper.addClass("overlay");
                  }
                  e.preventDefault();
                } else {
                  // second click go url
                  $wrapper.removeClass("overlay");
                  $(this).parent("li").removeClass("hovered");
                  $menu.removeData("opened");
                  $(".sub-menu a", $menu).removeData("firstclick");
                }
              }
            );
            $menu.on("click.megamenu", function () {
              event.stopPropagation();
            });
            $wrapper.on("click", function () {
              if ($menu.data("opened")) {
                $("li", $menu).removeClass("hovered");
                $(".sub-menu a", $menu).removeData("firstclick");
                $wrapper.removeClass("overlay");
              }
            });
          } else {
            $menu
              .on(
                "mouseenter",
                "li.mega-dropdown > a,li.simple-dropdown > a",
                function () {
                  var $this = $(this);
                  $submenu.find(".container").scrollLock();
                  setMaxHeight($(window).height());
                  $submenu.find(".container").scrollTop(0);
                  $this.parent("li").addClass("hovered");
                  if ($menu.hasClass("blackout") && $this.next().length) {
                    $wrapper.addClass("overlay");
                  }
                }
              )
              .on(
                "mouseleave",
                "li.mega-dropdown, li.simple-dropdown",
                function () {
                  var $this = $(this);
                  $this.closest("li").removeClass("noscroll");
                  $wrapper.removeClass("overlay");
                  $this.closest("li").removeClass("hovered");
                }
              )
              .on(
                "mouseleave",
                "li.mega-dropdown .sub-menu > .container",
                function () {
                  var $this = $(this);
                  $this.closest("li").removeClass("noscroll");
                  $wrapper.removeClass("overlay");
                  $this.closest("li").removeClass("hovered");
                }
              );
          }

          //	function menuTreeActive(){
          //		$menu.find('.active, .menu-current').each(function () {
          //			var $this = $(this);
          //			$this.parents('.category-links li').addClass('active');
          //			$this.parents('.mega-dropdown, .simple-dropdown').addClass('menu-current');
          //			$this.parents('.category-links').prev('.category-title').find('a').addClass('menu-current');
          //		})
          //	}
          //	menuTreeActive()

          // Dropdowns
          $("li", $menu)
            .on("mouseenter", function (e) {
              var $this = $(this).addClass("hoverd");
              if ($(".sub-level", $this).length) {
                var $elm = $(".sub-level:first", this),
                  windowW = $window.width(),
                  windowH = $window.height(),
                  menuItemPos = $this.position();

                if ($this.closest(".mega-dropdown").length) {
                  if (!$("body").hasClass("rtl")) {
                    $elm.css({
                      top: menuItemPos.top,
                      left: menuItemPos.left + Math.round($this.outerWidth()),
                    });
                  } else {
                    $elm.css({
                      top: menuItemPos.top,
                      left: menuItemPos.left - $elm.outerWidth(),
                    });
                  }
                }
                var isXvisible = $("body").hasClass("rtl")
                  ? $elm.offset().left >= 0
                  : $elm.offset().left + $elm.width() <= windowW;

                if (!isXvisible) {
                  $this.addClass("to-right");
                } else {
                  $this.removeClass("to-right");
                }
                var isYvisible =
                  windowH +
                  $window.scrollTop() -
                  ($elm.offset().top + $elm.outerHeight());
                if (isYvisible < 0) {
                  $elm.css({
                    "margin-top": isYvisible + "px",
                  });
                }
              }
            })
            .on("mouseleave", function (e) {
              var $elm = $(".sub-level", this);
              var $this = $(this).removeClass("to-right").removeClass("hoverd");
              $elm.css({
                "margin-top": "",
              });
            });

          $(".category-links li", $menu).on("mouseenter", function (e) {
            if ($("ul", this).length) {
              var $elm = $("ul:first", this),
                windowW = $("body").width(),
                isEntirelyVisible =
                  $elm.offset().left + $elm.width() <= windowW;
              if ($("body").hasClass("rtl")) {
                isEntirelyVisible = $elm.offset().left >= 0;
              }
              if (!isEntirelyVisible) {
                $(this).addClass("to-right");
              } else {
                setTimeout(function () {
                  $(this).removeClass("to-right");
                }, 0);
              }
            }
          });

          checkMenu();

          $(window).on("resize", function () {
            checkMenu();
          });
        };
        // footer collapse
        $.fn.footerCollapse = function () {
          var $collapsed = this;
          $(".title", $collapsed).on("click", function (e) {
            e.preventDefault;
            $(this).closest(".collapsed-mobile").toggleClass("open");
          });
        };
        // mark selected filters block
        $.fn.blockSelectedMark = function () {
          var $block = this;

          function markSelected(block) {
            var $this = block;
            if ($this.find("li.active").length) {
              $this.addClass("selected");
            } else {
              $this.removeClass("selected");
            }
          }
          $block.each(function () {
            markSelected($(this));
          });
          $("li > a", $block).unbind("click.blockSelectedMark");
          $("li > a", $block).on("click.blockSelectedMark", function (e) {
            if ($(".filter-col").hasClass("no-ajax-filter")) return;
            var $this = $(this);
            e.preventDefault();
            $this.parent().toggleClass("active");
            markSelected($this.closest(".sidebar-block"));
          });
        };
        // hide shop by if empty
        $.fn.hideShopBy = function () {
          var $content = this,
            $filters = $(".selected-filters", $content);
          if (!$filters.length || $filters.html().trim() === "")
            $content.closest(".sidebar-block-top").hide();
        };
        // sidebar collapse
        $.fn.blockCollapse = function () {
          var $collapsed = this,
            slidespeed = 250;

          $(".block-content", $collapsed).each(function () {
            if ($(this).parent().is(".open")) {
              $(this).slideDown(0);
            }
          });
          $(".block-title").unbind("click.blockCollapse");
          $(".block-title", $collapsed).on("click.blockCollapse", function (e) {
            e.preventDefault;
            var $this = $(this),
              $thiscontent = $this.next(".block-content");
            if ($this.parent().is(".open")) {
              $this.parent().removeClass("open");
              $thiscontent.slideUp(slidespeed);
            } else {
              $this.parent().addClass("open");
              $thiscontent.slideDown(slidespeed);
            }
          });
        };
        // sidebar accordion
        $.fn.blockCollapseAccordion = function () {
          var $collapsed = this,
            slidespeed = 250;
          $(".block-content", $collapsed).each(function () {
            if ($(this).parent().is(".open")) {
              $(this).slideDown(0);
            }
          });
          $(".block-title").unbind("click.blockCollapseAccordion");
          $(".block-title", $collapsed).on(
            "click.blockCollapseAccordion",
            function (e) {
              e.preventDefault;
              var $this = $(this),
                $thiscontent = $this.next(".block-content");
              if ($this.parent().is(".open")) {
                $this.parent().removeClass("open");
                $thiscontent.slideUp(slidespeed);
              } else {
                $this
                  .closest(".filter-col-content")
                  .find(".sidebar-block.collapsed")
                  .removeClass("open");
                $this
                  .closest(".filter-col-content")
                  .find(".sidebar-block.collapsed .block-content")
                  .slideUp(slidespeed);
                $this.parent().addClass("open");
                $thiscontent.slideDown(slidespeed);
              }
              setTimeout(function () {
                $(".filter-col.fixed").fixedSidebar();
              }, slidespeed);
            }
          );
        };
        // fixed sidebar
        $.fn.fixedSidebar = function () {
          var $sidebar = this.parent(),
            $container = $(".filter-container"),
            $sidebarscroll = $(".fixed-scroll", $sidebar);
          // fixed markers
          var $ymin = $sidebar,
            $ymax = $(".ymax"),
            $fstart = $(".fstart"),
            $fend = $(".fend"),
            delta = 10;

          function checkFixed() {
            var scrollY = $(window).scrollTop();
            if (!$sidebar.is(".is-fixed")) {
              if (scrollY > $ymin.offset().top) {
                if ($fend.offset().top < $ymax.offset().top - delta) {
                  $sidebar.addClass("is-fixed");
                  if ($fend.offset().top > $ymax.offset().top) {
                    $sidebar.addClass("is-fixed-bottom");
                  }
                }
              }
            } else {
              if (
                $fend.offset().top >= $ymax.offset().top &&
                $fend.offset().top - $fstart.offset().top <
                $ymax.offset().top - scrollY
              ) {
                $sidebar.removeClass("is-fixed-bottom");
              } else if (scrollY > $ymin.offset().top) {
                if ($fend.offset().top >= $ymax.offset().top) {
                  $sidebar.addClass("is-fixed-bottom");
                }
              } else $sidebar.removeClass("is-fixed is-fixed-bottom");
            }

            if ($container.data("hidden")) {
              $container
                .animate(
                  {
                    opacity: "1",
                  },
                  1000
                )
                .removeData("hidden");
            }
          }

          function iniFixedSidebar() {
            if (
              $(window).scrollTop() > $ymin.offset().top &&
              !$("body").data("checkstart")
            ) {
              $container.data("hidden", true).css({
                opacity: "0",
              });
              $("body").data("checkstart", true);
            } else $("body").data("checkstart", true);
            $(window).unbind("scroll.fixedsidebar");
            $sidebar.removeClass("is-fixed is-fixed-bottom");
            $container.css({
              left: "",
              width: "",
            });
            var windowWidth = $(window).width(),
              windowHeight = $(window).height();
            if (windowWidth > 991) {
              $sidebarscroll.css({
                "max-height": windowHeight + "px",
              });
              $container.css({
                left: $container.offset().left + "px",
                width: $container.width() + "px",
              });
              if ($ymax.offset().top - $fend.offset().top > 50) {
                $(window).bind("scroll.fixedsidebar", function (e) {
                  checkFixed();
                });
              }
              checkFixed();
            }
          }
          if (!$("body").hasClass("touch")) {
            iniFixedSidebar();
            $(window).scroll();
            $(window).bind("resize.fixedsidebar", function () {
              setTimeout(function () {
                iniFixedSidebar();
              }, 2000);
            });
            // hide tooltips on scroll
            $sidebarscroll.bind("scroll", function () {
              $(".dark-tooltip").hide();
            });
            $(window).bind("scroll", function () {
              $(".dark-tooltip").hide();
            });
          }
        };
        // check if filters
        $.fn.isFilters = function () {
          var $filtercol = this,
            $filtercontent = $(".filter-col-content", this),
            $centercol = $filtercol.next(".aside");
          if (!$filtercol.is(":visible")) $filtercol.show();
          $centercol.css({
            width: "",
            float: "",
          });
          if (!$filtercontent.find(".sidebar-block").length) {
            $filtercol.hide();
            $filtercol.closest(".shopify-section").hide();
            $centercol.css({
              width: "100%",
              float: "none",
            });
          }
        };
        // mobile filters
        $.fn.mobileFilter = function () {
          var $mobilefilter = this,
            $toggleFilter = ".filter-col-toggle";

          $(document).on("click", $toggleFilter, function (e) {
            $mobilefilter.toggleClass("active");
            $("body").toggleClass("fixed");
            e.preventDefault();
          });

          $(document).on("click", ".filter-col", function (e) {
            if ($(e.target).hasClass("active")) {
              $mobilefilter.removeClass("active");
              $("body").removeClass("fixed");
              e.preventDefault();
            }
          });
        };
        // mobile menu
        $.fn.mobileMenu = function (mobileMenuBrp, mobileMenuMini) {
          var $mobilemenu = $(this),
            $toggleMenu = $(".mobilemenu-toggle"),
            $mobileCaret = $("ul.nav li .arrow", $mobilemenu),
            $mobileLink = $("ul.nav li > a", $mobilemenu),
            $header = $(".page-header");
          $toggleMenu.on("click.mobileMenu", function () {
            $mobilemenu.toggleClass("active");
            $("body").toggleClass("fixed");
            return false;
          });
          $mobilemenu.on("click.mobileMenu", function (e) {
            if ($(e.target).is($mobilemenu)) {
              $mobilemenu.toggleClass("active");
              $("body").toggleClass("fixed");
              e.preventDefault();
            }
          });

          function copyToMenu() {
            if (mobileMenuMini == true) {
              $(".header-links-1 > *:not(.header-cart)")
                .detach()
                .appendTo(".mobilemenu-links-1");
              $(".header-links-2 > *:not(.header-cart)")
                .detach()
                .appendTo(".mobilemenu-links-2");
            }
          }
          function copyToHeader() {
            if (mobileMenuMini == true) {
              $(".mobilemenu-links-1")
                .children()
                .detach()
                .prependTo(".header-links-1");
              $(".mobilemenu-links-2")
                .children()
                .detach()
                .prependTo(".header-links-2");
            }
          }

          function mobileEvent() {
            $mobileCaret.on("click.mobileMenu", function (e) {
              e.preventDefault();
              var $parent = $(this).parent();
              if ($parent.hasClass("submenu-open")) {
                $("li.submenu-open ul", $parent).slideUp(200);
                $("li", $parent).removeClass("submenu-open");
                $parent.removeClass("submenu-open");
                $("> ul", $parent).slideUp(200);
                $parent.removeData("firstclick");
              } else {
                $parent.addClass("submenu-open");
                $(" > ul", $parent).slideDown(200);
                $parent.data("firstclick", true);
              }
            });
            if ($mobilemenu.hasClass("dblclick")) {
              $mobileLink.on("click.mobileMenu", function (e) {
                e.preventDefault();
                var $parent = $(this).parent();
                if (!$parent.data("firstclick") && $parent.find("ul").length) {
                  $parent.addClass("submenu-open");
                  $(" > ul", $parent).slideDown(200);
                  $parent.data("firstclick", true);
                } else {
                  var href = $(this).attr("href"),
                    target = $(this).attr("target")
                      ? $(this).attr("target")
                      : "_self";
                  window.open(href, target);
                  $parent.removeData("firstclick");
                }
              });
            }
          }

          var windowWidth = $(window).width();

          if (windowWidth <= mobileMenuBrp) {
            mobileEvent();
            copyToMenu();
          } else {
            copyToHeader();
          }

          var prevWindow = windowWidth;

          $(window).on("resize", function () {
            var currentWindow = window.innerWidth || $window.width();
            if (currentWindow != prevWindow) {
              setTimeout(function () {
                $mobileLink.unbind("click.mobileMenu");
                $mobileCaret.unbind("click.mobileMenu");
                if (currentWindow > mobileMenuBrp) {
                  $("body").removeClass("fixed");
                  $mobilemenu.removeClass("active");
                  copyToHeader();
                } else {
                  mobileEvent();
                  copyToMenu();
                }
              }, 500);
              prevWindow = currentWindow;
            }
          });
        };
        // spy menu

        $.fn.spyMenu = function () {
          var countSpy = $(this).length;
          if ($(this).length) {
            $("body").addClass("has-spymenu");
            $(this).each(function () {
              var $spyMenu = $(this),
                $toggleMenu = $(".js-spy-open, .js-spy-close", $spyMenu),
                $caret = $("ul.nav li .arrow", $spyMenu),
                $link = $("ul.nav li > a", $spyMenu),
                breikpoint = $spyMenu.attr("data-close-when")
                  ? $spyMenu.attr("data-close-when")
                  : 1580;

              $spyMenu.scrollLock();

              $spyMenu
                .on("mouseenter", function () {
                  $spyMenu.addClass("scrollLock");
                })
                .on("mouseleave", function () {
                  $spyMenu.removeClass("scrollLock");
                });

              $toggleMenu.on("click.spyMenu", function () {
                if ($spyMenu.hasClass("active")) {
                  spyClose();
                } else {
                  $spyMenu.addClass("active");
                }
                return false;
              });

              function openOnStart() {
                if (
                  $(window).width() >= breikpoint &&
                  $spyMenu.attr("data-open") === "true" &&
                  !$(".page-header").hasClass("transparent")
                ) {
                  $spyMenu.addClass("active");
                } else $spyMenu.removeClass("active");
              }

              function spyPos() {
                var topOffset =
                  $(".page-header").height() + $(".page-header").offset().top;
                $spyMenu.css({
                  top: topOffset + 20,
                  "max-height": $(window).height() - topOffset - 50,
                  opacity: "1",
                });
                $spyMenu.show();
              }

              function spyCollapse() {
                //setTimeout(function () {
                $spyMenu.find("ul.nav li .submenu-open").each(function () {
                  $(this).removeClass("submenu-open").find("ul").slideUp(300);
                });
                //}, 1000);
              }

              function spyClose() {
                spyCollapse();
                $spyMenu.removeClass("scrollLock");
                $spyMenu.removeClass("active");
                if ($("#newsLetterCheckBox", $spyMenu).is(":checked")) {
                  $spyMenu.addClass("mustRemoved");
                  setTimeout(function () {
                    $spyMenu.remove();
                  }, 500);
                }
              }

              function spyEvent() {
                $caret.on("click.spyMenu", function (e) {
                  e.preventDefault();
                  var $parent = $(this).parent();
                  if ($parent.hasClass("submenu-open")) {
                    $("li.submenu-open ul", $parent).slideUp(200);
                    $("li", $parent).removeClass("submenu-open");
                    $parent.removeClass("submenu-open");
                    $("> ul", $parent).slideUp(200);
                    $parent.removeData("firstclick");
                  } else {
                    $parent.addClass("submenu-open");
                    $(" > ul", $parent).slideDown(200);
                    $parent.data("firstclick", true);
                  }
                });
                if ($spyMenu.hasClass("dblclick")) {
                  $link.on("click.spyMenu", function (e) {
                    e.preventDefault();
                    var $parent = $(this).parent();
                    if (
                      !$parent.data("firstclick") &&
                      $parent.find("ul").length
                    ) {
                      $parent.addClass("submenu-open");
                      $(" > ul", $parent).slideDown(200);
                      $parent.data("firstclick", true);
                    } else {
                      var href = $(this).attr("href"),
                        target = $(this).attr("target")
                          ? $(this).attr("target")
                          : "_self";
                      window.open(href, target);
                      $parent.removeData("firstclick");
                    }
                  });
                }
                $(window).on("scroll", function () {
                  if (
                    $spyMenu.hasClass("active") &&
                    !$spyMenu.hasClass("scrollLock")
                  ) {
                    setTimeout(function () {
                      spyClose();
                    }, 300);
                  }
                });
              }

              if ($spyMenu.hasClass("spy-menu")) {
                if ($spyMenu.find(".nav li").length) {
                  spyPos();
                  spyEvent();
                  openOnStart();
                } else {
                  $spyMenu.hide();
                  if (countSpy == 1) {
                    $("body").removeClass("has-spymenu");
                  }
                }
                //					$spyMenu.find('.active').each(function () {
                //						$(this).parents('.nav li').addClass('active');
                //					})
              } else {
                if ($spyMenu.hasClass("spy-dona")) {
                  $spyMenu.show();
                  spyEvent();
                  spyPos();

                  var topOffset =
                    $(".page-header").height() + $(".page-header").offset().top;
                  $(".spy-dona").css({
                    top: topOffset + 80,
                    "max-height": $(window).height() - topOffset - 20,
                    opacity: "1",
                  });
                } else {
                  $spyMenu.show();
                  spyEvent();
                  spyPos();
                }
              }

              $(window).on(
                "resize",
                debouncer(function (e) {
                  if ($spyMenu.hasClass("spy-menu")) {
                    openOnStart();
                  }
                  spyPos();
                })
              );
            });
          }
        };
        // mobile minicart
        $.fn.mobileMinicart = function (mobileMenuBrp) {
          var $mobilecart = this,
            $mobilecartscroll = $(".block-minicart", $mobilecart),
            $toggleCart = $("> a", $mobilecart),
            $closeCart = $(".minicart-title", $mobilecart),
            $dropdown = $(".dropdown-container", $mobilecart),
            wHeight = $(window).height(),
            $menu = $(".megamenu"),
            $header = $(".page-header");

          var windowWidth = $(window).width();

          // Minicart Max Height
          function setMaxHeight(wHeight) {
            var cartH;
            $dropdown.scrollTop(0);
            if (!$("body").hasClass("hdr-sticky"))
              cartH = wHeight - $toggleCart.offset().top - $toggleCart.height();
            else cartH = wHeight - $header.height();
            $dropdown.css({
              "max-height": cartH + "px",
            });
            $mobilecartscroll.css({
              "max-height": cartH + "px",
            });
          }

          function eventsIni(windowWidth, mobileMenuBrp) {
            if (windowWidth < mobileMenuBrp) {
              if (!$mobilecart.data("mobile")) {
                $dropdown.scrollLock("disable");
                $mobilecart.unbind(".mobileMinicart");
                $toggleCart.unbind(".mobileMinicart");
                $toggleCart.on("click.mobileMinicart", function (e) {
                  if ($mobilecart.hasClass("active")) {
                    $dropdown.css({
                      "max-height": "0",
                    });
                    $mobilecartscroll.css({
                      "max-height": "0",
                    });
                    $mobilecart.removeClass("active");
                    $header.data("cartopen", false);
                    $("body").toggleClass("fixed");
                    return false;
                  } else {
                    setMaxHeight($(window).height());
                    $mobilecart.addClass("active");
                    $header.data("cartopen", true);
                    $("body").toggleClass("fixed");
                    return false;
                  }
                });
                $closeCart.on("click.mobileMinicart", function (e) {
                  $dropdown.css({
                    "max-height": "0",
                  });
                  $mobilecartscroll.css({
                    "max-height": "0",
                  });
                  $mobilecart.removeClass("active");
                  $header.data("cartopen", false);
                  $("body").toggleClass("fixed");
                  return false;
                });
                $dropdown.on("click.mobileMinicart", function (e) {
                  if ($(e.target).is($dropdown)) {
                    $mobilecart.removeClass("active");
                    $header.data("cartopen", false);
                    $("body").toggleClass("fixed");
                    e.preventDefault();
                  }
                });
                $mobilecart.data("mobile", true);
              }
            } else {
              $toggleCart.unbind("click.mobileMinicart");
              $closeCart.unbind("click.mobileMinicart");
              $mobilecart.unbind("click.mobileMinicart");
              $mobilecart
                .on("mouseenter.mobileMinicart", function () {
                  $dropdown.scrollLock();
                  $mobilecartscroll.scrollTop(0);
                  $mobilecart.data("open", true);
                  setMaxHeight($(window).height());
                  $header.data("cartopen", true);
                })
                .on("mouseleave.mobileMinicart", function () {
                  $dropdown.css({
                    "max-height": "",
                  });
                  $mobilecartscroll.css({
                    "max-height": "",
                  });
                  $header.data("cartopen", false);
                });
              $mobilecart.removeData("mobile");
            }
          }

          eventsIni(windowWidth, mobileMenuBrp);

          var prevWindow = windowWidth;

          $(window).on("resize", function () {
            var currentWindow = $(window).width();
            if (currentWindow != prevWindow) {
              setTimeout(function () {
                $mobilecart.removeData("setHeight");
                eventsIni(currentWindow);
              }, 500);
              prevWindow = currentWindow;
            }
          });
        };
        // Resize window
        $.fn.otherResizeW = function () {
          $(window).scroll();
          if ($(".filter-col.fixed").length) {
            $(".filter-col.fixed").fixedSidebar();
          }
          if ($(".autosize-text").length) {
            $(".autosize-text").each(function () {
              var $this = $(this);
              var fontratio = parseInt($this.attr("data-fontratio"), 1);
              $this.flowtype({
                fontRatio: fontratio,
              });
            });
          }
          if ($(".block.parallax").length) {
            $(window).trigger("resize.px.parallax");
          }
          setTimeout(function () {
            $(".slick-initialized").slick("setPosition");
          }, 100);
          makeEqual();
          if ($(".js-main-image-zoom").length) {
            $(".zoomContainer").remove();
            $(".js-main-image-zoom").css({
              height: "",
            });
            setTimeout(function () {
              productZoom(".main-image-holder");
              $(".js-main-image-zoom").css({
                height: $(".js-main-image-zoom").height(),
              });
            }, 100);
          }
        };
        $.fn.otherResizeH = function () {
          setTimeout(function () {
            setSliderPad(
              ".page-header",
              ".bnslider-text-content",
              ".header-topline"
            );
            $(".slick-initialized.slick-vertical").slick("setPosition");
          }, 100);
        };

        // sticky header - hide when scroll down

        $.fn.stickyHeaderSmart = function () {
          var $header = this,
            $body = $("body"),
            $nav = $(".megamenu"),
            isScroll = false,
            lastScrollTop = 0,
            delta = 10,
            offsetAdd = 300,
            stickyH,
            headerH,
            menuW,
            $hdrCart = $(".header-cart-holder"),
            $hdrCartM = $(".header-cart-holder > a"),
            $hdrCartSticky = $(".header-cart-sticky-holder"),
            $hdrLogo = $(".header-logo"),
            $hdrLogoSticky = $(".header-logo-sticky-holder"),
            $hdrNav = $(".navbar"),
            $hdrNavM = $(".navbar .menu-toggle"),
            $hdrNavSticky = $(".header-nav-sticky-holder"),
            $headerSticky = $(".header-sticky");

          function setHeigth() {
            $(".nav", $nav).css({
              width: "",
            });
            $headerSticky.removeClass("is-sticky st-visible");
            $body.removeClass("hdr-sticky");
            stickyH = $header.height() + $header.offset().top + offsetAdd;
            menuW = $nav.width();
            if ($header.hasClass("page-header-variant-1")) {
              $(".nav", $nav).css({
                width: menuW + "px",
              });
            }
            if ($("body").hasClass("has-mobilemenu")) {
              delta = 10;
              if (!$headerSticky.hasClass("mobile-type")) {
                if ($hdrCartSticky.html().length) {
                  $hdrCartSticky.children().detach().appendTo($hdrCart);
                }
                if ($hdrNavSticky.html().length) {
                  $hdrNavSticky.children().detach().appendTo($hdrNav);
                }
              } else {
                $hdrCartSticky.empty();
                $hdrNavSticky.empty();
              }
              $hdrCartM.clone(true).appendTo($hdrCartSticky);
              $hdrNavM.clone(true).appendTo($hdrNavSticky);
              $headerSticky.addClass("mobile-type");
            } else {
              delta = 50;
              if ($headerSticky.hasClass("mobile-type")) {
                $hdrCartSticky.empty();
                $hdrNavSticky.empty();
              }
              $headerSticky.removeClass("mobile-type");
            }
          }

          setHeigth();

          $(window).on("scroll", function () {
            if (!isScroll) {
              isScroll = true;
              setTimeout(function () {
                hasScrolled();
                isScroll = false;
              }, 50);
            }
          });

          var prevWindow = window.innerWidth || $(window).width();

          $(window).on("resize", function () {
            var currentWindow = window.innerWidth || $(window).width();
            if (currentWindow != prevWindow) {
              setHeigth();
              hasScrolled();
              prevWindow = currentWindow;
            }
          });

          function hasScrolled() {
            if ($header.data("cartopen")) return;
            var st = getCurrentScroll();
            if (Math.abs(lastScrollTop - st) <= delta) return;
            if (st <= stickyH) {
              // Hide On Scroll Up Start
              if ($headerSticky.hasClass("is-sticky")) {
                $body.removeClass("hdr-sticky");
                if (!$("body").hasClass("has-mobilemenu")) {
                  $hdrCartSticky.children().detach().appendTo($hdrCart);
                  $hdrNavSticky.children().detach().appendTo($hdrNav);
                }
                $headerSticky.removeClass("is-sticky st-visible");
              }
            } else if (st > lastScrollTop) {
              if (st > stickyH && !$headerSticky.hasClass("st-hidden")) {
                $body.removeClass("hdr-sticky");
                // Hide On Scroll Down
                if ($headerSticky.hasClass("st-visible")) {
                  $headerSticky.removeClass("st-visible").addClass("st-hidden");
                } else {
                  $headerSticky.addClass("is-sticky st-hidden");
                }
              }
            } else if (st <= lastScrollTop) {
              if (!$headerSticky.hasClass("st-visible")) {
                // Scroll Up
                $headerSticky
                  .removeClass("st-hidden")
                  .addClass("st-visible is-sticky");
                $hdrCart.hasClass("header-cart-empty")
                  ? $hdrCartSticky.addClass("header-cart-empty")
                  : $hdrCartSticky.removeClass("header-cart-empty");
                if (!$("body").hasClass("has-mobilemenu")) {
                  $header
                    .children(".container")
                    .first()
                    .css({ height: $header.height() });
                  $hdrCart.children().detach().appendTo($hdrCartSticky);
                  $hdrNav.children().detach().appendTo($hdrNavSticky);
                }
                $body.addClass("hdr-sticky");
              }
            }
            lastScrollTop = st;
          }

          function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
          }
        };

        // sticky header - always fixed
        $.fn.stickyHeader = function () {
          var $header = this,
            $body = $("body"),
            $megamenu = $(".megamenu"),
            $nav = $(".nav", $megamenu),
            offsetAdd = 100,
            stickyH,
            menuW,
            $hdrCart = $(".header-cart-holder"),
            $hdrCartM = $(".header-cart-holder > a"),
            $hdrCartSticky = $(".header-cart-sticky-holder"),
            $hdrLogo = $(".header-logo"),
            $hdrLogoSticky = $(".header-logo-sticky-holder"),
            $hdrNav = $(".navbar"),
            $hdrNavM = $(".navbar .menu-toggle"),
            $hdrNavSticky = $(".header-nav-sticky-holder"),
            $headerSticky = $(".header-sticky");

          function setHeigth() {
            $(".nav", $nav).css({
              width: "",
            });
            $headerSticky.removeClass("is-sticky");
            $body.removeClass("hdr-sticky");
            stickyH = $header.height() + $header.offset().top + offsetAdd;
            menuW = $megamenu.width();
            if ($header.hasClass("page-header-variant-1")) {
              $(".nav", $nav).css({
                width: menuW + "px",
              });
            }
            if ($("body").hasClass("has-mobilemenu")) {
              if (!$headerSticky.hasClass("mobile-type")) {
                if ($hdrCartSticky.html().length) {
                  $hdrCartSticky.children().detach().appendTo($hdrCart);
                }
                if ($hdrNavSticky.html().length) {
                  $hdrNavSticky.children().detach().appendTo($hdrNav);
                }
              } else {
                $hdrCartSticky.empty();
                $hdrNavSticky.empty();
              }
              $hdrCartM.clone(true).appendTo($hdrCartSticky);
              $hdrNavM.clone(true).appendTo($hdrNavSticky);
              $headerSticky.addClass("mobile-type");
            } else {
              if ($headerSticky.hasClass("mobile-type")) {
                $hdrCartSticky.empty();
                $hdrNavSticky.empty();
              }
              $headerSticky.removeClass("mobile-type");
            }
          }

          setHeigth();

          var prevWindow = window.innerWidth || $(window).width();

          $(window).scroll(function () {
            hasScrolled();
          });

          $(window).on("resize", function () {
            var currentWindow = window.innerWidth || $(window).width();
            if (currentWindow != prevWindow) {
              setHeigth();
              hasScrolled();
              prevWindow = currentWindow;
            }
          });

          function hasScrolled() {
            if ($header.data("cartopen")) return;
            var st = getCurrentScroll();
            if (st > stickyH) {
              if (!$body.hasClass("hdr-sticky")) {
                $headerSticky.addClass("is-sticky");
                $body.addClass("hdr-sticky");
                $hdrCart.hasClass("header-cart-empty")
                  ? $hdrCartSticky.addClass("header-cart-empty")
                  : $hdrCartSticky.removeClass("header-cart-empty");
                if (!$("body").hasClass("has-mobilemenu")) {
                  $hdrCart.children().detach().appendTo($hdrCartSticky);
                  $hdrNav.children().detach().appendTo($hdrNavSticky);
                }
              }
            } else {
              if ($body.hasClass("hdr-sticky")) {
                $headerSticky.removeClass("is-sticky");
                $body.removeClass("hdr-sticky");
                if (!$("body").hasClass("has-mobilemenu")) {
                  $hdrCartSticky.children().detach().appendTo($hdrCart);
                  $hdrNavSticky.children().detach().appendTo($hdrNav);
                }
              }
            }
          }

          function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
          }
        };

        // Carousel Inside
        $.fn.insideCarousel = function () {
          var $carousel = this,
            next = ".carousel-control.next",
            prev = ".carousel-control.prev";
          $carousel.carousel({
            interval: false,
          });
          $(document).on("click", next, function () {
            $(this).parent().carousel("next");
          });
          $(document).on("click", prev, function () {
            $(this).parent(".carousel-inside").carousel("prev");
          });
        };
        // product zoom
        $.fn.initProductZoom = function () {
          var $this = this,
            zoompos =
              $("body").is(".rtl") ||
                $this.closest(".product-single--reversed").length
                ? 11
                : 1,
            galleryID = $this
              .closest(".product-block, .product-single")
              .find(".product-previews-carousel")
              .attr("id"),
            append,
            zoomtype;
          if (!$("body").is(".touch") && $(window).width() > 1024) {
            append = $this.closest(".modal-content").length
              ? ".modal-content .main-image-holder"
              : ".page-main";
            zoomtype = $this.parent().data("zoomtype")
              ? $this.parent().data("zoomtype")
              : "window";
            $this.ezPlus({
              zoomType: zoomtype,
              zIndex: 1002,
              zoomWindowPosition: zoompos,
              zoomContainerAppendTo: append,
              gallery: galleryID,
              galleryActiveClass: "active",
              zoomWindowFadeIn: 500,
              zoomWindowFadeOut: 500,
              lensFadeIn: 500,
              lensFadeOut: 500,
            });
          } else {
            append = $this.closest(".main-image");
            zoomtype = "lens";
            $this.ezPlus({
              zoomType: zoomtype,
              zIndex: 1002,
              zoomContainerAppendTo: append,
              gallery: galleryID,
              galleryActiveClass: "active",
              zoomWindowFadeIn: 500,
              zoomWindowFadeOut: 500,
              lensFadeIn: 500,
              lensFadeOut: 500,
            });
          }
        };

        // slide Main Image
        function productSlideMain(carousel) {
          $(carousel).each(function () {
            var $carousel = $(this),
              $next = $(".js-main-image-next", $carousel),
              $prev = $(".js-main-image-prev", $carousel),
              $productblock = $carousel.closest(
                ".product-block, .product-single"
              ),
              $previewsCarousel = $productblock.find(
                ".product-previews-carousel"
              );
            $prev.addClass("slick-disabled");

            function prevSlide() {
              if ($(".slick-active.active", $previewsCarousel).length) {
                $(".slick-active.active", $previewsCarousel)
                  .prev()
                  .trigger("click");
              } else {
                $(".slick-current.slick-active", $previewsCarousel)
                  .prev()
                  .trigger("click");
              }
              $(".product-previews-carousel").slick("slickPrev");
            }

            function nextSlide() {
              if ($(".slick-active.active", $previewsCarousel).length) {
                $(".slick-active.active", $previewsCarousel)
                  .next()
                  .trigger("click");
              } else {
                $(".slick-current.slick-active", $previewsCarousel)
                  .next()
                  .trigger("click");
              }
              $previewsCarousel.slick("slickNext");
            }
            $prev.on("click", function (e) {
              prevSlide();
              e.preventDefault();
            });
            $next.on("click", function (e) {
              nextSlide();
              e.preventDefault();
            });
            $carousel
              .on("swipeleft", function (e) {
                nextSlide();
              })
              .on("swiperight", function (e) {
                prevSlide();
              });
          });
        }

        // flowtype - make banner text responsive
        $.fn.flowtype = function (options) {
          var settings = $.extend(
            {
              maximum: 9999,
              minimum: 1,
              maxFont: 9999,
              minFont: 1,
              fontRatio: 10,
            },
            options
          ),
            changes = function changes(el) {
              var $el = $(el),
                elw = $el.width(),
                width =
                  elw > settings.maximum
                    ? settings.maximum
                    : elw < settings.minimum
                      ? settings.minimum
                      : elw,
                fontBase = Math.round(width / settings.fontRatio).toFixed(10),
                fontSize =
                  fontBase > settings.maxFont
                    ? settings.maxFont
                    : fontBase < settings.minFont
                      ? settings.minFont
                      : fontBase;
              $el.css("font-size", fontSize + "px");
            };

          return this.each(function () {
            var that = this;
            var timer;
            var cachedWidth = $(window).width();
            $(window).resize(function () {
              var newWidth = $(window).width();
              if (newWidth !== cachedWidth) {
                $(".banner-caption", that).addClass("calc");
                clearTimeout(timer);
                timer = setTimeout(doneResizing, 500);
                cachedWidth = newWidth;
              }
            });
            changes(this);

            function doneResizing() {
              changes(that);
              $(".banner-caption", that).removeClass("calc");
            }
          });
        };

        // FUNCTIONS

        // show menu
        function showMenu(menu) {
          $(menu).removeClass("unvisible");
        }
        // detect Iframe
        function inIframe() {
          try {
            return window.self !== window.top;
          } catch (e) {
            return true;
          }
        }
        // detect IE
        function detectIE() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf("MSIE ");
          if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
          }
          var trident = ua.indexOf("Trident/");
          if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf("rv:");
            return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
          }
          var edge = ua.indexOf("Edge/");
          if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
          }
          // other browser
          return false;
        }

        function startDetect() {
          // detect touch
          var isTouchDevice =
            "ontouchstart" in window || navigator.msMaxTouchPoints;
          if (isTouchDevice) {
            $("body").addClass("touch");
          }
          // detect Mac
          if (navigator.userAgent.indexOf("Mac") > 0) {
            $("body").addClass("mac");
          }
          // Get IE or Edge browser version
          var version = detectIE();
          if (version) {
            $("body").addClass("ie");
          }
        }
        // timeout for resize event
        function debouncer(func, timeout) {
          var timeoutID,
            timeout = timeout || 500;
          return function () {
            var scope = this,
              args = arguments;
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function () {
              func.apply(scope, Array.prototype.slice.call(args));
            }, timeout);
          };
        };
        // scrollTo onLoad
        function scrollOnLoad(speed) {
          var $elem = $("#" + $(location).attr("href").split("#")[1]);
          if ($elem.length) {
            var wHeight =
              $(window).height() < $elem.height() * 2
                ? 0
                : $(window).height() - $elem.height() * 2,
              offset = $elem.offset(),
              offsetTop = offset.top - wHeight;
            $("html,body").animate(
              {
                scrollTop: offsetTop,
              },
              speed
            );
          }
        }
        // scrollTo animation
        function scrollTo() {
          $("[data-scrollto]").on("click", function (e) {
            e.preventDefault();
            var targetScroll = $(this).attr("data-scrollto");
            if ($(targetScroll).length) {
              $("html,body").animate(
                {
                  scrollTop:
                    $(targetScroll).offset().top - $(".page-header").height(),
                },
                500
              );
              $("#shopify-section-faq h3").removeClass("custom-color");
              if (targetScroll.indexOf("faq")) {
                $(targetScroll).addClass("custom-color");
              }
            }
          });
          $(".js-scroll-bottom").on("click", function (e) {
            e.preventDefault();
            $("html,body").animate(
              {
                scrollTop: $(this).closest(".block").next().offset().top,
              },
              500
            );
          });
        }

        // lazyLoadSections
        function setBlockLoaded(el) {
          $(el).closest(".block").addClass("block--loaded");
        }

        function lazyLoadSections(section) {
          var $section = $(section);
          $section.each(function (i) {
            var $this = $(this);
            $this.imagesLoaded(function () {
              if (!$(".slick-slider", $this).length) {
                $this.addClass("block--loaded");
              }
            });
          });
        }

        // set Sticky mode
        function setSticky(header) {
          var $header = $(header);
          if ($header.hasClass("sticky")) {
            if ($header.hasClass("always")) {
              $header.stickyHeader();
            } else if ($header.hasClass("smart")) {
              $header.stickyHeaderSmart();
            }
          }
        }

        // set offset if transparent header
        function setSliderPad(header, sliderText, topLine) {
          var $header = $(header),
            $topLine = $(topLine),
            $slider = $(".page-main > *:first-child").find(".bnslider"),
            $bnsliderFull = $(".bnslider--fullheight"),
            $bnsliderNoScale = $(".bnslider.keep-scale");
          if ($bnsliderFull.length) {
            var bnrH;
            $bnsliderFull.css({
              height: "",
              "min-height": "",
            });
            if (!$topLine.length) {
              bnrH = $header.hasClass("transparent")
                ? $(window).height()
                : $(window).height() - $header.outerHeight();
              $bnsliderFull.css({
                height: bnrH,
                "min-height": bnrH,
              });
            } else {
              bnrH = $header.hasClass("transparent")
                ? $(window).height() - $topLine.outerHeight()
                : $(window).height() -
                $header.outerHeight() -
                $topLine.outerHeight();
              $bnsliderFull.css({
                height: bnrH,
                "min-height": bnrH,
              });
            }
          } else {
            var bnrH;
            $slider.css({
              height: "",
              "max-height": "",
            });
            if (!$topLine.length) {
              bnrH = $header.hasClass("transparent")
                ? $(window).height()
                : $(window).height() - $header.outerHeight();
              $slider.css({
                "max-height": bnrH,
              });
            } else {
              bnrH = $header.hasClass("transparent")
                ? $(window).height() - $topLine.outerHeight()
                : $(window).height() -
                $header.outerHeight() -
                $topLine.outerHeight();
              $slider.css({
                "max-height": bnrH,
              });
            }
          }
          if ($header.hasClass("transparent")) {
            if ($topLine.length) {
              $header.css(
                "cssText",
                "top: " + $topLine.parent().height() + "px !important"
              );
            }
            if ($slider.length) {
              var headerH = $header.height(),
                $sliderText = $(sliderText, $slider);
              $sliderText.each(function () {
                $(this).css({
                  "padding-top": headerH + "px",
                });
              });
            }
          }
          if ($bnsliderNoScale.length) {
            $bnsliderNoScale.css({
              height: "",
              "min-height": "",
            });
            var bnrH;
            if (
              $(window).width() < 769 &&
              parseInt($bnsliderNoScale.attr("data-start-mwidth")) > 0 &&
              parseInt($bnsliderNoScale.attr("data-start-mheight")) > 0
            ) {
              var bnrH =
                (parseInt($bnsliderNoScale.attr("data-start-mheight"), 10) /
                  parseInt($bnsliderNoScale.attr("data-start-mwidth"), 10)) *
                100;
              $bnsliderNoScale.css({
                height: bnrH + "vw",
                "min-height": bnrH + "vw",
              });
            } else if (
              parseInt($bnsliderNoScale.attr("data-start-width")) > 0 &&
              parseInt($bnsliderNoScale.attr("data-start-height")) > 0
            ) {
              var bnrH =
                (parseInt($bnsliderNoScale.attr("data-start-height"), 10) /
                  parseInt($bnsliderNoScale.attr("data-start-width"), 10)) *
                100;
              $bnsliderNoScale.css({
                height: bnrH + "vw",
                "min-height": bnrH + "vw",
              });
            } else return false;
          }
        }

        // topline
        function topLine(topLine) {
          if ($(topLine).length) {
            var $topLine = $(topLine),
              $header = $(".page-header"),
              $spyMenu = $(".js-spy"),
              $slider = $(".page-main > .block:first-child").find(".bnslider");

            $topLine.on("close.bs.alert", function () {
              if ($header.hasClass("transparent")) {
                $slider.css({
                  height: "",
                });
                $header.css({
                  top: "",
                });
              }
              if ($topLine.attr("data-enable-expires") == "true") {
                $.cookie("bntTopline", "yes", {
                  expires: parseInt($topLine.attr("data-expires"), 10),
                });
              }
              if ($spyMenu.length) {
                var topOffset = $(".page-header").height();
                $spyMenu.css({
                  top: topOffset + 20,
                  "max-height": $(window).height() - topOffset - 50,
                });
              }
            });
          }
        }

        // back to top button
        function backToTopM(button) {
          $(button).on("click", function () {
            $("html, body").animate(
              {
                scrollTop: 0,
              },
              "slow"
            );
            return false;
          });
        }

        function backToTopD(button) {
          var $btn = $(button),
            windowH = $(window).height();
          $btn.data("title", $btn.prop("title"));
          if ($(window).scrollTop() > windowH) {
            $btn.addClass("is-visible");
          }
          $(window).scroll(function () {
            if (!$btn.data("clickPos")) {
              if ($(this).scrollTop() > windowH) {
                $btn.addClass("is-visible");
              } else {
                $btn.removeClass("is-visible back-down-remove back-down");
              }
            } else {
              if (
                $(this).scrollTop() > windowH &&
                $btn.data("clickPos") != "lock"
              ) {
                $btn
                  .removeClass("back-down")
                  .prop("title", $btn.data("title"))
                  .addClass("back-down-remove")
                  .removeData("clickPos");
              }
            }
          });
          $btn.on("click", function () {
            if (!$btn.data("clickPos")) {
              var scrollTop = $(window).scrollTop();
              $btn.data("clickPos", "lock");
              $("html, body").animate(
                {
                  scrollTop: 0,
                },
                "slow",
                function () {
                  $btn
                    .addClass("back-down")
                    .prop("title", $btn.attr("data-return"))
                    .removeClass("back-down-remove")
                    .data("clickPos", scrollTop);
                }
              );
            } else {
              $("html, body").animate(
                {
                  scrollTop: $btn.data("clickPos"),
                },
                "slow",
                function () {
                  $btn
                    .removeClass("back-down")
                    .prop("title", $btn.data("title"))
                    .addClass("back-down-remove")
                    .removeData("clickPos");
                }
              );
            }
            return false;
          });
        }

        // product page swatch
        function productOptions(option) {
          $(option).each(function () {
            var $option = $(this),
              $optionlist = $("ul", $option),
              $optionbtn = $("a", $optionlist),
              $optionselect = $("select", $option),
              $productblock = $option.closest(
                ".product-block, .product-single"
              ),
              $previewsCarousel = $productblock.find(
                ".product-previews-carousel"
              ),
              $previewsSlider = $productblock.find(
                ".js-product-slider-carousel"
              );
            $optionlist
              .find("a[data-value='" + $optionselect.val() + "']")
              .parent()
              .addClass("active");
            $optionbtn.on("click", function (e) {
              var $this = $(this);
              if ($previewsCarousel.length && $this.attr("data-image")) {
                var currentSelect = $this.attr("data-image").split("?").pop();
                $previewsCarousel.find(".slick-slide").each(function () {
                  if (
                    $(this).attr("data-zoom-image").split("?").pop() ==
                    currentSelect
                  ) {
                    $(this).trigger("click");
                    return false;
                  }
                });
              } else if ($previewsSlider.length && $this.attr("data-image")) {
                var currentSelect = $this.attr("data-image").split("?").pop();
                $previewsSlider.find(".slick-slide").each(function () {
                  if (
                    $(this)
                      .find("img")
                      .attr("data-zoom-image")
                      .split("?")
                      .pop() == currentSelect
                  ) {
                    $(".js-product-slider-carousel").slick(
                      "slickGoTo",
                      $(this).attr("data-slick-index")
                    );
                    return false;
                  }
                });
              } else if ($this.attr("data-image")) {
                var $image = $(".main-image-holder img", $productblock);
                var imgSrc = $this.attr("data-image");
                var newImg = document.createElement("img");
                newImg.src = imgSrc;
                newImg.onload = function () {
                  $image.attr("src", imgSrc);
                  $image.attr("data-zoom-image", imgSrc);
                  $(".main-image-holder > .zoom", $productblock)
                    .data("ezPlus")
                    .destroy();
                  $(
                    ".main-image-holder > .zoom",
                    $productblock
                  ).initProductZoom();
                };
              }
              if (!$this.parent("li").is(".active")) {
                $optionselect.val($this.attr("data-value"));
                $this.closest("ul").find("li").removeClass("active");
                $this.parent("li").addClass("active");
              }
              e.preventDefault();
            });
          });
        }

        // main product Image
        function productZoom(imageHolder) {
          $(imageHolder).each(function () {
            var $imageHolder = $(this),
              previews =
                "#" +
                $imageHolder
                  .closest(".product-block, .product-single")
                  .find(".product-previews-carousel")
                  .attr("id");
            if ($imageHolder.hasClass("js-main-image-zoom")) {
              $imageHolder.imagesLoaded(function () {
                $(".zoom", $imageHolder).initProductZoom();
                $imageHolder.css({
                  height: $imageHolder.height(),
                });
              });
              if (!$(previews).hasClass("slick-initialized")) {
                productPreviewsCarousel(previews, "zoom");
              }
            } else {
              if (!$(previews).hasClass("slick-initialized")) {
                productPreviewsCarousel(previews, "nozoom");
              }
            }
          });
        }

        // product previews carousel
        function productPreviewsCarousel(carousel, zoom) {
          if ($(carousel).length) {
            $(carousel).each(function () {
              var $this = $(this),
                $mainImg = $this
                  .closest(".product-block, .product-single")
                  .find(".main-image-holder > img");
              $this.imagesLoaded(function () {
                // set modal height on callback
                $this.on("init", function () {
                  setBlockLoaded($this);
                  $this.find(".slick-slide").first().addClass("active");
                  if ($this.closest("#quickView").length) {
                    var $modal = $this
                      .closest("#quickView")
                      .find(".modal-content");
                    $modal.css({
                      height:
                        $modal.find(".product-block").outerHeight() + "px",
                    });
                    setTimeout(function () {
                      $modal.addClass("loaded");
                    }, 500);
                  }
                  $(".slick-slide", $this).on("click", function () {
                    var $slider = $this
                      .closest(".product-block, .product-single")
                      .find(".main-image-holder"),
                      $next = $(".js-main-image-next", $slider),
                      $prev = $(".js-main-image-prev", $slider);
                    setTimeout(function () {
                      $next.removeClass("slick-disabled");
                      $prev.removeClass("slick-disabled");
                      if ($(".slick-slide.active", $this).is(":first-child")) {
                        $prev.addClass("slick-disabled");
                      }
                      if ($(".slick-slide.active", $this).is(":last-child")) {
                        $next.addClass("slick-disabled");
                      }
                    }, 100);
                  });
                });
                $this.slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  vertical: true,
                  dots: false,
                  focusOnSelect: true,
                  infinite: false, //don't change
                });
                $this.on("click", ".slick-slide", function (e) {
                  if (zoom === "nozoom") {
                    e.preventDefault();
                    var newImg = $(this).attr("data-zoom-image");
                    $this.find(".slick-slide").removeClass("active");
                    $(this).addClass("active");
                    $mainImg.attr("src", newImg);
                  }
                });
              });
            });
          }
        }

        // product next/prev preview on touch
        function prevnextNav(productnav) {
          var $productnav = $(productnav);
          if ($("body").hasClass("touch")) {
            $("> a", $productnav)
              .on("click", function (e) {
                var $this = $(this);
                if (!$this.data("firstclick")) {
                  $("> a", $productnav).removeData("firstclick", true);
                  $this.data("firstclick", true);
                  e.preventDefault();
                }
              })
              .on("mouseleave", function (e) {
                $("> a", $productnav).removeData("firstclick", true);
              });
          }
        }
        // product view mode
        function viewMode(viewmode) {
          var $grid = $(".grid-view", $(viewmode)),
            $list = $(".list-view", $(viewmode)),
            $products = $(".products-listview, .products-grid");
          if ($(".products-listview").length) {
            $list.addClass("active");
          } else if ($(".products-grid").length) {
            $grid.addClass("active");
          } else return false;
          $grid.on("click", function (e) {
            var $this = $(this);
            $products.addClass("no-animate");
            if (!$this.is(".active")) {
              $list.removeClass("active");
              $this.addClass("active");
              $products
                .removeClass("products-listview")
                .addClass("products-grid");
            }
            setTimeout(function () {
              $products.removeClass("no-animate");
              makeEqual();
            }, 500);
            e.preventDefault();
          });
          $list.on("click", function (e) {
            var $this = $(this);
            $products.addClass("no-animate");
            if (!$this.is(".active")) {
              $grid.removeClass("active");
              $this.addClass("active");
              $products
                .removeClass("products-grid")
                .addClass("products-listview");
            }
            setTimeout(function () {
              $products.removeClass("no-animate");
            }, 500);
            e.preventDefault();
          });
        }
        // loading button
        function btnLoading(button) {
          $(button).on("click", function () {
            var $this = $(this);
            $this.button("loading");
            setTimeout(function () {
              $this.button("reset");
            }, 10000);
          });
        }
        // tooltip ini
        function tooltipIni() {
          var title;
          $("[data-tooltip]")
            .darkTooltip({
              size: "small",
              animation: "fade",
            })
            .hover(
              function () {
                title = $(this).attr("title");
                $(this).attr("title", "");
              },
              function () {
                $(this).attr("title", title);
              }
            );
        }
        // parallax
        function blockParallax(block, parallaxSpeed) {
          if (
            $(block).length &&
            !$("body").hasClass("ie") &&
            !$("body").hasClass("touch")
          ) {
            $(block).jarallax({
              speed: parallaxSpeed,
              enableTransform: false,
            });
          }
        }
        // icrease/decrease input
        function changeInput() {
          $(document).on("click", ".decrease", function (e) {
            var input_el = $(e.target)
              .closest(".qty")
              .find('input[type="text"]');
            var v = input_el.val() - 1;
            if (input_el.attr("data-min")) {
              if (v >= input_el.attr("data-min")) input_el.val(v);
            } else {
              input_el.val(v);
            }
            e.preventDefault();
          });
          $(document).on("click", ".increase", function (e) {
            var input_el = $(e.target)
              .closest(".qty ")
              .find('input[type="text"]');
            var v = input_el.val() * 1 + 1;
            if (input_el.attr("data-max")) {
              if (v <= input_el.attr("data-max")) input_el.val(v);
            } else {
              input_el.val(v);
            }
            e.preventDefault();
          });
        }
        // set full height page
        function setFullHeight() {
          if ($(".push-footer").length) $(".push-footer").remove();
          if ($(".block.fullheight").length) {
            $(".block.fullheight").css("height", "");
          }
          var $wrapper = $("body"),
            $footer = $(".page-footer"),
            $header = $(".page-header"),
            $content = $(".page-main"),
            footerH = $footer.length ? $footer.height() : 0,
            offsetTop = $content.length ? $content.offset().top : 0;

          if ($(".block.fullheight").length) {
            $wrapper.css({
              "overflow-y": "scroll",
            });
            $(".block.fullheight").css("height", "auto");
            var wHeight = Math.max(
              $wrapper.height() - footerH - offsetTop,
              $(".block.fullheight").outerHeight()
            );
            $(".block.fullheight").css("height", wHeight + "px");
          }
          var footerH = $footer.length ? $footer.outerHeight() : 0,
            footerTop = $footer.length ? $footer.offset().top : 0,
            footerPush = $(window).height() - footerH - footerTop;
          if (footerPush > 0) {
            $footer.before('<div class="push-footer"></div>');
            $(".push-footer").css({
              height: footerPush + "px",
            });
          }
        }
        // set background image inline
        function setDataColor(obj) {
          if ($(obj).length) {
            $(obj).each(function () {
              var $this = $(this);
              $this
                .css({
                  color: $this.attr("data-color"),
                })
                .addClass("data-ini");
            });
          }
        }
        // set background image inline
        function setDataBg(obj) {
          if ($(obj).length) {
            $(obj).each(function () {
              var $this = $(this),
                bg = $this.attr("data-bg");
              ~bg.indexOf("#")
                ? $this.css({
                  "background-color": bg,
                })
                : $this.css({
                  "background-image": "url(" + bg + ")",
                });
            });
          }
        }
        // sharing
        function productSharing() {
          var link = ".sharing",
            leave = ".product-item-inside, .product-item-inside .social-list";
          $(document).on("click", link, function (e) {
            var $el = $(this);
            $el.closest(".product-item").addClass("sharing");
            e.preventDefault();
          });
          $(document).on("mouseleave", leave, function (e) {
            var $el = $(this);
            $el.closest(".product-item").removeClass("sharing");
          });
        }
        // color swatch
        function colorSwatch(link) {
          var link = link + " a";
          $(document).on("click", link, function (e) {
            var $el = $(this);
            if ($el.data("image")) {
              var $image = $el
                .closest(".product-item-inside")
                .find("img.product-image");
              // if inner carousel in product
              if (
                $el.closest(".product-item-inside").find(".carousel-inside")
                  .length
              ) {
                $el
                  .closest(".product-item-inside")
                  .find(".carousel-inside")
                  .carousel(0);
                $image = $el
                  .closest(".product-item-inside")
                  .find(".carousel-inner .item:first-child img");
              }
              var imgSrc = $el.data("image");
              $el.closest("ul.color-swatch").find("li").removeClass("active");
              $el.parent("li").addClass("active");
              var newImg = document.createElement("img");
              newImg.src = $el.data("image");
              newImg.onload = function () {
                $image.attr("src", imgSrc);
              };
            }
            e.preventDefault();
          });
        }
        // START disable scroll functions
        function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault) e.preventDefault();
          e.returnValue = false;
        }

        function wheel(e) {
          preventDefault(e);
        }

        function disableScroll() {
          if (window.addEventListener) {
            window.addEventListener("DOMMouseScroll", wheel, false);
          }
          window.onmousewheel = document.onmousewheel = wheel;
        }

        function enableScroll() {
          if (window.removeEventListener) {
            window.removeEventListener("DOMMouseScroll", wheel, false);
          }
          window.onmousewheel = document.onmousewheel = null;
        }
        // END disable scroll functions
        // truncated list megamenu
        function truncateList(list) {
          function showHideLists(list) {
            var thisBtnsList = list;
            var num = thisBtnsList.children().length;
            var numVis = thisBtnsList
              .closest(".truncateList")
              .data("listItems");
            if (num > numVis) {
              var showBtn = thisBtnsList.prev().find(".view-all");
              var bShowEm = showBtn.data("bShowEm") || false;
              showItems(thisBtnsList, bShowEm, numVis);
              bShowEm ^= true;
              showBtn.data("bShowEm", bShowEm);
              if (bShowEm) {
                showBtn.removeClass("disabled");
              } else {
                showBtn.addClass("disabled");
              }
            } else {
              thisBtnsList.closest(".truncateList").find(".view-all").hide();
            }
          }

          function showItems(list, bShowAll, numVisible) {
            if (bShowAll) {
              list.find("> li:gt(" + (numVisible - 1) + ")").fadeIn(300);
            } else {
              list.find("> li:lt(" + numVisible + ")").show();
              list.find("> li:gt(" + (numVisible - 1) + ")").fadeOut(300);
            }
          }

          if ($(list).length) {
            $(list).each(function () {
              showHideLists($(this).find("ul.category-links"));
            });
            $(".view-all", $(list)).on("click", function (e) {
              showHideLists($(this).parent().next("ul.category-links"));
              e.preventDefault();
            });
          }
        }
        // tabs
        function productTab(tab) {
          var $tabs = $(tab),
            setCurrent = false;
          $("a", $tabs).each(function () {
            var $this = $(this);
            if ($this.parent("li").is(".active")) {
              var curTab = $this.attr("href");
              $(curTab).addClass("active");
              setCurrent = true;
            }
          });
          if (!setCurrent) $("li:first-child a", $tabs).tab("show");
        }
        // product hover
        function productHoverHeight(product) {
          var product = product;
          $(document)
            .on("mouseenter", product, function (e) {
              var $this = $(this);
              if (!$this.closest(".products-listview").length) {
                var $slick = $this.closest(".slick-slider");
                if (!$this.data("setHeight")) {
                  $this.css({
                    height:
                      $(this).find(".product-item-inside").outerHeight() + "px",
                  });
                }
                if (!$this.hasClass("hovered")) {
                  $this.addClass("hovered");
                  if ($slick.length) {
                    $slick.addClass("out-space");
                  }
                }
              }
            })
            .on("mouseleave", product, function (e) {
              var $this = $(this);
              var $slick = $this.closest(".slick-slider");
              $this.removeClass("hovered").css({
                height: "",
              });
              if ($slick.length) {
                $slick.removeClass("out-space");
              }
              $(this).find(".product-item-cart").addClass("hidden");
            });
        }
        // magnificpopup
        function magnificPopup() {
          // magnific popup for gallery
          if ($(".zoomimage").length) {
            $(".zoomimage").magnificPopup({
              type: "image",
              gallery: {
                enabled: true,
              },
            });
          }
          //magnific popup for video
          if ($(".video-link").length) {
            $(".video-link").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false,
            });
          }
        }
        // create image gallery
        function imageGallery() {
          var galleryObj = [],
            $zoomLink = $(".page-main .zoom-link");

          $(".product-previews-carousel").each(function () {
            var _galleryObj = [],
              $this = $(this);
            $this.find("[data-zoom-image]").each(function () {
              var src = $(this).attr("data-zoom-image"),
                type = "image"; // it's always an image
              var image = {};
              image["src"] = src;
              image["type"] = type;
              _galleryObj.push(image);
            });
            galleryObj[$this.attr("id")] = _galleryObj;
          });

          function getActiveIndex(carousel) {
            var current = 0;
            if ($(carousel).find("a.active").length) {
              current = $("a.active", $(carousel)).index();
            }
            return current;
          }
          if (
            $zoomLink
              .closest(".product-block, .product-single")
              .find(".product-previews-carousel").length
          ) {
            $zoomLink.on("click", function (e) {
              var carouselID = $(this)
                .closest(".product-block, .product-single")
                .find(".product-previews-carousel")
                .attr("id"),
                activeIndex = getActiveIndex("#" + carouselID);
              $.magnificPopup.open(
                {
                  items: galleryObj[carouselID],
                  gallery: {
                    enabled: true,
                  },
                },
                activeIndex
              );
              e.preventDefault();
            });
          } else {
            $zoomLink.on("click", function (e) {
              $.magnificPopup.open({
                items: {
                  src: $(this).attr("href"),
                },
                type: "image",
              });
              e.preventDefault();
            });
          }
        }

        // Add Ajax Process Class
        function addAjaxProcess(link, outer, ajaxClass) {
          $(document).on("click", link, function (e) {
            $(e.target).closest(outer).addClass(ajaxClass);
            e.preventDefault();
          });
        }

        function removeAjaxProcess(target, ajaxClass) {
          $(target).removeClass(ajaxClass);
        }

        // Newsletter Ini
        function newsletterIni(newsletter) {
          var $newsletter = $(newsletter),
            $checkBox = $("#newsLetterCheckBox", $newsletter);

          function checkCookie() {
            if ($.cookie("bntNewsLetter") != "yes") {
              openNewsletterPopup();
            }
          }

          function openNewsletterPopup() {
            $newsletter.addClass("visible-onload");

            $(".spy-donation").addClass("visible-onload");
          }

          $checkBox.change(function () {
            if ($(this).is(":checked")) {
              $.cookie("bntNewsLetter", "yes", {
                expires: parseInt($newsletter.attr("data-expires"), 10),
              });
            } else {
              $.cookie("bntNewsLetter", null, { path: "/" });
            }
          });
          checkCookie();
        }

        // Modal Show
        function modalShow(modal) {
          if ($(modal).length) {
            var modal = $(modal);
            var pause = 0;
            if (modal.attr("data-pause") > 0) {
              pause = modal.attr("data-pause");
            }
            setTimeout(function () {
              modal.modal("show");
            }, pause);
          }
        }

        // Password Request Form Change
        function changeForm(form1, form2, link, modal) {
          var $form1 = $(form1),
            $form2 = $(form2),
            $link = $(link);
          $link.on("click", function (e) {
            $form1.toggleClass("active");
            $form2.toggleClass("active");
            e.preventDefault();
          });
          if ($(modal).length) {
            $(modal).on("hidden.bs.modal", function () {
              $form1.addClass("active");
              $form2.removeClass("active");
            });
          }
        }
        // Modal Interval
        function modalInterval(modal) {
          if ($(modal).length) {
            var counter;
            $(modal)
              .on("hidden.bs.modal", function () {
                var $modal = $(this);
                if ($modal.attr("data-interval") > 0) {
                  $(".count", $modal).html("").fadeOut();
                  clearInterval(counter);
                }
              })
              .on("shown.bs.modal", function () {
                var interval = 0,
                  $modal = $(this);
                if ($modal.attr("data-interval") > 0) {
                  interval = $modal.attr("data-interval");
                }
                var count = interval / 1000;
                if (count > 0) {
                  $(".modal-countdown", $modal).show();
                  $(".count", $modal).html(count).fadeIn();
                  counter = setInterval(function modalCount() {
                    if (count > 0) {
                      count -= 1;
                      $(".count", $modal).html(count);
                    } else {
                      $modal.modal("hide").removeData("bs.modal");
                      clearInterval(counter);
                    }
                  }, 1000);
                }
              });
          }
        }
        // from blog  carousel
        function fromBlogCarousel1(carousel) {
          if ($(carousel).length) {
            $(carousel).each(function () {
              var $this = $(this),
                arrowsplace = $this,
                $carouseltitle = $this.prev(".title"),
                swipemode = $("body").hasClass("touch") ? true : false;
              if ($carouseltitle.find(".carousel-arrows").length) {
                arrowsplace = $carouseltitle.find(".carousel-arrows");
              }
              $this.imagesLoaded(function () {
                $this.on("init", function () {
                  setBlockLoaded($this);
                });
                $this.slick({
                  appendArrows: arrowsplace,
                  speed: 500,
                  infinite: false,
                  swipe: swipemode,
                  draggable: false,
                });
              });
            });
          }
        }

        function fromBlogCarousel2(carousel) {
          if ($(carousel).length) {
            $(carousel).each(function () {
              var $this = $(this),
                arrowsplace = $this,
                $carouseltitle = $this.prev().find(".title"),
                swipemode = $("body").hasClass("touch") ? true : false;
              if ($carouseltitle.find(".carousel-arrows").length) {
                arrowsplace = $carouseltitle.find(".carousel-arrows");
              }
              $this.imagesLoaded(function () {
                $this.on("init", function () {
                  setBlockLoaded($this);
                });
                $this.slick({
                  appendArrows: arrowsplace,
                  speed: 500,
                  infinite: false,
                  swipe: swipemode,
                  draggable: false,
                });
              });
            });
          }
        }
        // product carousel
        function productCarousel(carousel) {
          if ($(carousel).length) {
            $(carousel).each(function () {
              var $this = $(this),
                arrowsplace = $this,
                $carouseltitle = $this.prev(".title"),
                swipemode = $("body").hasClass("touch") ? true : false;

              if ($this.parent().hasClass("collapsed-content")) {
                $carouseltitle = $this.parent().prev(".title");
              }
              if ($carouseltitle.find(".carousel-arrows").length) {
                arrowsplace = $carouseltitle.find(".carousel-arrows");
              }
              $this.imagesLoaded(function () {
                $this.on("init", function () {
                  setBlockLoaded($this);
                });
                $this.slick({
                  appendArrows: arrowsplace,
                  speed: 500,
                  infinite: false,
                  swipe: swipemode,
                  draggable: false,
                });
              });
            });
          }
        }
        // testimonials single carousel
        function testimonialCarousel(carousel) {
          $(carousel).each(function () {
            var $this = $(this),
              swipemode = $("body").hasClass("touch") ? true : false,
              arrows = $this.hasClass("testimonials-arrows") ? true : false,
              dots = $this.hasClass("testimonials-arrows") ? false : true;
            $this.imagesLoaded(function () {
              $this.on("init", function () {
                setBlockLoaded($this);
              });
              $this.slick({
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                infinite: false,
                dots: dots,
                arrows: arrows,
                swipe: swipemode,
              });
            });
          });
        }
        // instagram
        function instaFeed(element) {
          if ($(element).length) {
            $(element).each(function () {
              var $el = $(this),
                dataFeed = $el.data("instafeed"),
                id = $el.attr("id");
              var userFeed = new Instafeed({
                target: id,
                get: "user",
                userId: "self",
                accessToken: dataFeed.accessToken,
                limit: dataFeed.limit,
                resolution: "low_resolution",
                sortBy: dataFeed.sortBy,
                template:
                  '<a href="{{link}}" target="_blank"><span><img src="{{image}}" /></span></a>',
              });
              userFeed.run();
            });
          }
        }

        // brand carousel
        function brandCarousel(carousel) {
          $(carousel).each(function () {
            var $this = $(this),
              arrowsplace = $this,
              $carouseltitle = $this.prev(".title"),
              swipemode = $("body").hasClass("touch") ? true : false;
            if ($carouseltitle.find(".carousel-arrows").length) {
              arrowsplace = $carouseltitle.find(".carousel-arrows");
            }
            $this.imagesLoaded(function () {
              $this.on("init", function () {
                setBlockLoaded($this);
              });
              $this.slick({
                appendArrows: arrowsplace,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                swipe: swipemode,
              });
            });
          });
        }
        // inside carousel
        function insideCarousel(carousel) {
          $(".product-item .carousel-inside").each(function () {
            $(this).insideCarousel();
          });
        }

        // countdown
        function countDownIni(countdown) {
          $(countdown).each(function () {
            var $countdown = $(this),
              promoperiod,
              isActual = false;
            if ($countdown.attr("data-promoperiod")) {
              promoperiod = parseInt($countdown.attr("data-promoperiod"), 10);
              isActual = promoperiod > 0;
              promoperiod = new Date().getTime() + promoperiod;
            }
            if ($countdown.attr("data-countdown")) {
              promoperiod = $countdown.attr("data-countdown");
              isActual = Date.parse(promoperiod) - Date.parse(new Date()) > 0;
            }
            if (isActual) {
              $countdown
                .countdown(promoperiod, function (event) {
                  $countdown.html(
                    event.strftime(
                      '<span><span class="left-txt">LEFT</span><span>%D</span>DAYS</span>' +
                      "<span><span>%H</span>HRS</span>" +
                      "<span><span>%M</span>MIN</span>" +
                      "<span><span>%S</span>SEC</span>"
                    )
                  );
                })
                .on("finish.countdown", function () {
                  $countdown.remove();
                });
            } else {
              $countdown.remove();
            }
          });
        }

        function countDownProductIni(countdown) {
          var labels = ["days", "hours", "minutes", "seconds"];

          function strfobj(str) {
            var parsed = str.split(":"),
              obj = {};
            labels.forEach(function (label, i) {
              obj[label] = parsed[i];
            });
            return obj;
          }

          function diff(obj1, obj2) {
            var diff = [];
            labels.forEach(function (key) {
              if (obj1[key] !== obj2[key]) {
                diff.push(key);
              }
            });
            return diff;
          }

          $(countdown).each(function () {
            var $countdown = $(this),
              promoperiod,
              template = _.template(
                '<div class="time <%= label %>"><span class="count curr top"><%= curr %></span><span class="count next top"><%= next %></span><span class="count next bottom"><%= next %></span><span class="count curr bottom"><%= curr %></span><span class="label"><%= label.length < 6 ? label : label.substr(0, 3)  %></span></div>'
              ),
              currDate = "00:00:00:00",
              nextDate = "00:00:00:00",
              isActual = false;
            if ($countdown.attr("data-promoperiod")) {
              promoperiod = parseInt($countdown.attr("data-promoperiod"), 10);
              isActual = promoperiod > 0;
              promoperiod = new Date().getTime() + promoperiod;
            }
            if ($countdown.attr("data-countdown")) {
              promoperiod = $countdown.attr("data-countdown");
              isActual = Date.parse(promoperiod) - Date.parse(new Date()) > 0;
            }
            var initData = strfobj(currDate);
            labels.forEach(function (label, i) {
              $countdown.append(
                template({
                  curr: initData[label],
                  next: initData[label],
                  label: label,
                })
              );
            });
            if (isActual) {
              $countdown
                .countdown(promoperiod, function (event) {
                  var newDate = event.strftime("%D:%H:%M:%S"),
                    data;
                  if (newDate !== nextDate) {
                    currDate = nextDate;
                    nextDate = newDate;
                    data = {
                      curr: strfobj(currDate),
                      next: strfobj(nextDate),
                    };
                    diff(data.curr, data.next).forEach(function (label) {
                      var selector = ".%s".replace(/%s/, label),
                        $node = $countdown.find(selector);
                      $node.removeClass("flip");
                      $node.find(".curr").text(data.curr[label]);
                      $node.find(".next").text(data.next[label]);
                      _.delay(
                        function ($node) {
                          $node.addClass("flip");
                        },
                        50,
                        $node
                      );
                    });
                  }
                })
                .on("finish.countdown", function () {
                  $countdown.closest(".flip-countdown").remove();
                });
            } else {
              $countdown.closest(".flip-countdown").remove();
            }
          });
        }

        // Flowtype Initialization
        function flowtypeIni(text) {
          $(text).each(function () {
            var $this = $(this);
            var fontratio = $this.attr("data-fontratio");
            $this.flowtype({
              fontRatio: fontratio,
            });
            setTimeout(function () {
              $this.addClass("data-ini");
            }, 750);
          });
        }
        // banner hover color change
        function hoverColor() {
          if (!$("body").is(".touch")) {
            $(".banner-wrap")
              .on("mouseenter", function () {
                var $el = $("[data-hover-color]", $(this)),
                  color = $el.attr("data-hover-color");
                $el.css({
                  color: color,
                });
              })
              .on("mouseleave", function () {
                var $el = $("[data-hover-color]", $(this)),
                  color = $el.attr("data-color") ? $el.attr("data-color") : "";
                $el.css({
                  color: color,
                });
              });

            $("[data-hover-color]")
              .on("mouseenter", function () {
                if ($(this).closest(".banner-wrap").length) return;
                var color = $(this).attr("data-hover-color");
                $(this).css({
                  color: color,
                });
              })
              .on("mouseleave", function () {
                if ($(this).closest(".banner-wrap").length) return;

                var color = $(this).attr("data-color")
                  ? $(this).attr("data-color")
                  : "";
                $(this).css({
                  color: color,
                });
              });
          }
        }
        // banner hover bgcolor change
        function hoverBg() {
          if (!$("body").is(".touch")) {
            $(".banner-wrap")
              .on("mouseenter", function () {
                var $el = $("[data-hover-color]", $(this)),
                  color = $el.attr("data-hover-bgcolor");
                $el.css({
                  "background-color": color,
                });
              })
              .on("mouseleave", function () {
                var $el = $("[data-hover-color]", $(this)),
                  color = $el.attr("data-bg") ? $el.attr("data-bg") : "";
                $el.attr("data-bgcolor")
                  ? (color = $el.attr("data-bgcolor"))
                  : 0;
                $el.css({
                  "background-color": color,
                });
              });

            $("[data-hover-bgcolor]")
              .on("mouseenter", function () {
                if ($(this).closest(".banner-wrap").length) return;
                var color = $(this).attr("data-hover-bgcolor");
                $(this).css({
                  "background-color": color,
                });
              })
              .on("mouseleave", function () {
                if ($(this).closest(".banner-wrap").length) return;
                var color = $(this).attr("data-bg")
                  ? $(this).attr("data-bg")
                  : "";
                $(this).attr("data-bgcolor")
                  ? (color = $(this).attr("data-bgcolor"))
                  : 0;
                $(this).css({
                  "background-color": color,
                });
              });
          }
        }

        // quick view
        function quickView(quickviewlink, modal) {
          var link = quickviewlink,
            $modal = $(modal),
            $modalContent = $(".modal-content", $modal),
            $modalScroll = $(".product-info-block", $modal),
            modalClass = modal;
          $(document).on("click", link, function (e) {
            if ($(window).width() > 1024) {
              e.preventDefault();
              $(this).closest(".product-item").addClass("hover");
              var $this = $(this),
                url = $this.attr("href");
              $modal.modal("show");
              $modalContent.load(url);
              $.ajax({
                url: url,
                cache: false,
                complete: function complete() {
                  $modalContent
                    .find(".product-block")
                    .imagesLoaded(function () {
                      setTimeout(function () {
                        $(".modalLoader-wrapper", $modal).addClass("hidden");
                        $(".main-image img", $modal).fadeIn(300);
                        $(".main-image", $modal).css({
                          height: $(".main-image img", $modal).height(),
                        });
                        currencyUpdate();
                        $(".price", $modal).fadeIn(100);
                        countDownProductIni(modalClass + " .js-flip-countdown");
                        if (
                          $(modalClass + " .product-previews-carousel").length
                        ) {
                          productZoom(".modal-content .main-image-holder");
                          productSlideMain(
                            modalClass + " .js-main-image--slide"
                          );
                        } else {
                          $modalContent.css({
                            height:
                              $modal.find(".product-block")[0].scrollHeight +
                              30 +
                              "px",
                          });
                          setTimeout(function () {
                            $modalContent.addClass("loaded");
                          }, 500);
                        }
                      }, 500);
                    });
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  return false;
                },
              });
            } else {
              e.preventDefault();
              var url = $(this).attr("href");
              window.location.href = url.substr(0, url.indexOf("?"));
            }
          });
          $modal.on("hidden.bs.modal", function (e) {
            $(".product-item").removeClass("hover");
            $modalContent.removeClass("loaded");
            $modalContent.html("").css({
              height: "",
            });
            $(".main-image", $modal).css({
              height: "",
            });
            $(".modalLoader-wrapper", $modal).removeClass("hidden");
          });
        }
        // checkout modal
        function dataCarousel(carousel, wrapCarousel, wrapTitle) {
          var $this = carousel,
            $wrap = wrapCarousel,
            wrapTHeigth = $(wrapTitle).height() > 0 ? $(wrapTitle).height : 58;
          $this.imagesLoaded(function () {
            $this.on("init", function () {
              $wrap.css({ height: $this.height() + wrapTHeigth });
            });
            $this.slick({
              speed: 500,
              infinite: false,
              draggable: false,
            });
          });
        }
        function checkoutModal(modal, modalLink) {
          if (!$("body").hasClass("checkout-popup")) {
            return false;
          }

          var modalLink = modalLink,
            $modal = $(modal),
            $lastCarousel = $(".js-lastadded-carousel"),
            $upsellCarousel = $(".js-upsell-carousel"),
            $lastCarouselTab = $(".js-title-lastadded"),
            $upsellCarouselTab = $(".js-title-upsell"),
            $wrapCarousel = $(".lastadded-carousel-wrap"),
            $wrapTitle = $(".title-wrap"),
            removeDelay = 500,
            hideCarouselHeight = 760;

          hideCarousel();

          $(document).on("click", modalLink, function (e) {
            var $target = $(e.target),
              _$modal = $modal,
              id = $target.attr("data-variant-id"),
              product_handle = $target.attr("data-product-handle");
            _$modal.data("variant-id", id);
            _$modal.data("product-handle", product_handle);
            if ($(window).height() < hideCarouselHeight)
              $(".lastadded-carousel-wrap").hide();
          });

          $modal
            .on("hidden.bs.modal", function (e) {
              $(".product-item").removeClass("hover");
              closeModalEvent();
              $(".modal-content", $modal).removeClass("modal-loading");
            })
            .on("shown.bs.modal", function (e) {
              openModalEvent($(e.target));
            });

          $(document)
            .on("click", ".js-mdlchk-qty input[type=button]", function (e) {
              var funcName = $(e.target)
                .closest("[data-qty-function]")
                .attr("data-qty-function");
              setTimeout(function () {
                var qty = $(e.target)
                  .closest(".js-mdlchk-qty")
                  .find("input[type=text]")
                  .val(),
                  id = $(e.target)
                    .closest("[data-product-id]")
                    .attr("data-product-id");
                eval(funcName + "(" + qty + "," + id + ")");
              }, 100);
              e.preventDefault();
            })
            .on("click", ".js-upsell-add-to-cart", function (e) {
              var funcNameUpsell = $modal.attr("data-upsellclick-function"),
                funcNameStart = $modal.attr("data-addtocart-function"),
                $target = $(e.target),
                id = $target.attr("data-variant-id");
              $(".modal-content", $modal).addClass("modal-loading");
              closeModalEvent();
              $modal.data("variant-id", id);
              openModalEvent($modal);
              var id = $target
                .closest("[data-product-id]")
                .attr("data-product-id"),
                prdstatus = $target
                  .closest("[data-product-status]")
                  .attr("data-product-status");
              eval(funcNameUpsell)(prdstatus, $target.attr("data-variant-id"));
              e.preventDefault();
            })
            .on("click", ".js-lastadded-prd-delete", function (e) {
              var funcName = $(e.target)
                .closest("[data-remove-function]")
                .attr("data-remove-function"),
                $target = $(e.target);
              setTimeout(function () {
                var lineNumber = $(e.target).attr("data-line-number");
                eval(funcName + "(" + lineNumber + ")");
              }, 100);
              $target.closest(".lastadded-prd").addClass("ajax-process");
              $target
                .closest(".lastadded-prd")
                .nextAll(".lastadded-prd")
                .each(function () {
                  var oldlineNumber = parseInt(
                    $(this).find("[data-line-number]").attr("data-line-number"),
                    10
                  );
                  $(this)
                    .find("[data-line-number]")
                    .attr("data-line-number", oldlineNumber - 1);
                });
              setTimeout(function () {
                $lastCarousel
                  .slick(
                    "slickRemove",
                    $target.closest(".lastadded-prd").attr("data-slick-index")
                  )
                  .slick("refresh");
                if ($lastCarousel.find(".lastadded-prd").length == 0) {
                  $lastCarouselTab.closest(".title").hide();
                  if (!$upsellCarouselTab.is(":visible")) {
                    $wrapCarousel.css({
                      height: "",
                    });
                  } else {
                    $upsellCarouselTab.trigger("click");
                  }
                }
              }, removeDelay);
              e.preventDefault();
            })
            .on("click", ".js-title-upsell", function (e) {
              $upsellCarouselTab.addClass("active");
              $upsellCarouselTab.closest(".title").show();
              $upsellCarousel.removeClass("hidden-carousel");
              $lastCarouselTab.removeClass("active");
              $lastCarousel.addClass("hidden-carousel");
              e.preventDefault();
            })
            .on("click", ".js-title-lastadded", function (e) {
              $lastCarouselTab.addClass("active");
              $lastCarouselTab.closest(".title").show();
              $lastCarousel.removeClass("hidden-carousel");
              $upsellCarouselTab.removeClass("active");
              $upsellCarousel.addClass("hidden-carousel");
              e.preventDefault();
            });
          function hideCarousel() {
            $upsellCarouselTab.closest(".title").hide();
            $upsellCarouselTab.removeClass("active");
            $lastCarouselTab.closest(".title").hide();
            $lastCarouselTab.removeClass("active");
            $upsellCarousel.addClass("hidden-carousel");
            $lastCarousel.addClass("hidden-carousel");
            $wrapCarousel.css({
              height: "",
            });
            $(
              ".js-mdlchk-prd-photo,.js-mdlchk-prd-title,.js-mdlchk-prd-qty,.js-mdlchk-prd-price"
            ).html("");
          }
          function openModalEvent(modal) {
            var $modal = $(modal),
              url = url;
            parseDataCart(
              $modal.data("cart"),
              $modal.data("variant-id"),
              $modal.data("price-converter"),
              $(window).width()
            );
            var funcUpsellName = $modal
              .closest("[data-getupsells-function]")
              .attr("data-getupsells-function"),
              upsellsJson = eval(funcUpsellName)(
                $modal.data("product-handle"),
                function (data) {
                  if (data) {
                    parseUpsell(
                      data,
                      $modal.data("variant-id"),
                      $modal.data("price-converter"),
                      $modal.attr("data-btn-text"),
                      $(window).width()
                    );
                  } else {
                    if ($.trim($lastCarousel.html()).length) {
                      $lastCarouselTab.closest(".title").show();
                      $lastCarouselTab.addClass("active");
                      $lastCarousel.removeClass("hidden-carousel");
                    }
                  }
                }
              );
          }

          function closeModalEvent() {
            $lastCarousel
              .html("")
              .removeClass("slick-initialized slick-slider");
            $lastCarousel.prev(".title").find(".carousel-arrows").html("");
            $upsellCarousel
              .html("")
              .removeClass("slick-initialized slick-slider");
            $upsellCarousel.prev(".title").find(".carousel-arrows").html("");
            hideCarousel();
          }

          function parseUpsell(data, mainId, priceFunction, dataText, windowW) {
            var dataCart = data,
              dataText = $(JSON.parse(dataText)),
              upsellCarouselHtml = "",
              mainId = parseInt(mainId, 10),
              priceFunction = priceFunction,
              trunk = windowW > 1200 ? 24 : 18;
            $.each(dataCart, function (i, item) {
              if (item.id != mainId) {
                var _title = item.title,
                  status = dataText.prop(item.status),
                  statusHtml;
                if (item.status == "sold_out") {
                  statusHtml =
                    '<div class="lastadded-soldout-text custom-color-alt">' +
                    status +
                    "</div>";
                } else {
                  /*data-variant-id="'+item.variants[0].id+'" class="btn js-upsell-add-to-cart"*/
                  statusHtml =
                    '<a href="' +
                    item.url +
                    '"  class="btn">' +
                    status +
                    "</a>";
                }
                if (_title.length > trunk)
                  _title = _title.substring(0, trunk) + "...";
                upsellCarouselHtml +=
                  '<div class="lastadded-prd" data-product-id="' +
                  item.id +
                  '" data-product-status="' +
                  item.status +
                  '">';
                upsellCarouselHtml += '<div class="display-flex">';
                upsellCarouselHtml += '<div class="lastadded-prd-photo">';
                upsellCarouselHtml +=
                  '<a href="' +
                  item.url +
                  '" title="' +
                  item.title +
                  '"><div class="img-wrap"><img src="' +
                  item.images[0] +
                  '" alt="' +
                  item.title +
                  '"></div></a>';
                upsellCarouselHtml += "</div>";
                upsellCarouselHtml += '<div class="lastadded-prd-info">';
                upsellCarouselHtml +=
                  '<h2 class="lastadded-prd-title"><a href="' +
                  item.url +
                  '" title="' +
                  item.title +
                  '">' +
                  _title +
                  "</a></h2>";
                upsellCarouselHtml +=
                  '<div class="lastadded-prd-price custom-color-alt">' +
                  Shopify.formatMoney(item.price, $price_format) +
                  "</div>";
                upsellCarouselHtml += statusHtml;
                upsellCarouselHtml += "</div>";
                upsellCarouselHtml += "</div>";
                upsellCarouselHtml += "</div></div>";
              }
            });

            $.when(dataCart).then(function () {
              $upsellCarousel.html(upsellCarouselHtml);
              currencyUpdate();
              dataCarousel($upsellCarousel, $wrapCarousel, $wrapTitle);
              setTimeout(function () {
                $(".modal-content", $modal).removeClass("modal-loading");
              }, 1000);
              $upsellCarouselTab.addClass("active");
              $upsellCarouselTab.closest(".title").show();
              $upsellCarousel.removeClass("hidden-carousel");
              $lastCarouselTab.removeClass("active");
              $lastCarousel.addClass("hidden-carousel");
              if ($.trim($lastCarousel.html()).length) {
                $lastCarouselTab.closest(".title").show();
              }
            });
          }
          function parseDataCart(data, mainId, priceFunction, windowW) {
            var dataCart = JSON.parse(data),
              lastCarouselHtml = "",
              mainId = parseInt(mainId, 10),
              priceFunction = priceFunction,
              mainPrd = {},
              packagingProducts = [],
              trunk = windowW > 1200 ? 24 : 18;

            // Get packaging product handle from settings
            var packagingProductHandle = "ice-packaging";

            $.each(dataCart.cart.items, function (i, item) {
              // Check if this is a packaging product
              var isPackagingProduct = item.handle === packagingProductHandle;

              if (dataCart.cart.items[i].id != mainId) {
                var _title = item.title;
                if (_title.length > trunk)
                  _title = _title.substring(0, trunk) + "...";
                lastCarouselHtml +=
                  '<div class="lastadded-prd" data-product-id="' +
                  item.id +
                  '">';
                lastCarouselHtml += '<div class="display-flex">';
                lastCarouselHtml += '<div class="lastadded-prd-photo">';
                lastCarouselHtml +=
                  '<a href="' +
                  dataCart.cart.items[i].url +
                  '" title="' +
                  item.title +
                  '"><div class="img-wrap"><img src="' +
                  item.image +
                  '" alt="' +
                  item.title +
                  '"></div></a>';
                lastCarouselHtml +=
                  '<a href="#" class="lastadded-prd-delete js-lastadded-prd-delete" data-line-number="' +
                  (i + 1) +
                  '"><i class="icon-delete custom-color-alt"></i></a>';
                lastCarouselHtml += "</div>";
                lastCarouselHtml += '<div class="lastadded-prd-info">';
                lastCarouselHtml +=
                  '<h2 class="lastadded-prd-title"><a href="' +
                  item.url +
                  '" title="' +
                  item.title +
                  '">' +
                  _title +
                  "</a></h2>";
                lastCarouselHtml +=
                  '<div class="lastadded-prd-price custom-color-alt">' +
                  Shopify.formatMoney(item.price, $price_format) +
                  "</div>";
                lastCarouselHtml += '<div class="product-qty">';
                lastCarouselHtml +=
                  '<div class="qty qty-changer js-mdlchk-qty">';
                lastCarouselHtml += "<fieldset>";
                lastCarouselHtml +=
                  '<input type="text" class="qty-input" value="' +
                  item.quantity +
                  '" data-min="1">';
                lastCarouselHtml +=
                  '<input type="button" value="+" class="increase">';
                lastCarouselHtml +=
                  '<input type="button" value="-" class="decrease">';
                lastCarouselHtml += "</fieldset>";
                lastCarouselHtml += "</div>";
                lastCarouselHtml += "</div>";
                lastCarouselHtml += "</div>";
                lastCarouselHtml += "</div></div>";
              } else {
                mainPrd.id = item.id;
                mainPrd.photo =
                  '<a href="' +
                  item.url +
                  '" title="' +
                  item.title +
                  '"><img src="' +
                  item.image +
                  '" alt="' +
                  item.title +
                  '"></a>';
                mainPrd.title =
                  '<a href="' +
                  item.url +
                  '" title="' +
                  item.title +
                  '">' +
                  item.title +
                  "</a>";
                mainPrd.price = Shopify.formatMoney(item.price, $price_format);
                mainPrd.qty =
                  '<input type="text" class="qty-input" value="' +
                  item.quantity +
                  '" data-min="1">';
              }

              // Store packaging products for modal display
              if (isPackagingProduct) {
                packagingProducts.push({
                  title: item.title
                });
              }
            });
            currencyUpdate();
            $.when(dataCart).then(function () {
              if (lastCarouselHtml != "") {
                $lastCarousel.html(lastCarouselHtml);
                dataCarousel($lastCarousel, $wrapCarousel, $wrapTitle);
              } else {
                $lastCarousel.addClass("hidden-carousel");
                $lastCarouselTab.closest(".title").hide();
              }

              // Update main product display
              $(".js-mdlchk-row").attr("data-product-id", mainPrd.id);
              $(".js-mdlchk-prd-photo").html(mainPrd.photo);

              // Add packaging info to the title if packaging products exist
              var titleWithPackaging = mainPrd.title;
              if (packagingProducts.length > 0) {
                var packagingTitles = packagingProducts.map(function(packaging) {
                  return packaging.title;
                }).join(", ");
                titleWithPackaging = mainPrd.title + ' + ' + packagingTitles;
              }
              $(".js-mdlchk-prd-title").html(titleWithPackaging);

              $(".js-mdlchk-prd-qty").html(mainPrd.qty);
              $(".js-mdlchk-prd-price").html(mainPrd.price);

              // Add packaging products to modal if they exist
              if (packagingProducts.length > 0) {
                var packagingTitles = packagingProducts.map(function(packaging) {
                  return packaging.title;
                }).join(", ");

                // Insert packaging info after the main product info
                $(".js-mdlchk-prd-price").after(packagingInfo);
              }
            });
            $(".js-mdlchk-prd-total").html(
              '<span class="money">' +
              eval(priceFunction + "(" + dataCart.cart.total_price + ")") +
              "</span>"
            );
            $(".js-mdlchk-prd-count").html(dataCart.cart.item_count);
            currencyUpdate();
            renderPluralSingle(">1,0");
          }
        }

        // collapsed search
        function searchCollapsed(container, button) {
          $(button).on("click", function (e) {
            $(container).addClass("search-open");
            e.stopPropagation();
          });
          $(document).on("click", function (e) {
            if (!$(e.target).closest(container).length) {
              $(container).removeClass("search-open");
            }
          });
          $(".header-link").on("mouseenter", function () {
            $(".search-input").blur();
          });
        }

        function fixModalShift(fixed) {
          if ($(fixed).length) {
            var fixedCls = fixed;
            var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
            $.fn.modal.Constructor.prototype.setScrollbar = function () {
              oldSSB.apply(this);
              if (this.bodyIsOverflowing && this.scrollbarWidth)
                $(fixedCls).css("padding-right", this.scrollbarWidth);
            };

            var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
            $.fn.modal.Constructor.prototype.resetScrollbar = function () {
              oldRSB.apply(this);
              $(fixedCls).css("padding-right", "");
            };
          }
        }
        $.fn.equalHeight = function (innerDiv) {
          var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            topPosition = 0,
            currentDiv;
          $(this).each(function () {
            $(this).find(innerDiv).css({ height: "" });
            topPosition = $(this).position().top;
            if (currentRowStart != topPosition) {
              for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].find(innerDiv).height(currentTallest);
              }
              rowDivs.length = 0;
              currentRowStart = topPosition;
              currentTallest = $(this).find(innerDiv).height();
              rowDivs.push($(this));
            } else {
              rowDivs.push($(this));
              currentTallest =
                currentTallest < $(this).find(innerDiv).height()
                  ? $(this).find(innerDiv).height()
                  : currentTallest;
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
              rowDivs[currentDiv].find(innerDiv).height(currentTallest);
            }
          });
        };

        function makeEqual() {
          if (!$("body").hasClass("equal-height")) return false;
          var item = ".product-item",
            holder = ".product-item-photo-holder";
          $(holder).each(function () {
            $(this).css({ height: "auto" });
          });
          setTimeout(function () {
            $(".products-grid").each(function () {
              $(this).find(item).equalHeight(holder);
            });
          }, 1000);
        }

        $("#applyH").on("click", function () {
          var productMinheight =
            $("#minH").val() > 0 ? $("#minH").val() + "px" : "160px",
            productMaxheight =
              $("#maxH").val() > 0 ? $("#maxH").val() + "px" : "100%";
          $("head").find("style").remove();
          $("head").append(
            '<style type="text/css">.product-item-photo-holder {min-height:' +
            productMinheight +
            "}.products-grid .carousel-inner .item > a img, .products-grid .product-item .product-item-photo > a img {max-height:" +
            productMaxheight +
            "} </style>"
          );
          makeEqual();
        });

        // Scroll to Review Tab // shopify
        function scrollToReview(link, reviewID) {
          $(document).on("click", link, function () {
            var $panReview = $(reviewID),
              tabNavs = ".nav-tabs",
              tabContent = ".tab-content",
              tabPane = ".tab-pane",
              header = ".page-header";
            if ($panReview.length) {
              var tabReviewID = $panReview.closest(tabPane).attr("id"),
                $reviewTab = $panReview
                  .closest(tabContent)
                  .prev(tabNavs)
                  .find('a[href*="#' + tabReviewID + '"]');
              $reviewTab.trigger("click");
              $("html,body").animate(
                {
                  scrollTop: $(tabNavs).offset().top - $(header).height(),
                },
                500
              );
            }
          });
        }

        // Share Position Off Fix
        function sharePos() {
          $(".share-button--bot, .share-button--top")
            .on("mouseenter", function () {
              var $popup = $(this).find(".social-list-wrap"),
                $caret = $(this).find(".share-caret"),
                popupLeft = $popup.offset().left,
                diff = $(window).width() - popupLeft - $popup.width();
              if (diff < 0) {
                $popup.css({
                  "margin-left": diff - 15,
                });
                $caret.css({
                  "margin-left": -diff + 5,
                });
              }
              if ($popup.offset().left < 0) {
                $popup.css({
                  "margin-left": -popupLeft + 15,
                });
                $caret.css({
                  "margin-left": popupLeft - 15,
                });
              }
            })
            .on("mouseleave", function () {
              $(this).find(".social-list-wrap").css({
                "margin-left": "",
              });
              $(this).find(".share-caret").css({
                "margin-left": "",
              });
            });
        }
        $.fn.formValidate = function () {
          var $form = this;
          var isFormValid = true;
          var scrollspeed = 500;

          function checkForm() {
            if (!$form.find(".required-error").length) {
              isFormValid = true;
            }
          }

          function scrollToError(el) {
            var $this = el;
            var offset = 35;
            if (isFormValid == true) {
              if (el.closest(".modal-content").length) {
                $(".quick-view .modal-content .product-info-block").animate({
                  scrollTop: $this.position().top - offset,
                });
              } else {
                offset = $("body").hasClass("has-spymenu")
                  ? $(".header-sticky").height() + offset + 15
                  : offset;
                $("html,body").animate(
                  {
                    scrollTop: $this.offset().top - offset,
                  },
                  scrollspeed
                );
              }
            }
          }

          function checkAllInput() {
            $(
              'input[type="text"].required, input[type="password"].required, input[type="email"].required, textarea.required',
              $form
            ).each(function () {
              if ($.trim($(this).val()).length == 0) {
                $(this).addClass("required-error");
                $(this).siblings("label").addClass("required");
                scrollToError($(this));
                isFormValid = false;
              } else {
                $(this).removeClass("required-error");
                $(this).siblings("label").removeClass("required");
                checkForm();
              }
            });
            $("select.required", $form).each(function () {
              if ($(this).val() === "-") {
                $(this).addClass("required-error");
                $(this).siblings("label").addClass("required");
                scrollToError($(this));
                isFormValid = false;
              } else {
                $(this).removeClass("required-error");
                $(this).siblings("label").removeClass("required");
                checkForm();
              }
            });
            $('input[type="checkbox"].required', $form).each(function () {
              if (!$(this).is(":checked")) {
                $(this).addClass("required-error");
                $(this).siblings("label").addClass("required");
                scrollToError($(this));
                isFormValid = false;
              } else {
                $(this).removeClass("required-error");
                $(this).siblings("label").removeClass("required");
                checkForm();
              }
            });
            if (!isFormValid) {
              $form.addClass("form-has-error");
            } else {
              $form.removeClass("form-has-error");
            }
          }
          $(".required", $form).on("keyup change", function () {
            checkAllInput();
          });
          checkAllInput();
          return isFormValid;
        };

        $(function () {
          var mobileMenuBrp = 1025;
          var mobileMenuMini = true;

          //ALL FUNCTIONS INITIALIZATION
          $("body").addClass("body--loaded");
          showMenu(".megamenu");
          startDetect();
          scrollTo();
          fixModalShift(".page-header.transparent");
          scrollToReview(".spr-badge-caption", "#shopify-product-reviews");
          makeEqual();
          $(".megamenu").megaMenu();
          $(".collapsed-mobile").footerCollapse();
          $(".sidebar-block").blockSelectedMark();
          $(".sidebar-block-top").hideShopBy();
          $(".mobilemenu").mobileMenu(mobileMenuBrp, mobileMenuMini);
          if ($(".filter-col.fixed").length) {
            $(".filter-col.fixed").fixedSidebar();
            $(".sidebar-block").blockCollapseAccordion();
          } else {
            $(".sidebar-block").blockCollapse();
          }
          if ($(".filter-col").length) {
            $(".filter-col").isFilters();
            $(".filter-col").mobileFilter();
          }
          if ($(".header-cart").length) {
            $(".header-cart").mobileMinicart(mobileMenuBrp);
          }
          setFullHeight();
          setSticky(".page-header");
          setSliderPad(
            ".page-header",
            ".bnslider-text-content",
            ".header-topline"
          );
          searchCollapsed(".header-search--collapsed", ".search-icon");
          backToTopD(".js-back-to-top-desktop");
          backToTopM(".js-back-to-top-mobile");
          btnLoading(".btn-loading");
          setDataBg("[data-bg]");
          setDataColor("[data-color]");
          blockParallax(".jarallax");
          truncateList(".truncateList");
          modalShow("#modal1");
          checkoutModal(
            "#modalCheckout",
            ".js-add-to-cart, .js-add-to-cart-product-page"
          );
          modalInterval(".modal-countdown");
          fromBlogCarousel1(".fromBlog-style-1");
          fromBlogCarousel2(".fromBlog-style-2");
          productCarousel(".products-carousel");
          productSlideMain(".js-main-image--slide");
          testimonialCarousel(".js-testimonial-slider");
          instaFeed(".js-instagram-feed");
          productZoom(".main-image-holder");
          brandCarousel(".brand-carousel");
          insideCarousel(".product-item .carousel-inside");
          countDownIni(".countdown");
          countDownProductIni(".js-flip-countdown");
          flowtypeIni(".autosize-text");
          imageGallery();
          magnificPopup();
          hoverColor();
          hoverBg();
          colorSwatch(".color-swatch");
          tooltipIni();
          productTab(".product-tab");
          prevnextNav(".product-nav");
          viewMode(".view-mode");
          changeInput();
          productSharing();
          productHoverHeight(".product-item");
          quickView(".quick-view-link", "#quickView");
          changeForm(
            ".form-wrap-login",
            ".form-wrap-password",
            ".js-change-form",
            "#modalLogin"
          );
          addAjaxProcess(
            ".js-minicart-remove-item",
            ".minicart-product-item",
            "ajax-process"
          );
          lazyLoadSections(".block");
          sharePos();
          newsletterIni(".spy-newsletter");
          $(".js-spy").spyMenu();
          $(window).on("load", function () {
            makeEqual();
            $(".js-bodyloader").remove();
            //	newsletterIni('.spy-newsletter');
            scrollOnLoad(2000);
            topLine(".header-topline");
            //	$(".js-spy").spyMenu();
          });

          var prevWindow = window.innerWidth || $(window).width();
          $(window).on(
            "resize",
            debouncer(function (e) {
              setFullHeight();
              $("body").otherResizeH();
              var currentWindow = window.innerWidth || $(window).width();
              if (currentWindow != prevWindow) {
                $("body").otherResizeW();
                prevWindow = currentWindow;
              }
            })
          );

          $(".product-item-name").matchHeight();

          $("#modalCheckout").on("shown.bs.modal", function () {
            ;
            if (
              $("#printedCardsEnvelopes")
                .html()
                .indexOf($(this).data("variant-id")) == -1
            ) {
              // $('.gift-grid-init').css("opacity", "1").removeAttr('disabled');
              $("#gift-block").removeClass("d-none");
            } else {
              // $('.gift-grid-init').css("opacity", "0.5").attr('disabled', 'disabled');
              $("#gift-block").addClass("d-none");
            }

            // Unbind the event after it's executed once
            // $(this).off("shown.bs.modal");
          });

          $("#digitalGiftCardViaTextOrEmail").on("shown.bs.modal", function () {
            ;
            $("#email-address").on("change", function (e) {
              if ($(".error").length != 0 && e.target.value != "") {
                $(".error").remove();
                $(this).css("border-color", "#e8e8e8");
              }
            });
            $("#cell-phone").on("change", function (e) {
              ;
              if ($(".error").length != 0 && e.target.value != "") {
                $(".error").remove();
                $(this).css("border-color", "#e8e8e8");
              }
            });
            if (document.getElementById("cell-phone") != undefined) {
              IMask(document.getElementById("cell-phone"), {
                mask: "(000) 000-0000",
              });
            }

            // Unbind the event after it's executed once
            $(this).off("shown.bs.modal");
          });

          $("#modalForVenmoAddress").on("shown.bs.modal", function () {
            ;
            $("#venmo-address").on("change", function (e) {
              if ($(".error").length != 0 && e.target.value != "") {
                $(".error").remove();
                $(this).css("border-color", "#e8e8e8");
              }
            });

            // Unbind the event after it's executed once
            $(this).off("shown.bs.modal");
          });

          $("#modalVenmoCash").on("shown.bs.modal", function () {
            ;
            let firstVariant = $("#gift-options-ul").children()[0];
            document.getElementById("numbergift").value =
              firstVariant.getAttribute("data-price-format");
            document
              .getElementById("addCashToBag")
              .setAttribute(
                "data-id",
                firstVariant.getAttribute("data-variant")
              );

            // Unbind the event after it's executed once
            $(this).off("shown.bs.modal");
          });

          $(".gift-grid-init").on("click", function (e) {
            if (
              $("#printedCardsEnvelopes")
                .html()
                .indexOf($(this).data("variant-id")) == -1
            ) {
              ShowingData(e);
              $("#modalCheckout").modal("hide");
              setTimeout(() => {
                $("#termModal").remove();
                $("#modalGiftCardSelection1").html("Loading....");
                $("#modalGiftCardSelection").modal("show");
              }, 600);
            }
          });

          function ShowingData(e) {
            e.preventDefault();

            var rd = $(this).parents(".js-mdlchk-row");
            var content = $(".js-mdlchk-row2");

            rd.show();
            content.html("");

            $("#modalGiftCardSelection").one(
              "shown.bs.modal",
              async function () {
                await GetGiftCards(1, 20);

                $(this).off("shown.bs.modal");
              }
            );
          }

          $(document).on("click", "#add_bag", function (e) {
            ;
            if (
              $("#modalGiftCardSelection").data("modalFor") ==
              "digital-gift-card-via-text"
            ) {
              //open phone number modal
              $("#modalGiftPrice").modal("hide");
              $("#digitalGiftCardViaTextOrEmail1").html(`
		  <div>
			<h3 class="giftcard-heading">PROVIDE RECIPIENT'S CELL PHONE NUMBER</h3>
			<p class="venmo-subheading">Enter the name & cell phone number of the person that you'd like us to text this digital gift card to.</p>
			<form id="contact-form">
			  <div class="row">
				  <div class="col-md-6 col-xs-12">
					<label for="first-name">First Name:</label>
					<input type="text" id="first-name" class="form-control cstm-input" name="first-name">
				  </div>
				  <div class="col-md-6 col-xs-12">
					<label for="last-name">Last Name:</label>
					<input required type="text" id="last-name" class="form-control cstm-input" name="last-name">
				  </div>
			  </div>
			  <div class="contact-div">
				<label for="cell-phone">Cell Phone:</label>
				<input required type="text" id="cell-phone" class="form-control cstm-input" name="cell-phone" placeholder="Ex: (xxx) xxx-xxxx" />
			  </div>
			  <button type="button" class="btn btn-block btn-lg" id="btn-save">Continue</button>
			</form>
		  </div>`);
              setTimeout(() => {
                $("#digitalGiftCardViaTextOrEmail").modal("show");
              }, 600);
            } else if (
              $("#modalGiftCardSelection").data("modalFor") ==
              "digital-gift-card-via-email"
            ) {
              //open email modal
              $("#modalGiftPrice").modal("hide");
              $("#digitalGiftCardViaTextOrEmail1").html(`
		  <div>
			<h3 class="giftcard-heading">PROVIDE RECIPIENT'S EMAIL ADDRESS</h3>
			<p class="venmo-subheading">Enter the name & email address of the person that you'd like us to send this digital gift card to. </p>
			<form id="contact-form">
			  <div class="row">
				  <div class="col-md-6 col-xs-12">
					<label for="first-name">First Name:</label>
					<input type="text" id="first-name" class="form-control cstm-input" name="first-name">
				  </div>
				  <div class="col-md-6 col-xs-12">
					<label for="last-name">Last Name:</label>
					<input required type="text" id="last-name" class="form-control cstm-input" name="last-name">
				  </div>
			  </div>
			  <div class="contact-div">
				<label for="email-address">Email:</label>
				<input type="text" id="email-address" class="form-control cstm-input" name="email-address" placeholder="Ex: name@domain.com">
			  </div>
			  <button type="button" class="btn btn-block btn-lg" id="btn-save">Continue</button>
			</form>
		  </div>`);
              setTimeout(() => {
                $("#digitalGiftCardViaTextOrEmail").modal("show");
              }, 600);
            } else {
              addDigitalCard();
            }
          });

          $(document).on("click", "#addCashToBag", function (e) {
            ;
            //open venmo cash modal
            $("#modalVenmoCash").modal("hide");
            if (
              CartJS.cart.items
                .map((x) => x.id)
                .some((item) => $sendCashViaVenmoIds.includes(item))
            ) {
              $("#modalForVenmoAddress1").html(
                `<div class="giftrow"><p>You can only add one send cash (via venmo) per order</p></div>`
              );
            } else {
              $("#modalForVenmoAddress1").html(`
		  <div>
			<h3 class="giftcard-heading">PROVIDE RECIPIENT'S @Payname</h3>
			<p class="venmo-subheading">Enter the Venmo @Payname of the person that you'd like us to send this cash to.</p>
			<form id="contact-form">
			  <div class="contact-div">
				<label for="venmo-address"><b>Venmo</b> @Payname</label>
				<div class="input-group input-group-lg">
				  <span class="input-group-addon" id="basic-addon1">@</span>
				  <input type="text" id="venmo-address" class="form-control cstm-input" aria-describedby="basic-addon1" placeholder="@Name">
				</div>
			  </div>
			  <button type="button" class="btn btn-block btn-lg" id="btn-save">Continue</button>
			  <div class="d-flex flex-center flex-center"><img src="https://cdn.shopify.com/s/files/1/0508/9994/3601/files/Group_42671.svg?v=1718961988" width="130"></div>
			</form>
		  </div>`);
            }
            setTimeout(() => {
              $("#modalForVenmoAddress").modal("show");
            }, 600);
          });

          $("#digitalGiftCardViaTextOrEmail").on(
            "click",
            "#btn-save",
            function () {
              ;
              var firstName = $("#first-name").val().trim();
              var lastName = $("#last-name").val().trim();
              var emailAddress;
              var cellPhone;
              // Clear previous errors
              $(".error").remove();

              if (
                $("#modalGiftCardSelection").data("modalFor") ==
                "digital-gift-card-via-email"
              ) {
                // Validate Email Address
                emailAddress = $("#email-address").val().trim();
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailAddress === "") {
                  $("#email-address").after(
                    '<span class="error">Email address is required</span>'
                  );
                  $("#email-address").css("border-color", "red");
                  return false;
                } else if (!emailPattern.test(emailAddress)) {
                  $("#email-address").after(
                    '<span class="error">Invalid email address format</span>'
                  );
                  $("#email-address").css("border-color", "red");
                  return false;
                }
              } else if (
                $("#modalGiftCardSelection").data("modalFor") ==
                "digital-gift-card-via-text"
              ) {
                // Validate Cell Phone
                cellPhone = $("#cell-phone").val().trim();
                var phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
                if (cellPhone === "") {
                  $("#cell-phone").after(
                    '<span class="error">Cell phone number is required</span>'
                  );
                  $("#cell-phone").css("border-color", "red");
                  return false;
                } else if (!phonePattern.test(cellPhone)) {
                  $("#cell-phone").after(
                    '<span class="error">Invalid phone number format. Use (xxx) xxx-xxxx</span>'
                  );
                  $("#cell-phone").css("border-color", "red");
                  return false;
                }
              }

              $(this).prop("disabled", true);
              let splMsgItem = CartJS.cart.items.find(
                (cartItem) =>
                  cartItem.id == $personalizedWrittenAudioVideoMessageId
              );
              if (!splMsgItem) {
                var custom_line_properties = {
                  _GiftCard: false,
                  _SplMsg: true,
                  _SortIndex: 2,
                };
                CartJS.addItem(
                  $personalizedWrittenAudioVideoMessageId,
                  1,
                  custom_line_properties,
                  {
                    success: function (data, textStatus, jqXHR) {
                      addDigitalCard(
                        $("#modalGiftCardSelection").data("modalFor"),
                        firstName,
                        lastName
                      );
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                      console.error(errorThrown);
                    },
                  }
                );
              }
            }
          );

          $("#modalForVenmoAddress").on("click", "#btn-save", function (e) {
            e.preventDefault();
            $(".error").remove();

            const contact = $("#modalForVenmoAddress input").val();

            if (!contact) {
              $("#venmo-address")
                .closest("div")
                .after('<span class="error">Venmo address is required</span>');
              $("#venmo-address").css("border-color", "red");
              return;
            }

            // Save for next step
            sessionStorage.setItem("venmoAddress", contact);

            // Inject HTML into modalForVenmoMessage
            const messageModalHTML = `
              <div class="gift-card text-center">
                <h3 class="giftcard-heading">WRITE YOUR ANONYMOUS MESSAGE</h3>
                <p class="venmo-subheading">
                  The message you draft below will be included with the cash we send to your recipient.
                  Please note that if they have their Venmo account set to "Public", anyone their Venmo friends can see it.
                </p>

                <form id="anonymous-message-form" class="d-flex flex-column align-items-center">
                 <span class="venmo-form-title">Message:</span>
                 <div class="text-area">
                      <textarea
                        id="venmo-message"
                        class="form-control"
                        maxlength="200"
                        rows="4"
                        style="width: 100%; padding: 1rem; font-size: 1.2rem;"
                        maxlength="200"
                        placeholder="Type your message here... (200 character limit)"
                      ></textarea>
                    <span id="message-count" style="position: absolute; bottom: 10px; right: 15px; color: #aaa; font-size: 1rem;">0/20</span>
                  </div>
                  <p class="comply-text">If message includes content that does not comply with our <a href="/policies/terms-of-service" target="_blank">Terms of Use</a>, it will not be sent.</p>

                  <button
                    type="button"
                    id="continue-message"
                    class="btn gift-btn-gold dev-rounded mt-4"
                    style="padding: 10px 30px;"
                  >
                    Continue
                  </button>
                </form>
              </div>
            `;

            $("#modalForVenmoMessage1").html(messageModalHTML);
            $("#modalForVenmoAddress").modal("hide");
            $("#modalForVenmoMessage").modal("show");
          });

          $(document).on("click", "#continue-message", function () {
            const message = $("#venmo-message").val().trim();
            const contact = sessionStorage.getItem("venmoAddress");
            const id = $("#addCashToBag").attr("data-id");

            if (!message) {
              alert("Please enter a message.");
              return;
            }

            if (!contact || !id) {
              alert("Missing contact or variant ID. Please restart.");
              return;
            }

            $(this).prop("disabled", true);

            // Optional: add a custom message line item (if needed separately)
            const custom_line_properties = {
              _GiftCard: false,
              _SplMsg: true,
              _SortIndex: 2,
              _Message: message,
            };

            CartJS.addItem($personalizedWrittenAudioVideoMessageId, 1, custom_line_properties, {
              success: function () {
                // Add the main Venmo product with both _Contact and _Message
                $.ajax({
                  type: "POST",
                  url: "/cart/add.js",
                  dataType: "json",
                  data: {
                    id: id,
                    properties: {
                      _GiftCard: false,
                      _SplMsg: false,
                      _SortIndex: 1,
                      _For: "send-cash-via-venmo",
                      _Contact: contact,
                      _Message: message,
                    },
                  },
                  success: function () {
                    // Optionally add processing fee
                    $.ajax({
                      type: "POST",
                      url: "/cart/add.js",
                      dataType: "json",
                      data: {
                        id: $venmoProcessingFeeId,
                      },
                      success: function () {
                        window.location.href = "/cart";
                      },
                      error: function () {
                        window.location.href = "/cart";
                      },
                    });
                  },
                  error: function () {
                    alert("Failed to add main Venmo product.");
                    $("#continue-message").prop("disabled", false);
                  },
                });
              },
              error: function () {
                alert("Failed to add personalized message item.");
                $("#continue-message").prop("disabled", false);
              },
            });
          });




          $("#modalGiftCardSelection").one("shown.bs.modal", async function () {
            await GetGiftCards(1, 20);
            // Unbind the event after it's executed once
            $(this).off("shown.bs.modal");
          });

          /*---------------------MODAL GiftCard-----------------------------*/

          // Helper function to check if cached data is still valid
          function isCachedDataValid(cacheKey, expirationDays = 7) {
            const cached = localStorage.getItem(cacheKey);
            if (!cached) return false;

            try {
              const data = JSON.parse(cached);
              const now = new Date().getTime();
              const expirationTime = data.timestamp + (expirationDays * 24 * 60 * 60 * 1000);

              return now < expirationTime;
            } catch (e) {
              return false;
            }
          }

          // Helper function to get cached data
          function getCachedData(cacheKey) {
            try {
              const cached = localStorage.getItem(cacheKey);
              return cached ? JSON.parse(cached).data : null;
            } catch (e) {
              return null;
            }
          }

          // Helper function to cache data
          function cacheData(cacheKey, data) {
            try {
              const cacheObject = {
                data: data,
                timestamp: new Date().getTime()
              };
              localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
            } catch (e) {
              console.warn('Failed to cache data:', e);
            }
          }

          async function GetGiftCards(
            pageNumber = 1,
            pageSize = 20,
            productName = "",
            productDescription = ""
          ) {
            // Use a single cache key for all gift card data per session
            const cacheKey = `giftCards_all_data`;

            // Check if we have valid cached data
            if (isCachedDataValid(cacheKey)) {
              const allCachedProducts = getCachedData(cacheKey);
              if (allCachedProducts) {
                console.log('🎁 Using cached gift card data - no API call needed');
                // Filter and paginate the cached data
                const filteredProducts = filterAndPaginateProducts(allCachedProducts, productName, productDescription, pageNumber, pageSize);
                renderGiftCards(filteredProducts, pageNumber, productName || productDescription);
                return;
              }
            }

            console.log('🚀 Making initial API request for gift cards...');
            //get giftcards
            //filter on  "denominationType": and values
            let existingPriceList = [10, 25, 50, 100, 200, 500];
            let stageUrl = "https://localhost:7242/api/EGifter/GetProducts?";
            let productionUrl =
              "https://yourgreetings-server.azurewebsites.net/api/EGifter/GetProducts?";

            // Fetch a larger dataset to cache everything at once
            let url = `${productionUrl}pageIndex=1&pageSize=500&productName=&productDescription=`;

            $.ajax({
              method: "GET",
              async: false,
              url: url,
              dataType: "json",
              success: function (products) {
                console.log('✅ API request successful - caching gift card data');
                // Cache ALL the gift card data
                cacheData(cacheKey, products.data);

                // Filter and paginate the data for current request
                const filteredProducts = filterAndPaginateProducts(products.data, productName, productDescription, pageNumber, pageSize);
                renderGiftCards(filteredProducts, pageNumber, productName || productDescription);
              },
              error: function (e) {
                console.log('❌ API request failed - attempting to use expired cache');
                // If API fails, try to use cached data even if expired
                const allCachedProducts = getCachedData(cacheKey);
                if (allCachedProducts) {
                  console.warn('Using expired cached data due to API failure');
                  const filteredProducts = filterAndPaginateProducts(allCachedProducts, productName, productDescription, pageNumber, pageSize);
                  renderGiftCards(filteredProducts, pageNumber, productName || productDescription);
                } else {
                  console.error('Failed to fetch gift cards and no cached data available');
                  $("#modalGiftCardSelection1").html('<div class="gift-card"><p>Unable to load gift cards. Please try again later.</p></div>');
                }
              },
            });
          }

          // Helper function to filter and paginate products
          function filterAndPaginateProducts(allProducts, productName, productDescription, pageNumber, pageSize) {
            let filteredProducts = allProducts;

            // Apply search filter if provided
            if (productName || productDescription) {
              const searchTerm = (productName || productDescription).toLowerCase();
              filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm))
              );
            }

            // Apply pagination
            const startIndex = (pageNumber - 1) * pageSize;
            const endIndex = startIndex + pageSize;

            return {
              products: filteredProducts.slice(startIndex, endIndex),
              totalCount: filteredProducts.length,
              currentPage: pageNumber,
              totalPages: Math.ceil(filteredProducts.length / pageSize)
            };
          }

          // Separate function to render gift cards
          function renderGiftCards(products, pageNumber, searchTerm = "") {
            let productsHtml = products.products.map((s) => {
              let i = s.id.trim();
              let content = `<div class="voucher-card egifter-card" style="
				position: relative;">
				<a href = "#" onclick="clickvoucher('${s.id}','${JSON.stringify(
                s.denominations
              ).toString()}','${s.denominationType}','${s.media.faceplates[0].path
                }')">
		<img src="${s.media.faceplates[0].path}" alt="" class="voucher-img" />

		<div class="voucher-card-footer">
			<p class="voucher-name">
				${s.name}
			</p>

		</div>
		</a>
		<div class= "d-none" id="${s.id}">
			<div id = "redemptionNote" class="d-none">${s.redemptionNote}</div>
			<div id = "terms" class="d-none">${s.terms}</div>
			</div>
		<button onclick="openterms('${s.id}')" class="tooltip1" style="
			position: absolute;
			top: 0;
			right: 0;
			/* padding: 0.5rem; */
			background: black;
			border-radius: 50%;
			height: 25px;
			width: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0.25rem;
		" class=""><i class="fa fa-info-circle" style="
			color: white;
		"></i>
			</button>
	</div>`;
              //console.log(s.id, s.denominations);
              return content;
            });

            //console.log(productsHtml);

            // Show clear search button only if there's an active search
            const clearSearchHtml = searchTerm ? `
              <div class="clear-search-container" style="margin: auto; margin-top: 10px; text-align: center;">
                <button id="clear-search-btn" class="btn-clear-search" style="
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 4px;
                    padding: 8px 16px;
                    color: #000000;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: normal;
                    border: 1px solid;
                ">
                  <i class="fa fa-times" style="margin-right: 5px;"></i>
                  Clear Search
                </button>
              </div>
            ` : '';

            // Show no results message if no products found
            let productsContainer;
            if (products.products.length === 0 && searchTerm) {
              productsContainer = ` <div class="gift-card">
	<div class="header-sec">
		<h1 class="heading">Select a Gift card</h1>
		<p class="sub-heading">(You'll choose dollar amount on next screen)</p>
	</div>
	<div class="box-fluid">
		<div class="box-header">
			<h2 class="box-heading">Featured Cards</h2>

			<div class="search-box">
				<input type="text" name="" id="gift-search-bar" placeholder="Search for brands or products" class="search-input" value="${searchTerm}" />
				<button class="btn-search" id="gift-search-btn">
					<i class="icon icon-magnify"></i>
					</button>
					</div>
					${clearSearchHtml}

		</div>
		<div class="box-body" style="text-align: center; padding: 40px 20px;">
			<p style="font-size: 18px; color: #666; margin-bottom: 20px;">There are no results but clear search to find other awesome gift ideas!</p>
		</div>
		<div class="box-footer">
			<button class="btn-prev" id="btn-prev">Prev</button>
			<button class="btn-next" id="btn-next">Next</button>
		</div>
	</div>
</div>`;
            } else {
              productsContainer = ` <div class="gift-card">
	<div class="header-sec">
		<h1 class="heading">Select a Gift card</h1>
		<p class="sub-heading">(You'll choose dollar amount on next screen)</p>
	</div>
	<div class="box-fluid">
		<div class="box-header">
			<h2 class="box-heading">Featured Cards</h2>

			<div class="search-box">
				<input type="text" name="" id="gift-search-bar" placeholder="Search for brands or products" class="search-input" value="${searchTerm}" />
				<button class="btn-search" id="gift-search-btn">
					<i class="icon icon-magnify"></i>
					</button>
					</div>
					${clearSearchHtml}

		</div>
		<div class="box-body">
			${productsHtml.join("")}

		</div>
		<div class="box-footer">
			<button class="btn-prev" id="btn-prev">Prev</button>
			<button class="btn-next" id="btn-next">Next</button>
		</div>
	</div>
</div>`;
            }

            $("#modalGiftCardSelection1").empty();
            $("#modalGiftCardSelection1").append(productsContainer);

            // Preserve focus and cursor position in search input
            const searchInput = document.getElementById("gift-search-bar");
            if (searchInput) {
              const cursorPosition = window.lastSearchCursorPosition || searchInput.value.length;
              searchInput.focus();
              searchInput.setSelectionRange(cursorPosition, cursorPosition);
            }

            // Update button states based on pagination data
            const $btnPrev = $("#btn-prev");
            const $btnNext = $("#btn-next");

            // Disable prev button if on first page
            if (products.currentPage <= 1) {
              $btnPrev.attr("disabled", "true").addClass("disabled");
            } else {
              $btnPrev.removeAttr("disabled").removeClass("disabled");
            }

            // Disable next button if on last page or no more data
            if (products.currentPage >= products.totalPages || products.products.length === 0) {
              $btnNext.attr("disabled", "true").addClass("disabled");
            } else {
              $btnNext.removeAttr("disabled").removeClass("disabled");
            }

            // $('.egifter-card').on('click', function(e){
            // 	;
            // 	e.preventDefault();
            // 	console.log(e);
            // })

            $("#gift-search-btn").on("click", function () {
              let value = document
                .getElementById("gift-search-bar")
                .value.trim();
              if (value.length == 0) {
                return;
              }
              GetGiftCards(1, 20, value, value);
            });

            // Add Enter key functionality to search bar
            $("#gift-search-bar").on("keydown", function (e) {
              if (e.key === "Enter") {
                let value = this.value.trim();
                if (value.length == 0) {
                  return;
                }
                GetGiftCards(1, 20, value, value);
              }
            });

            // Add real-time search functionality
            let searchTimeout;
            $("#gift-search-bar").on("input", function () {
              let value = this.value.trim();
              let cursorPosition = this.selectionStart;

              // Clear previous timeout
              clearTimeout(searchTimeout);

              // Set a new timeout to delay the search
              searchTimeout = setTimeout(function() {
                // Store cursor position before search
                window.lastSearchCursorPosition = cursorPosition;
                GetGiftCards(1, 20, value, value);
              }, 300); // 300ms delay to avoid too many API calls
            });

            // Add clear search functionality
            $("#clear-search-btn").on("click", function () {
              document.getElementById("gift-search-bar").value = "";
              GetGiftCards(1, 20, "", "");
            });

            $("#btn-next").on("click", function () {
              // Only proceed if button is not disabled
              if (!$(this).is(":disabled")) {
                var i = pageNumber + 1;
                GetGiftCards(i, 20);
              }
            });
            $("#btn-prev").on("click", function () {
              // Only proceed if button is not disabled
              if (!$(this).is(":disabled")) {
                if (pageNumber === 1) {
                  return;
                }
                var i = pageNumber - 1;
                GetGiftCards(i, 20);
              }
            });
          }
        });
      },
      {},
    ],
  },
  {},
  [1]
);
function clickvoucher(id, denominations, denominationType, image) {
  let data = {
    id: id,
    denomination: denominations,
  };
  let denomObj = JSON.parse(denominations);

  $("#modalGiftCardSelection").modal("hide");
  setTimeout(() => {
    $("#modalGiftPrice").modal("show");
  }, 600);
  $.ajax({
    method: "GET",
    url: "/cart.js",
    dataType: "json",
    success: function (r) {
      ;
      var indices = [];
      $digitalGiftCardIds.forEach(function (valor, indice, array) {
        var u = r.items.findIndex((_item) => _item.id === valor);
        if (u >= 0) {
          indices.push(valor);
        }
      });
      if (indices.length > 0) {
        $(".js-mdlchk-rows2").html(
          `<p>You can only add one gift card per order</p>`
        );
      } else {
        var rd = $(this).parents(".js-mdlchk-rows");
        var content = $(".js-mdlchk-rows2");
        rd.hide();
        content.html(``);
        var theTemplateScript = $("#giftcard-template").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var context = {};
        var theCompiledHtml = theTemplate(context);
        content.html(theCompiledHtml);
        let giftPrices = [];
        $("#gift-options-ul")
          .children()
          .each((i, e) =>
            giftPrices.push({
              price: $(e).data("price") / 100,
              id: $(e).data("variant"),
            })
          );
        $("#giftImage").attr("src", image);
        if (denominationType.includes("Variable")) {
          //variable
          let firstDenom = denomObj[0];
          let lastDenom = denomObj[denomObj.length - 1];
          giftPrices.forEach((gp) => {
            if (gp.price < firstDenom) {
              $("li[data-variant='" + gp.id + "']").remove();
            }
          });
          giftPrices.forEach((gp) => {
            if (gp.price > lastDenom) {
              $("li[data-variant='" + gp.id + "']").remove();
            }
          });
          let firstVariant = $("#gift-options-ul").children()[0];
          document.getElementById("numbergift").value =
            firstVariant.getAttribute("data-price-format");
          document
            .getElementById("add_bag")
            .setAttribute("data-id", firstVariant.getAttribute("data-variant"));
        } else {
          //fixed
          $(".value-button").css("display", "none");
          giftPrices.forEach((gp) => {
            if (!denomObj.includes(gp.price)) {
              $("li[data-variant='" + gp.id + "']").remove();
            }
          });
          let firstVariant = $("#gift-options-ul").children()[0];
          document.getElementById("numbergift").value =
            firstVariant.getAttribute("data-price-format");
          document
            .getElementById("add_bag")
            .setAttribute("data-id", firstVariant.getAttribute("data-variant"));
        }
        var r = `<input id= 'productId' type ='hidden' value = '${id}'></input> <input id = 'productImage' type ='hidden' value = '${image}'></input>`;
        $(".gifcard-content").append(r);
        //console.log(giftPrices);
      }
    },
  });
}

function openterms(id) {
  let redemptionNote = $(`#${id} #redemptionNote`).html();
  var t = `<div style="width: 100%;height: 100%;position: absolute;background: white;z-index: 999;padding: 1rem clamp(0.15rem, 3rem, 8.5rem);" id = "termModal">
<div style="padding-top:clamp(0px, 9rem, 10rem);">
<div><b>Redemption Note :</b> ${redemptionNote} </div>
<div><b>Terms :</b> ${$(`#${id} #terms`).html()} </div>
<button onclick="closeDisclaimer()">Close</button>
</div>
</div>`;
  $("#modalGiftCardSelection .modal-dialog").prepend(t);
}
function closeDisclaimer() {
  $("#termModal").remove();
}

function addDigitalCard(modalFor, firstName, lastName) {
  ;
  var id = $("#add_bag").attr("data-id");
  let giftId = document.getElementById("productId").value;
  let giftImage = document.getElementById("productImage").value;
  let contact;
  if (
    $("#modalGiftCardSelection").data("modalFor") ==
    "digital-gift-card-via-email"
  )
    contact = $("#email-address").val();
  else if (
    $("#modalGiftCardSelection").data("modalFor") ==
    "digital-gift-card-via-text"
  )
    contact = $("#cell-phone").val();

  if (id.length !== 0) {
    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      dataType: "json",
      data: {
        id: id,
        properties: {
          _GiftCard: true,
          _SplMsg: false,
          _SortIndex: 1,
          _Id: giftId,
          _Image: giftImage,
          _For: modalFor,
          _Contact: contact,
          _FirstName: firstName,
          _LastName: lastName,
        },
      },
      success: function (r) {
        $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: {
            id: 44236446269617,
          },
          success: function (r) {
            window.location.href = "/cart";
          },
          error: function () { },
        });
      },
      error: function () { },
    });
  }
}


// modal text count
$(document).on("input", "#venmo-message", function () {
  const max = 200;
  const len = $(this).val().length;
  $("#message-count").text(`${len}/${max}`);
});
