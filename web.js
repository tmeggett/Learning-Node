// web.js
var express = require("express");
var logfmt = require("logfmt");
var oauth = require('oauth');
var mongo = require('mongodb');
var gcal = require('google-calendar');
var q = require('q');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
