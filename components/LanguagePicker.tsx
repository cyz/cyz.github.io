"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const codes: Record<Locale, string> = { en: "EN", pt: "PT" };

export function LanguagePicker() {
  const t = useTranslations("LanguagePicker");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Persist the active locale so the root redirect can honor it.
  useEffect(() => {
    try {
      localStorage.setItem("lang", locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function select(next: Locale) {
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* ignore */
    }
    setOpen(false);
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  }

  const labels: Record<Locale, string> = {
    en: t("english"),
    pt: t("portuguese"),
  };

  return (
    <div className="lang-picker" ref={pickerRef}>
      <button
        className="icon-button lang-button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        title={t("title")}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="lang-current">{codes[locale]}</span>
      </button>
      <ul className="lang-menu" role="listbox" aria-label={t("title")} hidden={!open}>
        {routing.locales.map((code) => (
          <li
            key={code}
            role="option"
            aria-selected={code === locale}
            onClick={() => select(code)}
          >
            {labels[code]}
          </li>
        ))}
      </ul>
    </div>
  );
}
