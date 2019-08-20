const router = require('express').Router();
const Restaurant = require('../models/restaurant');

'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('fq1O0Ho6_yIlo9a2iFCuk3gZ3OPU4YqQgDHbB5xdpSJrVfVyWjCjQqcdPYBMB3T8n0GFhIhy91gJ3-ruvkcpQTlbuUHA6akuAFBv4O3y-ZlV7sQyA-xsXIhCDOxaXXYx');

// helper function for routes with Restaurant ID parameter
router.param('id', (req, res, next) => {
	let { id } = req.params;
	if (id.length !== 24) {
		res.status(404).send('Incorrect Restaurant ID, please update and try again.');
	} else {
		Restaurant.findById(id).exec((err, result) => {
			if (err) return next(err);
		
			req.restaurant = result;
			next();
		})
	}
})

// POST route for updating an existing restaurant
router.post('/:id', (req, res, next) => {
	Restaurant.findByIdAndUpdate(req.restaurant._id,
		req.body,
		{ new: true },
		function (err, result) {
			if (err) return next(err);
			res.send(result);
		});
});

// Make request to yelp fusion and store the results in database
router.get('/:location', (req, res, next) => {
	let { location } = req.params;
	client.search({
		location: location
	  }).then(response => {
		  res.send(response.jsonBody.businesses);
		  for(i=0; i<response.jsonBody.businesses.length; i++){
			const newRestaurant = new Restaurant(response.jsonBody.businesses[i]);
			newRestaurant.save();
		}	 
	  }).catch(e => {
		console.log(e);
	  });
})

// GET request for restaurants saved in the database
router.get('/', (req, res, next) => {
	Restaurant
		.find()
		.exec((err, restaurants) => {
			if (err) throw err;
			res.send(restaurants);
		})
})


module.exports = router;