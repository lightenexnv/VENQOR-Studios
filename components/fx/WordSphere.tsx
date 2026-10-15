"use client";

/**
 * "Our Stack" tag sphere — words sit on a Fibonacci sphere that auto-rotates
 * around a tilted axis; drag horizontally to scrub. Port of the reference component.
 */
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  words: string[];
  speed?: number;
  fontScale?: number;
  scrubSensitivity?: number;
  className?: string;
  /** "sphere" (default) = round, sized to the shorter side; "ellipse" = stretched to fill the box, centred */
  shape?: "sphere" | "ellipse";
  label?: string;
};

const AXIS = (() => {
  const v = [0.6, 1, 0.2];
  const n = Math.hypot(v[0], v[1], v[2]);
  return v.map((x) => x / n) as [number, number, number];
})();

export default function WordSphere({ words, speed = 0.0058, fontScale = 0.074, scrubSensitivity = 0.003, className, shape = "sphere", label = "Technology stack" }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [size, setSize] = useState(0);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const auto = useRef(0);
  const scrub = useRef(0);

  useLayoutEffect(() => {
    const el = host.current!;
    const update = () => {
      setSize(Math.max(0, Math.min(el.clientWidth, el.clientHeight)));
      setBox({ w: el.clientWidth, h: el.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Drag to scrub
  useEffect(() => {
    const el = host.current!;
    let down = false,
      lastX = 0;
    const onDown = (e: PointerEvent) => {
      down = true;
      lastX = e.clientX;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      scrub.current += (e.clientX - lastX) * scrubSensitivity;
      lastX = e.clientX;
    };
    const onUp = () => {
      down = false;
      el.style.cursor = "grab";
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [scrubSensitivity]);

  // Animate
  useEffect(() => {
    const n = Math.max(1, words.length);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const pts = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / Math.max(1, n - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      return [Math.cos(golden * i) * r, y, Math.sin(golden * i) * r];
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      if (!reduce) auto.current += Math.max(0, speed);
      const nodes = list.current?.children;
      if (nodes && size) {
        // ellipse: spread across the whole box (leaving room for the widest words), centred
        const Rx = shape === "ellipse" ? box.w * 0.3 : size * 0.5;
        const Ry = shape === "ellipse" ? box.h * 0.38 : size * 0.5;
        const a = auto.current + scrub.current;
        const [x, y, z] = AXIS;
        const s = Math.sin(a),
          c = Math.cos(a),
          u = 1 - c;
        const m = [c + x * x * u, x * y * u - z * s, x * z * u + y * s, y * x * u + z * s, c + y * y * u, y * z * u - x * s, z * x * u - y * s, z * y * u + x * s, c + z * z * u];
        for (let i = 0; i < nodes.length; i++) {
          const [px, py, pz] = pts[i];
          const rx = m[0] * px + m[1] * py + m[2] * pz;
          const ry = m[3] * px + m[4] * py + m[5] * pz;
          const rz = m[6] * px + m[7] * py + m[8] * pz;
          const el = nodes[i] as HTMLElement;
          el.style.transform = `translate(${Rx * rx}px, ${Ry * ry}px) scale(${(rz + 2) / 3})`;
          el.style.opacity = String(Math.max(0, Math.min(1, (rz + 1.5) / 2.5)));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [words, speed, size, box, shape]);

  return (
    <div ref={host} className={className} style={{ position: "relative", width: "100%", height: "100%", userSelect: "none", touchAction: "pan-y", cursor: "grab" }}>
      <ul
        ref={list}
        aria-label={label}
        style={
          shape === "ellipse"
            ? { position: "absolute", inset: 0, listStyle: "none", margin: 0, padding: 0 }
            : { position: "absolute", left: `calc(50% - ${size / 2}px)`, top: `calc(50% - ${size / 2}px)`, width: size, height: size, listStyle: "none", margin: 0, padding: 0 }
        }
      >
        {words.map((w) => (
          <li
            key={w}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              fontFamily: "var(--mono)",
              fontWeight: 400,
              fontSize: Math.max(10, size * fontScale),
              lineHeight: 1,
              whiteSpace: "nowrap",
              willChange: "transform, opacity",
            }}
          >
            <span style={{ display: "inline-block", transform: "translate(-50%, -50%)" }}>{w}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
