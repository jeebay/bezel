var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var env = require('node-env-file');

// use the environment variables in the ./.env file
env(__dirname + '/.env');

// if in the development environment, transpile assets on request in development
// run gulp in production 
if ('development' == process.env.NODE_ENV) {
    app.use(require('browserify-dev-middleware')({
    src: path.resolve(__dirname),
    transforms: [require('reactify')]
    }));
}

// route static file requests to ./public
app.use(express.static(path.join(__dirname, "public")));

//----------------------------------------------------------------
//  route requests to your various apps below
//----------------------------------------------------------------
app.use('/api/v1', require('./api/v1'));
app.use('/', require('./apps/phoneapp'));

// all routes not captured by routers in the above apps are served a basic 404
app.get('*', function(req, res) {
    res.send('404 - This is not the page you are looking for!');
});

app.listen(process.env.PORT, function (err) {
    console.log("rocking and rolling on port " + process.env.PORT)
});