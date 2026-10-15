"use client";

/**
 * Framer-style appear effect: fades (and optionally scales) a block in once,
 * the first time any part of it enters the viewport. Spring ≈ 1s, no bounce.
 */
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  from?: { opacity?: number; scale?: number; y?: number };
  delay?: number;
};

export default function Reveal({ children, className, style, from = { opacity: 0 }, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: from.opacity ?? 0, scale: from.scale ?? 1, y: from.y ?? 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}
