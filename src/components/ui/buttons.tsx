import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200";

export function GoldButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${base} bg-gold text-obsidian hover:bg-gold-bright`}>
      {children}
    </Link>
  );
}

export function GhostButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} border border-paper/25 bg-paper/[0.03] text-paper hover:border-gold/60 hover:text-gold-bright`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-gold hover:text-gold-bright"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
