"use client";

// Root error boundary — catches failures outside the locale layout.
// Bilingual because the locale is unknown at this level.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ background: "#050709", color: "#F7F8FA", fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <p style={{ color: "#C9A55C", letterSpacing: "0.14em", fontSize: "0.7rem" }}>GROUPE NSEYA</p>
          <h1 style={{ fontSize: "1.8rem", margin: "1rem 0 0.5rem" }}>Something went wrong · Une erreur est survenue</h1>
          <p style={{ color: "#A9B1BC", maxWidth: "34rem", fontSize: "0.95rem" }}>
            Please try again. If the problem continues, contact us at contact@groupejnn.com. · Veuillez réessayer. Si le
            problème persiste, contactez-nous à contact@groupejnn.com.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              background: "#C9A55C",
              color: "#050709",
              border: 0,
              borderRadius: "6px",
              padding: "0.75rem 1.5rem",
              fontWeight: 600,
              cursor: "pointer",
              minHeight: "44px",
            }}
          >
            Try again · Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
