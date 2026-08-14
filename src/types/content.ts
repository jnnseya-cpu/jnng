/**
 * CMS-ready content types for Groupe Nseya.
 *
 * Phase one stores content in typed TypeScript files under src/content.
 * The shapes below are deliberately flat and serialisable so they can be
 * migrated to Sanity, Contentful, Strapi, Payload or Directus later
 * without changing the components that consume them.
 */

export type Locale = "en" | "fr";

/** A string localised into every supported language. */
export type Localized = Record<Locale, string>;

/**
 * Status governance:
 *  - "live": publicly accessible and operational.
 *  - "launching": confirmed website with active launch activity, applications,
 *    waiting list or controlled rollout.
 *  - "coming-soon": in structured development, not yet publicly operational.
 *  - "internal": not ready for public promotion — never rendered publicly.
 */
export type PlatformStatus = "live" | "launching" | "coming-soon" | "internal";

export type SectorId =
  | "ai"
  | "education"
  | "travel"
  | "entrepreneurship"
  | "commerce"
  | "mobility"
  | "fintech"
  | "infrastructure"
  | "energy"
  | "government"
  | "health"
  | "employment"
  | "marketing"
  | "sustainability"
  | "property"
  | "gaming"
  | "sports"
  | "media";

export type RegionId = "uk" | "drc" | "africa" | "europe" | "middle-east" | "global";

export type GrowthToolId =
  | "social-post"
  | "travel-advert"
  | "email-campaign"
  | "landing-page"
  | "hashtag"
  | "video-script"
  | "performance"
  | "audience"
  | "analytics"
  | "best-time";

export type Platform = {
  id: string;
  slug: string;
  name: string;
  legalName?: string;
  tagline: Localized;
  shortDescription: Localized;
  fullDescription: Localized;
  /** Display label for the platform's category, e.g. "Travel Technology". */
  category: Localized;
  sector: SectorId;
  secondarySectors?: SectorId[];
  status: PlatformStatus;
  /** Confirmed public domain. Omitted while the dedicated domain awaits approval. */
  website?: string;
  internalPath: string;
  /** Temporary premium monogram until the approved logo is supplied. */
  logo: string;
  /** 1–3 characters rendered inside the monogram tile. */
  monogram: string;
  brandColour: string;
  regions: RegionId[];
  audiences: Localized[];
  capabilities: Localized[];
  /** Short card statement, e.g. "Less searching. Better journeys." */
  cardStatement?: Localized;
  /** Approved platform-specific CTA, e.g. "Order With Tunakula". */
  ctaLabel?: Localized;
  /** AI Growth Engine tools built into this platform's partner dashboard. */
  growthTools?: GrowthToolId[];
  externalLinkEnabled: boolean;
  featured: boolean;
  displayOrder: number;
  /** Governance: false while the asset register marks the logo as a temporary monogram. */
  logoApproved: boolean;
  /** Governance: only public records are rendered anywhere on the site. */
  public: boolean;
  lastReviewedAt: string; // ISO date of the last content review
  contentApproved: boolean;
  /** Governance: false while the permanent public domain awaits confirmation. */
  domainConfirmed?: boolean;
};

export type Sector = {
  id: SectorId;
  name: Localized;
  description: Localized;
};

export type Article = {
  slug: string;
  date: string; // ISO date
  category: Localized;
  title: Localized;
  excerpt: Localized;
  /** Body paragraphs. Platform names are auto-linked at render time. */
  body: { en: string[]; fr: string[] };
  /** SEO keywords for metadata. */
  keywords: string[];
  /** Platforms featured — rendered as related cards + used for cross-linking. */
  relatedPlatformSlugs: string[];
  author: "group" | "founder";
  /**
   * Short community summaries in national languages (Lingala, Swahili) for
   * Kinshasa-facing guides — unique-language content competitors don't write.
   * Draft quality: have native speakers review before heavy promotion.
   */
  communitySummaries?: { ln?: string; sw?: string };
};

export type NewsItem = {
  id: string;
  date: string; // ISO date
  category: Localized;
  title: Localized;
  excerpt: Localized;
  platformSlug?: string;
};

/**
 * Impact metrics. Only metrics with `verified: true` are ever rendered.
 * Do not publish invented revenue, user or investment numbers.
 */
export type ImpactMetric = {
  value: string;
  label: Localized;
  description?: Localized;
  source?: string;
  verified: boolean;
};
