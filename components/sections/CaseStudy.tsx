import { SITE } from "@/content/site";
import BeforeAfter from "@/components/fx/BeforeAfter";
import FillButton from "@/components/ui/FillButton";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  const c = SITE.caseStudy;
  return (
    <section id="case" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <h2 className={`t-84 tb-53 ph-53 ${styles.title}`}>{c.title}</h2>
          <span className={`t-28 ph-24 ${styles.number}`}>{c.number}</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.frame}>
              <div className={styles.compare}>
                <BeforeAfter imageA={c.before} imageB={c.after} altA={`${c.name} — before`} altB={`${c.name} — after`} />
              </div>
            </div>
            <img src={c.logo} alt={c.name} className={styles.logo} />
          </div>

          <div className={styles.about}>
            <h3 className={`t-38 ph-35 ${styles.lead}`}>{c.heading}</h3>
            <div className={styles.nameBlock}>
              <a href={c.href} className={`t-28 ${styles.name}`}>
                {c.name}
              </a>
              <ul className={styles.tags}>
                {c.tags.map((t) => (
                  <li key={t} className="t-13">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className={`t-body ${styles.text}`}>{c.text}</p>
            <dl className={styles.info}>
              {c.info.map((i) => (
                <div key={i.label} className={styles.infoRow}>
                  <dt className={`t-13 ${styles.infoLabel}`}>{i.label}</dt>
                  <dd className="t-13">{i.value}</dd>
                </div>
              ))}
            </dl>
            <FillButton href={c.href} tone="dark" className={styles.cta}>
              {c.cta}
            </FillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
