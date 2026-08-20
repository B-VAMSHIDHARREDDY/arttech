/* Artech IT Solutions — main.js
   Vanilla JS only. No dependencies. Respects prefers-reduced-motion. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Sticky header ---------------- */
  var header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------------- Mobile nav ---------------- */
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      hamburger.classList.toggle("is-active", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        hamburger.classList.remove("is-active");
        document.body.classList.remove("nav-open");
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    var groupCounters = new WeakMap();
    revealEls.forEach(function (el) {
      var group = el.closest("[data-reveal-group]");
      if (group) {
        var n = groupCounters.has(group) ? groupCounters.get(group) : 0;
        el.style.setProperty("--i", n % 8);
        groupCounters.set(group, n + 1);
      } else {
        el.style.setProperty("--i", 0);
      }
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------------- Animated counters ---------------- */
  var counters = document.querySelectorAll("[data-counter]");
  if (counters.length && "IntersectionObserver" in window) {
    var counterIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (c) { counterIO.observe(c); });
  }
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-counter"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = reduceMotion ? 0 : 1400;
    if (dur === 0) { el.textContent = target + suffix; return; }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = Math.floor(eased * target);
      el.textContent = val + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Process / journey scroll-in-view state ---------------- */
  var stageEls = document.querySelectorAll(".jstage, .process-item");
  if (stageEls.length && "IntersectionObserver" in window) {
    var stageIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.4 }
    );
    stageEls.forEach(function (el) { stageIO.observe(el); });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".faq-a").style.maxHeight = null;
          openItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });
      if (isOpen) {
        item.classList.remove("is-open");
        a.style.maxHeight = null;
        q.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------- Solutions tabs ---------------- */
  var solTabs = document.querySelectorAll(".sol-tab");
  var solPreviews = document.querySelectorAll(".sol-preview-inner");
  solTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-target");
      solTabs.forEach(function (t) { t.classList.remove("is-active"); });
      solPreviews.forEach(function (p) { p.classList.remove("is-active"); });
      tab.classList.add("is-active");
      var panel = document.getElementById(target);
      if (panel) panel.classList.add("is-active");
    });
  });

  /* ---------------- Testimonial carousel ---------------- */
  var track = document.querySelector(".tcarousel-track");
  if (track) {
    var prevBtn = document.querySelector('[data-carousel="prev"]');
    var nextBtn = document.querySelector('[data-carousel="next"]');
    function cardWidth() {
      var card = track.querySelector(".tcard");
      return card ? card.getBoundingClientRect().width + 22 : 320;
    }
    if (nextBtn) nextBtn.addEventListener("click", function () {
      track.scrollBy({ left: cardWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    });
    if (prevBtn) prevBtn.addEventListener("click", function () {
      track.scrollBy({ left: -cardWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Hero visual — subtle parallax on mouse ---------------- */
  var hvStage = document.querySelector(".hv-stage");
  if (hvStage && !reduceMotion && window.matchMedia("(hover:hover)").matches) {
    var heroSection = document.querySelector(".hero");
    heroSection && heroSection.addEventListener("mousemove", function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      hvStage.style.transform = "translate(" + (x * -14) + "px," + (y * -10) + "px)";
    });
    heroSection && heroSection.addEventListener("mouseleave", function () {
      hvStage.style.transform = "translate(0,0)";
    });
  }

  /* ---------------- Magnetic buttons (desktop only) ---------------- */
  if (!reduceMotion && window.matchMedia("(hover:hover)").matches) {
    document.querySelectorAll(".btn-primary, .btn-accent, .btn-white").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + x * 0.12 + "px," + y * 0.28 + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------------- Custom cursor (desktop only) ---------------- */
  if (!reduceMotion && window.matchMedia("(hover:hover)").matches && window.matchMedia("(min-width:1080px)").matches) {
    var dot = document.createElement("div");
    dot.className = "cursor-dot";
    var ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    var rx = 0, ry = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", function (e) {
      dot.style.opacity = "1"; ring.style.opacity = "1";
      dx = e.clientX; dy = e.clientY;
      dot.style.left = dx + "px"; dot.style.top = dy + "px";
    });
    (function raf() {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll("a, button, .service-card, .sol-tab").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("is-hover"); });
    });
  }

  /* ---------------- Contact form (demo submit + success state) ---------------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var required = contactForm.querySelectorAll("[required]");
      var valid = true;
      required.forEach(function (f) { if (!f.value.trim()) valid = false; });
      if (!valid) { contactForm.reportValidity && contactForm.reportValidity(); return; }
      contactForm.style.display = "none";
      var success = document.getElementById("formSuccess");
      if (success) success.classList.add("is-visible");
    });
  }

  /* ---------------- Active nav link by page ---------------- */
  var here = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-primary a, .mobile-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------------- Current year in footer ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
