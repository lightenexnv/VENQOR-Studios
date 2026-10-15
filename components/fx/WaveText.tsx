"use client";

/**
 * Letters laid out on a tilted baseline with a travelling sine wave
 * (the curvy "TESTIMONIALS" heading). Port of the reference's wave text component.
 */
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  size: number;
  tracking: number;
  angleDeg?: number;
  waveAmplitude: number;
  waveLength?: number;
  waveSpeed?: number;
  waveDecay?: number;
  className?: string;
};

export default function WaveText({ text, size, tracking, angleDeg = 192, waveAmplitude, waveLength = 12, waveSpeed = 0.25, waveDecay = 0.01, className }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const [ready, setReady] = useState(false);
  const chars = text.split("");

  useEffect(() => {
    let raf = 0;
    let cancelled = false;
    let offsets: number[] = [];
    let widths: number[] = [];

    const measure = async () => {
      try {
        await document.fonts.load(`400 ${size}px "Space Mono"`);
        await document.fonts.ready;
      } catch {}
      if (cancelled) return;
      const ctx = document.createElement("canvas").getContext("2d")!;
      const family = getComputedStyle(host.current!).fontFamily;
      ctx.font = `400 ${size}px ${family}`;
      widths = chars.map((c) => Math.max(1, Math.ceil(ctx.measureText(c).width)));
      offsets = new Array(widths.length).fill(0);
      for (let i = 1; i < widths.length; i++) offsets[i] = offsets[i - 1] + (widths[i - 1] + widths[i]) / 2 + tracking;
      setReady(true);
    };
    measure();

    const a = (angleDeg * Math.PI) / 180;
    let dx = Math.cos(a),
      dy = Math.sin(a);
    if (Math.abs(dx) >= Math.abs(dy)) {
      if (dx < 0) {
        dx = -dx;
        dy = -dy;
      }
    } else if (dy < 0) {
      dx = -dx;
      dy = -dy;
    }
    const nx = -dy,
      ny = dx;
    const omega = 2 * Math.PI * waveSpeed;
    const k = (2 * Math.PI) / Math.max(1, waveLength);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0,
      last = performance.now();

    const frame = (now: number) => {
      if (!reduce) t += (now - last) / 1000;
      last = now;
      const el = host.current;
      if (el && offsets.length === chars.length) {
        const w = el.clientWidth,
          h = el.clientHeight;
        const n = chars.length;
        const span = (n > 1 ? offsets[n - 1] : 0) / 2 + ((widths[n - 1] || 0) - (widths[0] || 0)) / 4;
        const ox = w / 2 - dx * span,
          oy = h / 2 - dy * span;
        for (let i = 0; i < n; i++) {
          const amp = waveAmplitude * Math.exp(-i * waveDecay);
          const phase = omega * t - k * i;
          const x = ox + dx * offsets[i] + nx * amp * Math.sin(phase);
          const y = oy + dy * offsets[i] + ny * amp * Math.sin(phase);
          const s = letters.current[i];
          if (s) s.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [text, size, tracking, angleDeg, waveAmplitude, waveLength, waveSpeed, waveDecay]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={host} className={className} aria-label={text} role="img" style={{ position: "relative", width: "100%", height: "100%", fontFamily: "var(--mono)", fontSize: size }}>
      <div style={{ position: "absolute", inset: 0, opacity: ready ? 1 : 0, transition: "opacity 140ms linear", pointerEvents: "none" }} aria-hidden>
        {chars.map((c, i) => (
          <span
            key={i}
            ref={(el) => {
              letters.current[i] = el;
            }}
            style={{ position: "absolute", left: 0, top: 0, lineHeight: "normal", willChange: "transform" }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
