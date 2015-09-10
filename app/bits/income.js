"use strict";

var React = require("react");
var AnswerLine = require("./answer-line");

var income = React.createClass({
	getInitialState: function() {
		// NOTE: arrays look a PITA in react, going to just use objects for now
		var budget = DB.getBudget();
		return budget;
	},
	componentDidMount: function() {
		//var db = DB.getBudget();
		//this.setState({ webNumber: this.state.WebNumber });
	},
	setAnswer: function(event) {
		var tar = event.target;
		var key = tar.parentElement.parentElement.parentElement.className;
		var field = tar.name;
		var value = tar.value;

		//debugger;

		//this.state.DataItem[field] = value;
		this.state.Income[key][field] = value;

		return this.setState( {CltWork: this.state.Income[key]} );
	},
	render: function() {
		// Prompt: "",
		// DataItem: "",
		// Amount: 0,
		// Frequency: "",
		// Comment: ""
		return (
			<div>
				<h2>Income</h2>
				<ul>
					<li>
						<AnswerLine
							Answer={this.state.Income.CltWork}
							onChange={this.setAnswer}
						/>
					</li>
				</ul>
			</div>
		)
	}
});

module.exports = income;
