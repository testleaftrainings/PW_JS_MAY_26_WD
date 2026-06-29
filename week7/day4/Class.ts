export class LoginPage{

//property
    label='username'
    label1='password'
    admin:any
//method
fill(){
console.log("Fill method")
}

clear(){
    console.log("Clear")
}

// constructor(){
//     console.log("Default constructor")
// }

constructor(admin:string){
    this.admin=admin
console.log(admin)
}

//we use this keyword -> reffer current class property, method and constructor
//different between property and parameter -> this

//object  cannot create inside class

}
// let objectname - userdefine =new ClassName()
// let obj=new LoginPage("TLadmin")
// obj.fill()
// console.log(obj.label)
// console.log(obj.admin)
