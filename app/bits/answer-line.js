"use strict";

var React = require("react");
var Number = require("../common/number-input");
var Frequency = require("../common/frequency-input");
var AmountSummary = require("../common/amount-summary");
var Utils = require("../common/utils");

// Prompt: "How much do you earn?",
// DataItem: "Clt.Work",
// Amount: 0,
// Frequency: "Monthly",
// Comment: ""

var AnswerLine = React.createClass({
	propTypes: {
		Answer: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		return {
			zoneErrors: [],
			isAmountValid: true,
			isFrequencyValid: true
		}
	},

	// onError: function(errors) {
	// 	this.state.zoneErrors = [];
	// 	this.state.zoneErrors.push(errors);
	// },

	isAnswerValid: function() {
		var valid = true;
		// reset error cache
		this.state.zoneErrors = [];

		var pcm = Utils.getSummary(this.props.Answer.Amount, this.props.Answer.Frequency);
		if (pcm > 500) {
			// es6 string template stuff no worky in react (extension can be installed)
			var msg = "£" + pcm + " per calendar month is too many pounds.";
			this.state.zoneErrors.push(msg);
			valid = false;
		}

		this.state.isAmountValid = this.state.isFrequencyValid = valid;

		return valid;
	},

	getZoneErrors: function() {
		var msgs = "";

		if (!this.isAnswerValid())	{
			msgs = "<ul class='zone-errors'>";
			for (var i in this.state.zoneErrors) {
				var msg = this.state.zoneErrors[i];
				msgs += "<li>" + msg + "</li>";
			}
			msgs += "</ul>";
		}

		return {
			__html: msgs
		}
	},


	/// We have to validate a DataItem as group, the value maybe OK as a Yearly
	/// amount, but not as a Monthly, so we calculate the PCM version and work with that
	///
	onDataItemChange: function(event) {
		this.props.onChange(event);

		var isDataItemValid = this.isAnswerValid();

		this.state.isAmountValid = isDataItemValid;
		this.state.isFrequencyValid = isDataItemValid;
	},


	render: function() {
		// Re the "ref" thing below - this _seems_ to be a kind of reference
		// between the virtual DOM (which is what "render") constructs and
		// the actual DOM - see https://facebook.github.io/react/docs/more-about-refs.html

		var ans = this.props.Answer;

		return (

			<div className="mui-panel" data-key={ans.Key}>
				<div dangerouslySetInnerHTML={this.getZoneErrors()} />

				<Number name="Amount" label={ans.Prompt}
					defaultValue={ans.Amount}
					value={ans.Amount}
					onChange={this.onDataItemChange}
					isValid={this.state.isAmountValid}
					currentFrequency={ans.Frequency}
				/>
				<Frequency name="Frequency" label="Which is paid ..."
					defaultValue={ans.Frequency}
					value={ans.Frequency}
					onChange={this.onDataItemChange}
					isValid={this.state.isFrequencyValid}
				/>

			</div>
		);
	}
});

module.exports = AnswerLine;
