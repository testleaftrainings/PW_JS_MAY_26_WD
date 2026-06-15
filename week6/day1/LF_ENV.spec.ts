import test from '@playwright/test'
import dotenv from 'dotenv'
//set the value from env
dotenv.config({path:'utils/DEV.env'})

test("Using CSV file",async({page})=>{
    //process.env.keyName

   // process-> global object for Node .js
   //env-> enviroment
   //keyName-> LT_username,url,testcase_No

   let url=process.env.url as string
   let user=process.env.LT_username as string
   let pass=process.env.LT_password as string

await page.goto(url)
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()


})
