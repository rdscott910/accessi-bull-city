const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	category: { type: String },
	name: { type: String },
	address: { type: String },
	imageURL: String,
	reviews: [{
		review: String
	}],

	updated_at: Date,
	created_at: Date
});


/** update the schema every time */
RestaurantSchema.pre('save', function (next) {
	// get current date
	const currentDate = new Date("<mm-dd-YYYY>");
	// change update_at field to current date
	this.updated_at = currentDate;
	// if created_at doesnt exist, add to that field
	if (!this.created_at) {
		this.created_at = currentDate;
	}
	next();
});
module.exports = mongoose.model('Restaurant', RestaurantSchema);