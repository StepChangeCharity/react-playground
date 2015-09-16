"use strict";

var React = require("react");
var AccountSummary = require("./amount-summary");

var Number = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    isValid: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      isValid: true
    }
  },

  render: function() {
    var hideError = "";
    if (this.props.isValid)
      hideError = "mui-hide";

    return (
      <div className="mui-form-group">

        <label htmlFor={this.props.name}>
          {this.props.label}
          <span className="mui-pull-right">
            <AccountSummary
              Amount={this.props.value}
              Frequency={this.props.currentFrequency}
            />
          </span>
        </label>

        <span>
          <input type="number"
            name={this.props.name}
            className="mui-form-control"
            placeholder={this.props.placeholder}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            className="pull-left half"
          />
          <span className={hideError + " pull-right error-indicator"}>*</span>
        </span>

      </div>
    );
  }
});

module.exports = Number;
