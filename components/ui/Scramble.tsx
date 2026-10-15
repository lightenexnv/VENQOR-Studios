"use client";

/**
 * Scramble / decode text (port of the reference's "Text Hover Random").
 * Characters resolve in random order while the rest flicker through a charset.
 *  - trigger="hover": replays on every hover (bracket links like [MORE ABOUT])
 *  - trigger="view":  plays when 25% visible (stats, tagline); `repeat` replays on re-entry
 */
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*".split("");

type Ease = "linear" | "out" | "inOut";
const ease = (t: number, e: Ease) =>
  e === "linear" ? t : e === "out" ? 1 - (1 - t) ** 3 : t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

type Props = {
  text: string;
  trigger?: "hover" | "view";
  repeat?: boolean;
  durationMs?: number;
  fps?: number;
  intensity?: number;
  revealEase?: Ease;
  className?: string;
  style?: CSSProperties;
  as?: "span" | "div";
};

export default function Scramble({
  text,
  trigger = "hover",
  repeat = false,
  durationMs = 600,
  fps = 60,
  intensity = 0.08,
  revealEase = "inOut",
  className,
  style,
  as = "span",
}: Props) {
  const [out, setOut] = useState(text);
  const running = useRef(false);
  const raf = useRef<number | null>(null);
  const host = useRef<HTMLElement | null>(null);
  const played = useRef(false);

  useEffect(() => {
    if (!running.current) setOut(text);
  }, [text]);

  const play = useCallback(() => {
    if (running.current) return;
    running.current = true;
    const n = text.length;
    const frames = Math.max(1, Math.round((durationMs / 1000) * fps));
    const curve = Array.from({ length: frames }, (_, i) => ease((i + 1) / frames, revealEase));
    const order = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [order[i], order[j]] = [order[j], order[i]];
    }
    const chars = text.split("");
    const buf = new Array<string>(n);
    let f = 0;
    const tick = () => {
      const revealed = Math.floor(curve[Math.min(f, frames - 1)] * n);
      const done = new Uint8Array(n);
      for (let i = 0; i < revealed; i++) done[order[i]] = 1;
      const hot = new Uint8Array(n);
      const hotCount = Math.min(Math.max(0, Math.floor(intensity * (n - revealed))), n - revealed);
      for (let i = 0; i < hotCount; i++) hot[order[revealed + i]] = 1;
      for (let i = 0; i < n; i++) {
        if (done[i] || chars[i] === " ") buf[i] = chars[i];
        else {
          buf[i] = CHARSET[(Math.random() * CHARSET.length) | 0];
          if (!hot[i] && !((i + f) & 1)) buf[i] = CHARSET[(Math.random() * CHARSET.length) | 0];
        }
      }
      setOut(buf.join(""));
      f++;
      if (f < frames) raf.current = requestAnimationFrame(tick);
      else {
        setOut(text);
        running.current = false;
        raf.current = null;
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, [text, durationMs, fps, intensity, revealEase]);

  useEffect(() => {
    if (trigger !== "view" || !host.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.25) {
            if (!played.current || repeat) {
              played.current = true;
              play();
            }
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 1] }
    );
    io.observe(host.current);
    return () => io.disconnect();
  }, [trigger, repeat, play]);

  useEffect(() => () => void (raf.current != null && cancelAnimationFrame(raf.current)), []);

  const Tag = as;
  return (
    <Tag
      ref={host as never}
      className={className}
      style={{ whiteSpace: "pre", ...style }}
      onMouseEnter={trigger === "hover" || repeat ? play : undefined}
      aria-label={text}
    >
      <span aria-hidden>{out}</span>
    </Tag>
  );
}
