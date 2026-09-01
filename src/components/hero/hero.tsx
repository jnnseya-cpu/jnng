"use client";

import { motion, MotionConfig } from "motion/react";
import { GhostButtonLink, GoldButtonLink, TextLink } from "@/components/ui/buttons";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";

/**
 * Editorial hero: paper ground, a serif masthead set like a prospectus cover.
 * Structure, not spectacle — a top rule with the dateline eyebrow, a large
 * serif headline, and a hairline-ruled index of positioning statements. The
 * opening fades stay under ~1s and collapse under prefers-reduced-motion.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.2, 0.6, 0.2, 1] as const },
  });

  const words = dict.hero.headline.split(" ");
  const emphasisFrom = Math.max(0, words.length - 2);

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero-canvas relative flex min-h-[92svh] flex-col justify-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          {/* Dateline rule */}
          <motion.div {...fadeUp(0.05)} className="flex items-center gap-4">
            <span className="font-mono-label text-[0.62rem] text-gold sm:text-xs">{dict.hero.eyebrow}</span>
            <span className="hidden h-px flex-1 bg-[var(--rule)] sm:block" />
          </motion.div>

          <motion.h1
            {...fadeUp(0.18)}
            className="font-display mt-10 max-w-5xl text-[2.9rem] font-semibold leading-[1.03] text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            {words.map((word, i) => (
              <span key={i} className={i >= emphasisFrom ? "italic text-gold" : undefined}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.42)} className="mt-8 max-w-2xl text-lg leading-relaxed t-soft">
            {dict.hero.sub}
          </motion.p>

          <motion.div {...fadeUp(0.58)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GoldButtonLink href={localePath(locale, "/platforms")}>{dict.common.explorePlatforms}</GoldButtonLink>
            <GhostButtonLink href={localePath(locale, "/contact")}>{dict.common.partnerCta}</GhostButtonLink>
            <TextLink href={localePath(locale, "/about")}>{dict.common.discoverVision}</TextLink>
          </motion.div>

          <motion.ul
            {...fadeUp(0.8)}
            className="mt-16 grid max-w-4xl grid-cols-2 border-t border-[var(--rule)] sm:grid-cols-4"
            aria-label={dict.hero.indicators.join(", ")}
          >
            {dict.hero.indicators.map((item, i) => (
              <li
                key={item}
                className={`py-4 font-mono-label text-[0.6rem] leading-relaxed text-ink/70 sm:text-[0.62rem] ${
                  i > 0 ? "sm:border-l sm:border-[var(--rule)] sm:pl-5" : ""
                }`}
              >
                <span className="mr-2 text-gold">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <p aria-hidden className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-label text-[0.58rem] t-soft">
          {dict.hero.scrollHint} ↓
        </p>
      </section>
    </MotionConfig>
  );
}
