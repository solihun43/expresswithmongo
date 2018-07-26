module.exports = (app) => {
	var books = require('../controller/book.controller.js');

	app.get('/api/v1/books', books.findAll);
	app.get('/api/v1/books/:bookname', books.findByName);
	app.get('/api/v1/books/author/:authorid', books.findByAuthorId);
}