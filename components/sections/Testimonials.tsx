"use client";

import { useRef, useState } from "react";
import { SITE } from "@/content/site";
import WaveText from "@/components/fx/WaveText";
import WordSphere from "@/components/fx/WordSphere";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Testimonials.module.css";

const T = SITE.testimonials;
type Item = (typeof T.items)[number];

const domain = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Testimonial card. Proof comes first: a browser-framed preview of the client's actual live
 * site (with a working link), then the quote, then who said it. Private projects show an
 * illustration of the project type instead of a fake screenshot.
 */
function Quote({ item, offset = false }: { item: Item; offset?: boolean }) {
  const live = Boolean(item.site);
  const Preview = live ? "a" : "div";
  return (
    <div className={`${styles.quoteWrap} ${offset ? styles.offset : ""}`}>
      <figure className={styles.quote}>
        <Preview
          className={styles.proof}
          {...(live ? { href: item.site, target: "_blank", rel: "noreferrer", "aria-label": `Visit ${item.project} live site` } : {})}
        >
          <span className={styles.browserBar} aria-hidden>
            <i />
            <i />
            <i />
            <span className={styles.url}>{live ? domain(item.site) : `${item.project} · private project`}</span>
          </span>
          <img src={item.preview} alt={live ? `${item.project} live website` : ""} loading="lazy" className={`${styles.shot} ${live ? "" : styles.shotArt}`} />
          <span className={`t-13 ${styles.badge} ${live ? styles.badgeLive : ""}`}>{live ? "Live site ↗" : "Private project"}</span>
        </Preview>
        <blockquote className={`t-body ${styles.text}`}>
          <span className={styles.qmark} aria-hidden>
            &ldquo;
          </span>
          {item.quote}
        </blockquote>
        <figcaption className={styles.from}>
          <span className={styles.mark} aria-hidden>
            {item.initial}
          </span>
          <span className={`t-20 tb-17 ph-17 ${styles.name}`}>{item.project}</span>
          <span className={`t-13 ${styles.role}`}>{item.role.replace(`${item.project} · `, "").replace(/^[^·]*Water · /, "")}</span>
          <span className={`t-13 ${styles.meta}`}>Delivered {item.year}</span>
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
      <div className={styles.reviews}>
        <span className={`t-caps ${styles.reviewsTitle}`}>{T.reviewsTitle}</span>
        <div className={styles.reviewSphere}>
          <WordSphere words={T.reviews} fontScale={0.052} speed={0.0045} shape="ellipse" label="What clients say" />
        </div>
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
  const order = T.items;
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
  const items = T.items;

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
              {items[0] && <Quote item={items[0]} />}
            </div>
            <div className={styles.col}>
              {items[1] && <Quote item={items[1]} offset />}
              {items[2] && <Quote item={items[2]} />}
            </div>
            <div className={`${styles.col} ${styles.colTight}`}>
              {items[3] && <Quote item={items[3]} />}
              <ClientsRight />
            </div>
          </div>
        )}

        {bp === "tablet" && (
          <div className={styles.grid2}>
            <div className={styles.col}>
              <ClientsLeft />
              {items[0] && <Quote item={items[0]} />}
            </div>
            <div className={styles.col}>
              {items[1] && <Quote item={items[1]} offset />}
              {items[2] && <Quote item={items[2]} />}
            </div>
            {items[3] && <Quote item={items[3]} />}
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
