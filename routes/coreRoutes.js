var jobs = require('../routes/jobs');
var api = require('../routes/api');

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = "Hello from EJS" ;
	    // Output html rendered by react
	    res.render('index.ejs' 
	    	//,{reactOutput: "Hello World"}
	    	,{
	    		pageTitle: 'Home',
	    		output: reactHtml
	    	});
	});
	app.use('/jobs', jobs);
	app.use('/api', api);
};