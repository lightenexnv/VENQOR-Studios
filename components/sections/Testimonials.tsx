"use client";

import { useRef, useState } from "react";
import { SITE } from "@/content/site";
import WaveText from "@/components/fx/WaveText";
import Ticker from "@/components/fx/Ticker";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Testimonials.module.css";

const T = SITE.testimonials;
type Item = (typeof T.items)[number];
const byName = (n: string) => T.items.find((i) => i.name === n)!;

function Quote({ item, offset = false }: { item: Item; offset?: boolean }) {
  return (
    <div className={`${styles.quoteWrap} ${offset ? styles.offset : ""}`}>
      <figure className={styles.quote}>
        <blockquote className={`t-body ${styles.text}`}>{item.quote}</blockquote>
        <figcaption className={styles.from}>
          <span className={styles.mark}>
            <img src={item.mark} alt="" width={40} height={40} />
          </span>
          <span className={`t-20 tb-17 ph-17 ${styles.name}`}>{item.name}</span>
          <span className={`t-13 ${styles.role}`}>{item.role}</span>
        </figcaption>
      </figure>
    </div>
  );
}

function ClientsLeft() {
  return (
    <div className={styles.clients}>
      <img src={T.imageTop} alt="" className={styles.photo} loading="lazy" />
      <div className={styles.stat}>
        <span className={`t-stat tb-stat84 ph-stat53 ${styles.statValue}`}>{T.clients.value}</span>
        <span className={`t-20 ph-17 ${styles.statLabel}`}>{T.clients.label}</span>
      </div>
      <div className={styles.logos}>
        <Ticker gap={62} direction="right">
          {T.marks.map((m, i) => (
            <img key={i} src={m} alt="" width={30} height={30} className={styles.markImg} />
          ))}
        </Ticker>
        <Ticker gap={35} direction="left">
          {T.wordmarks.map((m, i) => (
            <img key={i} src={m.src} alt="" width={m.w} height={40} style={{ width: m.w, height: 40 }} />
          ))}
        </Ticker>
      </div>
    </div>
  );
}

function ClientsRight() {
  return (
    <div className={styles.clients}>
      {T.stats.map((s) => (
        <div key={s.label} className={`${styles.stat} ${styles.statRight}`}>
          <span className={`t-stat tb-stat84 ph-stat53 ${styles.statValue}`}>{s.value}</span>
          <span className={`t-20 ph-17 ${styles.statLabel}`}>{s.label}</span>
        </div>
      ))}
      <img src={T.imageBottom} alt="" className={styles.photo} loading="lazy" />
    </div>
  );
}

function Carousel() {
  const order = ["Alex Chen", "Dana Fox", "Maya Patel", "Leon Müller"].map(byName);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  return (
    <div className={styles.carousel}>
      <div
        ref={track}
        className={styles.track}
        onScroll={(e) => {
          const el = e.currentTarget;
          setActive(Math.round(el.scrollLeft / (el.clientWidth + 10)));
        }}
      >
        {order.map((it) => (
          <div key={it.name} className={styles.slide}>
            <Quote item={it} />
          </div>
        ))}
      </div>
      <div className={styles.dots} role="tablist" aria-label="Testimonials">
        {order.map((it, i) => (
          <button
            key={it.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show testimonial ${i + 1}`}
            className={i === active ? styles.dotActive : undefined}
            onClick={() => {
              const el = track.current!;
              el.scrollTo({ left: i * (el.clientWidth + 10), behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const bp = useBreakpoint();
  const maya = byName("Maya Patel"),
    alex = byName("Alex Chen"),
    leon = byName("Leon Müller"),
    dana = byName("Dana Fox");

  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <span className={`t-28 ph-24 ${styles.number}`}>{T.number}</span>
          <div className={styles.wave}>
            <WaveText
              text={T.curved}
              size={bp === "phone" ? 20 : 22}
              tracking={bp === "phone" ? 6 : 9}
              waveAmplitude={bp === "phone" ? 15 : 25}
              angleDeg={192}
              waveLength={12}
              waveSpeed={0.25}
              waveDecay={0.01}
            />
          </div>
        </div>

        {bp === "desktop" && (
          <div className={styles.grid3}>
            <div className={styles.col}>
              <ClientsLeft />
              <Quote item={maya} />
            </div>
            <div className={styles.col}>
              <Quote item={alex} offset />
              <Quote item={leon} />
            </div>
            <div className={`${styles.col} ${styles.colTight}`}>
              <Quote item={dana} />
              <ClientsRight />
            </div>
          </div>
        )}

        {bp === "tablet" && (
          <div className={styles.grid2}>
            <div className={styles.col}>
              <ClientsLeft />
              <Quote item={maya} />
            </div>
            <div className={styles.col}>
              <Quote item={alex} offset />
              <Quote item={leon} />
            </div>
            <Quote item={dana} />
            <ClientsRight />
          </div>
        )}

        {bp === "phone" && (
          <div className={styles.stack}>
            <Carousel />
            <ClientsLeft />
            <ClientsRight />
          </div>
        )}
      </div>
    </section>
  );
}
