interface browserMethod{
//100% abstract method
browserName():void
browserVersion():void

}

interface a{

    add():void

}

interface b extends a,browserMethod{
 mul():void

}
//to connect interface to interface -> extends

//it cannot create object for interface

class ImplementBrowser implements browserMethod{
    browserName(): void {
        console.log("Chrome")
    }
    browserVersion(): void {
        console.log("131.56")
    }
    
}
let imp=new ImplementBrowser()
imp.browserName()
imp.browserVersion()