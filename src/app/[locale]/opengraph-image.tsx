import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Groupe Nseya — Building the platforms that power tomorrow.";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

// Social-share card: obsidian/navy canvas, gold hairline, master headline.
export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const headline =
    locale === "fr"
      ? "Construire les plateformes qui font avancer demain."
      : "Building the platforms that power tomorrow.";
  const sub =
    locale === "fr"
      ? "Technologie · Investissement · Développement de projets"
      : "Technology · Investment · Project Development";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #050709 0%, #081421 60%, #050709 100%)",
          color: "#F7F8FA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              border: "1px solid #C9A55C",
              background: "#081421",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A55C",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", fontSize: "30px", letterSpacing: "8px", fontWeight: 700 }}>
            <span>GROUPE&nbsp;</span>
            <span style={{ color: "#C9A55C" }}>NSEYA</span>
          </div>
        </div>
        <div
          style={{
            marginTop: "56px",
            height: "2px",
            width: "420px",
            background: "linear-gradient(90deg, #C9A55C, rgba(201,165,92,0))",
          }}
        />
        <div style={{ marginTop: "48px", fontSize: "66px", fontWeight: 700, lineHeight: 1.12, maxWidth: "980px" }}>
          {headline}
        </div>
        <div style={{ marginTop: "36px", fontSize: "28px", color: "#A9B1BC", letterSpacing: "2px" }}>{sub}</div>
        <div style={{ marginTop: "44px", fontSize: "24px", color: "#C9A55C" }}>groupejnn.com</div>
      </div>
    ),
    size,
  );
}
