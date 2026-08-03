import type { ContentCard } from "./types";

/**
 * HOW TO ADD AN ARTICLE
 * Add an entry to this array. Each text field is bilingual ({ en, pt }).
 *   - href: link to the full article (external blog, Substack, etc.)
 *   - image: optional cover image path in /public (omit to keep the gradient)
 *   - tag: short category label
 *   - title / excerpt: title and short summary
 *   - date: publish date
 *   - external: true to open in a new tab
 */
export const articles: ContentCard[] = [
  {
    href: "https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-july-2026.jpeg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, July 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, July 2026 releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, July 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, July 2026 releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from July 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from July 2026.",
    },
    date: { en: "Jul 30, 2026", pt: "Jul 30, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/como-construir-uma-carreira-com-inten%C3%A7%C3%A3o-aprendizados-cynthia-zanoni-mokce/",
    external: true,
    image: "/assets/images/hacking-de-carreira.png",
    imageAlt: {
      en: "How to Build a Career with Intention: Lessons from Hacking de Carreira",
      pt: "Como construir uma carreira com intenção: aprendizados do Hacking de Carreira",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "How to Build a Career with Intention: Lessons from Hacking de Carreira",
      pt: "Como construir uma carreira com intenção: aprendizados do Hacking de Carreira",
    },
    excerpt: {
      en: "Reflections and practical lessons for making more intentional career decisions.",
      pt: "Reflexões e aprendizados práticos para tomar decisões de carreira com mais intenção.",
    },
    date: { en: "Jul 29, 2026", pt: "29 jul. 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/how-keep-up-ai-without-falling-behind-vs-code-cvysc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "How to Keep Up With AI Without Falling Behind",
      pt: "How to Keep Up With AI Without Falling Behind",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "How to Keep Up With AI Without Falling Behind",
      pt: "How to Keep Up With AI Without Falling Behind",
    },
    excerpt: {
      en: "A co-authored guide to staying current with AI while building durable skills and sustainable learning habits.",
      pt: "A co-authored guide to staying current with AI while building durable skills and sustainable learning habits.",
    },
    date: { en: "Jul 21, 2026", pt: "Jul 21, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/trabalhando-com-custom-instructions-e-prompts-vs-code-cynthia-zanoni-ckn2e/",
    external: true,
    image: "/assets/images/custom-instructions-prompts-vscode.png",
    imageAlt: {
      en: "Working with Custom Instructions and Prompts in VS Code",
      pt: "Trabalhando com Custom Instructions e Prompts no VS Code",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "Working with Custom Instructions and Prompts in VS Code",
      pt: "Trabalhando com Custom Instructions e Prompts no VS Code",
    },
    excerpt: {
      en: "Learn how custom instructions and prompts can make AI-assisted development in VS Code more effective.",
      pt: "Aprenda como custom instructions e prompts podem tornar o desenvolvimento com IA no VS Code mais eficaz.",
    },
    date: { en: "Jul 16, 2026", pt: "16 jul. 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-07-08-github-copilot-in-visual-studio-code-june-2026-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-june-2026.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, June 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, June 2026 releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, June 2026 releases",
      pt: "GitHub Copilot in Visual Studio Code, June 2026 releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from June 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from June 2026.",
    },
    date: { en: "Jul 8, 2026", pt: "Jul 8, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/extending-your-agents-vs-code-vs-code-wyr2c/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Extending Your Agents in VS Code",
      pt: "Extending Your Agents in VS Code",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Extending Your Agents in VS Code",
      pt: "Extending Your Agents in VS Code",
    },
    excerpt: {
      en: "A co-authored introduction to extending AI agents in Visual Studio Code with custom capabilities and tools.",
      pt: "A co-authored introduction to extending AI agents in Visual Studio Code with custom capabilities and tools.",
    },
    date: { en: "Jul 7, 2026", pt: "Jul 7, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/como-escalar-boas-pr%C3%A1ticas-de-desenvolvimento-com-ia-cynthia-zanoni-rxauf/",
    external: true,
    image: "/assets/images/escalar-boas-praticas-ia.png",
    imageAlt: {
      en: "How to Scale AI Development Best Practices",
      pt: "Como Escalar Boas Práticas de Desenvolvimento Com IA",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "How to Scale AI Development Best Practices",
      pt: "Como Escalar Boas Práticas de Desenvolvimento Com IA",
    },
    excerpt: {
      en: "Strategies for turning effective AI development practices into shared standards across teams.",
      pt: "Estratégias para transformar boas práticas de desenvolvimento com IA em padrões compartilhados entre equipes.",
    },
    date: { en: "Jul 1, 2026", pt: "1 jul. 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/o-novo-papel-do-dev-de-escrever-c%C3%B3digo-manipular-contexto-zanoni-oxlme/",
    external: true,
    image: "/assets/images/novo-papel-dev-contexto.png",
    imageAlt: {
      en: "The Developer's New Role: From Writing Code to Managing Context",
      pt: "O novo papel do dev: de escrever código a manipular contexto",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "The Developer's New Role: From Writing Code to Managing Context",
      pt: "O novo papel do dev: de escrever código a manipular contexto",
    },
    excerpt: {
      en: "How AI is shifting software development from writing every line to intentionally shaping context.",
      pt: "Como a IA está mudando o desenvolvimento de escrever cada linha para construir contexto com intenção.",
    },
    date: { en: "Jun 24, 2026", pt: "24 jun. 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/copilot-hooks-preview-make-agent-play-your-rules-vs-code-vcpsf/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
      pt: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
      pt: "Copilot Hooks (Preview): Make the Agent Play by Your Rules",
    },
    excerpt: {
      en: "Learn how Copilot Hooks let you run custom commands at key points in an agent workflow.",
      pt: "Learn how Copilot Hooks let you run custom commands at key points in an agent workflow.",
    },
    date: { en: "Jun 16, 2026", pt: "Jun 16, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-may-2026.jpeg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, May releases",
      pt: "GitHub Copilot in Visual Studio Code, May releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, May releases",
      pt: "GitHub Copilot in Visual Studio Code, May releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from May 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from May 2026.",
    },
    date: { en: "Jun 3, 2026", pt: "Jun 3, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/custom-instructions-more-powerful-than-you-think-vs-code-pbmbc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Custom Instructions Are More Powerful Than You Think",
      pt: "Custom Instructions Are More Powerful Than You Think",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Custom Instructions Are More Powerful Than You Think",
      pt: "Custom Instructions Are More Powerful Than You Think",
    },
    excerpt: {
      en: "Discover how custom instructions can shape more consistent and effective Copilot responses for your projects.",
      pt: "Discover how custom instructions can shape more consistent and effective Copilot responses for your projects.",
    },
    date: { en: "May 19, 2026", pt: "May 19, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-05-06-github-copilot-in-visual-studio-code-april-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-april-2026.png",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, April releases",
      pt: "GitHub Copilot in Visual Studio Code, April releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, April releases",
      pt: "GitHub Copilot in Visual Studio Code, April releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from April 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from April 2026.",
    },
    date: { en: "May 6, 2026", pt: "May 6, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/your-teams-best-practices-shouldnt-live-pr-comments-vs-code-syvdc/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Your Team's Best Practices Shouldn't Live in PR Comments",
      pt: "Your Team's Best Practices Shouldn't Live in PR Comments",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Your Team's Best Practices Shouldn't Live in PR Comments",
      pt: "Your Team's Best Practices Shouldn't Live in PR Comments",
    },
    excerpt: {
      en: "Turn recurring pull request feedback into shared guidance that Copilot can apply across your team's work.",
      pt: "Turn recurring pull request feedback into shared guidance that Copilot can apply across your team's work.",
    },
    date: { en: "May 5, 2026", pt: "May 5, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/ask-copilot-your-codebase-just-open-file-vs-code-wea2c/",
    external: true,
    image: "/assets/images/copilot-vscode-linkedin.png",
    imageAlt: {
      en: "Ask Copilot About Your Codebase, Not Just Your Open File",
      pt: "Ask Copilot About Your Codebase, Not Just Your Open File",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Ask Copilot About Your Codebase, Not Just Your Open File",
      pt: "Ask Copilot About Your Codebase, Not Just Your Open File",
    },
    excerpt: {
      en: "Learn how to give Copilot broader codebase context for answers that go beyond the file currently open.",
      pt: "Learn how to give Copilot broader codebase context for answers that go beyond the file currently open.",
    },
    date: { en: "Apr 21, 2026", pt: "Apr 21, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-04-08-github-copilot-in-visual-studio-code-march-releases/",
    external: true,
    image: "/assets/images/copilot-vscode-march-2026.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code, March releases",
      pt: "GitHub Copilot in Visual Studio Code, March releases",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code, March releases",
      pt: "GitHub Copilot in Visual Studio Code, March releases",
    },
    excerpt: {
      en: "Explore the latest GitHub Copilot updates in Visual Studio Code from March 2026.",
      pt: "Explore the latest GitHub Copilot updates in Visual Studio Code from March 2026.",
    },
    date: { en: "Apr 8, 2026", pt: "Apr 8, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/aprender-programar-nunca-foi-sobre-c%C3%B3digo-cynthia-zanoni-6vvvf/",
    external: true,
    image: "/assets/images/aprender-programar.png",
    imageAlt: {
      en: "Learning to Program Was Never About Code",
      pt: "Aprender a programar nunca foi sobre código",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "Learning to Program Was Never About Code",
      pt: "Aprender a programar nunca foi sobre código",
    },
    excerpt: {
      en: "A reflection on problem-solving, persistence, and the deeper skills behind learning to program.",
      pt: "Uma reflexão sobre resolução de problemas, persistência e as habilidades por trás de aprender a programar.",
    },
    date: { en: "Mar 17, 2026", pt: "17 mar. 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-03-06-github-copilot-in-visual-studio-code-v1-110-february-release/",
    external: true,
    image: "/assets/images/github-new-releases.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code v1.110, February release",
      pt: "GitHub Copilot in Visual Studio Code v1.110, February release",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code v1.110 - February release",
      pt: "GitHub Copilot in Visual Studio Code v1.110 - February release",
    },
    excerpt: {
      en: "Explore the GitHub Copilot updates in Visual Studio Code from February 2026.",
      pt: "Explore the GitHub Copilot updates in Visual Studio Code from February 2026.",
    },
    date: { en: "Mar 6, 2026", pt: "Mar 6, 2026" },
  },
  {
    href: "https://code.visualstudio.com/blogs/2026/03/05/making-agents-practical-for-real-world-development",
    external: true,
    image: "/assets/images/making-agents-practical.png",
    imageAlt: {
      en: "Making agents practical for real-world development",
      pt: "Making agents practical for real-world development",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "Making agents practical for real-world development",
      pt: "Making agents practical for real-world development",
    },
    excerpt: {
      en: "Explore how coding agents are becoming practical tools for real-world software development workflows.",
      pt: "Explore how coding agents are becoming practical tools for real-world software development workflows.",
    },
    date: { en: "Mar 5, 2026", pt: "Mar 5, 2026" },
  },
  {
    href: "https://github.blog/changelog/2026-02-04-github-copilot-in-visual-studio-code-v1-109-january-release/",
    external: true,
    image: "/assets/images/github-new-releases.jpg",
    imageAlt: {
      en: "GitHub Copilot in Visual Studio Code v1.109, January release",
      pt: "GitHub Copilot in Visual Studio Code v1.109, January release",
    },
    tag: { en: "English", pt: "English" },
    title: {
      en: "GitHub Copilot in Visual Studio Code v1.109 - January release",
      pt: "GitHub Copilot in Visual Studio Code v1.109 - January release",
    },
    excerpt: {
      en: "Explore the GitHub Copilot updates in Visual Studio Code from January 2026.",
      pt: "Explore the GitHub Copilot updates in Visual Studio Code from January 2026.",
    },
    date: { en: "Feb 4, 2026", pt: "Feb 4, 2026" },
  },
  {
    href: "https://www.linkedin.com/pulse/comunidade-tecnologia-e-impacto-cynthia-zanoni-dhlye/",
    external: true,
    image: "/assets/images/comunidade-tecnologia-impacto.jpg",
    imageAlt: {
      en: "Community, Technology, and Impact",
      pt: "Comunidade, tecnologia e impacto",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "Community, Technology, and Impact ✨",
      pt: "Comunidade, tecnologia e impacto ✨",
    },
    excerpt: {
      en: "A reflection on how technology communities create connections, opportunities, and meaningful impact.",
      pt: "Uma reflexão sobre como comunidades de tecnologia criam conexões, oportunidades e impacto significativo.",
    },
    date: { en: "Dec 17, 2025", pt: "17 dez. 2025" },
  },
  {
    href: "https://www.linkedin.com/pulse/influ%C3%AAncia-dos-h%C3%A1bitos-na-carreira-cynthia-zanoni-usovf/",
    external: true,
    image: "/assets/images/habitos-na-carreira.png",
    imageAlt: {
      en: "The Influence of Habits on Your Career",
      pt: "A influência dos hábitos na carreira",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "The Influence of Habits on Your Career",
      pt: "A influência dos hábitos na carreira",
    },
    excerpt: {
      en: "How everyday habits shape professional growth and long-term career outcomes.",
      pt: "Como os hábitos cotidianos moldam o crescimento profissional e os resultados da carreira no longo prazo.",
    },
    date: { en: "Jul 23, 2025", pt: "23 jul. 2025" },
  },
  {
    href: "https://www.linkedin.com/pulse/10-carreiras-em-alta-setor-de-ti-para-2025-cynthia-zanoni-vrzlf/",
    external: true,
    image: "/assets/images/carreiras-ti-2025.png",
    imageAlt: {
      en: "10 High-Growth Careers in IT for 2025",
      pt: "10 Carreiras em Alta no Setor de TI para 2025",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "10 High-Growth Careers in IT for 2025",
      pt: "10 Carreiras em Alta no Setor de TI para 2025",
    },
    excerpt: {
      en: "Explore ten technology careers with strong demand and growth potential in 2025.",
      pt: "Conheça dez carreiras de tecnologia com alta demanda e potencial de crescimento em 2025.",
    },
    date: { en: "Jan 8, 2025", pt: "8 jan. 2025" },
  },
  {
    href: "https://www.linkedin.com/pulse/os-3-erros-fatais-que-podem-travar-sua-carreira-tech-em-zanoni-hqr0f/",
    external: true,
    image: "/assets/images/erros-carreira-tech-2025.png",
    imageAlt: {
      en: "3 Critical Mistakes That Can Stall Your Tech Career in 2025",
      pt: "Os 3 erros fatais que podem travar sua carreira tech em 2025",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "3 Critical Mistakes That Can Stall Your Tech Career in 2025",
      pt: "Os 3 erros fatais que podem travar sua carreira tech em 2025",
    },
    excerpt: {
      en: "Three common mistakes that can limit growth and how to avoid them in your technology career.",
      pt: "Três erros comuns que podem limitar seu crescimento e como evitá-los na carreira em tecnologia.",
    },
    date: { en: "Dec 17, 2024", pt: "17 dez. 2024" },
  },
  {
    href: "https://www.linkedin.com/pulse/5-novidades-anunciadas-github-universe-2024-cynthia-zanoni-eqnwf/",
    external: true,
    image: "/assets/images/github-universe-2024.jpg",
    imageAlt: {
      en: "5 Announcements from GitHub Universe 2024",
      pt: "5 novidades anunciadas no GitHub Universe 2024",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "5 Announcements from GitHub Universe 2024 😺",
      pt: "5 novidades anunciadas no GitHub Universe 2024 😺",
    },
    excerpt: {
      en: "Five noteworthy product and platform announcements from GitHub Universe 2024.",
      pt: "Cinco novidades de produtos e plataforma apresentadas no GitHub Universe 2024.",
    },
    date: { en: "Nov 5, 2024", pt: "5 nov. 2024" },
  },
  {
    href: "https://www.linkedin.com/pulse/hey-dev-voc%C3%AA-tem-medo-do-github-cynthia-zanoni-nrngf/",
    external: true,
    image: "/assets/images/medo-do-github.png",
    imageAlt: {
      en: "Hey Dev, Are You Afraid of GitHub?",
      pt: "Hey dev, você tem medo do GitHub?",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "Hey Dev, Are You Afraid of GitHub? 🐱👻",
      pt: "Hey dev, você tem medo do GitHub? 🐱👻",
    },
    excerpt: {
      en: "A friendly guide to overcoming uncertainty and getting more comfortable with GitHub.",
      pt: "Um guia para superar inseguranças e ganhar mais confiança ao usar o GitHub.",
    },
    date: { en: "Sep 12, 2024", pt: "12 set. 2024" },
  },
  {
    href: "https://www.linkedin.com/pulse/o-que-voc%C3%AA-faz-com-20-do-seu-tempo-cynthia-zanoni-foytf/",
    external: true,
    image: "/assets/images/vinte-por-cento-tempo.png",
    imageAlt: {
      en: "What Do You Do with 20% of Your Time?",
      pt: "O que você faz com 20% do seu tempo?",
    },
    tag: { en: "Portuguese", pt: "Português" },
    title: {
      en: "What Do You Do with 20% of Your Time?",
      pt: "O que você faz com 20% do seu tempo?",
    },
    excerpt: {
      en: "How dedicating part of your time to exploration can support learning, creativity, and career growth.",
      pt: "Como dedicar parte do tempo à exploração pode fortalecer aprendizado, criatividade e crescimento profissional.",
    },
    date: { en: "Jun 26, 2024", pt: "26 jun. 2024" },
  },
];
