"use client";

import { useEffect, useRef } from "react";
import styles from "./SparkleOrbit.module.css";

type Props = {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  variant?: "developer" | "marketing";
};

type Particle = {
  orbitType: "ribbonA" | "ribbonB" | "ambient";
  angle: number;
  speed: number;
  rx: number;
  ry: number;
  rz: number;
  tilt: number;
  inclination: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobblePhase: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: { r: number; g: number; b: number };
  starType: "flare" | "orb" | "diamond";
  rotation: number;
  spinSpeed: number;
};

// Subtle iridescent colors matching the 3D ribbons in the portraits
const COLORS = [
  { r: 255, g: 255, b: 255 }, // pure brilliant white
  { r: 255, g: 255, b: 255 }, // pure brilliant white (high weighting)
  { r: 195, g: 228, b: 255 }, // ethereal prism cyan
  { r: 228, g: 215, b: 255 }, // ethereal prism lavender
  { r: 255, g: 245, b: 225 }, // warm champagne shimmer
];

function createParticles(w: number, h: number): Particle[] {
  const hw = (w - 36) / 2;
  const hh = (h - 36) / 2;
  const scale = Math.min(Math.max(w / 300, 0.6), 1.0);
  const list: Particle[] = [];

  // Ribbon A: diagonal sweep (top-right to bottom-left)
  for (let i = 0; i < 20; i++) {
    const color = COLORS[i % COLORS.length];
    list.push({
      orbitType: "ribbonA",
      angle: (i / 20) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
      speed: 0.34 + Math.random() * 0.16,
      rx: hw * (1.02 + Math.random() * 0.14),
      ry: hh * (0.88 + Math.random() * 0.16),
      rz: (85 + Math.random() * 25) * scale,
      tilt: 0.42 + (Math.random() - 0.5) * 0.12, // ~24 deg
      inclination: 1.1 + (Math.random() - 0.5) * 0.15, // ~63 deg
      wobbleSpeed: 1.2 + Math.random() * 1.5,
      wobbleAmp: (6 + Math.random() * 8) * scale,
      wobblePhase: Math.random() * Math.PI * 2,
      size: (2.5 + Math.random() * 3.5) * scale,
      baseAlpha: 0.55 + Math.random() * 0.4,
      twinkleSpeed: 2.0 + Math.random() * 2.5,
      twinklePhase: Math.random() * Math.PI * 2,
      color,
      starType: i % 3 === 0 ? "flare" : i % 3 === 1 ? "diamond" : "orb",
      rotation: Math.random() * Math.PI,
      spinSpeed: (Math.random() - 0.5) * 0.4,
    });
  }

  // Ribbon B: counter diagonal sweep (top-left to bottom-right)
  for (let i = 0; i < 16; i++) {
    const color = COLORS[(i + 2) % COLORS.length];
    list.push({
      orbitType: "ribbonB",
      angle: (i / 16) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
      speed: 0.28 + Math.random() * 0.14,
      rx: hw * (0.96 + Math.random() * 0.16),
      ry: hh * (0.94 + Math.random() * 0.14),
      rz: (75 + Math.random() * 25) * scale,
      tilt: -0.48 + (Math.random() - 0.5) * 0.12, // ~-28 deg
      inclination: 0.98 + (Math.random() - 0.5) * 0.15, // ~56 deg
      wobbleSpeed: 1.0 + Math.random() * 1.6,
      wobbleAmp: (5 + Math.random() * 8) * scale,
      wobblePhase: Math.random() * Math.PI * 2,
      size: (2.2 + Math.random() * 3.2) * scale,
      baseAlpha: 0.5 + Math.random() * 0.4,
      twinkleSpeed: 1.8 + Math.random() * 2.2,
      twinklePhase: Math.random() * Math.PI * 2,
      color,
      starType: i % 2 === 0 ? "flare" : "orb",
      rotation: Math.random() * Math.PI,
      spinSpeed: (Math.random() - 0.5) * 0.4,
    });
  }

  // Ambient 3D floating motes and wandering stardust
  for (let i = 0; i < 14; i++) {
    const color = COLORS[(i + 3) % COLORS.length];
    list.push({
      orbitType: "ambient",
      angle: Math.random() * Math.PI * 2,
      speed: 0.18 + Math.random() * 0.12,
      rx: hw * (0.75 + Math.random() * 0.35),
      ry: hh * (0.75 + Math.random() * 0.35),
      rz: (65 + Math.random() * 30) * scale,
      tilt: (Math.random() - 0.5) * 0.6,
      inclination: 0.8 + Math.random() * 0.5,
      wobbleSpeed: 0.8 + Math.random() * 1.2,
      wobbleAmp: (8 + Math.random() * 10) * scale,
      wobblePhase: Math.random() * Math.PI * 2,
      size: (2.0 + Math.random() * 2.8) * scale,
      baseAlpha: 0.45 + Math.random() * 0.4,
      twinkleSpeed: 1.5 + Math.random() * 2.0,
      twinklePhase: Math.random() * Math.PI * 2,
      color,
      starType: i % 2 === 0 ? "orb" : "diamond",
      rotation: Math.random() * Math.PI,
      spinSpeed: (Math.random() - 0.5) * 0.25,
    });
  }

  return list;
}

function drawSparkle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number,
  color: { r: number; g: number; b: number },
  type: "flare" | "orb" | "diamond",
  rotation: number
) {
  if (alpha <= 0.005) return;
  ctx.save();
  ctx.translate(x, y);

  // Soft radiant glow halo
  const glowRadius = size * 3.0;
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
  grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.85})`);
  grad.addColorStop(0.35, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.3})`);
  grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
  ctx.fill();

  if (type === "flare" || type === "diamond") {
    if (rotation !== 0) ctx.rotate(rotation);

    // 4-point radiant diamond star
    const rayLength = size * (type === "flare" ? 2.5 : 1.8);
    const rayWaist = size * 0.24;

    ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 1.2)})`;
    ctx.beginPath();
    ctx.moveTo(0, -rayLength);
    ctx.quadraticCurveTo(rayWaist, -rayWaist, rayLength, 0);
    ctx.quadraticCurveTo(rayWaist, rayWaist, 0, rayLength);
    ctx.quadraticCurveTo(-rayWaist, rayWaist, -rayLength, 0);
    ctx.quadraticCurveTo(-rayWaist, -rayWaist, 0, -rayLength);
    ctx.closePath();
    ctx.fill();

    // Subtle 45-degree micro rays for "flare"
    if (type === "flare") {
      const diagLen = rayLength * 0.42;
      const dcos = 0.7071 * diagLen;

      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.65})`;
      ctx.beginPath();
      ctx.moveTo(dcos, -dcos);
      ctx.quadraticCurveTo(0, 0, dcos, dcos);
      ctx.quadraticCurveTo(0, 0, -dcos, dcos);
      ctx.quadraticCurveTo(0, 0, -dcos, -dcos);
      ctx.quadraticCurveTo(0, 0, dcos, -dcos);
      ctx.closePath();
      ctx.fill();
    }
  }

  // Intense brilliant center pip
  ctx.beginPath();
  ctx.arc(0, 0, Math.max(1, size * 0.35), 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 1.5)})`;
  ctx.fill();

  ctx.restore();
}

export default function SparkleOrbit({ imageSrc, imageAlt, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backCanvasRef = useRef<HTMLCanvasElement>(null);
  const frontCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const backCanvas = backCanvasRef.current;
    const frontCanvas = frontCanvasRef.current;
    if (!container || !backCanvas || !frontCanvas) return;

    const backCtx = backCanvas.getContext("2d");
    const frontCtx = frontCanvas.getContext("2d");
    if (!backCtx || !frontCtx) return;

    const dpr = Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let isVisible = true;
    let animId: number;
    let lastTime = performance.now();

    // Mouse tilt interaction state
    let targetTiltX = 0;
    let targetTiltY = 0;
    let curTiltX = 0;
    let curTiltY = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const pad = 15;
      width = rect.width + pad * 2;
      height = rect.height + pad * 2;

      backCanvas.width = width * dpr;
      backCanvas.height = height * dpr;
      frontCanvas.width = width * dpr;
      frontCanvas.height = height * dpr;

      particles = createParticles(width, height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetTiltX = nx * 0.16;
      targetTiltY = ny * 0.16;
    };

    const onPointerLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    // Pause loop when offscreen
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(container);

    // Animation loop
    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      // Smooth mouse lerp
      curTiltX += (targetTiltX - curTiltX) * 0.08;
      curTiltY += (targetTiltY - curTiltY) * 0.08;

      backCtx.save();
      backCtx.scale(dpr, dpr);
      backCtx.clearRect(0, 0, width, height);

      frontCtx.save();
      frontCtx.scale(dpr, dpr);
      frontCtx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const timeSec = now / 1000;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle = (p.angle + p.speed * dt) % (Math.PI * 2);
        p.rotation += p.spinSpeed * dt;

        // 3D elliptical orbit coordinates
        const wobble = Math.sin(timeSec * p.wobbleSpeed + p.wobblePhase) * p.wobbleAmp;
        const xo = p.rx * Math.cos(p.angle);
        const yo = p.ry * Math.sin(p.angle) * Math.cos(p.inclination + curTiltY);
        const zo = p.rz * Math.sin(p.angle) * Math.sin(p.inclination + curTiltY) + wobble;

        // Planar rotation by tilt angle + interactive mouse tilt
        const effectiveTilt = p.tilt + curTiltX;
        const cosT = Math.cos(effectiveTilt);
        const sinT = Math.sin(effectiveTilt);

        const xRot = xo * cosT - yo * sinT;
        const yRot = xo * sinT + yo * cosT;

        const px = cx + xRot;
        const py = cy + yRot;
        const pz = zo;

        // Twinkle pulsating brightness
        const twinkle = 0.55 + 0.45 * Math.sin(timeSec * p.twinkleSpeed + p.twinklePhase);
        const alpha = p.baseAlpha * twinkle;

        // Depth perspective scale: slightly larger when closer to viewer
        const zScale = 1.0 + (pz / p.rz) * 0.22;
        const currentSize = Math.max(1.5, p.size * zScale);

        // Continuous smooth transition between front and back
        const frontWeight = Math.min(1, Math.max(0, (pz + 12) / 24));
        const backWeight = Math.min(1, Math.max(0, (-pz + 12) / 24));

        if (frontWeight > 0.01) {
          drawSparkle(
            frontCtx,
            px,
            py,
            currentSize,
            alpha * frontWeight,
            p.color,
            p.starType,
            p.rotation
          );
        }

        if (backWeight > 0.01) {
          drawSparkle(
            backCtx,
            px,
            py,
            currentSize,
            alpha * backWeight,
            p.color,
            p.starType,
            p.rotation
          );
        }
      }

      backCtx.restore();
      frontCtx.restore();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      {/* Back canvas: renders sparkles when they are behind the portrait */}
      <canvas ref={backCanvasRef} className={styles.backCanvas} aria-hidden />

      {/* Middle layer: founder portrait */}
      <div className={styles.imageFrame}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} loading="lazy" />
        <div className={styles.sheen} aria-hidden />
      </div>

      {/* Front canvas: renders sparkles when they are in front of the portrait */}
      <canvas ref={frontCanvasRef} className={styles.frontCanvas} aria-hidden />
    </div>
  );
}
