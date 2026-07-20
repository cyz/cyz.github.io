"use client";

import { useEffect } from "react";

// Keeps <html lang> in sync with the active locale for statically exported
// pages (the root layout renders a default lang at build time).
export function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
