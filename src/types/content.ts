import type { Locale } from "next-intl";

// Every prose field is keyed by locale, so adding a locale in routing.ts turns untranslated fields into a type error.
export type Localized<T = string> = Record<Locale, T>;

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
  organization: Localized;
  start: string;
  end: string | null;
  highlights: Localized<string[]>;
  tags: string[];
}

export type SkillGroupId = "frontend" | "backend" | "data" | "devops" | "other";

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

// Languages, certifications and hobbies share this shape.
export interface LabeledItem {
  id: string;
  name: Localized;
  detail?: Localized;
}
