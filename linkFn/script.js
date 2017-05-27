(function(module){
  
  module.controller("TestController", function($scope){
    
    $scope.magicValue = 1; 
     
    $scope.increment = function(){
      $scope.magicValue += 1;
    };
    
  });
  
   module.directive("valueDisplay1", function () {

        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                element.text(scope[attrs.value]);
            }
        };
        
    });

    module.directive("valueDisplay2", function () {

        return {
            restrict: "E",
            link: function (scope, element, attrs) {
                scope.$watch(attrs.value, function(newValue) {
                    element.text(newValue);
                });
            }
        };

    });

    module.directive("valueDisplay3", function () {

        return {
            restrict: "E",
            link: function (scope, element, attrs) {
                attrs.$observe("value", function(newValue){
                   element.text(newValue);
                });
            }
        };

    });

    module.directive("valueDisplay4", function () {

        return {
            restrict: "E",
            scope:{
                value: "="    
            },
            template: '{{value}}',           
        };
    });
    

    module.directive("valueDisplay5", function () {

        return {
            restrict: "E",
            scope: {
                value: "@"
            },
            template: '{{value}}',
        };
    });
  
  
}(angular.module("Test", [])));