import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All supported locales
  locales: ["en", "pt"],
  // Used when no locale matches
  defaultLocale: "en",
  // Static export requires an always-present locale prefix (/en, /pt)
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
