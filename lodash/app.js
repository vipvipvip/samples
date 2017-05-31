(function() {
    'use strict';

    angular.module('app', [
        
    ]);
})();

(function() {
    'use strict';

    angular
        .module('app', ["CityService"])
        .controller('appController', ControllerController);

    function ControllerController(cityservice) {
        var vm = this;
        vm.cities = [];
        activate();

        ////////////////

        function activate() { 
            cityservice.getCities().then(function(data) {
                vm.cities = data;
                lfp1();
            });
        };

        function lfp1() {
                console.log(_(vm.cities)
                .filter(c => c.population >= 5000000)
                .countBy(c => c.country)
                .toPairs()
                .map(c => _.zipObject(['country', 'numOfCities'], c))
                .orderBy(c => c.numOfCities, 'desc')
                .take(5)
                .value()
                );
        };
    }
})();
