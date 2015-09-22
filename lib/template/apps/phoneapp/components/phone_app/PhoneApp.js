/** @jsx React.DOM */

var React = require('react');
var AvailabilitySelector = require('../availability_selector/AvailabilitySelector.js');
var Radium = require('radium');

// var DialButton = React.createFactory(require('./DialButton.jsx'));
// var ManageFriendsButton = React.createFactory(require('./ManageFriendsButton.jsx'));

var PhoneApp = React.createClass({
    componentDidMount: function () {
        console.log("hooray!!");
    }, 

    render: function () {
        return (
            <div style={styles.actionList}>
                <AvailabilitySelector />
                <br />
            </div> 
        );
    }
});

var styles = {
    actionList: {
        color: "#224",
        border: "1px solid black",
        ':hover': {
            backgroundColor: '#DFD'
        }
    }
}

module.exports = Radium(PhoneApp);