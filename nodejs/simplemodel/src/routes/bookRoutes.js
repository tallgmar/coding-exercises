const express = require('express');
const router = express.Router();
const bookDao = require('../dao/bookDao');

// Define routes
router.post('/books', async (req, res) => {
    try {
        const newBook = await bookDao.createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create book', error: error.message });
    }
});

// GET route to retrieve all books
router.get('/books', async (req, res) => {
    try {
        // Query all books from the database
        const books = await bookDao.getBooks();

        // Send the list of books as a response
        res.json(books);
    } catch (error) {
        console.error('Error retrieving books:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;