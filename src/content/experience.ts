import type { ExperienceEntry } from "@/types/content";

export const experience: readonly ExperienceEntry[] = [
  {
    id: "heagle",
    title: {
      en: "Software Engineer",
      "zh-TW": "軟體工程師",
    },
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
      "zh-TW": [
        "開發與維護面對客戶的系統，包含現場部署與正式環境問題排除。",
        "將前端由 Angular 重寫為 React，並重構後端 API 邏輯以提升穩定性。",
        "撰寫 API 文件，作為團隊標準的介接參考。",
        "建置整合單元測試與程式碼分析的 CI/CD，統一團隊開發流程。",
        "設定 AI agent 系統，包含技能定義與 agent 行為。",
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
    title: {
      en: "Field Application Engineer Intern",
      "zh-TW": "現場應用工程師實習生",
    },
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
      "zh-TW": [
        "協助導入政府組態基準（GCB）、資訊資產管理，以及透過資安弱點通報系統（VANS）建立資安控管。",
        "重現問題並研究解法，排除 Linux 套件的相關問題。",
        "翻譯並維護中英文技術文件。",
      ],
    },
    tags: ["Linux", "Windows", "Active Directory", "Virtual Machines", "Cybersecurity"],
  },
];
