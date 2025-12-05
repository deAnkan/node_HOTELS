const mongoose = require('mongoose');

// define the person schema
const personSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    work :{
        type: String,
        enum: ['chef', 'waiter', 'manager', 'cleaner', 'assistant manager'],
        required: true
    },
    mobile :{
        type: String,
        required: true,
        unique: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary :{
        type: Number,
        required: true
    }
});

// create the person model
const Person = mongoose.model('person',personSchema);

// export the person model
module.exports = Person;