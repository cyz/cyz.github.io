import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/Header";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { Link } from "@/i18n/navigation";
import messages from "@/messages/en.json";

export default function NotFound() {
  const t = messages.NotFound;
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <SetHtmlLang locale="en" />
      <div className="site">
        <Header />
        <main className="not-found">
          <p className="not-found-code">404</p>
          <h1 className="not-found-title">{t.title}</h1>
          <p className="not-found-message">{t.message}</p>
          <Link className="not-found-link" href="/">
            {t.homeLink}
          </Link>
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
