import test from '@playwright/test'

test.use({storageState:"Data/SF_Login.json"})

test("Use Storage State",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//div[@class='slds-icon-waffle']").click()

})

test("Use Storage State1",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//div[@class='slds-icon-waffle']").click()
await page.locator("//p[text()='Service']").click()

})