let val=['d',null,4,true,,8.9]
//index value start from '0'
//count the value in the array-> length
console.log(val.length +": total length")
console.log(val)
console.log(val[0])

//unshift -
val.unshift("TL")
console.log("Unshift :"+ val)

//push
val.push(4)
console.log("Push :"+ val)

//pop
val.pop()
console.log("pop :"+ val)

//shift
val.shift()
console.log("shift :"+ val)

let d1=[3,8,null,,true]
d1.splice(2,3,'f',6,8)
//2- index value
//3- how index need to delete
//'f','R-> update new values
console.log(d1)



