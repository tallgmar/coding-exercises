import { Book } from '../interfaces/Book';
import { BookModel } from '../models/BookModel';

export class BookService {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getAllBooks(): Book[] {
        return this.books;
    }
}