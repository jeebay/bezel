// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var friendSchema = new mongoose.Schema({
	user: {type: 'ObjectId', ref: 'users', required: true},
	friendPhone: {type: 'string', required: true},
	friendEmail: {type: 'string', required: true},
	friendName: {type: 'string', required: true},
	friendUserName: {type: 'string'}
});

// Expose the model
module.exports = restful.model('friends', friendSchema);