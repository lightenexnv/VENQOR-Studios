/**
 * 3D "rotor" of image cards flipping around a shared hinge (How We Work).
 * Pure CSS 3D port of the reference's Rotor Gallery: each card runs the same
 * rotateX turn with a staggered negative delay so they fan around the axis.
 */
import type { CSSProperties } from "react";
import styles from "./Rotor.module.css";

type Props = {
  images: string[];
  cardWidth: number;
  cardHeight: number;
  borderRadius?: number;
  speedSec?: number;
  staggerMs?: number;
  perspective?: number;
  camX?: number;
  camY?: number;
  camZ?: number;
  offsetX?: number;
  offsetY?: number;
  imgRotateDeg?: number;
  className?: string;
};

export default function Rotor({
  images,
  cardWidth,
  cardHeight,
  borderRadius = 50,
  speedSec = 15.25,
  staggerMs = 3810,
  perspective = 1350,
  camX = 90,
  camY = 90,
  camZ = -67,
  offsetX = 4,
  offsetY = 125,
  imgRotateDeg = -90,
  className = "",
}: Props) {
  return (
    <div className={`${styles.stage} ${className}`} style={{ perspective: `${perspective}px` }} aria-hidden>
      <div
        className={styles.scene}
        style={{
          width: cardWidth,
          height: cardHeight,
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${camX}deg) rotateY(${camY}deg) rotateZ(${camZ}deg)`,
        }}
      >
        <ul className={styles.list}>
          {images.map((src, i) => (
            <li
              key={src + i}
              className={styles.card}
              style={
                {
                  "--img": `url(${src})`,
                  "--radius": `${borderRadius}px`,
                  "--imgrot": `${imgRotateDeg}deg`,
                  animationDuration: `${speedSec}s`,
                  animationDelay: `${i * -staggerMs}ms`,
                } as CSSProperties
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
