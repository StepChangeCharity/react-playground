"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var DB = require("../common/DB");

var InitialiseActions = {
  initApp: function() {
    console.log("APP INIT");
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE,
      initialData: {
        incrementer: DB.initDB(999),
        client: DB.getClient(),
        income: DB.getIncome()
      }
    });
  }
};

module.exports = InitialiseActions;
