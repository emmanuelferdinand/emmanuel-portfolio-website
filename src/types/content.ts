import type { Locale } from "next-intl";

// Every prose field is keyed by locale, so adding a locale in routing.ts turns untranslated fields into a type error.
type Localized<T = string> = Record<Locale, T>;

export interface Profile {
  name: string;
  headline: Localized;
  location: Localized;
  summary: Localized;
}

// Dates are YYYY-MM and a null end means present.
export interface ExperienceEntry {
  id: string;
  title: Localized;
  organization: string;
  organizationLocalName?: string;
  start: string;
  end: string | null;
  highlights: Localized<string[]>;
  tags: string[];
}

type SkillGroupId = "frontend" | "backend" | "data" | "devops" | "other";

export interface SkillGroup {
  id: SkillGroupId;
  skills: string[];
}

export interface WorkflowStep {
  id: string;
  title: Localized;
  detail: Localized;
}

export interface EducationEntry {
  institution: Localized;
  degree: Localized;
  start: string;
  end: string;
  highlights: Localized<string[]>;
}

export interface Project {
  title: Localized;
  highlights: Localized<string[]>;
  tags: string[];
}

export interface ContactHeadline {
  prefix: string;
  rotatingWords: readonly string[];
  suffix: string;
}

// Languages, certifications and hobbies share this shape.
export interface LabeledItem {
  id: string;
  name: Localized;
  detail?: Localized;
}
