"use strict";

var Utils = {

  getSummary: function(amount, frequency) {
		var multiplier = 1;
    var pcm = 0;

		if (frequency === "Yearly") multiplier = 0.083333;
		else if (frequency === "Quarterly") multiplier = 0.333333;
		else if (frequency === "Monthly") multiplier = 1;
		else if (frequency === "4-Weekly") multiplier = 1.083333;
		else if (frequency === "Weekly") multiplier = 4.33333;
		else if (frequency === "Fortnightly") multiplier = 2.166666;

    pcm = (amount * multiplier);

    if (isNaN(pcm)) {
      pcm = 0;
    }

    pcm = pcm.toFixed(2);

		return pcm;
	},


   commafy: function(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

};

module.exports = Utils;
