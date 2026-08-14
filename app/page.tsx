"use client";

import { useEffect } from "react";

// Static export can't negotiate the locale on the server, so we redirect the
// root to a locale-prefixed route on the client. Mirrors the original site:
// saved preference first, then the browser language, defaulting to English.
export default function RootPage() {
  useEffect(() => {
    let lang: string | null = null;
    try {
      lang = localStorage.getItem("lang");
    } catch {
      /* ignore */
    }
    if (lang !== "en" && lang !== "pt") {
      lang = (navigator.language || "").toLowerCase().startsWith("pt")
        ? "pt"
        : "en";
    }
    window.location.replace(`/${lang}/`);
  }, []);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      <noscript>
        <a href="/en/">English</a>
        {" · "}
        <a href="/pt/">Português</a>
      </noscript>
    </main>
  );
}
