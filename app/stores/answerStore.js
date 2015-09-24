"use strict";

var CHANGE_EVENT = "change";
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Events = require("events");
var EventEmitter = Events.EventEmitter;
var Assign = require("object-assign");
var Utils = require("../common/utils");

var _income = null;
var _totalIncome = 0;

function recalculate() {
  // reset of course
  _totalIncome = 0;

  _totalIncome += parseInt(Utils.getSummary(_income.CltWork.Amount, _income.CltWork.Frequency));
  _totalIncome += parseInt(Utils.getSummary(_income.PtrWork.Amount, _income.PtrWork.Frequency));
  _totalIncome += parseInt(Utils.getSummary(_income.ChildSupport.Amount, _income.ChildSupport.Frequency));
};

var AnswerStore = Assign({}, EventEmitter.prototype, {

  emitChange: function() {
    console.log("AnswerStore::emitChange");
    this.emit(CHANGE_EVENT);
  },

  getIncome: function() {
    console.log("AnswerStore::getIncome");
    return _income;
  },

  getTotalIncome: function() {
    console.log("AnswerStore::getTotalIncome");
    return _totalIncome;
  },

  addChangeListener: function(callback) {
    console.log("AnswerStore::addChangeListener");
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    console.log("AnswerStore::removeChangeListener");
    this.removeListener(CHANGE_EVENT, callback);
  }

});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE:
      _income = action.initialData.income;
      recalculate();
      AnswerStore.emitChange();
      console.log("AnswerStore::emitChange(INITIALISE)");
    break;

    case ActionTypes.CHANGE_INCOME:
      for (var i in _income) {
        if (_income[i].DataItem === action.answer.DataItem) {
          _income[i] = action.answer;
        }
      }
      recalculate();
      AnswerStore.emitChange();

      console.log("AnswerStore::emitChange(CHANGE_INCOME)");
    break;
  }

});

module.exports = AnswerStore;
