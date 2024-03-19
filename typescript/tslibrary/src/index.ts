import { BookModel } from './models/BookModel';
import { Genre } from './enums/Genre';
import { BookService } from './services/BookService';

// Create book service
const bookService = new BookService();

// Add some books
const book1 = new BookModel('The Great Gatsby', 'F. Scott Fitzgerald', Genre.Fiction, 1925);
const book2 = new BookModel('To Kill a Mockingbird', 'Harper Lee', Genre.Fiction, 1960);

bookService.addBook(book1);
bookService.addBook(book2);

// Get all books
const allBooks = bookService.getAllBooks();
console.log('All books:', allBooks);