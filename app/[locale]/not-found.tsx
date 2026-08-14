import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("NotFound");

  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">{t("title")}</h1>
      <p className="not-found-message">{t("message")}</p>
      <Link className="not-found-link" href="/">
        {t("homeLink")}
      </Link>
    </main>
  );
}
