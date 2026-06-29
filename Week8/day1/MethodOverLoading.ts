class BaseClass{

ElementClick(locator:string):void
ElementClick(locator:string,forceClick:boolean):void

ElementClick(locator:string,forceClick?:boolean):void{

    if(forceClick===true){
        console.log("Force click" + locator)
    }else{
        console.log("Normal click" + locator)
    }
}

}
let bc=new BaseClass()
bc.ElementClick("//a[text()='click']")
