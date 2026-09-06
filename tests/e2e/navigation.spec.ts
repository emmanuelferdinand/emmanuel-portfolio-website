import { expect, test } from "@playwright/test";
import type { Locator } from "@playwright/test";

// The nav marks a section active once it crosses a reading line 30% down the viewport.
const scrollSectionToTop = (section: Locator) =>
  section.evaluate((element) => element.scrollIntoView({ block: "start" }));

test("nav highlight tracks scrolling in both directions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "The nav bar is hidden below the lg breakpoint.");
  // Reduced motion turns off smooth scrolling, so each assertion sees a settled position.
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  // The closed mobile sheet renders the same links, so only the exposed nav counts.
  const activeLink = page.locator('nav a[aria-current="location"]').filter({ visible: true });

  await scrollSectionToTop(page.locator("#contact"));
  await expect(activeLink).toHaveAttribute("href", "#contact");

  await scrollSectionToTop(page.locator("#hobby"));
  await expect(activeLink).toHaveAttribute("href", "#hobby");
});

test("mobile menu opens, navigates and closes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop", "The menu button only exists below lg.");
  await page.goto("/");
  const mobileMenu = page.locator("#mobile-menu");

  await page.getByRole("button", { name: /open menu/i }).click();
  await expect(mobileMenu).toBeVisible();

  await mobileMenu.getByRole("link", { name: "Experience" }).click();

  await expect(mobileMenu).toBeHidden();
  await expect(page).toHaveURL(/#experience/);
});

test("no horizontal scroll at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/");

  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );

  expect(overflows).toBe(false);
});
