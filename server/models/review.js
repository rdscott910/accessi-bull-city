const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	restaurantId: String,
	name:  String ,
	content: String ,
	rating: Number,

	updated_at: Date,
	created_at: Date
});

/** update the schema every time */
ReviewSchema.pre('save', function (next) {
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

module.exports = mongoose.model('Review', ReviewSchema);