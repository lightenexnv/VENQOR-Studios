"use client";

import { useState } from "react";
import { SITE } from "@/content/site";
import ParticleMorph from "@/components/fx/ParticleMorph";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Showreel.module.css";

export default function Showreel() {
  const s = SITE.showreel;
  const bp = useBreakpoint();
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(s.vimeoId);

  return (
    <section className={styles.section} aria-label={s.title}>
      <div className={`container ${styles.container}`}>
        <div className={styles.frame}>
          {playing && hasVideo ? (
            <iframe
              className={styles.video}
              src={`https://player.vimeo.com/video/${s.vimeoId}?autoplay=1&autopause=0`}
              title={s.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.trigger}
              onClick={() => {
                if (hasVideo) setPlaying(true);
              }}
              data-cursor={hasVideo ? "play" : undefined}
              aria-label={hasVideo ? "Play showreel" : "Showreel coming soon"}
              style={hasVideo ? undefined : { cursor: "default" }}
            >
              {bp === "desktop" ? (
                <ParticleMorph imageA={s.imageA} imageB={s.imageB} chaos={0.805} gatherGamma={9.5} speed={0.02} tile={1} toneBands={24} />
              ) : (
                <>
                  <img src={s.imageA} alt="" className={styles.still} />
                  <span className={styles.play}>
                    <span className="t-caps">{hasVideo ? "[Play]" : "[Coming Soon]"}</span>
                  </span>
                </>
              )}
            </button>
          )}
        </div>
        {!playing && (
          <div className={styles.title} aria-hidden>
            <span>{s.glyphs}</span>
            <span>{s.title}</span>
          </div>
        )}
      </div>
    </section>
  );
}
