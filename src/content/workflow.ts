import type { WorkflowStep } from "@/types/content";

export const workflowSteps: WorkflowStep[] = [
  {
    id: "requirement",
    title: { en: "Requirement" },
    detail: {
      en: "Clarify the goal, the constraints and what done looks like before writing code.",
    },
  },
  {
    id: "design",
    title: { en: "Design" },
    detail: { en: "Sketch the data model, component boundaries and API shape." },
  },
  {
    id: "branch",
    title: { en: "Feature branch" },
    detail: { en: "Branch from develop as feature/<name>. main only gets releases and hotfixes." },
  },
  {
    id: "implement",
    title: { en: "Implement" },
    detail: { en: "Build it in small, focused commits that follow Conventional Commits." },
  },
  {
    id: "ci",
    title: { en: "CI" },
    detail: { en: "Every push runs lint, format check, typecheck and a production build." },
  },
  {
    id: "review",
    title: { en: "Review & merge" },
    detail: { en: "Open a PR into develop, get it reviewed and squash-merge once CI is green." },
  },
  {
    id: "cd",
    title: { en: "CD" },
    detail: {
      en: "Every merge deploys on its own, develop to staging and main to production. Every build is kept, so a rollback is just redeploying the previous one.",
    },
  },
  {
    id: "uat",
    title: { en: "UAT" },
    detail: { en: "Write test scenarios and walk through them on the staging build from develop." },
  },
  {
    id: "release",
    title: { en: "Release" },
    detail: { en: "Cut a release from develop into main and the same pipeline takes it live." },
  },
  {
    id: "monitor",
    title: { en: "Monitor" },
    detail: {
      en: "Watch production. If something breaks, roll back first, then fix it on a hotfix branch from main. That merges straight into main and back into develop.",
    },
  },
];
