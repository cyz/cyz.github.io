import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CardGrid } from "@/components/CardGrid";
import { Footer } from "@/components/Footer";
import { articles } from "@/content/articles";
import type { Locale } from "@/i18n/routing";

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
    title: t("articlesTitle"),
    description: t("articlesDescription"),
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
      <main className="content">
        <header className="page-head">
          <h1 className="section-title tagline">{t("title")}</h1>
        </header>
        <CardGrid
          items={articles}
          locale={locale as Locale}
          label={t("listLabel")}
          emptyMessage={t("empty")}
        />
      </main>
      <Footer />
    </>
  );
}
