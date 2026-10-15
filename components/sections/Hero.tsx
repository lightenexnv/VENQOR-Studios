"use client";

import { SITE } from "@/content/site";
import TwistGallery from "@/components/fx/TwistGallery";
import Scramble from "@/components/ui/Scramble";
import BookCallCard from "@/components/blocks/BookCallCard";
import Reveal from "@/components/ui/Reveal";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Hero.module.css";

// Ribbon settings copied from the reference instance (per breakpoint overrides).
const RIBBON = {
  angleDeg: -31,
  camDist: 3000,
  camFovDeg: 19,
  camPitchDeg: -11,
  camRollDeg: -10,
  camTargetX: 0,
  camTargetZ: 18,
  camYawDeg: -17,
  cardH: 370,
  cardW: 138,
  curveAmp: 0,
  phaseStepDeg: 12.5,
  radius: 130,
  scrollSpeed: 0.47,
  spacing: 73,
  spinDeg: 25,
  tiltYdeg: 35,
};

export default function Hero() {
  const bp = useBreakpoint();
  const ribbon = { ...RIBBON, count: bp === "phone" ? 44 : 83, camTargetY: bp === "phone" ? -138 : bp === "tablet" ? 30 : 17 };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.dots} style={{ backgroundImage: `url(${SITE.hero.dots})` }} aria-hidden />

      <Reveal className={styles.ribbon} from={{ opacity: 0.2, scale: 0.9 }}>
        <TwistGallery images={SITE.hero.ribbon} {...ribbon} />
      </Reveal>

      <div className={styles.inner}>
        <div className={styles.book}>
          <BookCallCard tone="light" />
        </div>

        <div className={styles.brand}>
          <Scramble className={styles.tagline} text={SITE.hero.tagline} trigger="view" durationMs={2000} as="div" />
          <h1 className={styles.wordmark}>
            <img src={SITE.wordmark} alt={SITE.brand} />
          </h1>
        </div>
      </div>
    </section>
  );
}
