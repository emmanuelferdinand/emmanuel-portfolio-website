import { useLocale, useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

const renderLocation = (chunks: React.ReactNode) => (
  <strong className="font-semibold">{chunks}</strong>
);

export function Hero() {
  const locale = useLocale();
  const t = useTranslations("Hero");

  return (
    <Container className="flex min-h-[calc(100dvh-4rem)] flex-col items-center py-12 text-center md:py-24">
      <div className="my-auto flex flex-col items-center">
        <p className="text-xs tracking-eyebrow text-muted uppercase">{profile.headline[locale]}</p>
        <h1 className="mt-4 font-display text-4xl leading-display tracking-tight text-balance sm:text-5xl md:mt-6 md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-tight text-lg font-light md:mt-6 md:text-2xl">
          {t.rich("intro", { location: profile.location[locale], strong: renderLocation })}
        </p>
        <p className="mt-4 max-w-xl text-sm text-muted md:mt-6 md:text-base">
          {profile.summary[locale]}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10">
          <LinkButton href="#experience">{t("seeExperience")}</LinkButton>
          <LinkButton href="#contact" variant="outline">
            {t("contact")}
          </LinkButton>
        </div>
      </div>
      <p className="flex flex-col items-center gap-3 text-xs tracking-eyebrow text-muted uppercase">
        {t("scroll")}
        <span className="h-8 w-px overflow-hidden bg-stroke-strong">
          <span className="block h-full w-full animate-scroll-cue bg-fg" />
        </span>
      </p>
    </Container>
  );
}
