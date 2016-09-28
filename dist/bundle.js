/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';
	
	// LiveSlide - Presentation webapp built using the RTChat framework.
	
	// Load custom tooltip library.
	__webpack_require__(2);
	
	// Load all views in an extensible way.
	// "views/sample_view.js" becomes "views.SampleView".
	var views = RTChat.load_module(__webpack_require__(13));
	
	// Extend Views
	_.extend(RTChat.Views, views);
	
	// Extend AppConfig
	_.extend(RTChat.AppConfig, __webpack_require__(36));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {// jQuery Tooltip plugin that extends OpenTip.
	
	var jQuery = __webpack_require__(3);
	var Opentip = __webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(12);
	
	var default_opts = {
		showOn: 'click mouseover',
		hideOn: 'mouseout',
		group: 'default',
	
		// ==== New options ====
		hideOnBodyClick: true,
		scrollReposition: true,
	
		// By default: Look at the elements attributes to set the content.
		content: function() {
			return jQuery(this).attr('data-ot') || jQuery(this).attr('tooltip');
		},
	};
	
	var bodyListener = undefined;
	function enableBodyListener() { // Closes all tooltips when the body is clicked.
		// Hide all tooltips unless one is being clicked or opened.
		if (!bodyListener) bodyListener = jQuery('body').on('click', function(ev) {
			var f = _(Opentip.tips).find(function(t) {
				// Find if the click-target was an opentip trigger OR inside a opentip
				return t.options.target[0] == ev.target ||
					t.container && jQuery(ev.target).closest(t.container).length;
			});
	
			if (!f) _(Opentip.tips).each(function(t) {
				if (t.options.hideOnBodyClick) t.hide();
			});
		});
	};
	
	jQuery.fn.Opentip = function jqOpenTip(opts) {
		var tips = [];
		var targets = [];
		var options = _.extend({}, default_opts, opts);
	
		this.each(function() {
			targets.push(this);
	
			var content = (typeof options.content == 'function')?
				options.content.apply(this): options.content;
	
			var tip = new Opentip(this, content, _.extend({target: this}, options));
			tips.push(tip);
		});
	
		if (options.scrollReposition) {
			// Add scroll listeners to all scroll parents.
			jQuery(targets).scrollParents().each(function() {
				jQuery(this).on('scroll', function() {
					_(tips).each(function(t) {
						if (t.visible)
							t.options.target.visible(false)? t.reposition(): t.hide();
					});
				});
			});
		}
	
		if (options.hideOnBodyClick) enableBodyListener();
		return tips; //TODO: this?
	};
	
	// Almost entirely stolen from https://github.com/slindberg/jquery-scrollparent
	jQuery.fn.scrollParents = function() {
		var overflowRegex = /(auto|scroll)/,
	  position = this.css( "position" ),
	  excludeStaticParent = position === "absolute",
	  scrollParent = this.parents().filter( function() {
	    var parent = jQuery( this );
	    if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
	      return false;
	    }
	    var overflowState = parent.css(["overflow", "overflowX", "overflowY"]);
	    return (overflowRegex).test( overflowState.overflow + overflowState.overflowX + overflowState.overflowY );
	  });
	
	  return position === "fixed" || !scrollParent.length ? jQuery( this[ 0 ].ownerDocument || document ) : scrollParent;
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = RTChat.jQuery;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) 2012 Matias Meno <m@tias.me>
	
	
	// The index.js file for component
	var Opentip = __webpack_require__(5);
	
	
	var Adapter = __webpack_require__(7);
	
	// Add the adapter to the list
	Opentip.addAdapter(new Adapter());
	
	
	// Exposing the Opentip class
	module.exports = Opentip;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {
	/*
	 *
	 * Opentip v2.4.7-dev
	 *
	 * More info at [www.opentip.org](http://www.opentip.org)
	 * 
	 * Copyright (c) 2012, Matias Meno  
	 * Graphics by Tjandra Mayerhold
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */
	var Opentip, firstAdapter, i, j, len, mouseMoved, mousePosition, mousePositionObservers, position, ref, vendors,
	  slice = [].slice,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
	  hasProp = {}.hasOwnProperty;
	
	Opentip = (function() {
	  Opentip.prototype.STICKS_OUT_TOP = 1;
	
	  Opentip.prototype.STICKS_OUT_BOTTOM = 2;
	
	  Opentip.prototype.STICKS_OUT_LEFT = 1;
	
	  Opentip.prototype.STICKS_OUT_RIGHT = 2;
	
	  Opentip.prototype["class"] = {
	    container: "opentip-container",
	    opentip: "opentip",
	    header: "ot-header",
	    content: "ot-content",
	    loadingIndicator: "ot-loading-indicator",
	    close: "ot-close",
	    goingToHide: "ot-going-to-hide",
	    hidden: "ot-hidden",
	    hiding: "ot-hiding",
	    goingToShow: "ot-going-to-show",
	    showing: "ot-showing",
	    visible: "ot-visible",
	    loading: "ot-loading",
	    ajaxError: "ot-ajax-error",
	    fixed: "ot-fixed",
	    showEffectPrefix: "ot-show-effect-",
	    hideEffectPrefix: "ot-hide-effect-",
	    stylePrefix: "style-"
	  };
	
	  function Opentip(element, content, title, options) {
	    var _tmpStyle, elementsOpentips, hideTrigger, j, k, len, len1, methodToBind, optionSources, prop, ref, ref1, ref2, styleName;
	    this.id = ++Opentip.lastId;
	    this.debug("Creating Opentip.");
	    Opentip.tips.push(this);
	    this.adapter = Opentip.adapter;
	    elementsOpentips = this.adapter.data(element, "opentips") || [];
	    elementsOpentips.push(this);
	    this.adapter.data(element, "opentips", elementsOpentips);
	    this.triggerElement = this.adapter.wrap(element);
	    if (this.triggerElement.length > 1) {
	      throw new Error("You can't call Opentip on multiple elements.");
	    }
	    if (this.triggerElement.length < 1) {
	      throw new Error(element + " is not a valid element.");
	    }
	    this.loaded = false;
	    this.loading = false;
	    this.visible = false;
	    this.waitingToShow = false;
	    this.waitingToHide = false;
	    this.currentPosition = {
	      left: 0,
	      top: 0
	    };
	    this.dimensions = {
	      width: 100,
	      height: 50
	    };
	    this.content = "";
	    this.redraw = true;
	    this.currentObservers = {
	      showing: false,
	      visible: false,
	      hiding: false,
	      hidden: false
	    };
	    options = this.adapter.clone(options);
	    if (typeof content === "object") {
	      options = content;
	      content = title = void 0;
	    } else if (typeof title === "object") {
	      options = title;
	      title = void 0;
	    }
	    if (title != null) {
	      options.title = title;
	    }
	    if (content != null) {
	      this.setContent(content);
	    }
	    if (options["extends"] == null) {
	      if (options.style != null) {
	        options["extends"] = options.style;
	      } else {
	        options["extends"] = Opentip.defaultStyle;
	      }
	    }
	    optionSources = [options];
	    _tmpStyle = options;
	    while (_tmpStyle["extends"]) {
	      styleName = _tmpStyle["extends"];
	      _tmpStyle = Opentip.styles[styleName];
	      if (_tmpStyle == null) {
	        throw new Error("Invalid style: " + styleName);
	      }
	      optionSources.unshift(_tmpStyle);
	      if (!((_tmpStyle["extends"] != null) || styleName === "standard")) {
	        _tmpStyle["extends"] = "standard";
	      }
	    }
	    options = (ref = this.adapter).extend.apply(ref, [{}].concat(slice.call(optionSources)));
	    options.hideTriggers = (function() {
	      var j, len, ref1, results;
	      ref1 = options.hideTriggers;
	      results = [];
	      for (j = 0, len = ref1.length; j < len; j++) {
	        hideTrigger = ref1[j];
	        results.push(hideTrigger);
	      }
	      return results;
	    })();
	    if (options.hideTrigger && options.hideTriggers.length === 0) {
	      options.hideTriggers.push(options.hideTrigger);
	    }
	    ref1 = ["tipJoint", "targetJoint", "stem"];
	    for (j = 0, len = ref1.length; j < len; j++) {
	      prop = ref1[j];
	      if (options[prop] && typeof options[prop] === "string") {
	        options[prop] = new Opentip.Joint(options[prop]);
	      }
	    }
	    if (options.ajax && (options.ajax === true || !options.ajax)) {
	      if (this.adapter.tagName(this.triggerElement) === "A") {
	        options.ajax = this.adapter.attr(this.triggerElement, "href");
	      } else {
	        options.ajax = false;
	      }
	    }
	    if (options.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A") {
	      this.adapter.observe(this.triggerElement, "click", function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        return e.stopped = true;
	      });
	    }
	    if (options.target) {
	      options.fixed = true;
	    }
	    if (options.stem === true) {
	      options.stem = new Opentip.Joint(options.tipJoint);
	    }
	    if (options.target === true) {
	      options.target = this.triggerElement;
	    } else if (options.target) {
	      options.target = this.adapter.wrap(options.target);
	    }
	    this.currentStem = options.stem;
	    if (options.delay == null) {
	      options.delay = options.showOn === "mouseover" ? 0.2 : 0;
	    }
	    if (options.targetJoint == null) {
	      options.targetJoint = new Opentip.Joint(options.tipJoint).flip();
	    }
	    this.showTriggers = [];
	    this.showTriggersWhenVisible = [];
	    this.hideTriggers = [];
	    if (options.showOn && options.showOn !== "creation") {
	      this.showTriggers.push({
	        element: this.triggerElement,
	        event: options.showOn
	      });
	    }
	    if (options.ajaxCache != null) {
	      options.cache = options.ajaxCache;
	      delete options.ajaxCache;
	    }
	    this.options = options;
	    this.bound = {};
	    ref2 = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"];
	    for (k = 0, len1 = ref2.length; k < len1; k++) {
	      methodToBind = ref2[k];
	      this.bound[methodToBind] = (function(_this) {
	        return function(methodToBind) {
	          return function() {
	            return _this[methodToBind].apply(_this, arguments);
	          };
	        };
	      })(this)(methodToBind);
	    }
	    this.adapter.domReady((function(_this) {
	      return function() {
	        _this.activate();
	        if (_this.options.showOn === "creation") {
	          return _this.prepareToShow();
	        }
	      };
	    })(this));
	  }
	
	  Opentip.prototype._setup = function() {
	    var hideOn, hideTrigger, hideTriggerElement, i, j, k, len, len1, ref, ref1, results;
	    this.debug("Setting up the tooltip.");
	    this._buildContainer();
	    this.hideTriggers = [];
	    ref = this.options.hideTriggers;
	    for (i = j = 0, len = ref.length; j < len; i = ++j) {
	      hideTrigger = ref[i];
	      hideTriggerElement = null;
	      hideOn = this.options.hideOn instanceof Array ? this.options.hideOn[i] : this.options.hideOn;
	      if (typeof hideTrigger === "string") {
	        switch (hideTrigger) {
	          case "trigger":
	            hideOn = hideOn || "mouseout";
	            hideTriggerElement = this.triggerElement;
	            break;
	          case "tip":
	            hideOn = hideOn || "mouseover";
	            hideTriggerElement = this.container;
	            break;
	          case "target":
	            hideOn = hideOn || "mouseover";
	            hideTriggerElement = this.options.target;
	            break;
	          case "closeButton":
	            break;
	          default:
	            throw new Error("Unknown hide trigger: " + hideTrigger + ".");
	        }
	      } else {
	        hideOn = hideOn || "mouseover";
	        hideTriggerElement = this.adapter.wrap(hideTrigger);
	      }
	      if (hideTriggerElement) {
	        this.hideTriggers.push({
	          element: hideTriggerElement,
	          event: hideOn,
	          original: hideTrigger
	        });
	      }
	    }
	    ref1 = this.hideTriggers;
	    results = [];
	    for (k = 0, len1 = ref1.length; k < len1; k++) {
	      hideTrigger = ref1[k];
	      results.push(this.showTriggersWhenVisible.push({
	        element: hideTrigger.element,
	        event: "mouseover"
	      }));
	    }
	    return results;
	  };
	
	  Opentip.prototype._buildContainer = function() {
	    this.container = this.adapter.create("<div id=\"opentip-" + this.id + "\" class=\"" + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + "\"></div>");
	    this.adapter.css(this.container, {
	      position: "absolute"
	    });
	    if (this.options.ajax) {
	      this.adapter.addClass(this.container, this["class"].loading);
	    }
	    if (this.options.fixed) {
	      this.adapter.addClass(this.container, this["class"].fixed);
	    }
	    if (this.options.showEffect) {
	      this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect);
	    }
	    if (this.options.hideEffect) {
	      return this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect);
	    }
	  };
	
	  Opentip.prototype._buildElements = function() {
	    var headerElement, titleElement;
	    this.tooltipElement = this.adapter.create("<div class=\"" + this["class"].opentip + "\"><div class=\"" + this["class"].header + "\"></div><div class=\"" + this["class"].content + "\"></div></div>");
	    this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas"));
	    this.adapter.css(this.backgroundCanvas, {
	      position: "absolute"
	    });
	    if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
	      G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas));
	    }
	    headerElement = this.adapter.find(this.tooltipElement, "." + this["class"].header);
	    if (this.options.title) {
	      titleElement = this.adapter.create("<h1></h1>");
	      this.adapter.update(titleElement, this.options.title, this.options.escapeTitle);
	      this.adapter.append(headerElement, titleElement);
	    }
	    if (this.options.ajax && !this.loaded) {
	      this.adapter.append(this.tooltipElement, this.adapter.create("<div class=\"" + this["class"].loadingIndicator + "\"><span>↻</span></div>"));
	    }
	    if (indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
	      this.closeButtonElement = this.adapter.create("<a href=\"javascript:undefined;\" class=\"" + this["class"].close + "\"><span>Close</span></a>");
	      this.adapter.append(headerElement, this.closeButtonElement);
	    }
	    this.adapter.append(this.container, this.backgroundCanvas);
	    this.adapter.append(this.container, this.tooltipElement);
	    this.adapter.append(document.body, this.container);
	    this._newContent = true;
	    return this.redraw = true;
	  };
	
	  Opentip.prototype.setContent = function(content1) {
	    this.content = content1;
	    this._newContent = true;
	    if (typeof this.content === "function") {
	      this._contentFunction = this.content;
	      this.content = "";
	    } else {
	      this._contentFunction = null;
	    }
	    if (this.visible) {
	      return this._updateElementContent();
	    }
	  };
	
	  Opentip.prototype._updateElementContent = function() {
	    var contentDiv;
	    if (this._newContent || (!this.options.cache && this._contentFunction)) {
	      contentDiv = this.adapter.find(this.container, "." + this["class"].content);
	      if (contentDiv != null) {
	        if (this._contentFunction) {
	          this.debug("Executing content function.");
	          this.content = this._contentFunction(this);
	        }
	        this.adapter.update(contentDiv, this.content, this.options.escapeContent);
	      }
	      this._newContent = false;
	    }
	    this._storeAndLockDimensions();
	    return this.reposition();
	  };
	
	  Opentip.prototype._storeAndLockDimensions = function() {
	    var prevDimension;
	    if (!this.container) {
	      return;
	    }
	    prevDimension = this.dimensions;
	    this.adapter.css(this.container, {
	      width: "auto",
	      left: "0px",
	      top: "0px"
	    });
	    this.dimensions = this.adapter.dimensions(this.container);
	    this.dimensions.width += 1;
	    this.adapter.css(this.container, {
	      width: this.dimensions.width + "px",
	      top: this.currentPosition.top + "px",
	      left: this.currentPosition.left + "px"
	    });
	    if (!this._dimensionsEqual(this.dimensions, prevDimension)) {
	      this.redraw = true;
	      return this._draw();
	    }
	  };
	
	  Opentip.prototype.activate = function() {
	    return this._setupObservers("hidden", "hiding");
	  };
	
	  Opentip.prototype.deactivate = function() {
	    this.debug("Deactivating tooltip.");
	    this.hide();
	    return this._setupObservers("-showing", "-visible", "-hidden", "-hiding");
	  };
	
	  Opentip.prototype._setupObservers = function() {
	    var j, k, l, len, len1, len2, len3, m, observeOrStop, ref, ref1, ref2, removeObserver, state, states, trigger;
	    states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    for (j = 0, len = states.length; j < len; j++) {
	      state = states[j];
	      removeObserver = false;
	      if (state.charAt(0) === "-") {
	        removeObserver = true;
	        state = state.substr(1);
	      }
	      if (this.currentObservers[state] === !removeObserver) {
	        continue;
	      }
	      this.currentObservers[state] = !removeObserver;
	      observeOrStop = (function(_this) {
	        return function() {
	          var args, ref, ref1;
	          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	          if (removeObserver) {
	            return (ref = _this.adapter).stopObserving.apply(ref, args);
	          } else {
	            return (ref1 = _this.adapter).observe.apply(ref1, args);
	          }
	        };
	      })(this);
	      switch (state) {
	        case "showing":
	          ref = this.hideTriggers;
	          for (k = 0, len1 = ref.length; k < len1; k++) {
	            trigger = ref[k];
	            observeOrStop(trigger.element, trigger.event, this.bound.prepareToHide);
	          }
	          observeOrStop((document.onresize != null ? document : window), "resize", this.bound.reposition);
	          observeOrStop(window, "scroll", this.bound.reposition);
	          break;
	        case "visible":
	          ref1 = this.showTriggersWhenVisible;
	          for (l = 0, len2 = ref1.length; l < len2; l++) {
	            trigger = ref1[l];
	            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
	          }
	          break;
	        case "hiding":
	          ref2 = this.showTriggers;
	          for (m = 0, len3 = ref2.length; m < len3; m++) {
	            trigger = ref2[m];
	            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
	          }
	          break;
	        case "hidden":
	          break;
	        default:
	          throw new Error("Unknown state: " + state);
	      }
	    }
	    return null;
	  };
	
	  Opentip.prototype.prepareToShow = function() {
	    this._abortHiding();
	    this._abortShowing();
	    if (this.visible) {
	      return;
	    }
	    this.debug("Showing in " + this.options.delay + "s.");
	    if (this.container == null) {
	      this._setup();
	    }
	    if (this.options.group) {
	      Opentip._abortShowingGroup(this.options.group, this);
	    }
	    this.preparingToShow = true;
	    this._setupObservers("-hidden", "-hiding", "showing");
	    this._followMousePosition();
	    if (this.options.fixed && !this.options.target) {
	      this.initialMousePosition = mousePosition;
	    }
	    this.reposition();
	    return this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0);
	  };
	
	  Opentip.prototype.show = function() {
	    this._abortHiding();
	    if (this.visible) {
	      return;
	    }
	    this._clearTimeouts();
	    if (!this._triggerElementExists()) {
	      return this.deactivate();
	    }
	    this.debug("Showing now.");
	    if (this.container == null) {
	      this._setup();
	    }
	    if (this.options.group) {
	      Opentip._hideGroup(this.options.group, this);
	    }
	    this.visible = true;
	    this.preparingToShow = false;
	    if (this.tooltipElement == null) {
	      this._buildElements();
	    }
	    this._updateElementContent();
	    if (this.options.ajax && (!this.loaded || !this.options.cache)) {
	      this._loadAjax();
	    }
	    this._searchAndActivateCloseButtons();
	    this._startEnsureTriggerElement();
	    this.adapter.css(this.container, {
	      zIndex: Opentip.lastZIndex++
	    });
	    this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible");
	    if (this.options.fixed && !this.options.target) {
	      this.initialMousePosition = mousePosition;
	    }
	    this.reposition();
	    this.adapter.removeClass(this.container, this["class"].hiding);
	    this.adapter.removeClass(this.container, this["class"].hidden);
	    this.adapter.addClass(this.container, this["class"].goingToShow);
	    this.setCss3Style(this.container, {
	      transitionDuration: "0s"
	    });
	    this.defer((function(_this) {
	      return function() {
	        var delay;
	        if (!_this.visible || _this.preparingToHide) {
	          return;
	        }
	        _this.adapter.removeClass(_this.container, _this["class"].goingToShow);
	        _this.adapter.addClass(_this.container, _this["class"].showing);
	        delay = 0;
	        if (_this.options.showEffect && _this.options.showEffectDuration) {
	          delay = _this.options.showEffectDuration;
	        }
	        _this.setCss3Style(_this.container, {
	          transitionDuration: delay + "s"
	        });
	        _this._visibilityStateTimeoutId = _this.setTimeout(function() {
	          _this.adapter.removeClass(_this.container, _this["class"].showing);
	          return _this.adapter.addClass(_this.container, _this["class"].visible);
	        }, delay);
	        return _this._activateFirstInput();
	      };
	    })(this));
	    return this._draw();
	  };
	
	  Opentip.prototype._abortShowing = function() {
	    if (this.preparingToShow) {
	      this.debug("Aborting showing.");
	      this._clearTimeouts();
	      this._stopFollowingMousePosition();
	      this.preparingToShow = false;
	      return this._setupObservers("-showing", "-visible", "hiding", "hidden");
	    }
	  };
	
	  Opentip.prototype.prepareToHide = function() {
	    this._abortShowing();
	    this._abortHiding();
	    if (!this.visible) {
	      return;
	    }
	    this.debug("Hiding in " + this.options.hideDelay + "s");
	    this.preparingToHide = true;
	    this._setupObservers("-showing", "visible", "-hidden", "hiding");
	    return this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay);
	  };
	
	  Opentip.prototype.hide = function() {
	    this._abortShowing();
	    if (!this.visible) {
	      return;
	    }
	    this._clearTimeouts();
	    this.debug("Hiding!");
	    this.visible = false;
	    this.preparingToHide = false;
	    this._stopEnsureTriggerElement();
	    this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden");
	    if (!this.options.fixed) {
	      this._stopFollowingMousePosition();
	    }
	    if (!this.container) {
	      return;
	    }
	    this.adapter.removeClass(this.container, this["class"].visible);
	    this.adapter.removeClass(this.container, this["class"].showing);
	    this.adapter.addClass(this.container, this["class"].goingToHide);
	    this.setCss3Style(this.container, {
	      transitionDuration: "0s"
	    });
	    return this.defer((function(_this) {
	      return function() {
	        var hideDelay;
	        _this.adapter.removeClass(_this.container, _this["class"].goingToHide);
	        _this.adapter.addClass(_this.container, _this["class"].hiding);
	        hideDelay = 0;
	        if (_this.options.hideEffect && _this.options.hideEffectDuration) {
	          hideDelay = _this.options.hideEffectDuration;
	        }
	        _this.setCss3Style(_this.container, {
	          transitionDuration: hideDelay + "s"
	        });
	        return _this._visibilityStateTimeoutId = _this.setTimeout(function() {
	          _this.adapter.removeClass(_this.container, _this["class"].hiding);
	          _this.adapter.addClass(_this.container, _this["class"].hidden);
	          _this.setCss3Style(_this.container, {
	            transitionDuration: "0s"
	          });
	          if (_this.options.removeElementsOnHide) {
	            _this.debug("Removing HTML elements.");
	            _this.adapter.remove(_this.container);
	            delete _this.container;
	            return delete _this.tooltipElement;
	          }
	        }, hideDelay);
	      };
	    })(this));
	  };
	
	  Opentip.prototype._abortHiding = function() {
	    if (this.preparingToHide) {
	      this.debug("Aborting hiding.");
	      this._clearTimeouts();
	      this.preparingToHide = false;
	      return this._setupObservers("-hiding", "showing", "visible");
	    }
	  };
	
	  Opentip.prototype.reposition = function() {
	    var position, ref, stem;
	    position = this.getPosition();
	    if (position == null) {
	      return;
	    }
	    stem = this.options.stem;
	    if (this.options.containInViewport) {
	      ref = this._ensureViewportContainment(position), position = ref.position, stem = ref.stem;
	    }
	    if (this._positionsEqual(position, this.currentPosition)) {
	      return;
	    }
	    if (!(!this.options.stem || stem.eql(this.currentStem))) {
	      this.redraw = true;
	    }
	    this.currentPosition = position;
	    this.currentStem = stem;
	    this._draw();
	    this.adapter.css(this.container, {
	      left: position.left + "px",
	      top: position.top + "px"
	    });
	    return this.defer((function(_this) {
	      return function() {
	        var rawContainer, redrawFix;
	        rawContainer = _this.adapter.unwrap(_this.container);
	        rawContainer.style.visibility = "hidden";
	        redrawFix = rawContainer.offsetHeight;
	        return rawContainer.style.visibility = "visible";
	      };
	    })(this));
	  };
	
	  Opentip.prototype.getPosition = function(tipJoint, targetJoint, stem) {
	    var additionalHorizontal, additionalVertical, offsetDistance, position, ref, stemLength, targetDimensions, targetPosition, unwrappedTarget;
	    if (!this.container) {
	      return;
	    }
	    if (tipJoint == null) {
	      tipJoint = this.options.tipJoint;
	    }
	    if (targetJoint == null) {
	      targetJoint = this.options.targetJoint;
	    }
	    position = {};
	    if (this.options.target) {
	      targetPosition = this.adapter.offset(this.options.target);
	      targetDimensions = this.adapter.dimensions(this.options.target);
	      position = targetPosition;
	      if (targetJoint.right) {
	        unwrappedTarget = this.adapter.unwrap(this.options.target);
	        if (unwrappedTarget.getBoundingClientRect != null) {
	          position.left = unwrappedTarget.getBoundingClientRect().right + ((ref = window.pageXOffset) != null ? ref : document.body.scrollLeft);
	        } else {
	          position.left += targetDimensions.width;
	        }
	      } else if (targetJoint.center) {
	        position.left += Math.round(targetDimensions.width / 2);
	      }
	      if (targetJoint.bottom) {
	        position.top += targetDimensions.height;
	      } else if (targetJoint.middle) {
	        position.top += Math.round(targetDimensions.height / 2);
	      }
	      if (this.options.borderWidth) {
	        if (this.options.tipJoint.left) {
	          position.left += this.options.borderWidth;
	        }
	        if (this.options.tipJoint.right) {
	          position.left -= this.options.borderWidth;
	        }
	        if (this.options.tipJoint.top) {
	          position.top += this.options.borderWidth;
	        } else if (this.options.tipJoint.bottom) {
	          position.top -= this.options.borderWidth;
	        }
	      }
	    } else {
	      if (this.initialMousePosition) {
	        position = {
	          top: this.initialMousePosition.y,
	          left: this.initialMousePosition.x
	        };
	      } else {
	        position = {
	          top: mousePosition.y,
	          left: mousePosition.x
	        };
	      }
	    }
	    if (this.options.autoOffset) {
	      stemLength = this.options.stem ? this.options.stemLength : 0;
	      offsetDistance = stemLength && this.options.fixed ? 2 : 10;
	      additionalHorizontal = tipJoint.middle && !this.options.fixed ? 15 : 0;
	      additionalVertical = tipJoint.center && !this.options.fixed ? 15 : 0;
	      if (tipJoint.right) {
	        position.left -= offsetDistance + additionalHorizontal;
	      } else if (tipJoint.left) {
	        position.left += offsetDistance + additionalHorizontal;
	      }
	      if (tipJoint.bottom) {
	        position.top -= offsetDistance + additionalVertical;
	      } else if (tipJoint.top) {
	        position.top += offsetDistance + additionalVertical;
	      }
	      if (stemLength) {
	        if (stem == null) {
	          stem = this.options.stem;
	        }
	        if (stem.right) {
	          position.left -= stemLength;
	        } else if (stem.left) {
	          position.left += stemLength;
	        }
	        if (stem.bottom) {
	          position.top -= stemLength;
	        } else if (stem.top) {
	          position.top += stemLength;
	        }
	      }
	    }
	    position.left += this.options.offset[0];
	    position.top += this.options.offset[1];
	    if (tipJoint.right) {
	      position.left -= this.dimensions.width;
	    } else if (tipJoint.center) {
	      position.left -= Math.round(this.dimensions.width / 2);
	    }
	    if (tipJoint.bottom) {
	      position.top -= this.dimensions.height;
	    } else if (tipJoint.middle) {
	      position.top -= Math.round(this.dimensions.height / 2);
	    }
	    return position;
	  };
	
	  Opentip.prototype._ensureViewportContainment = function(position) {
	    var needsRepositioning, newSticksOut, originals, revertedX, revertedY, scrollOffset, stem, sticksOut, targetJoint, tipJoint, viewportDimensions, viewportPosition;
	    stem = this.options.stem;
	    originals = {
	      position: position,
	      stem: stem
	    };
	    if (!(this.visible && position)) {
	      return originals;
	    }
	    sticksOut = this._sticksOut(position);
	    if (!(sticksOut[0] || sticksOut[1])) {
	      return originals;
	    }
	    tipJoint = new Opentip.Joint(this.options.tipJoint);
	    if (this.options.targetJoint) {
	      targetJoint = new Opentip.Joint(this.options.targetJoint);
	    }
	    scrollOffset = this.adapter.scrollOffset();
	    viewportDimensions = this.adapter.viewportDimensions();
	    viewportPosition = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
	    needsRepositioning = false;
	    if (viewportDimensions.width >= this.dimensions.width) {
	      if (sticksOut[0]) {
	        needsRepositioning = true;
	        switch (sticksOut[0]) {
	          case this.STICKS_OUT_LEFT:
	            tipJoint.setHorizontal("left");
	            if (this.options.targetJoint) {
	              targetJoint.setHorizontal("right");
	            }
	            break;
	          case this.STICKS_OUT_RIGHT:
	            tipJoint.setHorizontal("right");
	            if (this.options.targetJoint) {
	              targetJoint.setHorizontal("left");
	            }
	        }
	      }
	    }
	    if (viewportDimensions.height >= this.dimensions.height) {
	      if (sticksOut[1]) {
	        needsRepositioning = true;
	        switch (sticksOut[1]) {
	          case this.STICKS_OUT_TOP:
	            tipJoint.setVertical("top");
	            if (this.options.targetJoint) {
	              targetJoint.setVertical("bottom");
	            }
	            break;
	          case this.STICKS_OUT_BOTTOM:
	            tipJoint.setVertical("bottom");
	            if (this.options.targetJoint) {
	              targetJoint.setVertical("top");
	            }
	        }
	      }
	    }
	    if (!needsRepositioning) {
	      return originals;
	    }
	    if (this.options.stem) {
	      stem = tipJoint;
	    }
	    position = this.getPosition(tipJoint, targetJoint, stem);
	    newSticksOut = this._sticksOut(position);
	    revertedX = false;
	    revertedY = false;
	    if (newSticksOut[0] && (newSticksOut[0] !== sticksOut[0])) {
	      revertedX = true;
	      tipJoint.setHorizontal(this.options.tipJoint.horizontal);
	      if (this.options.targetJoint) {
	        targetJoint.setHorizontal(this.options.targetJoint.horizontal);
	      }
	    }
	    if (newSticksOut[1] && (newSticksOut[1] !== sticksOut[1])) {
	      revertedY = true;
	      tipJoint.setVertical(this.options.tipJoint.vertical);
	      if (this.options.targetJoint) {
	        targetJoint.setVertical(this.options.targetJoint.vertical);
	      }
	    }
	    if (revertedX && revertedY) {
	      return originals;
	    }
	    if (revertedX || revertedY) {
	      if (this.options.stem) {
	        stem = tipJoint;
	      }
	      position = this.getPosition(tipJoint, targetJoint, stem);
	    }
	    return {
	      position: position,
	      stem: stem
	    };
	  };
	
	  Opentip.prototype._sticksOut = function(position) {
	    var positionOffset, scrollOffset, sticksOut, viewportDimensions;
	    scrollOffset = this.adapter.scrollOffset();
	    viewportDimensions = this.adapter.viewportDimensions();
	    positionOffset = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
	    sticksOut = [false, false];
	    if (positionOffset[0] < 0) {
	      sticksOut[0] = this.STICKS_OUT_LEFT;
	    } else if (positionOffset[0] + this.dimensions.width > viewportDimensions.width) {
	      sticksOut[0] = this.STICKS_OUT_RIGHT;
	    }
	    if (positionOffset[1] < 0) {
	      sticksOut[1] = this.STICKS_OUT_TOP;
	    } else if (positionOffset[1] + this.dimensions.height > viewportDimensions.height) {
	      sticksOut[1] = this.STICKS_OUT_BOTTOM;
	    }
	    return sticksOut;
	  };
	
	  Opentip.prototype._draw = function() {
	    var backgroundCanvas, bulge, canvasDimensions, canvasPosition, closeButton, closeButtonInner, closeButtonOuter, ctx, drawCorner, drawLine, hb, j, len, position, ref, ref1, ref2, stemBase, stemLength;
	    if (!(this.backgroundCanvas && this.redraw)) {
	      return;
	    }
	    this.debug("Drawing background.");
	    this.redraw = false;
	    if (this.currentStem) {
	      ref = ["top", "right", "bottom", "left"];
	      for (j = 0, len = ref.length; j < len; j++) {
	        position = ref[j];
	        this.adapter.removeClass(this.container, "stem-" + position);
	      }
	      this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal);
	      this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical);
	    }
	    closeButtonInner = [0, 0];
	    closeButtonOuter = [0, 0];
	    if (indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
	      closeButton = new Opentip.Joint(((ref1 = this.currentStem) != null ? ref1.toString() : void 0) === "top right" ? "top left" : "top right");
	      closeButtonInner = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]];
	      closeButtonOuter = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]];
	    }
	    canvasDimensions = this.adapter.clone(this.dimensions);
	    canvasPosition = [0, 0];
	    if (this.options.borderWidth) {
	      canvasDimensions.width += this.options.borderWidth * 2;
	      canvasDimensions.height += this.options.borderWidth * 2;
	      canvasPosition[0] -= this.options.borderWidth;
	      canvasPosition[1] -= this.options.borderWidth;
	    }
	    if (this.options.shadow) {
	      canvasDimensions.width += this.options.shadowBlur * 2;
	      canvasDimensions.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2);
	      canvasDimensions.height += this.options.shadowBlur * 2;
	      canvasDimensions.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2);
	      canvasPosition[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]);
	      canvasPosition[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1]);
	    }
	    bulge = {
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0
	    };
	    if (this.currentStem) {
	      if (this.currentStem.left) {
	        bulge.left = this.options.stemLength;
	      } else if (this.currentStem.right) {
	        bulge.right = this.options.stemLength;
	      }
	      if (this.currentStem.top) {
	        bulge.top = this.options.stemLength;
	      } else if (this.currentStem.bottom) {
	        bulge.bottom = this.options.stemLength;
	      }
	    }
	    if (closeButton) {
	      if (closeButton.left) {
	        bulge.left = Math.max(bulge.left, closeButtonOuter[0]);
	      } else if (closeButton.right) {
	        bulge.right = Math.max(bulge.right, closeButtonOuter[0]);
	      }
	      if (closeButton.top) {
	        bulge.top = Math.max(bulge.top, closeButtonOuter[1]);
	      } else if (closeButton.bottom) {
	        bulge.bottom = Math.max(bulge.bottom, closeButtonOuter[1]);
	      }
	    }
	    canvasDimensions.width += bulge.left + bulge.right;
	    canvasDimensions.height += bulge.top + bulge.bottom;
	    canvasPosition[0] -= bulge.left;
	    canvasPosition[1] -= bulge.top;
	    if (this.currentStem && this.options.borderWidth) {
	      ref2 = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), stemLength = ref2.stemLength, stemBase = ref2.stemBase;
	    }
	    backgroundCanvas = this.adapter.unwrap(this.backgroundCanvas);
	    backgroundCanvas.width = canvasDimensions.width;
	    backgroundCanvas.height = canvasDimensions.height;
	    this.adapter.css(this.backgroundCanvas, {
	      width: backgroundCanvas.width + "px",
	      height: backgroundCanvas.height + "px",
	      left: canvasPosition[0] + "px",
	      top: canvasPosition[1] + "px"
	    });
	    ctx = backgroundCanvas.getContext("2d");
	    ctx.setTransform(1, 0, 0, 1, 0, 0);
	    ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
	    ctx.beginPath();
	    ctx.fillStyle = this._getColor(ctx, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal);
	    ctx.lineJoin = "miter";
	    ctx.miterLimit = 500;
	    hb = this.options.borderWidth / 2;
	    if (this.options.borderWidth) {
	      ctx.strokeStyle = this.options.borderColor;
	      ctx.lineWidth = this.options.borderWidth;
	    } else {
	      stemLength = this.options.stemLength;
	      stemBase = this.options.stemBase;
	    }
	    if (stemBase == null) {
	      stemBase = 0;
	    }
	    drawLine = (function(_this) {
	      return function(length, stem, first) {
	        if (first) {
	          ctx.moveTo(Math.max(stemBase, _this.options.borderRadius, closeButtonInner[0]) + 1 - hb, -hb);
	        }
	        if (stem) {
	          ctx.lineTo(length / 2 - stemBase / 2, -hb);
	          ctx.lineTo(length / 2, -stemLength - hb);
	          return ctx.lineTo(length / 2 + stemBase / 2, -hb);
	        }
	      };
	    })(this);
	    drawCorner = (function(_this) {
	      return function(stem, closeButton, i) {
	        var angle1, angle2, innerWidth, offset;
	        if (stem) {
	          ctx.lineTo(-stemBase + hb, 0 - hb);
	          ctx.lineTo(stemLength + hb, -stemLength - hb);
	          return ctx.lineTo(hb, stemBase - hb);
	        } else if (closeButton) {
	          offset = _this.options.closeButtonOffset;
	          innerWidth = closeButtonInner[0];
	          if (i % 2 !== 0) {
	            offset = [offset[1], offset[0]];
	            innerWidth = closeButtonInner[1];
	          }
	          angle1 = Math.acos(offset[1] / _this.options.closeButtonRadius);
	          angle2 = Math.acos(offset[0] / _this.options.closeButtonRadius);
	          ctx.lineTo(-innerWidth + hb, -hb);
	          return ctx.arc(hb - offset[0], -hb + offset[1], _this.options.closeButtonRadius, -(Math.PI / 2 + angle1), angle2, false);
	        } else {
	          ctx.lineTo(-_this.options.borderRadius + hb, -hb);
	          return ctx.quadraticCurveTo(hb, -hb, hb, _this.options.borderRadius - hb);
	        }
	      };
	    })(this);
	    ctx.translate(-canvasPosition[0], -canvasPosition[1]);
	    ctx.save();
	    (function(_this) {
	      return (function() {
	        var cornerStem, i, k, lineLength, lineStem, positionIdx, positionX, positionY, ref3, results, rotation;
	        results = [];
	        for (i = k = 0, ref3 = Opentip.positions.length / 2; 0 <= ref3 ? k < ref3 : k > ref3; i = 0 <= ref3 ? ++k : --k) {
	          positionIdx = i * 2;
	          positionX = i === 0 || i === 3 ? 0 : _this.dimensions.width;
	          positionY = i < 2 ? 0 : _this.dimensions.height;
	          rotation = (Math.PI / 2) * i;
	          lineLength = i % 2 === 0 ? _this.dimensions.width : _this.dimensions.height;
	          lineStem = new Opentip.Joint(Opentip.positions[positionIdx]);
	          cornerStem = new Opentip.Joint(Opentip.positions[positionIdx + 1]);
	          ctx.save();
	          ctx.translate(positionX, positionY);
	          ctx.rotate(rotation);
	          drawLine(lineLength, lineStem.eql(_this.currentStem), i === 0);
	          ctx.translate(lineLength, 0);
	          drawCorner(cornerStem.eql(_this.currentStem), cornerStem.eql(closeButton), i);
	          results.push(ctx.restore());
	        }
	        return results;
	      });
	    })(this)();
	    ctx.closePath();
	    ctx.save();
	    if (this.options.shadow) {
	      ctx.shadowColor = this.options.shadowColor;
	      ctx.shadowBlur = this.options.shadowBlur;
	      ctx.shadowOffsetX = this.options.shadowOffset[0];
	      ctx.shadowOffsetY = this.options.shadowOffset[1];
	    }
	    ctx.fill();
	    ctx.restore();
	    if (this.options.borderWidth) {
	      ctx.stroke();
	    }
	    ctx.restore();
	    if (closeButton) {
	      return (function(_this) {
	        return function() {
	          var crossCenter, crossHeight, crossWidth, hcs, linkCenter;
	          crossWidth = crossHeight = _this.options.closeButtonRadius * 2;
	          if (closeButton.toString() === "top right") {
	            linkCenter = [_this.dimensions.width - _this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
	            crossCenter = [linkCenter[0] + hb, linkCenter[1] - hb];
	          } else {
	            linkCenter = [_this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
	            crossCenter = [linkCenter[0] - hb, linkCenter[1] - hb];
	          }
	          ctx.translate(crossCenter[0], crossCenter[1]);
	          hcs = _this.options.closeButtonCrossSize / 2;
	          ctx.save();
	          ctx.beginPath();
	          ctx.strokeStyle = _this.options.closeButtonCrossColor;
	          ctx.lineWidth = _this.options.closeButtonCrossLineWidth;
	          ctx.lineCap = "round";
	          ctx.moveTo(-hcs, -hcs);
	          ctx.lineTo(hcs, hcs);
	          ctx.stroke();
	          ctx.beginPath();
	          ctx.moveTo(hcs, -hcs);
	          ctx.lineTo(-hcs, hcs);
	          ctx.stroke();
	          ctx.restore();
	          return _this.adapter.css(_this.closeButtonElement, {
	            left: (linkCenter[0] - hcs - _this.options.closeButtonLinkOverscan) + "px",
	            top: (linkCenter[1] - hcs - _this.options.closeButtonLinkOverscan) + "px",
	            width: (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px",
	            height: (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px"
	          });
	        };
	      })(this)();
	    }
	  };
	
	  Opentip.prototype._getPathStemMeasures = function(outerStemBase, outerStemLength, borderWidth) {
	    var angle, distanceBetweenTips, halfAngle, hb, rhombusSide, stemBase, stemLength;
	    hb = borderWidth / 2;
	    halfAngle = Math.atan((outerStemBase / 2) / outerStemLength);
	    angle = halfAngle * 2;
	    rhombusSide = hb / Math.sin(angle);
	    distanceBetweenTips = 2 * rhombusSide * Math.cos(halfAngle);
	    stemLength = hb + outerStemLength - distanceBetweenTips;
	    if (stemLength < 0) {
	      throw new Error("Sorry but your stemLength / stemBase ratio is strange.");
	    }
	    stemBase = (Math.tan(halfAngle) * stemLength) * 2;
	    return {
	      stemLength: stemLength,
	      stemBase: stemBase
	    };
	  };
	
	  Opentip.prototype._getColor = function(ctx, dimensions, color, horizontal) {
	    var colorStop, gradient, i, j, len;
	    if (horizontal == null) {
	      horizontal = false;
	    }
	    if (typeof color === "string") {
	      return color;
	    }
	    if (horizontal) {
	      gradient = ctx.createLinearGradient(0, 0, dimensions.width, 0);
	    } else {
	      gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
	    }
	    for (i = j = 0, len = color.length; j < len; i = ++j) {
	      colorStop = color[i];
	      gradient.addColorStop(colorStop[0], colorStop[1]);
	    }
	    return gradient;
	  };
	
	  Opentip.prototype._searchAndActivateCloseButtons = function() {
	    var element, j, len, ref;
	    ref = this.adapter.findAll(this.container, "." + this["class"].close);
	    for (j = 0, len = ref.length; j < len; j++) {
	      element = ref[j];
	      this.hideTriggers.push({
	        element: this.adapter.wrap(element),
	        event: "click"
	      });
	    }
	    if (this.currentObservers.showing) {
	      this._setupObservers("-showing", "showing");
	    }
	    if (this.currentObservers.visible) {
	      return this._setupObservers("-visible", "visible");
	    }
	  };
	
	  Opentip.prototype._activateFirstInput = function() {
	    var input;
	    input = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea"));
	    return input != null ? typeof input.focus === "function" ? input.focus() : void 0 : void 0;
	  };
	
	  Opentip.prototype._followMousePosition = function() {
	    if (!this.options.fixed) {
	      return Opentip._observeMousePosition(this.bound.reposition);
	    }
	  };
	
	  Opentip.prototype._stopFollowingMousePosition = function() {
	    if (!this.options.fixed) {
	      return Opentip._stopObservingMousePosition(this.bound.reposition);
	    }
	  };
	
	  Opentip.prototype._clearShowTimeout = function() {
	    return clearTimeout(this._showTimeoutId);
	  };
	
	  Opentip.prototype._clearHideTimeout = function() {
	    return clearTimeout(this._hideTimeoutId);
	  };
	
	  Opentip.prototype._clearTimeouts = function() {
	    clearTimeout(this._visibilityStateTimeoutId);
	    this._clearShowTimeout();
	    return this._clearHideTimeout();
	  };
	
	  Opentip.prototype._triggerElementExists = function() {
	    var el;
	    el = this.adapter.unwrap(this.triggerElement);
	    while (el.parentNode) {
	      if (el.parentNode.tagName === "BODY") {
	        return true;
	      }
	      el = el.parentNode;
	    }
	    return false;
	  };
	
	  Opentip.prototype._loadAjax = function() {
	    if (this.loading) {
	      return;
	    }
	    this.loaded = false;
	    this.loading = true;
	    this.adapter.addClass(this.container, this["class"].loading);
	    this.setContent("");
	    this.debug("Loading content from " + this.options.ajax);
	    return this.adapter.ajax({
	      url: this.options.ajax,
	      method: this.options.ajaxMethod,
	      onSuccess: (function(_this) {
	        return function(responseText) {
	          _this.debug("Loading successful.");
	          _this.adapter.removeClass(_this.container, _this["class"].loading);
	          return _this.setContent(responseText);
	        };
	      })(this),
	      onError: (function(_this) {
	        return function(error) {
	          var message;
	          message = _this.options.ajaxErrorMessage;
	          _this.debug(message, error);
	          _this.setContent(message);
	          return _this.adapter.addClass(_this.container, _this["class"].ajaxError);
	        };
	      })(this),
	      onComplete: (function(_this) {
	        return function() {
	          _this.adapter.removeClass(_this.container, _this["class"].loading);
	          _this.loading = false;
	          _this.loaded = true;
	          _this._searchAndActivateCloseButtons();
	          _this._activateFirstInput();
	          return _this.reposition();
	        };
	      })(this)
	    });
	  };
	
	  Opentip.prototype._ensureTriggerElement = function() {
	    if (!this._triggerElementExists()) {
	      this.deactivate();
	      return this._stopEnsureTriggerElement();
	    }
	  };
	
	  Opentip.prototype._ensureTriggerElementInterval = 1000;
	
	  Opentip.prototype._startEnsureTriggerElement = function() {
	    return this._ensureTriggerElementTimeoutId = setInterval(((function(_this) {
	      return function() {
	        return _this._ensureTriggerElement();
	      };
	    })(this)), this._ensureTriggerElementInterval);
	  };
	
	  Opentip.prototype._stopEnsureTriggerElement = function() {
	    return clearInterval(this._ensureTriggerElementTimeoutId);
	  };
	
	  return Opentip;
	
	})();
	
	vendors = ["khtml", "ms", "o", "moz", "webkit"];
	
	Opentip.prototype.setCss3Style = function(element, styles) {
	  var prop, results, value, vendor, vendorProp;
	  element = this.adapter.unwrap(element);
	  results = [];
	  for (prop in styles) {
	    if (!hasProp.call(styles, prop)) continue;
	    value = styles[prop];
	    if (element.style[prop] != null) {
	      results.push(element.style[prop] = value);
	    } else {
	      results.push((function() {
	        var j, len, results1;
	        results1 = [];
	        for (j = 0, len = vendors.length; j < len; j++) {
	          vendor = vendors[j];
	          vendorProp = "" + (this.ucfirst(vendor)) + (this.ucfirst(prop));
	          if (element.style[vendorProp] != null) {
	            results1.push(element.style[vendorProp] = value);
	          } else {
	            results1.push(void 0);
	          }
	        }
	        return results1;
	      }).call(this));
	    }
	  }
	  return results;
	};
	
	Opentip.prototype.defer = function(func) {
	  return setTimeout(func, 0);
	};
	
	Opentip.prototype.setTimeout = function(func, seconds) {
	  return setTimeout(func, seconds ? seconds * 1000 : 0);
	};
	
	Opentip.prototype.ucfirst = function(string) {
	  if (string == null) {
	    return "";
	  }
	  return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	Opentip.prototype.dasherize = function(string) {
	  return string.replace(/([A-Z])/g, function(_, character) {
	    return "-" + (character.toLowerCase());
	  });
	};
	
	mousePositionObservers = [];
	
	mousePosition = {
	  x: 0,
	  y: 0
	};
	
	mouseMoved = function(e) {
	  var j, len, observer, results;
	  mousePosition = Opentip.adapter.mousePosition(e);
	  results = [];
	  for (j = 0, len = mousePositionObservers.length; j < len; j++) {
	    observer = mousePositionObservers[j];
	    results.push(observer());
	  }
	  return results;
	};
	
	Opentip.followMousePosition = function() {
	  return Opentip.adapter.observe(document.body, "mousemove", mouseMoved);
	};
	
	Opentip._observeMousePosition = function(observer) {
	  return mousePositionObservers.push(observer);
	};
	
	Opentip._stopObservingMousePosition = function(removeObserver) {
	  var observer;
	  return mousePositionObservers = (function() {
	    var j, len, results;
	    results = [];
	    for (j = 0, len = mousePositionObservers.length; j < len; j++) {
	      observer = mousePositionObservers[j];
	      if (observer !== removeObserver) {
	        results.push(observer);
	      }
	    }
	    return results;
	  })();
	};
	
	Opentip.Joint = (function() {
	  function Joint(pointerString) {
	    if (pointerString == null) {
	      return;
	    }
	    if (pointerString instanceof Opentip.Joint) {
	      pointerString = pointerString.toString();
	    }
	    this.set(pointerString);
	    this;
	  }
	
	  Joint.prototype.set = function(string) {
	    string = string.toLowerCase();
	    this.setHorizontal(string);
	    this.setVertical(string);
	    return this;
	  };
	
	  Joint.prototype.setHorizontal = function(string) {
	    var i, j, k, len, len1, results, valid;
	    valid = ["left", "center", "right"];
	    for (j = 0, len = valid.length; j < len; j++) {
	      i = valid[j];
	      if (~string.indexOf(i)) {
	        this.horizontal = i.toLowerCase();
	      }
	    }
	    if (this.horizontal == null) {
	      this.horizontal = "center";
	    }
	    results = [];
	    for (k = 0, len1 = valid.length; k < len1; k++) {
	      i = valid[k];
	      results.push(this[i] = this.horizontal === i ? i : void 0);
	    }
	    return results;
	  };
	
	  Joint.prototype.setVertical = function(string) {
	    var i, j, k, len, len1, results, valid;
	    valid = ["top", "middle", "bottom"];
	    for (j = 0, len = valid.length; j < len; j++) {
	      i = valid[j];
	      if (~string.indexOf(i)) {
	        this.vertical = i.toLowerCase();
	      }
	    }
	    if (this.vertical == null) {
	      this.vertical = "middle";
	    }
	    results = [];
	    for (k = 0, len1 = valid.length; k < len1; k++) {
	      i = valid[k];
	      results.push(this[i] = this.vertical === i ? i : void 0);
	    }
	    return results;
	  };
	
	  Joint.prototype.eql = function(pointer) {
	    return (pointer != null) && this.horizontal === pointer.horizontal && this.vertical === pointer.vertical;
	  };
	
	  Joint.prototype.flip = function() {
	    var flippedIndex, positionIdx;
	    positionIdx = Opentip.position[this.toString(true)];
	    flippedIndex = (positionIdx + 4) % 8;
	    this.set(Opentip.positions[flippedIndex]);
	    return this;
	  };
	
	  Joint.prototype.toString = function(camelized) {
	    var horizontal, vertical;
	    if (camelized == null) {
	      camelized = false;
	    }
	    vertical = this.vertical === "middle" ? "" : this.vertical;
	    horizontal = this.horizontal === "center" ? "" : this.horizontal;
	    if (vertical && horizontal) {
	      if (camelized) {
	        horizontal = Opentip.prototype.ucfirst(horizontal);
	      } else {
	        horizontal = " " + horizontal;
	      }
	    }
	    return "" + vertical + horizontal;
	  };
	
	  return Joint;
	
	})();
	
	Opentip.prototype._positionsEqual = function(posA, posB) {
	  return (posA != null) && (posB != null) && posA.left === posB.left && posA.top === posB.top;
	};
	
	Opentip.prototype._dimensionsEqual = function(dimA, dimB) {
	  return (dimA != null) && (dimB != null) && dimA.width === dimB.width && dimA.height === dimB.height;
	};
	
	Opentip.prototype.debug = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  if (Opentip.debug && ((typeof console !== "undefined" && console !== null ? console.debug : void 0) != null)) {
	    args.unshift("#" + this.id + " |");
	    return console.debug.apply(console, args);
	  }
	};
	
	Opentip.findElements = function() {
	  var adapter, content, element, j, len, optionName, optionValue, options, ref, results;
	  adapter = Opentip.adapter;
	  ref = adapter.findAll(document.body, "[data-ot]");
	  results = [];
	  for (j = 0, len = ref.length; j < len; j++) {
	    element = ref[j];
	    options = {};
	    content = adapter.data(element, "ot");
	    if (content === "" || content === "true" || content === "yes") {
	      content = adapter.attr(element, "title");
	      adapter.attr(element, "title", "");
	    }
	    content = content || "";
	    for (optionName in Opentip.styles.standard) {
	      optionValue = adapter.data(element, "ot" + (Opentip.prototype.ucfirst(optionName)));
	      if (optionValue != null) {
	        if (optionValue === "yes" || optionValue === "true" || optionValue === "on") {
	          optionValue = true;
	        } else if (optionValue === "no" || optionValue === "false" || optionValue === "off") {
	          optionValue = false;
	        }
	        options[optionName] = optionValue;
	      }
	    }
	    results.push(new Opentip(element, content, options));
	  }
	  return results;
	};
	
	Opentip.version = "2.4.7-dev";
	
	Opentip.debug = false;
	
	Opentip.lastId = 0;
	
	Opentip.lastZIndex = 100;
	
	Opentip.tips = [];
	
	Opentip._abortShowingGroup = function(group, originatingOpentip) {
	  var j, len, opentip, ref, results;
	  ref = Opentip.tips;
	  results = [];
	  for (j = 0, len = ref.length; j < len; j++) {
	    opentip = ref[j];
	    if (opentip !== originatingOpentip && opentip.options.group === group) {
	      results.push(opentip._abortShowing());
	    } else {
	      results.push(void 0);
	    }
	  }
	  return results;
	};
	
	Opentip._hideGroup = function(group, originatingOpentip) {
	  var j, len, opentip, ref, results;
	  ref = Opentip.tips;
	  results = [];
	  for (j = 0, len = ref.length; j < len; j++) {
	    opentip = ref[j];
	    if (opentip !== originatingOpentip && opentip.options.group === group) {
	      results.push(opentip.hide());
	    } else {
	      results.push(void 0);
	    }
	  }
	  return results;
	};
	
	Opentip.adapters = {};
	
	Opentip.adapter = null;
	
	firstAdapter = true;
	
	Opentip.addAdapter = function(adapter) {
	  Opentip.adapters[adapter.name] = adapter;
	  if (firstAdapter) {
	    Opentip.adapter = adapter;
	    adapter.domReady(Opentip.findElements);
	    adapter.domReady(Opentip.followMousePosition);
	    return firstAdapter = false;
	  }
	};
	
	Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"];
	
	Opentip.position = {};
	
	ref = Opentip.positions;
	for (i = j = 0, len = ref.length; j < len; i = ++j) {
	  position = ref[i];
	  Opentip.position[position] = i;
	}
	
	Opentip.styles = {
	  standard: {
	    "extends": null,
	    title: void 0,
	    escapeTitle: true,
	    escapeContent: false,
	    className: "standard",
	    stem: true,
	    delay: null,
	    hideDelay: 0.1,
	    fixed: false,
	    showOn: "mouseover",
	    hideTrigger: "trigger",
	    hideTriggers: [],
	    hideOn: null,
	    removeElementsOnHide: false,
	    offset: [0, 0],
	    containInViewport: true,
	    autoOffset: true,
	    showEffect: "appear",
	    hideEffect: "fade",
	    showEffectDuration: 0.3,
	    hideEffectDuration: 0.2,
	    stemLength: 5,
	    stemBase: 8,
	    tipJoint: "top left",
	    target: null,
	    targetJoint: null,
	    cache: true,
	    ajax: false,
	    ajaxMethod: "GET",
	    ajaxErrorMessage: "There was a problem downloading the content.",
	    group: null,
	    style: null,
	    background: "#fff18f",
	    backgroundGradientHorizontal: false,
	    closeButtonOffset: [5, 5],
	    closeButtonRadius: 7,
	    closeButtonCrossSize: 4,
	    closeButtonCrossColor: "#d2c35b",
	    closeButtonCrossLineWidth: 1.5,
	    closeButtonLinkOverscan: 6,
	    borderRadius: 5,
	    borderWidth: 1,
	    borderColor: "#f2e37b",
	    shadow: true,
	    shadowBlur: 10,
	    shadowOffset: [3, 3],
	    shadowColor: "rgba(0, 0, 0, 0.1)"
	  },
	  glass: {
	    "extends": "standard",
	    className: "glass",
	    background: [[0, "rgba(252, 252, 252, 0.8)"], [0.5, "rgba(255, 255, 255, 0.8)"], [0.5, "rgba(250, 250, 250, 0.9)"], [1, "rgba(245, 245, 245, 0.9)"]],
	    borderColor: "#eee",
	    closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
	    borderRadius: 15,
	    closeButtonRadius: 10,
	    closeButtonOffset: [8, 8]
	  },
	  dark: {
	    "extends": "standard",
	    className: "dark",
	    borderRadius: 13,
	    borderColor: "#444",
	    closeButtonCrossColor: "rgba(240, 240, 240, 1)",
	    shadowColor: "rgba(0, 0, 0, 0.3)",
	    shadowOffset: [2, 2],
	    background: [[0, "rgba(30, 30, 30, 0.7)"], [0.5, "rgba(30, 30, 30, 0.8)"], [0.5, "rgba(10, 10, 10, 0.8)"], [1, "rgba(10, 10, 10, 0.9)"]]
	  },
	  alert: {
	    "extends": "standard",
	    className: "alert",
	    borderRadius: 1,
	    borderColor: "#AE0D11",
	    closeButtonCrossColor: "rgba(255, 255, 255, 1)",
	    shadowColor: "rgba(0, 0, 0, 0.3)",
	    shadowOffset: [2, 2],
	    background: [[0, "rgba(203, 15, 19, 0.7)"], [0.5, "rgba(203, 15, 19, 0.8)"], [0.5, "rgba(189, 14, 18, 0.8)"], [1, "rgba(179, 14, 17, 0.9)"]]
	  }
	};
	
	Opentip.defaultStyle = "standard";
	
	if (typeof module !== "undefined" && module !== null) {
	  module.exports = Opentip;
	} else {
	  window.Opentip = Opentip;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $, Adapter, ref,
	  slice = [].slice;
	
	$ = (ref = window.jQuery) != null ? ref : __webpack_require__(3);
	
	module.exports = Adapter = (function() {
	  function Adapter() {}
	
	  Adapter.prototype.name = "component";
	
	  Adapter.prototype.domReady = function(callback) {
	    return $(callback);
	  };
	
	  Adapter.prototype.create = function(html) {
	    return $(html);
	  };
	
	  Adapter.prototype.wrap = function(element) {
	    element = $(element);
	    if (element.length > 1) {
	      throw new Error("Multiple elements provided.");
	    }
	    return element;
	  };
	
	  Adapter.prototype.unwrap = function(element) {
	    return $(element)[0];
	  };
	
	  Adapter.prototype.tagName = function(element) {
	    return this.unwrap(element).tagName;
	  };
	
	  Adapter.prototype.attr = function() {
	    var args, element, ref1;
	    element = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return (ref1 = $(element)).attr.apply(ref1, args);
	  };
	
	  Adapter.prototype.data = function() {
	    var args, element, ref1;
	    element = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return (ref1 = $(element)).data.apply(ref1, args);
	  };
	
	  Adapter.prototype.find = function(element, selector) {
	    return $(element).find(selector)[0];
	  };
	
	  Adapter.prototype.findAll = function(element, selector) {
	    return $(element).find(selector);
	  };
	
	  Adapter.prototype.update = function(element, content, escape) {
	    element = $(element);
	    if (escape) {
	      return element.text(content);
	    } else {
	      return element.html(content);
	    }
	  };
	
	  Adapter.prototype.append = function(element, child) {
	    return $(element).append(child);
	  };
	
	  Adapter.prototype.remove = function(element) {
	    return $(element).remove();
	  };
	
	  Adapter.prototype.addClass = function(element, className) {
	    return $(element).addClass(className);
	  };
	
	  Adapter.prototype.removeClass = function(element, className) {
	    return $(element).removeClass(className);
	  };
	
	  Adapter.prototype.css = function(element, properties) {
	    return $(element).css(properties);
	  };
	
	  Adapter.prototype.dimensions = function(element) {
	    return {
	      width: $(element).outerWidth(),
	      height: $(element).outerHeight()
	    };
	  };
	
	  Adapter.prototype.scrollOffset = function() {
	    return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
	  };
	
	  Adapter.prototype.viewportDimensions = function() {
	    return {
	      width: document.documentElement.clientWidth,
	      height: document.documentElement.clientHeight
	    };
	  };
	
	  Adapter.prototype.mousePosition = function(e) {
	    if (e == null) {
	      return null;
	    }
	    return {
	      x: e.pageX,
	      y: e.pageY
	    };
	  };
	
	  Adapter.prototype.offset = function(element) {
	    var offset;
	    offset = $(element).offset();
	    return {
	      left: offset.left,
	      top: offset.top
	    };
	  };
	
	  Adapter.prototype.observe = function(element, eventName, observer) {
	    return $(element).bind(eventName, observer);
	  };
	
	  Adapter.prototype.stopObserving = function(element, eventName, observer) {
	    return $(element).unbind(eventName, observer);
	  };
	
	  Adapter.prototype.ajax = function(options) {
	    var ref1, ref2;
	    if (options.url == null) {
	      throw new Error("No url provided");
	    }
	    return $.ajax({
	      url: options.url,
	      type: (ref1 = (ref2 = options.method) != null ? ref2.toUpperCase() : void 0) != null ? ref1 : "GET"
	    }).done(function(content) {
	      return typeof options.onSuccess === "function" ? options.onSuccess(content) : void 0;
	    }).fail(function(request) {
	      return typeof options.onError === "function" ? options.onError("Server responded with status " + request.status) : void 0;
	    }).always(function() {
	      return typeof options.onComplete === "function" ? options.onComplete() : void 0;
	    });
	  };
	
	  Adapter.prototype.clone = function(object) {
	    return $.extend({}, object);
	  };
	
	  Adapter.prototype.extend = function() {
	    var sources, target;
	    target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return $.extend.apply($, [target].concat(slice.call(sources)));
	  };
	
	  return Adapter;
	
	})();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js?sourceMap!./../../../../sass-loader/index.js!./opentip.css", function() {
				var newContent = require("!!./../../../../css-loader/index.js?sourceMap!./../../../../sass-loader/index.js!./opentip.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".opentip-container,\n.opentip-container * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.opentip-container {\n  position: absolute;\n  max-width: 300px;\n  z-index: 100;\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  -moz-transition: -moz-transform 1s ease-in-out;\n  -o-transition: -o-transform 1s ease-in-out;\n  -ms-transition: -ms-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  pointer-events: none;\n  -webkit-transform: translateX(0) translateY(0);\n  -moz-transform: translateX(0) translateY(0);\n  -o-transform: translateX(0) translateY(0);\n  -ms-transform: translateX(0) translateY(0);\n  transform: translateX(0) translateY(0); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-center,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-center,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-center {\n  -webkit-transform: translateY(-5px);\n  -moz-transform: translateY(-5px);\n  -o-transform: translateY(-5px);\n  -ms-transform: translateY(-5px);\n  transform: translateY(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-right {\n  -webkit-transform: translateY(-5px) translateX(5px);\n  -moz-transform: translateY(-5px) translateX(5px);\n  -o-transform: translateY(-5px) translateX(5px);\n  -ms-transform: translateY(-5px) translateX(5px);\n  transform: translateY(-5px) translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-right {\n  -webkit-transform: translateX(5px);\n  -moz-transform: translateX(5px);\n  -o-transform: translateX(5px);\n  -ms-transform: translateX(5px);\n  transform: translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-right {\n  -webkit-transform: translateY(5px) translateX(5px);\n  -moz-transform: translateY(5px) translateX(5px);\n  -o-transform: translateY(5px) translateX(5px);\n  -ms-transform: translateY(5px) translateX(5px);\n  transform: translateY(5px) translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-center,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-center,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-center {\n  -webkit-transform: translateY(5px);\n  -moz-transform: translateY(5px);\n  -o-transform: translateY(5px);\n  -ms-transform: translateY(5px);\n  transform: translateY(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-left {\n  -webkit-transform: translateY(5px) translateX(-5px);\n  -moz-transform: translateY(5px) translateX(-5px);\n  -o-transform: translateY(5px) translateX(-5px);\n  -ms-transform: translateY(5px) translateX(-5px);\n  transform: translateY(5px) translateX(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-left {\n  -webkit-transform: translateX(-5px);\n  -moz-transform: translateX(-5px);\n  -o-transform: translateX(-5px);\n  -ms-transform: translateX(-5px);\n  transform: translateX(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-left {\n  -webkit-transform: translateY(-5px) translateX(-5px);\n  -moz-transform: translateY(-5px) translateX(-5px);\n  -o-transform: translateY(-5px) translateX(-5px);\n  -ms-transform: translateY(-5px) translateX(-5px);\n  transform: translateY(-5px) translateX(-5px); }\n\n.opentip-container.ot-fixed .opentip {\n  pointer-events: auto; }\n\n.opentip-container.ot-hidden {\n  display: none; }\n\n.opentip-container .opentip {\n  position: relative;\n  font-size: 13px;\n  line-height: 120%;\n  padding: 9px 14px;\n  color: #4f4b47;\n  text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.2); }\n\n.opentip-container .opentip .header {\n  margin: 0;\n  padding: 0; }\n\n.opentip-container .opentip .ot-close {\n  pointer-events: auto;\n  display: block;\n  position: absolute;\n  top: -12px;\n  left: 60px;\n  color: rgba(0, 0, 0, 0.5);\n  background: transparent;\n  text-decoration: none; }\n\n.opentip-container .opentip .ot-close span {\n  display: none; }\n\n.opentip-container .opentip .ot-loading-indicator {\n  display: none; }\n\n.opentip-container.ot-loading .ot-loading-indicator {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  display: block; }\n\n.opentip-container.ot-loading .ot-loading-indicator span {\n  display: block;\n  -webkit-animation: otloading 2s linear infinite;\n  -moz-animation: otloading 2s linear infinite;\n  -o-animation: otloading 2s linear infinite;\n  -ms-animation: otloading 2s linear infinite;\n  animation: otloading 2s linear infinite;\n  text-align: center; }\n\n.opentip-container.style-dark .opentip,\n.opentip-container.style-alert .opentip {\n  color: #f8f8f8;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2); }\n\n.opentip-container.style-glass .opentip {\n  padding: 15px 25px;\n  color: #317cc5;\n  text-shadow: 1px 1px 8px rgba(0, 94, 153, 0.3); }\n\n.opentip-container.ot-hide-effect-fade {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n.opentip-container.ot-hide-effect-fade.ot-hiding {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n\n.opentip-container.ot-show-effect-appear.ot-going-to-show,\n.opentip-container.ot-show-effect-appear.ot-showing {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out; }\n\n.opentip-container.ot-show-effect-appear.ot-going-to-show {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n\n.opentip-container.ot-show-effect-appear.ot-showing {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n.opentip-container.ot-show-effect-appear.ot-visible {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n@-moz-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-o-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-ms-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", "", {"version":3,"sources":["/./node_modules/jq-opentip/node_modules/opentip/css/opentip.css"],"names":[],"mappings":"AAAA;;EAEE,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB,EAAE;;AAE3B;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,qDAAqD;EACrD,+CAA+C;EAC/C,2CAA2C;EAC3C,6CAA6C;EAC7C,qCAAqC;EACrC,qBAAqB;EACrB,+CAA+C;EAC/C,4CAA4C;EAC5C,0CAA0C;EAC1C,2CAA2C;EAC3C,uCAAuC,EAAE;;AAE3C;;;EAGE,oCAAoC;EACpC,iCAAiC;EACjC,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B,EAAE;;AAEhC;;;EAGE,oDAAoD;EACpD,iDAAiD;EACjD,+CAA+C;EAC/C,gDAAgD;EAChD,4CAA4C,EAAE;;AAEhD;;;EAGE,mCAAmC;EACnC,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B,EAAE;;AAE/B;;;EAGE,mDAAmD;EACnD,gDAAgD;EAChD,8CAA8C;EAC9C,+CAA+C;EAC/C,2CAA2C,EAAE;;AAE/C;;;EAGE,mCAAmC;EACnC,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B,EAAE;;AAE/B;;;EAGE,oDAAoD;EACpD,iDAAiD;EACjD,+CAA+C;EAC/C,gDAAgD;EAChD,4CAA4C,EAAE;;AAEhD;;;EAGE,oCAAoC;EACpC,iCAAiC;EACjC,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B,EAAE;;AAEhC;;;EAGE,qDAAqD;EACrD,kDAAkD;EAClD,gDAAgD;EAChD,iDAAiD;EACjD,6CAA6C,EAAE;;AAEjD;EACE,qBAAqB,EAAE;;AAEzB;EACE,cAAc,EAAE;;AAElB;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,oDAAoD,EAAE;;AAExD;EACE,UAAU;EACV,WAAW,EAAE;;AAEf;EACE,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,0BAA0B;EAC1B,wBAAwB;EACxB,sBAAsB,EAAE;;AAE1B;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe,EAAE;;AAEnB;EACE,eAAe;EACf,gDAAgD;EAChD,6CAA6C;EAC7C,2CAA2C;EAC3C,4CAA4C;EAC5C,wCAAwC;EACxC,mBAAmB,EAAE;;AAEvB;;EAEE,eAAe;EACf,4CAA4C,EAAE;;AAEhD;EACE,mBAAmB;EACnB,eAAe;EACf,+CAA+C,EAAE;;AAEnD;EACE,+EAA+E;EAC/E,yEAAyE;EACzE,qEAAqE;EACrE,uEAAuE;EACvE,+DAA+D;EAC/D,WAAW;EACX,iBAAiB;EACjB,aAAa,EAAE;;AAEjB;EACE,WAAW;EACX,yBAAyB;EACzB,iEAAiE,EAAE;;AAErE;;EAEE,+EAA+E;EAC/E,yEAAyE;EACzE,qEAAqE;EACrE,uEAAuE;EACvE,+DAA+D,EAAE;;AAEnE;EACE,WAAW;EACX,yBAAyB;EACzB,iEAAiE,EAAE;;AAErE;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa,EAAE;;AAEjB;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa,EAAE;;AAEjB;EACE;IACE,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAE;EAC5B;IACE,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B,EAAE,EAAE;;AAElC;EACE;IACE,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAE;EAC5B;IACE,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B,EAAE,EAAE;;AAElC;EACE;IACE,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAE;EAC5B;IACE,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B,EAAE,EAAE;;AAElC;EACE;IACE,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAE;EAC5B;IACE,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B,EAAE,EAAE;;AAElC;EACE;IACE,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAE;EAC5B;IACE,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B,EAAE,EAAE","file":"opentip.css","sourcesContent":[".opentip-container,\n.opentip-container * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.opentip-container {\n  position: absolute;\n  max-width: 300px;\n  z-index: 100;\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  -moz-transition: -moz-transform 1s ease-in-out;\n  -o-transition: -o-transform 1s ease-in-out;\n  -ms-transition: -ms-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  pointer-events: none;\n  -webkit-transform: translateX(0) translateY(0);\n  -moz-transform: translateX(0) translateY(0);\n  -o-transform: translateX(0) translateY(0);\n  -ms-transform: translateX(0) translateY(0);\n  transform: translateX(0) translateY(0); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-center,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-center,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-center {\n  -webkit-transform: translateY(-5px);\n  -moz-transform: translateY(-5px);\n  -o-transform: translateY(-5px);\n  -ms-transform: translateY(-5px);\n  transform: translateY(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-right {\n  -webkit-transform: translateY(-5px) translateX(5px);\n  -moz-transform: translateY(-5px) translateX(5px);\n  -o-transform: translateY(-5px) translateX(5px);\n  -ms-transform: translateY(-5px) translateX(5px);\n  transform: translateY(-5px) translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-right {\n  -webkit-transform: translateX(5px);\n  -moz-transform: translateX(5px);\n  -o-transform: translateX(5px);\n  -ms-transform: translateX(5px);\n  transform: translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-right,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-right,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-right {\n  -webkit-transform: translateY(5px) translateX(5px);\n  -moz-transform: translateY(5px) translateX(5px);\n  -o-transform: translateY(5px) translateX(5px);\n  -ms-transform: translateY(5px) translateX(5px);\n  transform: translateY(5px) translateX(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-center,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-center,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-center {\n  -webkit-transform: translateY(5px);\n  -moz-transform: translateY(5px);\n  -o-transform: translateY(5px);\n  -ms-transform: translateY(5px);\n  transform: translateY(5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-bottom.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-bottom.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-bottom.stem-left {\n  -webkit-transform: translateY(5px) translateX(-5px);\n  -moz-transform: translateY(5px) translateX(-5px);\n  -o-transform: translateY(5px) translateX(-5px);\n  -ms-transform: translateY(5px) translateX(-5px);\n  transform: translateY(5px) translateX(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-middle.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-middle.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-middle.stem-left {\n  -webkit-transform: translateX(-5px);\n  -moz-transform: translateX(-5px);\n  -o-transform: translateX(-5px);\n  -ms-transform: translateX(-5px);\n  transform: translateX(-5px); }\n\n.opentip-container.ot-fixed.ot-hidden.stem-top.stem-left,\n.opentip-container.ot-fixed.ot-going-to-show.stem-top.stem-left,\n.opentip-container.ot-fixed.ot-hiding.stem-top.stem-left {\n  -webkit-transform: translateY(-5px) translateX(-5px);\n  -moz-transform: translateY(-5px) translateX(-5px);\n  -o-transform: translateY(-5px) translateX(-5px);\n  -ms-transform: translateY(-5px) translateX(-5px);\n  transform: translateY(-5px) translateX(-5px); }\n\n.opentip-container.ot-fixed .opentip {\n  pointer-events: auto; }\n\n.opentip-container.ot-hidden {\n  display: none; }\n\n.opentip-container .opentip {\n  position: relative;\n  font-size: 13px;\n  line-height: 120%;\n  padding: 9px 14px;\n  color: #4f4b47;\n  text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.2); }\n\n.opentip-container .opentip .header {\n  margin: 0;\n  padding: 0; }\n\n.opentip-container .opentip .ot-close {\n  pointer-events: auto;\n  display: block;\n  position: absolute;\n  top: -12px;\n  left: 60px;\n  color: rgba(0, 0, 0, 0.5);\n  background: transparent;\n  text-decoration: none; }\n\n.opentip-container .opentip .ot-close span {\n  display: none; }\n\n.opentip-container .opentip .ot-loading-indicator {\n  display: none; }\n\n.opentip-container.ot-loading .ot-loading-indicator {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  display: block; }\n\n.opentip-container.ot-loading .ot-loading-indicator span {\n  display: block;\n  -webkit-animation: otloading 2s linear infinite;\n  -moz-animation: otloading 2s linear infinite;\n  -o-animation: otloading 2s linear infinite;\n  -ms-animation: otloading 2s linear infinite;\n  animation: otloading 2s linear infinite;\n  text-align: center; }\n\n.opentip-container.style-dark .opentip,\n.opentip-container.style-alert .opentip {\n  color: #f8f8f8;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2); }\n\n.opentip-container.style-glass .opentip {\n  padding: 15px 25px;\n  color: #317cc5;\n  text-shadow: 1px 1px 8px rgba(0, 94, 153, 0.3); }\n\n.opentip-container.ot-hide-effect-fade {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n.opentip-container.ot-hide-effect-fade.ot-hiding {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n\n.opentip-container.ot-show-effect-appear.ot-going-to-show,\n.opentip-container.ot-show-effect-appear.ot-showing {\n  -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -moz-transition: -moz-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -o-transition: -o-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  -ms-transition: -ms-transform 0.5s ease-in-out, opacity 1s ease-in-out;\n  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out; }\n\n.opentip-container.ot-show-effect-appear.ot-going-to-show {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n\n.opentip-container.ot-show-effect-appear.ot-showing {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n.opentip-container.ot-show-effect-appear.ot-visible {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none; }\n\n@-moz-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-o-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-ms-keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes otloading {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(3);
	
	(function($){
	
	    /**
	     * Copyright 2012, Digital Fusion
	     * Licensed under the MIT license.
	     * http://teamdf.com/jquery-plugins/license/
	     *
	     * @author Sam Sehnert
	     * @desc A small plugin that checks whether elements are within
	     *       the user visible viewport of a web browser.
	     *       only accounts for vertical position, not horizontal.
	     */
	    var $w = $(window);
	    $.fn.visible = function(partial,hidden,direction){
	
	        if (this.length < 1)
	            return;
	
	        var $t        = this.length > 1 ? this.eq(0) : this,
	            t         = $t.get(0),
	            vpWidth   = $w.width(),
	            vpHeight  = $w.height(),
	            direction = (direction) ? direction : 'both',
	            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;
	
	        if (typeof t.getBoundingClientRect === 'function'){
	
	            // Use this native browser method, if available.
	            var rec = t.getBoundingClientRect(),
	                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
	                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
	                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
	                rViz = rec.right  >  0 && rec.right  <= vpWidth,
	                vVisible   = partial ? tViz || bViz : tViz && bViz,
	                hVisible   = partial ? lViz || rViz : lViz && rViz;
	
	            if(direction === 'both')
	                return clientSize && vVisible && hVisible;
	            else if(direction === 'vertical')
	                return clientSize && vVisible;
	            else if(direction === 'horizontal')
	                return clientSize && hVisible;
	        } else {
	
	            var viewTop         = $w.scrollTop(),
	                viewBottom      = viewTop + vpHeight,
	                viewLeft        = $w.scrollLeft(),
	                viewRight       = viewLeft + vpWidth,
	                offset          = $t.offset(),
	                _top            = offset.top,
	                _bottom         = _top + $t.height(),
	                _left           = offset.left,
	                _right          = _left + $t.width(),
	                compareTop      = partial === true ? _bottom : _top,
	                compareBottom   = partial === true ? _top : _bottom,
	                compareLeft     = partial === true ? _right : _left,
	                compareRight    = partial === true ? _left : _right;
	
	            if(direction === 'both')
	                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	            else if(direction === 'vertical')
	                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	            else if(direction === 'horizontal')
	                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	        }
	    };
	
	})(jQuery);
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./header.js": 14,
		"./help_panel.js": 24,
		"./imgur_modal.js": 25,
		"./layout.js": 26,
		"./room_panel.js": 29,
		"./sidebar.js": 33,
		"./upload_modal.js": 37,
		"./viewer.js": 41,
		"./welcome_panel.js": 44
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Clipboard = __webpack_require__(15);
	
	var original_render = RTChat.Views.Header.prototype.render;
	
	module.exports = RTChat.Views.Header.extend({
		attributes: {
			"rv-show": "scope.noHash |or scope.extra.isAdmin"
		},
		template: "\n\t\t<div class=\"fa fa-bars toggle-left-sidebar\"></div>\n\t\t<span>\n\t\t\t<span rv-unless=\"scope.roomName\">{ scope.appName }</span>\n\t\t\t<span rv-if=\"scope.roomName\"><a href=\"#\">{ scope.appName }</a></span>\n\t\t</span>\n\t\t<button class=\"stop btn btn-default fa fa-stop\" rv-show=\"scope.state.albumId\"></button>\n\t\t<button class=\"ping btn btn-default fa fa-crosshairs\" rv-class-active=\"capturePing\" rv-show=\"scope.state.albumId\"></button>\n\t\t<span class=\"pull-right\" rv-show=\"scope.roomName\">\n\t\t\t{ scope.users |length } viewers\n\t\t</span> &nbsp;\n\t\t<button class=\"btn btn-default fa fa-clipboard\" rv-show=\"scope.roomName\"\n\t\t\ttooltip=\"Invite link copied to Clipboard\"\n\t\t\trv-data-clipboard-text=\"scope.href\">\n\t\t</button>\n\t",
		events: {
			'click .stop': function clickStop(e) {
				RTChat.RTCWrapper.updateState({ albumId: null, slides: null });
			}
		},
		render: function render() {
			original_render.call(this); // super
	
			// Init tooltip
			this.$('[tooltip]').Opentip({
				targetJoint: 'left bottom',
				showOn: 'click',
				hideDelay: 2.0
			});
	
			var self = this;
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				self.scope.state = newState;
				self.scope.users = RTChat.RTCWrapper.users;
	
				if (!self.scope.extra) self.scope.extra = RTChat.RTCWrapper.connection.extra;
			});
	
			this.scope.href = window.location.href;
			this.scope.noHash = !window.location.hash;
	
			// Enable clipboard
			new Clipboard('[rv-data-clipboard-text]');
		}
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(16), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';
	
	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);
	
	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);
	
	    var _goodListener2 = _interopRequireDefault(_goodListener);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);
	
	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);
	
	            var _this = _possibleConstructorReturn(this, _Emitter.call(this));
	
	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }
	
	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */
	
	
	        Clipboard.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	        };
	
	        Clipboard.prototype.listenClick = function listenClick(trigger) {
	            var _this2 = this;
	
	            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                return _this2.onClick(e);
	            });
	        };
	
	        Clipboard.prototype.onClick = function onClick(e) {
	            var trigger = e.delegateTarget || e.currentTarget;
	
	            if (this.clipboardAction) {
	                this.clipboardAction = null;
	            }
	
	            this.clipboardAction = new _clipboardAction2.default({
	                action: this.action(trigger),
	                target: this.target(trigger),
	                text: this.text(trigger),
	                trigger: trigger,
	                emitter: this
	            });
	        };
	
	        Clipboard.prototype.defaultAction = function defaultAction(trigger) {
	            return getAttributeValue('action', trigger);
	        };
	
	        Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
	            var selector = getAttributeValue('target', trigger);
	
	            if (selector) {
	                return document.querySelector(selector);
	            }
	        };
	
	        Clipboard.prototype.defaultText = function defaultText(trigger) {
	            return getAttributeValue('text', trigger);
	        };
	
	        Clipboard.prototype.destroy = function destroy() {
	            this.listener.destroy();
	
	            if (this.clipboardAction) {
	                this.clipboardAction.destroy();
	                this.clipboardAction = null;
	            }
	        };
	
	        return Clipboard;
	    }(_tinyEmitter2.default);
	
	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;
	
	        if (!element.hasAttribute(attribute)) {
	            return;
	        }
	
	        return element.getAttribute(attribute);
	    }
	
	    module.exports = Clipboard;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';
	
	    var _select2 = _interopRequireDefault(_select);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);
	
	            this.resolveOptions(options);
	            this.initSelection();
	        }
	
	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */
	
	
	        ClipboardAction.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            this.action = options.action;
	            this.emitter = options.emitter;
	            this.target = options.target;
	            this.text = options.text;
	            this.trigger = options.trigger;
	
	            this.selectedText = '';
	        };
	
	        ClipboardAction.prototype.initSelection = function initSelection() {
	            if (this.text) {
	                this.selectFake();
	            } else if (this.target) {
	                this.selectTarget();
	            }
	        };
	
	        ClipboardAction.prototype.selectFake = function selectFake() {
	            var _this = this;
	
	            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	
	            this.removeFake();
	
	            this.fakeHandlerCallback = function () {
	                return _this.removeFake();
	            };
	            this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;
	
	            this.fakeElem = document.createElement('textarea');
	            // Prevent zooming on iOS
	            this.fakeElem.style.fontSize = '12pt';
	            // Reset box model
	            this.fakeElem.style.border = '0';
	            this.fakeElem.style.padding = '0';
	            this.fakeElem.style.margin = '0';
	            // Move element out of screen horizontally
	            this.fakeElem.style.position = 'absolute';
	            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	            // Move element to the same position vertically
	            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
	            this.fakeElem.setAttribute('readonly', '');
	            this.fakeElem.value = this.text;
	
	            document.body.appendChild(this.fakeElem);
	
	            this.selectedText = (0, _select2.default)(this.fakeElem);
	            this.copyText();
	        };
	
	        ClipboardAction.prototype.removeFake = function removeFake() {
	            if (this.fakeHandler) {
	                document.body.removeEventListener('click', this.fakeHandlerCallback);
	                this.fakeHandler = null;
	                this.fakeHandlerCallback = null;
	            }
	
	            if (this.fakeElem) {
	                document.body.removeChild(this.fakeElem);
	                this.fakeElem = null;
	            }
	        };
	
	        ClipboardAction.prototype.selectTarget = function selectTarget() {
	            this.selectedText = (0, _select2.default)(this.target);
	            this.copyText();
	        };
	
	        ClipboardAction.prototype.copyText = function copyText() {
	            var succeeded = undefined;
	
	            try {
	                succeeded = document.execCommand(this.action);
	            } catch (err) {
	                succeeded = false;
	            }
	
	            this.handleResult(succeeded);
	        };
	
	        ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
	            if (succeeded) {
	                this.emitter.emit('success', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            } else {
	                this.emitter.emit('error', {
	                    action: this.action,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        };
	
	        ClipboardAction.prototype.clearSelection = function clearSelection() {
	            if (this.target) {
	                this.target.blur();
	            }
	
	            window.getSelection().removeAllRanges();
	        };
	
	        ClipboardAction.prototype.destroy = function destroy() {
	            this.removeFake();
	        };
	
	        _createClass(ClipboardAction, [{
	            key: 'action',
	            set: function set() {
	                var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];
	
	                this._action = action;
	
	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }
	
	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }
	
	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);
	
	        return ClipboardAction;
	    }();
	
	    module.exports = ClipboardAction;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;
	
	    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        element.focus();
	        element.setSelectionRange(0, element.value.length);
	
	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }
	
	        var selection = window.getSelection();
	        var range = document.createRange();
	
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	
	        selectedText = selection.toString();
	    }
	
	    return selectedText;
	}
	
	module.exports = select;


/***/ },
/* 18 */
/***/ function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;
	
	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }
	
	    return this;
	  },
	
	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];
	
	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }
	
	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
	
	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];
	
	    return this;
	  }
	};
	
	module.exports = E;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(20);
	var delegate = __webpack_require__(21);
	
	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }
	
	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }
	
	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }
	
	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}
	
	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);
	
	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}
	
	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });
	
	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}
	
	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}
	
	module.exports = listen;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};
	
	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};
	
	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};
	
	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return type === '[object Function]';
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(22);
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);
	
	    element.addEventListener(type, listenerFn, useCapture);
	
	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}
	
	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector, true);
	
	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}
	
	module.exports = delegate;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var matches = __webpack_require__(23)
	
	module.exports = function (element, selector, checkYoSelf) {
	  var parent = checkYoSelf ? element : element.parentNode
	
	  while (parent && parent !== document) {
	    if (matches(parent, selector)) return parent;
	    parent = parent.parentNode
	  }
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	
	/**
	 * Element prototype.
	 */
	
	var proto = Element.prototype;
	
	/**
	 * Vendor function.
	 */
	
	var vendor = proto.matchesSelector
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;
	
	/**
	 * Expose `match()`.
	 */
	
	module.exports = match;
	
	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */
	
	function match(el, selector) {
	  if (vendor) return vendor.call(el, selector);
	  var nodes = el.parentNode.querySelectorAll(selector);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	// HelpPanel - teaches presenters how to use LiveSlide.
	
	module.exports = Backbone.View.extend({
		id: 'HelpPanel',
		template: '\n\t\t<h4>\n\t\t\tGetting Started is simple:\n\t\t\t<span class="pull-right fa fa-times toggle-help"></span>\n\t\t</h4>\n\t\t<ol>\n\t\t\t<li><span class="signin"> Sign-in with Imgur </span> or\n\t\t\t\t<span class="add-acct"> add anothers account. </span></li>\n\t\t\t<li><span class="upload"> Upload presentation to imgur. </span></li>\n\t\t\t<li><span class="invite"> Invite people to view your live presentation. </span></li>\n\t\t\t<li><span class="start disabled"> Start presentation by clicking it in the sidebar. </span></li>\n\t\t</ol>\n\t\t<a href="https://github.com/RTChat/LiveSlide/issues/new">report a bug</a>\n\t',
		//NOTE: this is extremely hacky as it relies on, and manipulates other views ☠
		events: {
			'click .signin': function clickSignin(ev) {
				$('#Sidebar .signin .fa-question-circle').click();
			},
			'click .add-acct': function clickAddAcct(ev) {
				$('#Sidebar .add-acct .fa-question-circle').click();
			},
			'click .upload': function clickUpload(ev) {
				var target = $('#Sidebar .fa-upload');
				if (target.length > 0) target.click();else this.$('.signin').click();
			},
			'click .invite': function clickInvite(ev) {
				$('#Header .fa-clipboard').click();
			},
			// StopProp on all buttons.
			'click .btn': function clickBtn(ev) {
				ev.stopPropagation();
			}
		},
		render: function render() {
			this.$el.html(this.template);
			this.$('li > span').addClass("btn btn-default");
	
			// Disable "sign in" button when signed in.
			if (RTChat.UserService.getAppData().signedin_imgur_accounts) this.$('.signin').addClass("disabled");
	
			return this;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	// Used to Sign in to imgur
	
	module.exports = Backbone.View.extend({
	  id: 'Imgur',
	  className: 'modal fade',
	  template: '\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Authenticate with Imgur</h4>\n        </div>\n\n        <div class="modal-body">\n          // iframe\n          <iframe src="https://api.imgur.com/oauth2/authorize?client_id=f55a248021c48d6&response_type=token&state=APPLICATION_STATE"></iframe>\n\n        </div>\n\n        <div class="modal-footer">\n          <button type="button" class="btn btn-primary upload">Upload</button>\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <div class="progress" rv-show="progress">\n            <div class="progress-bar progress-bar-striped active" rv-width="progress"></div>\n          </div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  ',
	  events: {},
	  // initialize: function() {
	  //   this.scope = {};
	  // },
	  render: function render() {
	    this.$el.html(this.template);
	    RTChat.Rivets.bind(this.$el, this.scope);
	
	    this.$el.modal('show');
	    return this;
	  }
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';
	
	__webpack_require__(27);
	
	var original_events = RTChat.Views.Layout.prototype.events;
	
	module.exports = RTChat.Views.Layout.extend({
		events: _.extend(original_events, {
			'click .ping': function clickPing() {
				this.subviews.room.subviews.viewer.startPing();
			}
		}),
		initialize: function initialize() {
			var self = this;
			Backbone.Subviews.add(this);
	
			// Imgur OAuth2 gives us special query-string parameters. Use em then loose em.
			if (window.location.href.match(/\?state=/)) {
				var params = paramsToObj();
				//TODO: validate params. multiple accts?
				RTChat.UserService.setAppData({
					signedin_imgur_accounts: [{
						id: params.account_id,
						name: params.account_username,
						refresh_token: params.refresh_token
					}]
				});
				// The "state" is the previous roomName; navigate there.
				window.location.href = window.location.href.replace(/\?.*$/, "#" + (params.state || ''));
				return;
			}
	
			$(window).on('hashchange', function () {
				self.render();
			});
		}
	});
	
	function paramsToObj(url) {
		if (!url) url = window.location.href;
		var obj = {};
		//TODO: urldecode
		url.replace(/(^|\?|&|#)([^\?&=#]+)=([^\?&=#]+)/g, function (m, a, key, value) {
			// console.log("XX", arguments)
			obj[key] = value;
		});
		return obj;
	}
	
	// console.log("paramsToObject Tests:");
	// var one = "?thing1=blah&thing2=lame";
	// console.log(one, "==>", paramsToObj(one));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./layout.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./layout.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Overrides styles from RTChat */\n/* HACK: Fix issues with mobile OpenTips */\n@media (max-width: 600px) {\n  .opentip-container {\n    max-width: 30%;\n    text-align: center; } }\n", "", {"version":3,"sources":["/./app/styles/layout.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC,2CAA2C;AAC3C;EACE;IACE,eAAe;IACf,mBAAmB,EAAE,EAAE","file":"layout.css","sourcesContent":["/* Overrides styles from RTChat */\n/* HACK: Fix issues with mobile OpenTips */\n@media (max-width: 600px) {\n  .opentip-container {\n    max-width: 30%;\n    text-align: center; } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Rivets) {'use strict';
	
	__webpack_require__(31);
	
	module.exports = RTChat.Views.RoomPanel.extend({
		template: '\n\t\t<div class="waiting-box" rv-hide="scope.rtc_state.slides">\n\t\t\t<div class="waiting-msg">\n\t\t\t\tWaiting for presentation to start..\n\t\t\t</div>\n\t\t\t<div rv-hide="scope.showHelp">\n\t\t\t\t<button class="btn btn-default toggle-help"> Help </button>\n\t\t\t</div>\n\t\t\t<div class="help" rv-show="scope.isAdmin |and scope.showHelp">\n\t\t\t\t<div data-subview="help"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div data-subview="viewer"></div>\n\t\t<div rv-show="scope.rtc_state.showChat">\n\t\t\t<div data-subview="chat"></div>\n\t\t</div>\n\t',
		events: {
			'click .toggle-help': function clickToggleHelp() {
				this.scope.showHelp = !this.scope.showHelp;
			}
		},
		subviewCreators: {
			viewer: function viewer() {
				return new RTChat.Views.Viewer();
			},
			chat: function chat() {
				return new RTChat.Views.ChatPanel();
			},
			help: function help() {
				return new RTChat.Views.HelpPanel();
			}
		},
		render: function render() {
			var self = this;
			this.scope = { rtc_state: {} };
	
			// Make the magic happen~~
			RTChat.RTCWrapper.joinRoom(window.location.hash, { xVideoContainer: this.$('.video-container') }, function (hasPeers) {
				//TODO: push on the list of admins
				if (!hasPeers) RTChat.RTCWrapper.updateState({ admins: [RTChat.RTCWrapper.connection.extra.fullId] });
			});
	
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			// self.scope.rtc_state = {};
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				console.log("StateUpdate", old, newState);
				// if(self.scope.isAdmin) return; // TODO: Never remove admin?
				// Become admin if the others think you should be.
				if (newState.admins) RTChat.RTCWrapper.connection.extra.isAdmin = newState.admins.indexOf(RTChat.RTCWrapper.connection.extra.fullId) >= 0;
	
				self.scope.rtc_state = newState;
				self.scope.isAdmin = RTChat.RTCWrapper.connection.extra.isAdmin;
			});
	
			// Show help if the user is new.
			var user = RTChat.UserService.getAppData();
			if (!user.other_imgur_accounts && !user.signedin_imgur_accounts) this.scope.showHelp = true;
	
			return this;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = RTChat.Rivets;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./room_panel.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./room_panel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "#RoomPanel .waiting-box {\n  padding: 0 25px;\n  padding-bottom: 25px;\n  text-align: center; }\n  #RoomPanel .waiting-box > * {\n    margin-top: 25px; }\n  #RoomPanel .waiting-box .waiting-msg {\n    display: inline-block;\n    padding: 25px 25px;\n    font-size: 20px;\n    background-color: #bcbcbc;\n    border: 1px solid grey;\n    border-radius: 15px; }\n  #RoomPanel .waiting-box ol {\n    text-align: initial;\n    padding-left: 15px; }\n  #RoomPanel .waiting-box .fa {\n    cursor: pointer; }\n  #RoomPanel .waiting-box a {\n    color: blue; }\n", "", {"version":3,"sources":["/./app/styles/room_panel.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB,EAAE;EACrB;IACE,iBAAiB,EAAE;EACrB;IACE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,mBAAmB,EAAE;EACvB;IACE,gBAAgB,EAAE;EACpB;IACE,YAAY,EAAE","file":"room_panel.css","sourcesContent":["#RoomPanel .waiting-box {\n  padding: 0 25px;\n  padding-bottom: 25px;\n  text-align: center; }\n  #RoomPanel .waiting-box > * {\n    margin-top: 25px; }\n  #RoomPanel .waiting-box .waiting-msg {\n    display: inline-block;\n    padding: 25px 25px;\n    font-size: 20px;\n    background-color: #bcbcbc;\n    border: 1px solid grey;\n    border-radius: 15px; }\n  #RoomPanel .waiting-box ol {\n    text-align: initial;\n    padding-left: 15px; }\n  #RoomPanel .waiting-box .fa {\n    cursor: pointer; }\n  #RoomPanel .waiting-box a {\n    color: blue; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $, Rivets) {'use strict';
	
	__webpack_require__(34);
	
	var AppConfig = __webpack_require__(36);
	var UploadModal = __webpack_require__(37);
	var ImgurLoader = __webpack_require__(40);
	
	module.exports = RTChat.Views.Sidebar.extend({
		template: '\n\t\t<div rv-if="scope.signed_in_accounts |length |eq 0" class="signin">\n\t\t\t<a rv-href="\'https://api.imgur.com/oauth2/authorize?client_id=\' |+ scope.clientId |+ \'&response_type=token&state=\' |+ scope.hash">\n\t\t\t\tSign-in with Imgur to upload\n\t\t\t</a>\n\t\t\t<span class="pull-right fa fa-question-circle"\n\t\t\t\ttooltip="Imgur is a free image hosting site that liveslide uses to store the presentations you upload">\n\t\t\t</span>\n\t\t</div>\n\t\t<div rv-each-user="scope.signed_in_accounts" class="dropdown">\n\t\t\t<div rv-data-acct-name="user.name">\n\t\t\t\t{ user.name }\n\t\t\t\t<span class="pull-right fa fa-ellipsis-v"></span>\n\t\t\t\t<span class="pull-right fa fa-upload"></span>\n\t\t\t</div>\n\t\t\t<ul class="album">\n\t\t\t\t<li rv-each-album="user.albums" rv-data-id="album.id">\n\t\t\t\t\t{ album.title }\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="add-acct">\n\t\t\t<span rv-hide="scope.editing">Add  Imgur Account </span>\n\t\t\t<span class="pull-right fa fa-question-circle"\n\t\t\t\ttooltip="You can add any imgur account and view its albums as presentations">\n\t\t\t</span>\n\t\t\t<input rv-show="scope.editing" placeholder="Imgur Account Name">\n\t\t</div>\n\t\t<div rv-each-user="scope.other_accounts" class="dropdown" >\n\t\t\t<div rv-data-acct-name="user.name">\n\t\t\t\t{ user.name }\n\t\t\t\t<span class="pull-right fa fa-ellipsis-v"></span>\n\t\t\t</div>\n\t\t\t<ul class="album">\n\t\t\t\t<li rv-each-album="user.albums" rv-data-id="album.id">\n\t\t\t\t\t{ album.title }\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div data-subview="context_menu"></div>\n\t\t<div data-subview="upload_modal"></div>\n\t',
		contextMenuTemplate: '\n\t\t<li class="imgur"><a> View & Edit on Imgur </a></li>\n\t\t<li class="delete"><a> Remove </a></li>\n\t',
		events: {
			'click .album > li': function clickAlbumLi(e) {
				var self = this;
				var target = this.$(e.currentTarget);
	
				if (!RTChat.RTCWrapper.connection) {
					// Go to a random room then load selected presentation.
					this.inhibitAutoOpen = true;
					window.location.href = '#' + RTChat.Random.shortid();
				}
	
				// Wait for url change...
				setTimeout(function () {
					// Load Presentation
					ImgurLoader.getAlbum(target.data('id'), function (album) {
						RTChat.RTCWrapper.updateState({
							albumId: album.id,
							title: album.title,
							slides: _.map(album.images, function (i) {
								return i.link.replace(/^http:/, 'https:');
							}),
							currentSlide: 0
						});
	
						// Close sidebar
						self.toggle(false);
						self.inhibitAutoOpen = false;
					});
				});
	
				// target.addClass("selected"); //TODO: loading?
			},
			'click .fa-upload': function clickFaUpload() {
				this.subviews.upload_modal.show();
			},
			'click .add-acct': function clickAddAcct(ev) {
				if (!this.scope.editing) {
					this.scope.editing = true;
					this.$(ev.currentTarget).find('input').val("").focus();
					ev.stopPropagation();
				}
			},
			// Add new account
			'keyup .add-acct input': function keyupAddAcctInput(ev) {
				if (ev.keyCode != 13) return true;
				this.scope.editing = false;
				if (!this.scope.user.other_imgur_accounts) this.scope.user.other_imgur_accounts = [];
				var name = this.$(ev.currentTarget).val();
	
				var self = this;
				// Add the acct to the array instantly because it will be populated asynchronously.
				this.scope.other_accounts.unshift(this.getAlbums([name], function (acct) {
					// Now that we have the exact acct name, insert it into the list.
					self.scope.user.other_imgur_accounts.unshift(acct.name);
					RTChat.UserService.setAppData({
						//TODO: use id in addition to "name"?
						other_imgur_accounts: self.scope.user.other_imgur_accounts
					});
				})[0]);
			},
			// == ContextMenu == //
			'click #ContextMenu li.delete': function clickContextMenuLiDelete() {
				if (_.findWhere(this.scope.user.signedin_imgur_accounts, { name: this.menu_target })) {
					// Remove user account info. this.scope.
					this.scope.signed_in_accounts = [];
					RTChat.UserService.setAppData({
						signedin_imgur_accounts: []
					});
				} else {
					// Remove from user.other_imgur_accounts
					var ii = _.indexOf(this.scope.user.other_imgur_accounts, this.menu_target);
					if (ii >= 0) {
						//TODO: only calling setAppData is needed.
						this.scope.user.other_imgur_accounts.splice(ii, 1);
						RTChat.UserService.setAppData({
							other_imgur_accounts: this.scope.user.other_imgur_accounts
						});
					}
	
					// Remove from scope.other_accounts
					ii = _.findIndex(this.scope.other_accounts, { name: this.menu_target });
					if (ii >= 0) this.scope.other_accounts.splice(ii, 1);
				}
			},
			'click #ContextMenu li.imgur': function clickContextMenuLiImgur() {
				// open imgur in a new tab
				window.open("https://" + this.menu_target + ".imgur.com/", "_blank");
			},
			'click .fa-ellipsis-v': function clickFaEllipsisV(ev) {
				this.subviews.context_menu.toggle(ev.currentTarget);
				this.menu_target = $(ev.currentTarget).parent('[data-acct-name]').data("acct-name");
				ev.stopPropagation(); // Needed or else the body listener hack will close it immediately.
			},
			'scroll': function scroll() {
				this.subviews.context_menu.hide();
			}
		},
		initialize: function initialize() {
			var self = this;
			Backbone.Subviews.add(this);
			//HACK: close "popovers" on click anywhere.
			$('body').on('click', function (ev) {
				self.subviews.context_menu.hide();
				self.scope.editing = false;
			});
		},
		subviewCreators: {
			// Extend ContextMenu
			context_menu: function context_menu() {
				return new (RTChat.Views.ContextMenu.extend({
					className: 'dropdown-menu', // Use Bootstrap styling
					template: this.contextMenuTemplate
				}))();
			},
			// upload_modal: function() { return new UploadModal(); }
			upload_modal: function upload_modal() {
				var self = this;
				var m = new UploadModal();
				m.on('hide', function () {
					// Refresh users albums.
					// TODO: caching messes this up.
					self.scope.signed_in_accounts = self.getAlbums(self.scope.user.signedin_imgur_accounts);
				});
				return m;
			}
		},
		// Returns an array of accounts with albums populated asynchronously.
		// Callback gets called once for every acct when populated.
		getAlbums: function getAlbums(list_of_account_names, callback) {
			if (!list_of_account_names) return []; // Don't fail when passed undefined.
			var accounts = [];
	
			var self = this;
			_.forEach(list_of_account_names, function (a) {
				var acct = a;
				if (!a.name) acct = { name: a };
	
				// Add it now so it shows up in the GUI, then add the albums asynchronously.
				accounts.push(acct);
	
				ImgurLoader.listAlbums(acct.name, function (list) {
					// console.log("got list", acct.name, list)
	
					if (list.length) _.extend(acct, {
						id: list[0].account_url, // Update to the exact capitalization name.
						name: list[0].account_url, // Update to the exact capitalization name.
						// Remove empty albums
						albums: _.reject(list, function (o) {
							return o.images_count === 0;
						})
					});
	
					if (callback) callback.call(this, acct);
				});
			});
	
			return accounts;
		},
		render: function render() {
			var self = this;
			this.scope = {};
			this.scope.user = RTChat.UserService.getAppData();
			this.scope.hash = window.location.hash.substring(1);
			this.scope.clientId = AppConfig.imgur_client_id;
			this.scope.signed_in_accounts = this.getAlbums(this.scope.user.signedin_imgur_accounts);
			this.scope.other_accounts = this.getAlbums(this.scope.user.other_imgur_accounts);
	
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			// Start closed.
			this.$el.removeClass('open');
	
			// Init Tooltips
			this.$('[tooltip]').Opentip({ targetJoint: 'right' });
	
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				// Open or close if starts or ends
				setTimeout(function () {
					//HACK: "extra" gets set by an onStateChange handler
					if (RTChat.RTCWrapper.connection.extra.isAdmin && !newState.albumId && newState.admins && !self.inhibitAutoOpen) {
						//HACK: check admins to ensure we are still in a room
						self.$el.addClass('open');
					}
				});
	
				// Keep selection in sync.
				if (old.albumId !== newState.albumId) {
					self.$('.selected').removeClass('selected');
					self.$('li[data-id="' + newState.albumId + '"]').addClass('selected');
				}
			});
	
			return this;
		},
		scope: {}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(30)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./sidebar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./sidebar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "#Sidebar {\n  font-size: 18; }\n  #Sidebar.open {\n    flex-basis: 280px; }\n  #Sidebar > * {\n    margin: 5px 5px 0;\n    /* Bootstrap Override */\n    /* List Items */ }\n    #Sidebar > *.dropdown {\n      position: static; }\n    #Sidebar > * > a {\n      color: blue; }\n    #Sidebar > *, #Sidebar > * > div, #Sidebar > * > ul > li {\n      margin-top: 5px; }\n      #Sidebar > * > .fa, #Sidebar > * > div > .fa, #Sidebar > * > ul > li > .fa {\n        width: 20px;\n        margin: 0 2px;\n        line-height: inherit;\n        text-align: center; }\n  #Sidebar #ContextMenu {\n    margin: 0;\n    /* Override RTChat */ }\n    #Sidebar #ContextMenu > li {\n      padding: 0;\n      /* Override Bootstrap */ }\n  #Sidebar li.selected {\n    color: yellow; }\n", "", {"version":3,"sources":["/./app/styles/sidebar.css"],"names":[],"mappings":"AAAA;EACE,cAAc,EAAE;EAChB;IACE,kBAAkB,EAAE;EACtB;IACE,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB,EAAE;IAClB;MACE,iBAAiB,EAAE;IACrB;MACE,YAAY,EAAE;IAChB;MACE,gBAAgB,EAAE;MAClB;QACE,YAAY;QACZ,cAAc;QACd,qBAAqB;QACrB,mBAAmB,EAAE;EAC3B;IACE,UAAU;IACV,qBAAqB,EAAE;IACvB;MACE,WAAW;MACX,wBAAwB,EAAE;EAC9B;IACE,cAAc,EAAE","file":"sidebar.css","sourcesContent":["#Sidebar {\n  font-size: 18; }\n  #Sidebar.open {\n    flex-basis: 280px; }\n  #Sidebar > * {\n    margin: 5px 5px 0;\n    /* Bootstrap Override */\n    /* List Items */ }\n    #Sidebar > *.dropdown {\n      position: static; }\n    #Sidebar > * > a {\n      color: blue; }\n    #Sidebar > *, #Sidebar > * > div, #Sidebar > * > ul > li {\n      margin-top: 5px; }\n      #Sidebar > * > .fa, #Sidebar > * > div > .fa, #Sidebar > * > ul > li > .fa {\n        width: 20px;\n        margin: 0 2px;\n        line-height: inherit;\n        text-align: center; }\n  #Sidebar #ContextMenu {\n    margin: 0;\n    /* Override RTChat */ }\n    #Sidebar #ContextMenu > li {\n      padding: 0;\n      /* Override Bootstrap */ }\n  #Sidebar li.selected {\n    color: yellow; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {"AppName":"LiveSlide","imgur_client_id":"f55a248021c48d6"}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Rivets) {'use strict';
	
	__webpack_require__(38);
	
	var ImgurLoader = __webpack_require__(40);
	
	module.exports = Backbone.View.extend({
	  className: 'modal fade upload',
	  template: '\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Upload Presentation to Imgur</h4>\n        </div>\n\n        <div class="modal-body">\n          <label>\n            Turn any image, pdf, or powerpoint presentation into an album\n          </label>\n          <form class="form-inline">\n            <div class="form-group">\n              <input type="text" placeholder="Presentation Name" name="name" autocomplete="off" class="form-control">\n            </div>\n            <label class="btn btn-default" for="fileSelector">\n              <input id="fileSelector" type="file" name="file" style="display:none;">\n              <span>Select File</span>\n            </label>\n          </form>\n          <div class="alert alert-danger" rv-show="errorMsg">\n            <strong>Error:</strong> { errorMsg }\n          </div>\n        </div>\n\n        <div class="modal-footer">\n          <button type="button" class="btn btn-primary upload">Upload</button>\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <div class="progress" rv-show="progress">\n            <div class="progress-bar progress-bar-striped active" rv-width="progress"></div>\n          </div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  ',
	  events: {
	    'click .disabled': function clickDisabled(e) {
	      e.preventDefault();
	      e.stopImmediatePropagation();
	    },
	    'change  #fileSelector': function changeFileSelector(e) {
	      // Update button text when a file is selected.
	      $(e.target).next('span').html(e.target.files[0].name);
	    },
	    'click button.upload': function clickButtonUpload() {
	      var self = this;
	      this.scope.errorMsg = undefined; //TODO: error array
	
	      // Validate File.
	      if (this.$('form [name="file"]')[0].files.length < 1) {
	        return this.scope.errorMsg = "Must select a file!";
	      }
	
	      var user_conf = RTChat.UserService.getAppData().signedin_imgur_accounts[0];
	      var data = new FormData(this.$('form')[0]);
	      data.set("username", user_conf.name);
	      data.set("refresh_token", user_conf.refresh_token);
	
	      // Validate Name.
	      if (this.$('form [name="name"]').val().length < 1) {
	        // return this.scope.errorMsg = "Must enter a name!";
	        data.set("name", this.$('form [name="file"]')[0].files[0].name);
	      }
	
	      // Submit!
	      ImgurLoader.upload({
	        data: data,
	        // Enable progress tracking.
	        xhr: function xhr() {
	          var xhr = new window.XMLHttpRequest();
	          xhr.upload.addEventListener("progress", function (e) {
	            // console.log("UPLOAD", e.loaded / e.total)
	            self.onprogress(e.loaded / e.total);
	          }, false);
	          xhr.addEventListener("progress", function (e) {
	            // console.log("DOWNLOAD", e.loaded, '/', e.total)
	            // self.onprogress(e.loaded / e.total);
	          }, false);
	          //TODO: imgur_upload progress??
	          return xhr;
	        }
	      }, function () {
	        // After Upload...
	        //TODO: display success msg.
	        self.hide();
	      });
	
	      // Disable elements.
	      this.$('.btn').addClass('disabled');
	      this.$('input').prop('disabled', true);
	
	      // start progress bar.
	      self.onprogress(0.001);
	    }
	  },
	  initialize: function initialize() {
	    this.scope = {};
	  },
	  onprogress: function onprogress(percent) {
	    this.scope.progress = percent;
	    this.$('.progress-bar').css({ width: percent * 100 + '%' });
	  },
	  render: function render() {
	    this.onprogress(0);
	    this.$el.html(this.template);
	    Rivets.bind(this.$el, this.scope);
	
	    return this;
	  },
	  show: function show() {
	    this.render().$el.modal('show');
	    this.trigger('show');
	  },
	  hide: function hide() {
	    this.$el.modal('hide');
	    this.trigger('hide');
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(30)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./upload_modal.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./upload_modal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal.upload .modal-body {\n  padding-bottom: 0; }\n\n.modal.upload .modal-footer {\n  display: flex;\n  flex-direction: row-reverse; }\n  .modal.upload .modal-footer > * {\n    margin-left: 14px; }\n  .modal.upload .modal-footer .progress {\n    flex: 1;\n    margin: auto 0; }\n\n.modal.upload .disabled {\n  outline: none;\n  /* HACK: why isn't this in bootstrap already? */ }\n  .modal.upload .disabled.btn-default.active {\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n\n.modal.upload #fileSelector {\n  overflow: hidden;\n  max-width: 261px;\n  text-overflow: ellipsis; }\n", "", {"version":3,"sources":["/./app/styles/upload_modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB,EAAE;;AAEtB;EACE,cAAc;EACd,4BAA4B,EAAE;EAC9B;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,eAAe,EAAE;;AAErB;EACE,cAAc;EACd,gDAAgD,EAAE;EAClD;IACE,0BAA0B;IAC1B,sBAAsB,EAAE;;AAE5B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB,EAAE","file":"upload_modal.css","sourcesContent":[".modal.upload .modal-body {\n  padding-bottom: 0; }\n\n.modal.upload .modal-footer {\n  display: flex;\n  flex-direction: row-reverse; }\n  .modal.upload .modal-footer > * {\n    margin-left: 14px; }\n  .modal.upload .modal-footer .progress {\n    flex: 1;\n    margin: auto 0; }\n\n.modal.upload .disabled {\n  outline: none;\n  /* HACK: why isn't this in bootstrap already? */ }\n  .modal.upload .disabled.btn-default.active {\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n\n.modal.upload #fileSelector {\n  overflow: hidden;\n  max-width: 261px;\n  text-overflow: ellipsis; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {"use strict";
	
	// Wraps Imgur.com API for our use.
	
	module.exports = {
		// Lists all albums in an imgur account (excludes empty ones)
		listAlbums: function listAlbums(account, callback) {
			$.ajax({
				url: "https://api.imgur.com/3/account/" + account + "/albums",
				headers: {
					"Authorization": "Client-ID " + RTChat.AppConfig.imgur_client_id
				},
				cache: false
			}).success(function (data) {
				callback(data.data);
			});
		},
		// Gets a single album by ID
		getAlbum: function getAlbum(id, callback) {
			$.ajax({
				url: "https://api.imgur.com/3/album/" + id,
				headers: {
					"Authorization": "Client-ID " + RTChat.AppConfig.imgur_client_id
				}
			}).success(function (data) {
				callback(data.data);
			});
		},
		upload: function upload(options, callback) {
			console.log("UPLOAD", (RTChat.AppConfig.SocketHost || '') + "/imgur_upload");
			$.ajax(_.extend({
				type: 'POST',
				url: (RTChat.AppConfig.SocketHost || '') + "/imgur_upload",
				cache: false,
				contentType: false,
				processData: false
			}, options)).then(callback);
		}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(1)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Rivets) {'use strict';
	
	// A glorified wrapper for bootstrap carousel.
	
	__webpack_require__(42);
	
	module.exports = Backbone.View.extend({
		id: 'Viewer',
		template: '\n\t\t<div class="carousel slide" rv-show="scope.state.slides | length | gt 0" rv-class-mouse-crosshair="scope.capturePing">\n\t\t\t<!-- Indicators -->\n\t\t\t<ol class="carousel-indicators" rv-show="scope.extra.isAdmin">\n\t\t\t\t<li rv-each-item="scope.state.slides" rv-data-slide-to="index" data-target="#Viewer .carousel"></li>\n\t\t\t</ol>\n\n\t\t\t<!-- Wrapper for slides -->\n\t\t\t<div class="carousel-inner" role="listbox">\n\t\t\t\t<div rv-each-url="scope.state.slides" class="item">\n\t\t\t\t\t<img rv-src="url" alt="...">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Controls -->\n\t\t\t<div class="left carousel-control" rv-show="scope.extra.isAdmin" href="#Viewer .carousel" role="button" data-slide="prev">\n\t\t\t\t<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n\t\t\t\t<span class="sr-only">Previous</span>\n\t\t\t</div>\n\t\t\t<div class="right carousel-control" rv-show="scope.extra.isAdmin" href="#Viewer .carousel" role="button" data-slide="next">\n\t\t\t\t<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n\t\t\t\t<span class="sr-only">Next</span>\n\t\t\t</div>\n\n\t\t\t<!-- Ping -->\n\t\t\t<div class="ping fa fa-circle-thin hidden"></div>\n\t\t</div>\n\t',
		events: {
			'click .carousel-control': function clickCarouselControl(e) {
				// if (!(this.scope.extra.isAdmin)) return;
				var self = this;
				var dir = this.$(e.currentTarget).data('slide');
				setTimeout(function () {
					// HACK: wait for bootstrap to do its thing
					var cur = $('.carousel-inner > .item.' + dir).index('.item');
					RTChat.RTCWrapper.updateState({ currentSlide: cur });
					self.renderPing(false); // Stop ping
				});
			},
			'click .carousel-indicators > li': function clickCarouselIndicatorsLi(e) {
				// if (!(this.scope.user.isAdmin)) return;
				RTChat.RTCWrapper.updateState({ currentSlide: $(e.currentTarget).data('slide-to') });
				this.renderPing(false); // Stop ping
			},
			'click .mouse-crosshair': function clickMouseCrosshair(e) {
				// Ping
				this.scope.capturePing = false;
				var viewer = $(e.currentTarget);
				var offset = viewer.offset();
				RTChat.RTCWrapper.updateState({ ping: {
						left: (e.pageX - offset.left) / viewer.width(),
						top: (e.pageY - offset.top) / viewer.height()
					} });
			}
		},
		render: function render() {
			this.scope = { state: {} };
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			var self = this;
			RTChat.RTCWrapper.onStateChange(function (prevState, state) {
				self.scope.state = state;
				if (prevState.albumId != state.albumId) {
					self.renderCarousel();
				} else if (prevState.currentSlide != state.currentSlide) {
					self.$('.carousel').carousel(state.currentSlide);
					self.renderPing(false);
				} else if (prevState.ping != state.ping) {
					self.renderPing(state.ping);
				}
			});
			this.scope.extra = RTChat.RTCWrapper.connection.extra;
	
			//TODO: re-render ping on resize. (events dont work)
			// this.$el.resize(function() { self.renderPing() });
	
			this.renderCarousel();
			return this;
		},
		renderCarousel: function renderCarousel() {
			// Do Bootstrap things
			// Make the proper slide active.
			var active = this.scope.state.currentSlide || 0;
			this.$('.item').eq(active).addClass('active');
			this.$('.carousel-indicators > li').eq(active).addClass('active');
	
			// Prevent autoslide.
			this.$('.carousel').carousel({ interval: false });
		},
		startPing: function startPing() {
			this.scope.capturePing = true;
		},
		renderPing: function renderPing(ping_state) {
			this.scope.capturePing = false;
	
			if (!ping_state) ping_state = { top: 0, left: -100 }; // Render off screen.
			var viewer = this.$('.active img');
			var ping = this.$('.ping').removeClass('hidden');
			viewer = { width: viewer.width(), height: viewer.height() };
			ping.css({
				top: (ping_state.top - (viewer.height / (viewer.height - ping.height()) - 1) / 2) * 100 + '%',
				left: (ping_state.left - (viewer.width / (viewer.width - ping.width()) - 1) / 2) * 100 + '%'
			});
			window.getComputedStyle(ping[0]); // Force opacity render.
			ping.addClass('hidden');
		},
		scope: {}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(30)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./viewer.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./viewer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "#Viewer {\n  --webkit-user-select: none;\n  --webkit-user-drag: none; }\n  #Viewer * {\n    --webkit-user-select: none;\n    --webkit-user-drag: none; }\n  #Viewer img {\n    margin: auto; }\n  #Viewer .ping {\n    top: 0;\n    color: red;\n    opacity: 1;\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    pointer-events: none; }\n    #Viewer .ping.hidden {\n      opacity: 0;\n      display: block !important;\n      transition: opacity 5s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      /* easeOutCirc */\n      animation-name: ping;\n      animation-duration: 1s;\n      animation-direction: alternate;\n      animation-iteration-count: infinite; }\n  #Viewer .mouse-crosshair {\n    pointer-events: none;\n    /* Ignore clicks while pinging. */ }\n    #Viewer .mouse-crosshair img {\n      pointer-events: auto;\n      cursor: crosshair !important; }\n\n@keyframes ping {\n  from {\n    font-size: 1; }\n  to {\n    font-size: 45px; } }\n", "", {"version":3,"sources":["/./app/styles/viewer.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,yBAAyB,EAAE;EAC3B;IACE,2BAA2B;IAC3B,yBAAyB,EAAE;EAC7B;IACE,aAAa,EAAE;EACjB;IACE,OAAO;IACP,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB,EAAE;IACvB;MACE,WAAW;MACX,0BAA0B;MAC1B,4DAA4D;MAC5D,iBAAiB;MACjB,qBAAqB;MACrB,uBAAuB;MACvB,+BAA+B;MAC/B,oCAAoC,EAAE;EAC1C;IACE,qBAAqB;IACrB,kCAAkC,EAAE;IACpC;MACE,qBAAqB;MACrB,6BAA6B,EAAE;;AAErC;EACE;IACE,aAAa,EAAE;EACjB;IACE,gBAAgB,EAAE,EAAE","file":"viewer.css","sourcesContent":["#Viewer {\n  --webkit-user-select: none;\n  --webkit-user-drag: none; }\n  #Viewer * {\n    --webkit-user-select: none;\n    --webkit-user-drag: none; }\n  #Viewer img {\n    margin: auto; }\n  #Viewer .ping {\n    top: 0;\n    color: red;\n    opacity: 1;\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    pointer-events: none; }\n    #Viewer .ping.hidden {\n      opacity: 0;\n      display: block !important;\n      transition: opacity 5s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      /* easeOutCirc */\n      animation-name: ping;\n      animation-duration: 1s;\n      animation-direction: alternate;\n      animation-iteration-count: infinite; }\n  #Viewer .mouse-crosshair {\n    pointer-events: none;\n    /* Ignore clicks while pinging. */ }\n    #Viewer .mouse-crosshair img {\n      pointer-events: auto;\n      cursor: crosshair !important; }\n\n@keyframes ping {\n  from {\n    font-size: 1; }\n  to {\n    font-size: 45px; } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(45);
	
	// Extend WelcomePanel
	module.exports = RTChat.Views.WelcomePanel.extend({
		template: '<h2>Welcome To LiveSlide!</h2>\n\t\t<h4>\n\t\t\tA free and <a href="https://github.com/RTChat/LiveSlide" target="_open" rel="nofollow">open source</a>\n\t\t\tlive slideshow presentation app built using the <a href="https://rtchat.github.io" target="_open" rel="nofollow">RTChat</a> framework! </h4>\n\t\t<br>\n\t\t<a class="btn btn-default" rv-href="\'#\' |+ scope.random_rooms |index 0">Get started by creating a new room</a>\n\t'
	
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./welcome_panel.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js!./welcome_panel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"welcome_panel.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map