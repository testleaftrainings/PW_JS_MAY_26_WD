let arr=[1,2,9.7,4,5.5]
console.log(arr.sort())
//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

console.log(arr.reverse())
//reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//for of loop and for in loop
// arr (old variable) ,update the value to the new variable (new variable) and print the new variable
for(let a of arr){
    console.log(a)
}

//2,7,'f',,null
let obj=[2,7,'f']
obj[4]=null
console.log(obj)
console.log(obj.length)