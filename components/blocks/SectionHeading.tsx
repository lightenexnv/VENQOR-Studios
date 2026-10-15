/** "SERVICES ............ [02]" row used at the top of most sections. */
import styles from "./SectionHeading.module.css";

type Props = { label: string; number: string; tone?: "dark" | "light"; className?: string };

export default function SectionHeading({ label, number, tone = "dark", className = "" }: Props) {
  return (
    <div className={`${styles.heading} ${tone === "light" ? styles.light : ""} ${className}`}>
      <h2 className={`t-28 ph-24 ${styles.label}`}>{label}</h2>
      <span className={`t-28 ph-24 ${styles.number}`}>{number}</span>
    </div>
  );
}
