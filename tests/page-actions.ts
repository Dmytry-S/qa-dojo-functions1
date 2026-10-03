import type { Locator, Page } from "@playwright/test";

export async function clickElement(page: Page, locator: Locator) {
  await locator.click();
}

export async function fillForm(page: Page, name: string, email: string) {
  await page.locator(`#name`).fill(name);
  await page.locator(`#email`).fill(email);
  await page.locator(`#promotion`).check();
  await page.locator(`#submit-payment`).click();
}
