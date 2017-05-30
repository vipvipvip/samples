    var module = angular.module('app', []);
    var ac = module.controller('appController',ctrl);
    function ctrl($scope, $http, $q) {
        this.$scope = $scope;
        getCities().then(function(data) {
            this.$scope.cities = data;
            console.log(_(this.$scope.cities)
            .filter(c => c.population >= 5000000)
            .countBy(c => c.country)
            .toPairs()
            .map(c => _.zipObject(['country', 'numOfCities'], c))
            .orderBy(c => c.numOfCities, 'desc')
            .take(5)
            .value()
            );
        }.bind(this));
      function getCities() {  
        var d = $q.defer();
        $http({
            method: 'GET',
            url: '/lodash/cities.json',
            cache: true
        }).then(function(response) {
            d.resolve(response.data);
        },function(err) {
            d.reject(err);
        });
        return d.promise;
      }
    };
