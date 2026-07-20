"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = [
  ".tagline",
  ".avatar",
  ".intro-body p",
  ".bio .section-title",
  ".bio .section-note",
  ".bio-text",
  ".bio-actions",
  ".page-head",
  ".card",
  ".site-footer .social",
];

function prefersReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Ports the staggered fade-up reveal from the original main.js.
 * Re-runs on every route change so freshly rendered pages animate in.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes: HTMLElement[] = [];
    SELECTORS.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        nodes.push(el);
      });
    });
    if (!nodes.length) return;

    nodes.forEach((el) => el.setAttribute("data-reveal", ""));

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const step = 70; // ms between staggered items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const inView: HTMLElement[] = [];
    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        inView.push(el);
      } else {
        observer.observe(el);
      }
    });

    inView.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * step}ms`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add("is-visible");
        });
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
