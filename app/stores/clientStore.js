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

  addChangeListener: function(callback) {
    console.log("ClientStore::addChangeListener -> this.on(CHANGE_EVENT, ...)");
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    console.log("ClientStore::removeChangeListener -> this.removeListener(CHANGE_EVENT, ...)");
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    console.log("ClientStore::emitChange -> this.emit(CHANGE_EVENT)");
    this.emit(CHANGE_EVENT);
  },

  getClient: function() {
    return _client;
  },

});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE:
      _client = action.initialData.client;
      _income = action.initialData.income;

      console.log("ClientStore.emitChange(INITIALISE)", "clientStore.js");
      ClientStore.emitChange();
      break;

    case ActionTypes.GET_CLIENT:
      _client = action.client;

      // Tell the rest of the UI that a Client has been created
      ClientStore.emitChange();

      console.log("ClientStore.emitChange(GET_CLIENT)", "clientStore.js");
    break;
  }

});

module.exports = ClientStore;
