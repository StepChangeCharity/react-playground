
var DB = {

	saveBudget: function(data) {
		var json = JSON.stringify(data);
		window.localStorage.setItem("budget", json);	
	},

	initBudget: function() {
		var json = null;
		
		$.ajax({
			// Hey, we're just prototyping ... stop judging me !
			async: false,		
			url: "http://localhost/react/data.js",
			dataType: "json",
			cache: false,
			success: function(data) {
				DB.saveBudget(data);
			},
			error: function(xhr, status, err) {
				console.log("error!", err);
			}	
		});
		
		return json;
	},

	getBudget: function() {
		var db = window.localStorage["budget"];
		if (db === undefined) {
			db = this.initBudget();
		} else {
			var json = window.localStorage["budget"];
			db = JSON.parse(json);
		}
		return db;
	},

};


