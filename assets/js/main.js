(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore write failures (e.g. private mode) */
    }
  }

  function systemPrefersLight() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    );
  }

  function applyTheme(theme, toggle) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "light"));
    }
  }

  function initTheme(toggle) {
    var stored = getStoredTheme();
    var theme = stored || (systemPrefersLight() ? "light" : "dark");
    applyTheme(theme, toggle);

    // Follow OS changes only when the user hasn't chosen explicitly.
    if (!stored && window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: light)");
      var onChange = function (event) {
        if (!getStoredTheme()) {
          applyTheme(event.matches ? "light" : "dark", toggle);
        }
      };
      if (mq.addEventListener) {
        mq.addEventListener("change", onChange);
      } else if (mq.addListener) {
        mq.addListener(onChange);
      }
    }
  }

  function initToggle() {
    var toggle = document.getElementById("theme-toggle");
    initTheme(toggle);
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next, toggle);
      storeTheme(next);
    });
  }

  function initCopyBio() {
    var button = document.getElementById("copy-bio");
    var bio = document.getElementById("bio-text");
    if (!button || !bio) return;

    var label = button.querySelector(".copy-btn-label");
    var defaultText = label ? label.textContent : "";
    var resetTimer = null;

    function showCopied() {
      button.classList.add("is-copied");
      if (label) label.textContent = "Copied!";
      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        button.classList.remove("is-copied");
        if (label) label.textContent = defaultText;
      }, 2000);
    }

    function fallbackCopy(text) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "absolute";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        showCopied();
      } catch (e) {
        /* nothing else to do */
      }
      document.body.removeChild(area);
    }

    button.addEventListener("click", function () {
      var text = bio.textContent.replace(/\s+/g, " ").trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showCopied, function () {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* Sliding hover highlight for the nav (Framer shared-layout style) */
  function initNavPill() {
    var nav = document.querySelector(".nav");
    var pill = nav && nav.querySelector(".nav-pill");
    if (!nav || !pill) return;
    var links = nav.querySelectorAll(".nav-link");

    function moveTo(link) {
      pill.style.width = link.offsetWidth + "px";
      pill.style.height = link.offsetHeight + "px";
      pill.style.transform =
        "translate(" + link.offsetLeft + "px, " + link.offsetTop + "px)";
      pill.classList.add("is-active");
    }

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener("mouseenter", function () {
        moveTo(link);
      });
      link.addEventListener("focus", function () {
        moveTo(link);
      });
    });

    nav.addEventListener("mouseleave", function () {
      pill.classList.remove("is-active");
    });
    nav.addEventListener("focusout", function (e) {
      if (!nav.contains(e.relatedTarget)) {
        pill.classList.remove("is-active");
      }
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function initReveal() {
    // Elements that fade+slide up, in visual order.
    var selectors = [
      ".tagline",
      ".avatar",
      ".intro-body p",
      ".bio .section-title",
      ".bio .section-note",
      ".bio-text",
      ".bio-actions",
      ".site-footer .social"
    ];
    var nodes = [];
    selectors.forEach(function (sel) {
      Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) {
        nodes.push(el);
      });
    });
    if (!nodes.length) return;

    nodes.forEach(function (el) {
      el.setAttribute("data-reveal", "");
    });

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    // Stagger elements already in view on load for a cascading entrance.
    var inView = [];
    var step = 70; // ms between staggered items

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        inView.push(el);
      } else {
        observer.observe(el);
      }
    });

    // Reveal the initial batch with a staggered delay.
    inView.forEach(function (el, i) {
      el.style.setProperty("--reveal-delay", i * step + "ms");
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.classList.add("is-visible");
        });
      });
    });
  }

  /* Language picker (EN / PT) */
  function initLang() {
    var picker = document.getElementById("lang-picker");
    var button = document.getElementById("lang-button");
    var menu = document.getElementById("lang-menu");
    var currentLabel = button && button.querySelector(".lang-current");
    var codes = { en: "EN", pt: "PT" };

    function getStored() {
      try {
        return localStorage.getItem("lang");
      } catch (e) {
        return null;
      }
    }
    function store(lang) {
      try {
        localStorage.setItem("lang", lang);
      } catch (e) {
        /* ignore */
      }
    }

    function apply(lang) {
      root.setAttribute("lang", lang);
      Array.prototype.forEach.call(
        document.querySelectorAll("[data-en]"),
        function (el) {
          var val = el.getAttribute("data-" + lang);
          if (val !== null) el.textContent = val;
        }
      );
      Array.prototype.forEach.call(
        document.querySelectorAll("[data-en-html]"),
        function (el) {
          var val = el.getAttribute("data-" + lang + "-html");
          if (val !== null) el.innerHTML = val;
        }
      );
      Array.prototype.forEach.call(
        document.querySelectorAll("[data-en-aria]"),
        function (el) {
          var val = el.getAttribute("data-" + lang + "-aria");
          if (val !== null) el.setAttribute("aria-label", val);
        }
      );
      if (currentLabel) currentLabel.textContent = codes[lang] || lang.toUpperCase();
      if (menu) {
        Array.prototype.forEach.call(
          menu.querySelectorAll("[data-lang]"),
          function (li) {
            li.setAttribute(
              "aria-selected",
              li.getAttribute("data-lang") === lang ? "true" : "false"
            );
          }
        );
      }
    }

    var stored = getStored();
    var initial =
      stored ||
      (navigator.language &&
      navigator.language.toLowerCase().indexOf("pt") === 0
        ? "pt"
        : "en");
    apply(initial);

    if (!picker || !button || !menu) return;

    function openMenu() {
      menu.hidden = false;
      button.setAttribute("aria-expanded", "true");
    }
    function closeMenu() {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.hidden ? openMenu() : closeMenu();
    });
    menu.addEventListener("click", function (e) {
      var li = e.target.closest("[data-lang]");
      if (!li) return;
      var lang = li.getAttribute("data-lang");
      apply(lang);
      store(lang);
      closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (!picker.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  function init() {
    initLang();
    initToggle();
    initCopyBio();
    initYear();
    initNavPill();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
