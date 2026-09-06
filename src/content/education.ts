import type { EducationEntry, LabeledItem, Project } from "@/types/content";

export const education: EducationEntry = {
  institution: { en: "Asia University, Taiwan", "zh-TW": "亞洲大學" },
  degree: {
    en: "Computer Science and Information Engineering",
    "zh-TW": "資訊工程學系",
  },
  start: "2021-09",
  end: "2025-06",
  highlights: {
    en: [
      "Graduated with a 4.3/4.3 GPA and multiple scholarships while managing part-time jobs and organizational leadership roles.",
      "Top 5% of the department, specializing in machine learning, cloud computing, and data analysis and visualization.",
    ],
    "zh-TW": [
      "以 4.3/4.3 GPA 畢業並獲得多項獎學金，同時兼顧多份工讀與社團幹部職務。",
      "系上前 5%，專攻機器學習、雲端運算，以及資料分析與視覺化。",
    ],
  },
};

export const graduationProject: Project = {
  title: {
    en: "Decentralized Supply Chain Management System",
    "zh-TW": "去中心化供應鏈管理系統",
  },
  highlights: {
    en: [
      "Built a decentralized supply-chain marketplace with a team of three on Solidity smart contracts, React and Web3.js.",
      "Implemented the full product lifecycle: listing, purchasing and on-chain payment settlement.",
    ],
    "zh-TW": [
      "與三人團隊以 Solidity 智慧合約、React 與 Web3.js 打造去中心化供應鏈交易平台。",
      "實作完整商品生命週期：上架、購買與鏈上付款結算。",
    ],
  },
  tags: ["Solidity", "React", "Web3.js", "Truffle", "Ganache"],
};

export const languages: readonly LabeledItem[] = [
  {
    id: "indonesian",
    name: { en: "Indonesian", "zh-TW": "印尼文" },
    detail: { en: "Native", "zh-TW": "母語" },
  },
  {
    id: "english",
    name: { en: "English", "zh-TW": "英文" },
    detail: { en: "TOEIC 985/990", "zh-TW": "多益 985/990" },
  },
  { id: "chinese", name: { en: "Chinese", "zh-TW": "中文" } },
];

export const certifications: readonly LabeledItem[] = [
  {
    id: "aws-ccp",
    name: {
      en: "AWS Certified Cloud Practitioner",
      "zh-TW": "AWS Certified Cloud Practitioner",
    },
    detail: { en: "Amazon Web Services", "zh-TW": "Amazon Web Services" },
  },
];
