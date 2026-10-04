import { test, expect } from "@playwright/test";
import {
  clickCappuccino,
  openCartPage,
  clickPayButton,
  fillForm,
  clickMocha,
  clickFlatWhite,
  clickAmericano
} from "./page-actions";

test("TC-001, Success message is present", async ({ page }) => {
  const name = `SD`;
  const email = "ref@data.co";
  const successMessage =
    "Thanks for your purchase. Please check your email for payment.";

  await page.goto("/");
  await clickCappuccino(page);
  await openCartPage(page);
  await clickPayButton(page);
  await fillForm(page, name, email);
  await expect(page.locator("#app")).toContainText(successMessage);
});

test("TC-002, Extra cup proposition is present", async ({ page }) => {
  const messageLuckyDay = "It's your lucky day! Get an extra cup of Mocha for $4.";

  await page.goto("/");
  await clickMocha(page);
  await clickFlatWhite(page);
  await clickAmericano(page);
  await expect(page.locator("#app")).toContainText(messageLuckyDay);
});
