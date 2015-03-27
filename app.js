var express = require('express');
var jobs = require('./routes/jobs');

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world')
})

app.use('/jobs', jobs);


var port = 3000;
app.listen(port);
console.log('App serving on port' + port);