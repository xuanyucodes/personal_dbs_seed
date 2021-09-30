const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category_id: {
        type: Number,
        required: true,
        ref: 'Category'
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product