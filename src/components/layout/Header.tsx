"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { sectionIds } from "@/lib/sections";
import { Container } from "@/components/ui/Container";
import { iconControlClassName } from "@/components/ui/iconControl";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

const MOBILE_MENU_ID = "mobile-menu";

export function Header() {
  const t = useTranslations("Nav");
  const activeId = useScrollSpy(sectionIds);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const links = sectionIds.map((id) => ({
    href: `#${id}`,
    label: t(id),
    isActive: id === activeId,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-stroke bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-2xl focus-ring">
          EF
        </a>

        <nav aria-label={t("label")} className="hidden lg:block">
          <NavLinks links={links} className="flex" />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            popoverTarget={MOBILE_MENU_ID}
            className={`${iconControlClassName} lg:hidden`}
          >
            <Menu />
            <span className="sr-only">{t("openMenu")}</span>
          </button>
        </div>
      </Container>

      <div
        id={MOBILE_MENU_ID}
        ref={mobileMenuRef}
        popover="auto"
        className="fixed inset-0 m-0 h-dvh w-full max-w-none flex-col bg-bg p-6 open:flex"
      >
        <button
          type="button"
          popoverTarget={MOBILE_MENU_ID}
          popoverTargetAction="hide"
          className={`${iconControlClassName} self-end`}
        >
          <X />
          <span className="sr-only">{t("closeMenu")}</span>
        </button>
        <nav aria-label={t("label")} className="mt-8">
          <NavLinks
            links={links}
            className="flex flex-col text-2xl"
            onNavigate={() => mobileMenuRef.current?.hidePopover()}
          />
        </nav>
      </div>
    </header>
  );
}
