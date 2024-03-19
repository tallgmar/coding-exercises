import { Genre } from '../enums/Genre';

export interface Book {
    title: string;
    author: string;
    genre: Genre;
    publicationYear: number;
}

