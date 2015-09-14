"use strict";

var DB = {

	saveBudget: function(data) {
		var json = JSON.stringify(data);
		window.localStorage.setItem("budget", json);
		console.log("Budget saved.");
		return data;
	},

	initBudget: function() {
		var db = null;

		$.ajax({
			// Hey, we're just prototyping ... stop judging me !
			async: false,
			url: "./data.js",
			dataType: "json",
			cache: false,
			success: function(data) {
				db = DB.saveBudget(data);
				console.log("Budget initialised.");
			},
			error: function(xhr, status, err) {
				console.log("error!", err);
			}
		});

		return db;
	},

	getBudget: function() {
		var db = window.localStorage["budget"];
		if (db === undefined) {
			db = this.initBudget();
		} else {
			var json = window.localStorage["budget"];
			db = JSON.parse(json);
			console.log("Budget loaded.");
		}
		return db;
	},

};

module.exports = DB;
