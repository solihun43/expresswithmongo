module.exports = (app) => {

	var authors = require('../controller/author.controller.js');

	app.get('/api/v1/authors/init', authors.init);
	app.get('/api/v1/authors', authors.findAll);
	app.post('/api/v1/authors', authors.create);
	app.get('/api/v1/authors/:authorId', authors.findById);
	app.put('/api/v1/authors/:authorId', authors.update);
	app.delete('/api/v1/authors/:authorId', authors.delete);
}