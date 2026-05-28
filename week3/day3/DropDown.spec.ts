import test from '@playwright/test'

test("Handle DropDown with Select Tag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml;")

await page.selectOption(".ui-selectonemenu",{label:'Playwright'})

await page.waitForTimeout(2000)

await page.selectOption(".ui-selectonemenu",{index:3})

//await page.selectOption(".ui-selectonemenu",{value:'LEAD_OTHER'})

})

test.only("Handle DropDown without Select Tag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml;")

await page.locator("[class='ui-selectonemenu-label ui-inputfield ui-corner-all']").first().click()
await page.locator("li[class='ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all']").nth(2).click()

//await page.locator(`text='India'`).click()


await page.locator("//a[text()='Amazon Pay']").click()

})