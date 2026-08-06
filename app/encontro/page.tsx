import type { Metadata } from "next";
import { EncontroFrame } from "@/components/EncontroFrame";

export const metadata: Metadata = {
  title: "Encontro de Mulheres e Carreira em Tecnologia 2026",
  description: "Palestras, painéis, mentorias e muito mais. Inscrições abertas!",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EncontroPage() {
  return <EncontroFrame />;
}
