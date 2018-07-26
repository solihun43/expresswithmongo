const Author = require('../model/author.model.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema({
	code: String,
	title: String,
	details: String,
	author: {type: Schema.Types.ObjectId, ref: 'Author'}
});

module.exports = mongoose.model('Book', BookSchema);