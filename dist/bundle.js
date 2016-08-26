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
	
	// Load all views in an extensible way.
	// "views/sample_view.js" becomes "views.SampleView".
	var views = RTChat.load_module(__webpack_require__(2));
	
	// Extend Views
	_.extend(RTChat.Views, views);
	
	// Extend AppConfig
	_.extend(RTChat.AppConfig, __webpack_require__(17));
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

	var map = {
		"./header.js": 3,
		"./imgur_modal.js": 4,
		"./layout.js": 5,
		"./room_panel.js": 11,
		"./sidebar.js": 13,
		"./upload_modal.js": 18,
		"./viewer.js": 22,
		"./welcome_panel.js": 25
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
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = RTChat.Views.Header.extend({
		attributes: {
			"rv-show": "scope.noHash |or scope.extra.isAdmin"
		},
		template: "\n\t\t<div class=\"fa fa-bars toggle-left-sidebar\"></div>\n\t\t<span>\n\t\t\t<span rv-unless=\"scope.roomName\">{ scope.appName }</span>\n\t\t\t<span rv-if=\"scope.roomName\"><a href=\"#\">{ scope.appName }</a>\n\t\t\t\t<span rv-if=\"scope.state.presentation\"> &nbsp; { scope.state.presentation } </span>\n\t\t\t</span>\n\t\t</span>\n\t\t<button class=\"stop btn btn-default fa fa-stop\" rv-show=\"scope.state.albumId\"></button>\n\t\t<button class=\"ping btn btn-default fa fa-crosshairs\" rv-class-active=\"capturePing\" rv-show=\"scope.state.albumId\"></button>\n\t\t<span class=\"pull-right\" rv-show=\"scope.roomName\">\n\t\t\t{ scope.rtc.connection.peers | length } viewers\n\t\t</span>\n\t",
		//TODO:
		// <span> Copy Invite Link </span>
		events: {
			'click .stop': function clickStop(e) {
				RTChat.RTCWrapper.updateState({ albumId: null, slides: null });
			}
		},
		initialize: function initialize() {
			var self = this;
			Backbone.Subviews.add(this);
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				if (!self.scope.extra) self.scope.extra = RTChat.RTCWrapper.connection.extra;
				self.scope.state = newState;
			});
			this.scope.noHash = function () {
				return !window.location.hash;
			};
		}
	});

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {'use strict';
	
	__webpack_require__(7);
	
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
				RTChat.UserService.setAppConf({
					// imgur_account_id: params.account_id,
					imgur_account_name: params.account_username,
					imgur_refresh_token: params.refresh_token
				});
				// The "state" is the previous roomName; navigate there.
				return window.location.href.replace(/\?.*$/, "#" + (params.state || ''));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = RTChat.jQuery;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Overrides styles from RTChat */\n/*TODO*/\n.waiting-msg {\n  width: 100%;\n  margin: 30px 0;\n  padding: 0 5px;\n  font-size: 20px;\n  text-align: center; }\n", "", {"version":3,"sources":["/./app/styles/layout.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC,QAAQ;AACR;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mBAAmB,EAAE","file":"layout.css","sourcesContent":["/* Overrides styles from RTChat */\n/*TODO*/\n.waiting-msg {\n  width: 100%;\n  margin: 30px 0;\n  padding: 0 5px;\n  font-size: 20px;\n  text-align: center; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Rivets) {"use strict";
	
	module.exports = RTChat.Views.RoomPanel.extend({
		template: "\n\t\t<div class=\"waiting-msg\" rv-hide=\"scope.rtc_state.slides\">\n\t\t\tWaiting for presentation to start..\n\t\t</div>\n\t\t<div data-subview=\"viewer\"></div>\n\t\t<div rv-show=\"scope.rtc_state.showChat\">\n\t\t\t<div data-subview=\"chat\"></div>\n\t\t</div>\n\t",
		subviewCreators: {
			viewer: function viewer() {
				return new RTChat.Views.Viewer();
			},
			chat: function chat() {
				return new RTChat.Views.ChatPanel();
			}
		},
		render: function render() {
			var self = this;
			this.scope = { rtc_state: {} };
	
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			// Make the magic happen~~
			RTChat.RTCWrapper.joinRoom(window.location.hash, { xVideoContainer: this.$('.video-container') }, function (hasPeers) {
				//TODO: push on the list of admins
				if (!hasPeers) RTChat.RTCWrapper.updateState({ admins: [RTChat.RTCWrapper.connection.extra.fullId] });
			});
	
			// self.scope.rtc_state = {};
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				console.log("StateUpdate", old, newState);
				// if(self.scope.isAdmin) return; // TODO: Never remove admin?
				// Become admin if the others think you should be.
				if (newState.admins) RTChat.RTCWrapper.connection.extra.isAdmin = newState.admins.indexOf(RTChat.RTCWrapper.connection.extra.fullId) >= 0;
				self.scope.rtc_state = newState;
			});
	
			return this;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = RTChat.Rivets;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $, Rivets) {'use strict';
	
	__webpack_require__(14);
	__webpack_require__(16);
	
	var AppConfig = __webpack_require__(17);
	var UploadModal = __webpack_require__(18);
	var ImgurLoader = __webpack_require__(21);
	
	console.log("upload_modal", UploadModal);
	
	module.exports = RTChat.Views.Sidebar.extend({
		template: '\n\t\t<a rv-unless="scope.imgur_account_name"\n\t\t\trv-href="\'https://api.imgur.com/oauth2/authorize?client_id=\' |+ scope.clientId |+ \'&response_type=token&state=\' |+ scope.hash">\n\t\t\tSign-in with Imgur to upload\n\t\t</a>\n\t\t<div rv-if="scope.imgur_account_name" class="dropdown" >\n\t\t\t<div rv-data-acct-name="scope.imgur_account_name">\n\t\t\t\t\t{ scope.imgur_account_name }\n\t\t\t\t\t<span class="pull-right fa fa-ellipsis-v"></span>\n\t\t\t\t\t<span class="pull-right fa fa-upload"></span>\n\t\t\t</div>\n\t\t\t<ul class="album">\n\t\t\t\t<li rv-each-album="scope.user_albums" rv-data-id="album.id">\n\t\t\t\t\t{ album.title }\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="add-acct">\n\t\t\t<span rv-hide="scope.editing">Add  Imgur Account </span>\n\t\t\t<input rv-show="scope.editing" placeholder="Imgur Account Name">\n\t\t</div>\n\t\t<div rv-each-user="scope.iaccts" class="dropdown" >\n\t\t\t<div rv-data-acct-name="user.name">\n\t\t\t\t{ user.name  }\n\t\t\t\t<span class="pull-right fa fa-ellipsis-v"></span>\n\t\t\t</div>\n\t\t\t<ul class="album">\n\t\t\t\t<li rv-each-album="user.albums" rv-data-id="album.id">\n\t\t\t\t\t{ album.title }\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div data-subview="context_menu"></div>\n\t\t<div data-subview="upload_modal"></div>\n\t',
		contextMenuTemplate: '\n\t\t\t<li class="delete"><a> Remove </a></li>\n\t',
		events: {
			'click .album > li': function clickAlbumLi(e) {
				// Load Presentation
				var target = this.$(e.currentTarget);
				ImgurLoader.getAlbum(target.data('id'), function (album) {
					RTChat.RTCWrapper.updateState({
						albumId: album.id,
						title: album.title,
						slides: _.map(album.images, function (i) {
							return i.link.replace(/^http:/, 'https:');
						}),
						currentSlide: 0
					});
				});
				// target.addClass("selected"); //TODO: loading?
				this.toggle(); // close //TODO: UX: do we want this?
			},
			'click .fa-upload': function clickFaUpload() {
				// UploadModal.render();
				this.subviews.upload_modal.show();
			},
			// 'click .fa-refresh': function() {
			// 	this.getAlbums();
			// },
			'click .add-acct': function clickAddAcct(ev) {
				this.scope.editing = true;
				this.$(ev.currentTarget).find('input').val("").focus();
			},
			'keyup .add-acct input': function keyupAddAcctInput(ev) {
				if (ev.keyCode != 13) return true;
				this.scope.editing = false;
				if (!this.scope.other_imgur_accounts) this.scope.other_imgur_accounts = [];
				var name = this.$(ev.currentTarget).val();
	
				var self = this;
				// Add the acct to iaccts instantly because it will be populated asynchronously.
				this.scope.iaccts.push(this.getAlbums([name], function (acct) {
					// Now that we have the exact acct name, add it to the list.
					self.scope.other_imgur_accounts.push(acct.name);
					RTChat.UserService.setAppConf({
						other_imgur_accounts: self.scope.other_imgur_accounts
					});
				})[0]);
			},
			'blur .add-acct input': function blurAddAcctInput(ev) {
				this.scope.editing = false;
			},
			// == ContextMenu == //
			'click #ContextMenu li.delete': function clickContextMenuLiDelete() {
				if (this.menu_target == this.scope.imgur_account_name) {
					// Remove user account info. this.scope.
					RTChat.UserService.setAppConf({
						imgur_account_name: undefined,
						imgur_refresh_token: undefined
					});
				} else {
					// Remove from other_imgur_accounts
					var ii = this.scope.other_imgur_accounts.indexOf(this.menu_target);
					if (ii >= 0) {
						//TODO: only calling setAppConf is needed.
						this.scope.other_imgur_accounts.splice(ii, 1);
						RTChat.UserService.setAppConf({
							other_imgur_accounts: this.scope.other_imgur_accounts
							// other_imgur_accounts: []
						});
					}
	
					// Remove from iaccts
					ii = _.findIndex(this.scope.iaccts, { name: this.menu_target });
					if (ii >= 0) this.scope.iaccts.splice(ii, 1);
				}
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
			//HACK: close context_menu on click anywhere.
			$('body').on('click', function () {
				self.subviews.context_menu.hide();
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
			upload_modal: function upload_modal() {
				return new UploadModal();
			}
		},
		// Returns an array of accounts with albums populated asynchronously.
		// Callback gets called once for every acct when populated.
		getAlbums: function getAlbums(list_of_account_names, callback) {
			if (!list_of_account_names) return []; // Don't fail when passed undefined.
			var accounts = [];
	
			var self = this;
			_.forEach(list_of_account_names, function (a) {
				var acct = { name: a };
	
				// Add it now so it shows up in the GUI, then add the albums asynchronously.
				accounts.push(acct);
	
				ImgurLoader.listAlbums(a, function (list) {
					console.log("got list", acct.name, list);
	
					if (list.length) _.extend(acct, {
						name: list[0].account_url,
						// Remove empty albums
						albums: _.reject(list, function (o) {
							return o.images_count == 0;
						})
					});
	
					if (callback) callback.call(this, acct);
				});
			});
	
			return accounts;
		},
		getAllAlbums: function getAllAlbums() {},
		render: function render() {
			this.scope = RTChat.UserService.getAppConf();
			this.scope.hash = window.location.hash.substring(1);
			this.scope.clientId = AppConfig['imgur_client_id'];
			this.scope.user_albums = this.getAlbums([this.scope.imgur_account_name])[0];
			this.scope.iaccts = this.getAlbums(this.scope.other_imgur_accounts);
	
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			// start closed.
			this.$el.removeClass('open');
	
			var self = this;
			RTChat.RTCWrapper.onStateChange(function (old, newState) {
				// Open or close if starts or ends
				setTimeout(function () {
					//HACK: "extra" gets set by an onStateChange handler
					if (RTChat.RTCWrapper.connection.extra.isAdmin) {
						if (!newState.albumId && newState.admins) {
							//HACK: check admins to ensure we are still in a room
							self.$el.addClass('open');
						}
					}
				});
	
				// self.extra = RTChat.RTCWrapper.connection.extra;
	
				//TODO: update "selected"
				// if (old.presentation !== newState.presentation) {
				// 	self.scope.presentation = newState.presentation;
				// 	// Keep selection in sync.
				// 	self.$('.selected').removeClass('selected');
				// 	if (newState.presentation)
				// 		self.$('li[data-path="'+newState.presentation+'"]').addClass('selected');
				// }
				// if (old.albumId !== newState.albumId) {
	
				// if (!newState.albumId && RTChat.RTCWrapper.connection.extra.isAdmin) {
				// 	self.$el.toggleClass('open', !newState.albumId)
				// }
			});
	
			// this.$('li[data-path="'+this.scope.presentation+'"]').addClass('selected');
			return this;
		},
		scope: {}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6), __webpack_require__(12)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "#Sidebar {\n  font-size: 18; }\n  #Sidebar.open {\n    flex-basis: 260px; }\n  #Sidebar > * {\n    margin: 0 5px; }\n  #Sidebar > .dropdown {\n    position: static;\n    /* Bootstrap Override */\n    /*> ul {}*/ }\n    #Sidebar > .dropdown > div > .fa {\n      width: 20px;\n      margin: 0 2px;\n      line-height: inherit;\n      text-align: center; }\n  #Sidebar #ContextMenu {\n    margin: 0;\n    /* Override RTChat */ }\n    #Sidebar #ContextMenu > li {\n      padding: 0;\n      /* Override Bootstrap */ }\n  #Sidebar li.selected {\n    color: yellow; }\n", "", {"version":3,"sources":["/./app/styles/sidebar.css"],"names":[],"mappings":"AAAA;EACE,cAAc,EAAE;EAChB;IACE,kBAAkB,EAAE;EACtB;IACE,cAAc,EAAE;EAClB;IACE,iBAAiB;IACjB,wBAAwB;IACxB,WAAW,EAAE;IACb;MACE,YAAY;MACZ,cAAc;MACd,qBAAqB;MACrB,mBAAmB,EAAE;EACzB;IACE,UAAU;IACV,qBAAqB,EAAE;IACvB;MACE,WAAW;MACX,wBAAwB,EAAE;EAC9B;IACE,cAAc,EAAE","file":"sidebar.css","sourcesContent":["#Sidebar {\n  font-size: 18; }\n  #Sidebar.open {\n    flex-basis: 260px; }\n  #Sidebar > * {\n    margin: 0 5px; }\n  #Sidebar > .dropdown {\n    position: static;\n    /* Bootstrap Override */\n    /*> ul {}*/ }\n    #Sidebar > .dropdown > div > .fa {\n      width: 20px;\n      margin: 0 2px;\n      line-height: inherit;\n      text-align: center; }\n  #Sidebar #ContextMenu {\n    margin: 0;\n    /* Override RTChat */ }\n    #Sidebar #ContextMenu > li {\n      padding: 0;\n      /* Override Bootstrap */ }\n  #Sidebar li.selected {\n    color: yellow; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {'use strict';
	
	// jQuery pluguin for ContextMenus (better popovers)
	
	$.fn.context_menu = function (options) {
	
		console.log("CContextMenu", this, options);
	
		var el = $(options.template || '<div></div>');
		this.append(el);
		el.hide();
		el.css({
			position: 'absoute',
			top: 0,
			left: 0
		});
	
		_.each(options.events || {}, function (fn, key) {
			console.log("ECECEC", arguments);
		});
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {"AppName":"LiveSlide","imgur_client_id":"f55a248021c48d6"}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Rivets) {'use strict';
	
	__webpack_require__(19);
	
	var ImgurLoader = __webpack_require__(21);
	
	module.exports = Backbone.View.extend({
	  className: 'modal fade upload',
	  template: '\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Upload Presentation to Imgur</h4>\n        </div>\n\n        <div class="modal-body">\n          <form class="form-inline">\n            <div class="form-group">\n              <input type="text" placeholder="Presentation Name" name="name" autocomplete="off" class="form-control">\n            </div>\n            <label class="btn btn-default" for="fileSelector">\n              <input id="fileSelector" type="file" name="file" style="display:none;">\n              <span>Select File</span>\n            </label>\n          </form>\n          <div class="alert alert-danger" rv-show="errorMsg">\n            <strong>Error:</strong> { errorMsg }\n          </div>\n        </div>\n\n        <div class="modal-footer">\n          <button type="button" class="btn btn-primary upload">Upload</button>\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <div class="progress" rv-show="progress">\n            <div class="progress-bar progress-bar-striped active" rv-width="progress"></div>\n          </div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  ',
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
	
	      var user_conf = RTChat.UserService.getAppConf();
	      var data = new FormData(this.$('form')[0]);
	      data.set("username", user_conf.imgur_account_name);
	      data.set("refresh_token", user_conf.imgur_refresh_token);
	
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
	            console.log("UPLOAD", e.loaded / e.total);
	            self.onprogress(e.loaded / e.total);
	          }, false);
	          xhr.addEventListener("progress", function (e) {
	            console.log("DOWNLOAD", e.loaded, '/', e.total);
	            // self.onprogress(e.loaded / e.total);
	          }, false);
	          //TODO: imgur_upload progress??
	          return xhr;
	        }
	      }, function () {
	        // After Upload...
	        //TODO: display success msg.
	        self.hide();
	        self.onsuccess && self.onsuccess();
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
	  onsuccess: null,
	  render: function render() {
	    this.onprogress(0);
	    this.$el.html(this.template);
	    Rivets.bind(this.$el, this.scope);
	
	    return this;
	  },
	  show: function show() {
	    this.render().$el.modal('show');
	  },
	  hide: function hide() {
	    this.$el.modal('hide');
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(12)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal.upload .modal-body {\n  padding-bottom: 0; }\n\n.modal.upload .modal-footer {\n  display: flex;\n  flex-direction: row-reverse; }\n  .modal.upload .modal-footer > * {\n    margin-left: 14px; }\n  .modal.upload .modal-footer .progress {\n    flex: 1;\n    margin: auto 0; }\n\n.modal.upload .disabled {\n  outline: none;\n  /* HACK: why isn't this in bootstrap already? */ }\n  .modal.upload .disabled.btn-default.active {\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n\n.modal.upload #fileSelector {\n  overflow: hidden;\n  max-width: 261px;\n  text-overflow: ellipsis; }\n", "", {"version":3,"sources":["/./app/styles/upload_modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB,EAAE;;AAEtB;EACE,cAAc;EACd,4BAA4B,EAAE;EAC9B;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,eAAe,EAAE;;AAErB;EACE,cAAc;EACd,gDAAgD,EAAE;EAClD;IACE,0BAA0B;IAC1B,sBAAsB,EAAE;;AAE5B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB,EAAE","file":"upload_modal.css","sourcesContent":[".modal.upload .modal-body {\n  padding-bottom: 0; }\n\n.modal.upload .modal-footer {\n  display: flex;\n  flex-direction: row-reverse; }\n  .modal.upload .modal-footer > * {\n    margin-left: 14px; }\n  .modal.upload .modal-footer .progress {\n    flex: 1;\n    margin: auto 0; }\n\n.modal.upload .disabled {\n  outline: none;\n  /* HACK: why isn't this in bootstrap already? */ }\n  .modal.upload .disabled.btn-default.active {\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n\n.modal.upload #fileSelector {\n  overflow: hidden;\n  max-width: 261px;\n  text-overflow: ellipsis; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {"use strict";
	
	// Wraps Imgur.com API for our use.
	
	var AppConfig = __webpack_require__(17);
	
	module.exports = {
		// Lists all albums in an imgur account (excludes empty ones)
		listAlbums: function listAlbums(account, callback) {
			$.ajax({
				url: "https://api.imgur.com/3/account/" + account + "/albums",
				headers: {
					"Authorization": "Client-ID " + AppConfig['imgur_client_id']
				}
			}).success(function (data) {
				callback(data.data);
			});
		},
		// Gets a single album by ID
		getAlbum: function getAlbum(id, callback) {
			$.ajax({
				url: "https://api.imgur.com/3/album/" + id,
				headers: {
					"Authorization": "Client-ID " + AppConfig['imgur_client_id']
				}
			}).success(function (data) {
				callback(data.data);
			});
		},
		upload: function upload(options, callback) {
			// console.log("UPLOAD", path);
			$.ajax(_.extend({
				type: 'POST',
				url: "/imgur_upload",
				cache: false,
				contentType: false,
				processData: false
			}, options)).then(callback);
		},
		delete: function _delete(path, callback) {
			console.log("DELETE", path);
			$.ajax({
				type: 'DELETE',
				url: '/imgur_upload',
				data: path
			}).then(callback);
		}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(1)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Rivets) {'use strict';
	
	// A glorified wrapper for bootstrap carousel.
	
	__webpack_require__(23);
	
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
		initialize: function initialize() {
			var self = this;
			this.scope.state = {};
			RTChat.RTCWrapper.onStateChange(function (prevState, state) {
				self.scope.state = state;
				if (prevState.albumId != state.albumId) {
					self.render(); //TODO: why is a full render necessary? (the carousel doesnt load images otherwise)
				} else if (prevState.currentSlide != state.currentSlide) {
					self.$('.carousel').carousel(state.currentSlide);
					self.renderPing(false);
				} else if (prevState.ping != state.ping) {
					self.renderPing(state.ping);
				}
			});
	
			this.scope.extra = RTChat.RTCWrapper.connection.extra;
		},
		render: function render() {
			this.$el.html(this.template);
			Rivets.bind(this.$el, { scope: this.scope });
	
			// Make the proper slide active.
			var active = this.scope.state.currentSlide || 0;
			this.$('.item').eq(active).addClass('active');
			this.$('.carousel-indicators > li').eq(active).addClass('active');
	
			// Prevent autoslide.
			this.$('.carousel').carousel({ interval: false });
	
			//TODO: re-render ping on resize. (events dont work)
			// this.$el.resize(function() { self.renderPing() });
	
			return this;
		},
		startPing: function startPing() {
			this.scope.capturePing = true;
		},
		renderPing: function renderPing(ping_state) {
			this.scope.capturePing == false;
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(12)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "#Viewer {\n  --webkit-user-select: none;\n  --webkit-user-drag: none; }\n  #Viewer * {\n    --webkit-user-select: none;\n    --webkit-user-drag: none; }\n  #Viewer img {\n    margin: auto; }\n  #Viewer .ping {\n    top: 0;\n    color: red;\n    opacity: 1;\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    pointer-events: none; }\n    #Viewer .ping.hidden {\n      opacity: 0;\n      display: block !important;\n      transition: opacity 5s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      /* easeOutCirc */\n      animation-name: ping;\n      animation-duration: 1s;\n      animation-direction: alternate;\n      animation-iteration-count: infinite; }\n  #Viewer .mouse-crosshair {\n    pointer-events: none;\n    /* Ignore clicks while pinging. */ }\n    #Viewer .mouse-crosshair img {\n      pointer-events: auto;\n      cursor: crosshair !important; }\n\n@keyframes ping {\n  from {\n    font-size: 1; }\n  to {\n    font-size: 45px; } }\n", "", {"version":3,"sources":["/./app/styles/viewer.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,yBAAyB,EAAE;EAC3B;IACE,2BAA2B;IAC3B,yBAAyB,EAAE;EAC7B;IACE,aAAa,EAAE;EACjB;IACE,OAAO;IACP,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB,EAAE;IACvB;MACE,WAAW;MACX,0BAA0B;MAC1B,4DAA4D;MAC5D,iBAAiB;MACjB,qBAAqB;MACrB,uBAAuB;MACvB,+BAA+B;MAC/B,oCAAoC,EAAE;EAC1C;IACE,qBAAqB;IACrB,kCAAkC,EAAE;IACpC;MACE,qBAAqB;MACrB,6BAA6B,EAAE;;AAErC;EACE;IACE,aAAa,EAAE;EACjB;IACE,gBAAgB,EAAE,EAAE","file":"viewer.css","sourcesContent":["#Viewer {\n  --webkit-user-select: none;\n  --webkit-user-drag: none; }\n  #Viewer * {\n    --webkit-user-select: none;\n    --webkit-user-drag: none; }\n  #Viewer img {\n    margin: auto; }\n  #Viewer .ping {\n    top: 0;\n    color: red;\n    opacity: 1;\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    pointer-events: none; }\n    #Viewer .ping.hidden {\n      opacity: 0;\n      display: block !important;\n      transition: opacity 5s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      /* easeOutCirc */\n      animation-name: ping;\n      animation-duration: 1s;\n      animation-direction: alternate;\n      animation-iteration-count: infinite; }\n  #Viewer .mouse-crosshair {\n    pointer-events: none;\n    /* Ignore clicks while pinging. */ }\n    #Viewer .mouse-crosshair img {\n      pointer-events: auto;\n      cursor: crosshair !important; }\n\n@keyframes ping {\n  from {\n    font-size: 1; }\n  to {\n    font-size: 45px; } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(26);
	
	// Extend WelcomePanel
	module.exports = RTChat.Views.WelcomePanel.extend({
		template: '<h2>Welcome To LiveSLide!</h2>\n\t\tbuilt using the <a href="https://github.com/RTChat/RTChat">RTChat</a> framework!\n\t\t<br><br>\n\t\t<a class="btn btn-default" href="#global-chat">Go To global chat</a>\n\t'
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"welcome_panel.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map