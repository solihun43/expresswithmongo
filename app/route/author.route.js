module.exports = (app) => {

	var authors = require('../controller/author.controller.js');

	app.get('/api/v1/authors/init', authors.init);
	app.get('/api/v1/authors', authors.findAll);
	app.post('/api/v1/authors', authors.create);
}