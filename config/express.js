var express = require('express');

// This function will be called as 'express'();
module.exports = function() {
  var app = express();

  // Environment vars
  app.set ('port', 3000);

  // middleware
  app.use (express.static('./public'));

  // configure view engine
  app.set ('view engine', 'ejs');
  app.set ('view', './app/views');

  return app;
};
