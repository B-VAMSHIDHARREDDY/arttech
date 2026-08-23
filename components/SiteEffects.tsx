"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Port of the original static site's main.js — everything that isn't
 * already handled idiomatically in React (mobile nav toggle, active nav
 * link, sticky header, footer year all live in Header/Footer instead).
 * Re-runs on every route change since it targets page-specific markup.
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------------- Scroll reveal ---------------- */
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      const groupCounters = new WeakMap<Element, number>();
      revealEls.forEach((el) => {
        const group = el.closest("[data-reveal-group]");
        if (group) {
          const n = groupCounters.has(group) ? (groupCounters.get(group) as number) : 0;
          el.style.setProperty("--i", String(n % 8));
          groupCounters.set(group, n + 1);
        } else {
          el.style.setProperty("--i", "0");
        }
        io.observe(el);
      });
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    /* ---------------- Animated counters ---------------- */
    function animateCounter(el: Element) {
      const target = parseFloat(el.getAttribute("data-counter") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = reduceMotion ? 0 : 1400;
      if (dur === 0) {
        el.textContent = target + suffix;
        return;
      }
      let start: number | null = null;
      function step(ts: number) {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(eased * target);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    }
    const counters = document.querySelectorAll("[data-counter]");
    if (counters.length && "IntersectionObserver" in window) {
      const counterIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            counterIO.unobserve(entry.target);
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((c) => counterIO.observe(c));
      cleanups.push(() => counterIO.disconnect());
    }

    /* ---------------- Process / journey scroll-in-view state ---------------- */
    const stageEls = document.querySelectorAll(".jstage, .process-item");
    if (stageEls.length && "IntersectionObserver" in window) {
      const stageIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("in-view");
          });
        },
        { threshold: 0.4 }
      );
      stageEls.forEach((el) => stageIO.observe(el));
      cleanups.push(() => stageIO.disconnect());
    }

    /* ---------------- FAQ accordion ---------------- */
    document.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      const a = item.querySelector<HTMLElement>(".faq-a");
      if (!q || !a) return;
      const handler = () => {
        const isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove("is-open");
            const openA = openItem.querySelector<HTMLElement>(".faq-a");
            const openQ = openItem.querySelector<HTMLElement>(".faq-q");
            if (openA) openA.style.maxHeight = "";
            if (openQ) openQ.setAttribute("aria-expanded", "false");
          }
        });
        if (isOpen) {
          item.classList.remove("is-open");
          a.style.maxHeight = "";
          q.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          a.style.maxHeight = a.scrollHeight + "px";
          q.setAttribute("aria-expanded", "true");
        }
      };
      q.addEventListener("click", handler);
      cleanups.push(() => q.removeEventListener("click", handler));
    });

    /* ---------------- Solutions tabs ---------------- */
    const solTabs = document.querySelectorAll<HTMLElement>(".sol-tab");
    const solPreviews = document.querySelectorAll<HTMLElement>(".sol-preview-inner");
    solTabs.forEach((tab) => {
      const handler = () => {
        const target = tab.getAttribute("data-target");
        solTabs.forEach((t) => t.classList.remove("is-active"));
        solPreviews.forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        const panel = target ? document.getElementById(target) : null;
        if (panel) panel.classList.add("is-active");
      };
      tab.addEventListener("click", handler);
      cleanups.push(() => tab.removeEventListener("click", handler));
    });

    /* ---------------- Testimonial carousel ---------------- */
    const track = document.querySelector<HTMLElement>(".tcarousel-track");
    if (track) {
      const prevBtn = document.querySelector<HTMLElement>('[data-carousel="prev"]');
      const nextBtn = document.querySelector<HTMLElement>('[data-carousel="next"]');
      function cardWidth() {
        const card = track!.querySelector(".tcard");
        return card ? card.getBoundingClientRect().width + 22 : 320;
      }
      const nextHandler = () => {
        track!.scrollBy({ left: cardWidth(), behavior: reduceMotion ? "auto" : "smooth" });
      };
      const prevHandler = () => {
        track!.scrollBy({ left: -cardWidth(), behavior: reduceMotion ? "auto" : "smooth" });
      };
      if (nextBtn) {
        nextBtn.addEventListener("click", nextHandler);
        cleanups.push(() => nextBtn.removeEventListener("click", nextHandler));
      }
      if (prevBtn) {
        prevBtn.addEventListener("click", prevHandler);
        cleanups.push(() => prevBtn.removeEventListener("click", prevHandler));
      }
    }

    /* ---------------- Hero visual — subtle parallax on mouse ---------------- */
    const hvStage = document.querySelector<HTMLElement>(".hv-stage");
    if (hvStage && !reduceMotion && window.matchMedia("(hover:hover)").matches) {
      const heroSection = document.querySelector<HTMLElement>(".hero");
      if (heroSection) {
        const moveHandler = (e: MouseEvent) => {
          const rect = heroSection.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          hvStage.style.transform = "translate(" + x * -14 + "px," + y * -10 + "px)";
        };
        const leaveHandler = () => {
          hvStage.style.transform = "translate(0,0)";
        };
        heroSection.addEventListener("mousemove", moveHandler);
        heroSection.addEventListener("mouseleave", leaveHandler);
        cleanups.push(() => {
          heroSection.removeEventListener("mousemove", moveHandler);
          heroSection.removeEventListener("mouseleave", leaveHandler);
        });
      }
    }

    /* ---------------- Magnetic buttons (desktop only) ---------------- */
    if (!reduceMotion && window.matchMedia("(hover:hover)").matches) {
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-accent, .btn-white").forEach((btn) => {
        const moveHandler = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = "translate(" + x * 0.12 + "px," + y * 0.28 + "px)";
        };
        const leaveHandler = () => {
          btn.style.transform = "";
        };
        btn.addEventListener("mousemove", moveHandler);
        btn.addEventListener("mouseleave", leaveHandler);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", moveHandler);
          btn.removeEventListener("mouseleave", leaveHandler);
        });
      });
    }

    /* ---------------- Custom cursor (desktop only) ---------------- */
    if (
      !reduceMotion &&
      window.matchMedia("(hover:hover)").matches &&
      window.matchMedia("(min-width:1080px)").matches &&
      !document.querySelector(".cursor-dot")
    ) {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      const ring = document.createElement("div");
      ring.className = "cursor-ring";
      document.body.appendChild(dot);
      document.body.appendChild(ring);
      let rx = 0,
        ry = 0,
        dx = 0,
        dy = 0;
      const moveHandler = (e: MouseEvent) => {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        dx = e.clientX;
        dy = e.clientY;
        dot.style.left = dx + "px";
        dot.style.top = dy + "px";
      };
      window.addEventListener("mousemove", moveHandler);
      let rafId: number;
      (function raf() {
        rx += (dx - rx) * 0.18;
        ry += (dy - ry) * 0.18;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        rafId = requestAnimationFrame(raf);
      })();
      const hoverEls = document.querySelectorAll("a, button, .service-card, .sol-tab");
      const enterHandler = () => ring.classList.add("is-hover");
      const leaveHandler = () => ring.classList.remove("is-hover");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });
      cleanups.push(() => {
        window.removeEventListener("mousemove", moveHandler);
        cancelAnimationFrame(rafId);
        hoverEls.forEach((el) => {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        });
        dot.remove();
        ring.remove();
      });
    }

    /* ---------------- Contact form (demo submit + success state) ---------------- */
    const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
    if (contactForm) {
      const submitHandler = (e: Event) => {
        e.preventDefault();
        const required = contactForm.querySelectorAll<HTMLInputElement>("[required]");
        let valid = true;
        required.forEach((f) => {
          if (!f.value.trim()) valid = false;
        });
        if (!valid) {
          contactForm.reportValidity && contactForm.reportValidity();
          return;
        }
        contactForm.style.display = "none";
        const success = document.getElementById("formSuccess");
        if (success) success.classList.add("is-visible");
      };
      contactForm.addEventListener("submit", submitHandler);
      cleanups.push(() => contactForm.removeEventListener("submit", submitHandler));
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
