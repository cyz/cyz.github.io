import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLinks } from "@/components/SocialLinks";
import { CopyBioButton } from "@/components/CopyBioButton";
import type { Locale } from "@/i18n/routing";

const HEADSHOT_SRC = "/assets/images/cynthiazanoni.jpg";

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
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("Home");

  const rich = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    i: (chunks: React.ReactNode) => <i>{chunks}</i>,
    br: () => <br />,
  };

  return (
    <main className="content">
      <h1 className="tagline">{t("tagline")}</h1>

      <SocialLinks />

      <section className="intro" aria-label={t("introLabel")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="avatar"
          src={HEADSHOT_SRC}
          alt={t("avatarAlt")}
          width={360}
          height={360}
        />
        <div className="intro-body">
          <p>{t.rich("intro1", rich)}</p>
          <p>{t.rich("intro3", rich)}</p>
        </div>
      </section>

      <section className="bio" aria-labelledby="bio-heading">
        <h2 id="bio-heading" className="section-title">
          {t("bioHeading")}
        </h2>
        <p className="section-note">{t.rich("bioNote", rich)}</p>
        <blockquote className="bio-text" id="bio-text">
          {t.rich("bio", rich)}
        </blockquote>
        <div className="bio-actions">
          <CopyBioButton />
          <span className="dot" aria-hidden="true">
            &bull;
          </span>
          <a className="link-action" href={HEADSHOT_SRC} download>
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>{t("downloadHeadshot")}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
