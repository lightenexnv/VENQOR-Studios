/** Featured project card: image (cross-fades to a second shot on hover) + name + tags. */
import type { Site } from "@/content/site";
import styles from "./ProjectCard.module.css";

type Project = Site["works"]["projects"][number];

export default function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");
  return (
    <a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={styles.card}
      aria-label={`${project.title} — ${project.tags.join(", ")}`}
    >
      <div className={styles.image} style={{ aspectRatio: `1 / ${project.ratio}` }}>
        <img src={project.images[0]} alt={`${project.title} — ${project.tags.join(", ")}`} loading="lazy" />
        <img src={project.images[1]} alt="" loading="lazy" className={styles.alt} aria-hidden />
      </div>
      <div className={styles.name}>
        <h3 className="t-20">{project.title}</h3>
        <ul className={styles.tags}>
          {project.tags.map((t) => (
            <li key={t} className="t-13">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
