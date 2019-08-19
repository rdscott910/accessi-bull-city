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

module.exports = router;