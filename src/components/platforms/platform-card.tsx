import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale, Platform } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getSector } from "@/content/sectors";
import { Monogram } from "@/components/ui/monogram";
import { StatusBadge } from "@/components/ui/status-badge";

export function PlatformCard({
  platform,
  locale,
  dict,
}: {
  platform: Platform;
  locale: Locale;
  dict: Dictionary;
}) {
  const sector = getSector(platform.sector);
  const detailHref = localePath(locale, platform.internalPath);
  const external = platform.externalLinkEnabled && platform.website;

  return (
    <article
      className="card-glass card-glass-hover group relative flex h-full flex-col rounded-2xl p-6"
      style={{ ["--brand" as string]: platform.brandColour }}
    >
      <div className="flex items-start justify-between gap-4">
        <Monogram
          initials={platform.monogram}
          colour={platform.brandColour}
          label={platform.logoApproved ? platform.name : `${platform.name} — ${dict.common.logoAwaitingApproval}`}
        />
        <StatusBadge status={platform.status} dict={dict} />
      </div>

      <p className="font-mono-label mt-5 text-[0.62rem] text-muted">{platform.category[locale]}</p>
      <h3 className="font-display mt-1.5 text-xl font-semibold text-paper">
        {/* Stretched link — whole card leads to the internal profile. */}
        <Link href={detailHref} className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none">
          {platform.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium" style={{ color: platform.brandColour }}>
        {platform.tagline[locale]}
      </p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{platform.shortDescription[locale]}</p>

      <div className="mt-auto pt-5">
        {sector ? (
          <p className="text-xs text-paper/50">
            {sector.name[locale]} · {platform.regions.map((r) => dict.platformsPage.regions[r]).join(" · ")}
          </p>
        ) : null}
        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-4">
          {external ? (
            <a
              href={platform.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-gold-bright"
            >
              {platform.ctaLabel?.[locale] ?? dict.common.visitPlatform}
              <ArrowUpRight aria-hidden className="external-icon ml-1 h-4 w-4" />
              <span className="sr-only"> ({dict.common.externalLinkNote})</span>
            </a>
          ) : (
            <span className="text-xs italic text-muted/80">{dict.common.internalProfile}</span>
          )}
          <Link href={detailHref} className="inline-flex min-h-11 items-center text-sm text-paper/70 hover:text-paper">
            {dict.common.viewDetails} <span aria-hidden className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
