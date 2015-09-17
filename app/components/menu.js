"use strict";

var React = require("react");

var menu = React.createClass({
  getInitialState: function() {
    return {}
  },

  render: function() {
    console.log("menu::render");

    return (
      <div id="sidedrawer">
    		<nav id="sidenav">
    			<div>
    				<h2 class="mui-navbar-line-height"><a href="/">DR</a></h2>
    			</div>
    			<div class="mui-divider"></div>
    			<ul>
    				<li><a href="#/">Home</a></li>
    				<li><a href="#/debts">Debts</a></li>
    				<li><a href="#/assets">Assets</a></li>
    				<li><a href="#/income">Income</a></li>
    				<li><a href="#/expenditure">Expenditure</a></li>
    				<li><a href="#/advice">Advice</a></li>
    				<li><a href="#/home">You</a></li>
    			</ul>

    		</nav>
    	</div>
    )
  }

});

module.exports = menu;
