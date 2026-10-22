"use client";

import { useEffect } from "react";

/**
 * Sets data-revealed on [data-reveal] elements once they scroll into view
 * (styles live in globals.css). Also picks up elements added later, e.g.
 * products shown again after clearing the search.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const observeAll = () =>
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
