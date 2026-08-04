import {
  Share2,
  Plane,
  Mail,
  LayoutTemplate,
  Hash,
  Clapperboard,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  ArrowUpRight,
  Gauge,
} from "lucide-react";
import type { GrowthToolId, Locale, Platform } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";
import { getGrowthTool } from "@/content/growth-tools";
import { localePath } from "@/lib/i18n";
import { GoldButtonLink } from "@/components/ui/buttons";

const icons: Record<GrowthToolId, typeof Share2> = {
  "social-post": Share2,
  "travel-advert": Plane,
  "email-campaign": Mail,
  "landing-page": LayoutTemplate,
  hashtag: Hash,
  "video-script": Clapperboard,
  performance: TrendingUp,
  audience: Users,
  analytics: BarChart3,
  "best-time": Clock,
};

/**
 * AI Growth Engine — the built-in AI marketing tools a platform ships inside
 * its partner dashboard. Rendered only for platforms that declare
 * `growthTools` (depending on the platform).
 */
export function GrowthEngine({
  platform,
  locale,
  dict,
}: {
  platform: Platform;
  locale: Locale;
  dict: Dictionary;
}) {
  if (!platform.growthTools?.length) return null;
  const tools = platform.growthTools
    .map(getGrowthTool)
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const live = platform.status === "live" || platform.status === "launching";
  const external = live && platform.externalLinkEnabled && platform.website;

  return (
    <section className="surface-midnight mt-20 rounded-3xl p-8 sm:p-12">
      <p className="font-mono-label text-xs text-gold">{dict.platformDetail.growthLabel}</p>
      <h2 className="font-display mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
        {dict.platformDetail.growthHeading}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
        {dict.platformDetail.growthIntro.replace("{name}", platform.name)}
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = icons[tool.id];
          return (
            <li key={tool.id} className="card-glass flex items-start gap-4 rounded-2xl p-5">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10"
              >
                <Icon className="h-5 w-5 text-gold-bright" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-paper">{tool.name[locale]}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">{tool.description[locale]}</span>
              </span>
            </li>
          );
        })}
      </ul>

      {/* ACU policy — every AI action is metered and gated, no exceptions. */}
      <div className="mt-8 flex items-start gap-4 rounded-2xl border border-gold/25 bg-gold/[0.05] p-5">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold/15"
        >
          <Gauge className="h-5 w-5 text-gold-bright" />
        </span>
        <p className="text-sm leading-relaxed text-paper/90">
          <span className="font-mono-label mr-2 text-[0.62rem] text-gold">{dict.platformDetail.acuLabel}</span>
          {dict.platformDetail.acuNote}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        {external ? (
          <a
            href={platform.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-obsidian"
          >
            {dict.platformDetail.growthCta.replace("{name}", platform.name)}
            <ArrowUpRight aria-hidden className="h-4 w-4" />
            <span className="sr-only"> ({dict.common.externalLinkNote})</span>
          </a>
        ) : (
          <GoldButtonLink href={localePath(locale, "/contact")}>{dict.common.registerInterest}</GoldButtonLink>
        )}
      </div>
    </section>
  );
}
