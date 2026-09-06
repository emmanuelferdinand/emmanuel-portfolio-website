// Single source for section ids: nav links, scroll spy, and each <Section id>
export const sectionIds = [
  "experience",
  "tech-stack",
  "workflow",
  "education",
  "hobby",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
