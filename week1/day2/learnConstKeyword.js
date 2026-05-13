const firstName="Bhuvanesh"
//const firstName="Akila" // declaration is not allowed
// reintialization in not allowed
//firstName="Vignesh" // TypeError: Assignment to constant variable.
console.log(firstName) 
// console.log(empNo) //ReferenceError: empNo is not defined // hoisting is not allowed
// const empNo=1624
// function scope or blocked scoped
function print(){//body 
// local variable    
 const empAge=25 
 {
    //local variable
    const empPhno=897979697987;  // Block scoped
 }
 console.log(empPhno) 
}
print()

