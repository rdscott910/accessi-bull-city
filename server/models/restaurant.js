const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	category: { type: String },
	name: { type: String },
	address: { type: String },
	imageURL: String,
	reviews: [{
		review: String
	}]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);