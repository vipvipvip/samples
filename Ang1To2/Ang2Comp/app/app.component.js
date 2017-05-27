(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-comp',
            templateUrl: '/app/grid.html'
        })
        .Class({
            constructor: function() {
                this.employees = [{
                    firstName: 'Rima',
                    lastName: 'George',
                    location: 'San Francisco'
                }, {
                    firstName: 'Shaun',
                    lastName: 'John',
                    location: 'Germany'
                }, {
                    firstName: 'Rahul',
                    lastName: 'Kurup',
                    location: 'Bangalore'
                }, {
                    firstName: 'Samson',
                    lastName: 'Davis',
                    location: 'Canada'
                }, {
                    firstName: 'Shilpa',
                    lastName: 'Agarwal',
                    location: 'Noida'
                }];
            }
        });
})(window.app || (window.app = {}));