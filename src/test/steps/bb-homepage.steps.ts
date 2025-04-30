import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "playwright/test";

// When("User sets Location as {string}", async (location: string) => {
//   await page
//     .locator("(//button[.//span[text()='Select Location']])[2]")
//     .click();
//   console.log("in");
//   await expect(
//     page.locator("(//span[text()='Select a location for delivery'])[1]")
//   ).toBeVisible();
//   await page.waitForTimeout(10000);
//   await page.fill(
//     "(//input[@class='Input-sc-tvw4mq-0 AddressDropdown___StyledInput-sc-i4k67t-8 hpyysx eQvECn'])[1]",
//     location
//   );
//   console.log("in");
//   await page.click(
//     "(//li[@class='AddressDropdown___StyledMenuItem-sc-i4k67t-9 dzmzlX'])[1]"
//   );
// });

import { After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
export let page: Page;

Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given("User is on {string} homepage", async (website: string) => {
  await page.goto("https://bigbasket.com");
  console.log("object");
});

When("User Searches for {string}", async (product: string) => {
  await page.fill(
    "(//input[@class='flex-1 w-full leading-md lg:text-sm xl:text-md placeholder-silverSurfer-700'])[2]",
    product
  );
});

When("User clicks on search button", async () => {
  await page.locator("//a[text()='View all search results']").click();
});

Then("User lands on search results page", async () => {
  await expect(page.locator("//span[text()='Search results']")).toBeVisible();
});

Then("User gets the price of first product", async () => {
  const quantity = await page
    .locator(
      "(//span[@class='Label-sc-15v1nk5-0 PackChanger___StyledLabel-sc-newjpv-1 gJxZPQ cWbtUx'])[1]"
    )
    .innerText();
  const price = await page
    .locator(
      "(//span[@class='Label-sc-15v1nk5-0 Pricing___StyledLabel-sc-pldi2d-1 gJxZPQ AypOi'])[1]"
    )
    .innerText();

  console.log("Quantity: ", quantity);
  console.log("Price: ", price);
});
