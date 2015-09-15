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
    isValid: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      isValid: true
    }
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

  getOptions: function(supports) {
    if (supports === undefined || supports.length == 0) {
      // nothing specified, so ensure all are supplied
      supports = "W/F/4/M/Y";
    }
    var arrSupports = supports.split("/");
    var options = arrSupports.map(function(opt, i) {
      return this.getOption(opt, i);
    }, this);

    return options;
  },

  render: function() {
    var hideError = "";
    if (this.props.isValid)
      hideError = "mui-hide";

    var freqOptions = this.getOptions(this.props.supports);

    return (
      <div className="mui-form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>

        <span>
          <select defaultValue={this.props.defaultValue} ref="Frequency"
            name={this.props.name} className="pull-left mui-form-control half ib" onChange={this.props.onChange}>
            {freqOptions}
          </select>

          <span className={hideError + " pull-right error-indicator"}>*</span>
        </span>
      </div>
    );
  }
});

module.exports = Frequency;
