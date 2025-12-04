const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongoURL = process.env.MONGODB_URL_LOCAL; 
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB server'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// define event listeners for database connection

db.on('connected', ()=>{
    console.log('connected to mongoDb server');
});

db.on('error', (err)=>{
    console.error('error in db connection:', err);
});

db.on('disconnected', ()=>{
    console.log('disconnected from mongoDb server');
})


// export the database connections
module.exports = db;
