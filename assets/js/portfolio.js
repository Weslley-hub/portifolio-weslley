(function () {
  "use strict";

  function removePreload() {
    document.body.classList.remove("preload-transitions");
  }

  if (document.readyState === "complete") {
    removePreload();
  } else {
    window.addEventListener("load", removePreload);
  }

  // GitHub chart fallback
  document.querySelectorAll("[data-ghchart]").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.display = "none";
      var fb = img.nextElementSibling;
      if (fb) fb.hidden = false;
    });
  });

  // Scroll reveal
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.style.getPropertyValue("--reveal-delay") || "0ms";
            entry.target.style.transitionDelay = delay;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Theme toggle rotate hint
  var toggle = document.getElementById("dark-mode-toggle");
  if (toggle) {
    toggle.setAttribute("aria-label", "Toggle color scheme");
    toggle.addEventListener("click", function () {
      toggle.classList.add("is-rotating");
      setTimeout(function () {
        toggle.classList.remove("is-rotating");
      }, 300);
    });
  }

  // Hamburger keyboard
  var menuBtn = document.querySelector(".menu-button");
  var menuToggle = document.getElementById("menu-toggle");
  if (menuBtn && menuToggle) {
    menuBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menuToggle.checked = !menuToggle.checked;
      }
    });
  }
})();
