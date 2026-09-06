import { Clapperboard, Coffee, Headphones } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { hobbies } from "@/content/hobbies";
import { BasketballIcon } from "@/components/icons/BasketballIcon";
import { Section } from "@/components/ui/Section";

type HobbyIcon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const hobbyIcons: Record<string, HobbyIcon> = {
  coffee: Coffee,
  basketball: BasketballIcon,
  movies: Clapperboard,
  music: Headphones,
};

export function Hobbies() {
  const locale = useLocale();
  const t = useTranslations("Sections.hobby");

  return (
    <Section id="hobby" eyebrow={t("eyebrow")} title={t("title")}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => {
          const Icon = hobbyIcons[hobby.id];

          return (
            <li
              key={hobby.id}
              className="group flex reveal flex-col items-center justify-center gap-8 rounded-2xl border border-stroke bg-surface p-8 text-center transition hover:-translate-y-1 hover:border-stroke-strong md:min-h-104"
            >
              {Icon && <Icon strokeWidth={1.25} className="size-10 text-accent" />}
              <div>
                <h3 className="font-display text-2xl">{hobby.name[locale]}</h3>
                <p className="mt-3 text-sm text-muted">{hobby.detail?.[locale]}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
