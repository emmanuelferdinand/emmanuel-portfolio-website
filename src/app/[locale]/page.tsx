import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <ThemeToggle />
      <div>{t("title")}</div>
    </main>
  );
}
