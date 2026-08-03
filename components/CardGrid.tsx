import Image from "next/image";
import type { ContentCard } from "@/content/types";
import type { Locale } from "@/i18n/routing";

type Props = {
  items: ContentCard[];
  locale: Locale;
  label: string;
  emptyMessage: string;
};

export function CardGrid({ items, locale, label, emptyMessage }: Props) {
  if (!items.length) {
    return (
      <section className="card-grid" aria-label={label}>
        <p className="card-empty">{emptyMessage}</p>
      </section>
    );
  }

  return (
    <section className="card-grid" aria-label={label}>
      {items.map((item, i) => {
        const external = item.external ?? /^https?:/i.test(item.href);
        const tagKey = item.tag.en.toLowerCase().replaceAll(" ", "-");
        return (
          <a
            key={`${item.href}-${i}`}
            className="card"
            href={item.href}
            {...(external
              ? { target: "_blank", rel: "noopener" }
              : {})}
          >
            <div className="card-media">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt?.[locale] ?? item.title[locale]}
                  fill
                  sizes="(max-width: 720px) 100vw, 19rem"
                  style={{ objectFit: "cover" }}
                />
              ) : null}
            </div>
            <div className="card-body">
              <span className="card-tag" data-tag={tagKey}>
                {item.tag[locale]}
              </span>
              <h2 className="card-title">{item.title[locale]}</h2>
              <p className="card-excerpt">{item.excerpt[locale]}</p>
              <span className="card-date">{item.date[locale]}</span>
            </div>
          </a>
        );
      })}
    </section>
  );
}
