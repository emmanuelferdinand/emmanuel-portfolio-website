import type { WorkflowStep } from "@/types/content";

export const workflowSteps: readonly WorkflowStep[] = [
  {
    id: "requirement",
    title: { en: "Requirement", "zh-TW": "需求釐清" },
    detail: {
      en: "Clarify the goal, the constraints and what done looks like before writing code.",
      "zh-TW": "動手前先確認目標、限制，以及完成的定義。",
    },
  },
  {
    id: "design",
    title: { en: "Design", "zh-TW": "設計" },
    detail: {
      en: "Sketch the data model, UI components, and API shape.",
      "zh-TW": "先勾勒資料模型、UI 元件與 API 結構。",
    },
  },
  {
    id: "branch",
    title: { en: "Feature branch", "zh-TW": "功能分支" },
    detail: {
      en: "Branch from develop as feature/<name>. main only gets releases and hotfixes.",
      "zh-TW": "從 develop 開出 feature/<name>，main 只接受正式發行與緊急修復。",
    },
  },
  {
    id: "implement",
    title: { en: "Implement", "zh-TW": "實作" },
    detail: {
      en: "Build it in small, focused commits that follow Conventional Commits.",
      "zh-TW": "以小而聚焦的 commit 開發，並遵循 Conventional Commits。",
    },
  },
  {
    id: "ci",
    title: { en: "CI", "zh-TW": "CI" },
    detail: {
      en: "Every push runs lint, format check, typecheck and a production build.",
      "zh-TW": "每次 push 都會執行 lint、格式檢查、型別檢查與正式建置。",
    },
  },
  {
    id: "review",
    title: { en: "Review & merge", "zh-TW": "審查與合併" },
    detail: {
      en: "Open a PR into develop, get it reviewed and squash-merge once CI is green.",
      "zh-TW": "對 develop 開 PR，通過審查且 CI 全綠後以 squash 合併。",
    },
  },
  {
    id: "cd",
    title: { en: "CD", "zh-TW": "CD" },
    detail: {
      en: "Every merge deploys on its own, develop to staging and main to production. Every build is kept, so a rollback is just redeploying the previous one.",
      "zh-TW":
        "每次合併都會自動部署，develop 進測試環境、main 進正式環境。每次建置都會保留，回滾只需重新部署前一版。",
    },
  },
  {
    id: "uat",
    title: { en: "UAT", "zh-TW": "UAT" },
    detail: {
      en: "Write test scenarios and walk through them on the staging build from develop.",
      "zh-TW": "撰寫測試情境，並在 develop 的測試環境逐一驗證。",
    },
  },
  {
    id: "release",
    title: { en: "Release", "zh-TW": "發行" },
    detail: {
      en: "Cut a release from develop into main and the same pipeline takes it live.",
      "zh-TW": "從 develop 切出發行版本並合併進 main，由同一條流程上線。",
    },
  },
  {
    id: "monitor",
    title: { en: "Monitor", "zh-TW": "監控" },
    detail: {
      en: "Watch production. If something breaks, roll back first, then fix it on a hotfix branch from main. That merges straight into main and back into develop.",
      "zh-TW":
        "觀察正式環境。出問題先回滾，再從 main 開 hotfix 分支修復，並直接合併回 main 與 develop。",
    },
  },
];
