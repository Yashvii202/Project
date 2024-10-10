const mongoose = require ('mongoose')

const bookSchema = mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    author: String,
    description: String,
    price: Number,
    category: String,
    rating: Number
})

const Book = new mongoose.model('Book',bookSchema)

module.exports = Book