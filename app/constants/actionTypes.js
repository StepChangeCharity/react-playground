"use strict";

var keyMirror = require("react/lib/keyMirror");

// Lists all action supported by the dispatcher - nice way to see what the application does!
module.exports = keyMirror({
  INITIALISE: null,
  GET_CLIENT: null
});
