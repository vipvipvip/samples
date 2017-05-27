var config = {
    server: 'localhost',
    database: 'StockDB',
    user: 'CenseoAdmin',
    password: 'AdminCenseo',
};

var sql = require('mssql');

function queryTickers(req, res) {
	console.log(req.params.ticker);
	var ticker = req.params.ticker;
	var query = "select top 10 db_ticker_id, db_strTicker from tbl_Ticker ";
	if ( ticker) {
	 query = query + " where db_strTicker = '" + req.params.ticker + "'";
	}
    var dbConn = new sql.Connection(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query(query).then(function( recordSet) {
            console.dir(recordSet);
			//res.statusCode = 200;
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
};

function sayHello(req, res) {
	res.send("Hello");
};

module.exports =  {
	queryTickers: function(req, res) {
		return queryTickers(req, res);
	},

	sayHello: function(req, res) {
		return sayHello(req,res);
	}
};