var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
	console.log(err);
    console.log('Could not connect to MongoDB.');
    process.exit();
});

require('./app/route/book.route.js')(app);
require('./app/route/author.route.js')(app);

// Create a Server
const port = process.env.PORT || 8081;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})