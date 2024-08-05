// // let message: string = "hello";
// // console.log(message);

// // let messages : string = "Xin chào";
// // console.log(messages);

// //Các kiểu dữ liệu cơ bản trong typescript
// //1.String
// let username: string = 'Alice';
// //2.Number
// let Age : number = 25;
// let Pi : number = 3.14;
// //3.Boolean
// let isStudent: boolean = true;
// //4.Array
// //c1:
// let hobbies : string[] = ['reading', 'gaming'];
// let scores : number[] = [95, 87, 76];
// //c2:
// let favorites : Array<string> = ['reading', 'gaming'];
// let numbers : Array<number> = [95, 87, 76];
// //5.Any
// let randomValue : any = 10;
// randomValue = 'Hello';
// randomValue = true;
// //6.void
// function logMessage(message : string) : void{
//     console.log(message);
// }
// //7.Null và Undefined;
// let u : undefined = undefined;
// let n : null = null;
// //8.Object
// let person : {name : string; age : number} = {
//     name : 'John',
//     age : 30,
// };
// //9.tuple
// //vd1: tuple đơn giản
// let product : [number, string] = [1, 'Laptop'];

// console.log(product[0]);
// console.log(product[1]);

// //vd2: tuple với nhiều kiểu dữ liệu khác nhau
// let persons : [string, number, boolean] =["John", 30, false];

// console.log(persons[0]);
// console.log(persons[1]);
// console.log(persons[2]);

// //vd3: tuple cho các mảng có kích thước cố định
// let Data : [number, number, string[]] = [1, 2, ["apple", "banana", "cherry"]];
// console.log(Data[0]);
// console.log(Data[1]);
// console.log(Data[2]);

// //vd4:typle với giá trị mặc định  và không bắt buộc
// let Profile : [string, number, boolean?] = ["alice", 28];
// console.log(Profile[0]);
// console.log(Profile[1]);
// console.log(Profile[2]);

// //vd5: typle trong hàm javascript
// function GetData(): [string, number]{
//     return["hello", 5];
// }
// let Result: [string, number] = GetData();
// console.log(Result[0]);
// console.log(Result[1]);

// //10.enum
// //vd1: enum với giá trị mặc định
// enum Directer{
//     North,
//     South,
//     East,
//     West
// }
// let dir: Directer = Directer.North;
// console.log(dir);

// //vd2: enum với giá trị cụ thể
// enum Status{
//     Success = 1,
//     Pending = 2,
//     Error = 3
// }
// let stat: Status = Status.Success;
// console.log(stat);

// //vd3: enum với giá trị tăng dần từ một số cụ thể
// enum Color{
//     Red = 4,
//     Green,
//     Blue
// }
// let Colors:Color = Color.Blue;
// console.log(Colors);

// //vd4: enums với giá trị số nguyên bất kì
// enum week{
//     Monday = 1,
//     Tuesday = 3,
//     Wednesday = 5,
//     Thursday = 7,
//     Friday = 9
// }
// let Day : week = week.Friday;
// console.log(Day);

// //vd5: enum với phép toán
// enum Months {
//     January = 1,
//     February = January * 2,
//     Marth = February + 1
// }
// let Month : Months = Months.February;
// console.log(Month);






// interface User{
//     Name : string;
//     Age: number;
//     Rank? : string;
// }

// const User1 : User = {
//     Name : 'Quy',
//     Age : 18,
//     //Rank: 'Giỏi'
// }

// console.log(User1);
// User1.Name = "Student";
// console.log(User1);

// interface Student extends User{
//     School: string;
// }

// const student1 : Student = {
//     Name : 'Student2',
//     Age : 35,
//     School : 'THPT Minh Khai',
// }
// console.log(student1);

// class Person {
//     Name : string;
//     Age : number;
//     constructor(name: string, age: number){
//         this.Name = name;
//         this.Age = age;
//     }

//     greet() : void{
//         console.log(`hello ${this.Name}`)
//     }
// }

// const person1 : Person = new Person('person 1', 18);
// console.log(person1);

// person1.greet();

// class Employee extends Person{
//     employeeID : number;

//     constructor(name : string, age: number, EmloyeeID : number){
//         super(name, age);
//         this.employeeID = EmloyeeID;
//     }
// }
// const employee1 = new Employee('employee 1', 20, 123);
// employee1.greet();
// console.log(employee1);\

// interface Person{
//     Name : string;
//     Age : number;
//     Run() : void;
//     Sleep() : void;
// }

// class Student implements Person{
//     Name : string;
//     Age : number;

//     constructor(name:string, age: number){
//         this.Name = name;
//         this.Age = age;
//     }
//     Run(): void{
//         console.log('Đang chạy');
//     };

//     Sleep():void{
//         console.log('Đang ngủ');
//     }
// }