// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	username: {type: 'string', required: true},
	password: {type: 'string', require: true},
	email: {type: 'string', required: true},
	phoneNumber: {type: 'string', required: true}
});

// Expose the model
module.exports = restful.model('users', userSchema);