import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export const siteUrl = "https://cyz.github.io";
export const siteName = "Cynthia Zanoni";
export const defaultOgImage = "/assets/images/og-default.png";

const ogImage = {
  url: defaultOgImage,
  width: 1200,
  height: 630,
  alt: siteName,
};

const localeMap: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
};

function withTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function localizedPath(locale: Locale, path = "") {
  return withTrailingSlash(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function createPageMetadata({
  title,
  description,
  locale,
  path = "",
}: {
  title: string;
  description: string;
  locale: Locale;
  path?: string;
}): Metadata {
  const pathname = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: Object.fromEntries(
        routing.locales.map((alternateLocale) => [
          alternateLocale,
          localizedPath(alternateLocale, path),
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName,
      locale: localeMap[locale],
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@cynthiazanoni",
      images: [defaultOgImage],
    },
  };
}

export function createStaticMetadata({
  title,
  description,
  path,
  robots,
}: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
}): Metadata {
  const pathname = withTrailingSlash(path);

  return {
    title,
    description,
    robots,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@cynthiazanoni",
      images: [defaultOgImage],
    },
  };
}
