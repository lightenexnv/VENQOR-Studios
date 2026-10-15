"use client";

/**
 * Soft-edged before/after reveal. Image B is masked by a wide gradient whose position
 * follows the pointer horizontally (desktop) or toggles on tap (touch).
 * Port of the reference's comparison component (softness 32, falloff 3).
 */
import { useMemo, useState } from "react";

type Props = {
  imageA: string;
  imageB: string;
  altA?: string;
  altB?: string;
  softness?: number;
  falloff?: number;
  radius?: number;
  className?: string;
};

export default function BeforeAfter({ imageA, imageB, altA = "", altB = "", softness = 32, falloff = 3, radius = 8, className }: Props) {
  // mask position in %: 0 = only image A, 100 = only image B; follows pointer x
  const [pos, setPos] = useState(0);
  const [follow, setFollow] = useState(false);

  const mask = useMemo(() => {
    const s = Math.max(0.001, softness);
    const a = 50 - s / 2,
      b = 50 + s / 2;
    const stops = ["rgba(0,0,0,0) 0%", `rgba(0,0,0,0) ${a}%`];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      stops.push(`rgba(0,0,0,${(t ** Math.max(0.05, falloff)).toFixed(3)}) ${(a + (b - a) * t).toFixed(3)}%`);
    }
    stops.push(`rgba(0,0,0,1) ${b}%`, "rgba(0,0,0,1) 100%");
    return `linear-gradient(90deg, ${stops.join(", ")})`;
  }, [softness, falloff]);

  const img: React.CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: radius, userSelect: "none" };

  return (
    <div
      className={className}
      data-cursor="drag"
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: radius, background: "#111", touchAction: "pan-y" }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        setFollow(true);
        setPos(100 * Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
      }}
      onPointerLeave={(e) => {
        // like the original, the reveal stays where the pointer left it
        if (e.pointerType === "mouse") setFollow(false);
      }}
      onClick={(e) => {
        if ((e.nativeEvent as PointerEvent).pointerType === "mouse") return;
        setPos((p) => (p > 50 ? 0 : 100));
      }}
    >
      <img src={imageA} alt={altA} style={img} draggable={false} decoding="async" />
      <img
        src={imageB}
        alt={altB}
        draggable={false}
        decoding="async"
        style={{
          ...img,
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskSize: "300% 100%",
          maskSize: "300% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: `${pos}% 0%`,
          maskPosition: `${pos}% 0%`,
          transition: follow ? "none" : "mask-position 2200ms ease, -webkit-mask-position 2200ms ease",
        }}
      />
    </div>
  );
}
