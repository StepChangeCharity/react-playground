"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Db = require("../common/DB");

var AnswerActions = {

  getIncome: function() {
    var incomeData = Db.getIncome();

    // Tell everything else that income was loaded.bs.modal
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_INCOME,
      income: incomeData
    });

  }, // getIncome

  saveIncome: function(income) {
    var updatedIncome = Db.saveIncome(income);

    Dispatcher.dispatch({
      actionType: ActionTypes.SAVE_INCOME,
      income: updatedIncome
    });

  }, // saveIncome

  changeIncome: function(answer) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CHANGE_INCOME,
      answer: answer
    });
  }, // changeIncome

};

module.exports = AnswerActions;
