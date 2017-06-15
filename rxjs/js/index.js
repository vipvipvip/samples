console.clear();
console.debug('running');

// Angular build in
angular.module('MyApp', [])
  .controller('MyCtrl', function() {})
  .component('roster', getRosterComponent())
  .service('ApiService', ApiService)
;

// Your new hotness component
function getRosterComponent(){
  return {
    // bindings: {},
    template:
`<h2>Fleet Roster</h2>
<h3>Ships: {{$ctrl.totalShips}} Pilots: {{$ctrl.totalPilots}}</h3>
<p><input type="text" ng-keyup="$ctrl.onFilterChange($event)" placeholder="search" ng-model="$ctrl.filter" /></p>
<ol>
  <li ng-repeat="item in $ctrl.roster">
   {{item.shipName}}: {{item.pilotName}}
  </li>
</ol>`,
    controller: function($q, $http, ApiService) {
      var $ctrl = this;
      
      $ctrl.onFilterChange = _onFilterChange;
      
      var cache = {};
      var filterSubject = new Rx.BehaviorSubject();
      var filter$ = filterSubject.debounceTime(150);
      
      var unsubscribes = [];

      /**
       * Life cycle events
       */
      $ctrl.$onInit = function(){ 
        cache.ships = [];
        cache.pilots = [];
        $ctrl.filter = 'skywalker';
        filterSubject.next($ctrl.filter);
        
        var people$ = Rx.Observable
          .fromPromise( ApiService.getAllPeople() )
          .do(function(pilots){ cache.pilots = pilots; })
          ;
        var ships$ = Rx.Observable
          .fromPromise( ApiService.getAllStarships() )
          .do(function(ships){ cache.ships = ships; })
          ;
        
        var stitched$ = Rx.Observable
          .combineLatest(people$, ships$, _stitch)
          .do(_updateTotals);
        var filtered$ = stitched$.combineLatest(filter$, _filter);
        var sorted$ = filtered$.map(_sort);
        
        // Subscribe for our UI results
        var subscription = sorted$.subscribe(function(roster){ $ctrl.roster = roster; });
        unsubscribes.push( subscription.unsubscribe );
      }
      
      $ctrl.$onDestroy = function(){
        unsubscribes.forEach(function(unsubscribe){
          unsubscribe();
        });
      };
      
      /**
       * Events
       */
      function _onFilterChange($event){
          filterSubject.next($event.target.value);
      }
      
      /**
       * Internals
       */

      function _stitch(pilots, ships){
        return pilots.reduce(function(roster, pilot){
          var experienced = ships.filter(function(item){
            return item.pilots.includes(pilot.url);
          });

          experienced.forEach(function(ship){
            roster.push({
              pilotName: pilot.name,
              shipName: ship.name
            });
          });
          return roster;
        }, []);
      }
      
      function _filter(roster, filter){
        if( !filter ) return roster.slice();
        return roster.filter(function(item){
          return item.pilotName.toLowerCase().indexOf(filter) > -1 || item.shipName.toLowerCase().indexOf(filter) > -1;
        });
      }
      
      function _sort(roster){
        console.debug('sorting', roster);
        return roster.slice().sort(function(a, b){
          return a.pilotName.localeCompare(b.pilotName);
        });
      }

      function _updateTotals(){
        $ctrl.totalShips = cache.ships.length;
        $ctrl.totalPilots = cache.pilots.length;
      }
    }
  };
}

// Represents a legacy service that uses prototype .this all over.
function ApiService($http) {
  
  this.get = function(url, options) {
    var config = Object.assign({
      url: url,
      method: 'GET'
    }, options || {})
    config.params = config.params || {};
    // console.debug('Config:', config);
    return $http(config)
      .then(
        function(result){
          return this.unpackResults(result);
        }.bind(this),
        console.error
      );
  };
    
  this.unpackResults = function(result){
    return result.data;  
  };
  
  this.getAllPeople = function(){
    return this.getAllPagedData('https://swapi.co/api/people/');
  };
  
  this.getAllStarships = function(){
    return this.getAllPagedData('https://swapi.co/api/starships/');
  };
  
  this.getAllPagedData = function(url){
    var data = [];
    var self = this;
    var page = 1;
    return _getPage(page);
         
    function _getPage(page){
      return self.get(url, {params: {format: 'json', page: page}})
        .then(function(result){
          data = data.concat(result.results);
          if( result.next ){
            page++;
            return _getPage(page);  
          }
          console.debug('Total records:', data.length);
          return data;
        });
      
    }
    
  };
  
}