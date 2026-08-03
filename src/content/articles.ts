import type { Article } from "@/types/content";

/**
 * Insights articles — the SEO content layer.
 *
 * AUTOPILOT RAIL: this file is the drop-zone for AI-generated content.
 * Add one Article object (e.g. produced by MarketWar OS or any agent
 * pipeline) and the site automatically generates the article page in both
 * languages, auto-links every platform mention to its profile, adds the URL
 * to sitemap.xml and the RSS feed, and renders Article structured data.
 * Nothing else to wire.
 *
 * Editorial rules: no invented statistics; platform names written exactly
 * as in platforms.ts so the auto-linker matches them.
 */
export const articles: Article[] = [
  {
    slug: "next-billion-users",
    date: "2026-07-28",
    category: { en: "Thesis", fr: "Thèse" },
    title: {
      en: "The next billion users won't run software built for Silicon Valley",
      fr: "Le prochain milliard d'utilisateurs ne fera pas tourner des logiciels conçus pour la Silicon Valley",
    },
    excerpt: {
      en: "WhatsApp, mobile money, intermittent bandwidth and five national languages: the operating conditions of the next billion users — and why we build AI-native operating systems for exactly that world.",
      fr: "WhatsApp, mobile money, bande passante intermittente et cinq langues nationales : les conditions d'exploitation du prochain milliard d'utilisateurs — et pourquoi nous construisons des systèmes d'exploitation natifs IA précisément pour ce monde.",
    },
    body: {
      en: [
        "Every assumption baked into Western software fails somewhere on the road between London and Kinshasa. The app store assumes a data plan. The checkout assumes a debit card. The interface assumes literacy in a colonial language. The pricing assumes a salaried subscriber. None of these assumptions survive contact with the markets where the next billion users actually live.",
        "Groupe Nseya builds for the conditions that exist, not the conditions incumbents wish existed. Tunakula CD proved that food commerce works in Kinshasa when it is built around the city's real constraints — and NZELA-OS, its next generation, moves the entire experience inside WhatsApp, because WhatsApp is the app store of the Congolese consumer. KODA verifies mobile money payments for merchants whose current confirmation technology is a forwarded screenshot. Congo Voice AI removes the deepest barrier of all: it answers in Lingala, Swahili, Kikongo and Tshiluba, with no text, no app and no literacy prerequisite.",
        "This is not charity engineering. These are commercial systems aimed at the largest underserved demand pools on earth. The diaspora corridors that 3JN Travel serves are priced like captive markets precisely because demand is enormous and inelastic. The informal merchants KODA serves process staggering volumes of mobile money with zero tooling. The students StudYear serves sit the exams that decide lives in systems with the worst teacher-to-student ratios in the world.",
        "The moat is that Silicon Valley cannot follow without starting over. A platform architected around app-store distribution, card payments and English-language interfaces cannot retrofit WhatsApp-native ordering, mobile money settlement and five-language voice interaction. We did not inherit those constraints — we started from them.",
        "One group. Multiple industries. One standard of execution — and one market thesis: build where the incumbents' assumptions do not hold.",
      ],
      fr: [
        "Chaque hypothèse inscrite dans le logiciel occidental échoue quelque part sur la route entre Londres et Kinshasa. L'app store suppose un forfait data. Le paiement suppose une carte bancaire. L'interface suppose l'alphabétisation dans une langue coloniale. La tarification suppose un abonné salarié. Aucune de ces hypothèses ne survit au contact des marchés où vit réellement le prochain milliard d'utilisateurs.",
        "Le Groupe Nseya construit pour les conditions qui existent, pas pour celles que les acteurs en place voudraient voir exister. Tunakula CD a prouvé que le commerce alimentaire fonctionne à Kinshasa quand il est construit autour des vraies contraintes de la ville — et NZELA-OS, sa nouvelle génération, déplace toute l'expérience dans WhatsApp, parce que WhatsApp est l'app store du consommateur congolais. KODA vérifie les paiements mobile money pour des commerçants dont la technologie de confirmation actuelle est une capture d'écran transférée. Congo Voice AI supprime la barrière la plus profonde : il répond en lingala, swahili, kikongo et tshiluba, sans texte, sans application et sans prérequis de lecture.",
        "Ce n'est pas de l'ingénierie caritative. Ce sont des systèmes commerciaux visant les plus grands gisements de demande mal servie au monde. Les corridors de la diaspora que sert 3JN Travel sont tarifés comme des marchés captifs précisément parce que la demande y est énorme et inélastique. Les commerçants informels que sert KODA traitent des volumes considérables de mobile money sans aucun outil. Les élèves que sert StudYear passent les examens qui décident des vies, dans des systèmes aux pires ratios enseignants-élèves du monde.",
        "La barrière, c'est que la Silicon Valley ne peut pas suivre sans tout recommencer. Une plateforme architecturée autour de la distribution par app store, des paiements par carte et des interfaces en anglais ne peut pas se doter après coup de la commande native WhatsApp, du règlement en mobile money et de l'interaction vocale en cinq langues. Nous n'avons pas hérité de ces contraintes — nous sommes partis d'elles.",
        "Un groupe. Plusieurs industries. Un standard d'exécution — et une seule thèse de marché : construire là où les hypothèses des acteurs en place ne tiennent pas.",
      ],
    },
    keywords: [
      "African technology group", "emerging markets software", "mobile money", "WhatsApp commerce",
      "DRC technology", "Kinshasa startups", "AI operating systems", "digital inclusion Africa",
    ],
    relatedPlatformSlugs: ["nzela-os", "koda", "congo-voice-ai", "3jn-travel", "studyear"],
    author: "founder",
  },
  {
    slug: "one-shared-spine",
    date: "2026-07-21",
    category: { en: "Strategy", fr: "Stratégie" },
    title: {
      en: "One rail, one meter, one factory: why 39 ventures share a single spine",
      fr: "Un rail, un compteur, une usine : pourquoi 39 ventures partagent une seule colonne vertébrale",
    },
    excerpt: {
      en: "We are not a fund with a portfolio. We are a factory with an output — and the factory's secret is that every venture rides the same payment rail, the same billing meter and the same agent architecture.",
      fr: "Nous ne sommes pas un fonds avec un portefeuille. Nous sommes une usine avec une production — et le secret de l'usine, c'est que chaque venture roule sur le même rail de paiement, le même compteur de facturation et la même architecture d'agents.",
    },
    body: {
      en: [
        "A holding company owns assets. A venture studio starts companies. Groupe Nseya does something structurally different: it operates a factory whose output is production-ready platforms, and the factory's economics come from three shared components that no individual venture has to rebuild.",
        "The rail: BitriPay. Every venture in the portfolio that touches money — 3JN Travel bookings, Tunakula CD orders, TicketRoyality gates, VIBR creator payouts, AlphaAfrican Wealth allocations — settles through one compliance-first payment infrastructure built for DRC mobile money and the London–Kinshasa corridor. Each launch compounds transaction volume on a rail the group owns. Competitors integrate someone else's rail and pay rent on it forever.",
        "The meter: ACU billing. Every AI-native product in the portfolio monetises the same way — revenue scales with intelligence consumed, not seats occupied. VERYX, StudYear, MarketWar OS, LegAI and JESSIE-OS never had to invent a pricing model; they inherited one. Land small, expand automatically.",
        "The factory: a shared agent architecture and master specification framework. A new venture reaches production specification in weeks rather than quarters, because the blueprint, the agent registry and the event-sourced backbone already exist. This is why the portfolio can credibly hold ventures as different as Scan & Go RDC, Movie Empire OS and TradeNerve AI: the marginal cost of the next blueprint is close to zero.",
        "And one distribution engine ties it together: Nseya X-Execute puts the entire ecosystem in front of a national television audience, with editorial integrity intact — the most credible customer-acquisition channel a portfolio can own.",
        "This is why the answer to 'why thirty-nine ventures?' is not ambition. It is arithmetic.",
      ],
      fr: [
        "Une holding possède des actifs. Un studio de ventures crée des entreprises. Le Groupe Nseya fait quelque chose de structurellement différent : il exploite une usine dont la production est constituée de plateformes prêtes pour la production, et l'économie de l'usine repose sur trois composants partagés qu'aucune venture n'a à reconstruire.",
        "Le rail : BitriPay. Chaque venture du portefeuille qui touche l'argent — réservations 3JN Travel, commandes Tunakula CD, entrées TicketRoyality, paiements créateurs VIBR, allocations AlphaAfrican Wealth — règle via une seule infrastructure de paiement conçue conformité d'abord pour le mobile money de la RDC et le corridor Londres–Kinshasa. Chaque lancement fait croître le volume sur un rail que le groupe possède. Les concurrents intègrent le rail d'un autre et lui paient un loyer pour toujours.",
        "Le compteur : la facturation ACU. Chaque produit natif IA du portefeuille se monétise de la même façon — le revenu croît avec l'intelligence consommée, pas avec les sièges occupés. VERYX, StudYear, MarketWar OS, LegAI et JESSIE-OS n'ont jamais eu à inventer un modèle de prix ; ils en ont hérité un. Entrer petit, s'étendre automatiquement.",
        "L'usine : une architecture d'agents partagée et un cadre de spécification maître. Une nouvelle venture atteint la spécification de production en semaines plutôt qu'en trimestres, parce que le plan, le registre d'agents et l'ossature event-sourced existent déjà. C'est pourquoi le portefeuille peut crédiblement porter des ventures aussi différentes que Scan & Go RDC, Movie Empire OS et TradeNerve AI : le coût marginal du plan suivant est proche de zéro.",
        "Et un moteur de distribution relie le tout : Nseya X-Execute place l'écosystème entier devant une audience de télévision nationale, avec une intégrité éditoriale intacte — le canal d'acquisition de clients le plus crédible qu'un portefeuille puisse posséder.",
        "Voilà pourquoi la réponse à « pourquoi trente-neuf ventures ? » n'est pas l'ambition. C'est l'arithmétique.",
      ],
    },
    keywords: [
      "venture studio Africa", "payment infrastructure", "BitriPay", "AI billing", "venture factory",
      "pan-African technology group", "startup portfolio strategy", "Groupe Nseya",
    ],
    relatedPlatformSlugs: ["bitripay", "veryx", "marketwar", "nseya-x-execute", "3jn-fund"],
    author: "group",
  },
  {
    slug: "governance-is-the-product",
    date: "2026-07-14",
    category: { en: "Enterprise", fr: "Entreprise" },
    title: {
      en: "Governance is the product: what modern work software forgot",
      fr: "La gouvernance est le produit : ce que le logiciel de travail moderne a oublié",
    },
    excerpt: {
      en: "Coordination tools answer 'what are we doing?'. Almost none can answer 'who decided, when, and on whose authority?' — the only question that matters when a ministry, a bank or a court asks it.",
      fr: "Les outils de coordination répondent à « que faisons-nous ? ». Presque aucun ne peut répondre à « qui a décidé, quand, et sous quelle autorité ? » — la seule question qui compte quand un ministère, une banque ou un tribunal la pose.",
    },
    body: {
      en: [
        "The modern work-management category sells coordination: boards, timelines, dashboards, comment threads. It is genuinely useful — right up to the moment an organisation needs to prove something. When an enterprise or a ministry must demonstrate who decided what, when, and on whose authority, a comment thread is not evidence. It is an apology.",
        "VERYX was architected from the first line of code around a different premise: the audit trail is the substrate, not a feature. Every action is an immutable event. Every decision carries provenance. Every AI agent operates inside a permissions envelope that is auditable by design. This is what event-sourced architecture buys you — and it is architecturally expensive to retrofit, which is precisely the point. Incumbents built on mutable state cannot follow without a rewrite.",
        "The same philosophy runs through the portfolio wherever trust is the product. AxionOS makes trust automatic in UK construction: verified identity, milestone escrow, and reputation earned from completed jobs rather than purchased advertising. TicketRoyality makes every ticket provable at the gate. KODA makes every mobile money payment verifiable in seconds. BitriPay keeps a double-entry ledger at its core because in payments, provenance is not a differentiator — it is the licence to operate.",
        "Sovereign and institutional clients buy this way. Governments need provenance more than they need prettier dashboards, and they buy in multi-year cycles. Win the ministry, and you own the ecosystem beneath it.",
        "Software that remembers everything and forgets nothing is not a slogan. It is a procurement criterion — and very few vendors on earth can meet it.",
      ],
      fr: [
        "La catégorie moderne de la gestion du travail vend de la coordination : tableaux, chronologies, dashboards, fils de commentaires. C'est réellement utile — jusqu'au moment où une organisation doit prouver quelque chose. Quand une entreprise ou un ministère doit démontrer qui a décidé quoi, quand, et sous quelle autorité, un fil de commentaires n'est pas une preuve. C'est une excuse.",
        "VERYX a été architecturé dès la première ligne de code autour d'une autre prémisse : la piste d'audit est le socle, pas une fonctionnalité. Chaque action est un événement immuable. Chaque décision porte sa provenance. Chaque agent IA opère dans une enveloppe de permissions auditable par conception. C'est ce que l'architecture event-sourced vous achète — et elle est architecturalement coûteuse à rattraper, ce qui est précisément le but. Les acteurs en place, bâtis sur un état mutable, ne peuvent pas suivre sans réécrire.",
        "La même philosophie traverse le portefeuille partout où la confiance est le produit. AxionOS rend la confiance automatique dans la construction britannique : identité vérifiée, séquestre par jalons, et réputation gagnée sur des chantiers achevés plutôt qu'achetée en publicité. TicketRoyality rend chaque billet prouvable à l'entrée. KODA rend chaque paiement mobile money vérifiable en secondes. BitriPay garde un grand livre en partie double en son cœur parce que dans les paiements, la provenance n'est pas un différenciateur — c'est la licence d'exploitation.",
        "Les clients souverains et institutionnels achètent ainsi. Les gouvernements ont besoin de provenance plus que de dashboards plus jolis, et ils achètent en cycles pluriannuels. Gagnez le ministère, et vous possédez l'écosystème en dessous.",
        "Un logiciel qui se souvient de tout et n'oublie rien n'est pas un slogan. C'est un critère d'appel d'offres — et très peu de fournisseurs au monde peuvent y répondre.",
      ],
    },
    keywords: [
      "enterprise governance software", "event sourcing", "audit trail", "government technology",
      "VERYX", "project management OS", "construction escrow", "payment verification",
    ],
    relatedPlatformSlugs: ["veryx", "axionos", "ticketroyality", "koda", "bitripay"],
    author: "group",
  },
  {
    slug: "diaspora-corridor-economy",
    date: "2026-07-07",
    category: { en: "Markets", fr: "Marchés" },
    title: {
      en: "The corridor economy: why the London–Kinshasa route is a technology market",
      fr: "L'économie du corridor : pourquoi la route Londres–Kinshasa est un marché technologique",
    },
    excerpt: {
      en: "Money, travel, meals and wealth flow along diaspora corridors every day — through channels that punish the people using them. We build the infrastructure those corridors deserve.",
      fr: "L'argent, les voyages, les repas et le patrimoine circulent chaque jour le long des corridors de la diaspora — par des canaux qui punissent ceux qui les utilisent. Nous construisons l'infrastructure que ces corridors méritent.",
    },
    body: {
      en: [
        "Between the United Kingdom and the Democratic Republic of Congo runs one of the most emotionally loaded economic corridors in the world. Families book flights for weddings and funerals at fares that spike without warning. Remittances leak value at every hop. Savings sit in accounts that private banks never bothered to design for. The corridor is enormous, permanent — and served almost entirely by infrastructure built for someone else.",
        "Groupe Nseya treats the corridor as a single, connected market. 3JN Travel attacks the flight problem with a seat-holding model that secures inventory months ahead without upfront capital — margin expansion and price control on a route where demand is inelastic and repeat behaviour is near-guaranteed. BitriPay attacks the money problem: a compliance-first rail purpose-built for DRC mobile money and the London–Kinshasa corridor, engineered to central-bank standard from day one.",
        "The corridor is also a product-distribution channel. NZELA-OS turns a remittance into a meal delivered to a mother in Kinshasa, ordered over WhatsApp from Birmingham. AlphaAfrican Wealth turns corridor income into portfolios, cross-border allocation and long-horizon planning for the first generation with wealth to manage. The 3JN Vendor Partner Programme turns diaspora sellers into a travel-distribution network.",
        "Each of these ventures strengthens the others. The traveller becomes a remitter, the remitter becomes an investor, the investor books next year's flights — and every transaction settles on rails the group owns. That is what it means to build corridor infrastructure rather than corridor apps.",
        "Underserved does not mean small. It means unclaimed.",
      ],
      fr: [
        "Entre le Royaume-Uni et la République démocratique du Congo court l'un des corridors économiques les plus chargés d'émotion au monde. Des familles réservent des vols pour des mariages et des funérailles à des tarifs qui flambent sans préavis. Les transferts perdent de la valeur à chaque étape. L'épargne dort dans des comptes que les banques privées n'ont jamais pris la peine de concevoir pour elle. Le corridor est énorme, permanent — et servi presque entièrement par une infrastructure construite pour quelqu'un d'autre.",
        "Le Groupe Nseya traite le corridor comme un marché unique et connecté. 3JN Travel attaque le problème des vols avec un modèle de réservation de sièges qui sécurise l'inventaire des mois à l'avance sans capital initial — expansion des marges et contrôle des prix sur une route où la demande est inélastique et le comportement répété quasi garanti. BitriPay attaque le problème de l'argent : un rail conçu conformité d'abord pour le mobile money de la RDC et le corridor Londres–Kinshasa, bâti au standard banque centrale dès le premier jour.",
        "Le corridor est aussi un canal de distribution de produits. NZELA-OS transforme un transfert en repas livré à une mère à Kinshasa, commandé sur WhatsApp depuis Birmingham. AlphaAfrican Wealth transforme les revenus du corridor en portefeuilles, en allocation transfrontalière et en planification à long terme pour la première génération qui a un patrimoine à gérer. Le programme 3JN Vendor Partner transforme les vendeurs de la diaspora en réseau de distribution du voyage.",
        "Chacune de ces ventures renforce les autres. Le voyageur devient expéditeur de fonds, l'expéditeur devient investisseur, l'investisseur réserve les vols de l'année suivante — et chaque transaction se règle sur des rails que le groupe possède. Voilà ce que signifie construire l'infrastructure du corridor plutôt que des applications du corridor.",
        "Mal servi ne veut pas dire petit. Cela veut dire non réclamé.",
      ],
    },
    keywords: [
      "diaspora remittances", "London Kinshasa flights", "Africa fintech corridor", "diaspora travel",
      "mobile money DRC", "African diaspora investment", "3JN Travel", "remittance infrastructure",
    ],
    relatedPlatformSlugs: ["3jn-travel", "bitripay", "nzela-os", "alphaafrican-wealth", "3jn-vendor-partners"],
    author: "founder",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
