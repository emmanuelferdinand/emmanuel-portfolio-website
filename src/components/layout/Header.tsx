"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { sectionIds } from "@/lib/sections";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

const MOBILE_MENU_ID = "mobile-menu";
const menuButtonClassName =
  "inline-flex size-11 items-center justify-center rounded-full text-muted transition hover:text-fg";

export function Header() {
  const t = useTranslations("Nav");
  const activeId = useScrollSpy(sectionIds);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const links = sectionIds.map((id) => ({
    href: `#${id}`,
    label: t(id),
    isActive: id === activeId,
  }));
  const closeMobileMenu = () => mobileMenuRef.current?.hidePopover();

  return (
    <header className="sticky top-0 z-50 border-b border-stroke bg-bg/80 backdrop-blur">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" className="font-display text-2xl leading-none transition hover:text-accent">
          翁
        </a>

        <nav aria-label={t("label")} className="hidden lg:block">
          <NavLinks links={links} className="flex" />
        </nav>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <div className="hidden items-center gap-2 lg:flex">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <button
            type="button"
            popoverTarget={MOBILE_MENU_ID}
            className={`${menuButtonClassName} lg:hidden`}
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
          className={`${menuButtonClassName} self-end`}
        >
          <X />
          <span className="sr-only">{t("closeMenu")}</span>
        </button>
        <nav aria-label={t("label")} className="mt-8">
          <NavLinks links={links} className="flex flex-col text-2xl" onNavigate={closeMobileMenu} />
        </nav>
        <div className="mt-auto flex items-center gap-4 border-t border-stroke pt-6">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
