"use strict";

var React = require("react");
var Router = require("react-router");
var AnswerLine = require("./answer-line");
var Db = require("../common/DB");

var income = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		// NOTE: arrays look a PITA in react, going to just use objects for now
		var budget = Db.getBudget();
		return budget;
	},

	componentDidMount: function() {
		//var Db = Db.getBudget();
		//this.setState({ webNumber: this.state.WebNumber });
	},

	setAnswer: function(event) {
		var tar = event.target;
		var key = tar.parentElement.parentElement.parentElement.className;
		var field = tar.name;
		var value = tar.value;

		this.state.Income[key][field] = value;

		return this.setState( {key: this.state.Income[key]} );
	},

	saveIncome: function(event) {
		event.preventDefault();

		// we're only going to localStorage, so just save the whole thing
		Db.saveBudget(this.state);

		// this.transitionTo("home");
	},

	render: function() {
		// Prompt: "",
		// DataItem: "",
		// Amount: 0,
		// Frequency: "",
		// Comment: ""
		return (
			<div>
				<form>
					<h2>Income</h2>
					<AnswerLine Answer={this.state.Income.CltWork} onChange={this.setAnswer} />

					<AnswerLine Answer={this.state.Income.PtrWork} onChange={this.setAnswer} />
					<button type="submit" className="mui-btn mui-btn-default mui-btn-raised" onClick={this.saveIncome}>Save</button>
				</form>
			</div>
		)
	}
});

module.exports = income;
