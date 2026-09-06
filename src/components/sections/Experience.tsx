import { useLocale, useTranslations } from "next-intl";
import { experience } from "@/content/experience";
import { DateRange } from "@/components/ui/DateRange";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SplitRow } from "@/components/ui/SplitRow";

export function Experience() {
  const locale = useLocale();
  const t = useTranslations("Sections.experience");

  return (
    <Section id="experience" eyebrow={t("eyebrow")} title={t("title")}>
      <ul className="divide-y divide-stroke">
        {experience.map((entry) => (
          <li key={entry.id} className="reveal">
            <SplitRow
              aside={
                <>
                  <DateRange start={entry.start} end={entry.end} />
                  <p className="mt-1 text-sm">{entry.organization}</p>
                  {entry.organizationLocalName && (
                    <p className="mt-1 text-sm text-muted">{entry.organizationLocalName}</p>
                  )}
                </>
              }
            >
              <h3 className="text-xl font-medium">{entry.title[locale]}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {entry.highlights[locale].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li key={tag}>
                    <Pill>{tag}</Pill>
                  </li>
                ))}
              </ul>
            </SplitRow>
          </li>
        ))}
      </ul>
    </Section>
  );
}
