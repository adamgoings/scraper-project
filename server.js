//bringing in the appropriate npm packages for our server and application
var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});