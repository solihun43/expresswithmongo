const Book = require('../model/book.model.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	age: Number,
	books : [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = mongoose.model('Author', AuthorSchema);