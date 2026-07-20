import { useTranslations } from "next-intl";

type Social = {
  href: string;
  label: string;
  path: string;
  filled?: boolean;
  extra?: React.ReactNode;
};

const socials: Social[] = [
  {
    href: "https://x.com/cynthiazanoni",
    label: "X",
    filled: true,
    path: "M18.244 2H21.5l-7.5 8.57L23 22h-6.75l-5.29-6.91L4.9 22H1.64l8.02-9.17L1 2h6.92l4.78 6.32L18.244 2Zm-1.18 18h1.82L7.03 3.9H5.08L17.064 20Z",
  },
  {
    href: "https://instagram.com/cynthia.zanoni",
    label: "Instagram",
    path: "",
    extra: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    ),
  },
  {
    href: "https://www.linkedin.com/in/cynthiazanoni/",
    label: "LinkedIn",
    filled: true,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    href: "https://youtube.com/womakerscode",
    label: "YouTube",
    filled: true,
    path: "M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.58A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  },
  {
    href: "https://tiktok.com/@cynthiazanoni",
    label: "TikTok",
    filled: true,
    path: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.9a2.6 2.6 0 0 1-2.6 2.53 2.6 2.6 0 1 1 .78-5.08V9.99a5.86 5.86 0 0 0-.78-.05 5.83 5.83 0 1 0 5.83 5.83V9.01a7.5 7.5 0 0 0 4.37 1.4V7.2a4.28 4.28 0 0 1-3.34-1.38Z",
  },
  {
    href: "https://bsky.app/profile/cynthiazanoni.bsky.social",
    label: "Bluesky",
    filled: true,
    path: "M6.3 3.53C8.63 5.28 11.13 8.83 12 10.74c.87-1.9 3.37-5.46 5.7-7.21 1.68-1.26 4.4-2.24 4.4.87 0 .62-.36 5.2-.57 5.95-.72 2.6-3.37 3.26-5.72 2.86 4.11.7 5.16 3.02 2.9 5.34-4.3 4.4-6.17-1.1-6.65-2.51-.09-.26-.13-.38-.13-.28 0-.1-.04.02-.13.28-.48 1.41-2.35 6.91-6.65 2.51-2.26-2.32-1.21-4.64 2.9-5.34-2.35.4-5-.26-5.72-2.86C1.16 9.61.8 5.03.8 4.41c0-3.11 2.72-2.13 4.4-.87Z",
  },
  {
    href: "https://womakerscode.substack.com/",
    label: "Substack",
    filled: true,
    path: "M3.5 3.5h17v2.74h-17V3.5Zm0 5.02h17V22L12 17.15 3.5 22V8.52Z",
  },
];

export function SocialLinks({ className }: { className?: string }) {
  const t = useTranslations("Social");
  return (
    <nav className={className ?? "social"} aria-label={t("label")}>
      {socials.map((s) => (
        <a
          key={s.label}
          className="social-link"
          href={s.href}
          target="_blank"
          rel="me noopener"
          aria-label={s.label}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={s.filled ? "currentColor" : "none"}
            stroke={s.filled ? undefined : "currentColor"}
            strokeWidth={s.filled ? undefined : 2}
            strokeLinecap={s.filled ? undefined : "round"}
            strokeLinejoin={s.filled ? undefined : "round"}
            aria-hidden="true"
          >
            {s.path ? <path d={s.path} /> : s.extra}
          </svg>
        </a>
      ))}
    </nav>
  );
}
