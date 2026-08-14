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

// ——— Customer-intent guides (bottom-funnel acquisition content) ———
articles.push(
  {
    slug: "london-kinshasa-flights-guide",
    date: "2026-08-04",
    category: { en: "Guide", fr: "Guide" },
    title: {
      en: "London to Kinshasa flights: how diaspora families stop overpaying",
      fr: "Vols Londres–Kinshasa : comment les familles de la diaspora arrêtent de surpayer",
    },
    excerpt: {
      en: "Fares on the London–Kinshasa route spike without warning, and families booking for weddings, funerals and holidays pay the price. Here is how the route really works — and how to lock a seat months ahead without paying upfront.",
      fr: "Les tarifs sur la route Londres–Kinshasa flambent sans préavis, et les familles qui réservent pour des mariages, funérailles et vacances en paient le prix. Voici comment la route fonctionne vraiment — et comment bloquer un siège des mois à l'avance sans payer d'avance.",
    },
    body: {
      en: [
        "If you have ever booked a flight from London, Paris or Brussels to Kinshasa, you know the pattern: the fare you saw last month has doubled, the dates you need are 'almost full', and the agent quoting you cannot explain why. The corridor is priced like a captive market because, for most airlines and resellers, it is one — demand is emotional, dates are fixed by weddings, funerals and school holidays, and most passengers book late, in a hurry, at whatever price appears.",
        "The mechanics behind the spikes are simple: limited direct capacity, inventory held by consolidators, and peak seasons (June–August, December) when the entire diaspora flies at once. Booking six to nine months out routinely saves hundreds of pounds — but almost nobody can pay the full fare that far ahead, so families wait, and waiting is exactly what the pricing model punishes.",
        "This is the problem 3JN Travel was built to break. Its seat-holding model secures tickets and inventory months ahead — so availability and price are locked when you commit, not when you finally pay. Combined with instalment payments, it matches the way corridor families actually save for travel: a little each month, with certainty at the end, instead of a lump-sum panic purchase at the worst possible price.",
        "Practical checklist for the corridor: book the moment your dates are fixed, even provisionally; fly mid-week where possible; compare the total journey (a connection through Addis, Istanbul or Brussels often beats 'direct' pricing); and never leave December travel later than September. Above all, work with an operator that holds inventory rather than one that just forwards your enquiry to the same consolidators everyone else uses.",
        "The London–Kinshasa lifeline should not cost a month's salary in stress. Lock the seat, spread the payment, and fly on your own terms — explore 3JN Travel to see current corridor availability.",
      ],
      fr: [
        "Si vous avez déjà réservé un vol de Londres, Paris ou Bruxelles vers Kinshasa, vous connaissez le schéma : le tarif vu le mois dernier a doublé, vos dates sont « presque complètes », et l'agent qui vous fait le devis ne sait pas expliquer pourquoi. Le corridor est tarifé comme un marché captif parce que, pour la plupart des compagnies et revendeurs, c'en est un — la demande est émotionnelle, les dates sont fixées par les mariages, funérailles et vacances scolaires, et la plupart des passagers réservent tard, pressés, au prix affiché.",
        "La mécanique des flambées est simple : capacité directe limitée, inventaire détenu par des consolidateurs, et hautes saisons (juin–août, décembre) où toute la diaspora vole en même temps. Réserver six à neuf mois à l'avance économise couramment des centaines de livres — mais presque personne ne peut payer le billet complet si tôt, alors les familles attendent, et l'attente est exactement ce que le modèle de prix punit.",
        "C'est le problème que 3JN Travel a été construit pour casser. Son modèle de réservation de sièges sécurise billets et inventaire des mois à l'avance — disponibilité et prix sont verrouillés quand vous vous engagez, pas quand vous finissez de payer. Combiné aux paiements échelonnés, il correspond à la façon dont les familles du corridor épargnent réellement : un peu chaque mois, avec une certitude à la fin, au lieu d'un achat panique au pire prix possible.",
        "Check-list pratique pour le corridor : réservez dès que vos dates sont fixées, même provisoirement ; volez en milieu de semaine si possible ; comparez le trajet total (une correspondance via Addis, Istanbul ou Bruxelles bat souvent le prix du « direct ») ; et ne laissez jamais un voyage de décembre au-delà de septembre. Surtout, travaillez avec un opérateur qui détient l'inventaire plutôt qu'avec celui qui transmet votre demande aux mêmes consolidateurs que tout le monde.",
        "La ligne de vie Londres–Kinshasa ne devrait pas coûter un mois de salaire en stress. Verrouillez le siège, étalez le paiement, et voyagez à vos conditions — explorez 3JN Travel pour voir les disponibilités actuelles du corridor.",
      ],
    },
    keywords: [
      "London to Kinshasa flights", "cheap flights Kinshasa", "vol Londres Kinshasa", "vol Paris Kinshasa pas cher",
      "diaspora travel DRC", "book Kinshasa flight instalments", "Brussels Kinshasa flight",
    ],
    relatedPlatformSlugs: ["3jn-travel", "3jn-vendor-partners", "bitripay"],
    author: "group",
  },
  {
    slug: "verify-mobile-money-payment",
    date: "2026-08-06",
    category: { en: "Guide", fr: "Guide" },
    title: {
      en: "How to verify a mobile money payment before you hand over the goods",
      fr: "Comment vérifier un paiement mobile money avant de remettre la marchandise",
    },
    excerpt: {
      en: "Forwarded screenshots and fake SMS receipts cost African merchants real money every day. Here is how payment confirmation actually gets faked — and how to check a payment in seconds, whatever your size.",
      fr: "Captures d'écran transférées et faux reçus SMS coûtent chaque jour de l'argent réel aux commerçants africains. Voici comment la confirmation de paiement se falsifie réellement — et comment vérifier un paiement en quelques secondes, quelle que soit votre taille.",
    },
    body: {
      en: [
        "Every merchant who accepts mobile money knows the moment: the customer shows a screen, the queue is building, and you have two seconds to decide whether that payment confirmation is real. Fraudsters know it too. Edited screenshots, replayed SMS notifications, cancelled-before-completion transfers — the tricks are cheap, and the merchant absorbs the loss every time.",
        "The screenshot is not proof. Neither is the SMS, which can be spoofed or forwarded from an earlier, genuine transaction. The only proof is the operator's own ledger: did this amount, from this number, arrive in your account, now? Most small merchants have no way to ask that question quickly — so they squint at a phone and hope, and reconciliation at the end of the day becomes an act of faith.",
        "KODA exists to make that question instant. It verifies mobile money payments through three doors onto one engine: a Manual Console for the market trader (type the reference, get a real answer), WhatsApp Chat Mode for the informal merchant (forward the detail into a chat you already use), and an API for platforms and retailers who need verification inside their own checkout. Same engine, whatever your size.",
        "Until you have real verification, protect yourself with discipline: never release goods on a screenshot alone; check your own account balance or statement, not the customer's screen; beware of 'payment pending' claims at closing time; and keep a written log of references so end-of-day reconciliation compares your records against the operator's, not against memory.",
        "Payment confirmation should not be an act of faith. If your business accepts mobile money — in Kinshasa, Nairobi or anywhere the problem lives — explore KODA and make every payment provable in seconds.",
      ],
      fr: [
        "Tout commerçant qui accepte le mobile money connaît ce moment : le client montre un écran, la file s'allonge, et vous avez deux secondes pour décider si cette confirmation de paiement est vraie. Les fraudeurs le savent aussi. Captures retouchées, notifications SMS rejouées, transferts annulés avant finalisation — les astuces ne coûtent rien, et c'est le commerçant qui absorbe la perte à chaque fois.",
        "La capture d'écran n'est pas une preuve. Le SMS non plus : il peut être usurpé ou transféré depuis une ancienne transaction authentique. La seule preuve est le grand livre de l'opérateur : ce montant, depuis ce numéro, est-il arrivé sur votre compte, maintenant ? La plupart des petits commerçants n'ont aucun moyen de poser cette question rapidement — alors ils plissent les yeux sur un téléphone et espèrent, et le rapprochement du soir devient un acte de foi.",
        "KODA existe pour rendre cette question instantanée. Il vérifie les paiements mobile money par trois portes sur un seul moteur : une console manuelle pour le commerçant du marché (tapez la référence, obtenez une vraie réponse), un mode WhatsApp pour le marchand informel (transférez le détail dans une conversation que vous utilisez déjà), et une API pour les plateformes et détaillants qui veulent la vérification dans leur propre parcours de paiement. Le même moteur, quelle que soit votre taille.",
        "En attendant une vraie vérification, protégez-vous par la discipline : ne remettez jamais la marchandise sur une simple capture ; vérifiez votre propre solde ou relevé, pas l'écran du client ; méfiez-vous des « paiements en attente » à l'heure de la fermeture ; et tenez un registre écrit des références pour que le rapprochement du soir compare vos données à celles de l'opérateur, pas à votre mémoire.",
        "La confirmation de paiement ne devrait pas être un acte de foi. Si votre activité accepte le mobile money — à Kinshasa, Nairobi ou partout où le problème existe — explorez KODA et rendez chaque paiement prouvable en quelques secondes.",
      ],
    },
    keywords: [
      "verify mobile money payment", "mobile money fraud screenshot", "vérifier paiement mobile money",
      "M-Pesa payment verification", "Airtel Money confirmation", "merchant payment verification Africa", "arnaque mobile money",
    ],
    relatedPlatformSlugs: ["koda", "bitripay", "scan-go-rdc"],
    author: "group",
  },
  {
    slug: "food-delivery-kinshasa",
    date: "2026-08-11",
    category: { en: "Guide", fr: "Guide" },
    title: {
      en: "Ordering food online in Kinshasa: what actually works in 2026",
      fr: "Commander à manger en ligne à Kinshasa : ce qui marche vraiment en 2026",
    },
    excerpt: {
      en: "The global delivery apps never came to Kinshasa — but ordering lunch to your office or family dinner across town works today, with mobile money and no card required. Here is how.",
      fr: "Les applis mondiales de livraison ne sont jamais venues à Kinshasa — mais commander le déjeuner au bureau ou le dîner familial à l'autre bout de la ville fonctionne aujourd'hui, avec le mobile money et sans carte bancaire. Voici comment.",
    },
    body: {
      en: [
        "Search 'food delivery Kinshasa' and you will notice something strange: the apps that dominate everywhere else are absent. No Glovo, no Uber Eats. A city of over fifteen million people, with a vibrant restaurant culture from Bandal to Gombe, and the global playbook simply never arrived — because that playbook assumes app stores, data plans and debit cards.",
        "Kinshasa's reality is different, and better served on its own terms: WhatsApp is the operating system of daily life, mobile money is how money moves, and nobody wants to burn megabytes downloading an app to order lunch. Any delivery service that ignores those three facts is designed for a different city.",
        "Tunakula CD was built on Kinshasa's terms — live since 2025. Customers order from local restaurants online, offices organise team meals, and payment is mobile money, not a card you may not have. A network of independent delivery partners moves the food, earning on their own schedule. And for the diaspora, there is a use case no Western app imagined: remittance-to-meal, sending dinner to your mother in Kinshasa from your phone in Birmingham — a transfer that arrives as food on the table.",
        "Next comes NZELA-OS, the WhatsApp-native generation: the entire journey — menu, order, payment, delivery tracking — inside a conversation you already have open, with AI agents handling dispatch and settlement behind the scenes. No download, no card, no friction.",
        "If you are in Kinshasa and hungry, or abroad and thinking of someone who is: order with Tunakula, and see what delivery built for this city feels like. Restaurants and delivery partners can join through the same door.",
      ],
      fr: [
        "Cherchez « livraison repas Kinshasa » et vous remarquerez quelque chose d'étrange : les applis qui dominent partout ailleurs sont absentes. Pas de Glovo, pas d'Uber Eats. Une ville de plus de quinze millions d'habitants, avec une culture de restaurants vibrante de Bandal à Gombe, et le manuel mondial n'est simplement jamais arrivé — parce que ce manuel suppose des app stores, des forfaits data et des cartes bancaires.",
        "La réalité de Kinshasa est différente, et mieux servie à ses propres conditions : WhatsApp est le système d'exploitation de la vie quotidienne, le mobile money est la façon dont l'argent circule, et personne ne veut brûler des mégaoctets à télécharger une appli pour commander à déjeuner. Tout service de livraison qui ignore ces trois faits est conçu pour une autre ville.",
        "Tunakula CD a été construit aux conditions de Kinshasa — en ligne depuis 2025. Les clients commandent en ligne auprès des restaurants locaux, les bureaux organisent les repas d'équipe, et le paiement se fait en mobile money, pas avec une carte que vous n'avez peut-être pas. Un réseau de livreurs indépendants transporte les repas, en gagnant selon leur propre horaire. Et pour la diaspora, un usage qu'aucune appli occidentale n'avait imaginé : le transfert-repas — envoyer le dîner à votre mère à Kinshasa depuis votre téléphone à Birmingham, un transfert qui arrive en plat sur la table.",
        "Vient ensuite NZELA-OS, la génération native WhatsApp : tout le parcours — menu, commande, paiement, suivi de livraison — dans une conversation déjà ouverte, avec des agents IA gérant dispatch et règlement en coulisses. Pas de téléchargement, pas de carte, pas de friction.",
        "Si vous êtes à Kinshasa et affamé, ou à l'étranger en pensant à quelqu'un qui l'est : commandez avec Tunakula, et voyez ce que donne une livraison construite pour cette ville. Restaurants et livreurs peuvent rejoindre par la même porte.",
      ],
    },
    keywords: [
      "food delivery Kinshasa", "livraison repas Kinshasa", "commander manger Kinshasa", "order food online DRC",
      "Kinshasa restaurant delivery", "mobile money food order", "envoyer repas famille Kinshasa diaspora",
    ],
    relatedPlatformSlugs: ["tunakula-cd", "nzela-os", "koda"],
    author: "group",
  },
);

// ——— Feature-selling guides: one platform's features per article ———
articles.push(
  {
    slug: "marketwar-ai-marketing-tools",
    date: "2026-08-12",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "The ten AI marketing tools inside MarketWar OS — and what each one replaces",
      fr: "Les dix outils marketing IA de MarketWar OS — et ce que chacun remplace",
    },
    excerpt: {
      en: "AI social post generator, email campaigns, landing pages, hashtags, video scripts, audience optimisation, analytics and more — a tool-by-tool tour of the growth arsenal, and the agency bills each one deletes.",
      fr: "Générateur de publications IA, campagnes email, pages d'atterrissage, hashtags, scripts vidéo, optimisation d'audience, analytique et plus — un tour outil par outil de l'arsenal de croissance, et les factures d'agence que chacun supprime.",
    },
    body: {
      en: [
        "Most businesses buy marketing in pieces: a freelancer for posts, an agency for campaigns, a designer for landing pages, a subscription for analytics — and a human at 11pm stitching it together. MarketWar OS replaces the pieces with one operating system where every tool is an agent that acts, not a dashboard that watches. Here is the arsenal, tool by tool.",
        "Creation: the AI social media post generator writes on-brand posts for every channel in seconds; the AI email campaign generator produces full sequences — subject lines, follow-ups, scheduling — that would cost an agency retainer; the AI landing page builder assembles conversion-ready pages from a brief, not a design team; and the AI video script generator delivers hook-first scripts for reels and ads, timed to the second.",
        "Distribution: the AI hashtag generator matches tags to your content, market and language instead of recycling generic lists, and best-posting-time recommendations publish when your audience is actually awake — per market, per channel, which matters enormously when your customers span Kinshasa, Birmingham and Dubai time zones.",
        "Intelligence: AI campaign analytics puts every channel in one view with the story behind the numbers explained; AI audience optimisation matches segments and creative to the people who actually convert; and AI performance recommendations rank what to change next by expected revenue impact — the Money Machine Doctrine applied to your account, not vanity metrics.",
        "Every action is metered through ACUs — you pay for the intelligence you consume, never for seats — so a one-person business and a marketing team run the same arsenal at radically different spend. Explore MarketWar and put the ten tools to work; several of them also ship inside the partner dashboards of 3JN Travel, Buzz Pro, VIBR and Tunakula CD, because every Groupe Nseya partner gets an AI co-pilot.",
      ],
      fr: [
        "La plupart des entreprises achètent le marketing en morceaux : un freelance pour les publications, une agence pour les campagnes, un designer pour les pages d'atterrissage, un abonnement pour l'analytique — et un humain à 23 heures pour recoudre le tout. MarketWar OS remplace les morceaux par un seul système d'exploitation où chaque outil est un agent qui agit, pas un tableau de bord qui regarde. Voici l'arsenal, outil par outil.",
        "Création : le générateur IA de publications sociales écrit des posts à votre image pour chaque canal en quelques secondes ; le générateur IA de campagnes email produit des séquences complètes — objets, relances, programmation — qui coûteraient un contrat d'agence ; le constructeur IA de pages d'atterrissage assemble des pages prêtes à convertir à partir d'un brief, pas d'une équipe design ; et le générateur IA de scripts vidéo livre des scripts accrocheurs pour reels et publicités, minutés à la seconde.",
        "Distribution : le générateur IA de hashtags adapte les tags à votre contenu, votre marché et votre langue au lieu de recycler des listes génériques, et les recommandations de meilleurs horaires publient quand votre audience est réellement présente — par marché, par canal, ce qui compte énormément quand vos clients vivent aux fuseaux de Kinshasa, Birmingham et Dubaï.",
        "Intelligence : l'analytique IA des campagnes réunit tous les canaux en une seule vue avec l'histoire derrière les chiffres expliquée ; l'optimisation IA de l'audience aligne segments et créations sur les personnes qui convertissent vraiment ; et les recommandations IA de performance classent quoi changer ensuite par impact attendu sur le revenu — la Money Machine Doctrine appliquée à votre compte, pas des métriques de vanité.",
        "Chaque action est mesurée en ACU — vous payez l'intelligence consommée, jamais des sièges — si bien qu'un solo-entrepreneur et une équipe marketing font tourner le même arsenal à des dépenses radicalement différentes. Explorez MarketWar et mettez les dix outils au travail ; plusieurs équipent aussi les tableaux de bord partenaires de 3JN Travel, Buzz Pro, VIBR et Tunakula CD, car chaque partenaire du Groupe Nseya dispose d'un copilote IA.",
      ],
    },
    keywords: [
      "AI social media post generator", "AI email campaign generator", "AI landing page builder",
      "AI hashtag generator", "AI video script generator", "AI marketing tools small business",
      "outils marketing IA", "générateur de publications IA", "Semrush alternative AI agents",
    ],
    relatedPlatformSlugs: ["marketwar", "buzz-pro", "niche-finder"],
    author: "group",
  },
  {
    slug: "veryx-audit-trail-governance",
    date: "2026-08-12",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Who decided what, when: the VERYX features your project tool is missing",
      fr: "Qui a décidé quoi, quand : les fonctionnalités VERYX qui manquent à votre outil de projet",
    },
    excerpt: {
      en: "Immutable audit trails, decision provenance, governed AI agents, cost and risk control in one platform — the enterprise features that turn 'trust me' into 'here is the record'.",
      fr: "Pistes d'audit immuables, provenance des décisions, agents IA gouvernés, contrôle des coûts et des risques en une seule plateforme — les fonctionnalités d'entreprise qui transforment « faites-moi confiance » en « voici le registre ».",
    },
    body: {
      en: [
        "When an auditor, a minister or a board asks who approved the variation that added three months to the programme, a comment thread is not an answer. The defining feature of VERYX is that the answer always exists: every action in the system is an immutable event, every decision carries provenance — author, time, authority, context — and nothing can be quietly edited after the fact.",
        "On that governed foundation sits the full delivery suite: planning and scheduling, cost control, risk registers, procurement, resources, documentation and executive reporting — one data model instead of a spreadsheet archipelago. Change a milestone and the cost forecast, the risk exposure and the board pack all know about it, instantly and traceably.",
        "The AI layer is where VERYX departs from everything else on the market: agents that draft reports, flag schedule slippage, reconcile procurement and recommend interventions — each operating inside a permissions envelope that is auditable by design. The agent can act, and you can always prove exactly what it did and on whose authority. AI with a leash, which is the only AI an enterprise or a government can defensibly deploy.",
        "Billing follows the same philosophy: ACU metering means revenue scales with the intelligence you consume, not the seats you occupy. A ten-person delivery team is not priced like a thousand-seat enterprise — until it grows into one, automatically.",
        "If your organisation delivers complex work — construction programmes, public infrastructure, enterprise transformation — explore VERYX and see what your current tool cannot show you: the record. The same governance philosophy runs through AxionOS for construction transactions and BitriPay for payments, because provenance is the group standard, not a feature.",
      ],
      fr: [
        "Quand un auditeur, un ministre ou un conseil demande qui a approuvé l'avenant qui a ajouté trois mois au programme, un fil de commentaires n'est pas une réponse. La fonctionnalité fondatrice de VERYX est que la réponse existe toujours : chaque action du système est un événement immuable, chaque décision porte sa provenance — auteur, heure, autorité, contexte — et rien ne peut être discrètement modifié après coup.",
        "Sur cette fondation gouvernée repose la suite de livraison complète : planification, contrôle des coûts, registres de risques, achats, ressources, documentation et reporting exécutif — un seul modèle de données au lieu d'un archipel de tableurs. Modifiez un jalon et la prévision de coûts, l'exposition aux risques et le dossier du conseil le savent, instantanément et traçablement.",
        "La couche IA est là où VERYX se sépare de tout le reste du marché : des agents qui rédigent les rapports, signalent les dérives de planning, rapprochent les achats et recommandent des interventions — chacun opérant dans une enveloppe de permissions auditable par conception. L'agent peut agir, et vous pouvez toujours prouver exactement ce qu'il a fait et sous quelle autorité. Une IA tenue en laisse : la seule qu'une entreprise ou un gouvernement puisse défendre.",
        "La facturation suit la même philosophie : la mesure en ACU fait croître le revenu avec l'intelligence consommée, pas avec les sièges occupés. Une équipe de dix personnes n'est pas tarifée comme une entreprise de mille sièges — jusqu'à ce qu'elle en devienne une, automatiquement.",
        "Si votre organisation livre des projets complexes — programmes de construction, infrastructures publiques, transformation d'entreprise — explorez VERYX et voyez ce que votre outil actuel ne peut pas vous montrer : le registre. La même philosophie de gouvernance traverse AxionOS pour les transactions de construction et BitriPay pour les paiements, parce que la provenance est le standard du groupe, pas une option.",
      ],
    },
    keywords: [
      "project management software audit trail", "enterprise project governance software", "monday.com alternative enterprise",
      "Smartsheet alternative government", "AI project management agents", "logiciel gestion de projet gouvernance",
      "event sourced project management",
    ],
    relatedPlatformSlugs: ["veryx", "axionos", "bitripay"],
    author: "group",
  },
  {
    slug: "studyear-personalisation-engine",
    date: "2026-08-13",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Inside StudYear's Personalisation Engine: how an AI study plan actually raises grades",
      fr: "Au cœur du moteur de personnalisation StudYear : comment un plan d'étude IA améliore vraiment les notes",
    },
    excerpt: {
      en: "Diagnostics that find the real gaps, study plans that rebuild themselves every week, memory-decay tracking, predicted outcomes and parent visibility — the StudYear features, explained for families.",
      fr: "Des diagnostics qui trouvent les vraies lacunes, des plans d'étude qui se reconstruisent chaque semaine, le suivi de la courbe d'oubli, des résultats prédits et une visibilité pour les parents — les fonctionnalités StudYear, expliquées aux familles.",
    },
    body: {
      en: [
        "Every student who falls behind falls behind somewhere specific: a fraction concept missed in year 7 that breaks algebra in year 10, a French tense never secured that poisons every essay after. StudYear's diagnostics find that somewhere — mapping what a learner actually knows against the curriculum, not what their last test happened to sample.",
        "From the diagnosis, the Personalisation Engine builds a study plan — and this is the feature that separates it from every static revision app: the plan rebuilds itself continuously. It models each learner's pace, memory-decay curve and failure patterns, so a topic mastered last month resurfaces exactly when it is about to fade, and a persistent weakness gets attacked from a new angle instead of repeating what already failed.",
        "The engagement layer borrows what consumer apps got right — streaks, progression, immediate feedback — but points it at the exams that decide a life: GCSEs, national curricula, university entrance. Fun that moves grades, not fun instead of grades. Predictive analytics show the trajectory: where this learner lands on exam day if this week's pattern continues, in time to change the pattern.",
        "Parents and schools see what matters without hovering: effort, progress, predicted outcomes and where help is needed — one intelligent view for every actor in the education chain, from a single family to an entire ministry cohort. The same engine serves a Birmingham GCSE student and a Kinshasa classroom, priced through ACU metering so cost tracks actual use.",
        "Exam season rewards the students whose revision was engineered, not improvised. Explore StudYear and let the Personalisation Engine build the plan — and if you run a school or an education programme, the institutional view was built for you.",
      ],
      fr: [
        "Chaque élève qui décroche décroche quelque part de précis : une notion de fractions manquée en 5e qui casse l'algèbre en 2nde, un temps verbal jamais consolidé qui empoisonne toutes les rédactions suivantes. Les diagnostics de StudYear trouvent ce « quelque part » — en cartographiant ce que l'élève sait réellement par rapport au programme, pas ce que son dernier contrôle a échantillonné par hasard.",
        "À partir du diagnostic, le moteur de personnalisation construit un plan d'étude — et c'est la fonctionnalité qui le sépare de toutes les applis de révision statiques : le plan se reconstruit en continu. Il modélise le rythme, la courbe d'oubli et les schémas d'échec de chaque élève : un sujet maîtrisé le mois dernier ressurgit exactement quand il commence à s'effacer, et une faiblesse persistante est attaquée sous un nouvel angle au lieu de répéter ce qui a déjà échoué.",
        "La couche d'engagement emprunte ce que les applis grand public ont réussi — séries, progression, retour immédiat — mais le pointe vers les examens qui décident d'une vie : brevets, baccalauréats, examens d'État, concours d'entrée. Du plaisir qui améliore les notes, pas du plaisir à la place des notes. L'analytique prédictive montre la trajectoire : où cet élève atterrit le jour de l'examen si le rythme de cette semaine continue, à temps pour changer le rythme.",
        "Parents et écoles voient ce qui compte sans surveiller en permanence : effort, progrès, résultats prédits et où l'aide est nécessaire — une vue intelligente pour chaque acteur de la chaîne éducative, de la famille au ministère. Le même moteur sert un élève de GCSE à Birmingham et une classe de Kinshasa, tarifé en ACU pour que le coût suive l'usage réel.",
        "La saison des examens récompense les élèves dont les révisions ont été construites, pas improvisées. Explorez StudYear et laissez le moteur de personnalisation bâtir le plan — et si vous dirigez une école ou un programme éducatif, la vue institutionnelle a été conçue pour vous.",
      ],
    },
    keywords: [
      "AI study plan GCSE", "AI tutor app", "personalised revision app", "predict exam results AI",
      "application révision IA", "plan d'étude personnalisé", "soutien scolaire IA", "Duolingo alternative exams",
    ],
    relatedPlatformSlugs: ["studyear", "congo-voice-ai", "talento"],
    author: "group",
  },
  {
    slug: "koda-three-doors",
    date: "2026-08-13",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Console, WhatsApp or API: which KODA door fits your business",
      fr: "Console, WhatsApp ou API : quelle porte KODA convient à votre activité",
    },
    excerpt: {
      en: "KODA verifies mobile money payments through three interfaces on one engine. Here is what each mode does, who it is for, and how to choose — from market stall to national platform.",
      fr: "KODA vérifie les paiements mobile money par trois interfaces sur un seul moteur. Voici ce que fait chaque mode, à qui il s'adresse, et comment choisir — de l'étal de marché à la plateforme nationale.",
    },
    body: {
      en: [
        "One verification engine, three doors — because a market trader, a boutique owner and a platform engineer should not be forced through the same interface. Every KODA mode answers the same question with the same authority: did this payment really arrive, from this number, now?",
        "The Manual Console is for the counter. Type or paste the transaction reference, get a real answer in seconds — confirmed, not found, or already used (the replay trick that catches out even careful merchants). No integration, no technical setup: an account and a browser, and the guessing ends.",
        "WhatsApp Chat Mode is for the merchant whose office is a phone. Forward the payment detail into a KODA chat — the same conversation app you already run your business on — and the verification comes back where you are. No new app to download, no data burned, no workflow change: the door meets you where Kinshasa's commerce actually happens.",
        "API Mode is for platforms, retailers and billers who need verification inside their own checkout: a clean developer interface that confirms mobile money payments programmatically, with webhooks for reconciliation and fraud flags. The same engine that protects a street vendor protects a national retail chain — that is the three-door architecture, and each new mobile money operator integrated strengthens every door at once.",
        "Verification is metered per check through ACUs, so you pay in proportion to the payments you protect — no idle subscription for a quiet month. Whatever your size, stop trusting screenshots: explore KODA and pick your door. If you also need the payments themselves to move on better rails, that is what BitriPay is being built for.",
      ],
      fr: [
        "Un moteur de vérification, trois portes — parce qu'un vendeur de marché, une patronne de boutique et un ingénieur de plateforme ne devraient pas être forcés de passer par la même interface. Chaque mode KODA répond à la même question avec la même autorité : ce paiement est-il vraiment arrivé, depuis ce numéro, maintenant ?",
        "La console manuelle est faite pour le comptoir. Tapez ou collez la référence de transaction, obtenez une vraie réponse en secondes — confirmé, introuvable, ou déjà utilisé (l'astuce du rejeu qui piège même les commerçants prudents). Aucune intégration, aucune installation technique : un compte et un navigateur, et les devinettes s'arrêtent.",
        "Le mode WhatsApp est fait pour le commerçant dont le bureau est un téléphone. Transférez le détail du paiement dans une conversation KODA — la même appli où vous gérez déjà votre activité — et la vérification revient là où vous êtes. Pas de nouvelle appli, pas de data brûlée, pas de changement d'habitudes : la porte vous rejoint là où le commerce de Kinshasa se passe vraiment.",
        "Le mode API est fait pour les plateformes, détaillants et facturiers qui veulent la vérification dans leur propre parcours de paiement : une interface développeur propre qui confirme les paiements mobile money par programme, avec webhooks pour le rapprochement et les alertes de fraude. Le même moteur qui protège un vendeur de rue protège une chaîne nationale — c'est l'architecture à trois portes, et chaque nouvel opérateur mobile money intégré renforce toutes les portes à la fois.",
        "La vérification est mesurée à l'unité en ACU : vous payez en proportion des paiements que vous protégez — pas d'abonnement qui tourne à vide pendant un mois calme. Quelle que soit votre taille, cessez de faire confiance aux captures d'écran : explorez KODA et choisissez votre porte. Et si vous voulez aussi que les paiements eux-mêmes circulent sur de meilleurs rails, c'est ce que BitriPay est en train de construire.",
      ],
    },
    keywords: [
      "payment verification API Africa", "WhatsApp payment verification", "verify M-Pesa payment merchant",
      "mobile money reconciliation", "vérification paiement mobile money", "API vérification paiement", "anti-fraude mobile money commerçant",
    ],
    relatedPlatformSlugs: ["koda", "bitripay", "nzela-os"],
    author: "group",
  },
  {
    slug: "axionos-escrow-hiring-builders",
    date: "2026-08-13",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Escrow, verification, earned reputation: hiring a builder without the gamble",
      fr: "Séquestre, vérification, réputation méritée : engager un artisan sans jouer votre argent",
    },
    excerpt: {
      en: "Milestone escrow that releases money only on your approval, KYC-verified trades, reviews earned from real completed jobs — the AxionOS features that make 'cowboy builder' stories impossible by design.",
      fr: "Un séquestre par jalons qui ne libère l'argent que sur votre approbation, des artisans vérifiés KYC, des avis gagnés sur de vrais chantiers achevés — les fonctionnalités AxionOS qui rendent les histoires d'artisans véreux structurellement impossibles.",
    },
    body: {
      en: [
        "Hiring a tradesperson is one of the biggest financial decisions a household makes, and for decades it has been a gamble: deposits that vanish, quotes from strangers with purchased reviews, and no recourse when the job stalls. The directories sell you a phone number and walk away. AxionOS was built on a different premise — manage the transaction, not the lead.",
        "Feature one: verified identity. Every trade on the platform passes identity and financial verification and insurance checks before they can quote. Not a badge bought with a subscription — a gate. The 'cowboy' cannot get in the door, because the door checks.",
        "Feature two: milestone escrow. Your money sits protected and releases only when you approve each completed stage. No proof of work, no payout — which converts the classic horror story (deposit paid, builder gone) into a structural impossibility. For the trade, it works in reverse and just as powerfully: the moment you sign off a milestone, they are paid, with none of the 60-day invoice-chasing that kills small firms.",
        "Feature three: earned reputation. Reviews attach only to verified, escrowed, completed jobs — reputation cannot be purchased, only built. And SignalCore, the demand engine underneath, routes genuine local jobs to trades by territory and specialism, so professionals spend their week working instead of buying recycled leads at £15–40 each from directories that charge hundreds a month before a single job lands.",
        "Homeowners and businesses post jobs free; trades pay on success, not on hope. If you are hiring — or you are a professional tired of paying rent for contact details — explore AxionOS. It is the same governance philosophy that runs VERYX on major programmes, applied to the job on your street.",
      ],
      fr: [
        "Engager un artisan est l'une des plus grosses décisions financières d'un ménage, et depuis des décennies c'est un pari : des acomptes qui disparaissent, des devis d'inconnus aux avis achetés, et aucun recours quand le chantier s'arrête. Les annuaires vous vendent un numéro de téléphone et s'en vont. AxionOS a été construit sur une autre prémisse — gérer la transaction, pas le contact.",
        "Fonctionnalité un : l'identité vérifiée. Chaque artisan de la plateforme passe une vérification d'identité, financière et d'assurance avant de pouvoir remettre un devis. Pas un badge acheté avec un abonnement — un portail. Le « cowboy » ne peut pas entrer, parce que la porte vérifie.",
        "Fonctionnalité deux : le séquestre par jalons. Votre argent reste protégé et n'est libéré que lorsque vous approuvez chaque étape achevée. Pas de preuve de travail, pas de paiement — ce qui transforme l'histoire d'horreur classique (acompte versé, artisan disparu) en impossibilité structurelle. Pour l'artisan, cela fonctionne en sens inverse et tout aussi puissamment : dès que vous validez un jalon, il est payé, sans les 60 jours de relances de factures qui tuent les petites entreprises.",
        "Fonctionnalité trois : la réputation méritée. Les avis ne s'attachent qu'à des chantiers vérifiés, sous séquestre et achevés — la réputation ne peut pas s'acheter, seulement se construire. Et SignalCore, le moteur de demande sous-jacent, dirige de vrais chantiers locaux vers les artisans par territoire et spécialité : les professionnels passent leur semaine à travailler au lieu d'acheter des contacts recyclés à 15–40 £ pièce auprès d'annuaires qui facturent des centaines de livres par mois avant le moindre chantier.",
        "Particuliers et entreprises publient leurs projets gratuitement ; les artisans paient au succès, pas à l'espoir. Si vous engagez — ou si vous êtes un professionnel fatigué de payer un loyer pour des coordonnées — explorez AxionOS. C'est la même philosophie de gouvernance qui fait tourner VERYX sur les grands programmes, appliquée au chantier de votre rue.",
      ],
    },
    keywords: [
      "escrow payment builder UK", "hire builder safely deposit protection", "Checkatrade alternative no membership",
      "verified tradespeople Birmingham", "MyBuilder alternative", "find builder milestone payments", "protection acompte artisan",
    ],
    relatedPlatformSlugs: ["axionos", "jnseya-construction", "veryx"],
    author: "group",
  },
  {
    slug: "3jn-travel-instalments-seat-holding",
    date: "2026-08-13",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Book now, pay monthly: how 3JN Travel's seat-holding and instalments work",
      fr: "Réservez maintenant, payez chaque mois : comment fonctionnent la réservation de sièges et les paiements échelonnés de 3JN Travel",
    },
    excerpt: {
      en: "Lock your Kinshasa seat months ahead, pay in instalments matched to how families actually save, and stop gambling on fare spikes — the booking features built for the diaspora corridor, explained.",
      fr: "Bloquez votre siège pour Kinshasa des mois à l'avance, payez en échéances adaptées à la façon dont les familles épargnent vraiment, et cessez de parier sur les flambées de prix — les fonctionnalités de réservation conçues pour le corridor de la diaspora, expliquées.",
    },
    body: {
      en: [
        "The cruellest feature of corridor travel is timing: the people who most need December seats are the least able to pay for them in March. Traditional booking forces a choice between paying everything early (cash you don't have yet) or waiting (prices you won't believe). 3JN Travel's two signature features dissolve that choice.",
        "Seat-holding locks availability and price when you commit, not when you finish paying. Behind it sits the model that makes 3JN structurally different from an aggregator: inventory secured months ahead on the London, Paris and Brussels to Kinshasa corridors, without the platform carrying speculative risk — which is why the hold is real, not a 'price alert' that evaporates.",
        "Instalment payments then spread the fare across the months between booking and boarding, matching the way corridor families actually budget: steadily, from each pay cheque, towards a date that matters — a wedding, a return home, a December with family. Settlement runs through the group's own payment infrastructure, built for exactly these UK–DRC flows.",
        "Around those two features sits a full travel OS: flights, hotels and holiday rentals in one place, intelligent planning for multi-leg journeys, and — for sellers — the 3JN Vendor Partner Programme, which lets travel professionals and diaspora entrepreneurs sell corridor inventory and earn recurring commission without owning a platform.",
        "Fixed dates deserve fixed prices. Explore 3JN Travel, lock the seat while it is cheap, and let the months pay for it.",
      ],
      fr: [
        "La fonctionnalité la plus cruelle du voyage en corridor, c'est le calendrier : ceux qui ont le plus besoin de sièges en décembre sont les moins capables de les payer en mars. La réservation traditionnelle impose un choix entre tout payer tôt (un argent que vous n'avez pas encore) ou attendre (des prix que vous ne croirez pas). Les deux fonctionnalités signatures de 3JN Travel dissolvent ce choix.",
        "La réservation de sièges verrouille disponibilité et prix quand vous vous engagez, pas quand vous finissez de payer. Derrière elle se trouve le modèle qui rend 3JN structurellement différent d'un agrégateur : un inventaire sécurisé des mois à l'avance sur les corridors Londres, Paris et Bruxelles vers Kinshasa, sans risque spéculatif porté par la plateforme — c'est pourquoi le blocage est réel, pas une « alerte prix » qui s'évapore.",
        "Les paiements échelonnés étalent ensuite le tarif sur les mois entre la réservation et l'embarquement, à la façon dont les familles du corridor budgètent vraiment : régulièrement, à chaque paie, vers une date qui compte — un mariage, un retour au pays, un décembre en famille. Le règlement passe par l'infrastructure de paiement du groupe, construite précisément pour ces flux Royaume-Uni–RDC.",
        "Autour de ces deux fonctionnalités, un OS de voyage complet : vols, hôtels et locations en un seul endroit, planification intelligente des trajets à étapes, et — pour les vendeurs — le programme 3JN Vendor Partner, qui permet aux professionnels du voyage et aux entrepreneurs de la diaspora de vendre l'inventaire du corridor et de percevoir des commissions récurrentes sans posséder de plateforme.",
        "Des dates fixes méritent des prix fixes. Explorez 3JN Travel, bloquez le siège tant qu'il est abordable, et laissez les mois le payer.",
      ],
    },
    keywords: [
      "book flight pay monthly", "flight instalment plan UK", "fly now pay later Kinshasa", "payer vol en plusieurs fois",
      "billet avion Kinshasa échelonné", "hold flight price months ahead", "diaspora flight booking plan",
    ],
    relatedPlatformSlugs: ["3jn-travel", "3jn-vendor-partners", "bitripay"],
    author: "group",
  },
);

// ——— Round 3: remaining feature guides + the corridor flagship ———
articles.push(
  {
    slug: "joshrix-five-layers",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "From prompt to published game: the five layers of Joshrix Studio",
      fr: "Du prompt au jeu publié : les cinq couches de Joshrix Studio",
    },
    excerpt: {
      en: "Creation, Intelligence, Runtime, Commerce, Growth — how Joshrix turns an idea into a hosted, monetised game business without a funded team, and why the creator keeps the IP.",
      fr: "Création, Intelligence, Runtime, Commerce, Croissance — comment Joshrix transforme une idée en entreprise de jeu hébergée et monétisée sans équipe financée, et pourquoi le créateur garde la propriété intellectuelle.",
    },
    body: {
      en: [
        "The distance between a game idea and a commercial game product used to be a funded studio: designers, programmers, artists, servers, a publisher. Joshrix collapses that distance into five connected layers, and understanding them is understanding what you actually get.",
        "The Creation layer turns prompts, documents, drawings and conversations into structured game projects — you describe, it architects. The Intelligence layer is the studio staff you don't have to hire: specialised agents that reason about gameplay, code, art, game economics, retention and safety before anything ships. The Runtime layer then runs, hosts, scales and monitors every generated game — no server bills to architect, no DevOps to learn.",
        "The last two layers are where a game becomes a business. Commerce lets you sell and license games, templates, mechanics and assets in a marketplace; Growth analyses player behaviour and recommends controlled, ethical improvements — retention without dark patterns. And the IP sovereignty architecture means what you create remains yours: you are building a catalogue, not feeding someone else's.",
        "The user must never feel they are coding — they must feel they are commanding a game studio. Whether you are a solo creator in Kinshasa, a micro-studio in Birmingham or a publisher in London, explore Joshrix and command yours; the same creative stack connects to EchoStream for distribution and Movie Empire OS for film, because Groupe Nseya is building the whole creative pipeline.",
      ],
      fr: [
        "La distance entre une idée de jeu et un produit commercial était autrefois un studio financé : designers, programmeurs, artistes, serveurs, un éditeur. Joshrix réduit cette distance à cinq couches connectées, et les comprendre, c'est comprendre ce que vous obtenez vraiment.",
        "La couche Création transforme prompts, documents, dessins et conversations en projets de jeu structurés — vous décrivez, elle architecture. La couche Intelligence est le personnel de studio que vous n'avez pas à embaucher : des agents spécialisés qui raisonnent sur le gameplay, le code, l'art, l'économie du jeu, la rétention et la sécurité avant toute publication. La couche Runtime fait ensuite tourner, héberge, met à l'échelle et surveille chaque jeu généré — pas de facture serveur à architecturer, pas de DevOps à apprendre.",
        "Les deux dernières couches font d'un jeu une entreprise. Commerce vous laisse vendre et licencier jeux, modèles, mécaniques et assets dans une place de marché ; Croissance analyse le comportement des joueurs et recommande des améliorations contrôlées et éthiques — la rétention sans manipulations. Et l'architecture de souveraineté de la propriété intellectuelle signifie que ce que vous créez reste à vous : vous bâtissez un catalogue, pas celui d'un autre.",
        "L'utilisateur ne doit jamais sentir qu'il code — il doit sentir qu'il commande un studio de jeux. Créateur solo à Kinshasa, micro-studio à Birmingham ou éditeur à Londres, explorez Joshrix et commandez le vôtre ; la même pile créative se connecte à EchoStream pour la distribution et à Movie Empire OS pour le cinéma, car le Groupe Nseya construit toute la chaîne créative.",
      ],
    },
    keywords: [
      "AI game maker", "create game with AI no coding", "AI game development platform", "sell games marketplace creator",
      "créer un jeu avec IA", "studio de jeu IA", "game creation platform Africa",
    ],
    relatedPlatformSlugs: ["joshrix", "echostream", "movie-empire"],
    author: "group",
  },
  {
    slug: "jessie-os-age-bands",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Movement for ages 10 to 100: inside JESSIE-OS's five age-band modes",
      fr: "Du mouvement de 10 à 100 ans : au cœur des cinq modes par âge de JESSIE-OS",
    },
    excerpt: {
      en: "Two-minute interventions where your day actually happens, coaching that adapts from schoolchild to grandparent, streaks that respect psychology — the JESSIE-OS features the fitness industry never built.",
      fr: "Des interventions de deux minutes là où votre journée se passe vraiment, un coaching qui s'adapte de l'écolier au grand-parent, des séries qui respectent la psychologie — les fonctionnalités JESSIE-OS que l'industrie du fitness n'a jamais construites.",
    },
    body: {
      en: [
        "Fitness apps are built for people who already exercise. JESSIE-OS is built for the other 90%: the ones who sit for nine hours, know they shouldn't, and for whom a '30-minute workout' is not a small ask but an impossible one. Its core feature is the micro-movement intervention — short, frictionless, contextual bursts delivered where the sedentary day actually happens: at the desk, in the kitchen, during the school run.",
        "The five age-band modes are the feature no competitor offers. A twelve-year-old gets play-shaped movement and safe progression; a desk-bound thirty-five-year-old gets posture rescue and energy management; a seventy-year-old gets balance, strength preservation and confidence — same system, radically different experience, tuned to what each body needs and each mind responds to. Everyone else optimises for the 25–40 demographic and abandons both ends of life.",
        "Around the interventions sits the behavioural engine: streak psychology that builds habits without punishing a missed day into abandonment, wearable integrations that read your real activity instead of your intentions, and AI coaching metered through ACUs — intensive when you need it, silent when you don't, billed only for what you use.",
        "Movement that fits real life is the feature; everything else is delivery. Discover Jess Move — and if you run a school, an employer wellbeing programme or a health service, the age-band architecture was built to serve whole populations, not just individuals.",
      ],
      fr: [
        "Les applis de fitness sont construites pour les gens qui font déjà du sport. JESSIE-OS est construit pour les 90 % restants : ceux qui restent assis neuf heures, savent qu'ils ne devraient pas, et pour qui une « séance de 30 minutes » n'est pas un petit effort mais un effort impossible. Sa fonctionnalité cœur est l'intervention de micro-mouvement — des séquences courtes, sans friction, contextuelles, livrées là où la journée sédentaire se passe vraiment : au bureau, dans la cuisine, sur le trajet de l'école.",
        "Les cinq modes par tranche d'âge sont la fonctionnalité qu'aucun concurrent n'offre. Un enfant de douze ans reçoit du mouvement en forme de jeu et une progression sûre ; un trentenaire de bureau reçoit du sauvetage postural et de la gestion d'énergie ; un senior de soixante-dix ans reçoit équilibre, préservation de la force et confiance — même système, expérience radicalement différente, réglée sur ce dont chaque corps a besoin et ce à quoi chaque esprit répond. Tous les autres optimisent pour les 25–40 ans et abandonnent les deux bouts de la vie.",
        "Autour des interventions, le moteur comportemental : une psychologie des séries qui construit l'habitude sans transformer un jour manqué en abandon, des intégrations d'objets connectés qui lisent votre activité réelle plutôt que vos intentions, et un coaching IA mesuré en ACU — intensif quand vous en avez besoin, silencieux sinon, facturé seulement à l'usage.",
        "Le mouvement qui s'adapte à la vraie vie, c'est la fonctionnalité ; tout le reste n'est que livraison. Découvrez Jess Move — et si vous dirigez une école, un programme de bien-être d'entreprise ou un service de santé, l'architecture par âge a été conçue pour servir des populations entières, pas seulement des individus.",
      ],
    },
    keywords: [
      "desk exercise app", "micro workout app", "fitness app for seniors", "exercise app for kids",
      "sedentary lifestyle app", "application exercice bureau", "app fitness seniors", "workplace wellbeing app",
    ],
    relatedPlatformSlugs: ["jess-move", "health360-rdc", "studyear"],
    author: "group",
  },
  {
    slug: "tunakula-restaurant-partners",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Put your restaurant online in Kinshasa: how Tunakula works for partners",
      fr: "Mettez votre restaurant en ligne à Kinshasa : comment Tunakula fonctionne pour les partenaires",
    },
    excerpt: {
      en: "Online orders without building a website, a delivery fleet without hiring drivers, mobile money without a card machine — what joining Tunakula actually gives a Kinshasa restaurant, plus the marketing co-pilot.",
      fr: "Des commandes en ligne sans construire de site, une flotte de livraison sans embaucher de chauffeurs, le mobile money sans terminal bancaire — ce que rejoindre Tunakula apporte réellement à un restaurant de Kinshasa, avec en plus le copilote marketing.",
    },
    body: {
      en: [
        "For a Kinshasa restaurant, going online has always meant three impossible projects at once: build an ordering channel, organise deliveries, and take payments people can actually make. Tunakula CD collapses all three into one partnership — live since 2025, built for this city's realities rather than imported from someone else's.",
        "As a partner you get a digital storefront with your menu and prices, orders arriving in real time, and a structured network of independent delivery riders moving the food — no fleet to hire, no dispatcher to employ. Customers pay by mobile money, which means no card terminal, no excluded customers, and settlement that reconciles instead of a drawer of promises.",
        "The demand engines work for you beyond walk-in-replacement: corporate B2B contracts bring recurring office orders, subscriptions turn regulars into revenue you can plan on, events and catering fill the quiet days, and diaspora remittance-to-meal brings orders from London and Brussels for tables in Kinshasa — customers your dining room could never seat. And the built-in AI Growth Engine drafts your social posts and email campaigns and tells you the best time to post, a marketing department the size of a button.",
        "The next generation, NZELA-OS, will move the whole experience into WhatsApp — the conversation your customers already have open. Partners who join now are first in line. Order with Tunakula to see the customer side, and use the same door to register your restaurant.",
      ],
      fr: [
        "Pour un restaurant de Kinshasa, passer en ligne a toujours signifié trois projets impossibles à la fois : construire un canal de commande, organiser les livraisons, et encaisser des paiements que les gens peuvent réellement faire. Tunakula CD réduit les trois à un seul partenariat — en ligne depuis 2025, construit pour les réalités de cette ville plutôt qu'importé de celles d'un autre.",
        "En tant que partenaire, vous obtenez une vitrine numérique avec votre menu et vos prix, des commandes qui arrivent en temps réel, et un réseau structuré de livreurs indépendants qui transportent les repas — pas de flotte à embaucher, pas de dispatcheur à salarier. Les clients paient en mobile money : pas de terminal bancaire, pas de clients exclus, et un règlement qui se rapproche au lieu d'un tiroir de promesses.",
        "Les moteurs de demande travaillent pour vous au-delà du remplacement du comptoir : les contrats B2B apportent des commandes de bureaux récurrentes, les abonnements transforment les habitués en revenu planifiable, événements et traiteur remplissent les jours calmes, et le transfert-repas de la diaspora apporte des commandes de Londres et Bruxelles pour des tables à Kinshasa — des clients que votre salle n'aurait jamais pu asseoir. Et le moteur de croissance IA intégré rédige vos publications et campagnes email et vous dit quand publier — un service marketing de la taille d'un bouton.",
        "La génération suivante, NZELA-OS, déplacera toute l'expérience dans WhatsApp — la conversation que vos clients ont déjà ouverte. Les partenaires qui rejoignent maintenant sont premiers dans la file. Commandez avec Tunakula pour voir le côté client, et utilisez la même porte pour inscrire votre restaurant.",
      ],
    },
    keywords: [
      "restaurant delivery partner Kinshasa", "inscrire restaurant livraison Kinshasa", "vendre repas en ligne RDC",
      "partenaire livraison restaurant", "online ordering for restaurants Africa", "restaurant en ligne mobile money",
    ],
    relatedPlatformSlugs: ["tunakula-cd", "nzela-os", "koda"],
    author: "group",
  },
  {
    slug: "niche-finder-venture-briefs",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "From market gap to venture brief: what Niche Finder actually hands you",
      fr: "Du créneau de marché au dossier de venture : ce que Niche Finder vous remet vraiment",
    },
    excerpt: {
      en: "Not trend charts — build-ready briefs. How Niche Finder's discovery, validation and brief-generation features turn 'I want to start something' into 'here is exactly what to build, for whom, and why now'.",
      fr: "Pas des courbes de tendances — des dossiers prêts à construire. Comment les fonctionnalités de découverte, validation et génération de dossiers de Niche Finder transforment « je veux me lancer » en « voici exactement quoi construire, pour qui, et pourquoi maintenant ».",
    },
    body: {
      en: [
        "Market research tools sell you charts and leave you alone with them. Niche Finder's defining feature is its output: a build-ready venture brief — the market gap, the underserved customer, the demand evidence, the competitive landscape and the recommended entry wedge, assembled into a document you can act on or take to investors.",
        "Discovery scans for underserved markets, emerging categories and customer segments before they become mainstream — the gaps where demand exists but supply is broken, mispriced or absent. Validation then interrogates the gap: is the demand signal real and growing, who loses money on the problem today, and what would they pay for the fix? Evidence before conviction, so you spend capital on markets rather than hunches.",
        "The proof of the engine is this portfolio: Niche Finder is Groupe Nseya's own R&D function packaged as a product — the machine that surfaced many of the opportunities that became the ventures on this site. The same machine now works for founders choosing their next company, investors qualifying deal flow, and corporates hunting adjacent markets.",
        "Analysis is ACU-metered: pay for the intelligence you consume on each hunt, not a research retainer. Explore Niche Finder, run your first discovery — and when the brief says build, X-EXECUTE and 3JN Fund are the group's doors from brief to funded company.",
      ],
      fr: [
        "Les outils d'étude de marché vous vendent des courbes et vous laissent seul avec. La fonctionnalité fondatrice de Niche Finder est son livrable : un dossier de venture prêt à construire — le créneau, le client mal servi, les preuves de demande, le paysage concurrentiel et l'angle d'entrée recommandé, assemblés en un document sur lequel agir ou à présenter à des investisseurs.",
        "La découverte balaie les marchés mal desservis, les catégories émergentes et les segments de clientèle avant qu'ils ne deviennent grand public — les créneaux où la demande existe mais où l'offre est cassée, mal tarifée ou absente. La validation interroge ensuite le créneau : le signal de demande est-il réel et croissant, qui perd de l'argent sur ce problème aujourd'hui, et que paierait-il pour la solution ? Les preuves avant la conviction, pour dépenser le capital sur des marchés plutôt que sur des intuitions.",
        "La preuve du moteur, c'est ce portefeuille : Niche Finder est la fonction R&D du Groupe Nseya conditionnée en produit — la machine qui a fait émerger nombre des opportunités devenues les ventures de ce site. La même machine travaille désormais pour les fondateurs qui choisissent leur prochaine entreprise, les investisseurs qui qualifient leur deal flow, et les groupes qui chassent les marchés adjacents.",
        "L'analyse est mesurée en ACU : payez l'intelligence consommée à chaque exploration, pas un abonnement d'études. Explorez Niche Finder, lancez votre première découverte — et quand le dossier dit « construisez », X-EXECUTE et 3JN Fund sont les portes du groupe entre le dossier et l'entreprise financée.",
      ],
    },
    keywords: [
      "find business niche AI", "market opportunity discovery tool", "validate business idea AI", "trouver niche marché IA",
      "Exploding Topics alternative", "business idea validation tool", "étude de marché IA",
    ],
    relatedPlatformSlugs: ["niche-finder", "nseya-x-execute", "3jn-fund"],
    author: "group",
  },
  {
    slug: "openn-job-cross-border-hiring",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Opportunity without borders: how Openn Job connects employers and candidates",
      fr: "L'opportunité sans frontières : comment Openn Job connecte employeurs et candidats",
    },
    excerpt: {
      en: "A marketplace where qualified candidates meet global opportunities — simplified posting for employers, real matching instead of CV roulette, and a bridge across the UK–Africa talent corridor.",
      fr: "Une place de marché où les candidats qualifiés rencontrent des opportunités mondiales — publication simplifiée pour les employeurs, un vrai matching plutôt que la roulette des CV, et un pont sur le corridor de talents Royaume-Uni–Afrique.",
    },
    body: {
      en: [
        "Hiring is broken in both directions: employers drown in unqualified applications while qualified candidates never see the roles that fit them. Openn Job Global's marketplace attacks both sides at once — structured postings that say what the job actually requires, candidate profiles that show what a person can actually do, and matching that connects them without the roulette.",
        "For employers, the features are speed and reach: post once, reach candidates across borders, filter by verified capability rather than keyword bingo, and manage the pipeline in one place instead of an inbox. For candidates, the promise is in the name — opportunity without borders: roles in the UK, across Africa and remote-anywhere, visible to talent that traditional job boards geographically ignore.",
        "The corridor is the differentiator. Groupe Nseya operates between the UK, DRC and Dubai, and Openn Job is built for exactly that flow of talent: diaspora professionals looking homeward, African graduates reaching global employers, UK companies discovering the skills the big platforms never surface. Where LinkedIn prices recruiters out and Indeed buries candidates in volume, a focused corridor marketplace matches.",
        "Explore Openn Job to post a role or build your profile — and for organisations hiring at scale in emerging markets, its sibling Talento is coming with AI skills assessment and recruitment automation on the same rails.",
      ],
      fr: [
        "Le recrutement est cassé dans les deux sens : les employeurs se noient sous les candidatures non qualifiées pendant que les candidats qualifiés ne voient jamais les postes qui leur correspondent. La place de marché d'Openn Job Global attaque les deux côtés à la fois — des annonces structurées qui disent ce que le poste exige vraiment, des profils qui montrent ce qu'une personne sait vraiment faire, et un matching qui les connecte sans la roulette.",
        "Pour les employeurs, les fonctionnalités sont la vitesse et la portée : publiez une fois, atteignez des candidats au-delà des frontières, filtrez par capacité vérifiée plutôt qu'au bingo des mots-clés, et gérez le vivier en un seul endroit plutôt que dans une boîte mail. Pour les candidats, la promesse est dans le nom — l'opportunité sans frontières : des postes au Royaume-Uni, à travers l'Afrique et en télétravail mondial, visibles pour des talents que les sites d'emploi traditionnels ignorent géographiquement.",
        "Le corridor est le différenciateur. Le Groupe Nseya opère entre le Royaume-Uni, la RDC et Dubaï, et Openn Job est construit exactement pour ce flux de talents : les professionnels de la diaspora qui regardent vers le pays, les diplômés africains qui atteignent des employeurs mondiaux, les entreprises britanniques qui découvrent des compétences que les grandes plateformes ne font jamais remonter. Là où LinkedIn exclut les recruteurs par le prix et où Indeed noie les candidats sous le volume, une place de marché de corridor cible et matche.",
        "Explorez Openn Job pour publier un poste ou bâtir votre profil — et pour les organisations qui recrutent à grande échelle sur les marchés émergents, son jumeau Talento arrive avec l'évaluation de compétences par IA et l'automatisation du recrutement sur les mêmes rails.",
      ],
    },
    keywords: [
      "hire African talent remote", "jobs UK Africa corridor", "recruter talents africains", "emploi diaspora congolaise",
      "job board Africa international", "remote jobs DRC", "cross-border recruitment platform",
    ],
    relatedPlatformSlugs: ["openn-job-global", "talento", "nseya-x-execute"],
    author: "group",
  },
  {
    slug: "virvoo-value-sports-gear",
    date: "2026-08-14",
    category: { en: "Features", fr: "Fonctionnalités" },
    title: {
      en: "Play big without the big budget: how Virvoo keeps sports gear affordable",
      fr: "Jouez grand sans gros budget : comment Virvoo garde l'équipement sportif abordable",
    },
    excerpt: {
      en: "Multi-sport range in one cart, price intelligence that benchmarks the market daily, sourcing without the brand-tax — the Virvoo features built for students, local teams and everyday athletes.",
      fr: "Une gamme multisport dans un seul panier, une intelligence des prix qui compare le marché chaque jour, un approvisionnement sans la taxe de marque — les fonctionnalités Virvoo pensées pour les étudiants, les équipes locales et les athlètes du quotidien.",
    },
    body: {
      en: [
        "The sports industry got one thing wrong: it made access expensive. The big brands charge for sponsorship budgets and retail ceremony; the everyday athlete pays. Virvoo's founding feature is the refusal of that tax — value-engineered gear where the price reflects the product, not the marketing around it.",
        "One destination, every sport: basketball, football, American football, training and fitness in a single catalogue and a single cart, instead of a tab-per-store scavenger hunt. The range is curated for the people real sports culture actually lives with — students, local teams, weekend players, gym grinders — with modern, clean designs that don't announce their price point.",
        "Underneath sits the price-intelligence engine: market prices tracked, competitors benchmarked, bundles optimised — continuously, so 'affordable' is an engineered property, not a launch promo that quietly expires. Add a fast, simple checkout and the experience is four steps: browse your sport, pick your gear, check out in seconds, receive and perform.",
        "You don't need a big budget to play big — you need the right platform. Shop Virvoo, kit out the whole team, and keep the difference for what actually matters: playing.",
      ],
      fr: [
        "L'industrie du sport s'est trompée sur un point : elle a rendu l'accès coûteux. Les grandes marques facturent leurs budgets de sponsoring et leur cérémonie de vente ; l'athlète du quotidien paie. La fonctionnalité fondatrice de Virvoo est le refus de cette taxe — un équipement conçu pour la valeur, où le prix reflète le produit, pas le marketing autour.",
        "Une destination, tous les sports : basketball, football, football américain, entraînement et fitness dans un seul catalogue et un seul panier, au lieu d'une chasse au trésor à un onglet par boutique. La gamme est pensée pour ceux chez qui la vraie culture sportive vit — étudiants, équipes locales, joueurs du week-end, habitués de la salle — avec des designs modernes et sobres qui n'annoncent pas leur prix.",
        "En dessous tourne le moteur d'intelligence des prix : prix du marché suivis, concurrents comparés, lots optimisés — en continu, pour que « abordable » soit une propriété d'ingénierie, pas une promo de lancement qui expire en silence. Ajoutez un passage en caisse rapide et simple, et l'expérience tient en quatre étapes : parcourez votre sport, choisissez votre équipement, payez en quelques secondes, recevez et performez.",
        "Vous n'avez pas besoin d'un gros budget pour jouer grand — vous avez besoin de la bonne plateforme. Achetez sur Virvoo, équipez toute l'équipe, et gardez la différence pour ce qui compte vraiment : jouer.",
      ],
    },
    keywords: [
      "affordable sports gear online", "cheap football boots quality", "basketball gear budget", "équipement sportif pas cher",
      "kit whole team budget", "multi sport equipment store", "sports gear for students",
    ],
    relatedPlatformSlugs: ["virvoo", "ticketroyality", "vibr"],
    author: "group",
  },
  {
    slug: "envoyer-argent-rdc-vrai-cout",
    date: "2026-08-14",
    category: { en: "Guide", fr: "Guide" },
    title: {
      en: "Sending money to the DRC: the real cost, and how to stop paying it",
      fr: "Envoyer de l'argent en RDC : le vrai coût, et comment arrêter de le payer",
    },
    excerpt: {
      en: "Sub-Saharan Africa is the most expensive place on earth to send money — around 8% of every transfer, nearly triple the UN target. Here is where the money leaks, how to compare providers honestly, and the rail being built to end it.",
      fr: "L'Afrique subsaharienne est l'endroit le plus cher au monde pour envoyer de l'argent — environ 8 % de chaque transfert, près du triple de l'objectif de l'ONU. Voici où l'argent fuit, comment comparer honnêtement les prestataires, et le rail en construction pour y mettre fin.",
    },
    body: {
      en: [
        "Every month, money flows from London, Paris and Brussels to families in Kinshasa — and every month a share of it evaporates in fees. The World Bank measures it: sending money to Sub-Saharan Africa costs on average over 8% of the transfer, the highest of any region on earth and nearly triple the 3% target the United Nations set. On the money a family sends home in a year, that is a whole extra month's transfer taken by the pipeline.",
        "The leak hides in two places. The visible fee is the small one; the real cost is the exchange-rate spread — the gap between the rate you're given and the real market rate, often worth several percent and never printed on the receipt. That is why 'zero-fee transfer' offers deserve suspicion: the fee moved into the rate. To compare honestly, ignore the fee line and ask one question: how many francs actually arrive per pound sent, today, all-in?",
        "Until better rails exist, protect your transfer with discipline: always compare the arriving amount across two or three providers before sending; prefer mobile money payout over cash pickup where fees allow (it is safer and usually cheaper); avoid transferring on Fridays and holiday peaks when spreads widen; and keep your references — a paper trail matters when a payout stalls.",
        "The structural fix is a rail built for this corridor rather than rented from legacy networks — and that is exactly what BitriPay is being engineered to be: compliance-first for DRC mobile money and the London–Kinshasa corridor, double-entry ledger at the core, built to central-bank standard from day one. It is the payment backbone of the whole Groupe Nseya ecosystem, from 3JN Travel instalments to Tunakula CD diaspora meal orders — which means volume, which means pricing the incumbents cannot follow.",
        "Register your interest in BitriPay to be first on the rail at launch — and until then, compare hard, count what arrives, and stop tipping the pipeline.",
      ],
      fr: [
        "Chaque mois, l'argent coule de Londres, Paris et Bruxelles vers les familles de Kinshasa — et chaque mois, une part s'évapore en frais. La Banque mondiale le mesure : envoyer de l'argent en Afrique subsaharienne coûte en moyenne plus de 8 % du transfert, le record mondial, près du triple de l'objectif de 3 % fixé par les Nations unies. Sur ce qu'une famille envoie au pays en un an, c'est un mois entier de transfert supplémentaire pris par le tuyau.",
        "La fuite se cache à deux endroits. Les frais visibles sont la petite part ; le vrai coût est la marge de change — l'écart entre le taux qu'on vous donne et le vrai taux du marché, souvent plusieurs pour cent et jamais imprimé sur le reçu. C'est pourquoi les offres « transfert sans frais » méritent la méfiance : les frais ont déménagé dans le taux. Pour comparer honnêtement, ignorez la ligne « frais » et posez une seule question : combien de francs arrivent réellement par livre ou euro envoyé, aujourd'hui, tout compris ?",
        "En attendant de meilleurs rails, protégez votre transfert par la discipline : comparez toujours le montant qui arrive chez deux ou trois prestataires avant d'envoyer ; préférez le versement en mobile money au retrait d'espèces quand les frais le permettent (plus sûr et souvent moins cher) ; évitez d'envoyer les vendredis et pics de fêtes quand les marges s'élargissent ; et gardez vos références — une trace écrite compte quand un versement se bloque.",
        "La solution structurelle est un rail construit pour ce corridor plutôt que loué aux réseaux historiques — et c'est exactement ce que BitriPay est en train de devenir : conformité d'abord pour le mobile money de la RDC et le corridor Londres–Kinshasa, grand livre en partie double au cœur, bâti au standard banque centrale dès le premier jour. C'est la colonne vertébrale de paiement de tout l'écosystème Groupe Nseya, des paiements échelonnés de 3JN Travel aux commandes-repas de la diaspora sur Tunakula CD — donc du volume, donc des prix que les acteurs historiques ne peuvent pas suivre.",
        "Manifestez votre intérêt pour BitriPay pour être premier sur le rail au lancement — et d'ici là, comparez durement, comptez ce qui arrive, et arrêtez de donner un pourboire au tuyau.",
      ],
    },
    keywords: [
      "envoyer argent RDC", "envoyer argent Kinshasa moins cher", "send money to Congo DRC", "transfert argent Congo frais",
      "remittance fees Congo", "meilleur taux transfert RDC", "mobile money transfer DRC", "frais Western Union RDC",
    ],
    relatedPlatformSlugs: ["bitripay", "3jn-travel", "alphaafrican-wealth"],
    author: "founder",
  },
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
