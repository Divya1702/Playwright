import { chromium, test } from "@playwright/test";

test("Testing Salesforce Login", async () => {

const browser = await chromium.launch({headless: false });
const browserContext2 = await browser.newContext();

const page1 = await browserContext2.newPage();
await page1.goto("https://login.salesforce.com/");
await page1.locator("#username").fill("divya@vv.com");
await page1.locator("#password").fill("divi1909");
await page1.waitForTimeout(5000);
await page1.locator("#Login").click();
await page1.waitForTimeout(10000);
// const title1=page1.locator("#Login").
const title=await page1.title();
console.log(`title : ${title}`);
const url1= page1.url();
console.log(`URL: ${url1}`);
await page1.waitForTimeout(5000);
await page1.close;
});
