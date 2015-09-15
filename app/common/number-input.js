"use strict";

var React = require("react");

var Number = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    error: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      error: {}
    }
  },

  getSummary: function(amount, frequency) {
		var multiplier = 1;
    var pcm = 0;

		if (frequency === "Yearly") multiplier = 0.083333;
		else if (frequency === "Quarterly") multiplier = 0.333333;
		else if (frequency === "Monthly") multiplier = 1;
		else if (frequency === "4-Weekly") multiplier = 1.083333;
		else if (frequency === "Weekly") multiplier = 4.33333;
		else if (frequency === "Fortnightly") multiplier = 2.166666;

    pcm = (amount * multiplier).toFixed(2);

		return pcm;
	},


  render: function() {
    var wrapperClass = "";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " has-error";
    }
    var summary = "£"
      + this.getSummary(this.props.value, this.props.currentFrequency)
      + "pcm";

    return (
      <div className={wrapperClass + " mui-form-group"}>
        <label htmlFor={this.props.name}>
          {this.props.label}
          <span className="mui-pull-right">{summary}</span>
        </label>

        <input type="number"
          name={this.props.name}
          className="mui-form-control"
          placeholder={this.props.placeholder}
          ref={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />

        <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = Number;
