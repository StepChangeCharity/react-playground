"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AnswerLine = require("./answer-line");
var Menu = require("./menu");
var BudgetSummary = require("./budget-summary");
//var Db = require("../common/DB");
var AnswerActions = require("../actions/answerActions");
var AnswerStore = require("../stores/answerStore");


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
		// NOTE: Probably better as an array rather than objects, but don't
		// want to dwell on it too much at the moment!
		var income = AnswerStore.getIncome();
		var IS_BLANK = undefined;

		// init dataitems (yes, there WILL be a better way to do this!)
		this.addIncomeItem(income, "CltWork", "CURRENCY", IS_BLANK, "Monthly", "How much do you earn?");
		this.addIncomeItem(income, "PtrWork", "CURRENCY", 0, "4-Weekly", "How much does your partner earn?");
		this.addIncomeItem(income, "ChildSupport", "CURRENCY", IS_BLANK, "Monthly", "How much child support do you receive?")

		return {
			Income: income,
			Errors: {},
			dirty: false
		}
	},

	addIncomeItem: function(income, dataItem, type, startAmount, startFreq, prompt) {
		var current = income[dataItem];
		if (current) {
				// DataItem already present
				return;
		}

		var newItem = {
			DataItem: dataItem,
			TypeRequired: type,
			Amount: startAmount,
			Frequency: startFreq,
			Prompt: prompt,
			Comment: ""
		};

		income[dataItem] = newItem;
	},

	componentDidMount: function() {
		//var income = Db.getIncome();
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

		this.state.Income[dataItem][field] = value;
		this.setState({dirty: true});

		AnswerActions.changeIncome(this.state.Income[dataItem]);

		return this.setState( {key: this.state.Income[dataItem]} );
	},

	saveIncome: function(event) {
		event.preventDefault();

		// we're only going to localStorage, so just save the whole thing
		//Db.saveIncome(this.state.Income);
		AnswerActions.saveIncome(this.state.Income);

		// this.transitionTo("home");
		// no longer dirty!
		this.setState({dirty: false});

		// TODO:
		// AnswerActions.saveIncome(this.state.Income);
	},

	render: function() {
		var formIsDirty;
		if (this.state.dirty) {
			formIsDirty = <span className='mui-pull-right form-dirty'>*</span>;
		}
		var income = this.state.Income;
		var totalIncome = parseInt(income.CltWork.Amount) + parseInt(income.PtrWork.Amount) + parseInt(income.ChildSupport.Amount);

		return (
			<div id="content-wrapper">
				<Menu />

				<div id="appbar-placeholder" className="mui-appbar">
					<p className="mui-text-display1 mui-text-white">Debt Remedy: Income</p>
				</div>

				<div className="mui-container-fluid">
					<div className="mui-row">
						<div className="mui-col-md-6 mui-col-md-offset-1">
							<form>
								<h2>Income {formIsDirty} </h2>

								<AnswerLine Answer={this.state.Income.CltWork} onChange={this.setAnswer} />

								{/* Note the lack of a monthly option*/}
								<AnswerLine Answer={this.state.Income.PtrWork} onChange={this.setAnswer} supports="W/F/4/Y" />

								<AnswerLine Answer={this.state.Income.ChildSupport} onChange={this.setAnswer} />

								<button type="submit" className="mui-btn" data-mui-color="accent" onClick={this.saveIncome}>Save</button>
								<span className="mui-pull-right">
									<Link to="expenditure" className="mui-btn" data-mui-color="primary">&laquo; Back</Link>
									<Link to="assets" className="mui-btn" data-mui-color="primary">Next &raquo;</Link>
								</span>
							</form>
						</div>
						<div className="mui-col-md-3 mui-col-md-offset-1">
							<BudgetSummary totalIncome={totalIncome} totalExpenditure={159} />
						</div>
					</div>
				</div>

			</div>
		)
	}
});

module.exports = income;
