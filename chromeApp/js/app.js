angular.module('myApp', ['ngRoute'])
.controller('MainCtrl', function($scope, $timeout, Weather,YahooQuote) {
  // Build the date object
  var mcl=this;
  mcl.date = {};
 
  // Update function
  var updateTime = function() {
    mcl.date.raw = new Date();
    $timeout(updateTime, 1000);
  }
 
  // Kick off the update function
  updateTime();
  
  mcl.weather = {}
    // Hardcode Oviedo for now
    Weather.getWeatherForecast("FL/Oviedo")
    .then(function(data) {
      mcl.weather.forecast = data;
    });
  
  mcl.quote = {}
  YahooQuote.getStockQuote()
    .then(function(data) {
      mcl.quote = data;
/* 	  mcl.quote.map(function(tickers) {
		 console.log(tickers);
		Object.keys(tickers).map(function(tick) {
			if (tickers[tick])
				console.log(tick + '=[' + tickers[tick] + ']');
		});
	  });
 */    });
	YahooQuote.sayYahooHello();	
  //console.log(Object.values(mcl.quote));
  
})
.provider('Weather', function() {
      var apiKey = "";
 
    this.getUrl = function(type, ext) {
    return "http://api.wunderground.com/api/" + 
    this.apiKey + "/" + type + "/q/" +
    ext + '.json';
    };

       
    this.setApiKey = function(key) {
    if (key) this.apiKey = key;
    };

    this.$get = function($q, $http) {
    var self = this;
    return {
        getWeatherForecast: function(city) {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: self.getUrl("forecast", city),
            cache: true
        }).success(function(data) {
            // The wunderground API returns the 
            // object that nests the forecasts inside
            // the forecast.simpleforecast key
            d.resolve(data.forecast.simpleforecast);
        }).error(function(err) {
            d.reject(err);
        });
        return d.promise;
        }
    }
    }
})

.service('YahooQuote', function($q, $http) {
    var _getQuoteUrl = function(ticker) {
	   var tickers = ticker.sort().map(function(t) {
						return "'" + t + "'";
					}).join(',');
        var _url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(" + tickers.substr(0,tickers.length-1) +  ")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        console.log(_url);
        return _url; 
    };
        
    this.getStockQuote = function() {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: _getQuoteUrl(['TLT', ,'QCOM','WMB', 'UNP','FIT','CSX','AAPL']),
            cache: true
        }).success(function(data) {
            //console.log(data.query.results.quote);
            d.resolve(data.query.results.quote);
        }).error(function(err) {
            d.reject(err);
        });
        return d.promise;
        }
	
	this.sayYahooHello = function() {
		console.log('Hello from Yahoo');
	};
})

.config(function(WeatherProvider, $routeProvider) {
  WeatherProvider.setApiKey('1c9eeb6e2a939e62');
 $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html', 
      controller: 'MainCtrl',
      controllerAs: "mcl"
    })
    .when('/settings', {
      templateUrl: '/templates/settings.html', 
      controller: 'SettingsCtrl',
      controllerAs: "scl"
    })
    .otherwise({redirectTo: '/'}); 
});

angular.module('myApp')
.controller('SettingsCtrl',
  function($scope) {
    // Our controller will go here
    var scl = this;
    scl.x = 'Hello';
});