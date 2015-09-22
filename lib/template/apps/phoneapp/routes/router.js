var React = require('react');
var PhoneApp = React.createFactory(require('../components/phone_app/PhoneApp.js'));

module.exports = function(app) {
    
    app.get('/', function (req, res, next) {
        // Render the PhoneApp instance to an HTML string
        var appHTML = React.renderToString(PhoneApp());
        res.render('index.html.ejs', {renderedReactNodes: appHTML});
    });

};
