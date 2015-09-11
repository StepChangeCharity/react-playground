"use strict";

var React = require("react");

// [W]eekly
// [F]ornightly
// [4]-Weekly
// [M]onthly
// [Y]early

var Frequency = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,  // W/F/4/M/Y
    supports: React.PropTypes.string, // CSV of W/F/4/M/Y (empty gives all)
    error: React.PropTypes.string
  },

  getOption: function(freqIndicator, id) {
    var value = -1, desc = "";

    switch (freqIndicator) {
      case "W": value = 1; desc = "Weekly"; break;
      case "F": value = 2; desc = "Fortnightly"; break;
      case "4": value = 3; desc = "4-Weekly"; break;
      case "M": value = 4; desc = "Monthly"; break;
      case "Y": value = 5; desc = "Yearly"; break;
    }

    return <option key={id} value={desc}>{desc}</option>;
  },

  render: function() {
    var wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + "has-error";
    }

    var supports = this.props.supports;
    if (supports === undefined || supports.length == 0) {
      // nothing specified, so ensure all are supplied
      supports = "W/F/4/M/Y";
    }
    var arrSupports = supports.split("/");
    var options = arrSupports.map(function(opt, i) {
      return this.getOption(opt, i);
    }, this);

    return (
      <div className={wrapperClass}>
        <div className="field">
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <select defaultValue={this.props.defaultValue} ref="Frequency" name={this.props.name} className="form-control" onChange={this.props.onChange}>
            {options}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = Frequency;
