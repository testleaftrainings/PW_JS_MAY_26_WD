import {test as CF} from '@playwright/test'


export const customFixture= CF.extend<{LTlogin:any}>({

    LTlogin:async({page},use:any)=>{

        await page.goto("https://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemoCsr")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()

        await use(page)

    }









})