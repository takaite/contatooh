var express = require('express');

// This function will be called as 'express'();
module.exports = function() {
  var app = express();
  var home = require('../app/routes/home');

  // Environment vars
  app.set ('port', 3000);

  // middleware
  app.use (express.static('./public'));

  // Configure router
  //app.use (app.router);

  // configure view engine
  app.set ('view engine', 'ejs');
  app.set ('view', './app/views');

  // configure home router
  home(app);

  return app;
};
