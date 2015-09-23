"use strict";

var React = require("react");
var AmountSummary = require("../common/amount-summary");


var budgetSummary = React.createClass({
  getInitialState: function() {
    return {
      totalIncome: 0,
      totalExpenditure: 0,
      surplus: 0
    }
  },

  render: function() {
    console.log("budgetSummary::render");
    var income = <AmountSummary Amount={this.props.totalIncome} Frequency="Monthly" />
    var expenditure = <AmountSummary Amount={this.props.totalExpenditure} Frequency="Monthly" />
    var totalSurplus = this.props.totalIncome - this.props.totalExpenditure;
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
