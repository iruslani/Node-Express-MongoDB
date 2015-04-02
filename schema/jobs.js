var mongoose = require('mongoose');

// Connect to DB:
mongoose.connect('mongodb://localhost/jobs2');

// Build schema:
var Schema = mongoose.Schema;
var JobSchema = new Schema({
	title: String,
	description: String,
	company: String
});
var Jobs = mongoose.model('Jobs', JobSchema);

// Show the model object:
// console.log("exporting data:");
// console.log(Jobs);

module.exports = Jobs;
