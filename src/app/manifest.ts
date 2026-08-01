import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Groupe Nseya",
    short_name: "Nseya",
    description:
      "Groupe Nseya builds intelligent platforms and strategic ventures across education, travel, entrepreneurship, infrastructure, energy, mobility, commerce, health and government services.",
    start_url: "/en",
    display: "standalone",
    background_color: "#050709",
    theme_color: "#050709",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
