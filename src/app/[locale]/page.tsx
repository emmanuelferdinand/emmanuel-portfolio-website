import { Section } from "@/components/ui/Section";
import { sectionIds } from "@/lib/sections";

export default function HomePage() {
  return sectionIds.map((id) => (
    <Section key={id} id={id} eyebrow="Step 10" title={id}>
      <div className="h-96" />
    </Section>
  ));
}
