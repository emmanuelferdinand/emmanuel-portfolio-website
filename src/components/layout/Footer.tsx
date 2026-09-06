import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/socialLinks";
import { externalLinkProps } from "@/lib/links";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-stroke">
      <Container className="flex flex-col gap-2 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>{t("copyright", { year: new Date().getFullYear().toString(), name: profile.name })}</p>
        <a
          href={socialLinks.repository}
          {...externalLinkProps}
          className="focus-ring hover:text-fg"
        >
          {t("source")}
        </a>
      </Container>
    </footer>
  );
}
