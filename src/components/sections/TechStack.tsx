import { useTranslations } from "next-intl";
import { skillGroups } from "@/content/skills";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SplitRow } from "@/components/ui/SplitRow";

export function TechStack() {
  const t = useTranslations("Sections.tech-stack");
  const groupLabel = useTranslations("TechStack.groups");

  return (
    <Section id="tech-stack" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="divide-y divide-stroke">
        {skillGroups.map((group) => (
          <SplitRow
            key={group.id}
            aside={<h3 className="text-sm font-medium">{groupLabel(group.id)}</h3>}
          >
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Pill>{skill}</Pill>
                </li>
              ))}
            </ul>
          </SplitRow>
        ))}
      </div>
    </Section>
  );
}
