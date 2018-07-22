(function() {
    'use strict';

    angular.module('bits', [
        
    ])
    
})();

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
            return fetch( '/bits/i3tables.json', {
                method: 'GET',
                cache: 'no-cache'
                })
                .then( response => response.text().then(v => JSON.parse(v)));        
            }
        }
            
})();

(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('bits')
        .component('myComp', {
            template:`
            <div class="panel-heading">Total: {{$ctrl.value}}</div>
            <table class="table">
               <thead>
                <tr>
                    <th>
                        Selected    
                    </th>
                    <th>
                        Table Name
                    </th>
                    <th>
                        Bit pos
                    </th>
                    <th>
                        Value
                    </th>
                    <th>
                        Validation Expression
                    </th>
                    <th>
                        Result
                    </th>
                   </tr>
               </thead>
               <tbody>
                   <tr ng-repeat="tbl in $ctrl.tables">
                    <td>
                        <input type="checkbox"  ng-true-value=1 ng-false-value=0 ng-model="tbl.selected" id="filter_cb-{{tbl}}-{{$index}}" ng_change="$ctrl.calcValue(this);"> </input>
                    </td>
                      <td>
                           {{tbl.city}}
                       </td>
                       <td>
                           {{ tbl.rank}}
                       </td>
                       <td>
                           {{ tbl.value }}
                       </td>
                       <td>
                        ({{$ctrl.value}} & Math.pow(2,{{tbl.rank}}) === Math.pow(2,{{tbl.rank}})
                       </td>
                       <td>
                        {{$ctrl.getResult(tbl.rank)}}
                       </td>
                   </tr>
               </tbody> 
              </table>
            `,
            //templateUrl: 'templateUrl',
            controller: myController,
            controllerAs: '$ctrl'
        });

    myController.$inject = ['$rootScope', 'ListTables'];
    function myController($rootScope, ListTables) {
        var $ctrl = this;
        $ctrl.value = 0;

        ////////////////
        function activate() {
            return ListTables
            .getTablesList()
            .then( (data) => $rootScope.$applyAsync( () => {
                $ctrl.tables = data;
                $ctrl.tables.map( tbl => {tbl.selected=0; tbl.rank=tbl.rank-1, tbl.value = Math.pow(2,tbl.rank)});
            }));
        }

        $ctrl.calcValue = function(cb) {
            $ctrl.value = $ctrl.tables.reduce( (acc, val) => val.selected ? acc+val.value : acc, 0  );
        }

        $ctrl.getResult = function(rank) {
            return ($ctrl.value & Math.pow(2,rank)) === Math.pow(2,rank);
        }
        $ctrl.$onInit = activate;
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();

