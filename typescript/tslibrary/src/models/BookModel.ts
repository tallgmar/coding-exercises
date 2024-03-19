import { Genre } from '../enums/Genre';
import { Book } from '../interfaces/Book';

export class BookModel implements Book {
    constructor(
        public title: string,
        public author: string,
        public genre: Genre,
        public publicationYear: number
    ) {}
}