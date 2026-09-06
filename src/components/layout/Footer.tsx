import { useTranslations } from "next-intl";
import { externalLinkProps } from "@/lib/links";
import { Container } from "@/components/ui/Container";

const REPOSITORY_URL = "https://github.com/emmanuelferdinand/emmanuel-portfolio-website";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-stroke">
      <Container className="flex flex-col gap-2 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Emmanuel Ferdinand Anggawirja</p>
        <a href={REPOSITORY_URL} {...externalLinkProps} className="focus-ring hover:text-fg">
          {t("source")}
        </a>
      </Container>
    </footer>
  );
}
