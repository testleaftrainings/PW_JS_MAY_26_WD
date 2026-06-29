import { Welcomepage } from "./WelcomePage.js";
class AccountPage extends Welcomepage {
    clickOnAccount() {
        console.log("Accounts tab");
    }
}
let Ap = new AccountPage();
Ap.enterUsername();
Ap.enterPassword();
Ap.clickOnLogin();
Ap.clickOnCRMSFA();
Ap.clickOnAccount();
