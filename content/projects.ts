import type { ContentCard } from "./types";

/**
 * HOW TO ADD A PROJECT
 * Add an entry to this array. Each text field is bilingual ({ en, pt }).
 *   - href: link to the project (or "#" for now)
 *   - image: optional image path in /public (omit to keep the gradient)
 *   - tag: short category label
 *   - title / excerpt: title and short summary
 *   - date: year or status
 *   - external: true to open in a new tab
 */
export const projects: ContentCard[] = [
  {
    href: "https://cyz.github.io/devdays-design/",
    external: true,
    image: "/assets/images/devdays-design.png",
    imageAlt: {
      en: "Dev Days Social Image Creator project preview",
      pt: "Prévia do projeto Dev Days Social Image Creator",
    },
    tag: { en: "Design tool", pt: "Ferramenta de design" },
    title: {
      en: "Dev Days Social Image Creator",
      pt: "Dev Days Social Image Creator",
    },
    excerpt: {
      en: "A design tool built for GitHub Community Programs to create polished, on-brand event and social media visuals in ready-to-publish formats.",
      pt: "Uma ferramenta de design criada para a área de Programas de Comunidades do GitHub produzir peças para eventos e redes sociais com agilidade, consistência de marca e formatos prontos para publicação.",
    },
    date: { en: "2026", pt: "2026" },
  },
  {
    href: "https://github.com/github/github-copilot-dev-days",
    external: true,
    image: "https://raw.githubusercontent.com/github/GitHub-Copilot-Dev-Days/main/assets/github-copilot-dev-days.png",
    imageAlt: {
      en: "GitHub Copilot Dev Days visual identity",
      pt: "Identidade visual do GitHub Copilot Dev Days",
    },
    tag: { en: "Open source", pt: "Código aberto" },
    title: { en: "GitHub Copilot Dev Days", pt: "GitHub Copilot Dev Days" },
    excerpt: {
      en: "An open-source event kit I helped build for a global, community-led series, combining organizer workflows, technical sessions, hands-on labs, and promotional resources for GitHub Copilot.",
      pt: "Kit de eventos open source que ajudei a desenvolver para uma série global liderada por comunidades, reunindo fluxos para organizadores, sessões técnicas, laboratórios práticos e materiais de divulgação sobre GitHub Copilot.",
    },
    date: { en: "2026", pt: "2026" },
  },
  {
    href: "https://github.com/microsoft/VS-Code-Dev-Days",
    external: true,
    image: "https://raw.githubusercontent.com/microsoft/VS-Code-Dev-Days/main/assets/the-oss-ai-code-editor.jpg",
    imageAlt: {
      en: "Visual Studio Code, the open source AI code editor",
      pt: "Visual Studio Code, o editor de código open source com IA",
    },
    tag: { en: "Open source", pt: "Código aberto" },
    title: { en: "VS Code Dev Days", pt: "VS Code Dev Days" },
    excerpt: {
      en: "An open-source event program I helped develop for community leaders to deliver practical workshops on AI-assisted development with Visual Studio Code and GitHub Copilot.",
      pt: "Programa de eventos open source que ajudei a desenvolver para líderes de comunidades realizarem workshops práticos sobre desenvolvimento assistido por IA com Visual Studio Code e GitHub Copilot.",
    },
    date: { en: "2025", pt: "2025" },
  },
  {
    href: "https://womakerscode.org/",
    external: true,
    image: "https://cdn.sanity.io/images/qbza2fhs/production/14a7dfc219700188911f6462c0bf9bce3955643a-1080x720.jpg?auto=format&fit=max&q=75&w=700",
    imageAlt: {
      en: "Women from the WoMakersCode community at an in-person event",
      pt: "Mulheres da comunidade WoMakersCode em um evento presencial",
    },
    tag: { en: "Community", pt: "Comunidade" },
    title: { en: "WoMakersCode", pt: "WoMakersCode" },
    excerpt: {
      en: "WoMakersCode's institutional website, developed with Next.js and integrated with Sanity for structured content management and scalable editorial publishing.",
      pt: "Site institucional da WoMakersCode, desenvolvido em Next.js e integrado ao Sanity para gerenciamento de conteúdo estruturado e publicação editorial escalável.",
    },
    date: { en: "2015 — present", pt: "2015 — atual" },
  },
  {
    href: "https://maismulheres.tech/",
    external: true,
    image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQEVNBkYmOxj7g/articleshare-shrink_800/articleshare-shrink_800/0/1711459347604?e=2147483647&v=beta&t=rlEHuN4N5-3mJmKM5P7iKxkeb2EqjjB86g_pKYmuW_0",
    imageAlt: {
      en: "Mais Mulheres em Tech learning platform",
      pt: "Plataforma de aprendizagem Mais Mulheres em Tech",
    },
    tag: { en: "Education platform", pt: "Plataforma educacional" },
    title: { en: "Mais Mulheres em Tech", pt: "Mais Mulheres em Tech" },
    excerpt: {
      en: "Customization of a learning platform supporting course discovery, enrollment, learning journeys, and certificate issuance for more than 125,000 active subscribers.",
      pt: "Customização de uma plataforma de aprendizagem com descoberta de cursos, matrículas, jornadas de aprendizagem e emissão de certificados para mais de 125 mil assinantes ativos.",
    },
    date: { en: "2021 — present", pt: "2021 — atual" },
  },
];
