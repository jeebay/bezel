// Dependencies
var express = require('express');
var app = module.exports = express();

// Requiring node-jsx extends `require` to handle transpilation of .js/jsx files
// to vanilla JS for use in server-side rendering. Keep this line beneath 
// browserify in order to not double translate .js files requested by the browser
require('node-jsx').install();

// Set ./views as the views path
app.set('views', __dirname + '/views');

// Use ejs as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Requiire the route file
require('./routes/router.js')(app);