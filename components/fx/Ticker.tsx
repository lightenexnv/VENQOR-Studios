"use client";

/**
 * Infinite horizontal ticker with faded edges (Framer Ticker equivalent).
 * Repeats the children enough times to fill the track, then loops by one set width.
 */
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode[];
  speed?: number; // px per second
  gap: number;
  direction?: "left" | "right";
  fadeWidth?: number; // % of width faded on each side
  padding?: number;
  className?: string;
};

export default function Ticker({ children, speed = 30, gap, direction = "left", fadeWidth = 25, padding = 15, className }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [setW, setSetW] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const w = wrap.current?.offsetWidth ?? 0;
      const s = (setRef.current?.offsetWidth ?? 0) + gap;
      if (!s) return;
      setSetW(s);
      setCopies(Math.max(2, Math.ceil(w / s) + 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrap.current) ro.observe(wrap.current);
    if (setRef.current) ro.observe(setRef.current);
    return () => ro.disconnect();
  }, [gap]);

  useEffect(() => {
    if (!setW) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = 0,
      last = performance.now(),
      raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (!reduce) x = (x + speed * dt) % setW;
      const off = direction === "left" ? -x : x - setW;
      if (track.current) track.current.style.transform = `translate3d(${off}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setW, speed, direction]);

  const mask = `linear-gradient(to right, transparent 0%, #000 ${fadeWidth}%, #000 ${100 - fadeWidth}%, transparent 100%)`;

  return (
    <div ref={wrap} className={className} style={{ display: "flex", alignItems: "center", height: 50, overflow: "hidden", padding: `0 ${padding}px`, WebkitMaskImage: mask, maskImage: mask }}>
      <div ref={track} style={{ display: "flex", alignItems: "center", gap, width: "max-content", willChange: "transform" }}>
        {Array.from({ length: copies }, (_, c) => (
          <div key={c} ref={c === 0 ? setRef : undefined} style={{ display: "flex", alignItems: "center", gap, flexShrink: 0 }} aria-hidden={c > 0 || undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
