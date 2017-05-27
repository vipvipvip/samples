 angular.module('myModule', [])
 .service('myService', function() {

  (function fnA(x) {

  var _x=x;
  var _privateMethod = function () {
    // private
    _x = _x+1;
    return _x;
  };

  var someMethod = function () {
    // public
    console.log('someMethod called');
    //console.log(x);

    return _privateMethod();
  };

  var anotherMethod = function () {
    // public
    console.log('anotherMethod called');
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

 });