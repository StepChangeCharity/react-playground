"use strict";

var Dispather = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Db = require("../common/DB");

var ClientActions = {

  getClient: function(client) {
    var newClient = Db.getClient();

    // Go tell all the stores that a Client was created
    console.log("clientActions::getClient -> dispatch(GET_CLIENT)");
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_CLIENT,
      client: newClient
    });

  }, // getClient

};

module.exports = ClientActions;
