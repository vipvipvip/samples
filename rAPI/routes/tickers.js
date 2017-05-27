(function() {
    'use strict';

    var sql = require('mssql');

var appRouter = function(app) {

var config = {
    server: 'localhost',
    database: 'StockDB',
    user: 'CenseoAdmin',
    password: 'AdminCenseo',
    port: 1433
};

  app.get("/tickers", function(req, res) {
	//4.
    var dbConn = new sql.Connection(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select top 10 db_ticker_id, db_strTicker from tbl_Ticker").then(function( recordSet) {
            console.dir(recordSet);
			res.statusCode = 200;
            dbConn.close();
			res.json(recordSet);
        }).catch(function (err) {
            //8.
            console.log(err);
            //dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
  });
}

module.exports = appRouter;
})();
