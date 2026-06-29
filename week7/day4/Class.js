export class LoginPage {
    //property
    label = 'username';
    label1 = 'password';
    admin;
    //method
    fill() {
        console.log("Fill method");
    }
    clear() {
        console.log("Clear");
    }
    // constructor(){
    //     console.log("Default constructor")
    // }
    constructor(admin) {
        this.admin = admin;
        console.log(admin);
    }
}
// let objectname - userdefine =new ClassName()
// let obj=new LoginPage("TLadmin")
// obj.fill()
// console.log(obj.label)
// console.log(obj.admin)
