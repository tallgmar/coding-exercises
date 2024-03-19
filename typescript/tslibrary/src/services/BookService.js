"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
var BookService = /** @class */ (function () {
    function BookService() {
        this.books = [];
    }
    BookService.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookService.prototype.getAllBooks = function () {
        return this.books;
    };
    return BookService;
}());
exports.BookService = BookService;
