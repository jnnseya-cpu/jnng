export const site = {
  name: "Groupe Nseya",
  legalLine: "Groupe Nseya operates through its affiliated companies, platforms and strategic ventures, including JNN Global Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://groupejnn.com",
  formEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  email: "contact@groupejnn.com",
  phoneUK: "+44 (0) 7493 216101",
  phoneDRC: "+243 (0) 818 112309",
  address: {
    street: "Av. de la Révolution 22Bis",
    district: "Brikin / Ngaliema",
    city: "Kinshasa",
    country: { en: "Democratic Republic of Congo", fr: "République démocratique du Congo" },
  },
  founder: {
    name: "Justin N. Nseya, MCIOB",
    shortName: "Justin N. Nseya",
  },
  // Populate with approved profiles before launch (used for Organization sameAs).
  socials: [] as { label: string; href: string }[],
} as const;
