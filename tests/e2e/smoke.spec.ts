import { expect, test } from "@playwright/test";
import { sectionIds } from "../../src/lib/sections";

test("renders every section in English", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Emmanuel Ferdinand Anggawirja/);
  for (const id of sectionIds) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});

test("renders Chinese at its own URL", async ({ page }) => {
  await page.goto("/zh-TW");

  await expect(page.locator("html")).toHaveAttribute("lang", "zh-TW");
  await expect(page.getByRole("heading", { level: 2, name: "我待過的地方" })).toBeVisible();
});

test("serves robots and sitemap", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("/zh-TW");
});
