import { test, expect } from "@playwright/test";
import { clickElement, fillForm } from "./page-actions";

test("TC-001, Success message is present", async ({ page }) => {
  const locatorCappuccino = page.locator('.cup-body[aria-label="Cappuccino"]');
  const locatorCartPage = page.locator('#app [aria-label="Cart page"]');
  const locatorPayButton = page.locator(".pay");
  const name = `SD`;
  const email = "ref@data.co";
  const successMessage =
    "Thanks for your purchase. Please check your email for payment.";

  await page.goto("/");
  await clickElement(page, locatorCappuccino);
  await clickElement(page, locatorCartPage);
  await clickElement(page, locatorPayButton);
  await fillForm(page, name, email);
  await expect(page.locator("#app")).toContainText(successMessage);
});

test("TC-002, Extra cup proposition is present", async ({ page }) => {
  const locatorMocha = page.locator('.cup-body[aria-label="Mocha"]');
  const locatorFlatWhite = page.locator('.cup-body[aria-label="Flat White"]');
  const locatorAmericano = page.locator('.cup-body[aria-label="Americano"]');
  const messageLuckyDay = "It's your lucky day! Get an extra cup of Mocha for $4.";

  await page.goto("/");
  await clickElement(page, locatorMocha);
  await clickElement(page, locatorFlatWhite);
  await clickElement(page, locatorAmericano);
  await expect(page.locator("#app")).toContainText(messageLuckyDay);
});
