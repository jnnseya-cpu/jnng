import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/types/content";
import { platforms } from "@/content/platforms";
import { localePath } from "@/lib/i18n";

type Alias = { alias: string; slug: string; path: string };

/**
 * Platform-name aliases, longest first so "Nseya X-Execute" wins over "Nseya".
 * "JESSIE-OS (Jess Move)" yields both "JESSIE-OS" and "Jess Move";
 * "CIVIX-INTEL / GOV360" yields both names.
 */
const aliases: Alias[] = platforms
  .flatMap((p) => {
    const names = new Set<string>();
    const base = p.name.replace(/\s*\(([^)]+)\)\s*/, (_m, inner: string) => {
      names.add(inner.trim());
      return "";
    });
    base.split(" / ").forEach((n) => names.add(n.trim()));
    names.add(p.name);
    return [...names].filter(Boolean).map((alias) => ({ alias, slug: p.slug, path: p.internalPath }));
  })
  .sort((a, b) => b.alias.length - a.alias.length);

/**
 * Auto-link the first mention of each platform in an article body.
 * `linked` is shared across paragraphs so each platform links once per page
 * (Google treats the first anchor as canonical; repeat links add noise).
 */
export function linkifyParagraph(
  text: string,
  locale: Locale,
  linked: Set<string>,
  excludeSlug?: string,
): ReactNode[] {
  type Match = { start: number; end: number; alias: Alias };
  const matches: Match[] = [];

  for (const alias of aliases) {
    if (alias.slug === excludeSlug || linked.has(alias.slug)) continue;
    const idx = text.indexOf(alias.alias);
    if (idx === -1) continue;
    // Skip if overlapping an already-claimed range (longer aliases claimed first).
    if (matches.some((m) => idx < m.end && idx + alias.alias.length > m.start)) continue;
    matches.push({ start: idx, end: idx + alias.alias.length, alias });
    linked.add(alias.slug);
  }

  if (matches.length === 0) return [text];
  matches.sort((a, b) => a.start - b.start);

  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start));
    nodes.push(
      <Link
        key={`${m.alias.slug}-${m.start}`}
        href={localePath(locale, m.alias.path)}
        className="font-medium text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
      >
        {text.slice(m.start, m.end)}
      </Link>,
    );
    cursor = m.end;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
