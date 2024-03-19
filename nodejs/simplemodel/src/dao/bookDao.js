const Book = require('../models/book');

// Define functions for database operations
const createBook = async (bookData) => {
    try {
        const newBook = new Book(bookData);
        return await newBook.save();
    } catch (error) {
        throw error;
    }
}

const getBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        throw new Error('Error retrieving books');
    }
}

module.exports = {
    createBook, getBooks
};