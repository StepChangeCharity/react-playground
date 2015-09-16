"use strict";

var React = require("react");
var Utils = require("./utils.js");

var AmountSummary = React.createClass({
	getInitialState: function() {
		return {
			Amount: 0,
			Frequency: "Monthly"
		}
	},

	render: function() {
		var summary = Utils.getSummary(this.props.Amount, this.props.Frequency);

		summary = Utils.commafy(summary);

		return (

			<span className="monthly-amount">&pound;{summary} pcm</span>
		)
	}

});

module.exports = AmountSummary;
