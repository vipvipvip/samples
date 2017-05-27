var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 
 
 app.get("/", function(req, res) {
    res.send("Hello World");
});

// example of route and function in one file
var routes = require("./routes/tickers.js")(app);

// example of route and function in different files and multiple functions exported
var tickers = require("./routes/get-tickers.js");
app.use('/getTickers/:ticker', tickers.queryTickers);
app.use('/getTickers/', tickers.queryTickers);
app.use('/hello', tickers.sayHello);


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});