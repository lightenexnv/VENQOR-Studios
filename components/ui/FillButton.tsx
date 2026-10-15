"use client";

/**
 * Button / link with the reference's "shutter" hover:
 * two fills close in from the top and bottom edges and the label inverts.
 *  tone="light": white button → black on hover (Book Call, Subscribe)
 *  tone="dark":  black button → white on hover (View Project, Send Message, Contact Manager)
 */
import type { ReactNode } from "react";
import styles from "./FillButton.module.css";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  onClick?: () => void;
};

export default function FillButton({ children, tone = "light", href, type = "button", disabled, className = "", labelClassName = "t-btn", onClick }: Props) {
  const cls = `${styles.btn} ${styles[tone]} ${disabled ? styles.disabled : ""} ${className}`;
  const inner = (
    <>
      <span className={`${styles.fill} ${styles.top}`} aria-hidden />
      <span className={`${styles.fill} ${styles.bottom}`} aria-hidden />
      <span className={`${styles.label} ${labelClassName}`}>{children}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
