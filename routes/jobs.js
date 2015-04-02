// Jobs Routes Module
var express = require('express');
var router = express.Router();
var Jobs = require('../schema/jobs');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get( '/', function( req, res ) {
	// sort by latest:
    return Jobs.find().sort({_id:-1}).limit(15).find( function( err, jobs ) {
        if( !err ) {
            res.render('jobs.ejs', {
              pageTitle: 'Jobs Page',
              message: jobs

            });
            console.log(jobs);
        } else {
            return console.log( err );
        }
    });
});

// define the about route
router.get('/add', function(req, res) {
  res.render('new.ejs', {
              pageTitle: 'Add a new Job'
            });
})

module.exports = router;
