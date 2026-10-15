"use client";

/**
 * Services [02]
 * Desktop: staggered pills; hovering one closes a dark shutter over it and the cursor
 *          becomes a floating image card.
 * Tablet/phone: the same pills become an accordion with a long description + image.
 */
import { useState } from "react";
import { SITE } from "@/content/site";
import SectionHeading from "@/components/blocks/SectionHeading";
import styles from "./Services.module.css";

function Chevron() {
  return (
    <span className={styles.chevron} aria-hidden>
      <svg viewBox="0 0 8 4" width="8" height="4" overflow="visible">
        <path d="M0 0 L4 4 L8 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

export default function Services() {
  const s = SITE.services;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <SectionHeading label={s.label} number={s.number} />
        <ul className={styles.list}>
          {s.items.map((item, i) => {
            const isOpen = open === i;
            const titleFirst = item.align === "left";
            return (
              <li key={item.title} className={`${styles.row} ${styles[item.align]}`}>
                {/* desktop pill */}
                <div className={styles.card} data-cursor="image" data-cursor-src={item.image}>
                  <span className={styles.shutter} aria-hidden />
                  {titleFirst ? (
                    <>
                      <h3 className={`t-84 ${styles.title}`}>{item.title}</h3>
                      <p className={`t-13 ${styles.sub}`}>{item.text}</p>
                    </>
                  ) : (
                    <>
                      <p className={`t-13 ${styles.sub}`}>{item.text}</p>
                      <h3 className={`t-84 ${styles.title}`}>{item.title}</h3>
                    </>
                  )}
                </div>

                {/* tablet / phone accordion */}
                <div className={`${styles.acc} ${isOpen ? styles.accOpen : ""}`}>
                  <span className={styles.shutter} aria-hidden />
                  <button
                    type="button"
                    className={styles.accHead}
                    aria-expanded={isOpen}
                    aria-controls={`svc-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className={`t-53 ph-20 ${styles.accTitle}`}>{item.title}</span>
                    <Chevron />
                  </button>
                  <div id={`svc-${i}`} className={styles.accBody} hidden={!isOpen}>
                    <p className={`t-13 ${styles.accSub}`}>{item.text}</p>
                    <div className={styles.accRow}>
                      <p className={`t-body ${styles.accText}`}>{item.long}</p>
                      <img src={item.image} alt="" className={styles.accImg} loading="lazy" />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
