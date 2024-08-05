"use strict";
//Bài tập: Quản lý sách thư viện
//+Định nghĩa các kiểu dữ liệu:
//Tạo các interface Book, Member và Library
//Book có các thuộc tính như id, title, author, và available(boolean)
//Member có các thuộc tính như id, name, và borrowedBooks(mảng các book)
//Library có các thuộc tính như books, members
//+ Quản lý sách: Viết các phương thức trong class Library để thêm,
//xoá, và cập nhật thông tin sách
class Library {
    constructor(booksInit, membersInit) {
        this.books = booksInit;
        this.members = membersInit;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }
    updateBook(bookUpdate) {
        const index = this.books.findIndex(book => book.id === bookUpdate.id);
        if (index === -1) {
            console.log('không tìm thấy ');
        }
        else {
            this.books[index] = bookUpdate;
        }
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(memberId) {
        this.members = this.members.filter(member => member.id !== memberId);
    }
    updateMember(memberUpdate) {
        const index = this.members.findIndex(member => member.id === memberUpdate.id);
        if (index === -1) {
            console.log('không tìm thấy ');
        }
        else {
            this.members[index] = memberUpdate;
        }
    }
    borrowBook(memberId, bookId) {
        const index = this.books.findIndex(book => book.id === bookId);
        if (index === -1) {
            console.log('không tìm thấy sách');
        }
        else {
            const isExitBook = this.books[index].available;
            if (isExitBook) {
                const indexMember = this.members.findIndex(member => member.id === memberId);
                if (index === -1) {
                    console.log('không tìm thấy thành viên');
                }
                else {
                    this.members[indexMember].borrowedBooks.push(this.books[index]);
                    this.books[index].available = false;
                    console.log('Mượn thành công');
                }
            }
            else {
                console.log('sách đã có người mượn');
            }
        }
    }
}
const booksInit = [
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
];
const membersInit = [
    {
        id: 1,
        name: "member 1",
        borrowedBooks: [],
    },
    {
        id: 2,
        name: "member 2",
        borrowedBooks: [],
    }
];
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
// library.borrowBook(1, 2);
// console.log(library);




