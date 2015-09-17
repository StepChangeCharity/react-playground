"use strict";

var React = require("react");


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

    return (
      <div>
        <h2>Summary</h2>

        <table className="mui-table mui-panel">
          <thead>
            <tr><th>Field</th><th>Amount</th></tr>
          </thead>
          <tbody>
            <tr><td>Income</td><td>{this.state.totalIncome}</td></tr>
            <tr><td>Expenditure</td><td>{this.state.totalExpenditure}</td></tr>
            <tr><td>Surplus</td><td>{this.state.surplus}</td></tr>
          </tbody>
        </table>

      </div>
    )
  },

});

module.exports = budgetSummary;
