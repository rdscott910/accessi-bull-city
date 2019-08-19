const router = require('express').Router();
const faker = require('faker');
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');

const rating = [1,2,3,4,5]
const category = ['Italian', 'Fast-Food', 'Mexican', 'Chinese', 'Korean', 'Greek', 'Coffee']

router.get('/restaurants', (req, res, next) => {
	for (let i=0; i < 60; i++) {
		let rest = new Restaurant();
		rest.category = category[Math.floor(Math.random() * category.length)]
		rest.name = faker.company.companyName()
		rest.address = faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.country()
		rest.imageURL = faker.image.imageUrl(800, 800, "food")
		rest.reviews = []

		rest.save((err) => {
			if (err) throw err
		})
	}
	res.status(200).end()
});

router.get('/reviews', (req, res, next) => {
	for (let i=0; i<10; i++) {
		let review = new Review();
		review.reviewerName = faker.name.firstName()
		review.reviewContent = faker.lorem.paragraph()
		review.rating = rating[Math.floor(Math.random() * rating.length)]
	
		review.save((err) => {
			if (err) throw err
		})
	}
	res.status(200).end()
})

module.exports = router;