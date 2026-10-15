"use client";

import { useEffect } from "react";

/**
 * Global smooth-scroll handler for anchor links and buttons:
 * Intercepts internal `#hash` clicks, computes the target section top,
 * and scrolls smoothly with an easing glide so users never abruptly teleport.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Check if it's an on-page hash link: e.g. "#contact", "/#contact", or "#founders"
      let hash = "";
      if (href.startsWith("#")) {
        hash = href;
      } else if (href.startsWith("/#") && (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === ""))) {
        hash = href.replace("/", "");
      }

      if (hash && hash.length > 1) {
        const targetId = hash.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          window.history.pushState(null, "", hash);

          const navOffset = 70;
          const elPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const targetScroll = Math.max(0, elPos - navOffset);

          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: false });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
