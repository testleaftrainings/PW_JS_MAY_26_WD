"use strict";
class WrapperMethod {
    //both Implement and unImplements method
    //0 to 100% abstract methods
    fill(locator, value) {
        console.log(locator, value);
        //await page.locator(locator).fill(value)
    }
}
//we cannot create object for Abstract Class
//let a= new WrapperMethod()
//class to class or class to abstract class- > extends
class Impl extends WrapperMethod {
    fileDownload() {
        console.log("File Download");
    }
}
let impl = new Impl();
impl.fill("Css", "demo");
impl.fileDownload();
