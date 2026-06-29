//child -- ML I

import { Welcomepage } from "./WelcomePage.js";

class Homepage extends Welcomepage{


    clickLeads(){
        console.log("Leads")
    }


}

let hp=new Homepage()
hp.enterUsername()
hp.enterPassword()
hp.clickOnLogin()
hp.clickOnCRMSFA()
hp.clickLeads()