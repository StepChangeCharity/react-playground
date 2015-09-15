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

		// <AmountSummary
		// 	Amount={this.props.Answer.Amount}
		// 	Frequency={this.props.Answer.Frequency}
		// />

		var groupName = this.props.Answer.Key;

		return (

			<div className={groupName + " mui-panel"}>
				<input type="hidden" name="Key" value={groupName} />
				<Number name="Amount" label={this.props.Answer.Prompt}
					defaultValue={this.props.Answer.Amount}
					value={this.props.Answer.Amount}
					onChange={this.props.onChange}
					currentFrequency={this.props.Answer.Frequency}
				/>
				<Frequency name="Frequency" label="Which is paid ..."
					defaultValue={this.props.Answer.Frequency}
					value={this.props.Answer.Frequency}
					onChange={this.props.onChange}
				/>

			</div>
		);
	}
});

module.exports = AnswerLine;
