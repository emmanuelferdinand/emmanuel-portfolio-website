"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const nextTheme = isDark ? "light" : "dark";

  root.dataset.theme = nextTheme;
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-11 items-center justify-center rounded-full border border-stroke-strong transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span className="sr-only">{t("label")}</span>
    </button>
  );
}
