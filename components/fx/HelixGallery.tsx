"use client";

/**
 * Rotating helix of curved, rounded photo cards (footer). Port of the reference's
 * three.js "spiral gallery": cards sit on a circle, step down in Y with a sine wave,
 * and the whole group spins slowly around Y.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  images: string[];
  photoWidth?: number;
  photoHeight?: number;
  cornerRadius?: number;
  curve?: number;
  gapUnits?: number;
  yStep?: number;
  yWave?: number;
  speed?: number;
  direction?: 1 | -1;
  cameraDistance?: number;
  className?: string;
};

function bentPlane(w: number, h: number, curve: number) {
  const g = new THREE.PlaneGeometry(w, h, 16, 2);
  if (curve <= 0) return g;
  const arc = (Math.PI / 3) * curve;
  const R = w / Math.max(arc, 1e-4);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const a = (p.getX(i) / w) * arc;
    p.setX(i, Math.sin(a) * R);
    p.setZ(i, -R * (1 - Math.cos(a)));
  }
  p.needsUpdate = true;
  g.computeVertexNormals();
  return g;
}

function roundedAlpha(w: number, h: number, r: number) {
  const H = Math.max(2, Math.round((256 * h) / Math.max(w, 1e-6)));
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = H;
  const ctx = c.getContext("2d")!;
  const rr = Math.min(Math.min(r * Math.min(256, H), Math.min(256, H) / 2), 128, H / 2);
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(rr, 0);
  ctx.lineTo(256 - rr, 0);
  ctx.quadraticCurveTo(256, 0, 256, rr);
  ctx.lineTo(256, H - rr);
  ctx.quadraticCurveTo(256, H, 256 - rr, H);
  ctx.lineTo(rr, H);
  ctx.quadraticCurveTo(0, H, 0, H - rr);
  ctx.lineTo(0, rr);
  ctx.quadraticCurveTo(0, 0, rr, 0);
  ctx.closePath();
  ctx.fill();
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

export default function HelixGallery({
  images,
  photoWidth = 6,
  photoHeight = 8,
  cornerRadius = 0.38,
  curve = 0.8,
  gapUnits = 0.2,
  yStep = -3.1,
  yWave = 1.3,
  speed = 0.222,
  direction = -1,
  cameraDistance = 52,
  className,
}: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance", premultipliedAlpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 2000);
    camera.position.set(0, 0, cameraDistance);
    const group = new THREE.Group();
    scene.add(group);

    const count = images.length;
    const geom = bentPlane(photoWidth, photoHeight, curve);
    const alpha = roundedAlpha(photoWidth, photoHeight, cornerRadius);
    const step = Math.max(0.01, photoWidth + gapUnits);
    const R = Math.max(1, step / (2 * Math.sin(Math.PI / Math.max(count, 1))));
    const loader = new THREE.TextureLoader();
    const mats: THREE.MeshBasicMaterial[] = [];
    images.forEach((src, i) => {
      const mat = new THREE.MeshBasicMaterial({ alphaMap: alpha, transparent: true, alphaTest: 0.01, side: THREE.DoubleSide, opacity: 0 });
      loader.load(src, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        mat.map = tex;
        mat.opacity = 1;
        mat.needsUpdate = true;
      });
      mats.push(mat);
      const mesh = new THREE.Mesh(geom, mat);
      const a = (i * 2 * Math.PI) / Math.max(count, 1);
      mesh.position.set(Math.sin(a) * R, yStep * (i - (count - 1) / 2) + yWave * Math.sin((i / Math.max(count, 1)) * Math.PI * 2), Math.cos(a) * R);
      mesh.rotation.y = a;
      group.add(mesh);
    });

    const resize = () => {
      const w = el.clientWidth || 1,
        h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = !!e && (e.isIntersecting || e.intersectionRatio > 0)), { threshold: 0.1 });
    io.observe(el);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0,
      last = performance.now();
    renderer.setAnimationLoop(() => {
      const now = performance.now();
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (!visible) return;
      if (!reduce) target += direction * speed * dt;
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, target, 0.3);
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      ro.disconnect();
      io.disconnect();
      geom.dispose();
      alpha.dispose();
      mats.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      renderer.dispose();
      el.innerHTML = "";
    };
  }, [images, photoWidth, photoHeight, cornerRadius, curve, gapUnits, yStep, yWave, speed, direction, cameraDistance]);

  return <div ref={host} className={className} style={{ width: "100%", height: "100%", overflow: "hidden" }} aria-hidden />;
}
