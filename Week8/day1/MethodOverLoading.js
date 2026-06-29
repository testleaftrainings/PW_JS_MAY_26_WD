"use strict";
class BaseClass {
    ElementClick(locator, forceClick) {
        if (forceClick === true) {
            console.log("Force click" + locator);
        }
        else {
            console.log("Normal click" + locator);
        }
    }
}
let bc = new BaseClass();
bc.ElementClick("xpath");
bc.ElementClick("CSS", true);
