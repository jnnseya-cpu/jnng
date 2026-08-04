import type { GrowthToolId, Localized } from "@/types/content";

/**
 * AI Growth Engine — the catalogue of built-in AI tools available inside
 * platform dashboards. Which tools a platform carries is set per record in
 * platforms.ts via `growthTools` (depending on the platform).
 */
export type GrowthTool = {
  id: GrowthToolId;
  name: Localized;
  description: Localized;
};

export const growthTools: GrowthTool[] = [
  {
    id: "social-post",
    name: { en: "AI social media post generator", fr: "Générateur IA de publications sociales" },
    description: {
      en: "On-brand posts for every channel, generated in seconds.",
      fr: "Des publications à votre image pour chaque canal, générées en quelques secondes.",
    },
  },
  {
    id: "travel-advert",
    name: { en: "AI travel advert creator", fr: "Créateur IA de publicités voyage" },
    description: {
      en: "Route, fare and seasonal adverts composed automatically from live inventory.",
      fr: "Des publicités de routes, tarifs et saisons composées automatiquement depuis l'inventaire.",
    },
  },
  {
    id: "email-campaign",
    name: { en: "AI email campaign generator", fr: "Générateur IA de campagnes email" },
    description: {
      en: "Full campaigns — subject lines, sequences, follow-ups — written and scheduled.",
      fr: "Des campagnes complètes — objets, séquences, relances — rédigées et programmées.",
    },
  },
  {
    id: "landing-page",
    name: { en: "AI landing page builder", fr: "Constructeur IA de pages d'atterrissage" },
    description: {
      en: "Conversion-ready landing pages assembled from a brief, not a design team.",
      fr: "Des pages prêtes à convertir, assemblées à partir d'un brief, pas d'une équipe design.",
    },
  },
  {
    id: "hashtag",
    name: { en: "AI hashtag generator", fr: "Générateur IA de hashtags" },
    description: {
      en: "Reach-optimised tags matched to your content, market and language.",
      fr: "Des tags optimisés pour la portée, adaptés à votre contenu, votre marché et votre langue.",
    },
  },
  {
    id: "video-script",
    name: { en: "AI video script generator", fr: "Générateur IA de scripts vidéo" },
    description: {
      en: "Hook-first scripts for reels, ads and explainers, timed to the second.",
      fr: "Des scripts accrocheurs pour reels, publicités et explainers, minutés à la seconde.",
    },
  },
  {
    id: "performance",
    name: { en: "AI performance recommendations", fr: "Recommandations IA de performance" },
    description: {
      en: "What to change next, ranked by expected revenue impact.",
      fr: "Quoi changer ensuite, classé par impact attendu sur le revenu.",
    },
  },
  {
    id: "audience",
    name: { en: "AI audience optimisation", fr: "Optimisation IA de l'audience" },
    description: {
      en: "Segments, targeting and creative matched to the people who actually convert.",
      fr: "Segments, ciblage et créations alignés sur les personnes qui convertissent vraiment.",
    },
  },
  {
    id: "analytics",
    name: { en: "AI campaign analytics", fr: "Analytique IA des campagnes" },
    description: {
      en: "Every channel in one view, with the story behind the numbers explained.",
      fr: "Tous les canaux en une seule vue, avec l'histoire derrière les chiffres expliquée.",
    },
  },
  {
    id: "best-time",
    name: { en: "AI best posting time recommendations", fr: "Recommandations IA des meilleurs horaires" },
    description: {
      en: "Publish when your audience is actually awake, per market and per channel.",
      fr: "Publiez quand votre audience est réellement présente, par marché et par canal.",
    },
  },
];

export function getGrowthTool(id: GrowthToolId): GrowthTool | undefined {
  return growthTools.find((t) => t.id === id);
}
