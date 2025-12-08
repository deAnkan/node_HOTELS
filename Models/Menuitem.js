const mongoose = require('mongoose');

const menuitemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour', 'bitter', 'salty'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: [],
        validate: {
            validator: arr => arr.every(i => typeof i === 'string' && i.length > 0),
            message: 'Ingredients must be non-empty strings'
        },
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const Menuitem = mongoose.model('Menuitem', menuitemSchema);
module.exports = Menuitem;  