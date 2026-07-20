export type Localized = {
  en: string;
  pt: string;
};

export type ContentCard = {
  /** Link to the full article/project. Use "#" as a placeholder. */
  href: string;
  /** Optional cover image path (in /public). Omit to keep the gradient. */
  image?: string;
  imageAlt?: Localized;
  tag: Localized;
  title: Localized;
  excerpt: Localized;
  /** Publish date (articles) or year/status (projects). */
  date: Localized;
  /** Set to true for links that should open in a new tab. */
  external?: boolean;
};
