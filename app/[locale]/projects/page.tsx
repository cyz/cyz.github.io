import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CardGrid } from "@/components/CardGrid";
import { projects } from "@/content/projects";
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
      title: t("projectsTitle"),
      description: t("projectsDescription"),
      locale: locale as Locale,
      path: "/projects",
    }),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("Projects");

  return (
    <main className="content projects-page">
      <header className="page-head">
        <h1 className="section-title tagline">{t("title")}</h1>
      </header>
      <CardGrid
        items={projects}
        locale={locale as Locale}
        label={t("listLabel")}
        emptyMessage={t("empty")}
      />
    </main>
  );
}
