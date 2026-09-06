import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { locale as getLangAttribute } from "next/root-params";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import { profile } from "@/content/profile";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { applyStoredThemeScript } from "@/lib/theme";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    metadataBase: new URL(SITE_URL),
    title: `${profile.name} · ${profile.headline[locale]}`,
    description: profile.metaDescription[locale],
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: { en: "/", "zh-TW": "/zh-TW" },
    },
    openGraph: {
      type: "profile",
      title: profile.name,
      description: profile.metaDescription[locale],
      siteName: profile.name,
      locale,
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const lang = await getLangAttribute();
  const t = await getTranslations("Layout");

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} scroll-pt-20 scroll-smooth motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: applyStoredThemeScript }} />
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
          >
            {t("skipToContent")}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
