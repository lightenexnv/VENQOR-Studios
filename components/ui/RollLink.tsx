"use client";

/**
 * Link whose label is swapped by a sliding duplicate on hover.
 *  - direction="down":  label drops out, copy drops in from above (top nav)
 *  - direction="left":  label slides out left, copy slides in from the right (footer / menu)
 */
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import styles from "./RollLink.module.css";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  direction?: "down" | "left";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
};

export default function RollLink({ href, children, className = "", labelClassName = "", direction = "down", onClick, style }: Props) {
  return (
    <a href={href} className={`${styles.link} ${styles[direction]} ${className}`} onClick={onClick} style={style}>
      <span className={`${styles.label} ${labelClassName}`}>{children}</span>
      <span className={`${styles.label} ${styles.copy} ${labelClassName}`} aria-hidden>
        {children}
      </span>
    </a>
  );
}
