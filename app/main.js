var React = require("react");
var Router = require("react-router");
var routes = require("./routes");
var db = require("./common/DB");

db.initDB();

Router.run(routes, function(Root) {
	React.render(<Root />, document.getElementById("app"));
});
