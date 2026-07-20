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
  // {
  //   href: "https://example.com/my-article",
  //   external: true,
  //   tag: { en: "AI", pt: "IA" },
  //   title: { en: "Article title", pt: "Título do artigo" },
  //   excerpt: {
  //     en: "A short teaser that summarizes the article.",
  //     pt: "Uma chamada curta que resume o artigo.",
  //   },
  //   date: { en: "Jul 20, 2026", pt: "20 de jul. de 2026" },
  // },
];
