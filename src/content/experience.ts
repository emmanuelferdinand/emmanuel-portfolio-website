import type { ExperienceEntry } from "@/types/content";

export const experience: readonly ExperienceEntry[] = [
  {
    id: "heagle",
    title: { en: "Software Engineer" },
    organization: "Heagle Information Integration Inc.",
    organizationLocalName: "黑棠資訊整合股份有限公司",
    start: "2025-12",
    end: null,
    highlights: {
      en: [
        "Develop and maintain client-facing systems, including on-site deployments and production issue resolution.",
        "Rewrite the frontend from Angular to React and refactor backend API logic for reliability.",
        "Author API documentation as the team's standard integration reference.",
        "Build the CI/CD pipeline with unit testing and code analysis to standardize the team's workflow.",
        "Configure AI agent systems, including skill definitions and agent behavior.",
      ],
    },
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "REST API",
      "CI/CD",
      "Nginx",
      "Forgejo",
      "MySQL",
      "Liquibase",
      "PostgreSQL",
      "AI Agents",
    ],
  },
  {
    id: "rapixus",
    title: { en: "Field Application Engineer Intern" },
    organization: "Rapixus Inc.",
    organizationLocalName: "瑞思資訊股份有限公司",
    start: "2024-12",
    end: "2025-06",
    highlights: {
      en: [
        "Helped implement Government Configuration Baseline (GCB), IT asset management and cybersecurity controls with the Vulnerability Alert and Notification System (VANS).",
        "Troubleshot Linux package issues by reproducing bugs and researching fixes.",
        "Translated and maintained technical documentation in Chinese and English.",
      ],
    },
    tags: ["Linux", "Windows", "Active Directory", "Virtual Machines", "Cybersecurity"],
  },
];
