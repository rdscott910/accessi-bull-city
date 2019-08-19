const router = require('express').Router();
const Reviews = require('../models/review');

// set route to get reviews
router.get('/', (req, res, next) => {
	Reviews
			.find()
			.exec((err, reviews) => {
				if (err) throw err;
				res.send(reviews);
			})
})

module.exports = router;