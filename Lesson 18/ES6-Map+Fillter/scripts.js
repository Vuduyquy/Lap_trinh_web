//let arr1 = [1,2,3];
// let arr2 = [];//arr2 = [2,4,6];
// for(let element of arr1){
//     arr2.push(element * 2);
// }
// console.log(arr2);

// let arr2 = arr1.map(function(value, index, arr){
//     console.log('Value đang được duyệt đến: ', value);
//     console.log('index đang được duyệt đến: ', index);
//     console.log('giá trị arr: ', arr);
//     console.log('---------------');
//     return value * 2;
// })

// console.log('arr2: ', arr2);
//let arr2 = [];
let arr1 = [1, 2, 3, 4, 5, 6, 7];
// for(let number of arr1){
//     if(number % 2 === 0){
//         arr2.push(number);
//     }
// }
// console.log("arr2: ", arr2);

// let arr2 = arr1.filter(function(value){
//     return value % 2 === 0;
// })
// console.log('arr2: ', arr2)

let arr2 = arr1.filter((value) => value % 2 === 0)
console.log('arr2: ', arr2)