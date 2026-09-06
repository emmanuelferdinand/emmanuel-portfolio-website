import type { LabeledItem } from "@/types/content";

export const hobbies: readonly LabeledItem[] = [
  {
    id: "coffee",
    name: { en: "Coffee", "zh-TW": "咖啡" },
    detail: {
      en: "Love brewing it as much as drinking it.",
      "zh-TW": "喜歡沖煮，就跟喜歡喝一樣。",
    },
  },
  {
    id: "basketball",
    name: { en: "Basketball", "zh-TW": "籃球" },
    detail: {
      en: "Used to play, now it's NBA games and NBA 2K.",
      "zh-TW": "以前常打，現在主要看 NBA 和玩 NBA 2K。",
    },
  },
  {
    id: "movies",
    name: { en: "Movies", "zh-TW": "電影" },
    detail: {
      en: "Weekend cinema and a long watchlist.",
      "zh-TW": "週末進戲院，片單卻永遠清不完。",
    },
  },
  {
    id: "music",
    name: { en: "Music", "zh-TW": "音樂" },
    detail: {
      en: "Always something playing while I code or commute.",
      "zh-TW": "寫程式或通勤時總會放點音樂。",
    },
  },
];
