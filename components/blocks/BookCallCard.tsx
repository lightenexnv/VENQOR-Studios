"use client";

/**
 * "Start a Project / Book Call" card.
 *  tone="light": hero (manager video on the right + "Liked by 50+ founders" row)
 *  tone="dark":  footer (manager photo on the left, dark panel)
 */
import { SITE } from "@/content/site";
import FillButton from "@/components/ui/FillButton";
import styles from "./BookCallCard.module.css";

export default function BookCallCard({ tone }: { tone: "light" | "dark" }) {
  const m = SITE.manager;
  const media = (
    <div className={styles.media}>
      {tone === "light" ? (
        <>
          <img src={m.heroImage} alt={m.fullName} className={styles.still} />
          <video className={styles.video} src={m.video} poster={m.videoPoster} autoPlay muted loop playsInline preload="metadata" aria-hidden />
        </>
      ) : (
        <img src={m.footerImage} alt={m.fullName} className={styles.still} />
      )}
      <span className={`t-13 ${styles.name}`}>{m.short}</span>
    </div>
  );

  return (
    <div className={`${styles.card} ${styles[tone]}`}>
      <div className={styles.book}>
        {tone === "dark" && media}
        <div className={styles.frame}>
          <h2 className={styles.title}>
            {SITE.hero.bookTitle[0]}
            <br />
            {SITE.hero.bookTitle[1]}
          </h2>
          <p className={`t-body15 ${styles.text}`}>{SITE.hero.bookText}</p>
          <FillButton href={SITE.contact.bookCallHref} tone="light" className={styles.button}>
            Book Call
          </FillButton>
        </div>
        {tone === "light" && media}
      </div>
      {tone === "light" && (
        <div className={styles.founders}>
          <span className="t-13">
            {SITE.hero.likedBy[0]}
            <br />
            {SITE.hero.likedBy[1]}
          </span>
          <div className={styles.faces}>
            {SITE.hero.founders.map((src, i) => (
              <span key={src} className={styles.face} style={{ left: i * 30 }}>
                <img src={src} alt="" width={38} height={38} />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
