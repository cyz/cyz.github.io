"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

function fallbackCopy(text: string, onDone: () => void) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "absolute";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    onDone();
  } catch {
    /* nothing else to do */
  }
  document.body.removeChild(area);
}

export function CopyBioButton() {
  const t = useTranslations("Home");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showCopied() {
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  function onClick() {
    const bio = document.getElementById("bio-text");
    if (!bio) return;
    const text = (bio.textContent ?? "").replace(/\s+/g, " ").trim();
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(showCopied, () =>
        fallbackCopy(text, showCopied),
      );
    } else {
      fallbackCopy(text, showCopied);
    }
  }

  return (
    <button
      className={`link-action${copied ? " is-copied" : ""}`}
      type="button"
      aria-label={t("copyBioLabel")}
      onClick={onClick}
    >
      <svg
        className="icon"
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
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span className="copy-btn-label">{copied ? t("copied") : t("copyBio")}</span>
    </button>
  );
}
