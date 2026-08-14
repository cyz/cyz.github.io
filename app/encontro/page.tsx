import type { Metadata } from "next";
import { EncontroFrame } from "@/components/EncontroFrame";
import { createStaticMetadata } from "@/lib/seo";

export const metadata: Metadata = createStaticMetadata({
  title: "Encontro de Mulheres e Carreira em Tecnologia 2026",
  description: "Palestras, painéis, mentorias e muito mais. Inscrições abertas!",
  path: "/encontro",
  robots: {
    index: false,
    follow: false,
  },
});

export default function EncontroPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <EncontroFrame />
    </main>
  );
}
