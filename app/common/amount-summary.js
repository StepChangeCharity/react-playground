"use strict";

var React = require("react");

var AmountSummary = React.createClass({
	getInitialState: function() {
		return {
			Amount: 0,
			Frequency: "Monthly"
		}
	},

	getSummary: function(amount, frequency) {
		var multiplier = 1;
    var pcm = 0;

		if (frequency === "Yearly") multiplier = 0.083333;
		else if (frequency === "Quarterly") multiplier = 0.333333;
		else if (frequency === "Monthly") multiplier = 1;
		else if (frequency === "4-Weekly") multiplier = 1.083333;
		else if (frequency === "Weekly") multiplier = 4.33333;
		else if (frequency === "Fortnightly") multiplier = 2.166666;

    pcm = (amount * multiplier).toFixed(2);

		return pcm;
	},

	render: function() {
    var summary = this.getSummary(this.props.Amount, this.props.Frequency);

		return (

			<span className="monthly-amount">&pound;{summary} pcm</span>
		)
	}

});

module.exports = AmountSummary;
