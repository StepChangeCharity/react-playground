"use strict";

var CHANGE_EVENT = "change";
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Events = require("events");
var EventEmitter = Events.EventEmitter;
var Assign = require("object-assign");

var _income = null;

var AnswerStore = Assign({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    console.log("AnswerStore::addChangeListener");
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    console.log("AnswerStore::removeChangeListener");
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    console.log("AnswerStore::emitChange");
    this.emit(CHANGE_EVENT);
  },

  getIncome: function() {
    return _income;
  }

});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE:
      _income = action.initialData.income;
      AnswerStore.emitChange();
      console.log("AnswerStore::emitChange(INITIALISE)");
    break;

    case ActionTypes.GET_INCOME:
      _income = action.income;

      // Tell the rest of the UI that a Client has been created
      AnswerStore.emitChange();

      console.log("AnswerStore::emitChange(GET_INCOME)");
    break;

    case ActionTypes.SAVE_INCOME:
      _income = action.income;

      // Comm out
      AnswerStore.emitChange();
      console.log("AnswerStore::emitChange(SAVE_INCOME)");
    break;

  }

});

module.exports = AnswerStore;
