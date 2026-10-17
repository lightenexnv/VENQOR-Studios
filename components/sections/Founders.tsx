"use client";

import { SITE } from "@/content/site";
import SparkleOrbit from "@/components/fx/SparkleOrbit";
import FillButton from "@/components/ui/FillButton";
import styles from "./Founders.module.css";

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ marginLeft: 8 }}>
      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Founders() {
  const f = SITE.founders;

  return (
    <section id="founders" className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Section Header: [07] FOUNDERS */}
        <div className={styles.heading}>
          <div className={styles.headLeft}>
            <span className={`t-28 ph-24 ${styles.number}`}>{f.number}</span>
            <h2 className="t-28 ph-24">{f.label}</h2>
          </div>
          <p className={styles.tagline}>{f.tagline}</p>
        </div>

        {/* Intro Ethos Statement */}
        <div className={styles.introRow}>
          <p className={`t-body ${styles.lead}`}>
            {f.subtext}
          </p>
        </div>

        {/* Linear Layout: Neil Verma on the left, Yojasvi on the right */}
        <div className={styles.grid}>
          {f.items.map((founder, idx) => {
            const isNeil = idx === 0;
            return (
              <article key={founder.name} className={styles.card}>
                {/* 3D Dual-layer Continuous Sparkle Orbit Stage */}
                <div className={styles.sparkleStage}>
                  <SparkleOrbit
                    imageSrc={founder.image}
                    imageAlt={`${founder.name} — ${founder.role}`}
                    variant={isNeil ? "developer" : "marketing"}
                  />
                </div>

                {/* Editorial Details & Bio Panel */}
                <div className={styles.metaBox}>
                  <div className={styles.roleRow}>
                    <span className={styles.rolePill}>
                      {founder.rolePill || (isNeil ? "HEAD OF DEVELOPMENT" : "HEAD OF MARKETING")}
                    </span>
                    <span className={styles.statusPill}>
                      <span className={styles.statusDot} aria-hidden />
                      {founder.teamPill || (isNeil ? "DEV & TESTING TEAMS" : "MARKETING & CARE TEAMS")}
                    </span>
                  </div>

                  <div className={styles.nameRow}>
                    <h3 className={`t-28 tb-24 ph-20 ${styles.name}`}>{founder.name}</h3>
                    <p className={styles.focus}>{founder.focus}</p>
                  </div>

                  <p className={`t-body15 ${styles.bio}`}>{founder.desc}</p>

                  <ul className={styles.skills} aria-label={`${founder.name} areas of expertise`}>
                    {founder.skills.map((skill) => (
                      <li key={skill} className={styles.skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.actionRow}>
                    <a href={founder.phoneHref} className={styles.phoneLink} aria-label={`Call ${founder.name} at ${founder.phone}`}>
                      <PhoneIcon />
                      <span>{founder.phone}</span>
                    </a>

                    <div className={styles.btnWrap}>
                      <FillButton
                        tone="dark"
                        href={founder.portfolioHref}
                        labelClassName="t-btn"
                        className={styles.actionBtn}
                      >
                        <span>{isNeil ? "VIEW PORTFOLIO" : "START A PROJECT"}</span>
                        <ArrowUpRight />
                      </FillButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
