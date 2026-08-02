"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Section reveal built on Motion for React.
 * `MotionConfig reducedMotion="user"` plus the CSS fallback in globals.css
 * keep the site WCAG-compliant for prefers-reduced-motion users.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.2, 0.6, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

/**
 * Kinetic manifesto words: staggered reveal. Markup is identical on server
 * and client (no useReducedMotion branch — it would cause a hydration
 * mismatch); MotionConfig strips transforms for reduced-motion users.
 */
export function KineticWords({ words }: { words: string[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 sm:gap-x-10" aria-label={words.join(", ")}>
        {words.map((word, i) => (
          <motion.li
            key={word}
            className="font-display text-2xl font-semibold tracking-tight text-paper/25 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, color: "#F7F8FA" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
          >
            {word}
            <span aria-hidden className="ml-4 text-gold/60 sm:ml-8">·</span>
          </motion.li>
        ))}
      </ul>
    </MotionConfig>
  );
}
