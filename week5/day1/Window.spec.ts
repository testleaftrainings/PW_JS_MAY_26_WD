import test from '@playwright/test'

test("Handle window",async({page,context})=>{

await page.goto("https://www.amazon.in/")
const searchbox=page.locator("#twotabsearchtextbox")
await searchbox.fill("Phone")
await searchbox.press("Enter")

//step 1: create promise
const parentWindow=context.waitForEvent("page")
//step 2: do the action
await page.locator("//span[contains(text(),'REDMI A7 Pro 5G')]").first().click()
//step 3: resolve the promise(switch to child window)
const childWindow=await parentWindow

const chTitle= await childWindow.title()
console.log(chTitle)

const price= await childWindow.locator("//span[@class='a-price-whole']").nth(4).innerText()
console.log(price)

//await childWindow.waitForTimeout(5000)
//close the child window
//await childWindow.close()

//without closing child window also we can switch to parent window

await page.bringToFront()

//after closing child window control will come to parent window
await page.locator("//a[text()='Sell']").click()





})