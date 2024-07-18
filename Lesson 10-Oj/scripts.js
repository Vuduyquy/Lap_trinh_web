//CHỮA BÀI TẬP VỀ NHÀ BUỔI 9:
// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ','
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không?
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không?
// -tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d1, d2.
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2.
// let d1, d2;
// d1 = prompt('Nhập dãy d1:');
// d1 = d1.split(',')
// d2 = prompt('Nhập dãy d2:');
// d2 = d2.split(',')
// console.log('d1:', d1);
// console.log('d2:', d2);
// let result = true;
// for(let number of d1){
//     d = d2.includes(number);
//     if(d == false){
//         result = false;
//         break;
//     }
// }
// if(result == true){
//     console.log("tất cả các giá trị trong d1 đều nằm trong d2");
// }else{
//     console.log("Trong d1 có phần tử nằm trong d2");
// }
// ý 2:
// let sumd1= 0;
// for(let number of d1){
//     sumd1 += Number(number);
// }
// let result = true;
// for(let number of d2){
//     if(number % sumd1 !== 0){
//         result = false;
//         break;
//     }
// }
// if(result === true){
//     console.log('tất cả các phần tử trong d2 đều chia hết cho tổng củad1')
// }else{
//     console.log('trong d2 có phần tử không chia hết cho d1');
// }
//Ý 3:
// const numbers = [];
// for(let number of d1.concat(d2)){
//     if(number % 2 ===0){
//         numbers.push(number);
//     }
// }
// console.log(numbers);
//Bài 4.Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng:
// Dữ liệu của năm: theo hàng
// Dữ liệu của quý: theo cột
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm(tính tb theo hàng),
// -Tìm giá trị tăng trưởng tb theo năm lớn nhất
// -Tìm giá trị tăng trưởng theo quý lớn nhất
// -Tính giá trị tăng trưởng tb theo quý của các năm(tính tb theo cột)
// const listAvg = [];
// for(let col = 0; col < growth[0].length; col++){
//     let sum = 0;
//     for(let row = 0; row < growth.length; row++){
//         sum += growth[row][col];
//     }
//     const Avg = sum / growth.length;
//     listAvg.push(Avg);

// }
// console.log(listAvg);



//OFJECT:
const trainningCenter ={
    name: "T3H",
    address: "Hồ Tùng Mậu",
    courses: ['react JS', 'node js', 'javascrip', '.net'],
    1 : 'một',
}
// console.log(trainningCenter);

// //Cách 1:
// console.log(trainningCenter.name);
// console.log(trainningCenter.address);

// //Cách 2:
// let variable = 'address';
// console.log(trainningCenter[variable]);
// console.log(trainningCenter['1']);

// //Thay đổi và update
// console.log(trainningCenter);
// trainningCenter['1'] = 'Số một';
// console.log(trainningCenter);

// //Xoá 
// delete trainningCenter.address;
// console.log(trainningCenter);
//BÀI TẬP:
// 1. Khai báo  1 đối tượng để mô tả bản thân bao gồm:
// Tên, tuối, địa chỉ, giới tính, sở thích(nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, sđt
// const Ban_than = {
//     name: Quý,
//     Address: TB,
//     Gioi_tinh: Nam,
//     So_thich: ăn, chơi, ngủ,
//     Chieu_cao: 1.76,
// }
// 2. Khai báo 1 đối tượng là bạn trai, bạn gái của bạn: tên, tuổi, sự tốt bụng(1-10), nhà giàu(boolean).Khai

// 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái(trai) đều lớn hơn 20, in ra màn hình"tầm này cưới được rồi", ngược lại, in ra màn hình"chờ thêm chút nữa".

//DUYỆT OBJECT:
// for(let key in trainningCenter){
//     console.log(key);
//     console.log(trainningCenter[key]);
//     console.log("............................");
// }

// const listKeyOfObject = Object.keys(trainningCenter);
// console.log(listKeyOfObject);

// const listValueOfObject = Object.values(trainningCenter);
// console.log(listValueOfObject);

// let variable = 'age';
// const listKey = ['name', 'age', 'gender'];
// const listValue = ['ABC', 18, 'nam'];
// const user = {};
// for(let i = 0; i < listKey.length; i++){
//     user[listKey[i]] = listValue[i];
// }
// console.log(user);

//FUNCTION : HÀM
// function add(a, b){
//     let sum = a + b;
//     return sum;
// }

// let result = add(4, 5);
// console.log(result);

//VD:
//1.Khai báo 1 function nhận đầu vào là chuỗi name,
//thực hiện in ra màn hình "hello world , " + name

function Logger(name){
    console.log("hello world, " + name);
}
let nameStudent = 'Chiến';
Logger(nameStudent);

//2. Khai báo 1 function nhận đầu vào là 2 số a, b. 
//Đầu ra là kết quả của phép tính (a + b) ^ 2

function Tinh(a, b){
    let S = (a + b) ** 2;
    return S;
}
const number = Tinh(1, 6);
console.log("Kết quả:", number);

//3. Khai báo một function để nhập vào a từ bàn phím, 
// tiếp tục nhập đến khi a là một số lớn hơn a. 
// Đầu ra là giá trị số vừa nhập
function InputNumber(){
    let A;
    for(; true; ){
        A = prompt("Nhập A:");
        if(A > 0){
            return A;
        }
    }
}
const Number = InputNumber();
console.log("number:", Number);