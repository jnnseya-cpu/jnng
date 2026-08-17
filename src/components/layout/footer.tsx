import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = 2026;
  const groupLinks = [
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/founder"), label: dict.nav.founder },
    { href: localePath(locale, "/sectors"), label: dict.nav.sectors },
    { href: localePath(locale, "/impact"), label: dict.nav.impact },
    { href: localePath(locale, "/news"), label: dict.nav.news },
  ];
  const platformLinks = [
    { href: localePath(locale, "/platforms?status=live"), label: dict.footer.livePlatforms },
    { href: localePath(locale, "/platforms?status=launching"), label: dict.footer.launchingPlatforms },
    { href: localePath(locale, "/platforms?status=coming-soon"), label: dict.footer.comingSoon },
    { href: localePath(locale, "/contact"), label: dict.footer.partnershipOpportunities },
    { href: localePath(locale, "/contact"), label: dict.footer.submitOpportunity },
  ];
  const legalLinks = [
    { href: localePath(locale, "/privacy"), label: dict.footer.legal.privacy },
    { href: localePath(locale, "/cookies"), label: dict.footer.legal.cookies },
    { href: localePath(locale, "/terms"), label: dict.footer.legal.terms },
    { href: localePath(locale, "/accessibility"), label: dict.footer.legal.accessibility },
  ];

  return (
    <footer className="surface-midnight border-t border-paper/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-paper">
              GROUPE <span className="text-gold">NSEYA</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{dict.footer.statement}</p>
            <NewsletterSignup locale={locale} dict={dict} />
          </div>
          <nav aria-label={dict.footer.group}>
            <h2 className="font-mono-label text-xs text-gold">{dict.footer.group}</h2>
            <ul className="mt-4 space-y-2.5">
              {groupLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-paper/80 hover:text-gold-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={dict.footer.platforms}>
            <h2 className="font-mono-label text-xs text-gold">{dict.footer.platforms}</h2>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-paper/80 hover:text-gold-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-mono-label text-xs text-gold">{dict.footer.contact}</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-paper/80">
              <p>
                {site.address.street}
                <br />
                {site.address.district}
                <br />
                {site.address.city}, {site.address.country[locale]}
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-gold-bright">
                  {site.email}
                </a>
              </p>
              <p>
                <span className="text-muted">{dict.contact.ukPhone}: </span>
                <a href="tel:+447493216101" className="hover:text-gold-bright">
                  {site.phoneUK}
                </a>
              </p>
              <p>
                <span className="text-muted">{dict.contact.drcPhone}: </span>
                <a href="tel:+243818112309" className="hover:text-gold-bright">
                  {site.phoneDRC}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="gold-line mt-14" aria-hidden />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs text-muted hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted">{dict.footer.copyright.replace("{year}", String(year))}</p>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted/70">{dict.footer.relationshipLine}</p>
      </div>
    </footer>
  );
}
