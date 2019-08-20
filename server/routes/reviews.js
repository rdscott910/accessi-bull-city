const router = require('express').Router();
const Review = require('../models/review');

// GET route for reviews
router.get('/', (req, res, next) => {
	Review
		.find()
		.exec((err, reviews) => {
			if (err) throw err;
			res.send(reviews);
		})
})

// POST route for reviews
router.post('/', (req, res, next) => {
	const newReview = new Review(req.body)
	newReview.save((err, result) => {
		if (err) return next(err);
		res.send(result);
	})
})

// helper function for routes with the ID parameter
router.param('id', function (req, res, next) {
	let { id } = req.params;
	//check here for incorrect id format
	if (id.length !== 24) {
	  res.status(404).send('Incorrect Review ID, please update and try again.');
	} else {
		Review.findById(id).exec((err, result) => {
		if (err) return next(err);
		
		req.review = result;
		next();
		})
	}
});

// GET route here for Review by ID
router.get('/:id', (req, res, next) => {
	//this takes advantage of our "middleware" helper function above
	req.review ? res.status(200).send(req.review) : res.status(404).send('Review not found.');
  });
  
// POST route here for Review by ID - to update individual info
router.post('/:id', (req, res, next) => {	
	// Mongoose function to find and updated specific document
	Review.findByIdAndUpdate( req.review._id, 
	  // we'll pass in our updates, Mongo is smart enough to overwrite what is present and leave the rest
	  req.body,
	  // this parameter tells Mongo to return the updated object to us
	  { new: true }, 
	  // return an error or return our shiny updated Review
	  function (err, result) {
		if (err) return next(err);
		res.send(result);
	});
});

module.exports = router;