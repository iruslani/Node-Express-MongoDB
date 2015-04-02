var express = require('express');
var app = express();

// Setup body parser:
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//app.use(express.static('www'));
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./routes/coreRoutes.js')(app);

// Simple homepage.
/*app.get('/', function(req, res) {
  res.send('hello world');
});*/

var port = process.env.PORT || 3000;
app.listen(port);
console.log('App serving on port ' + port);