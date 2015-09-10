"use strict";

var React = require("react");

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
	
		return (			
			<div className={this.props.Answer.Key}>
				<input type="hidden" name="Key" value="{this.props.Answer.Key}" />
				<ul>
					<li>
						<label htmlFor="Amount">{this.props.Answer.Prompt}</label>
						<input type="number" name="Amount" ref="Amount" value={this.props.Answer.Amount}
							onChange={this.props.onChange}
						/>&nbsp;(&pound;{this.props.Answer.Amount})
					</li>
					<li>
						<label htmlFor="Frequency">Frequency</label>
						<select ref="Frequency" className="form-control" onChange={this.props.onChange}>
							<option value="1">Weekly</option>
							<option value="2">Monthly</option>
							<option value="3">Yearly</option>
						</select>
					</li>
				</ul>
			</div>
		);	
	}
});

module.exports = AnswerLine;
