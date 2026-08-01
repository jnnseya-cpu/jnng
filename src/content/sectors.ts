import type { Sector } from "@/types/content";

/** Sector taxonomy — used for platform filtering and the sectors page panels. */
export const sectors: Sector[] = [
  {
    id: "ai",
    name: { en: "Technology & Artificial Intelligence", fr: "Technologie et intelligence artificielle" },
    description: {
      en: "AI-powered platforms built around practical use cases, controlled operating environments and measurable user value.",
      fr: "Des plateformes propulsées par l'IA, construites autour de cas d'usage concrets, d'environnements opérationnels maîtrisés et d'une valeur mesurable pour l'utilisateur.",
    },
  },
  {
    id: "education",
    name: { en: "Education & Human Development", fr: "Éducation et développement humain" },
    description: {
      en: "Systems that help learners, parents, schools, teachers and public institutions improve educational outcomes.",
      fr: "Des systèmes qui aident élèves, parents, écoles, enseignants et institutions publiques à améliorer les résultats éducatifs.",
    },
  },
  {
    id: "travel",
    name: { en: "Travel & Hospitality", fr: "Voyage et hôtellerie" },
    description: {
      en: "Digital journeys that simplify discovery, booking, distribution and travel-business participation.",
      fr: "Des parcours numériques qui simplifient la découverte, la réservation, la distribution et la participation au commerce du voyage.",
    },
  },
  {
    id: "entrepreneurship",
    name: { en: "Entrepreneurship & Investment", fr: "Entrepreneuriat et investissement" },
    description: {
      en: "Structured platforms that identify stronger ventures, improve execution and connect capital to credible opportunities.",
      fr: "Des plateformes structurées qui identifient les meilleures ventures, améliorent l'exécution et connectent le capital aux opportunités crédibles.",
    },
  },
  {
    id: "infrastructure",
    name: { en: "Infrastructure & Construction", fr: "Infrastructures et construction" },
    description: {
      en: "Programme-development capability grounded in major construction, energy and mission-critical infrastructure experience.",
      fr: "Une capacité de développement de programmes ancrée dans l'expérience des grands chantiers, de l'énergie et des infrastructures critiques.",
    },
  },
  {
    id: "energy",
    name: { en: "Energy & Sustainability", fr: "Énergie et durabilité" },
    description: {
      en: "Projects supporting power access, renewable generation, grid development, recycling and circular-economy growth.",
      fr: "Des projets soutenant l'accès à l'énergie, la production renouvelable, le développement des réseaux, le recyclage et la croissance de l'économie circulaire.",
    },
  },
  {
    id: "commerce",
    name: { en: "Commerce & Logistics", fr: "Commerce et logistique" },
    description: {
      en: "Marketplaces and operating systems connecting customers, merchants, delivery partners and service providers.",
      fr: "Des places de marché et systèmes d'exploitation connectant clients, commerçants, livreurs partenaires et prestataires de services.",
    },
  },
  {
    id: "fintech",
    name: { en: "Financial & Payment Technology", fr: "Technologie financière et de paiement" },
    description: {
      en: "Secure payment, transaction and revenue-collection systems designed for real operating environments.",
      fr: "Des systèmes sécurisés de paiement, de transaction et de collecte de revenus conçus pour des environnements opérationnels réels.",
    },
  },
  {
    id: "government",
    name: { en: "Government & Public Services", fr: "Gouvernement et services publics" },
    description: {
      en: "Digital systems that improve institutional visibility, service delivery, accountability and decision-making.",
      fr: "Des systèmes numériques qui améliorent la visibilité institutionnelle, la prestation de services, la redevabilité et la prise de décision.",
    },
  },
  {
    id: "health",
    name: { en: "Health & Social Impact", fr: "Santé et impact social" },
    description: {
      en: "Connected platforms designed to strengthen care coordination, access and public-health intelligence.",
      fr: "Des plateformes connectées conçues pour renforcer la coordination des soins, l'accès et l'intelligence de santé publique.",
    },
  },
  {
    id: "mobility",
    name: { en: "Mobility & Smart Cities", fr: "Mobilité et villes intelligentes" },
    description: {
      en: "Urban systems that keep people, vehicles and payments moving through the modern African city.",
      fr: "Des systèmes urbains qui font circuler les personnes, les véhicules et les paiements dans la ville africaine moderne.",
    },
  },
  {
    id: "employment",
    name: { en: "Employment & Talent", fr: "Emploi et talents" },
    description: {
      en: "Marketplaces connecting employers, qualified candidates and opportunity across borders.",
      fr: "Des places de marché connectant employeurs, candidats qualifiés et opportunités au-delà des frontières.",
    },
  },
  {
    id: "marketing",
    name: { en: "Marketing & Growth", fr: "Marketing et croissance" },
    description: {
      en: "Commercial systems that turn visibility, campaigns and brand into measurable revenue.",
      fr: "Des systèmes commerciaux qui transforment visibilité, campagnes et marque en revenus mesurables.",
    },
  },
  {
    id: "property",
    name: { en: "Property & Real Estate", fr: "Propriété et immobilier" },
    description: {
      en: "Property platforms connecting buyers, investors and residents with residential, commercial and luxury opportunities.",
      fr: "Des plateformes immobilières connectant acheteurs, investisseurs et résidents à des opportunités résidentielles, commerciales et de luxe.",
    },
  },
  {
    id: "gaming",
    name: { en: "Gaming & Digital Creation", fr: "Jeux et création numérique" },
    description: {
      en: "Intelligent production systems that turn creative ideas into structured, hosted and monetised digital products.",
      fr: "Des systèmes de production intelligents qui transforment les idées créatives en produits numériques structurés, hébergés et monétisés.",
    },
  },
  {
    id: "sports",
    name: { en: "Sports Commerce", fr: "Commerce sportif" },
    description: {
      en: "Value-driven commerce making quality sports equipment accessible to everyday athletes and communities.",
      fr: "Un commerce axé sur la valeur rendant l'équipement sportif de qualité accessible aux athlètes du quotidien et aux communautés.",
    },
  },
  {
    id: "sustainability",
    name: { en: "Circular Economy", fr: "Économie circulaire" },
    description: {
      en: "Ventures that transform waste and under-used resources into economic, environmental and industrial value.",
      fr: "Des ventures qui transforment les déchets et les ressources sous-utilisées en valeur économique, environnementale et industrielle.",
    },
  },
];

export function getSector(id: string) {
  return sectors.find((s) => s.id === id);
}
