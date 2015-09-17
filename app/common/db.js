"use strict";

var DB = {

	getClient: function() {
		var wn = null;

		this.ensureHasAccount();
		wn = localStorage["WEB_NUMBER"];

		return wn;
	},

	getIncome: function() {
		var data = null, income = null;

		this.ensureHasAccount();
		data = localStorage["INCOME"];
		income = JSON.parse(data);

		console.log("INCOME loaded");

		return income;
	},

	saveIncome: function(income) {
		localStorage["INCOME"] = JSON.stringify(income);
		console.log("INCOME saved");
		return income;
	},

	ensureHasAccount: function() {
		var data = localStorage["WEB_NUMBER"];
		if (data !== undefined){
			// account already exists
			return true;
		}

		// No account, so initial setup
		this.createClient();

		// Flag account was created
		return true;
	},

	createClient: function() {
		// start afresh
		localStorage.clear();

		var db = null;
		var webNumber = "";
		var nextId = localStorage["MAX_ID"];
		if (nextId === undefined)
			nextId = 999;
		nextId++;

		webNumber = "W" + nextId.toString();

		localStorage["WEB_NUMBER"] = webNumber;

		// add empty placeholders
		localStorage["INCOME"] = "{}";
		localStorage["EXPENDITURE"] = "{}";
		localStorage["DEBTS"] = "{}";
		localStorage["ASSETS"] = "{}";
		localStorage["YOU"] = "{}";

		return db;
	},

	initDB: function(withIncrementor) {
		var incrementer = localStorage["MAX_ID"];
		if (incrementer !== undefined) {
			// already done, so skip this step
			return;
		}

		// initialise with the given incrementer
		localStorage["MAX_ID"] = withIncrementor;
	},


};


module.exports = DB;

// ASYNC JSON load snippet
// $.ajax({
// 	// Hey, we're just prototyping ... stop judging me !
// 	async: false,
// 	url: "./data.js",
// 	dataType: "json",
// 	cache: false,
// 	success: function(data) {
// 		db = DB.saveBudget(data);
// 		console.log("Budget initialised.");
// 	},
// 	error: function(xhr, status, err) {
// 		console.log("error!", err);
// 	}
// });
