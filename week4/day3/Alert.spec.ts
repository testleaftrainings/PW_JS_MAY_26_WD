import test, { expect } from "@playwright/test";

test("Auto Dismiss alert",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")

await page.locator("(//span[text()='Show'])[2]").click()

})

test("Handle alert with Page.Once",async({page})=>{

page.once('dialog',alertType=>{
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)

    alertType.accept()

})
await page.goto("https://www.leafground.com/alert.xhtml")

//confrim alert -1st alert
await page.locator("(//span[text()='Show'])[2]").click()

await page.waitForTimeout(2000)
//promot alert - 2nd alert - will do as auto dismiss
await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(2000)


})

test.only("Handle alert with Page.On",async({page})=>{
//page.on() will handle all the alerts which are present in the page
page.on('dialog',alertType=>{
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)

    //if(msg.contain("Did you"){alertType.accept()}else{alertType.dismiss()})

    if(type==="confirm"){
    alertType.dismiss()
    }else if(type==="prompt"){
    alertType.accept("Playwright")
}


})
await page.goto("https://www.leafground.com/alert.xhtml")

//confrim alert -1st alert -> dismiss
await page.locator("(//span[text()='Show'])[2]").click()

await page.waitForTimeout(3000)
//promot alert - 2nd alert -> accept with text
await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(3000)

// const verfiy=page.locator("#confirm_result").innerText()
// await expect(verfiy).toContain("You have entered Playwright")

})