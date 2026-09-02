import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { livePlatforms } from "@/content/platforms";

/**
 * Live-proof strip — the page's evidence, not its claims. Every live platform
 * with a real public site is linked directly to that site, so a sceptic can
 * verify in one click that these are working products. No invented numbers:
 * the count is derived from the live platforms that actually have a site.
 */
export function LiveProof({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = dict.liveProof;
  const shipped = livePlatforms.filter((v) => v.externalLinkEnabled && v.website);
  if (shipped.length === 0) return null;

  return (
    <section className="border-y border-[color:var(--rule)] bg-panel py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono-label text-xs text-gold">{p.label}</p>
        <h2 className="font-display t-fg mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">{p.heading}</h2>
        <p className="t-soft mt-3 max-w-2xl text-base leading-relaxed">
          {p.intro.replace("{count}", String(shipped.length))}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {shipped.map((v) => (
            <li key={v.id}>
              <a
                href={v.website as string}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--rule-strong)] bg-[color:var(--card-bg)] px-4 py-2 text-sm font-medium t-fg transition-colors hover:border-gold hover:text-gold"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-live" />
                {v.name}
                <ArrowUpRight aria-hidden className="external-icon h-3.5 w-3.5 t-faint group-hover:text-gold" />
                <span className="sr-only"> — {v.website?.replace(/^https?:\/\//, "")} ({dict.common.externalLinkNote})</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="t-faint mt-5 text-xs italic">{p.footnote}</p>
      </div>
    </section>
  );
}
