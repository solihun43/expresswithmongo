const Author = require('../model/author.model.js');
const Book = require('../model/book.model.js');

exports.findAll = (req, res) => {
	Book.find()
	.then(books =>{
		res.status(200).json(books);
	}).catch(err =>{
		res.status(500).json({
			message: err.message
		});
	});
};

exports.findByName = (req, res) => {
	if(typeof req.params.bookname !== 'string')
		return res.status(422).json({
			message: 'invalid parameter'
		});

	Book.findOne({ title: req.params.bookname })
	.populate('author')
	.exec(function(err, book){
		if(err){
			if(err.kind === 'ObjectId'){
				return res.status(404).json({
					message: "books not found with given name"+req.params.bookname
				});
			}
			return res.status(500).json({
				message: "error retrieving books"
			});
		}

		res.status(200).json(book);
	});
};

exports.findByAuthorId = (req, res) => {
	Book.find({ author: req.params.authorid })
	.exec(function(err, book){
		if(err){
			if(err.kind === 'ObjectId'){
				return res.status(404).json({
					message: "books not found with given author id "+req.params.authorid
				});
			}
			return res.status(500).json({
				message: "error retrieving books"
			});
		}

		res.status(200).json(book);
	});
};