"use client";

import { motion, MotionConfig } from "motion/react";
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
  // NOTE: never branch the rendered markup on useReducedMotion here — the
  // server can't know the preference, and mismatched markup causes a
  // hydration error. MotionConfig reducedMotion="user" strips the transform
  // animations for reduced-motion users while keeping markup identical.
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.2, 0.6, 0.2, 1] as const },
  });

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero-canvas relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
        <div aria-hidden className="city-lights absolute inset-0" />
        <div aria-hidden className="network-grid absolute inset-0" />

        {/* Illuminated data corridors — Kinshasa reaching London, Dubai, the world */}
        <svg
          aria-hidden
          className="absolute inset-x-0 top-0 h-[72%] w-full opacity-70"
          viewBox="0 0 1440 560"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
        >
          <path className="data-arc" d="M 260 520 C 480 180, 900 140, 1240 300" stroke="#C9A55C" strokeWidth="1.1" strokeOpacity="0.5" />
          <path className="data-arc-slow" d="M 260 520 C 420 300, 760 240, 1050 210" stroke="#4DA3FF" strokeWidth="1" strokeOpacity="0.45" />
          <path className="data-arc" d="M 260 520 C 340 380, 520 330, 720 320" stroke="#007FFF" strokeWidth="0.9" strokeOpacity="0.35" />
          <path className="data-arc-slow" d="M 1240 300 C 1000 420, 640 470, 260 520" stroke="#E5C475" strokeWidth="0.8" strokeOpacity="0.3" />
          {[
            [260, 520, "#E5C475", 3.2],
            [1240, 300, "#4DA3FF", 2.4],
            [1050, 210, "#C9A55C", 2],
            [720, 320, "#007FFF", 1.8],
          ].map(([x, y, c, r], i) => (
            <g key={i}>
              <circle cx={x as number} cy={y as number} r={(r as number) * 3} fill={c as string} opacity="0.12" />
              <circle cx={x as number} cy={y as number} r={r as number} fill={c as string} opacity="0.9" />
            </g>
          ))}
        </svg>

        {/* Kinshasa at dusk — skyline silhouette with lit windows */}
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[26%] w-full"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0 200 L0 150 L60 150 L60 120 L90 120 L90 145 L150 145 L150 95 L165 95 L165 80 L185 80 L185 95 L200 95 L200 140 L260 140 L260 110 L300 110 L300 155 L360 155 L360 125 L395 125 L395 88 L410 88 L410 70 L430 70 L430 88 L445 88 L445 130 L520 130 L520 150 L580 150 L580 105 L620 105 L620 140 L680 140 L680 60 L695 60 L695 45 L705 45 L705 60 L720 60 L720 135 L790 135 L790 150 L850 150 L850 100 L890 100 L890 130 L940 130 L940 145 L1000 145 L1000 92 L1015 92 L1015 75 L1035 75 L1035 92 L1050 92 L1050 140 L1120 140 L1120 155 L1180 155 L1180 115 L1220 115 L1220 145 L1290 145 L1290 125 L1340 125 L1340 150 L1400 150 L1400 160 L1440 160 L1440 200 Z"
            fill="#020409"
          />
          {[
            [72, 132], [78, 140], [170, 100], [176, 112], [274, 122], [370, 136], [418, 92], [424, 104],
            [594, 118], [688, 78], [694, 92], [700, 106], [862, 112], [1008, 100], [1024, 110],
            [1194, 126], [1300, 134], [1352, 138],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="3.5" height="3.5" fill={i % 3 === 0 ? "#E5C475" : i % 3 === 1 ? "#C9A55C" : "#4DA3FF"} opacity={i % 2 ? 0.75 : 0.5} />
          ))}
        </svg>

        <div aria-hidden className="vignette absolute inset-0" />
        <div aria-hidden className="film-grain pointer-events-none absolute inset-0" />

        {/* Gold light sweep — under reduced motion the scaleX animation is
            stripped by MotionConfig and the line simply fades in. */}
        <motion.div
          aria-hidden
          className="gold-line absolute left-0 right-0 top-[38%]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <motion.p {...fadeUp(0.25)} className="font-mono-label text-[0.65rem] text-gold sm:text-xs">
            {dict.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.45)}
            className="font-display mt-6 max-w-5xl text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] text-paper sm:text-6xl lg:text-7xl xl:text-8xl"
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
