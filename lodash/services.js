(function() {
    'use strict';

    angular.module('CityService', [
        
    ])
    .service('cityservice', Service);

    function Service($http, $q) {
        this.getCities = getCities;
        
        ////////////////
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
    }
})();
