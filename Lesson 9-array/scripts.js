//lẤY PHẨN TỬ TRONG MẢNG VÀ IN RA:
//cách 1:
// const arr1 = [];
// console.log(arr1);
//const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
// console.log(arr2[2])
//Cách 2:
// const arr3 = new Array();
// console.log(arr3);
// const arr4 = new Array(1,2,3,4,5,6,7,9,8);
// console.log(arr4);
//DUYỆT MẢNG:
//for...: Lấy được cả giá trị và index
// for(let i = 0; i < arr2.length; i++){
//     console.log(i);
//     console.log(arr2[i]);
//     console.log('.......................');
// }
//VÒng lặp for...of: chỉ lấy được mỗi giá trị, không lấy được index
// for(let Element of arr2){
//     console.log('element:', Element);
// }
//VD: Khai báo 1 mảng gồm 4 số bất kì khác nhau.
//In ra phần tử có chỉ số 0 và 3 trong mảng
//Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2
//Thực hiện hoán đổi giá trị của phẩn tử chỉ số 1 và 3
// const number = [1, 4, 8, 10];
// console.log(number[0]);
// console.log(number[3]);
// const sum = number[1] + number[2];
// console.log(sum);
// let teep = number[1];
// number[1] = number[3];
// number[3] = number[teep];
// console.log(number);

//VD2: Khai báo 1 mảng gồm các số bất kì
//Hãy in ra các số chẵn trong mảng đó
//hãy tính tổng các phần tử trong mảng
//Hãy tìm phần tử nhỏ nhất trong mảng
//const Nb = [10, -10, 5, 3, 8, 46, 79, 34, 67, 88, 22, 36, 58];
// for(let Num of Nb){
//     if(Num % 2 === 0 && Num > 0){
//         console.log(Num);
//     }
// }

// let Sum = 0;
// for(let Num of Nb){
//     Sum = Sum + Num;
// }
// console.log(Sum);

// let min = Nb[0];
// for(let number of Nb){
//     if(number > min){
//         min = number;
//     }
// }
// console.log(min);

//const arr = ['a', 'b', 'c', 'd'];
// //PHƯƠNG THỨC PUSH: thêm cuối mảng
// arr.push(1, 2, 3, 4);
// console.log(arr);

// //PHƯƠNG THỨC UNSHIFT: thêm đầu mảng
// arr.unshift(-2, -1, 0);
// console.log(arr);

// //PHƯƠNG THỨC POP: Xoá cuối mảng
// arr.pop();
// console.log(arr);

// //PHƯƠNG THỨC SHIFT: Xoá đầu mảng
// arr.shift();
// console.log(arr);

//PHƯƠNG THỨC SPLICE: Xoá, thêm, thay thế
// arr.splice(1, 1);
// console.log(arr)

// arr.splice(2, 0, 1, 2, 3)
// console.log(arr)

// arr.splice(1, 1, 'f')
// console.log(arr)

//MẢNG ĐA CHIỀU:
// const arrMutiple = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(arrMutiple[1][1]);
