import test from "@playwright/test";

test("SalesForce Login Page",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

await page.locator("[name='pw']").fill("TestLeaf@2025")

await page.locator(".button.r4.wide.primary").first().click()

//wait for sometime
await page.waitForTimeout(12000)

console.log(await page.title())






})