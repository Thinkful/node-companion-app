var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
	name: String,
	description: String
});
