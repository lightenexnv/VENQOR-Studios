"use client";

import { SITE } from "@/content/site";
import Scramble from "@/components/ui/Scramble";
import WordSphere from "@/components/fx/WordSphere";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./About.module.css";

// The statement's first line is indented by 7 monospace cells to make room for "[01]".
const INDENT = " ".repeat(7);

export default function About() {
  const a = SITE.about;
  const bp = useBreakpoint();
  return (
    <section id="agency" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.welcome}>
          <h2 className={`t-53 tb-38 ph-28 ${styles.statement}`}>
            {INDENT}
            {a.statement}
          </h2>
          <span className={`t-28 ph-24 ${styles.number}`}>{a.number}</span>
          <a href="#services" className={styles.more}>
            <Scramble text={a.more} className={styles.moreText} />
          </a>
        </div>

        <div className={styles.content}>
          <div className={styles.lead}>
            <div className={styles.image}>
              <img src={a.image} alt="" loading="lazy" />
            </div>
            <p className={`t-body ${styles.body}`}>
              <span className={styles.indent} aria-hidden />
              {a.body.join("")}
            </p>
          </div>
          <div className={styles.stack}>
            <h3 className={`t-caps ${styles.stackTitle}`}>{a.stackTitle}</h3>
            <div className={styles.sphere}>
              <WordSphere words={a.stack} fontScale={bp === "phone" ? 0.068 : 0.074} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
