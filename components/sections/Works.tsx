"use client";

import { SITE } from "@/content/site";
import Scramble from "@/components/ui/Scramble";
import ProjectCard from "@/components/blocks/ProjectCard";
import styles from "./Works.module.css";

export default function Works() {
  const w = SITE.works;
  const projects = w.projects;
  // Split 5 projects across two staggered columns (keeps the staggered grid)
  // colA: 0, 2, 4  |  colB (offset): 1, 3
  const colA = projects.filter((_, i) => i % 2 === 0);
  const colB = projects.filter((_, i) => i % 2 === 1);

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
              {colA.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className={`${styles.col} ${styles.colOffset}`}>
              {colB.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
