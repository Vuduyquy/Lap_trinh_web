// Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// const n = prompt("Nhập n:");
// for(let user of users){
//     if(user.id === Number(n)){
//         console.log(user);
//     }
// }
// Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên {first_name + last_name}
// const keyword = prompt("Nhập keyword:");
// for(let user of users){
//     const fullname = user.first_name + " " + user.last_name;
//     if(fullname.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) === true){
//         console.log(user.email);
//     }
// }
// Đếm số lượng user có age > 50
// let Count = 0;
// for(let user of users){
//     if(user.age > 50){
//         Count += 1;
//     }
// }
// console.log(Count);
// Đếm số lượng user đã kết hôn và chưa kết hôn
// let Count = 0;
// for(let user of users){
//     if(user.id_married === true){
//         Count += 1;
//         console.log("Đã kết hôn");
//     }
//     if(user.id_married === false){
//         console.log("chưa kết hôn");
//     }
// }
// Đếm số lượng user theo từng ngành nghề tương ứng.
//     output:{
//         "dentist":5,
//         "developer":13,
//         "doctor":6,
//         "Farmer":8,
//         "project manager":5,
//         "teacher":9,
//         "worker":4
//         }
// const result = {};
// for(let user of users){
//     console.log(user.job);
    
//     if(result.hasOwnProperty(user.job) == true){
//         result[user.job] = result[user.job] + 1;
//     }else{
//         result[user.job] = 1;
//     }
// }
// console.log(result);