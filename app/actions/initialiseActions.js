"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Db = require("../common/DB");

var InitialiseActions = {
  initApp: function() {
    console.log("initialiseActions::initApp -> dispatch(INITIALISE)");
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE,
      initialData: {
        incrementer: Db.initDB(999),
        client: Db.getClient(),
        income: Db.getIncome()
      }
    });
  }
};

module.exports = InitialiseActions;
