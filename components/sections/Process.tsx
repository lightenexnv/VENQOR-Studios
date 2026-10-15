"use client";

import { SITE } from "@/content/site";
import SectionHeading from "@/components/blocks/SectionHeading";
import Rotor from "@/components/fx/Rotor";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Process.module.css";

export default function Process() {
  const p = SITE.process;
  const bp = useBreakpoint();
  const card = bp === "desktop" ? 250 : 170;

  return (
    <section id="process" className={styles.section}>
      <div className={styles.outer}>
        <div className={styles.block}>
          <div className={styles.content}>
            <SectionHeading label={p.label} number={p.number} tone="light" />

            <div className={styles.grid}>
              <div className={styles.rotor}>
                <div className={styles.rotorStage}>
                  <Rotor images={p.rotor} cardWidth={card} cardHeight={card} offsetY={bp === "phone" ? 75 : 125} />
                </div>
              </div>

              {p.steps.map((s, i) => (
                <article key={s.n} className={`${styles.step} ${i % 2 ? styles.right : styles.left}`}>
                  <p className={`t-17 ${styles.n}`}>{s.n}</p>
                  <h3 className={`t-84 tb-53 ph-38 ${styles.title}`}>{s.title}</h3>
                  <p className={`t-body ${styles.text}`}>{s.text}</p>
                  <p className={`t-caps ${styles.time}`}>{s.time}</p>
                </article>
              ))}
            </div>

            <a href="#contact" className={styles.cta}>
              <span className={`t-btn19 ph-btn ${styles.ctaLabel}`}>{p.cta}</span>
              <span className={styles.ctaImages} aria-hidden>
                <img src={p.ctaImages.phone} alt="" className={styles.phone} />
                <img src={p.ctaImages.email} alt="" className={styles.email} />
                <img src={p.ctaImages.manager} alt="" className={styles.manager} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
