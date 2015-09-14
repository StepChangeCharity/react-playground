"use strict";

var React = require("react");
var Number = require("../common/number-input");
var Frequency = require("../common/frequency-input");
var AmountSummary = require("../common/amount-summary");

// Prompt: "How much do you earn?",
// DataItem: "Clt.Work",
// Amount: 0,
// Frequency: "Monthly",
// Comment: ""

var AnswerLine = React.createClass({

	render: function() {
		// Re the "ref" thing below - this _seems_ to be a kind of reference
		// between the virtual DOM (which is what "render") constructs and
		// the actual DOM - see https://facebook.github.io/react/docs/more-about-refs.html

		var groupName = this.props.Answer.Key;

		return (

			<div className={groupName}>
				<input type="hidden" name="Key" value={groupName} />

				<Number name="Amount" label="Amount (&pound;)"
					defaultValue={this.props.Answer.Amount}
					value={this.props.Answer.Amount}
					onChange={this.props.onChange}
				/>

				<Frequency name="Frequency" label="Frequency"
					defaultValue={this.props.Answer.Frequency}
					value={this.props.Answer.Frequency}
					onChange={this.props.onChange}
				/>

				<AmountSummary
					Amount={this.props.Answer.Amount}
					Frequency={this.props.Answer.Frequency}
				/>
			</div>
		);
	}
});

module.exports = AnswerLine;
