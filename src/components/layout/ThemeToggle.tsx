"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { iconControlClassName } from "@/components/ui/iconControl";

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
    <button type="button" onClick={toggleTheme} className={iconControlClassName}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span className="sr-only">{t("label")}</span>
    </button>
  );
}
