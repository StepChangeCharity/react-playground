"use strict";

var React = require("react");
var ClientActions = require("../actions/clientActions");
var ClientStore = require("../stores/clientStore");

var home = React.createClass({
	getInitialState: function() {
		return {
			WebNumber: ClientStore.getClient()
		}
	},
	componentDidMount: function() {
		// used to iniitalise the view, e.g. load some data from a web api end-point
		// execution suspends until componentDidMount is completed
	},

	componentWillMount: function() {
		//this.state.setState({ WebNumber: ClientStore.getClient() });
	},

	render: function() {
		return (
			<div id="home">
				<div className="mui-panel">
					<h2>Your Debt Remedy</h2>
					<p>Some blurb about <i>Your Debt Remedy</i>, it's ace, etc.</p>
					<p>Your web number: <strong>{this.state.WebNumber}</strong></p>
				</div>
			</div>
		)
	}
});

module.exports = home;
