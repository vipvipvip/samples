var module = angular.module('app', []);
module.$inject = ['CityService'];
var ac = module.controller('appController',ctrl);

function ctrl($scope, $http, $q, cityservice) {
    this.$scope = $scope;
    this.cityservice = cityservice;

    cityservice.getCities().then(function(data) {
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
};


