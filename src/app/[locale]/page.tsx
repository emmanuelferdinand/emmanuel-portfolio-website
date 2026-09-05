import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <div>{t("title")}</div>
    </main>
  );
}
