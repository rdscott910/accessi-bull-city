const router = require('express').Router();
const Restaurant = require('../models/restaurant');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('fq1O0Ho6_yIlo9a2iFCuk3gZ3OPU4YqQgDHbB5xdpSJrVfVyWjCjQqcdPYBMB3T8n0GFhIhy91gJ3-ruvkcpQTlbuUHA6akuAFBv4O3y-ZlV7sQyA-xsXIhCDOxaXXYx');

// GET request for restaurants saved in the database
router.get('/', (req, res, next) => {
	Restaurant
		.find()
		.exec((err, restaurants) => {
			if (err) throw err;
			res.send(restaurants);
		})
})

// helper function for routes with object id parameter
router.param('objectId', (req, res, next) => {
	let { objectId } = req.params;
		Restaurant.findById(objectId).exec((err, result) => {
			if (err) return next(err);
		
			req.restaurant = result;
			next();
		})
})

// POST route for updating an existing restaurant
router.post('/restaurant/update/:objectId', (req, res, next) => {

	Restaurant.findByIdAndUpdate(req.restaurant._id,
		req.body,
		{ new: true },
		(err, result) => {
			if (err) return next(err);
			res.send(result);
		});
});

// GET route for single restaurant by ID
router.get('/database/:id', (req, res, next) => {
	let {id} = req.params;
	Restaurant.findOne({id: id}).exec((err, response) => {
		if (err) throw err;
		res.send(response)
	})
});

// GET route for single restaurant from yelp fusion 
router.get('/api/:id', (req, res, next) => {
	let { id } = req.params;
	client.business(`${id}`).then(response => {
		res.send(response.jsonBody);
	  }).catch(e => {
		console.log(e);
	  });
});

//GET route here for Restaurant by ID
router.get('/:id', (req, res, next) => {
	let { id } = req.params;
	Restaurant.find({id: id}).exec((err, response) => {
		if (err) throw err;
		res.send(response)
	})
});

//GET route here for Restaurant by ID && saving the restaurant id to the database
router.get('/save/:id', (req, res, next) => {
	//this takes advantage of our "middleware" helper function above
	let { id } = req.params;
	client.business(`${id}`).then(response => {
		res.send(response.jsonBody)
		const newRestaurant = new Restaurant(response.jsonBody)
		newRestaurant.save()
	  }).catch(e => {
		console.log(e);
	  });
});

// POST route for updating database restaurants with new reviews
router.post('/restaurant/reviews/:id', (req,res,next) => {
	let {id} = request.params;
	Restaurant.find({id: id},
		req.body,
		{ new: true },
		(err, result) => {
			if (err) return next(err);
			res.send(result);
		});
});

// Make request to yelp fusion and store business name and id in database
router.get('/location/:location', (req, res, next) => {
	let { location } = req.params;
	client.search({
		location: location
	  }).then(response => {
		  res.send(response.jsonBody.businesses); 
	  }).catch(e => {
		console.log(e);
	  });
});

module.exports = router;