"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Db = require("../common/DB");

var AnswerActions = {

  getIncome: function() {
    console.log("answerActions::getIncome -> dispatch(GET_INCOME)");

    var incomeData = Db.getIncome();

    // Tell everything else that income was loaded.bs.modal
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_INCOME,
      income: incomeData
    });

  }, // getIncome

  saveIncome: function(income) {
    var updatedIncome = Db.saveIncome(income);

    console.log("answerActions::saveIncome -> dispatch(SAVE_INCOME)");

    Dispatcher.dispatch({
      actionType: ActionTypes.SAVE_INCOME,
      income: updatedIncome
    });

  }, // saveIncome

};

module.exports = AnswerActions;
