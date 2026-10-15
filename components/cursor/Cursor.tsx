"use client";

/**
 * Site-wide custom cursor (pointer devices only).
 * Default: thin 130px ring in difference blend that trails the pointer.
 * Elements opt into other looks via data attributes:
 *   data-cursor="play"                       → white disc with "[PLAY]"
 *   data-cursor="drag"                       → small ↔ handle (before / after slider)
 *   data-cursor="image" data-cursor-src=url  → floating 170×272 image card (services)
 */
import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

type Mode = "ring" | "play" | "drag" | "image";

export default function Cursor() {
  const root = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("ring");
  const [src, setSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = root.current!;
    let x = -200,
      y = -200,
      cx = x,
      cy = y,
      raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (cx < -100) {
        cx = x;
        cy = y;
      }
      setVisible(true);
      const t = (e.target as Element | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      const m = (t?.dataset.cursor as Mode | undefined) ?? "ring";
      setMode(m);
      if (m === "image") setSrc(t?.dataset.cursorSrc ?? null);
    };
    const leave = () => setVisible(false);
    const loop = () => {
      // critically damped follow, matches the reference's soft trailing
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={root} className={styles.root} data-cursor-root aria-hidden>
      <div className={`${styles.ring} ${visible && mode === "ring" ? styles.on : ""}`}>
        <svg viewBox="0 0 130 130" width="130" height="130">
          <circle cx="65" cy="65" r="64" fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" />
        </svg>
      </div>
      <div className={`${styles.play} ${visible && mode === "play" ? styles.on : ""}`}>
        <span className="t-caps">[PLAY]</span>
      </div>
      <div className={`${styles.drag} ${visible && mode === "drag" ? styles.on : ""}`}>
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="#fff" strokeWidth="1.5" />
          <path d="M9 16h14M9 16l3.5-3.5M9 16l3.5 3.5M23 16l-3.5-3.5M23 16l-3.5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className={`${styles.image} ${visible && mode === "image" && src ? styles.on : ""}`}>
        {src && <img src={src} alt="" />}
      </div>
    </div>
  );
}
