abstract class WrapperMethod{

    //both Implement and unImplements method
    //0 to 100% abstract methods

    fill(locator:string,value:string){
        console.log(locator , value)
        //await page.locator(locator).fill(value)
    }
//fill("#username","DemoCsr")

abstract fileDownload():void

}
//we cannot create object for Abstract Class
//let a= new WrapperMethod()

//class to class or class to abstract class- > extends
//execution -> normal class(create a object)
class Impl extends WrapperMethod{
    fileDownload(): void {
console.log("File Download")
    }
}

let impl=new Impl()
impl.fill("Css","demo")
impl.fileDownload()