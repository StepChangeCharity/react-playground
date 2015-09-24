"use strict";

var CHANGE_EVENT = "change";
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var Events = require("events");
var EventEmitter = Events.EventEmitter;
var Assign = require("object-assign");

var _client = null;
var _income = null;

var ClientStore = Assign({}, EventEmitter.prototype, {

  getClient: function() {
    return _client;
  },

});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE:
      _client = action.initialData.client;
      _income = action.initialData.income;

      //ClientStore.emitChange();
      break;
  }

});

module.exports = ClientStore;
