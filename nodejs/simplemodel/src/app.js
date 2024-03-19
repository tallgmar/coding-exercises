const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');

// Create an Express application
const app = express();

const url = `mongodb+srv://bookcluster.atiqocx.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`;
const certificate = path.join(__dirname, '..', 'certificates/certificate.pem');

// Connect to MongoDB
mongoose.connect(url, {
    tls: true,
    // location of a local .pem file that contains both the client's certificate and key
    tlsCertificateKeyFile: `${certificate}`,
    authMechanism: 'MONGODB-X509',
    authSource: '$external',
    dbName: 'BookStore'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the application if unable to connect to the database
});

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', bookRoutes); // Mount bookRoutes at /api/books

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});