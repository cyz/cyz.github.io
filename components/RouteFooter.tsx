"use client";

import { usePathname } from "@/i18n/navigation";
import { Footer } from "./Footer";

export function RouteFooter() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "");

  if (
    normalizedPathname !== "/articles" &&
    normalizedPathname !== "/projects"
  ) {
    return null;
  }

  return <Footer />;
}
