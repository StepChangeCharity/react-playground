"use strict";

var React = require("react");
var Db = require("../common/DB");

var home = React.createClass({
	getInitialState: function() {
		return {
			WebNumber: Db.getClientNumber()			
		}
	},
	componentDidMount: function() {
		// used to iniitalise the view, e.g. load some data from a web api end-point
		// execution suspends until componentDidMount is completed
	},
	render: function() {
		return (
			<div id="home">
				<h2>Your Debt Remedy</h2>
				<p>Some blurb about <i>Your Debt Remedy</i>, it's ace, etc.</p>
				<p>Your web number: <strong>{this.state.WebNumber}</strong></p>
			</div>
		)
	}
});

module.exports = home;
