import type { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    id: "heagle",
    title: { en: "Software Engineer" },
    organization: { en: "Heagle Information Integration Inc. (黑棠資訊整合股份有限公司)" },
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
      "REST API",
      "CI/CD",
      "Nginx",
      "Forgejo",
      "MySQL",
      "Liquibase",
      "AI Agents",
    ],
  },
  {
    id: "rapixus",
    title: { en: "Field Application Engineer Intern" },
    organization: { en: "Rapixus Inc. (瑞思資訊股份有限公司)" },
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
  {
    id: "supply-chain-dapp",
    title: { en: "Decentralized Supply Chain Management System" },
    organization: { en: "Graduation project · Asia University" },
    start: "2024-09",
    end: "2025-06",
    highlights: {
      en: [
        "Built a decentralized supply-chain marketplace with a team of three on Solidity smart contracts, React and Web3.js.",
        "Implemented the full product lifecycle: listing, purchasing and on-chain payment settlement.",
      ],
    },
    tags: ["Solidity", "React", "Web3.js", "Truffle", "Ganache"],
  },
];
