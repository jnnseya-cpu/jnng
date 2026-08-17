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
    // The 512px PNGs are what Chrome/Android composes its install splash
    // screen from (icon on background_color); maskable covers adaptive icons.
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
