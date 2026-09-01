"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import type { Locale, Platform, PlatformStatus, RegionId, SectorId } from "@/types/content";
import type { Dictionary } from "@/lib/i18n";
import { sectors } from "@/content/sectors";
import { PlatformCard } from "@/components/platforms/platform-card";

type StatusFilter = "all" | Exclude<PlatformStatus, "internal">;

/**
 * Instant frontend filtering: status, sector, region and free-text search,
 * with URL query synchronisation (?status=live&sector=education&q=…).
 */
export function PlatformDirectory({
  platforms,
  locale,
  dict,
}: {
  platforms: Platform[];
  locale: Locale;
  dict: Dictionary;
}) {
  const router = useRouter();
  const params = useSearchParams();

  const [status, setStatus] = useState<StatusFilter>(() => {
    const s = params.get("status");
    return s === "live" || s === "launching" || s === "coming-soon" ? s : "all";
  });
  const [sector, setSector] = useState<string>(() => params.get("sector") ?? "all");
  const [region, setRegion] = useState<string>(() => params.get("region") ?? "all");
  const [query, setQuery] = useState<string>(() => params.get("q") ?? "");

  // Keep the URL shareable without triggering navigation loops.
  useEffect(() => {
    const next = new URLSearchParams();
    if (status !== "all") next.set("status", status);
    if (sector !== "all") next.set("sector", sector);
    if (region !== "all") next.set("region", region);
    if (query.trim()) next.set("q", query.trim());
    const qs = next.toString();
    router.replace(qs ? `?${qs}` : window.location.pathname, { scroll: false });
  }, [status, sector, region, query, router]);

  const usedSectors = useMemo(() => {
    const ids = new Set(platforms.flatMap((p) => [p.sector, ...(p.secondarySectors ?? [])]));
    return sectors.filter((s) => ids.has(s.id));
  }, [platforms]);

  const regionIds = useMemo(() => {
    const ids = new Set<RegionId>(platforms.flatMap((p) => p.regions));
    return (["uk", "drc", "africa", "europe", "middle-east", "global"] as RegionId[]).filter((r) => ids.has(r));
  }, [platforms]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return platforms.filter((p) => {
      if (status !== "all" && p.status !== status) return false;
      if (sector !== "all" && p.sector !== sector && !(p.secondarySectors ?? []).includes(sector as SectorId)) return false;
      if (region !== "all" && !p.regions.includes(region as RegionId)) return false;
      if (!q) return true;
      const sectorName = sectors.find((s) => s.id === p.sector)?.name[locale] ?? "";
      const haystack = [
        p.name,
        p.tagline[locale],
        p.shortDescription[locale],
        p.fullDescription[locale],
        p.category[locale],
        sectorName,
        p.website ?? "",
        ...p.audiences.map((a) => a[locale]),
        ...p.capabilities.map((c) => c[locale]),
        ...p.regions.map((r) => dict.platformsPage.regions[r]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [platforms, status, sector, region, query, locale, dict]);

  const hasFilters = status !== "all" || sector !== "all" || region !== "all" || query.trim() !== "";

  const statusOptions: { value: StatusFilter; label: string }[] = [
    { value: "all", label: dict.platformsPage.all },
    { value: "live", label: dict.status.live },
    { value: "launching", label: dict.status.launching },
    { value: "coming-soon", label: dict.status.comingSoon },
  ];

  const selectCls =
    "min-h-11 rounded-md border border-[color:var(--rule-strong)] bg-panel px-3 py-2 text-sm t-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  return (
    <div>
      <div className="card-glass rounded-2xl p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <label className="relative block">
            <span className="sr-only">{dict.platformsPage.searchLabel}</span>
            <Search aria-hidden className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 t-soft" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.platformsPage.searchPlaceholder}
              className="min-h-11 w-full rounded-md border border-[color:var(--rule-strong)] bg-panel py-2 pl-9 pr-3 text-sm text-ink placeholder:text-[color:var(--fg-faint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
          </label>
          <label>
            <span className="sr-only">{dict.platformsPage.filterSector}</span>
            <select value={sector} onChange={(e) => setSector(e.target.value)} className={selectCls}>
              <option value="all">
                {dict.platformsPage.filterSector}: {dict.platformsPage.all}
              </option>
              {usedSectors.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name[locale]}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">{dict.platformsPage.filterRegion}</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectCls}>
              <option value="all">
                {dict.platformsPage.filterRegion}: {dict.platformsPage.all}
              </option>
              {regionIds.map((r) => (
                <option key={r} value={r}>
                  {dict.platformsPage.regions[r]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div role="radiogroup" aria-label={dict.platformsPage.filterStatus} className="mt-3 flex flex-wrap gap-2">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={status === opt.value}
              onClick={() => setStatus(opt.value)}
              className={`min-h-11 rounded-full border px-4 py-2 font-mono-label text-[0.62rem] transition-colors ${
                status === opt.value
                  ? "border-gold bg-gold-bright text-obsidian"
                  : "border-[color:var(--rule)] t-soft hover:border-gold/50 hover:t-fg"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screen-reader announcement for filtered results */}
      <p aria-live="polite" className="mt-6 text-sm t-soft">
        {filtered.length === 1
          ? dict.platformsPage.resultCountOne
          : dict.platformsPage.resultCountMany.replace("{count}", String(filtered.length))}
        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              setStatus("all");
              setSector("all");
              setRegion("all");
              setQuery("");
            }}
            className="ml-4 min-h-11 text-gold underline-offset-4 hover:underline"
          >
            {dict.platformsPage.clearFilters}
          </button>
        ) : null}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center t-soft">{dict.platformsPage.noResults}</p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <PlatformCard platform={p} locale={locale} dict={dict} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
