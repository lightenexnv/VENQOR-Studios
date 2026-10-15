"use client";

/**
 * Pixel-particle morph between two images (port of the reference's "Morph" component).
 * Every pixel of image A is a GL point; pixels are matched to image B by luminance band
 * + Morton order (computed in a worker), then flown along a noisy curve on hover.
 * Each pointer-enter toggles the target image.
 */
import { useEffect, useRef } from "react";

type Props = {
  imageA: string;
  imageB: string;
  chaos?: number;
  speed?: number;
  gatherGamma?: number;
  tile?: number;
  toneBands?: number;
  className?: string;
};

const VERT = `
precision highp float;
attribute vec2 aStart; attribute vec2 aEnd; attribute vec2 aRandom;
uniform float uT; uniform float uChaos; uniform float uPointSize;
varying highp vec2 vStart; varying highp vec2 vEnd;
float ss(float x){ x=clamp(x,0.0,1.0); return x*x*x*(x*(x*6.0-15.0)+10.0); }
void main(){
  float t=clamp(uT,0.0,1.0);
  float eased=ss(t);
  float e=mix(pow(eased,1.22),1.0-pow(1.0-eased,1.22),step(0.5,t));
  float bell=4.0*e*(1.0-e);
  vec2 delta=aEnd-aStart;
  vec2 tangent=vec2(-delta.y,delta.x); tangent/=max(length(tangent),0.00001);
  vec2 noise=aRandom*uChaos*bell;
  vec2 curve=tangent*aRandom.x*uChaos*0.35*bell;
  vec2 p=mix(aStart,aEnd,e)+noise+curve;
  gl_Position=vec4(p*2.0-1.0,0.0,1.0);
  gl_PointSize=uPointSize;
  vStart=aStart; vEnd=aEnd;
}`;

const FRAG = `
precision highp float;
varying highp vec2 vStart; varying highp vec2 vEnd;
uniform sampler2D uTex0; uniform sampler2D uTex1;
uniform vec2 uScale0; uniform vec2 uScale1;
uniform float uT; uniform float uGamma;
float ss(float x){ x=clamp(x,0.0,1.0); return x*x*x*(x*(x*6.0-15.0)+10.0); }
vec2 coverUv(vec2 uv, vec2 s){ return clamp(0.5+(uv-0.5)/s,0.0,1.0); }
void main(){
  float t=clamp(uT,0.0,1.0);
  float colorT=pow(ss(t),max(0.1,uGamma));
  vec3 c0=texture2D(uTex0,coverUv(vStart,uScale0)).rgb;
  vec3 c1=texture2D(uTex1,coverUv(vEnd,uScale1)).rgb;
  vec3 col=mix(pow(c0,vec3(2.2)),pow(c1,vec3(2.2)),colorT);
  gl_FragColor=vec4(pow(col,vec3(1.0/2.2)),1.0);
}`;

// Luminance-band + Morton-order matcher; runs in a worker so the UI never blocks.
const WORKER = `
self.onmessage=(ev)=>{
  const {W,H,l0,l1,bands,version}=ev.data; const count=W*H;
  const source=new Array(count), target=new Array(count);
  const spread=(n)=>{n&=65535;n=(n|(n<<8))&0x00ff00ff;n=(n|(n<<4))&0x0f0f0f0f;n=(n|(n<<2))&0x33333333;n=(n|(n<<1))&0x55555555;return n;};
  const morton=(i)=>{const x=i%W,y=(i/W)|0;return (spread(y)<<1)|spread(x);};
  const d2=(a,b)=>{const dx=a%W-b%W,dy=((a/W)|0)-((b/W)|0);return dx*dx+dy*dy;};
  for(let i=0;i<count;i++){source[i]=i;target[i]=i;}
  source.sort((a,b)=>(l0[a]-l0[b])||(morton(a)-morton(b)));
  target.sort((a,b)=>(l1[a]-l1[b])||(morton(a)-morton(b)));
  const bc=Math.max(1,Math.min(count,Math.round(bands)));
  const map=new Uint32Array(count);
  for(let b=0;b<bc;b++){
    const st=Math.floor(b*count/bc), en=Math.floor((b+1)*count/bc);
    const s=source.slice(st,en), t=target.slice(st,en);
    s.sort((a,b)=>morton(a)-morton(b)); t.sort((a,b)=>morton(a)-morton(b));
    for(let pass=0;pass<2;pass++) for(let i=0;i+1<s.length;i++){
      if(d2(s[i],t[i+1])+d2(s[i+1],t[i]) < d2(s[i],t[i])+d2(s[i+1],t[i+1])){const tmp=t[i];t[i]=t[i+1];t[i+1]=tmp;}
    }
    for(let i=0;i<s.length;i++) map[s[i]]=t[i];
  }
  self.postMessage({map,version},[map.buffer]);
};`;

const load = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const i = new Image();
    i.crossOrigin = "anonymous";
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = src;
  });

export default function ParticleMorph({ imageA, imageB, chaos = 0.805, speed = 0.02, gatherGamma = 9.5, tile = 1, toneBands = 24, className }: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = host.current;
    if (!root) return;
    let dead = false;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const imgA = document.createElement("img");
    const imgB = document.createElement("img");
    const canvas = document.createElement("canvas");
    for (const im of [imgA, imgB]) {
      Object.assign(im.style, { position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", zIndex: "0" });
      im.alt = "";
    }
    imgA.src = imageA;
    imgB.src = imageB;
    imgA.style.opacity = "1";
    imgB.style.opacity = "0";
    Object.assign(canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", pointerEvents: "none", zIndex: "1" });
    root.append(imgA, imgB, canvas);

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: true });
    if (!gl) {
      canvas.remove();
      return () => {
        imgA.remove();
        imgB.remove();
      };
    }
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
    gl.clearColor(0, 0, 0, 0);

    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const loc = {
      aStart: gl.getAttribLocation(prog, "aStart"),
      aEnd: gl.getAttribLocation(prog, "aEnd"),
      aRandom: gl.getAttribLocation(prog, "aRandom"),
      uT: gl.getUniformLocation(prog, "uT"),
      uChaos: gl.getUniformLocation(prog, "uChaos"),
      uPointSize: gl.getUniformLocation(prog, "uPointSize"),
      uTex0: gl.getUniformLocation(prog, "uTex0"),
      uTex1: gl.getUniformLocation(prog, "uTex1"),
      uScale0: gl.getUniformLocation(prog, "uScale0"),
      uScale1: gl.getUniformLocation(prog, "uScale1"),
      uGamma: gl.getUniformLocation(prog, "uGamma"),
    };
    gl.uniform1i(loc.uTex0, 0);
    gl.uniform1i(loc.uTex1, 1);

    const makeTex = (img: HTMLImageElement) => {
      const t = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      return t;
    };
    const coverScale = (iw: number, ih: number, w: number, h: number): [number, number] => {
      const a = iw / ih,
        b = w / h;
      return a > b ? [a / b, 1] : [1, b / a];
    };
    const srgbToLin = (v: number) => {
      const c = v / 255;
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };
    const luminance = (img: HTMLImageElement, w: number, h: number) => {
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      const s = Math.max(w / img.width, h / img.height);
      ctx.drawImage(img, (w - img.width * s) / 2, (h - img.height * s) / 2, img.width * s, img.height * s);
      const d = ctx.getImageData(0, 0, w, h).data;
      const out = new Float32Array(w * h);
      for (let i = 0, j = 0; i < d.length; i += 4, j++) out[j] = srgbToLin(d[i]) * 0.2126 + srgbToLin(d[i + 1]) * 0.7152 + srgbToLin(d[i + 2]) * 0.0722;
      return out;
    };

    const workerUrl = URL.createObjectURL(new Blob([WORKER], { type: "application/javascript" }));
    const worker = new Worker(workerUrl);
    let W = 1,
      H = 1,
      cols = 0,
      rows = 0,
      count = 0,
      version = 0,
      ready = false;
    let img0: HTMLImageElement | null = null,
      img1: HTMLImageElement | null = null;
    let tex0: WebGLTexture | null = null,
      tex1: WebGLTexture | null = null;
    let bufStart: WebGLBuffer | null = null,
      bufEnd: WebGLBuffer | null = null,
      bufRand: WebGLBuffer | null = null;

    const bind = (b: WebGLBuffer | null, l: number) => {
      if (!b || l < 0) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.enableVertexAttribArray(l);
      gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    };
    const buildGrid = () => {
      count = cols * rows;
      const start = new Float32Array(count * 2),
        rnd = new Float32Array(count * 2);
      for (let n = 0; n < count; n++) {
        start[n * 2] = ((n % cols) + 0.5) / cols;
        start[n * 2 + 1] = (((n / cols) | 0) + 0.5) / rows;
        let a = (n ^ 2654435769) >>> 0;
        a = (Math.imul(a, 1664525) + 1013904223) >>> 0;
        const o = ((a >>> 8) & 65535) / 65535;
        a = (Math.imul(a ^ 3735929054, 1664525) + 1013904223) >>> 0;
        const s = ((a >>> 8) & 65535) / 65535;
        rnd[n * 2] = o * 2 - 1;
        rnd[n * 2 + 1] = s * 2 - 1;
      }
      bufStart ||= gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufStart);
      gl.bufferData(gl.ARRAY_BUFFER, start, gl.STATIC_DRAW);
      bufRand ||= gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufRand);
      gl.bufferData(gl.ARRAY_BUFFER, rnd, gl.STATIC_DRAW);
      gl.uniform1f(loc.uPointSize, Math.max(W / cols, H / rows));
    };
    const requestMap = () => {
      if (!img0 || !img1 || cols < 1 || rows < 1) return;
      ready = false;
      const v = ++version;
      const l0 = luminance(img0, cols, rows),
        l1 = luminance(img1, cols, rows);
      worker.postMessage({ W: cols, H: rows, l0, l1, bands: Math.max(2, toneBands), version: v }, [l0.buffer, l1.buffer]);
    };
    worker.onmessage = (e: MessageEvent<{ map: Uint32Array; version: number }>) => {
      if (dead || e.data.version !== version) return;
      const map = e.data.map;
      const end = new Float32Array(count * 2);
      for (let i = 0; i < count; i++) {
        const n = map[i];
        end[i * 2] = ((n % cols) + 0.5) / cols;
        end[i * 2 + 1] = (((n / cols) | 0) + 0.5) / rows;
      }
      bufEnd ||= gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufEnd);
      gl.bufferData(gl.ARRAY_BUFFER, end, gl.STATIC_DRAW);
      ready = true;
      kick();
    };
    const setScales = () => {
      if (!img0 || !img1) return;
      const s0 = coverScale(img0.width, img0.height, W, H),
        s1 = coverScale(img1.width, img1.height, W, H);
      gl.uniform2f(loc.uScale0, s0[0], s0[1]);
      gl.uniform2f(loc.uScale1, s1[0], s1[1]);
    };
    const resize = () => {
      const r = root.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width)),
        h = Math.max(1, Math.floor(r.height));
      if (w === W && h === H) return;
      W = w;
      H = h;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      setScales();
      const t = Math.max(1, Math.round(tile));
      const c = Math.ceil(w / t),
        rr = Math.ceil(h / t);
      if (c !== cols || rr !== rows) {
        cols = c;
        rows = rr;
        buildGrid();
        requestMap();
      } else {
        gl.uniform1f(loc.uPointSize, Math.max(w / cols, h / rows));
        kick();
      }
    };

    // Animation state
    let cur = 0,
      target = 0,
      raf = 0,
      last = performance.now(),
      inView = true,
      armed = true;
    const fades = () => {
      const k = 0.16;
      imgA.style.opacity = String(cur < k ? clamp01((k - cur) / k) : 0);
      imgB.style.opacity = String(cur > 1 - k ? clamp01((cur - (1 - k)) / k) : 0);
    };
    const draw = () => {
      gl.useProgram(prog);
      gl.uniform1f(loc.uT, cur);
      gl.uniform1f(loc.uChaos, Math.max(0, chaos));
      gl.uniform1f(loc.uGamma, Math.max(0.1, gatherGamma));
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (ready && tex0 && tex1 && bufStart && bufEnd && bufRand && count > 0) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, tex1);
        bind(bufStart, loc.aStart);
        bind(bufEnd, loc.aEnd);
        bind(bufRand, loc.aRandom);
        gl.drawArrays(gl.POINTS, 0, count);
      }
      fades();
    };
    const step = (now: number) => {
      raf = 0;
      if (dead) return;
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      const k = Math.max(0.001, Math.min(0.5, speed)) * 62.5;
      cur += (target - cur) * (1 - Math.exp(-k * dt));
      if (Math.abs(target - cur) < 5e-4) cur = target;
      draw();
      if (Math.abs(target - cur) >= 5e-4 && inView) raf = requestAnimationFrame(step);
    };
    const kick = () => {
      draw();
      if (ready && inView && Math.abs(target - cur) >= 5e-4 && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    const enter = () => {
      if (!armed) return;
      armed = false;
      target = target >= 0.5 ? 0 : 1;
      kick();
    };
    const leave = () => {
      armed = true;
    };
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointerleave", leave);
    const ro = new ResizeObserver(resize);
    ro.observe(root);
    const io = new IntersectionObserver(
      ([e]) => {
        inView = !!e?.isIntersecting;
        last = performance.now();
        if (inView) kick();
      },
      { threshold: 0.01 }
    );
    io.observe(root);

    Promise.all([load(imageA), load(imageB)])
      .then(([a, b]) => {
        if (dead) return;
        img0 = a;
        img1 = b;
        tex0 = makeTex(a);
        tex1 = makeTex(b);
        W = H = 0;
        resize();
        setScales();
        requestMap();
      })
      .catch(() => canvas.remove());

    return () => {
      dead = true;
      if (raf) cancelAnimationFrame(raf);
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointerleave", leave);
      ro.disconnect();
      io.disconnect();
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
      [tex0, tex1].forEach((t) => t && gl.deleteTexture(t));
      [bufStart, bufEnd, bufRand].forEach((b) => b && gl.deleteBuffer(b));
      gl.deleteProgram(prog);
      imgA.remove();
      imgB.remove();
      canvas.remove();
    };
  }, [imageA, imageB, chaos, speed, gatherGamma, tile, toneBands]);

  return <div ref={host} className={className} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }} />;
}
