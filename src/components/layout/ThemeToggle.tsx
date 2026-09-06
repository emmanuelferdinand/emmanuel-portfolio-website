"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

// Runs before paint so the theme never flashes.
const useBeforePaintEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

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
  const pathname = usePathname();

  // Resolve persistent theme.
  useBeforePaintEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) document.documentElement.dataset.theme = storedTheme;
  }, [pathname]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-full px-2"
    >
      <Sun className="size-4 transition dark:text-muted" />
      <span className="relative h-6 w-11 rounded-full border border-stroke-strong bg-surface">
        <span className="absolute top-px left-px size-5 rounded-full bg-fg transition dark:translate-x-5" />
      </span>
      <Moon className="size-4 text-muted transition dark:text-fg" />
      <span className="sr-only">{t("label")}</span>
    </button>
  );
}
