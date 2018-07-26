(function() {
    'use strict';

    angular
        .module('bits')
        .service('ListTables', ListTablesService);

        ListTablesService.$inject = [];
    function ListTablesService() {
        var service = {
            getTablesList:getTablesList
        }
        return service;
        ////////////////

        function getTablesList() {
            return fetch( './services/i3tables.json', {
                method: 'GET',
                cache: 'no-cache'
                })
                .then( response => response.text().then(v => JSON.parse(v)));        
            }
        }
            
})();
