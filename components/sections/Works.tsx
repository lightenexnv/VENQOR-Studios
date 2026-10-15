"use client";

import { SITE } from "@/content/site";
import Scramble from "@/components/ui/Scramble";
import ProjectCard from "@/components/blocks/ProjectCard";
import styles from "./Works.module.css";

export default function Works() {
  const w = SITE.works;
  const [whiteGate, alta, fashionista, lementa] = w.projects;

  return (
    <section id="projects" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <span className={`t-28 ph-24 ${styles.number}`}>{w.number}</span>
          <h2 className={`t-28 ph-24 ${styles.label}`}>{w.label}</h2>
          <div className={styles.count}>
            <span className={`t-stat tb-84 ph-53 ${styles.countNum}`}>{w.count}</span>
            <a href="#projects" className={styles.viewAll}>
              <Scramble text={w.viewAll} className={styles.vertical} />
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <aside className={styles.metricsCol}>
            <p className={`t-body ${styles.intro}`}>{w.intro}</p>
            <div className={styles.metrics}>
              {w.metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <Scramble text={m.value} trigger="view" repeat durationMs={1000} className={`t-stat tb-stat84 ph-stat53 ${styles.metricValue}`} as="div" />
                  <h3 className={`t-20 ph-17 ${styles.metricLabel}`}>{m.label}</h3>
                  <p className={`t-body ${styles.metricText}`}>{m.text}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className={styles.cards}>
            <div className={styles.col}>
              <ProjectCard project={whiteGate} />
              <ProjectCard project={fashionista} />
            </div>
            <div className={`${styles.col} ${styles.colOffset}`}>
              <ProjectCard project={alta} />
              <ProjectCard project={lementa} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
