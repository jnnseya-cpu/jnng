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

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
