//memoize an object
function memoize(func, depsFunc) {
  var cache = {};
  return function() {
    var key = JSON.stringify([depsFunc(), arguments]);
    if(cache[key]) {
      return cache[key];
    }
    else {
      var val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  };
}

/*
* memoize.js
* by @philogb and @addyosmani
* with further optimizations by @mathias
* and @DmitryBaranovsk
* perf tests: http://bit.ly/q3zpG3
* Released under an MIT license.
*/
function memoize2( fn ) {
    return function () {
        var args = Array.prototype.slice.call(arguments),
            hash = "",
            i = args.length;
        currentArg = null;
        while (i--) {
            currentArg = args[i];
            hash += (currentArg === Object(currentArg)) ?
            JSON.stringify(currentArg) : currentArg;
            fn.memoize || (fn.memoize = {});
        }
        return (hash in fn.memoize) ? fn.memoize[hash] :
        fn.memoize[hash] = fn.apply(this, args);
    };
}
//update memoize2 to handle Object - its perf is significantly better than memoize
function memoize21( fn, depsFunc) {
    return function () {
        var args = Array.prototype.slice.call(arguments),
            hash = "",
            currentArg = JSON.stringify([depsFunc(), arguments]);
        
        hash += (currentArg === JSON.stringify([depsFunc(), arguments])) ?
        JSON.stringify([depsFunc(), arguments]) : currentArg;
        fn.memoize || (fn.memoize = {});

        return (hash in fn.memoize) ? fn.memoize[hash] :
        fn.memoize[hash] = fn.apply(this, args);
    };
}