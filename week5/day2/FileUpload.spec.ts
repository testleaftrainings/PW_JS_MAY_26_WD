import test from '@playwright/test'

test("Upload the File with TagName Input",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")
await page.locator("//input[@type='file']").first().setInputFiles('TestData/Marathon_Testcase_Decathlon.pdf')
await page.waitForTimeout(2000)

})

test("upload the file with event listener",async({page})=>{
await page.goto("https://www.leafground.com/file.xhtml")

//create the promise
const uploadFile=page.waitForEvent('filechooser')

//do the action
await page.locator("//input[@type='file']").first().click()

//resolve the promise
const file=await uploadFile

await file.setFiles("TestData/Marathon_Testcase_Decathlon.pdf")


})


test.only("Upload the Multiple File with TagName Input",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")
await page.locator("//input[@type='file']").nth(1).setInputFiles(['TestData/TestLeaf Logo.png','TestData/TestLeaf Logo (4).png'])
await page.waitForTimeout(2000)


})