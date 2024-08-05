
//Bài tập: Quản lý sách thư viện
//+Định nghĩa các kiểu dữ liệu:
//Tạo các interface Book, Member và Library
//Book có các thuộc tính như id, title, author, và available(boolean)
//Member có các thuộc tính như id, name, và borrowedBooks(mảng các book)
//Library có các thuộc tính như books, members
//+ Quản lý sách: Viết các phương thức trong class Library để thêm,
//xoá, và cập nhật thông tin sách

//+ Quản lý thành viên: Viết các phương thức trong class Library để
// thêm, xoá và cập nhật thông tin thành viên

//+ Quản lý mượn trả sách: Viết các phương thức để mượn và trả sách
// dảm bảo cập nhật trạng thái available của sách và danh sách borrowedBools của thành viên.

interface Book{
    id: number;
    title: string;
    author: string;
    available: boolean;
}

interface Member{
    id : number;
    name: string;
    borrowedBooks: Book[];
}

interface Library{
    books: Book[];
    members: Member[];

    addBook(book: Book): void;
    removeBook(bookId: number): void;
    updateBook(book:Book): void;
    addMember(member:Member): void;
    removeMember(memberId: number): void;
    updateMember(member: Member): void;
    borrowBook(memberId: number, bookId: number): void;
    returnBook(memberId: number, bookId: number): void;
}

class Library implements Library{
    books: Book[];
    members: Member[];

    constructor(booksInit: Book[], membersInit: Member[]){
        this.books = booksInit;
        this.members = membersInit;
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(bookId: number): void {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    updateBook(bookUpdate: Book): void {
        const index = this.books.findIndex(book => book.id === bookUpdate.id);   
        if(index === -1){
            console.log('không tìm thấy ')
        }else{
            this.books[index] = bookUpdate;
        }
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    removeMember(memberId: number): void {
        this.members = this.members.filter(member => member.id !== memberId);
    }

    updateMember(memberUpdate: Member): void {
        const index = this.members.findIndex(member => member.id === memberUpdate.id);   
        if(index === -1){
            console.log('không tìm thấy ')
        }else{
            this.members[index] = memberUpdate;
        }
    }

    borrowBook(memberId: number, bookId: number): void {
        const index = this.books.findIndex(book => book.id === bookId);
        if(index === -1){
            console.log('không tìm thấy sách');
        }else{
            const isExitBook = this.books[index].available;
            if(isExitBook){
                const indexMember = this.members.findIndex(member => member.id === memberId);
                if(index === -1){
                    console.log('không tìm thấy thành viên');
                }else{
                    this.members[indexMember].borrowedBooks.push(this.books[index])
                    this.books[index].available = false;

                    console.log('Mượn thành công')
                }
            }else{
                console.log('sách đã có người mượn')
            }
        }
    }
}

const booksInit: Book[] = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        available: true
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        available: false
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3',
        available: true
    }
]
const membersInit: Member[]= [
    {
    id : 1,
    name: "member 1",
    borrowedBooks: [],
    },
    {
        id : 2,
        name: "member 2",
        borrowedBooks: [],
        }
]

const library = new Library(booksInit, membersInit);
console.log(library);

// const newBook: Book ={
//     id: 4,
//     title: 'Nhà giả kim',
//     author: 'Author nhà giả kim',
//     available: true
// }

// library.addBook(newBook);
// console.log(library);

// library.removeBook(2);
// console.log(library);

// const bookUpdate: Book = {
//     id : 1,
//     title:'book 3 update',
//     author: 'Author 3 update',
//     available: false
// }
// library.updateBook(bookUpdate);

// library.borrowBook(1,2);
// console.log(library);



//Bài 3: Hệ thống quản lý nhân sư và phòng chống trong công ty
//Mô tả: Tạo một hệ thống quản lý nhân sư và phòng ban với các yêu cầu sau:
//1. Class Employee
//- Thuộc tính: 
//  +id: mã nhân viên(kiểu số)
//  +name: Tên nhân viên(kiểu chuỗi)
//  + age: Tuổi nhân viên(kiểu số)
//  + position: Chức vụ(Kiểu chuỗi)
//  + departmentId : Mã phòng ban(kiểu số)
// 2. Class Department
// - Thuộc tính:
//   + id: mã phòng ban(kiểu số)
//   + name: tên phòng ban(kiểu chuỗi)
//   + employees: danh sách nhân viên thuộc phòng ban(kiểu Employee[])
// 3. Interface IEmployeeManager
// - Phương thức:
//   + addEmployee(employee: Employee): void: Thêm một nhân viên mới vào hệ thống
//   + removeEmployee(id: number): void: Xoá nhân viên khỏi hệ thống dựa trên mã nhân viên
//   + gêtmployeeByid(id: number): Employee | undefined: Lấy thống tin nhận viên dựa vào mã nhân viên
//   + listAllEmployee(): Employee[]: Liệt kê tất cả các phòng ban hiện có
//   + updateEmployee(id: number, updateInfo: partial<Employee>): void: Cập nhật thông tin nhân viên
// 4. Interface IDepartmentManader
// - Phương thức
//   + addDepartment(department: Department): void: Thêm một phòng ban mới vào hệ thống
//   + removeDepart(id: number): void: Xoá phòng ban khỏi hệ thống dựa trên mã phòng ban
//   + getDepartmentByid(id: number): department | undefined: Lấy thống tin phòng ban dựa trên mã phòng ban
//   + listAllDepartment(): Department[]: Liệt kê tất cả các phòng ban hiện có
//   + listEmployeeInDepartment(departmentId: number): Employee[]: Liệt kê tất cả các nhân viên thuộc phòng ban nào đó
//   + moveEmployeeToDepartment(employeeId: number, departmentId: number): void: Chuyển nhân viên sang phòng ban khác
// 5. Class EmployeeManager
// - Implement interface IEmployeeManager để quản lý danh sách nhân viên
// 6. Class DepartmentManager
// - Impement interface IDepartmentManager để quản lý danh sách phòng ban và nhân viên
// 7. Yêu cầu mở rộng
// - Sử dụng Utility Types
    //     + Tạo phương thức getEmployeeBasicInfo(id: number): Pick<Employee, 'name' | 'position'> | undefined để chỉ lấy tên và chức vụ của nhân viên
    //     + Tạo phương thức getDepartmentWithoutEmployees(id: number): Omit<Department, 'employees'> | undefined để lấy thông tin phòng ban mà không bao gồm danh sách nhân viên
    // - Báo cáo và thống kê
    //     + Tạo phương thức generateDepartmentReport(departmentId: number): string để tạo báo cáo chứa thông tin chi tiết về phòng ban, bao gồm danh sách nhân viên và các thông tin liên quan 
    //     + Tạo phương thức getDepartmentEmployeeCount(departmentId: number): number để trả về số lượng nhân viên trong một phòng ban cụ thể
    //     + Tạo phương thức getAverageEmployeeInDepartment(departmentId: number): number để tính khối tuổi trung bình của nhận viên trong 1 phòng ban

    // - Tìm kiếm và sắp xếp
    //     + Tạo phương thức findEmployeeByname(name: string): Employee[] để tìm kiếm nhân viên theo tên
    //     + Tạo phương thức sortEmployeeByAge(): Employee[] để sắp xếp danh sách nhân viên theo theo tuổi


//BÀI LÀM:
//Employee.ts
class Employee{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public position: string,
        public departmentId: number
    ){}
}

//Department.ts
class Department{
    constructor(
        public id: number,
        public name: string,
        public employees: Employee[] = []
    ){}
}

//IEmployeeManager.ts
interface IEmployeeManager{
    addEmployee(employee: Employee): void;
    removeEmployee(id: number): void;
    getEmployeeById(id: number): Employee | undefined;
    listAllEmployees(): Employee[];
    updateEmployee(id: number, updateInfo: Partial<Employee>):void;
}

//IDepartmentManager.ts
interface IDepartmentManader{
    addDepartment(department: Department): void;
    removeDepartment(id: number): void;
    getDepartmentById(id: number): Department | undefined;
    listAllDepartments(): Department[];
    listEmployeesInDepartment(departmentId: number): Employee[];
    moveEmployeeToDepartment(employeeId: number, departmentId: number): void;
}

//EmployeeManager.ts
class EmployeeManager implements IEmployeeManager{
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(id: number): void {
        this.employees = this.employees.filter(Employee => Employee.id !== id);
    }

    getEmployeeById(id: number): Employee | undefined {
        return this.employees.find(Employee => Employee.id === id);
    }

    listAllEmployees(): Employee[] {
        return this.employees;
    }

    updateEmployee(id: number, updateInfo: Partial<Employee>): void {
        const employee = this.getEmployeeById(id);
        if(employee){
            Object.assign(employee, updateInfo);
        }
    }

    getEmployeeBassicInfo(id: number): Pick<Employee, 'name' | 'position'> | undefined{
        const employee = this.getEmployeeById(id);
        if(employee){
            const{name, position} = employee;
            return{name, position};
        }
        return undefined;
    }
}

class DepartmentManager implements IDepartmentManader{
    private departments: Department[] = [];
    private employeeManager: EmployeeManager;

    constructor(employeeManager: EmployeeManager){
        this.employeeManager = employeeManager;
    }

    addDepartment(department: Department): void {
        this.departments.push(department);
    }

    removeDepartment(id: number): void {
        this.departments = this.departments.filter(department => department.id !== id)
    }

    getDepartmentById(id: number): Department | undefined {
        return this.departments.find(department => department.id === id);
    }

    listAllDepartments(): Department[] {
        return this.departments;
    }

    listEmployeesInDepartment(departmentId: number): Employee[] {
        const department = this.getDepartmentById(departmentId);
        return department ? department.employees: [];
    }

    moveEmployeeToDepartment(employeeId: number, departmentId: number): void {
        const employee = this.employeeManager.getEmployeeById(employeeId);
        const targetDepartment = this.getDepartmentById(departmentId);
        if(employee && targetDepartment){
            const currentDepartment = this.getDepartmentById(employee.departmentId);
            if(currentDepartment){
                currentDepartment.employees = currentDepartment.employees.filter(emp => emp.id !== employeeId);
            }
            employee.departmentId = departmentId;
            targetDepartment.employees.push(employee);
        }

    }

    getDepartmentWithoutEmployees(id: number): Omit<Department, 'employees'> | undefined{
        const department = this.getDepartmentById(id);
        if(department){
            const{employees, ...departmentWithoutEmployees} = department;
            return departmentWithoutEmployees;
        }
        return undefined;
    }
    generateDepartmentReport(departmentId: number): string{
        const department = this.getDepartmentById(departmentId);
        if(department){
            return`
                Department ID: ${department.id}
                Department Name: ${department.name}
                Employees:
                ${department.employees.map(employee => `- ${employee.name} (${employee.position})`).join('\n')}
            `;
            
        }
        return 'Department not found';
    }

    getDepartmentEmployeeCount(departmentId: number): number{
        const department = this.getDepartmentById(departmentId);
        return department ? department.employees.length: 0;

    }

    getAverageEmployeeAgeInDepartment(departmentId: number): number{
        const employees = this.listEmployeesInDepartment(departmentId);
        if(employees.length === 0) return 0;
        const totalAge = employees.reduce((sum, employee) => sum + employee);
        return totalAge / employees.length;
    }

    findEmployeesByName(name: string): Employee[]{
        return this.employeeManager.listAllEmployees().filter(Employee => Employee.id !== id);
    }

    sortEmployeesByAge(): Employee[]{
        return[...this.employeeManager.listAllEmployees()].sort((a,b))
    }
}

const employeeManager = new EmployeeManager();
const departManager = new DepartmentManager(employeeManager);

const emp1 = new Employee(1, 'John Doe', 30, 'Developer', 1);
const emp2 = new Employee(2, 'Jane Smith', 25, 'QA Engineer', 1);

employeeManager.addEmployee(emp1);
employeeManager.addEmployee(emp2);

const dep1 = new Department(1, 'Development');
const dep2 = new Department(2, 'QA');

departManager.addDepartment(dep1);
departManager.addDepartment(dep2);

departManager.moveEmployeeToDepartment(1,1);
departManager.moveEmployeeToDepartment(2,2);

console.log(departManager.generateDepartmentReport(1));
console.log(departManager.getDepartmentEmployeeCount(2));
console.log(departManager.getAverageEmployeeAgeInDepartment(2));
console.log(departManager.findEmployeesByName('john'));
console.log(departManager.sortEmployeesByAge());