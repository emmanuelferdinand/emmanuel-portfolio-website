import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="pb-6">
      <Container>
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-stroke bg-surface px-6 py-4 sm:flex-row sm:justify-between">
          <p className="text-center text-[0.65rem] tracking-widest text-muted uppercase sm:text-xs">
            {t("copyright", { year: currentYear, name: profile.name })}
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
