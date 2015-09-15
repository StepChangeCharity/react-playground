"use strict";

var React = require("react");
var Router = require("react-router");
var AnswerLine = require("./answer-line");
var Db = require("../common/DB");

var income = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm("Leave without saving?")) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		// NOTE: arrays look a PITA in react, going to just use objects for now
		var budget = Db.getBudget();

		return {
			Budget: budget,
			Errors: {},
			dirty: false
		}
	},

	componentDidMount: function() {
		//var Db = Db.getBudget();
		//this.setState({ webNumber: this.state.WebNumber });
	},

	setAnswer: function(event) {
		var field = event.target.name;
		var value = event.target.value;

		// Find the underlying DataItem
		var ele = event.target;
		while (ele.dataset.key === undefined && ele.tagName !== "BODY") {
			ele = ele.parentElement;
		}

		var dataItem = ele.dataset.key;

		this.state.Budget.Income[dataItem][field] = value;
		this.setState({dirty: true});

		return this.setState( {key: this.state.Budget.Income[dataItem]} );
	},

	saveIncome: function(event) {
		event.preventDefault();

		// we're only going to localStorage, so just save the whole thing
		Db.saveBudget(this.state.Budget);

		// this.transitionTo("home");
		// no longer dirty!
		this.setState({dirty: false});
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
					<AnswerLine Answer={this.state.Budget.Income.CltWork} onChange={this.setAnswer} />

					<AnswerLine Answer={this.state.Budget.Income.PtrWork} onChange={this.setAnswer} />
					<button type="submit" className="mui-btn mui-btn-default mui-btn-raised" onClick={this.saveIncome}>Save</button>
				</form>
			</div>
		)
	}
});

module.exports = income;
