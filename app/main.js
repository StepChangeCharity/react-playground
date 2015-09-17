var React = require("react");
var Router = require("react-router");
var routes = require("./routes");
//var db = require("./common/DB");
var InitialiseActions = require("./actions/InitialiseActions");

//db.initDB();
InitialiseActions.initApp();

Router.run(routes, function(Root) {
	React.render(<Root />, document.getElementById("app"));
});
