import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  { id: "backend", skills: ["Java", "Spring Boot", "Python", "Django", "REST API"] },
  { id: "data", skills: ["MySQL", "Liquibase", "Power BI", "Tableau"] },
  {
    id: "devops",
    skills: ["Git", "GitHub Actions", "CI/CD", "Nginx", "Forgejo", "AWS", "Linux", "Vercel"],
  },
  { id: "other", skills: ["Solidity", "Web3.js", "Machine Learning", "Postman", "AI Agents"] },
];
