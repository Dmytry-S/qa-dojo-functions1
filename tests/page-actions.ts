import type { Page } from "@playwright/test";

export async function clickCappuccino(page: Page) {
  await page.locator('.cup-body[aria-label="Cappuccino"]').click();
};

export async function openCartPage(page: Page) {
  await page.locator('#app [aria-label="Cart page"]').click();
};

export async function clickPayButton(page: Page) {
  await page.locator(".pay").click();
};

export async function clickMocha(page: Page) {
  await page.locator('.cup-body[aria-label="Mocha"]').click();
};

export async function clickFlatWhite(page: Page) {
  await page.locator('.cup-body[aria-label="Flat White"]').click();
};

export async function clickAmericano(page: Page) {
  await page.locator('.cup-body[aria-label="Americano"]').click();
};

export async function fillForm(page: Page, name: string, email: string) {
  await page.locator(`#name`).fill(name);
  await page.locator(`#email`).fill(email);
  await page.locator(`#promotion`).check();
  await page.locator(`#submit-payment`).click();
}
