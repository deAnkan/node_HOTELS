const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

personSchema.pre('save',async function(next){
    const person = this;

    // Hash the password only if it has been modified(or is new)
    if(!person.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password,salt);
        person.password = hashedPassword;
        next();
    }
    catch(err){
        next(err);
    }
});

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
}

// create the person model
const Person = mongoose.model('person',personSchema);

// export the person model
module.exports = Person;