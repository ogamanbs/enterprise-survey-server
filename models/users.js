const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    companySize: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    farePrice: {
        type: Number,
    },
    shareWithInvestors: {
        type: Boolean
    },
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema);