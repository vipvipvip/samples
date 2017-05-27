var sql = require('mssql');
    console.log('here');
var connection = new sql.Connection({
    user: 'CenseoAdmin',
    password: 'AdminCenseo',
    server: 'localhost',
    database: 'StockDB'
});
  
sql.connect("mssql://CenseoAdmin:AdminCenseo@localhost/StockDB").then(function() {
    // Query 
	new sql.Request().query('select top 10 db_ticker_id, db_strTicker from tbl_Ticker').then(function(recordset) {
		console.dir(recordset);
	}).catch(function(err) {
		// ... query error checks 
		console.log(err);
	});
 
 	new sql.Request()
	.input('@tid', sql.Int, 442)
    .output('output_parameter', sql.VarChar(50))
	.execute('csp_GetActualMonthValues').then(function(recordsets) {
		console.dir(recordsets);
	}).catch(function(err) {
		// ... execute error checks 
	});
	 connection.close();
}).catch(function(err) {
	// ... connect error checks
	console.log(err);
});