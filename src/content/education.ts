import type { EducationEntry, LabeledItem, Project } from "@/types/content";

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

export const graduationProject: Project = {
  title: { en: "Decentralized Supply Chain Management System" },
  highlights: {
    en: [
      "Built a decentralized supply-chain marketplace with a team of three on Solidity smart contracts, React and Web3.js.",
      "Implemented the full product lifecycle: listing, purchasing and on-chain payment settlement.",
    ],
  },
  tags: ["Solidity", "React", "Web3.js", "Truffle", "Ganache"],
};

export const languages: readonly LabeledItem[] = [
  { id: "indonesian", name: { en: "Indonesian" }, detail: { en: "Native" } },
  { id: "english", name: { en: "English" }, detail: { en: "TOEIC 985/990" } },
  { id: "chinese", name: { en: "Chinese" } },
];

export const certifications: readonly LabeledItem[] = [
  {
    id: "aws-ccp",
    name: { en: "AWS Certified Cloud Practitioner" },
    detail: { en: "Amazon Web Services" },
  },
];
