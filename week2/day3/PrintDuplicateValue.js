let dup=[2,5,1,5,-3,6,8,0,-3]

//for loop and if condition
//nested for loop

//outer loop i=2,i=5,i=1
// for(let i=0;i<dup.length;i++){

//     //inner loop j=5,1,5,3,6,8,0,3,j=1,5,3,6,8,0,3,j=5,3,6,8,0,3
//     for(let j=i+1;j<dup.length;j++){
//2===5.2===1.2===5.2===3.2===6.2===8.2===0.2===3
//5===1.5===5.5===3.5===6.5===8.5===0.5===3
//1===5.1===3.1===6.1===8.1===0.1===3
//         if(dup[i]===dup[j]){
//             console.log(dup[i])
//             //5,3
//         }
//     }

// }


dup.sort()
//sort the array in ascending order
//dup=[-3,-3,0,1,2,5,5,6,8,,]
for(let i=0;i<dup.length;i++){
    if(dup[i]===dup[i+1]){
        console.log(dup[i])
    }
}