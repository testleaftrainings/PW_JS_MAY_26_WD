let firstName="Bhuvanesh"
// redeclaration is not allowed
//let firstName="Akila" // SyntaxError: Identifier 'firstName' has already been declared
firstName="Vignesh" // reintialization is allowed
console.log(firstName)
//console.log(empNO) // hoisting is not allowed
//let empNO=1652
function print(){//body 
// local variable    
 let empAge=25 
 {
    //local variable
    let empPhno=897979697987;  // block scope
 }
 console.log(empPhno) //ReferenceError: empPhno is not defined
}
print()