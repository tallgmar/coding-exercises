"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookModel_1 = require("./models/BookModel");
var Genre_1 = require("./enums/Genre");
var BookService_1 = require("./services/BookService");
// Create book service
var bookService = new BookService_1.BookService();
// Add some books
var book1 = new BookModel_1.BookModel('The Great Gatsby', 'F. Scott Fitzgerald', Genre_1.Genre.Fiction, 1925);
var book2 = new BookModel_1.BookModel('To Kill a Mockingbird', 'Harper Lee', Genre_1.Genre.Fiction, 1960);
bookService.addBook(book1);
bookService.addBook(book2);
// Get all books
var allBooks = bookService.getAllBooks();
console.log('All books:', allBooks);
