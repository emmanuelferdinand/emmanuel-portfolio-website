"use client";

import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "next-intl";
import { Link } from "@/i18n/navigation";

const localeLabel: Record<Locale, string> = {
  en: "EN",
  "zh-TW": "中",
};

// Next would reset the scroll itself, so scroll={false} leaves this the only thing that moves the page.
const scrollToHero = () => {
  if (window.scrollY > 0) window.scrollTo({ top: 0 });
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const nextLocale: Locale = locale === "en" ? "zh-TW" : "en";

  return (
    <Link
      href="/"
      locale={nextLocale}
      scroll={false}
      onClick={scrollToHero}
      className="inline-flex size-11 items-center justify-center rounded-full text-sm text-muted transition hover:text-fg"
    >
      {localeLabel[nextLocale]}
      <span className="sr-only">{t("label")}</span>
    </Link>
  );
}
