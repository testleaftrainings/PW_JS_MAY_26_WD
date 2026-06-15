import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

const  value:any[]=parse(fs.readFileSync('utils/Login.csv'),{columns:true,
    skip_empty_lines:true})

    for(let data of value){
  test(`Using CSV file ${data.TC_No}  `,async({page})=>{  
  await page.goto("http://leaftaps.com/opentaps/control/main")
  await page.locator("#username").fill(data.username)
  await page.locator("#password").fill(data.password)
  await page.locator(".decorativeSubmit").click()
  
  
  })

}