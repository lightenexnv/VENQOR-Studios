"use client";

/**
 * Hero "twist" ribbon — faithful port of the reference's TwistGallery code component.
 * A belt of rounded image cards scrolls sideways while each card spins around its
 * own axis with a phase offset, viewed through a long-lens perspective camera.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export type TwistProps = {
  images: string[];
  count?: number;
  scrollSpeed?: number;
  spinDeg?: number;
  phaseStepDeg?: number;
  spacing?: number;
  cardW?: number;
  cardH?: number;
  radius?: number;
  curveAmp?: number;
  angleDeg?: number;
  tiltYdeg?: number;
  camYawDeg?: number;
  camPitchDeg?: number;
  camRollDeg?: number;
  camDist?: number;
  camFovDeg?: number;
  camTargetX?: number;
  camTargetY?: number;
  camTargetZ?: number;
  className?: string;
};

const d2r = (d: number) => (d * Math.PI) / 180;
const smooth01 = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

function roundedRect(w: number, h: number, r: number) {
  const c = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  const s = new THREE.Shape();
  const hw = w / 2,
    hh = h / 2;
  s.moveTo(-hw + c, -hh);
  s.lineTo(hw - c, -hh);
  s.absarc(hw - c, -hh + c, c, -Math.PI / 2, 0, false);
  s.lineTo(hw, hh - c);
  s.absarc(hw - c, hh - c, c, 0, Math.PI / 2, false);
  s.lineTo(-hw + c, hh);
  s.absarc(-hw + c, hh - c, c, Math.PI / 2, Math.PI, false);
  s.lineTo(-hw, -hh + c);
  s.absarc(-hw + c, -hh + c, c, Math.PI, 1.5 * Math.PI, false);
  const g = new THREE.ShapeGeometry(s, 8);
  g.computeBoundingBox();
  const bb = g.boundingBox!;
  const pos = g.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) - bb.min.x) / (bb.max.x - bb.min.x);
    uv[i * 2 + 1] = (pos.getY(i) - bb.min.y) / (bb.max.y - bb.min.y);
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return g;
}

export default function TwistGallery(props: TwistProps) {
  const host = useRef<HTMLDivElement>(null);
  const propsRef = useRef(props);
  propsRef.current = props;

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const p = propsRef.current;
    const prm = {
      count: p.count ?? 16,
      scrollSpeed: p.scrollSpeed ?? 0.8,
      spinDeg: p.spinDeg ?? 24,
      phaseStepDeg: p.phaseStepDeg ?? 10,
      spacing: p.spacing ?? 56,
      cardW: p.cardW ?? 180,
      cardH: p.cardH ?? 220,
      radius: p.radius ?? 18,
      curveAmp: p.curveAmp ?? 120,
      angleDeg: p.angleDeg ?? -12,
      tiltYdeg: p.tiltYdeg ?? 8,
      camYawDeg: p.camYawDeg ?? 12,
      camPitchDeg: p.camPitchDeg ?? -6,
      camRollDeg: p.camRollDeg ?? 0,
      camDist: p.camDist ?? 900,
      camFovDeg: p.camFovDeg ?? 32,
      camTargetX: p.camTargetX ?? 0,
      camTargetY: p.camTargetY ?? 0,
      camTargetZ: p.camTargetZ ?? 0,
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio || 1, 1), 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(prm.camFovDeg, 1, 0.1, 5000);
    const belt = new THREE.Group();
    scene.add(belt);

    const geom = roundedRect(prm.cardW, prm.cardH, prm.radius);
    const loader = new THREE.TextureLoader();
    const textures: THREE.Texture[] = [];
    const items: { group: THREE.Group; mat: THREE.MeshBasicMaterial; u: number }[] = [];

    const cover = (tex: THREE.Texture) => {
      const img = tex.image as { width: number; height: number };
      const aImg = (img.width || 1) / (img.height || 1);
      const aCard = prm.cardW / prm.cardH;
      if (aImg > aCard) {
        const rx = aCard / aImg;
        tex.repeat.set(rx, 1);
        tex.offset.set((1 - rx) / 2, 0);
      } else {
        const ry = aImg / aCard;
        tex.repeat.set(1, ry);
        tex.offset.set(0, (1 - ry) / 2);
      }
      tex.needsUpdate = true;
    };

    const N = Math.max(2, prm.count);
    const half = ((N - 1) * prm.spacing) / 2;
    for (let i = 0; i < N; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false, side: THREE.DoubleSide, transparent: true, depthWrite: false });
      const mesh = new THREE.Mesh(geom, mat);
      const group = new THREE.Group();
      group.add(mesh);
      belt.add(group);
      items.push({ group, mat, u: -half + i * prm.spacing });
    }

    const M = p.images.length;
    p.images.forEach((src, idx) => {
      loader.load(src, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        cover(tex);
        textures[idx] = tex;
        items.forEach((it, k) => {
          if (k % M === idx) {
            it.mat.map = tex;
            it.mat.needsUpdate = true;
          }
        });
      });
    });

    const setCamera = () => {
      camera.fov = prm.camFovDeg;
      const yaw = d2r(prm.camYawDeg),
        pitch = d2r(prm.camPitchDeg),
        r = prm.camDist;
      camera.position.set(
        prm.camTargetX + r * Math.sin(yaw) * Math.cos(pitch),
        prm.camTargetY + r * Math.sin(pitch),
        prm.camTargetZ + r * Math.cos(yaw) * Math.cos(pitch)
      );
      camera.lookAt(prm.camTargetX, prm.camTargetY, prm.camTargetZ);
      camera.rotation.z = d2r(prm.camRollDeg);
      camera.updateProjectionMatrix();
    };

    const resize = () => {
      const w = Math.max(1, el.clientWidth),
        h = Math.max(1, el.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let last = performance.now();
    let t = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = !!e?.isIntersecting;
      last = performance.now();
    });
    io.observe(el);

    const frame = () => {
      const now = performance.now();
      const dt = reduce ? 0 : Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;
      setCamera();
      const sp = prm.spacing;
      const period = N * sp;
      const dx = -prm.scrollSpeed * sp * dt;
      const fadeW = N <= 3 ? 0 : sp * 1.1;
      let sumY = 0;
      for (const it of items) {
        it.u += dx;
        const rampL = fadeW > 0 ? Math.min(1, Math.max(0, (it.u + half) / fadeW)) : 1;
        const rampR = fadeW > 0 ? Math.min(1, Math.max(0, (half - it.u) / fadeW)) : 1;
        const op = smooth01(Math.min(rampL, rampR));
        if (fadeW > 0) {
          if (it.u < -half - 0.5 * fadeW) it.u += period;
          else if (it.u > half + 0.5 * fadeW) it.u -= period;
        }
        const y = prm.curveAmp * Math.sin(0.055 * it.u);
        const z = 0.06 * prm.curveAmp * Math.cos(0.055 * it.u);
        sumY += y;
        it.group.position.set(it.u, y, z);
        const spin = d2r(prm.spinDeg) * t + d2r(prm.phaseStepDeg) * (it.u / sp);
        it.group.rotation.set(0, d2r(prm.tiltYdeg), spin);
        it.mat.opacity = it.mat.map ? op : 0;
        it.group.visible = op > 0.001;
      }
      belt.position.y = -(sumY / N) + 40;
      belt.rotation.z = d2r(prm.angleDeg);
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(() => visible && frame());

    return () => {
      renderer.setAnimationLoop(null);
      ro.disconnect();
      io.disconnect();
      geom.dispose();
      items.forEach((it) => it.mat.dispose());
      textures.forEach((tx) => tx?.dispose());
      renderer.dispose();
      el.innerHTML = "";
    };
    // Re-init only when the layout-defining props change.
  }, [props.count, props.camTargetY, props.images]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={host} className={props.className} style={{ position: "absolute", inset: 0 }} />;
}
