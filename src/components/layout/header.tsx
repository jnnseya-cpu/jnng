"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

type NavItem = { href: string; label: string };

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  const items: NavItem[] = [
    { href: localePath(locale), label: dict.nav.home },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/platforms"), label: dict.nav.platforms },
    { href: localePath(locale, "/sectors"), label: dict.nav.sectors },
    { href: localePath(locale, "/founder"), label: dict.nav.founder },
    { href: localePath(locale, "/impact"), label: dict.nav.impact },
    { href: localePath(locale, "/news"), label: dict.nav.news },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape + basic focus trap for the full-screen menu.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchHref = pathname?.replace(`/${locale}`, `/${otherLocale}`) ?? `/${otherLocale}`;

  const isActive = (href: string) =>
    href === localePath(locale) ? pathname === href : pathname?.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "header-glass" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href={localePath(locale)} className="flex items-center gap-3" aria-label="Groupe Nseya — home">
          <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden className="shrink-0">
            <rect width="64" height="64" rx="14" fill="#081421" />
            <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" fill="none" stroke="#C9A55C" strokeOpacity="0.6" />
            <text x="32" y="37" textAnchor="middle" dominantBaseline="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" fill="#C9A55C">N</text>
          </svg>
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-paper">
            GROUPE <span className="text-gold">NSEYA</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {items.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded px-3 py-2 text-sm transition-colors ${
                isActive(item.href) ? "text-gold-bright" : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <nav aria-label={dict.nav.languageLabel} className="font-mono-label flex items-center rounded-full border border-paper/15 p-0.5 text-[0.65rem]">
            {(["en", "fr"] as const).map((l) => (
              <Link
                key={l}
                href={l === locale ? pathname ?? localePath(locale) : switchHref}
                aria-current={l === locale ? "true" : undefined}
                className={`rounded-full px-2.5 py-1.5 ${l === locale ? "bg-gold text-obsidian" : "text-paper/70 hover:text-paper"}`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>
          <Link
            href={localePath(locale, "/contact")}
            className="hidden min-h-11 items-center rounded-md bg-gold px-4 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-bright lg:inline-flex"
          >
            {dict.nav.partner}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-paper/15 text-paper lg:hidden"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" ref={panelRef} className="h-[calc(100dvh-4rem)] overflow-y-auto bg-obsidian/98 px-6 pb-10 pt-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3.5 font-display text-xl font-medium ${
                  isActive(item.href) ? "text-gold-bright" : "text-paper hover:text-gold-bright"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="gold-line my-6" aria-hidden />
          <Link
            href={localePath(locale, "/contact")}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gold px-4 py-3 text-sm font-semibold text-obsidian"
          >
            {dict.nav.partner}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
