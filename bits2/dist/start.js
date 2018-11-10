#!/usr/bin/env node
var express = require('express');
var argv = require('yargs').argv;
var port = argv.port || 3456;
var morgan = require('morgan');
var app = express();
var path = require('path');

var absPath = function(arg) { return path.join(__dirname, arg); };
console.log(absPath);

// log each request
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// serve for /public
app.use('/public', express.static(absPath('public')));
// serve for cc/public
app.use('/cc/public', express.static(absPath('public')));

app.use('/data', express.static(absPath('public/data')))
// do not cache our index.html
app.use(function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

// serve for all paths
app.use('*', express.static(absPath('./index.html')));
// serve for /
app.use(express.static(absPath('')));

// start it
app.listen(port, function() {
  console.log('Listening on port ' + port);
});