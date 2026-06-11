import test from '@playwright/test'
import inputValue from '../../../utils/LT_login.json'


//json - index value start from '0'
const getValue=inputValue[1]
//for(let getValue of inputValue){
test(`Login With Different Set of Data ${getValue.Tc_No}`  ,async({page})=>{

await page.goto("https://www.facebook.com/")
await page.locator("//input[@name='email']").fill(getValue.Username)
await page.locator("//input[@name='pass']").fill(getValue.Password)
await page.locator("//span[text()='Log in']").click()

})

//}