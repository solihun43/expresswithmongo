const Author = require('../model/author.model.js');
const Book = require('../model/book.model.js');

exports.init = (req, res) => {
	var author1 = new Author({
		firstname: 'cakli',
		lastname: 'capli',
		age: 40
	});
	author1.save(function(err){
		if(err) return console.error(err.stack);

		console.log("create author1");
		var book1 = new Book({
			code: 'A-100',
			title: "first Book",
			details: "Price 300.00 USD",
			author: author1._id
		});
		book1.save(function(err){
			if(err) return console.error(err.stack);
			console.log("create book1");
		});

	});

	var author2 = new Author({
		firstname: 'jack',
		lastname: 'olly',
		age: 50
	});
	author2.save(function(err){
		if(err) return console.error(err.stack);

		console.log("create author2");
		var book2 = new Book({
			code: 'A-101',
			title: "overlord",
			details: "Price 350.00 USD",
			author: author2._id
		});
		book2.save(function(err){
			if(err) return console.error(err.stack);
			console.log("create book2");
		});

	});
	res.send("Done Initial Data!");
};

exports.create = (req, res) => {
	if(typeof req.body.firstname === 'string'
		&& typeof req.body.lastname === 'string' 
		&& typeof req.body.age === 'number'){

		var author = new Author({
			firstname : req.body.firstname,
			lastname : req.body.lastname,
			age : req.body.age
		});

		author.save((err) =>{
			if(err) return res.status(500).json({message: 'saving error'});

			res.status(200).json({message: 'save succesfully'});
		});
	}else{
		res.status(422).json({
			message: 'unknown field'
		});
	}
}

exports.findAll = (req, res) => {
	Author.find()
	.then(authors => {
		res.status(200).json(authors);
	}).catch(err => {
		res.status(500).json({
			message: err.message
		});
	});
};

exports.findById = (req, res) => {

	Author.findById(req.params.authorId)
	.exec((err, author) => {
		console.log(author+"\n =======");
		if(err) return res.status(400).json({ mesaage: 'id not found'});

		res.status(200).json(author);
	});
};

exports.update = (req, res) => {
	if(req.params.authorId == null) return res.status(500).json({ message: 'null entity'});

	Author.findByIdAndUpdate(
		req.params.authorId,
		req.body,
		{new : true},
		(err, author) =>{
			if(err) return res.status(500).json({
				message: 'error when updating'
			});

			res.status(200).json(author);
	});
};