const router = require('express').Router();
const Restaurant = require('../models/restaurant');

'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('fq1O0Ho6_yIlo9a2iFCuk3gZ3OPU4YqQgDHbB5xdpSJrVfVyWjCjQqcdPYBMB3T8n0GFhIhy91gJ3-ruvkcpQTlbuUHA6akuAFBv4O3y-ZlV7sQyA-xsXIhCDOxaXXYx');

router.get('/:location', (req, res, next) => {
	let { location } = req.params;
	client.search({
		location: location
	  }).then(response => {
		  res.send(response.jsonBody.businesses);
	  }).catch(e => {
		console.log(e);
	  });
})


module.exports = router;