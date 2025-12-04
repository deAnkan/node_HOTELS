const mongoose = require('mongoose');

// define the mongodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = 'mongodb+srv://ankan_d:ankan001@cluster0.fwbrchy.mongodb.net/';
mongoose.connect(mongoURL);

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
