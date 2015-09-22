// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// MongoDB connection
mongoose.connect('mongodb://localhost/bezel-test');

// Initialize Express and middleware
var app = module.exports = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

// Set up routes
require('./routes/api.js')(app);
