/** @jsx React.DOM */

var React = require('react');

var AvailabilitySelector = React.createClass({

    render: function () {
        return (
            <div>
                <label htmlFor="available">How long are you available?</label>
                <div className="input-group">
                    <input type="number" id="available" className="form-control" min="0" max="60" />
                    <div className="input-group-addon">minutes</div>
                </div>
            </div>
        );
    }
});

module.exports = AvailabilitySelector;