"use client";

import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { GhostButtonLink, GoldButtonLink, TextLink } from "@/components/ui/buttons";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";

/**
 * Cinematic hero: obsidian sky, CSS city lights, network grid and a gold
 * light sweep. The opening sequence stays under ~2.5s, never blocks
 * navigation, and collapses to simple fades under prefers-reduced-motion.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.2, 0.6, 0.2, 1] as const },
        };

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero-canvas relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
        <div aria-hidden className="city-lights absolute inset-0" />
        <div aria-hidden className="network-grid absolute inset-0" />

        {/* Gold light sweep */}
        {!reduced ? (
          <motion.div
            aria-hidden
            className="gold-line absolute left-0 right-0 top-[38%]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          />
        ) : null}

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <motion.p {...fadeUp(0.25)} className="font-mono-label text-[0.65rem] text-gold sm:text-xs">
            {dict.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.45)}
            className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl"
          >
            {dict.hero.headline.split(" ").map((word, i, arr) => (
              <span key={i} className={i >= arr.length - 2 ? "text-gold-gradient" : undefined}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.7)} className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {dict.hero.sub}
          </motion.p>

          <motion.div {...fadeUp(0.9)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GoldButtonLink href={localePath(locale, "/platforms")}>{dict.common.explorePlatforms}</GoldButtonLink>
            <GhostButtonLink href={localePath(locale, "/contact")}>{dict.common.partnerCta}</GhostButtonLink>
            <TextLink href={localePath(locale, "/about")}>{dict.common.discoverVision}</TextLink>
          </motion.div>

          <motion.ul
            {...fadeUp(1.15)}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4"
            aria-label={dict.hero.indicators.join(", ")}
          >
            {dict.hero.indicators.map((item) => (
              <li key={item} className="border-l border-gold/40 pl-3 font-mono-label text-[0.62rem] leading-relaxed text-paper/70">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <p aria-hidden className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-label text-[0.6rem] text-paper/40">
          {dict.hero.scrollHint} ↓
        </p>
      </section>
    </MotionConfig>
  );
}
