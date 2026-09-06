import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const paths = ["/", "/zh-TW"];
const colorSchemes = ["light", "dark"] as const;

for (const path of paths) {
  for (const colorScheme of colorSchemes) {
    test(`${path} has no accessibility violations in ${colorScheme} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme });
      await page.goto(path);

      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(violations).toEqual([]);
    });
  }
}
