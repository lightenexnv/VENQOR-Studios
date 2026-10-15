"use client";

import { useEffect, useState } from "react";

export type Breakpoint = "desktop" | "tablet" | "phone";

/** Mirrors the reference breakpoints: desktop ≥1200, tablet 810–1199.98, phone ≤809.98. */
export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    const t = window.matchMedia("(max-width: 1199.98px)");
    const p = window.matchMedia("(max-width: 809.98px)");
    const update = () => setBp(p.matches ? "phone" : t.matches ? "tablet" : "desktop");
    update();
    t.addEventListener("change", update);
    p.addEventListener("change", update);
    return () => {
      t.removeEventListener("change", update);
      p.removeEventListener("change", update);
    };
  }, []);
  return bp;
}
