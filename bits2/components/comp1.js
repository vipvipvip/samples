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
            <style>
            .mycomp .selected {
                color:green;
                font-weight: bold;
                background-color: yellow
            }

            .infobar {
                background-color: lighten(green, 20%);
                display: block;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 75px;
                z-index: 10;
                background: green;
                color: white;
                font-weight: bold;


            }
            .middle-section: {
                text-align: center;
            }            </style>            
            <div class=mycomp>
                <div class="infobar">
                    <div>Total: {{$ctrl.value}}</div>
                    <div class="middle-section">Items checked: {{$ctrl.itemsSelected}}</div>
                </div>
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
                    <tr ng-class="{selected:tbl.selected}" ng-repeat="tbl in $ctrl.tables">
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
                            ({{$ctrl.value}} & Math.pow(2,{{tbl.rank}})) === Math.pow(2,{{tbl.rank}})
                        </td>
                        <td  ng-model="tbl.selected">
                            {{$ctrl.getResult(tbl.rank)}}
                        </td>
                    </tr>
                </tbody> 
                </table>
            </div>
            `,
            //templateUrl: 'templateUrl',
            controller: myController,
            controllerAs: '$ctrl'
        });

    myController.$inject = ['$rootScope', 'ListTables'];
    function myController($rootScope, ListTables) {
        var $ctrl = this;
        $ctrl.value = 0;
        $ctrl.itemsSelected=0;

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
            $ctrl.itemsSelected += cb.tbl.selected==1 ? 1 : -1;
        }

        $ctrl.getResult = function(rank) {
            return ($ctrl.value & Math.pow(2,rank)) === Math.pow(2,rank);
        }
        $ctrl.$onInit = activate;
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();

