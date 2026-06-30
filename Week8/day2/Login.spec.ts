import { customFixture } from "./CustomFixture";


customFixture("Use CustomFixture",async({LTlogin})=>{

await LTlogin.locator("text=CRM/SFA").click()
await LTlogin.waitForTimeout(5000)

})