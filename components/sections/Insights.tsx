import { SITE } from "@/content/site";
import Scramble from "@/components/ui/Scramble";
import styles from "./Insights.module.css";

export default function Insights() {
  const s = SITE.insights;
  return (
    <section id="blog" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <div className={styles.headLeft}>
            <span className={`t-28 ph-24 ${styles.number}`}>{s.number}</span>
            <h2 className="t-28 ph-24">{s.label}</h2>
          </div>
          <a href="#blog" className={styles.all}>
            <Scramble text={s.all} className={styles.caps} />
          </a>
        </div>

        <div className={styles.posts}>
          {s.posts.map((p, i) => (
            <article key={p.title} className={`${styles.post} ${i % 2 ? styles.flip : ""}`}>
              <div className={styles.card}>
                <a href={p.href} className={styles.image} tabIndex={-1} aria-hidden>
                  <img src={p.image} alt="" loading="lazy" />
                </a>
                <div className={styles.text}>
                  <h3 className="t-35 ph-28">
                    <a href={p.href}>{p.title}</a>
                  </h3>
                  <p className={`t-body ${styles.excerpt}`}>{p.text}</p>
                </div>
              </div>
              <a href={p.href} className={styles.more} aria-label={`Read more: ${p.title}`}>
                <Scramble text={s.readMore} className={styles.caps} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
