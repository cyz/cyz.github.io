import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  icons: {
    icon: [{ url: "/assets/images/developer-pulse.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    siteName,
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cynthiazanoni",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
