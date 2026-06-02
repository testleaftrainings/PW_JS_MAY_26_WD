import test from '@playwright/test'

test("Locators",async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")

//await page.getByPlaceholder()

// await page.getByText("Admin Page").click()
// await page.waitForTimeout(3000)

// await page.getByTitle("ParaBank").click()


//await page.getByTestId('renderer-factory-ad-container')

await page.getByLabel("Username").fill("Demosalesmanager")
    
})

