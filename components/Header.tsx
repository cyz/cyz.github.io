"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguagePicker } from "./LanguagePicker";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  function movePillTo(el: HTMLElement) {
    const pill = pillRef.current;
    if (!pill) return;
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.height = `${el.offsetHeight}px`;
    pill.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
    pill.classList.add("is-active");
  }

  function hidePill() {
    pillRef.current?.classList.remove("is-active");
  }

  const isActive = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={t("homeLabel")}>
        <Image
          src="/assets/images/developer-pulse.svg"
          alt=""
          width={36}
          height={36}
        />
      </Link>
      <nav
        className="nav"
        aria-label={t("primaryLabel")}
        ref={navRef}
        onMouseLeave={hidePill}
        onBlur={(e) => {
          if (!navRef.current?.contains(e.relatedTarget as Node)) hidePill();
        }}
      >
        <span className="nav-pill" aria-hidden="true" ref={pillRef}></span>
        <Link
          href="/projects"
          className={`nav-link${isActive("/projects") ? " is-active" : ""}`}
          aria-current={isActive("/projects") ? "page" : undefined}
          onMouseEnter={(e) => movePillTo(e.currentTarget)}
          onFocus={(e) => movePillTo(e.currentTarget)}
        >
          {t("projects")}
        </Link>
        <Link
          href="/articles"
          className={`nav-link${isActive("/articles") ? " is-active" : ""}`}
          aria-current={isActive("/articles") ? "page" : undefined}
          onMouseEnter={(e) => movePillTo(e.currentTarget)}
          onFocus={(e) => movePillTo(e.currentTarget)}
        >
          {t("articles")}
        </Link>
        <a
          href="https://womakerscode.org/"
          className="nav-link"
          target="_blank"
          rel="noopener"
          onMouseEnter={(e) => movePillTo(e.currentTarget)}
          onFocus={(e) => movePillTo(e.currentTarget)}
        >
          {t("womakerscode")}
        </a>
      </nav>
      <div className="header-actions">
        <LanguagePicker />
        <ThemeToggle />
      </div>
    </header>
  );
}
