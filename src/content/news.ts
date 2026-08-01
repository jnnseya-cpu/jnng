import type { NewsItem } from "@/types/content";

/**
 * News and announcements. EDITORIAL PLACEHOLDERS — review titles and dates
 * against the group's actual publication calendar before launch.
 */
export const news: NewsItem[] = [
  {
    id: "portfolio-gateway",
    date: "2026-01-15",
    category: { en: "Group", fr: "Groupe" },
    title: {
      en: "Groupe Nseya unifies its venture portfolio under one digital gateway",
      fr: "Le Groupe Nseya unifie son portefeuille de ventures sous une seule porte d'entrée numérique",
    },
    excerpt: {
      en: "The group's live platforms across education, travel, entrepreneurship, construction and commerce are now presented through a single corporate ecosystem at groupejnn.com.",
      fr: "Les plateformes actives du groupe — éducation, voyage, entrepreneuriat, construction et commerce — sont désormais présentées via un écosystème corporatif unique sur groupejnn.com.",
    },
    platformSlug: "groupe-jnn",
  },
  {
    id: "nseya-x-execute-applications",
    date: "2025-11-20",
    category: { en: "Platform", fr: "Plateforme" },
    title: {
      en: "Nseya X-Execute prepares to open applications for high-potential Congolese ventures",
      fr: "Nseya X-Execute prépare l'ouverture des candidatures pour les ventures congolaises à fort potentiel",
    },
    excerpt: {
      en: "The technology-enabled selection and investment platform will identify, develop and fund entrepreneurs through structured execution.",
      fr: "La plateforme technologique de sélection et d'investissement identifiera, développera et financera des entrepreneurs grâce à une exécution structurée.",
    },
    platformSlug: "nseya-x-execute",
  },
  {
    id: "studyear-live",
    date: "2025-09-08",
    category: { en: "Platform", fr: "Plateforme" },
    title: {
      en: "StudYear joins the live portfolio as an AI academic operating system",
      fr: "StudYear rejoint le portefeuille actif en tant que système d'exploitation académique IA",
    },
    excerpt: {
      en: "StudYear connects students, parents, teachers, tutors, schools and public education programmes through one intelligent academic environment.",
      fr: "StudYear connecte élèves, parents, enseignants, tuteurs, écoles et programmes publics d'éducation dans un environnement académique intelligent unique.",
    },
    platformSlug: "studyear",
  },
  {
    id: "next-generation-pipeline",
    date: "2025-07-01",
    category: { en: "Pipeline", fr: "Pipeline" },
    title: {
      en: "The next generation: twelve ventures in development across payments, mobility, health, government and energy",
      fr: "La prochaine génération : douze ventures en développement dans les paiements, la mobilité, la santé, le gouvernement et l'énergie",
    },
    excerpt: {
      en: "From RakaPay and HEALTH360 RDC to Congo Voice AI and SNEL Link, the coming-soon pipeline targets high-impact sectors where execution unlocks significant economic value.",
      fr: "De RakaPay et HEALTH360 RDC à Congo Voice AI et SNEL Link, le pipeline cible des secteurs à fort impact où l'exécution débloque une valeur économique significative.",
    },
  },
];
