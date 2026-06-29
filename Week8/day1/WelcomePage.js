//child page -- SI
//parent -- ML I
import { LoginPage } from "./Login.js";
export class Welcomepage extends LoginPage {
    clickOnCRMSFA() {
        console.log("CRM/SFA");
    }
}
//create object for child class
// let wp=new Welcomepage()
// wp.enterUsername()
// wp.enterPassword()
// wp.clickOnLogin()
// wp.clickOnCRMSFA()
