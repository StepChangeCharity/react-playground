"use strict";

var React = require("react");
var AmountSummary = require("../common/amount-summary");
var AnswerStore = require("../stores/answerStore");


var budgetSummary = React.createClass({
  getInitialState: function() {
    return {
      totalIncome: this.props.totalIncome,
      totalExpenditure: this.props.totalExpenditure
    }
  },

  componentWillMount: function() {
    AnswerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AnswerStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
		this.setState({totalIncome: AnswerStore.getTotalIncome()});
	},

  render: function() {
    var income = <AmountSummary Amount={this.state.totalIncome} Frequency="Monthly" />
    var expenditure = <AmountSummary Amount={this.state.totalExpenditure} Frequency="Monthly" />
    var totalSurplus = this.state.totalIncome - this.state.totalExpenditure;
    var surplus = <AmountSummary Amount={totalSurplus} Frequency="Monthly" />

    return (
      <div>
        <h2>Summary</h2>

        <table className="mui-table mui-panel">
          <thead>
            <tr><th>Field</th><th>Amount</th></tr>
          </thead>
          <tbody>
            <tr><td>Income</td><td>{income}</td></tr>
            <tr><td>Expenditure</td><td>{expenditure}</td></tr>
            <tr><td>Surplus</td><td>{surplus}</td></tr>
          </tbody>
        </table>

      </div>
    )
  },

});

module.exports = budgetSummary;
