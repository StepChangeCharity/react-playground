"use strict";

var React = require("react");
var home = require("./bits/home");
var income = require("./bits/income");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// <Route name="app" path="/" handler={Main}>
// <Route name="profile" path="profile/:username" handler={Profile} />

var routes = (
	<Route>
		<DefaultRoute handler={home} />
		<Route name="home" handler={home} />
		<Route name="assets" />
		<Route name="income" handler={income} />
		<Route name="expenditure" />
	</Route>

);

module.exports = routes;
