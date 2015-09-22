// Models
var User = require('../models/user.js');
var Friend = require('../models/friend.js');

module.exports = function (app) {
	// Validations
	var normalizeNumber = function (req, res, next) {
		if (!req.body.phoneNumber) {
			return next({status: 400, err: "no phone number!"})
		} else {
			req.body.phoneNumber = req.body.phoneNumber.replace(/[^\d]/g, '');
			return next();
		}
	};

	// Register Routes
	User.methods(['get', {method: 'put', before: normalizeNumber}, {method: 'post', before: normalizeNumber}, 'delete',]);
	User.register(app, '/users');

	Friend.methods(['get', 'post', 'put', 'delete'])
	Friend.register(app, '/friends')
	
	// Nested resource i.e. /users/:id/friends
	// {detail: true} makes is what indicates that friends is nested
	User.route("friends", {
		handler: function (req, res, next, err, model) {
			console.log(model)
			Friend.Model.find({user: model["_id"]}, function (err, list) {
				if (err) {
					console.log("error")
					return next({status: 500, err: "could not pull up friend list"});
				} else {
					console.log("worked")
					res.status = 200;

					res.bundle = list;
					return next();
				}
			});
		},
		detail: true,
		methods: ['get']
	});
}

