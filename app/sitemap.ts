import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl, localizedPath } from "@/lib/seo";

const routes = ["", "/articles", "/projects"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: absoluteUrl(localizedPath(locale, route)),
    })),
  );
}
