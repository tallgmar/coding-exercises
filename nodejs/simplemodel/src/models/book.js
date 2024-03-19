const mongoose = require('mongoose');

// Define a schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    publicationYear: { type: Number }
}, { collection: 'Books' });

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model
module.exports = Book;