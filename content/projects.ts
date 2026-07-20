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
  // {
  //   href: "https://womakerscode.org/",
  //   external: true,
  //   tag: { en: "Community", pt: "Comunidade" },
  //   title: { en: "WoMakersCode", pt: "WoMakersCode" },
  //   excerpt: {
  //     en: "A nonprofit helping women start and grow careers in technology.",
  //     pt: "ONG que ajuda mulheres a iniciar e crescer carreiras em tecnologia.",
  //   },
  //   date: { en: "2015 — present", pt: "2015 — atual" },
  // },
];
