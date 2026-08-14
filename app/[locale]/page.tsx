import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLinks } from "@/components/SocialLinks";
import { CopyBioButton } from "@/components/CopyBioButton";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

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
    ...createPageMetadata({
      title: t("homeTitle"),
      description: t("homeDescription"),
      locale: locale as Locale,
    }),
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cynthia Zanoni",
    url: absoluteUrl(`/${locale}/`),
    image: absoluteUrl(HEADSHOT_SRC),
    jobTitle: "Global Cloud Advocate",
    worksFor: {
      "@type": "Organization",
      name: "Microsoft",
    },
    founder: {
      "@type": "Organization",
      name: "WoMakersCode",
      url: "https://womakerscode.org/",
    },
    sameAs: [
      "https://x.com/cynthiazanoni",
      "https://instagram.com/cynthia.zanoni",
      "https://www.linkedin.com/in/cynthiazanoni/",
      "https://youtube.com/womakerscode",
      "https://tiktok.com/@cynthiazanoni",
      "https://bsky.app/profile/cynthiazanoni.bsky.social",
      "https://womakerscode.substack.com/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <h1 className="tagline">{t("tagline")}</h1>

      <SocialLinks />

      <section className="intro" aria-label={t("introLabel")}>
        <Image
          className="avatar"
          src={HEADSHOT_SRC}
          alt={t("avatarAlt")}
          width={360}
          height={360}
          sizes="(max-width: 900px) 100vw, 20rem"
          priority
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
    </>
  );
}
