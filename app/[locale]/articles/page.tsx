import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CardGrid } from "@/components/CardGrid";
import { articles } from "@/content/articles";
import type { Locale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });
  return {
    ...createPageMetadata({
      title: t("articlesTitle"),
      description: t("articlesDescription"),
      locale: locale as Locale,
      path: "/articles",
    }),
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("Articles");

  return (
    <>
      <header className="page-head">
        <h1 className="section-title tagline">{t("title")}</h1>
        <p className="section-note">{t("count", { count: articles.length })}</p>
      </header>
      <CardGrid
        items={articles}
        locale={locale as Locale}
        label={t("listLabel")}
        emptyMessage={t("empty")}
      />
    </>
  );
}
