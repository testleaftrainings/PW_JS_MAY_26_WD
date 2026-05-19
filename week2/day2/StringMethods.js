let a='Java'
let b='script'

console.log(a.concat(b))

//substring
let ab=`JavaScript`
console.log(ab.substring(2,7)) //v-i
console.log(ab.substring(4)) //Script

//slice
console.log(ab.slice(-9,-5))
//slice -ve index (-1)
//10-9=-1
//10-5=8-1(3,8)=(-3-8)

let mail='test_24@gmail.com'
console.log(mail.replace('test','testleaf'))
//replaceAll- /[a-z]/g
//^ - use retrain the value

let id='Dilip_7898'
console.log(id.replaceAll(/[^0-9]/g,'@'))


console.log(true==1) //1==1 true
console.log(true===1)//bol===num
console.log('Dilip'==="DILIP")//value + dataType
