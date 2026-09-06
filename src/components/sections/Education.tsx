import { useLocale, useTranslations } from "next-intl";
import { certifications, education, graduationProject, languages } from "@/content/education";
import type { LabeledItem } from "@/types/content";
import { DateRange } from "@/components/ui/DateRange";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SplitRow } from "@/components/ui/SplitRow";

interface LabeledListProps {
  items: readonly LabeledItem[];
}

function LabeledList({ items }: Readonly<LabeledListProps>) {
  const locale = useLocale();

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <Pill>
            {item.name[locale]}
            {item.detail && <span className="ml-2 text-muted">{item.detail[locale]}</span>}
          </Pill>
        </li>
      ))}
    </ul>
  );
}

export function Education() {
  const locale = useLocale();
  const t = useTranslations("Sections.education");
  const label = useTranslations("Education");

  return (
    <Section id="education" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="divide-y divide-stroke">
        <SplitRow
          aside={
            <>
              <DateRange start={education.start} end={education.end} />
              <p className="mt-1 text-sm">{education.institution[locale]}</p>
            </>
          }
        >
          <h3 className="text-xl font-medium">{education.degree[locale]}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {education.highlights[locale].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </SplitRow>
        <SplitRow aside={<h3 className="text-sm font-medium">{label("graduationProject")}</h3>}>
          <p className="text-xl font-medium">{graduationProject.title[locale]}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {graduationProject.highlights[locale].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {graduationProject.tags.map((tag) => (
              <li key={tag}>
                <Pill>{tag}</Pill>
              </li>
            ))}
          </ul>
        </SplitRow>
        <SplitRow aside={<h3 className="text-sm font-medium">{label("languages")}</h3>}>
          <LabeledList items={languages} />
        </SplitRow>
        <SplitRow aside={<h3 className="text-sm font-medium">{label("certifications")}</h3>}>
          <LabeledList items={certifications} />
        </SplitRow>
      </div>
    </Section>
  );
}
