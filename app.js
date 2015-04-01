var express = require('express');
var jobs = require('./routes/jobs');
var api = require('./routes/api');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var router = express.Router();
var app = express();

app.use(express.static('www'));

// Setup body parser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Simple homepage.
app.get('/', function(req, res) {
  res.send('hello world');
});

// Use routes:
app.use('/jobs', jobs);
app.use('/api', api);

app.listen(port);
console.log('App serving on port ' + port);