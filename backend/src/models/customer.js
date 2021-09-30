const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer