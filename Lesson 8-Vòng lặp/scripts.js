//const score = 7.9
// if(score >= 8.0){
//     console.log('học sinh giỏi')
// }
// if(score < 8.0){
//     console.log('không là học sinh giỏi')
// }
// if(score >= 8.0){
//     console.log("học sinh giỏi")
// }else{
//     console.log("chưa đạt học sinh giỏi")
// }
//let day = 2;
// day = 2 => thứ hai
// day = 3 => thứ ba
// day = 4 => thứ tư
// day = 5 => thứ năm
// day = 6 => thứ sáu 
// day = 7 => thứ bảy
// day = 8 => chủ nhật
// switch(variable){
//     case Value1:
//         Code Value1
//     case value2:
//         Code value2
//     case value3:
//         Code value3
//     case value4:
//         Code value4

//         ...
//     default:
//         Code default
// }
// switch(day){
//     case 2:
//         console.log("thứ hai");
//         break;
//     case 3:
//         console.log("thứ ba");
//         break;
//     case 4:
//         console.log("thứ tư");
//         break;
//     case 5:
//         console.log("thứ năm");
//         break;
//     case 6:
//         console.log("thứ sáu");
//         break;
//     case 7:
//         console.log("thứ bảy");
//         break;
//     case 8:
//         console.log("chủ nhật");
//         break;
//    default:
//         console.log("ngày không hợp lệ");
//         break;
// }
// let score = prompt();//nhập từ bàn phím
// console.log("giá trị của score là:", score)
// let score = 8;
// let hocluc;
// hocluc = score >= 8.0 ? "học sinh giỏi" : "chưa đạt học sinh giỏi";
// console.log(hocluc)
//BTVN
//Bài 1: in ra các số từ 1 đến 500
// let i = 1;
// while(i<=500){
//     console.log(i);
//     i++
// }
//bài 2: in ra các số chia hết cho 2 và 3 từ 1 đến 300
// let i= 1;
// do{
//     if(i % 2 === 0 & i % 3 === 0){
//         console.log(i);
//     }
//     i++;
// }while(i<=300)
//Bài 4: Nhập vào số n. Tính giai thừa của số n
// const n = prompt("Nhập n:");
// let Factorial = 1;
// for(i = 1; i <= n; i++){
//     Factorial = Factorial*i;
// }
// console.log(Factorial);
// Bài 5: Nhập vào 3 số a,b,x(a<b && x != 0).Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x
// let a, b , x;
// do{
//     a = prompt("nhập a:");
//     b = prompt("Nhập b:");
// }while(a>=b);
// do{
//     x = prompt("Nhập x:");
// }while(x === 0)
// for(let i = a; i < b; i++){
//     if(i % x === 0){
//         console.log(i);
//         break;
//     }
// }
// Bìa 8: Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không?
// let n = prompt("NHập n:");
// if(n <= 0){
//     console.log("n không là số nguyên tố");
// }
// let count = 0;
// for(let i = 0; i <= n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }
// if(count === 2){
//     console.log(n, "là số nguyên tố")
// }else{
//     console.log(n, "không là số nguyên tố")
// }
// console.log("count:", count)
//Bài 9: Nhập vào chỗ s(chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s kí tự '0' cho đến khi độ dài chuỗi s >= l
// let s = prompt("Nhâp s:");
// let l = prompt("nhập l:");
// for(let i = s.length; i < l; i++){
//     s = '0' + s;
// }
// console.log(s);
// bài 10:nhập vào 2 số m,n(m > 0; n > 0). Tìm ước chung lớn nhất, bội chung lớn nhất của m,n
// let m, n;
// do{
//     m = prompt("Nhập m:");
//     n = prompt("Nhập n:");
// }while(m <= 0 || n < 0)

// // tìm ước chung lớn nhất
// let result = 1;
// for(let i = 0; i <= m && i <= n; i++){
//     if(m % i === 0 && n % i === 0){
//         result = i;
//     }
// }
// console.log("ước chung lớn nhất: ",result);

// // tìm bội chung nhỏ nhất
// result = (m * n) / result;
// console.log("bội chung nhỏ nhất: ", result);
// Bài 11: Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kì từ 1 đến 20
// Người dùng nhập vào 1 số answer
// Nếu answer bằng correct in ra "đoán đúng"
// Ngược lai, in ra "Đoán sai và yêu cầu nhập lại answer"
// Nếu nhập sai answer quá 5 lần in ra "Bạn đã thua cuộc"
// let correct = Math.random() * 10 * 2;
// correct = Math.floor(correct);
// console.log("correct:",correct);
// for(let i = 0; i <= 5; i++){
//     let answer = prompt("Mời nhập đáp án");
//     if(answer == correct){
//         alert("Đoán đúng");
//         break;
//     }
//     if(i===5){
//         alert("Bạn đã thua cuộc");
//     }
// }
//Bài 16: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người
//Hãy tính chỉ số BMI và đưa ra kết quả:
//Nếu BMI < 18.5-> in ra " nhẹ cân"
//Nếu 18,5 < BMI < 23 -> in ra "Bình thường"
//Nếu 23 < BMI < 25 -> in ra "thừa cân"
//Nếu BMI > 25 -> in ra "Béo phì"
let w = prompt("Nhập cân nặng(kg):");
let h = prompt("Nhập chiều cao(m):");

const BMI = w / h ** 2;

if(BMI < 18.5){
    console.log("Nhẹ cân:", BMI);
}else if(18.5 < BMI < 23){
    console.log("Bình thường;", BMI);
}else if(23 < BMI < 25){
    console.log("Thừa cân:", BMI);
}else{
    console.log("Béo phì:", BMI)
}

