//const number = 20;

//local storage
//lưu trữ và cập nhật dữ liệu
//cách 1:
//localStorage.setItem('number', number);

//cách 2:
// localStorage.PI = 3.14;

// const Student = {
//     name: 'quy',
//     age: 20,
//     address: 'HN'
// }
//localStorage không hỗ trợ lưu trữ các kiểu dữ liệu tham chiếu
//JSON.stringify => chuyển đổi ban đầu -> JSON
//localStorage.setItem('student', JSON.stringify(Student));

//Lấy dữ liệu từ localStorage
//  const PI = localStorage.getItem('PI')
//  console.log(PI);
//  let student = localStorage.getItem('student');
//  console.log(student);
//  //JSON.parse => chuyển đổi từ json -> ban đầu
//  student = JSON.parse(student);
//  console.log(student);

 //Xoá dữ liệu từ localStorage
 //localStorage.removeItem('key'): xoá theo key
 //localStorage.removeItem('PI');

 //localStorage.clear(): Xoá hết
 //localStorage.clear();

 //cookie
 //document.cookie = 'user name = T3H, max-age = 60';

//Lấy dữ liệu từ cookie
//  function getValueCookie(name){
//     let data = document.cookie;
//     data = data.split(";");

//     for(let element of data){
//         const name_value = element.trim().split('=');
//         console.log(name_value);
//         if(name_value[0] === name){
//             return name_value[1];
//         }
//     }

//  }
//  getValueCookie(getValueCookie('username'))