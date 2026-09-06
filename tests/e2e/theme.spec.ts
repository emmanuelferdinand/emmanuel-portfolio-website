import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const documentElement = (page: Page) => page.locator("html");

// Below lg the toggle lives inside the menu sheet, so both copies exist and only one is visible.
async function revealThemeToggle(page: Page, projectName: string) {
  if (projectName === "mobile") {
    await page.getByRole("button", { name: /open menu/i }).click();
  }
  return page.getByRole("button", { name: /toggle theme/i }).filter({ visible: true });
}

test("toggling the theme sets data-theme", async ({ page }, testInfo) => {
  await page.goto("/");
  const toggle = await revealThemeToggle(page, testInfo.project.name);

  await toggle.click();

  await expect(documentElement(page)).toHaveAttribute("data-theme", /light|dark/);
});

test("theme persists across a reload", async ({ page }, testInfo) => {
  await page.goto("/");
  const toggle = await revealThemeToggle(page, testInfo.project.name);
  await toggle.click();
  const chosenTheme = await documentElement(page).getAttribute("data-theme");

  await page.reload();

  await expect(documentElement(page)).toHaveAttribute("data-theme", String(chosenTheme));
});

test("theme survives a locale switch", async ({ page }, testInfo) => {
  await page.goto("/");
  const toggle = await revealThemeToggle(page, testInfo.project.name);
  await toggle.click();
  const chosenTheme = await documentElement(page).getAttribute("data-theme");

  await page
    .getByRole("link", { name: /switch language/i })
    .filter({ visible: true })
    .click();

  await expect(page).toHaveURL(/\/zh-TW/);
  await expect(documentElement(page)).toHaveAttribute("data-theme", String(chosenTheme));
});
