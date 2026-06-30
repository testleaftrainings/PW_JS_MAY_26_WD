"use strict";
//it cannot create object for interface
class ImplementBrowser {
    browserName() {
        console.log("Chrome");
    }
    browserVersion() {
        console.log("131.56");
    }
}
let imp = new ImplementBrowser();
imp.browserName();
imp.browserVersion();
