import type { EducationEntry, LabeledItem } from "@/types/content";

export const education: EducationEntry = {
  institution: { en: "Asia University, Taiwan" },
  degree: { en: "Computer Science and Information Engineering" },
  start: "2021-09",
  end: "2025-06",
  highlights: {
    en: [
      "Graduated with a 4.3/4.3 GPA and multiple scholarships while managing part-time jobs and organizational leadership roles.",
      "Top 5% of the department, specializing in machine learning, cloud computing, and data analysis and visualization.",
    ],
  },
};

export const languages: LabeledItem[] = [
  { id: "indonesian", name: { en: "Indonesian" } },
  { id: "english", name: { en: "English" }, detail: { en: "TOEIC 985/990" } },
  { id: "chinese", name: { en: "Chinese" } },
];

export const certifications: LabeledItem[] = [
  {
    id: "aws-ccp",
    name: { en: "AWS Certified Cloud Practitioner" },
    detail: { en: "Amazon Web Services" },
  },
];
