import type { ImpactMetric } from "@/types/content";

/**
 * Impact metrics. ONLY metrics with `verified: true` are rendered publicly.
 * Do not publish invented revenue, user or investment numbers — add entries
 * here once figures are independently verified, with their source.
 */
export const impactMetrics: ImpactMetric[] = [
  // Example shape (kept unverified so it never renders):
  {
    value: "—",
    label: { en: "Awaiting verified figures", fr: "En attente de chiffres vérifiés" },
    verified: false,
  },
];

export const verifiedMetrics = impactMetrics.filter((m) => m.verified);
