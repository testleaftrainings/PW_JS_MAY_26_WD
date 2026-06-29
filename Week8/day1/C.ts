import { Parent } from "./P.js";

class Child extends Parent{

phone(){
   // super.phone()
    //super -> parent instance 
    console.log("Iphone")
}
}

let c=new Child()
c.phone()