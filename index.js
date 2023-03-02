(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["matrixConsoleApi"] = factory();
	else
		root["matrixConsoleApi"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 189:
/***/ ((module) => {

(function () {
  "use strict";

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());


/***/ }),

/***/ 185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(186);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));


/***/ }),

/***/ 194:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ 195:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ 193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.decode = exports.parse = __webpack_require__(194);
exports.encode = exports.stringify = __webpack_require__(195);


/***/ }),

/***/ 187:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// tslint:disable
/**
 * MatrixALM and MatrixQMS REST API
 * Feel free to make a copy of this definition and change the url below to your instance of MatrixALM or MatrixQMS. For the authentication, create  a token for an admin to try out all the methods. Use at your own risks! Any question? ask us on https://support.matrixreq.com
 *
 * OpenAPI spec version: 2.3
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Configuration = void 0;
    class Configuration {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
        }
    }
    exports.Configuration = Configuration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(190), __webpack_require__(185)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, url, isomorphic_fetch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.DefaultApi = exports.DefaultApiFactory = exports.DefaultApiFp = exports.DefaultApiFetchParamCreator = exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = void 0;
    url = __importStar(url);
    isomorphic_fetch_1 = __importDefault(isomorphic_fetch_1);
    const btoa = __webpack_require__(189);
    const BASE_PATH = "https://demo23.matrixreq.com/rest/1".replace(/\/+$/, "");
    /**
     *
     * @export
     */
    exports.COLLECTION_FORMATS = {
        csv: ",",
        ssv: " ",
        tsv: "\t",
        pipes: "|",
    };
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI {
        constructor(configuration, basePath = BASE_PATH, fetch = isomorphic_fetch_1.default) {
            this.basePath = basePath;
            this.fetch = fetch;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    exports.BaseAPI = BaseAPI;
    ;
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
        }
    }
    exports.RequiredError = RequiredError;
    /**
     * DefaultApi - fetch parameter creator
     * @export
     */
    exports.DefaultApiFetchParamCreator = function (configuration) {
        return {
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
             * @param {string} [arg] json object with the arguments
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allCompareHtmlPost(arg, options = {}) {
                const localVarPath = `/all/compareHtml`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (arg !== undefined) {
                    localVarQueryParameter['arg'] = arg;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Returns all info about a date
             * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
             * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
             * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allDateGet(date, dateformat, timeformat, options = {}) {
                const localVarPath = `/all/date`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (date !== undefined) {
                    localVarQueryParameter['date'] = date;
                }
                if (dateformat !== undefined) {
                    localVarQueryParameter['dateformat'] = dateformat;
                }
                if (timeformat !== undefined) {
                    localVarQueryParameter['timeformat'] = timeformat;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileFilenoGet(fileno, key, disposition, options = {}) {
                // verify required parameter 'fileno' is not null or undefined
                if (fileno === null || fileno === undefined) {
                    throw new RequiredError('fileno', 'Required parameter fileno was null or undefined when calling allFileFilenoGet.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling allFileFilenoGet.');
                }
                const localVarPath = `/all/file/{fileno}`
                    .replace(`{${"fileno"}}`, encodeURIComponent(String(fileno)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (disposition !== undefined) {
                    localVarQueryParameter['disposition'] = disposition;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieve list of all customer-wide files
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileGet(options = {}) {
                const localVarPath = `/all/file`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFilePost(options = {}) {
                const localVarPath = `/all/file`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Retrieve license status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLicenseGet(options = {}) {
                const localVarPath = `/all/license`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Adds a log entry (server side).
             * @param {string} message Message to log
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLogPost(message, options = {}) {
                // verify required parameter 'message' is not null or undefined
                if (message === null || message === undefined) {
                    throw new RequiredError('message', 'Required parameter message was null or undefined when calling allLogPost.');
                }
                const localVarPath = `/all/log`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (message !== undefined) {
                    localVarQueryParameter['message'] = message;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Monitoring object
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allMonitorGet(options = {}) {
                const localVarPath = `/all/monitor`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in all projects
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleGet(search, id, filter, fieldsOut, labels, links, options = {}) {
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new RequiredError('search', 'Required parameter search was null or undefined when calling allNeedleGet.');
                }
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new RequiredError('id', 'Required parameter id was null or undefined when calling allNeedleGet.');
                }
                const localVarPath = `/all/needle`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (search !== undefined) {
                    localVarQueryParameter['search'] = search;
                }
                if (id !== undefined) {
                    localVarQueryParameter['id'] = id;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (fieldsOut !== undefined) {
                    localVarQueryParameter['fieldsOut'] = fieldsOut;
                }
                if (labels !== undefined) {
                    localVarQueryParameter['labels'] = labels;
                }
                if (links !== undefined) {
                    localVarQueryParameter['links'] = links;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in all projects
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleminimalGet(search, filter, options = {}) {
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new RequiredError('search', 'Required parameter search was null or undefined when calling allNeedleminimalGet.');
                }
                const localVarPath = `/all/needleminimal`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (search !== undefined) {
                    localVarQueryParameter['search'] = search;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.2
             * @summary The OpenAPI 3.0 definition of our REST API
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allOpenapiGet(options = {}) {
                const localVarPath = `/all/openapi`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Lists all reports
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allReportsGet(options = {}) {
                const localVarPath = `/all/reports`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Sends an email. Non-optional parameters are sent as a POST JSON payload.
             * @param {SendmailParam} [body] Necessary information to send a mail
             * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user)
             * @param {number} [noreply] (optional) if set to 1 makes it a no-reply email (not sent by the actual user)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSendmailPost(body, system, noreply, options = {}) {
                const localVarPath = `/all/sendmail`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (system !== undefined) {
                    localVarQueryParameter['system'] = system;
                }
                if (noreply !== undefined) {
                    localVarQueryParameter['noreply'] = noreply;
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload.
             * @param {ServiceDeskParam} [body] Necessary information to send a mail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allServicedeskPost(body, options = {}) {
                const localVarPath = `/all/servicedesk`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a customer
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingGet(options = {}) {
                const localVarPath = `/all/setting`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingPost(key, value, options = {}) {
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling allSettingPost.');
                }
                // verify required parameter 'value' is not null or undefined
                if (value === null || value === undefined) {
                    throw new RequiredError('value', 'Required parameter value was null or undefined when calling allSettingPost.');
                }
                const localVarPath = `/all/setting`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get instance status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allStatusGet(options = {}) {
                const localVarPath = `/all/status`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Returns all accepted time zones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTimezoneGet(options = {}) {
                const localVarPath = `/all/timezone`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for all projects
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTodoGet(includeDone, includeFuture, options = {}) {
                const localVarPath = `/all/todo`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (includeDone !== undefined) {
                    localVarQueryParameter['includeDone'] = includeDone;
                }
                if (includeFuture !== undefined) {
                    localVarQueryParameter['includeFuture'] = includeFuture;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary WebHook
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allWebhookPost(options = {}) {
                const localVarPath = `/all/webhook`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Retrieves the group list
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGet(details, options = {}) {
                const localVarPath = `/group`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (details !== undefined) {
                    localVarQueryParameter['details'] = details;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a group
             * @param {string} groupId group Id
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdDelete(groupId, confirm, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdDelete.');
                }
                // verify required parameter 'confirm' is not null or undefined
                if (confirm === null || confirm === undefined) {
                    throw new RequiredError('confirm', 'Required parameter confirm was null or undefined when calling groupGroupIdDelete.');
                }
                const localVarPath = `/group/{groupId}`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (confirm !== undefined) {
                    localVarQueryParameter['confirm'] = confirm;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
             * @summary Retrieves details of a group
             * @param {string} groupId group Id
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdGet(groupId, details, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdGet.');
                }
                const localVarPath = `/group/{groupId}`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (details !== undefined) {
                    localVarQueryParameter['details'] = details;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Adds a group to a project (or removes it)
             * @param {string} groupId group Id
             * @param {string} project Project short label
             * @param {number} [permission] Specify the (new) permission for that group in that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdProjectProjectPost(groupId, project, permission, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdProjectProjectPost.');
                }
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling groupGroupIdProjectProjectPost.');
                }
                const localVarPath = `/group/{groupId}/project/{project}`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)))
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (permission !== undefined) {
                    localVarQueryParameter['permission'] = permission;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a group
             * @param {string} groupId group Id
             * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdRenamePut(groupId, newName, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdRenamePut.');
                }
                // verify required parameter 'newName' is not null or undefined
                if (newName === null || newName === undefined) {
                    throw new RequiredError('newName', 'Required parameter newName was null or undefined when calling groupGroupIdRenamePut.');
                }
                const localVarPath = `/group/{groupId}/rename`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (newName !== undefined) {
                    localVarQueryParameter['newName'] = newName;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.2
             * @summary Adds a user to a group
             * @param {string} groupId group Id
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserUserPut(groupId, user, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdUserUserPut.');
                }
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling groupGroupIdUserUserPut.');
                }
                const localVarPath = `/group/{groupId}/user/{user}`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)))
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Sets all users of a group (replacing potential former content)
             * @param {string} groupId group Id
             * @param {string} users List of all users members of that group, commas-separated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserlistPut(groupId, users, options = {}) {
                // verify required parameter 'groupId' is not null or undefined
                if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId', 'Required parameter groupId was null or undefined when calling groupGroupIdUserlistPut.');
                }
                // verify required parameter 'users' is not null or undefined
                if (users === null || users === undefined) {
                    throw new RequiredError('users', 'Required parameter users was null or undefined when calling groupGroupIdUserlistPut.');
                }
                const localVarPath = `/group/{groupId}/userlist`
                    .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (users !== undefined) {
                    localVarQueryParameter['users'] = users;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Creates a new group
             * @param {string} groupName group name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNamePost(groupName, options = {}) {
                // verify required parameter 'groupName' is not null or undefined
                if (groupName === null || groupName === undefined) {
                    throw new RequiredError('groupName', 'Required parameter groupName was null or undefined when calling groupGroupNamePost.');
                }
                const localVarPath = `/group/{groupName}`
                    .replace(`{${"groupName"}}`, encodeURIComponent(String(groupName)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a user from a group
             * @param {string} groupName group name
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNameUserUserDelete(groupName, user, options = {}) {
                // verify required parameter 'groupName' is not null or undefined
                if (groupName === null || groupName === undefined) {
                    throw new RequiredError('groupName', 'Required parameter groupName was null or undefined when calling groupGroupNameUserUserDelete.');
                }
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling groupGroupNameUserUserDelete.');
                }
                const localVarPath = `/group/{groupName}/user/{user}`
                    .replace(`{${"groupName"}}`, encodeURIComponent(String(groupName)))
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.3
             * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
             * @param {string} mainproject mainproject
             * @param {string} branchproject branchproject
             * @param {string} reason The reason why the user is doing this
             * @param {MergeParam} [body] Actions to perform
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options = {}) {
                // verify required parameter 'mainproject' is not null or undefined
                if (mainproject === null || mainproject === undefined) {
                    throw new RequiredError('mainproject', 'Required parameter mainproject was null or undefined when calling mainprojectMergeBranchprojectPost.');
                }
                // verify required parameter 'branchproject' is not null or undefined
                if (branchproject === null || branchproject === undefined) {
                    throw new RequiredError('branchproject', 'Required parameter branchproject was null or undefined when calling mainprojectMergeBranchprojectPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling mainprojectMergeBranchprojectPost.');
                }
                const localVarPath = `/{mainproject}/merge/{branchproject}`
                    .replace(`{${"mainproject"}}`, encodeURIComponent(String(mainproject)))
                    .replace(`{${"branchproject"}}`, encodeURIComponent(String(branchproject)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
             * @summary Retrieves all accesses in a project (list of groups and users who have access)
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAccessGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectAccessGet.');
                }
                const localVarPath = `/{project}/access`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieves all changes in a project
             * @param {string} project Project short label
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
             * @param {string} [tech] (optional) if set to yes, returns the underneath changes
             * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
             * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
             * @param {number} [noReport] (optional) set to 1 to avoid having reports
             * @param {number} [noImport] (optional) set to 1 to avoid having imports
             * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
             * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
             * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectAuditGet.');
                }
                const localVarPath = `/{project}/audit`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (startAt !== undefined) {
                    localVarQueryParameter['startAt'] = startAt;
                }
                if (maxResults !== undefined) {
                    localVarQueryParameter['maxResults'] = maxResults;
                }
                if (deleteOnly !== undefined) {
                    localVarQueryParameter['deleteOnly'] = deleteOnly;
                }
                if (tech !== undefined) {
                    localVarQueryParameter['tech'] = tech;
                }
                if (auditIdMin !== undefined) {
                    localVarQueryParameter['auditIdMin'] = auditIdMin;
                }
                if (auditIdMax !== undefined) {
                    localVarQueryParameter['auditIdMax'] = auditIdMax;
                }
                if (noReport !== undefined) {
                    localVarQueryParameter['noReport'] = noReport;
                }
                if (noImport !== undefined) {
                    localVarQueryParameter['noImport'] = noImport;
                }
                if (include !== undefined) {
                    localVarQueryParameter['include'] = include;
                }
                if (resolveRef !== undefined) {
                    localVarQueryParameter['resolveRef'] = resolveRef;
                }
                if (itemRef !== undefined) {
                    localVarQueryParameter['itemRef'] = itemRef;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
             * @param {string} project Project short label
             * @param {string} label Branch project label
             * @param {string} shortLabel Branch project short label
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
             * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
             * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
             * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
             * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
             * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectBranchPost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectBranchPost.');
                }
                // verify required parameter 'shortLabel' is not null or undefined
                if (shortLabel === null || shortLabel === undefined) {
                    throw new RequiredError('shortLabel', 'Required parameter shortLabel was null or undefined when calling projectBranchPost.');
                }
                // verify required parameter 'keepPermissions' is not null or undefined
                if (keepPermissions === null || keepPermissions === undefined) {
                    throw new RequiredError('keepPermissions', 'Required parameter keepPermissions was null or undefined when calling projectBranchPost.');
                }
                // verify required parameter 'keepContent' is not null or undefined
                if (keepContent === null || keepContent === undefined) {
                    throw new RequiredError('keepContent', 'Required parameter keepContent was null or undefined when calling projectBranchPost.');
                }
                const localVarPath = `/{project}/branch`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (shortLabel !== undefined) {
                    localVarQueryParameter['shortLabel'] = shortLabel;
                }
                if (branch !== undefined) {
                    localVarQueryParameter['branch'] = branch;
                }
                if (history !== undefined) {
                    localVarQueryParameter['history'] = history;
                }
                if (tagToCreate !== undefined) {
                    localVarQueryParameter['tagToCreate'] = tagToCreate;
                }
                if (branchInThePastTag !== undefined) {
                    localVarQueryParameter['branchInThePastTag'] = branchInThePastTag;
                }
                if (keepPermissions !== undefined) {
                    localVarQueryParameter['keepPermissions'] = keepPermissions;
                }
                if (keepContent !== undefined) {
                    localVarQueryParameter['keepContent'] = keepContent;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all dates at which a project has been modified
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCalendarGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCalendarGet.');
                }
                const localVarPath = `/{project}/calendar`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryDelete(project, category, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatCategoryDelete.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatCategoryDelete.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectCatCategoryDelete.');
                }
                const localVarPath = `/{project}/cat/{category}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} [filter] (optional) specify a filter
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryGet(project, category, filter, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatCategoryGet.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatCategoryGet.');
                }
                const localVarPath = `/{project}/cat/{category}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} order The new order (for reordering)
             * @param {string} shortLabel The new short label for that category (for renaming)
             * @param {string} label The new long label for that category (for renaming)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryPut(project, category, order, shortLabel, label, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatCategoryPut.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatCategoryPut.');
                }
                // verify required parameter 'order' is not null or undefined
                if (order === null || order === undefined) {
                    throw new RequiredError('order', 'Required parameter order was null or undefined when calling projectCatCategoryPut.');
                }
                // verify required parameter 'shortLabel' is not null or undefined
                if (shortLabel === null || shortLabel === undefined) {
                    throw new RequiredError('shortLabel', 'Required parameter shortLabel was null or undefined when calling projectCatCategoryPut.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectCatCategoryPut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectCatCategoryPut.');
                }
                const localVarPath = `/{project}/cat/{category}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (order !== undefined) {
                    localVarQueryParameter['order'] = order;
                }
                if (shortLabel !== undefined) {
                    localVarQueryParameter['shortLabel'] = shortLabel;
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingGet(project, category, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatCategorySettingGet.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatCategorySettingGet.');
                }
                const localVarPath = `/{project}/cat/{category}/setting`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingPost(project, category, key, value, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatCategorySettingPost.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatCategorySettingPost.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling projectCatCategorySettingPost.');
                }
                // verify required parameter 'value' is not null or undefined
                if (value === null || value === undefined) {
                    throw new RequiredError('value', 'Required parameter value was null or undefined when calling projectCatCategorySettingPost.');
                }
                const localVarPath = `/{project}/cat/{category}/setting`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all categories of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatGet.');
                }
                const localVarPath = `/{project}/cat`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a fields in a category
             * @param {string} project Project short label
             * @param {string} label Field label
             * @param {string} category Category short label
             * @param {string} fieldType Type of field
             * @param {string} fieldParam Parameter for the field
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatPost(project, label, category, fieldType, fieldParam, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCatPost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectCatPost.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectCatPost.');
                }
                // verify required parameter 'fieldType' is not null or undefined
                if (fieldType === null || fieldType === undefined) {
                    throw new RequiredError('fieldType', 'Required parameter fieldType was null or undefined when calling projectCatPost.');
                }
                // verify required parameter 'fieldParam' is not null or undefined
                if (fieldParam === null || fieldParam === undefined) {
                    throw new RequiredError('fieldParam', 'Required parameter fieldParam was null or undefined when calling projectCatPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectCatPost.');
                }
                const localVarPath = `/{project}/cat`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (category !== undefined) {
                    localVarQueryParameter['category'] = category;
                }
                if (fieldType !== undefined) {
                    localVarQueryParameter['fieldType'] = fieldType;
                }
                if (fieldParam !== undefined) {
                    localVarQueryParameter['fieldParam'] = fieldParam;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Clones a project
             * @param {string} project Project short label
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {number} keepHistory 1 or 0. Defaults to 0
             * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectClonePost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectClonePost.');
                }
                // verify required parameter 'shortLabel' is not null or undefined
                if (shortLabel === null || shortLabel === undefined) {
                    throw new RequiredError('shortLabel', 'Required parameter shortLabel was null or undefined when calling projectClonePost.');
                }
                // verify required parameter 'keepHistory' is not null or undefined
                if (keepHistory === null || keepHistory === undefined) {
                    throw new RequiredError('keepHistory', 'Required parameter keepHistory was null or undefined when calling projectClonePost.');
                }
                // verify required parameter 'keepContent' is not null or undefined
                if (keepContent === null || keepContent === undefined) {
                    throw new RequiredError('keepContent', 'Required parameter keepContent was null or undefined when calling projectClonePost.');
                }
                // verify required parameter 'keepPermissions' is not null or undefined
                if (keepPermissions === null || keepPermissions === undefined) {
                    throw new RequiredError('keepPermissions', 'Required parameter keepPermissions was null or undefined when calling projectClonePost.');
                }
                const localVarPath = `/{project}/clone`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (shortLabel !== undefined) {
                    localVarQueryParameter['shortLabel'] = shortLabel;
                }
                if (keepHistory !== undefined) {
                    localVarQueryParameter['keepHistory'] = keepHistory;
                }
                if (keepContent !== undefined) {
                    localVarQueryParameter['keepContent'] = keepContent;
                }
                if (keepPermissions !== undefined) {
                    localVarQueryParameter['keepPermissions'] = keepPermissions;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
             * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCompareSignitem1Signitem2Post.');
                }
                // verify required parameter 'signitem1' is not null or undefined
                if (signitem1 === null || signitem1 === undefined) {
                    throw new RequiredError('signitem1', 'Required parameter signitem1 was null or undefined when calling projectCompareSignitem1Signitem2Post.');
                }
                // verify required parameter 'signitem2' is not null or undefined
                if (signitem2 === null || signitem2 === undefined) {
                    throw new RequiredError('signitem2', 'Required parameter signitem2 was null or undefined when calling projectCompareSignitem1Signitem2Post.');
                }
                const localVarPath = `/{project}/compare/{signitem1}/{signitem2}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"signitem1"}}`, encodeURIComponent(String(signitem1)))
                    .replace(`{${"signitem2"}}`, encodeURIComponent(String(signitem2)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectConfigcheckGet(excludeCategories, options = {}) {
                const localVarPath = `/project/configcheck`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (excludeCategories !== undefined) {
                    localVarQueryParameter['excludeCategories'] = excludeCategories;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
             * @summary Copy items from a folder to another one
             * @param {string} project Project short label
             * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
             * @param {string} targetFolder Reference of the target folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [targetProject] (optional) project to copy into (by default, same project)
             * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
             * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
             * @param {string} [ignoreLabels] (optional) can contain a comma-delimited list of labels NOT to copy
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectCopyItemOrFolderPost.');
                }
                // verify required parameter 'itemOrFolder' is not null or undefined
                if (itemOrFolder === null || itemOrFolder === undefined) {
                    throw new RequiredError('itemOrFolder', 'Required parameter itemOrFolder was null or undefined when calling projectCopyItemOrFolderPost.');
                }
                // verify required parameter 'targetFolder' is not null or undefined
                if (targetFolder === null || targetFolder === undefined) {
                    throw new RequiredError('targetFolder', 'Required parameter targetFolder was null or undefined when calling projectCopyItemOrFolderPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectCopyItemOrFolderPost.');
                }
                const localVarPath = `/{project}/copy/{itemOrFolder}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"itemOrFolder"}}`, encodeURIComponent(String(itemOrFolder)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (targetFolder !== undefined) {
                    localVarQueryParameter['targetFolder'] = targetFolder;
                }
                if (targetProject !== undefined) {
                    localVarQueryParameter['targetProject'] = targetProject;
                }
                if (copyLabels !== undefined) {
                    localVarQueryParameter['copyLabels'] = copyLabels;
                }
                if (map !== undefined) {
                    localVarQueryParameter['map'] = map;
                }
                if (ignoreLabels !== undefined) {
                    localVarQueryParameter['ignoreLabels'] = ignoreLabels;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
             * @param {string} project Project short label
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectDelete(project, confirm, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectDelete.');
                }
                // verify required parameter 'confirm' is not null or undefined
                if (confirm === null || confirm === undefined) {
                    throw new RequiredError('confirm', 'Required parameter confirm was null or undefined when calling projectDelete.');
                }
                const localVarPath = `/{project}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (confirm !== undefined) {
                    localVarQueryParameter['confirm'] = confirm;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExcelxmlPost(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectExcelxmlPost.');
                }
                const localVarPath = `/{project}/excelxml`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Executes UC or TC into XTC items
             * @param {string} project Project short label
             * @param {ExecuteParam} [body] There must be a JSON as a payload. It includes all parameters AND the reason
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExecutePost(project, body, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectExecutePost.');
                }
                const localVarPath = `/{project}/execute`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for an export of some items. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} itemList Mandatory list of items to export.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExportGet(project, itemList, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectExportGet.');
                }
                // verify required parameter 'itemList' is not null or undefined
                if (itemList === null || itemList === undefined) {
                    throw new RequiredError('itemList', 'Required parameter itemList was null or undefined when calling projectExportGet.');
                }
                const localVarPath = `/{project}/export`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (itemList !== undefined) {
                    localVarQueryParameter['itemList'] = itemList;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a field.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldCategoryDelete(project, category, field, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFieldCategoryDelete.');
                }
                // verify required parameter 'category' is not null or undefined
                if (category === null || category === undefined) {
                    throw new RequiredError('category', 'Required parameter category was null or undefined when calling projectFieldCategoryDelete.');
                }
                // verify required parameter 'field' is not null or undefined
                if (field === null || field === undefined) {
                    throw new RequiredError('field', 'Required parameter field was null or undefined when calling projectFieldCategoryDelete.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectFieldCategoryDelete.');
                }
                const localVarPath = `/{project}/field/{category}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"category"}}`, encodeURIComponent(String(category)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (field !== undefined) {
                    localVarQueryParameter['field'] = field;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get 1 field of an item. {item} has the form CATEG-number.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} field Mandatory. Field number (faster) OR field label
             * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
             * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldItemGet(project, item, field, format, download, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFieldItemGet.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectFieldItemGet.');
                }
                // verify required parameter 'field' is not null or undefined
                if (field === null || field === undefined) {
                    throw new RequiredError('field', 'Required parameter field was null or undefined when calling projectFieldItemGet.');
                }
                const localVarPath = `/{project}/field/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (field !== undefined) {
                    localVarQueryParameter['field'] = field;
                }
                if (format !== undefined) {
                    localVarQueryParameter['format'] = format;
                }
                if (download !== undefined) {
                    localVarQueryParameter['download'] = download;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a field's label and parameter OR modifies a field's order.
             * @param {string} project Project short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} label The new label (for renaming)
             * @param {string} fieldParam The new parameter (for renaming)
             * @param {number} order The new order (for reordering)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldPut(project, field, label, fieldParam, order, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFieldPut.');
                }
                // verify required parameter 'field' is not null or undefined
                if (field === null || field === undefined) {
                    throw new RequiredError('field', 'Required parameter field was null or undefined when calling projectFieldPut.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectFieldPut.');
                }
                // verify required parameter 'fieldParam' is not null or undefined
                if (fieldParam === null || fieldParam === undefined) {
                    throw new RequiredError('fieldParam', 'Required parameter fieldParam was null or undefined when calling projectFieldPut.');
                }
                // verify required parameter 'order' is not null or undefined
                if (order === null || order === undefined) {
                    throw new RequiredError('order', 'Required parameter order was null or undefined when calling projectFieldPut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectFieldPut.');
                }
                const localVarPath = `/{project}/field`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (field !== undefined) {
                    localVarQueryParameter['field'] = field;
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (fieldParam !== undefined) {
                    localVarQueryParameter['fieldParam'] = fieldParam;
                }
                if (order !== undefined) {
                    localVarQueryParameter['order'] = order;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
             * @param {string} project Project short label
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileFilenoGet(project, fileno, key, disposition, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFileFilenoGet.');
                }
                // verify required parameter 'fileno' is not null or undefined
                if (fileno === null || fileno === undefined) {
                    throw new RequiredError('fileno', 'Required parameter fileno was null or undefined when calling projectFileFilenoGet.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling projectFileFilenoGet.');
                }
                const localVarPath = `/{project}/file/{fileno}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"fileno"}}`, encodeURIComponent(String(fileno)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (disposition !== undefined) {
                    localVarQueryParameter['disposition'] = disposition;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all files owned by a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFileGet.');
                }
                const localVarPath = `/{project}/file`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
             * @param {string} project Project short label
             * @param {string} [input_url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFilePost(project, input_url, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFilePost.');
                }
                const localVarPath = `/{project}/file`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (input_url !== undefined) {
                    localVarQueryParameter['url'] = input_url;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Creates a new folder
             * @param {string} project Project short label
             * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
             * @param {string} label folder label
             * @param {string} reason The reason why the user is doing this
             * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFolderPost(project, parent, label, reason, fxField, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectFolderPost.');
                }
                // verify required parameter 'parent' is not null or undefined
                if (parent === null || parent === undefined) {
                    throw new RequiredError('parent', 'Required parameter parent was null or undefined when calling projectFolderPost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectFolderPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectFolderPost.');
                }
                const localVarPath = `/{project}/folder`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (parent !== undefined) {
                    localVarQueryParameter['parent'] = parent;
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (fxField !== undefined) {
                    localVarQueryParameter['fxField'] = fxField;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get list of project info -  users, settings, categories
             * @param {string} project Project short label
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectGet(project, adminUI, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectGet.');
                }
                const localVarPath = `/{project}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (adminUI !== undefined) {
                    localVarQueryParameter['adminUI'] = adminUI;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Hides a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHidePut(project, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectHidePut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectHidePut.');
                }
                const localVarPath = `/{project}/hide`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Launches a server-side hook
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} hook name of the hook
             * @param {string} [body] Payload for the hook, treated as a string.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHookItemPost(project, item, hook, body, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectHookItemPost.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectHookItemPost.');
                }
                // verify required parameter 'hook' is not null or undefined
                if (hook === null || hook === undefined) {
                    throw new RequiredError('hook', 'Required parameter hook was null or undefined when calling projectHookItemPost.');
                }
                const localVarPath = `/{project}/hook/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (hook !== undefined) {
                    localVarQueryParameter['hook'] = hook;
                }
                localVarHeaderParameter['Content-Type'] = 'text/plain';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( false) || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
             * @param {string} project Project short label
             * @param {GetHmlBlobInput} [body] Payload
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupBlobPost(project, body, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectHtmlCleanupBlobPost.');
                }
                const localVarPath = `/{project}/htmlCleanupBlob`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
             * @param {string} project Project short label
             * @param {CleanupSetting} [body] Cleanup setting (optional)
             * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupTestPost(project, body, categories, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectHtmlCleanupTestPost.');
                }
                const localVarPath = `/{project}/htmlCleanupTest`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (categories !== undefined) {
                    localVarQueryParameter['categories'] = categories;
                }
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                const needsSerialization = ( true) || 0;
                localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Imports some items into a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectImportPost(project, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectImportPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectImportPost.');
                }
                const localVarPath = `/{project}/import`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemFolderGet.');
                }
                // verify required parameter 'folder' is not null or undefined
                if (folder === null || folder === undefined) {
                    throw new RequiredError('folder', 'Required parameter folder was null or undefined when calling projectItemFolderGet.');
                }
                const localVarPath = `/{project}/item/{folder}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"folder"}}`, encodeURIComponent(String(folder)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (history !== undefined) {
                    localVarQueryParameter['history'] = history;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (children !== undefined) {
                    localVarQueryParameter['children'] = children;
                }
                if (atDate !== undefined) {
                    localVarQueryParameter['atDate'] = atDate;
                }
                if (fields !== undefined) {
                    localVarQueryParameter['fields'] = fields;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemDelete(project, item, confirm, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemItemDelete.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectItemItemDelete.');
                }
                // verify required parameter 'confirm' is not null or undefined
                if (confirm === null || confirm === undefined) {
                    throw new RequiredError('confirm', 'Required parameter confirm was null or undefined when calling projectItemItemDelete.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemItemDelete.');
                }
                const localVarPath = `/{project}/item/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (confirm !== undefined) {
                    localVarQueryParameter['confirm'] = confirm;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of an item. {item} has the form CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [withTree] (optional) retrieves the context tree if set to 1, in the field contextTree. Exclusive to filter and atDate
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemItemGet.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectItemItemGet.');
                }
                const localVarPath = `/{project}/item/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (history !== undefined) {
                    localVarQueryParameter['history'] = history;
                }
                if (fields !== undefined) {
                    localVarQueryParameter['fields'] = fields;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (atDate !== undefined) {
                    localVarQueryParameter['atDate'] = atDate;
                }
                if (withTree !== undefined) {
                    localVarQueryParameter['withTree'] = withTree;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Restores an item. Item has the form CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPost(project, item, reason, at, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemItemPost.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectItemItemPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemItemPost.');
                }
                const localVarPath = `/{project}/item/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (at !== undefined) {
                    localVarQueryParameter['at'] = at;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [title] Specify new title for the item -- if not there, keep the old title
             * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
             * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
             * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
             * @param {string} [filter] (optional) A filter
             * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
             * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
             * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
             * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
             * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemItemPut.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectItemItemPut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemItemPut.');
                }
                const localVarPath = `/{project}/item/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (title !== undefined) {
                    localVarQueryParameter['title'] = title;
                }
                if (fxid_ !== undefined) {
                    localVarQueryParameter['fx{id} ...'] = fxid_;
                }
                if (labels !== undefined) {
                    localVarQueryParameter['labels'] = labels;
                }
                if (auditAction !== undefined) {
                    localVarQueryParameter['auditAction'] = auditAction;
                }
                if (newFolder !== undefined) {
                    localVarQueryParameter['newFolder'] = newFolder;
                }
                if (newPosition !== undefined) {
                    localVarQueryParameter['newPosition'] = newPosition;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (linksUp !== undefined) {
                    localVarQueryParameter['linksUp'] = linksUp;
                }
                if (linksDown !== undefined) {
                    localVarQueryParameter['linksDown'] = linksDown;
                }
                if (currentVersion !== undefined) {
                    localVarQueryParameter['currentVersion'] = currentVersion;
                }
                if (onlyThoseFields !== undefined) {
                    localVarQueryParameter['onlyThoseFields'] = onlyThoseFields;
                }
                if (onlyThoseLabels !== undefined) {
                    localVarQueryParameter['onlyThoseLabels'] = onlyThoseLabels;
                }
                if (failOnCleanup !== undefined) {
                    localVarQueryParameter['failOnCleanup'] = failOnCleanup;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Adds an item in a folder
             * @param {string} project Project short label
             * @param {string} title Item title
             * @param {string} folder Reference of the folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} linksUp Comma-delimited (%2C)list of references to up items
             * @param {string} linksDown Comma-delimited (%2C)list of references to down items
             * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [author] The author (login name) - only works when superadmin is issuing this
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemPost.');
                }
                // verify required parameter 'title' is not null or undefined
                if (title === null || title === undefined) {
                    throw new RequiredError('title', 'Required parameter title was null or undefined when calling projectItemPost.');
                }
                // verify required parameter 'folder' is not null or undefined
                if (folder === null || folder === undefined) {
                    throw new RequiredError('folder', 'Required parameter folder was null or undefined when calling projectItemPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemPost.');
                }
                // verify required parameter 'linksUp' is not null or undefined
                if (linksUp === null || linksUp === undefined) {
                    throw new RequiredError('linksUp', 'Required parameter linksUp was null or undefined when calling projectItemPost.');
                }
                // verify required parameter 'linksDown' is not null or undefined
                if (linksDown === null || linksDown === undefined) {
                    throw new RequiredError('linksDown', 'Required parameter linksDown was null or undefined when calling projectItemPost.');
                }
                const localVarPath = `/{project}/item`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (title !== undefined) {
                    localVarQueryParameter['title'] = title;
                }
                if (folder !== undefined) {
                    localVarQueryParameter['folder'] = folder;
                }
                if (fxID_ !== undefined) {
                    localVarQueryParameter['fx{ID} ...'] = fxID_;
                }
                if (labels !== undefined) {
                    localVarQueryParameter['labels'] = labels;
                }
                if (author !== undefined) {
                    localVarQueryParameter['author'] = author;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (linksUp !== undefined) {
                    localVarQueryParameter['linksUp'] = linksUp;
                }
                if (linksDown !== undefined) {
                    localVarQueryParameter['linksDown'] = linksDown;
                }
                if (failOnCleanup !== undefined) {
                    localVarQueryParameter['failOnCleanup'] = failOnCleanup;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - ?. Valid from version 2.1
             * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemlinkUpitemDownitemDelete.');
                }
                // verify required parameter 'upitem' is not null or undefined
                if (upitem === null || upitem === undefined) {
                    throw new RequiredError('upitem', 'Required parameter upitem was null or undefined when calling projectItemlinkUpitemDownitemDelete.');
                }
                // verify required parameter 'downitem' is not null or undefined
                if (downitem === null || downitem === undefined) {
                    throw new RequiredError('downitem', 'Required parameter downitem was null or undefined when calling projectItemlinkUpitemDownitemDelete.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemlinkUpitemDownitemDelete.');
                }
                const localVarPath = `/{project}/itemlink/{upitem}/{downitem}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"upitem"}}`, encodeURIComponent(String(upitem)))
                    .replace(`{${"downitem"}}`, encodeURIComponent(String(downitem)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a link between 2 items. Both items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemlinkUpitemDownitemPost.');
                }
                // verify required parameter 'upitem' is not null or undefined
                if (upitem === null || upitem === undefined) {
                    throw new RequiredError('upitem', 'Required parameter upitem was null or undefined when calling projectItemlinkUpitemDownitemPost.');
                }
                // verify required parameter 'downitem' is not null or undefined
                if (downitem === null || downitem === undefined) {
                    throw new RequiredError('downitem', 'Required parameter downitem was null or undefined when calling projectItemlinkUpitemDownitemPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectItemlinkUpitemDownitemPost.');
                }
                const localVarPath = `/{project}/itemlink/{upitem}/{downitem}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"upitem"}}`, encodeURIComponent(String(upitem)))
                    .replace(`{${"downitem"}}`, encodeURIComponent(String(downitem)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get the list of items that are detailed in a DOC/SIGN item.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlistItemGet(project, item, detailed, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectItemlistItemGet.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectItemlistItemGet.');
                }
                const localVarPath = `/{project}/itemlist/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (detailed !== undefined) {
                    localVarQueryParameter['detailed'] = detailed;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all jobs in a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectJobGet.');
                }
                const localVarPath = `/{project}/job`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Aborts a job.
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobDelete(project, job, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectJobJobDelete.');
                }
                // verify required parameter 'job' is not null or undefined
                if (job === null || job === undefined) {
                    throw new RequiredError('job', 'Required parameter job was null or undefined when calling projectJobJobDelete.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectJobJobDelete.');
                }
                const localVarPath = `/{project}/job/{job}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"job"}}`, encodeURIComponent(String(job)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} fileno file number
             * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
             * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectJobJobFilenoGet.');
                }
                // verify required parameter 'job' is not null or undefined
                if (job === null || job === undefined) {
                    throw new RequiredError('job', 'Required parameter job was null or undefined when calling projectJobJobFilenoGet.');
                }
                // verify required parameter 'fileno' is not null or undefined
                if (fileno === null || fileno === undefined) {
                    throw new RequiredError('fileno', 'Required parameter fileno was null or undefined when calling projectJobJobFilenoGet.');
                }
                const localVarPath = `/{project}/job/{job}/{fileno}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"job"}}`, encodeURIComponent(String(job)))
                    .replace(`{${"fileno"}}`, encodeURIComponent(String(fileno)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (mode !== undefined) {
                    localVarQueryParameter['mode'] = mode;
                }
                if (format !== undefined) {
                    localVarQueryParameter['format'] = format;
                }
                if (disposition !== undefined) {
                    localVarQueryParameter['disposition'] = disposition;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job status, including generated files. The variable part is the jobID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobGet(project, job, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectJobJobGet.');
                }
                // verify required parameter 'job' is not null or undefined
                if (job === null || job === undefined) {
                    throw new RequiredError('job', 'Required parameter job was null or undefined when calling projectJobJobGet.');
                }
                const localVarPath = `/{project}/job/{job}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"job"}}`, encodeURIComponent(String(job)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Sets the progress of a job
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} progress progress (0 to 100, 200 for error)
             * @param {string} [status] (optional( status text
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobPost(project, job, progress, status, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectJobJobPost.');
                }
                // verify required parameter 'job' is not null or undefined
                if (job === null || job === undefined) {
                    throw new RequiredError('job', 'Required parameter job was null or undefined when calling projectJobJobPost.');
                }
                // verify required parameter 'progress' is not null or undefined
                if (progress === null || progress === undefined) {
                    throw new RequiredError('progress', 'Required parameter progress was null or undefined when calling projectJobJobPost.');
                }
                const localVarPath = `/{project}/job/{job}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"job"}}`, encodeURIComponent(String(job)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (progress !== undefined) {
                    localVarQueryParameter['progress'] = progress;
                }
                if (status !== undefined) {
                    localVarQueryParameter['status'] = status;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the label history of a project -  list of all label changes for all items
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
             * @param {string} [from] (optional) date from
             * @param {string} [to] (optional) date to - works only if you only specified a from
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectLabelhistoryGet(project, itemRef, from, to, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectLabelhistoryGet.');
                }
                const localVarPath = `/{project}/labelhistory`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (itemRef !== undefined) {
                    localVarQueryParameter['itemRef'] = itemRef;
                }
                if (from !== undefined) {
                    localVarQueryParameter['from'] = from;
                }
                if (to !== undefined) {
                    localVarQueryParameter['to'] = to;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge history of a project - needs the 'merge' module
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergehistoryGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectMergehistoryGet.');
                }
                const localVarPath = `/{project}/mergehistory`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge information - needs the 'merge' module
             * @param {string} project Project short label
             * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
             * @param {string} [fromDate] (optional) date from which we consider the merges. ISO8601 format -- this parameter was introduced in v 2.3.4
             * @param {number} [push] (optional) set to 1 if you inquire about a push, not a merge -- this parameter was introduced in v 2.3.4
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergeinfoGet(project, excludeCategories, fromDate, push, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectMergeinfoGet.');
                }
                const localVarPath = `/{project}/mergeinfo`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (excludeCategories !== undefined) {
                    localVarQueryParameter['excludeCategories'] = excludeCategories;
                }
                if (fromDate !== undefined) {
                    localVarQueryParameter['fromDate'] = fromDate;
                }
                if (push !== undefined) {
                    localVarQueryParameter['push'] = push;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Move items into this folder
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [items] List of items to move in
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMoveinFolderPost(project, folder, reason, items, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectMoveinFolderPost.');
                }
                // verify required parameter 'folder' is not null or undefined
                if (folder === null || folder === undefined) {
                    throw new RequiredError('folder', 'Required parameter folder was null or undefined when calling projectMoveinFolderPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectMoveinFolderPost.');
                }
                const localVarPath = `/{project}/movein/{folder}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"folder"}}`, encodeURIComponent(String(folder)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (items !== undefined) {
                    localVarQueryParameter['items'] = items;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectNeedleGet.');
                }
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new RequiredError('search', 'Required parameter search was null or undefined when calling projectNeedleGet.');
                }
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new RequiredError('id', 'Required parameter id was null or undefined when calling projectNeedleGet.');
                }
                const localVarPath = `/{project}/needle`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (search !== undefined) {
                    localVarQueryParameter['search'] = search;
                }
                if (id !== undefined) {
                    localVarQueryParameter['id'] = id;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (fieldsOut !== undefined) {
                    localVarQueryParameter['fieldsOut'] = fieldsOut;
                }
                if (labels !== undefined) {
                    localVarQueryParameter['labels'] = labels;
                }
                if (treeOrder !== undefined) {
                    localVarQueryParameter['treeOrder'] = treeOrder;
                }
                if (links !== undefined) {
                    localVarQueryParameter['links'] = links;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleminimalGet(project, search, filter, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectNeedleminimalGet.');
                }
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new RequiredError('search', 'Required parameter search was null or undefined when calling projectNeedleminimalGet.');
                }
                const localVarPath = `/{project}/needleminimal`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (search !== undefined) {
                    localVarQueryParameter['search'] = search;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a category to a project
             * @param {string} project Project short label
             * @param {string} label Category label
             * @param {string} shortLabel Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPost(project, label, shortLabel, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectPost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectPost.');
                }
                // verify required parameter 'shortLabel' is not null or undefined
                if (shortLabel === null || shortLabel === undefined) {
                    throw new RequiredError('shortLabel', 'Required parameter shortLabel was null or undefined when calling projectPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectPost.');
                }
                const localVarPath = `/{project}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (shortLabel !== undefined) {
                    localVarQueryParameter['shortLabel'] = shortLabel;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Publishes an item. Item has the form PUB-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason reason for the publication
             * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPublishItemPost(project, item, reason, trainingFor, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectPublishItemPost.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectPublishItemPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectPublishItemPost.');
                }
                const localVarPath = `/{project}/publish/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (trainingFor !== undefined) {
                    localVarQueryParameter['trainingFor'] = trainingFor;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.3
             * @summary Find a string in the QMS published items
             * @param {string} project Project short label
             * @param {string} [search] (optional) search term. Return an empty array on PUB &lt; 2.3.1 and et the list of all pub if not specified.
             * @param {string} [pubItem] (optional) PUB-x item if you want to search in another than the last one for that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectQmsfindGet(project, search, pubItem, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectQmsfindGet.');
                }
                const localVarPath = `/{project}/qmsfind`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (search !== undefined) {
                    localVarQueryParameter['search'] = search;
                }
                if (pubItem !== undefined) {
                    localVarQueryParameter['pubItem'] = pubItem;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
             * @param {string} project Project short label
             * @param {string} report name of the report
             * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
             * @param {string} includeSignatures List of comma separated users who need to sign
             * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
             * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
             * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
             * @param {string} [input_url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2), or mf (since 2.3)
             * @param {string} [filter] (optional) specify a comma-delimited filter list. Can be negative filters (with minus before)
             * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
             * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, input_url, resturl, format, filter, useOld, atDate, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectReportReportPost.');
                }
                // verify required parameter 'report' is not null or undefined
                if (report === null || report === undefined) {
                    throw new RequiredError('report', 'Required parameter report was null or undefined when calling projectReportReportPost.');
                }
                // verify required parameter 'isSignedReport' is not null or undefined
                if (isSignedReport === null || isSignedReport === undefined) {
                    throw new RequiredError('isSignedReport', 'Required parameter isSignedReport was null or undefined when calling projectReportReportPost.');
                }
                // verify required parameter 'includeSignatures' is not null or undefined
                if (includeSignatures === null || includeSignatures === undefined) {
                    throw new RequiredError('includeSignatures', 'Required parameter includeSignatures was null or undefined when calling projectReportReportPost.');
                }
                // verify required parameter 'newTitle' is not null or undefined
                if (newTitle === null || newTitle === undefined) {
                    throw new RequiredError('newTitle', 'Required parameter newTitle was null or undefined when calling projectReportReportPost.');
                }
                // verify required parameter 'copyFields' is not null or undefined
                if (copyFields === null || copyFields === undefined) {
                    throw new RequiredError('copyFields', 'Required parameter copyFields was null or undefined when calling projectReportReportPost.');
                }
                const localVarPath = `/{project}/report/{report}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"report"}}`, encodeURIComponent(String(report)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (itemList !== undefined) {
                    localVarQueryParameter['itemList'] = itemList;
                }
                if (input_url !== undefined) {
                    localVarQueryParameter['url'] = input_url;
                }
                if (resturl !== undefined) {
                    localVarQueryParameter['resturl'] = resturl;
                }
                if (format !== undefined) {
                    localVarQueryParameter['format'] = format;
                }
                if (isSignedReport !== undefined) {
                    localVarQueryParameter['isSignedReport'] = isSignedReport;
                }
                if (includeSignatures !== undefined) {
                    localVarQueryParameter['includeSignatures'] = includeSignatures;
                }
                if (newTitle !== undefined) {
                    localVarQueryParameter['newTitle'] = newTitle;
                }
                if (copyFields !== undefined) {
                    localVarQueryParameter['copyFields'] = copyFields;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (useOld !== undefined) {
                    localVarQueryParameter['useOld'] = useOld;
                }
                if (atDate !== undefined) {
                    localVarQueryParameter['atDate'] = atDate;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} project Project short label
             * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSchemaGet(project, simple, excludeCategories, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSchemaGet.');
                }
                const localVarPath = `/{project}/schema`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (simple !== undefined) {
                    localVarQueryParameter['simple'] = simple;
                }
                if (excludeCategories !== undefined) {
                    localVarQueryParameter['excludeCategories'] = excludeCategories;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all settings of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSettingGet.');
                }
                const localVarPath = `/{project}/setting`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
             * @param {string} project Project short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingPost(project, key, value, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSettingPost.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling projectSettingPost.');
                }
                // verify required parameter 'value' is not null or undefined
                if (value === null || value === undefined) {
                    throw new RequiredError('value', 'Required parameter value was null or undefined when calling projectSettingPost.');
                }
                const localVarPath = `/{project}/setting`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Signs an item. Item has the form SIGN-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} password signature password - the user who is signing is the one who is logged in
             * @param {string} [acceptComments] (optional) adds an acceptance comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPost(project, item, password, acceptComments, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSignItemPost.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectSignItemPost.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling projectSignItemPost.');
                }
                const localVarPath = `/{project}/sign/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                if (acceptComments !== undefined) {
                    localVarQueryParameter['acceptComments'] = acceptComments;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Edit the signature parts
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} rejectSign The reason why the user is rejecting the signature
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPut(project, item, rejectSign, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSignItemPut.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectSignItemPut.');
                }
                // verify required parameter 'rejectSign' is not null or undefined
                if (rejectSign === null || rejectSign === undefined) {
                    throw new RequiredError('rejectSign', 'Required parameter rejectSign was null or undefined when calling projectSignItemPut.');
                }
                const localVarPath = `/{project}/sign/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (rejectSign !== undefined) {
                    localVarQueryParameter['rejectSign'] = rejectSign;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} [input_url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignedreportSIGNNPost(project, input_url, resturl, format, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectSignedreportSIGNNPost.');
                }
                const localVarPath = `/{project}/signedreport/SIGN-n`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (input_url !== undefined) {
                    localVarQueryParameter['url'] = input_url;
                }
                if (resturl !== undefined) {
                    localVarQueryParameter['resturl'] = resturl;
                }
                if (format !== undefined) {
                    localVarQueryParameter['format'] = format;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all tags of a project. Works on any project if user is admin
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagGet(project, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTagGet.');
                }
                const localVarPath = `/{project}/tag`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a tag to a project
             * @param {string} project Project short label
             * @param {string} label Tag label. Must be unique within a project
             * @param {number} auditId Id of the audit this tag is based on
             * @param {string} type Type of tag (default -  tag)
             * @param {string} comments Free optional comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagPost(project, label, auditId, type, comments, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTagPost.');
                }
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling projectTagPost.');
                }
                // verify required parameter 'auditId' is not null or undefined
                if (auditId === null || auditId === undefined) {
                    throw new RequiredError('auditId', 'Required parameter auditId was null or undefined when calling projectTagPost.');
                }
                // verify required parameter 'type' is not null or undefined
                if (type === null || type === undefined) {
                    throw new RequiredError('type', 'Required parameter type was null or undefined when calling projectTagPost.');
                }
                // verify required parameter 'comments' is not null or undefined
                if (comments === null || comments === undefined) {
                    throw new RequiredError('comments', 'Required parameter comments was null or undefined when calling projectTagPost.');
                }
                const localVarPath = `/{project}/tag`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (auditId !== undefined) {
                    localVarQueryParameter['auditId'] = auditId;
                }
                if (type !== undefined) {
                    localVarQueryParameter['type'] = type;
                }
                if (comments !== undefined) {
                    localVarQueryParameter['comments'] = comments;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for oneproject
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTodoGet.');
                }
                const localVarPath = `/{project}/todo`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (itemRef !== undefined) {
                    localVarQueryParameter['itemRef'] = itemRef;
                }
                if (includeDone !== undefined) {
                    localVarQueryParameter['includeDone'] = includeDone;
                }
                if (includeAllUsers !== undefined) {
                    localVarQueryParameter['includeAllUsers'] = includeAllUsers;
                }
                if (includeFuture !== undefined) {
                    localVarQueryParameter['includeFuture'] = includeFuture;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} text The todo reason
             * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
             * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
             * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
             * @param {string} [atDate] (optional) a date in the future for reminders
             * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTodoItemPost.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectTodoItemPost.');
                }
                // verify required parameter 'text' is not null or undefined
                if (text === null || text === undefined) {
                    throw new RequiredError('text', 'Required parameter text was null or undefined when calling projectTodoItemPost.');
                }
                const localVarPath = `/{project}/todo/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (fieldId !== undefined) {
                    localVarQueryParameter['fieldId'] = fieldId;
                }
                if (logins !== undefined) {
                    localVarQueryParameter['logins'] = logins;
                }
                if (text !== undefined) {
                    localVarQueryParameter['text'] = text;
                }
                if (todoType !== undefined) {
                    localVarQueryParameter['todoType'] = todoType;
                }
                if (atDate !== undefined) {
                    localVarQueryParameter['atDate'] = atDate;
                }
                if (auto !== undefined) {
                    localVarQueryParameter['auto'] = auto;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Removes (mark as done) a todo.
             * @param {string} project Project short label
             * @param {string} todoid todoid
             * @param {string} hardDelete Set to yes to actually remove the record
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoTodoidDelete(project, todoid, hardDelete, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTodoTodoidDelete.');
                }
                // verify required parameter 'todoid' is not null or undefined
                if (todoid === null || todoid === undefined) {
                    throw new RequiredError('todoid', 'Required parameter todoid was null or undefined when calling projectTodoTodoidDelete.');
                }
                // verify required parameter 'hardDelete' is not null or undefined
                if (hardDelete === null || hardDelete === undefined) {
                    throw new RequiredError('hardDelete', 'Required parameter hardDelete was null or undefined when calling projectTodoTodoidDelete.');
                }
                const localVarPath = `/{project}/todo/{todoid}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"todoid"}}`, encodeURIComponent(String(todoid)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (hardDelete !== undefined) {
                    localVarQueryParameter['hardDelete'] = hardDelete;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Touches (set to same date) an item or folder
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTouchItemPut(project, item, reason, nbLayers, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTouchItemPut.');
                }
                // verify required parameter 'item' is not null or undefined
                if (item === null || item === undefined) {
                    throw new RequiredError('item', 'Required parameter item was null or undefined when calling projectTouchItemPut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectTouchItemPut.');
                }
                const localVarPath = `/{project}/touch/{item}`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)))
                    .replace(`{${"item"}}`, encodeURIComponent(String(item)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (nbLayers !== undefined) {
                    localVarQueryParameter['nbLayers'] = nbLayers;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get full tree
             * @param {string} project Project short label
             * @param {string} [fancy] (optional) returns a fancy tree
             * @param {string} [filter] (optional) applies a filter
             * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTreeGet(project, fancy, filter, atDate, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectTreeGet.');
                }
                const localVarPath = `/{project}/tree`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (fancy !== undefined) {
                    localVarQueryParameter['fancy'] = fancy;
                }
                if (filter !== undefined) {
                    localVarQueryParameter['filter'] = filter;
                }
                if (atDate !== undefined) {
                    localVarQueryParameter['atDate'] = atDate;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Unhides a project.
             * @param {string} project Project short label
             * @param {string} newShort The new project short name to use
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectUnhidePut(project, newShort, reason, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectUnhidePut.');
                }
                // verify required parameter 'newShort' is not null or undefined
                if (newShort === null || newShort === undefined) {
                    throw new RequiredError('newShort', 'Required parameter newShort was null or undefined when calling projectUnhidePut.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectUnhidePut.');
                }
                const localVarPath = `/{project}/unhide`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (newShort !== undefined) {
                    localVarQueryParameter['newShort'] = newShort;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
             * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
             * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options = {}) {
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling projectWordconvertPost.');
                }
                // verify required parameter 'reason' is not null or undefined
                if (reason === null || reason === undefined) {
                    throw new RequiredError('reason', 'Required parameter reason was null or undefined when calling projectWordconvertPost.');
                }
                const localVarPath = `/{project}/wordconvert`
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (fileNo !== undefined) {
                    localVarQueryParameter['fileNo'] = fileNo;
                }
                if (targetDocumentFolder !== undefined) {
                    localVarQueryParameter['targetDocumentFolder'] = targetDocumentFolder;
                }
                if (useAsField !== undefined) {
                    localVarQueryParameter['useAsField'] = useAsField;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
             * @param {string} [output] (optional) comma-delimited list of requested output fields. Returns all fields if parameter is not present
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootGet(adminUI, output, options = {}) {
                const localVarPath = `/`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (adminUI !== undefined) {
                    localVarQueryParameter['adminUI'] = adminUI;
                }
                if (output !== undefined) {
                    localVarQueryParameter['output'] = output;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
             * @param {string} [importUsers] Must be set to yes if you want to import users. false by default
             * @param {string} [branchLabel] Must be set to branch (optional)
             * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
             * @param {string} [branchComment] Comment for the branch (optional)
             * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options = {}) {
                // verify required parameter 'label' is not null or undefined
                if (label === null || label === undefined) {
                    throw new RequiredError('label', 'Required parameter label was null or undefined when calling rootPost.');
                }
                // verify required parameter 'shortLabel' is not null or undefined
                if (shortLabel === null || shortLabel === undefined) {
                    throw new RequiredError('shortLabel', 'Required parameter shortLabel was null or undefined when calling rootPost.');
                }
                const localVarPath = `/`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (label !== undefined) {
                    localVarQueryParameter['label'] = label;
                }
                if (shortLabel !== undefined) {
                    localVarQueryParameter['shortLabel'] = shortLabel;
                }
                if (overwrite !== undefined) {
                    localVarQueryParameter['overwrite'] = overwrite;
                }
                if (importUsers !== undefined) {
                    localVarQueryParameter['importUsers'] = importUsers;
                }
                if (branchLabel !== undefined) {
                    localVarQueryParameter['branchLabel'] = branchLabel;
                }
                if (branchTag !== undefined) {
                    localVarQueryParameter['branchTag'] = branchTag;
                }
                if (branchComment !== undefined) {
                    localVarQueryParameter['branchComment'] = branchComment;
                }
                if (branchBaseProjectLabel !== undefined) {
                    localVarQueryParameter['branchBaseProjectLabel'] = branchBaseProjectLabel;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Retrieves the user list
             * @param {string} details (optional) -  if set to 1 returns all details
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userGet(details, options = {}) {
                // verify required parameter 'details' is not null or undefined
                if (details === null || details === undefined) {
                    throw new RequiredError('details', 'Required parameter details was null or undefined when calling userGet.');
                }
                const localVarPath = `/user`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (details !== undefined) {
                    localVarQueryParameter['details'] = details;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new user. Arguments are either a set of arguments or json
             * @param {string} login User login name
             * @param {string} email User email
             * @param {string} password User password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userPost(login, email, password, json, first, last, options = {}) {
                // verify required parameter 'login' is not null or undefined
                if (login === null || login === undefined) {
                    throw new RequiredError('login', 'Required parameter login was null or undefined when calling userPost.');
                }
                // verify required parameter 'email' is not null or undefined
                if (email === null || email === undefined) {
                    throw new RequiredError('email', 'Required parameter email was null or undefined when calling userPost.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userPost.');
                }
                // verify required parameter 'json' is not null or undefined
                if (json === null || json === undefined) {
                    throw new RequiredError('json', 'Required parameter json was null or undefined when calling userPost.');
                }
                const localVarPath = `/user`;
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (login !== undefined) {
                    localVarQueryParameter['login'] = login;
                }
                if (email !== undefined) {
                    localVarQueryParameter['email'] = email;
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                if (first !== undefined) {
                    localVarQueryParameter['first'] = first;
                }
                if (last !== undefined) {
                    localVarQueryParameter['last'] = last;
                }
                if (json !== undefined) {
                    localVarQueryParameter['json'] = json;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all actions of a user
             * @param {string} user user login name
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserAuditGet(user, startAt, maxResults, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserAuditGet.');
                }
                const localVarPath = `/user/{user}/audit`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (startAt !== undefined) {
                    localVarQueryParameter['startAt'] = startAt;
                }
                if (maxResults !== undefined) {
                    localVarQueryParameter['maxResults'] = maxResults;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckGet(user, password, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserCheckGet.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userUserCheckGet.');
                }
                const localVarPath = `/user/{user}/check`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckPost(user, password, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserCheckPost.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userUserCheckPost.');
                }
                const localVarPath = `/user/{user}/check`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a user (only used for unit testing)
             * @param {string} user user login name
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserDelete(user, confirm, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserDelete.');
                }
                // verify required parameter 'confirm' is not null or undefined
                if (confirm === null || confirm === undefined) {
                    throw new RequiredError('confirm', 'Required parameter confirm was null or undefined when calling userUserDelete.');
                }
                const localVarPath = `/user/{user}`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (confirm !== undefined) {
                    localVarQueryParameter['confirm'] = confirm;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves full details of a user
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserGet(user, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserGet.');
                }
                const localVarPath = `/user/{user}`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Login
             * @param {string} user user login name
             * @param {string} password password in clear
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLoginPost(user, password, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserLoginPost.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userUserLoginPost.');
                }
                const localVarPath = `/user/{user}/login`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Logout
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLogoutPost(user, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserLogoutPost.');
                }
                const localVarPath = `/user/{user}/logout`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
             * @param {string} user user login name
             * @param {string} token password_reset token
             * @param {string} password New password to use from now on
             * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPasswordResetPost(user, token, password, signaturePassword, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserPasswordResetPost.');
                }
                // verify required parameter 'token' is not null or undefined
                if (token === null || token === undefined) {
                    throw new RequiredError('token', 'Required parameter token was null or undefined when calling userUserPasswordResetPost.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userUserPasswordResetPost.');
                }
                const localVarPath = `/user/{user}/password_reset`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (token !== undefined) {
                    localVarQueryParameter['token'] = token;
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                if (signaturePassword !== undefined) {
                    localVarQueryParameter['signature_password'] = signaturePassword;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a user to a project
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPost(user, project, permission, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserProjectPost.');
                }
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling userUserProjectPost.');
                }
                // verify required parameter 'permission' is not null or undefined
                if (permission === null || permission === undefined) {
                    throw new RequiredError('permission', 'Required parameter permission was null or undefined when calling userUserProjectPost.');
                }
                const localVarPath = `/user/{user}/{project}`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)))
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (permission !== undefined) {
                    localVarQueryParameter['permission'] = permission;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPut(user, project, permission, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserProjectPut.');
                }
                // verify required parameter 'project' is not null or undefined
                if (project === null || project === undefined) {
                    throw new RequiredError('project', 'Required parameter project was null or undefined when calling userUserProjectPut.');
                }
                // verify required parameter 'permission' is not null or undefined
                if (permission === null || permission === undefined) {
                    throw new RequiredError('permission', 'Required parameter permission was null or undefined when calling userUserProjectPut.');
                }
                const localVarPath = `/user/{user}/{project}`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)))
                    .replace(`{${"project"}}`, encodeURIComponent(String(project)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (permission !== undefined) {
                    localVarQueryParameter['permission'] = permission;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all projects a user has access to
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectsGet(user, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserProjectsGet.');
                }
                const localVarPath = `/user/{user}/projects`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
             * @param {string} user user login name
             * @param {string} email User new email
             * @param {string} password User new password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPut(user, email, password, json, first, last, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserPut.');
                }
                // verify required parameter 'email' is not null or undefined
                if (email === null || email === undefined) {
                    throw new RequiredError('email', 'Required parameter email was null or undefined when calling userUserPut.');
                }
                // verify required parameter 'password' is not null or undefined
                if (password === null || password === undefined) {
                    throw new RequiredError('password', 'Required parameter password was null or undefined when calling userUserPut.');
                }
                // verify required parameter 'json' is not null or undefined
                if (json === null || json === undefined) {
                    throw new RequiredError('json', 'Required parameter json was null or undefined when calling userUserPut.');
                }
                const localVarPath = `/user/{user}`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (email !== undefined) {
                    localVarQueryParameter['email'] = email;
                }
                if (password !== undefined) {
                    localVarQueryParameter['password'] = password;
                }
                if (first !== undefined) {
                    localVarQueryParameter['first'] = first;
                }
                if (last !== undefined) {
                    localVarQueryParameter['last'] = last;
                }
                if (json !== undefined) {
                    localVarQueryParameter['json'] = json;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a user login
             * @param {string} user user login name
             * @param {string} newLogin The new login name. Cannot be one of the existing
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserRenamePut(user, newLogin, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserRenamePut.');
                }
                // verify required parameter 'newLogin' is not null or undefined
                if (newLogin === null || newLogin === undefined) {
                    throw new RequiredError('newLogin', 'Required parameter newLogin was null or undefined when calling userUserRenamePut.');
                }
                const localVarPath = `/user/{user}/rename`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (newLogin !== undefined) {
                    localVarQueryParameter['newLogin'] = newLogin;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds or deletes a user setting.
             * @param {string} user user login name
             * @param {string} key Name of the setting
             * @param {string} value Value of the setting. If empty, deletes the setting.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserSettingPost(user, key, value, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserSettingPost.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new RequiredError('key', 'Required parameter key was null or undefined when calling userUserSettingPost.');
                }
                // verify required parameter 'value' is not null or undefined
                if (value === null || value === undefined) {
                    throw new RequiredError('value', 'Required parameter value was null or undefined when calling userUserSettingPost.');
                }
                const localVarPath = `/user/{user}/setting`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (key !== undefined) {
                    localVarQueryParameter['key'] = key;
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Sets the new status of the user. Can be normal,blocked or deleted
             * @param {string} user user login name
             * @param {string} status Can be normal,blocked or deleted
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserStatusPut(user, status, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserStatusPut.');
                }
                // verify required parameter 'status' is not null or undefined
                if (status === null || status === undefined) {
                    throw new RequiredError('status', 'Required parameter status was null or undefined when calling userUserStatusPut.');
                }
                const localVarPath = `/user/{user}/status`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (status !== undefined) {
                    localVarQueryParameter['status'] = status;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Removes a user token
             * @param {string} user user login name
             * @param {string} value The token to be removed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenDelete(user, value, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserTokenDelete.');
                }
                // verify required parameter 'value' is not null or undefined
                if (value === null || value === undefined) {
                    throw new RequiredError('value', 'Required parameter value was null or undefined when calling userUserTokenDelete.');
                }
                const localVarPath = `/user/{user}/token`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds a token for a user
             * @param {string} user user login name
             * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
             * @param {string} [value] Value of the token - by default generated by this call
             * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
             * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenPost(user, purpose, value, reason, validity, options = {}) {
                // verify required parameter 'user' is not null or undefined
                if (user === null || user === undefined) {
                    throw new RequiredError('user', 'Required parameter user was null or undefined when calling userUserTokenPost.');
                }
                // verify required parameter 'purpose' is not null or undefined
                if (purpose === null || purpose === undefined) {
                    throw new RequiredError('purpose', 'Required parameter purpose was null or undefined when calling userUserTokenPost.');
                }
                const localVarPath = `/user/{user}/token`
                    .replace(`{${"user"}}`, encodeURIComponent(String(user)));
                const localVarUrlObj = url.parse(localVarPath, true);
                const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication ApiKeyAuth required
                if (configuration && configuration.apiKey) {
                    const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                        ? configuration.apiKey("Authorization")
                        : configuration.apiKey;
                    localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
                }
                // authentication BasicAuth required
                // http basic authentication required
                if (configuration && (configuration.username || configuration.password)) {
                    localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
                }
                if (value !== undefined) {
                    localVarQueryParameter['value'] = value;
                }
                if (purpose !== undefined) {
                    localVarQueryParameter['purpose'] = purpose;
                }
                if (reason !== undefined) {
                    localVarQueryParameter['reason'] = reason;
                }
                if (validity !== undefined) {
                    localVarQueryParameter['validity'] = validity;
                }
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * DefaultApi - functional programming interface
     * @export
     */
    exports.DefaultApiFp = function (configuration) {
        return {
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
             * @param {string} [arg] json object with the arguments
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allCompareHtmlPost(arg, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allCompareHtmlPost(arg, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Returns all info about a date
             * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
             * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
             * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allDateGet(date, dateformat, timeformat, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allDateGet(date, dateformat, timeformat, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileFilenoGet(fileno, key, disposition, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allFileFilenoGet(fileno, key, disposition, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieve list of all customer-wide files
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allFileGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFilePost(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allFilePost(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Retrieve license status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLicenseGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allLicenseGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Adds a log entry (server side).
             * @param {string} message Message to log
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLogPost(message, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allLogPost(message, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Monitoring object
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allMonitorGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allMonitorGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in all projects
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleGet(search, id, filter, fieldsOut, labels, links, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allNeedleGet(search, id, filter, fieldsOut, labels, links, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in all projects
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleminimalGet(search, filter, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allNeedleminimalGet(search, filter, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.2
             * @summary The OpenAPI 3.0 definition of our REST API
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allOpenapiGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allOpenapiGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Lists all reports
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allReportsGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allReportsGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Sends an email. Non-optional parameters are sent as a POST JSON payload.
             * @param {SendmailParam} [body] Necessary information to send a mail
             * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user)
             * @param {number} [noreply] (optional) if set to 1 makes it a no-reply email (not sent by the actual user)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSendmailPost(body, system, noreply, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allSendmailPost(body, system, noreply, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload.
             * @param {ServiceDeskParam} [body] Necessary information to send a mail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allServicedeskPost(body, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allServicedeskPost(body, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a customer
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allSettingGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingPost(key, value, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allSettingPost(key, value, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get instance status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allStatusGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allStatusGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Returns all accepted time zones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTimezoneGet(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allTimezoneGet(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for all projects
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTodoGet(includeDone, includeFuture, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allTodoGet(includeDone, includeFuture, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary WebHook
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allWebhookPost(options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).allWebhookPost(options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Retrieves the group list
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGet(details, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGet(details, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a group
             * @param {string} groupId group Id
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdDelete(groupId, confirm, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdDelete(groupId, confirm, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
             * @summary Retrieves details of a group
             * @param {string} groupId group Id
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdGet(groupId, details, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdGet(groupId, details, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Adds a group to a project (or removes it)
             * @param {string} groupId group Id
             * @param {string} project Project short label
             * @param {number} [permission] Specify the (new) permission for that group in that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdProjectProjectPost(groupId, project, permission, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdProjectProjectPost(groupId, project, permission, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a group
             * @param {string} groupId group Id
             * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdRenamePut(groupId, newName, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdRenamePut(groupId, newName, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.2
             * @summary Adds a user to a group
             * @param {string} groupId group Id
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserUserPut(groupId, user, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdUserUserPut(groupId, user, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Sets all users of a group (replacing potential former content)
             * @param {string} groupId group Id
             * @param {string} users List of all users members of that group, commas-separated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserlistPut(groupId, users, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupIdUserlistPut(groupId, users, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Creates a new group
             * @param {string} groupName group name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNamePost(groupName, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupNamePost(groupName, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a user from a group
             * @param {string} groupName group name
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNameUserUserDelete(groupName, user, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).groupGroupNameUserUserDelete(groupName, user, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.3
             * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
             * @param {string} mainproject mainproject
             * @param {string} branchproject branchproject
             * @param {string} reason The reason why the user is doing this
             * @param {MergeParam} [body] Actions to perform
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
             * @summary Retrieves all accesses in a project (list of groups and users who have access)
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAccessGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectAccessGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieves all changes in a project
             * @param {string} project Project short label
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
             * @param {string} [tech] (optional) if set to yes, returns the underneath changes
             * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
             * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
             * @param {number} [noReport] (optional) set to 1 to avoid having reports
             * @param {number} [noImport] (optional) set to 1 to avoid having imports
             * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
             * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
             * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
             * @param {string} project Project short label
             * @param {string} label Branch project label
             * @param {string} shortLabel Branch project short label
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
             * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
             * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
             * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
             * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
             * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all dates at which a project has been modified
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCalendarGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCalendarGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryDelete(project, category, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatCategoryDelete(project, category, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} [filter] (optional) specify a filter
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryGet(project, category, filter, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatCategoryGet(project, category, filter, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} order The new order (for reordering)
             * @param {string} shortLabel The new short label for that category (for renaming)
             * @param {string} label The new long label for that category (for renaming)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryPut(project, category, order, shortLabel, label, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatCategoryPut(project, category, order, shortLabel, label, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingGet(project, category, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatCategorySettingGet(project, category, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingPost(project, category, key, value, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatCategorySettingPost(project, category, key, value, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all categories of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a fields in a category
             * @param {string} project Project short label
             * @param {string} label Field label
             * @param {string} category Category short label
             * @param {string} fieldType Type of field
             * @param {string} fieldParam Parameter for the field
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatPost(project, label, category, fieldType, fieldParam, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCatPost(project, label, category, fieldType, fieldParam, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Clones a project
             * @param {string} project Project short label
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {number} keepHistory 1 or 0. Defaults to 0
             * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
             * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectConfigcheckGet(excludeCategories, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectConfigcheckGet(excludeCategories, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
             * @summary Copy items from a folder to another one
             * @param {string} project Project short label
             * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
             * @param {string} targetFolder Reference of the target folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [targetProject] (optional) project to copy into (by default, same project)
             * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
             * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
             * @param {string} [ignoreLabels] (optional) can contain a comma-delimited list of labels NOT to copy
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
             * @param {string} project Project short label
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectDelete(project, confirm, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectDelete(project, confirm, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExcelxmlPost(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectExcelxmlPost(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Executes UC or TC into XTC items
             * @param {string} project Project short label
             * @param {ExecuteParam} [body] There must be a JSON as a payload. It includes all parameters AND the reason
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExecutePost(project, body, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectExecutePost(project, body, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for an export of some items. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} itemList Mandatory list of items to export.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExportGet(project, itemList, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectExportGet(project, itemList, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a field.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldCategoryDelete(project, category, field, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFieldCategoryDelete(project, category, field, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get 1 field of an item. {item} has the form CATEG-number.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} field Mandatory. Field number (faster) OR field label
             * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
             * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldItemGet(project, item, field, format, download, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFieldItemGet(project, item, field, format, download, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a field's label and parameter OR modifies a field's order.
             * @param {string} project Project short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} label The new label (for renaming)
             * @param {string} fieldParam The new parameter (for renaming)
             * @param {number} order The new order (for reordering)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldPut(project, field, label, fieldParam, order, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFieldPut(project, field, label, fieldParam, order, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
             * @param {string} project Project short label
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileFilenoGet(project, fileno, key, disposition, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFileFilenoGet(project, fileno, key, disposition, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all files owned by a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFileGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
             * @param {string} project Project short label
             * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFilePost(project, url, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFilePost(project, url, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Creates a new folder
             * @param {string} project Project short label
             * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
             * @param {string} label folder label
             * @param {string} reason The reason why the user is doing this
             * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFolderPost(project, parent, label, reason, fxField, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectFolderPost(project, parent, label, reason, fxField, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get list of project info -  users, settings, categories
             * @param {string} project Project short label
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectGet(project, adminUI, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectGet(project, adminUI, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Hides a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHidePut(project, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectHidePut(project, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Launches a server-side hook
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} hook name of the hook
             * @param {string} [body] Payload for the hook, treated as a string.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHookItemPost(project, item, hook, body, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectHookItemPost(project, item, hook, body, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
             * @param {string} project Project short label
             * @param {GetHmlBlobInput} [body] Payload
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupBlobPost(project, body, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectHtmlCleanupBlobPost(project, body, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
             * @param {string} project Project short label
             * @param {CleanupSetting} [body] Cleanup setting (optional)
             * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupTestPost(project, body, categories, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectHtmlCleanupTestPost(project, body, categories, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Imports some items into a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectImportPost(project, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectImportPost(project, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemDelete(project, item, confirm, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemItemDelete(project, item, confirm, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of an item. {item} has the form CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [withTree] (optional) retrieves the context tree if set to 1, in the field contextTree. Exclusive to filter and atDate
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Restores an item. Item has the form CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPost(project, item, reason, at, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemItemPost(project, item, reason, at, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [title] Specify new title for the item -- if not there, keep the old title
             * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
             * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
             * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
             * @param {string} [filter] (optional) A filter
             * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
             * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
             * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
             * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
             * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Adds an item in a folder
             * @param {string} project Project short label
             * @param {string} title Item title
             * @param {string} folder Reference of the folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} linksUp Comma-delimited (%2C)list of references to up items
             * @param {string} linksDown Comma-delimited (%2C)list of references to down items
             * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [author] The author (login name) - only works when superadmin is issuing this
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - ?. Valid from version 2.1
             * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a link between 2 items. Both items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get the list of items that are detailed in a DOC/SIGN item.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlistItemGet(project, item, detailed, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectItemlistItemGet(project, item, detailed, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all jobs in a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectJobGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Aborts a job.
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobDelete(project, job, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectJobJobDelete(project, job, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} fileno file number
             * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
             * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job status, including generated files. The variable part is the jobID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobGet(project, job, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectJobJobGet(project, job, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Sets the progress of a job
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} progress progress (0 to 100, 200 for error)
             * @param {string} [status] (optional( status text
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobPost(project, job, progress, status, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectJobJobPost(project, job, progress, status, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the label history of a project -  list of all label changes for all items
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
             * @param {string} [from] (optional) date from
             * @param {string} [to] (optional) date to - works only if you only specified a from
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectLabelhistoryGet(project, itemRef, from, to, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectLabelhistoryGet(project, itemRef, from, to, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge history of a project - needs the 'merge' module
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergehistoryGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectMergehistoryGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge information - needs the 'merge' module
             * @param {string} project Project short label
             * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
             * @param {string} [fromDate] (optional) date from which we consider the merges. ISO8601 format -- this parameter was introduced in v 2.3.4
             * @param {number} [push] (optional) set to 1 if you inquire about a push, not a merge -- this parameter was introduced in v 2.3.4
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergeinfoGet(project, excludeCategories, fromDate, push, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectMergeinfoGet(project, excludeCategories, fromDate, push, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Move items into this folder
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [items] List of items to move in
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMoveinFolderPost(project, folder, reason, items, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectMoveinFolderPost(project, folder, reason, items, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleminimalGet(project, search, filter, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectNeedleminimalGet(project, search, filter, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a category to a project
             * @param {string} project Project short label
             * @param {string} label Category label
             * @param {string} shortLabel Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPost(project, label, shortLabel, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectPost(project, label, shortLabel, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Publishes an item. Item has the form PUB-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason reason for the publication
             * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPublishItemPost(project, item, reason, trainingFor, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectPublishItemPost(project, item, reason, trainingFor, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.3
             * @summary Find a string in the QMS published items
             * @param {string} project Project short label
             * @param {string} [search] (optional) search term. Return an empty array on PUB &lt; 2.3.1 and et the list of all pub if not specified.
             * @param {string} [pubItem] (optional) PUB-x item if you want to search in another than the last one for that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectQmsfindGet(project, search, pubItem, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectQmsfindGet(project, search, pubItem, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
             * @param {string} project Project short label
             * @param {string} report name of the report
             * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
             * @param {string} includeSignatures List of comma separated users who need to sign
             * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
             * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
             * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
             * @param {string} [url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2), or mf (since 2.3)
             * @param {string} [filter] (optional) specify a comma-delimited filter list. Can be negative filters (with minus before)
             * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
             * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} project Project short label
             * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSchemaGet(project, simple, excludeCategories, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSchemaGet(project, simple, excludeCategories, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all settings of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSettingGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
             * @param {string} project Project short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingPost(project, key, value, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSettingPost(project, key, value, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Signs an item. Item has the form SIGN-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} password signature password - the user who is signing is the one who is logged in
             * @param {string} [acceptComments] (optional) adds an acceptance comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPost(project, item, password, acceptComments, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSignItemPost(project, item, password, acceptComments, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Edit the signature parts
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} rejectSign The reason why the user is rejecting the signature
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPut(project, item, rejectSign, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSignItemPut(project, item, rejectSign, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} [url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignedreportSIGNNPost(project, url, resturl, format, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectSignedreportSIGNNPost(project, url, resturl, format, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all tags of a project. Works on any project if user is admin
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagGet(project, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTagGet(project, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a tag to a project
             * @param {string} project Project short label
             * @param {string} label Tag label. Must be unique within a project
             * @param {number} auditId Id of the audit this tag is based on
             * @param {string} type Type of tag (default -  tag)
             * @param {string} comments Free optional comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagPost(project, label, auditId, type, comments, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTagPost(project, label, auditId, type, comments, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for oneproject
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} text The todo reason
             * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
             * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
             * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
             * @param {string} [atDate] (optional) a date in the future for reminders
             * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Removes (mark as done) a todo.
             * @param {string} project Project short label
             * @param {string} todoid todoid
             * @param {string} hardDelete Set to yes to actually remove the record
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoTodoidDelete(project, todoid, hardDelete, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTodoTodoidDelete(project, todoid, hardDelete, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Touches (set to same date) an item or folder
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTouchItemPut(project, item, reason, nbLayers, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTouchItemPut(project, item, reason, nbLayers, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get full tree
             * @param {string} project Project short label
             * @param {string} [fancy] (optional) returns a fancy tree
             * @param {string} [filter] (optional) applies a filter
             * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTreeGet(project, fancy, filter, atDate, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectTreeGet(project, fancy, filter, atDate, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Unhides a project.
             * @param {string} project Project short label
             * @param {string} newShort The new project short name to use
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectUnhidePut(project, newShort, reason, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectUnhidePut(project, newShort, reason, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
             * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
             * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
             * @param {string} [output] (optional) comma-delimited list of requested output fields. Returns all fields if parameter is not present
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootGet(adminUI, output, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).rootGet(adminUI, output, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
             * @param {string} [importUsers] Must be set to yes if you want to import users. false by default
             * @param {string} [branchLabel] Must be set to branch (optional)
             * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
             * @param {string} [branchComment] Comment for the branch (optional)
             * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Retrieves the user list
             * @param {string} details (optional) -  if set to 1 returns all details
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userGet(details, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userGet(details, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new user. Arguments are either a set of arguments or json
             * @param {string} login User login name
             * @param {string} email User email
             * @param {string} password User password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userPost(login, email, password, json, first, last, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userPost(login, email, password, json, first, last, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all actions of a user
             * @param {string} user user login name
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserAuditGet(user, startAt, maxResults, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserAuditGet(user, startAt, maxResults, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckGet(user, password, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserCheckGet(user, password, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckPost(user, password, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserCheckPost(user, password, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a user (only used for unit testing)
             * @param {string} user user login name
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserDelete(user, confirm, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserDelete(user, confirm, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves full details of a user
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserGet(user, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserGet(user, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Login
             * @param {string} user user login name
             * @param {string} password password in clear
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLoginPost(user, password, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserLoginPost(user, password, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Logout
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLogoutPost(user, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserLogoutPost(user, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
             * @param {string} user user login name
             * @param {string} token password_reset token
             * @param {string} password New password to use from now on
             * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPasswordResetPost(user, token, password, signaturePassword, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserPasswordResetPost(user, token, password, signaturePassword, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a user to a project
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPost(user, project, permission, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserProjectPost(user, project, permission, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPut(user, project, permission, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserProjectPut(user, project, permission, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all projects a user has access to
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectsGet(user, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserProjectsGet(user, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
             * @param {string} user user login name
             * @param {string} email User new email
             * @param {string} password User new password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPut(user, email, password, json, first, last, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserPut(user, email, password, json, first, last, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a user login
             * @param {string} user user login name
             * @param {string} newLogin The new login name. Cannot be one of the existing
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserRenamePut(user, newLogin, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserRenamePut(user, newLogin, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds or deletes a user setting.
             * @param {string} user user login name
             * @param {string} key Name of the setting
             * @param {string} value Value of the setting. If empty, deletes the setting.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserSettingPost(user, key, value, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserSettingPost(user, key, value, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Sets the new status of the user. Can be normal,blocked or deleted
             * @param {string} user user login name
             * @param {string} status Can be normal,blocked or deleted
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserStatusPut(user, status, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserStatusPut(user, status, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Removes a user token
             * @param {string} user user login name
             * @param {string} value The token to be removed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenDelete(user, value, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserTokenDelete(user, value, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds a token for a user
             * @param {string} user user login name
             * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
             * @param {string} [value] Value of the token - by default generated by this call
             * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
             * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenPost(user, purpose, value, reason, validity, options) {
                const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).userUserTokenPost(user, purpose, value, reason, validity, options);
                return (fetch = isomorphic_fetch_1.default, basePath = BASE_PATH) => {
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
        };
    };
    /**
     * DefaultApi - factory interface
     * @export
     */
    exports.DefaultApiFactory = function (configuration, fetch, basePath) {
        return {
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
             * @param {string} [arg] json object with the arguments
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allCompareHtmlPost(arg, options) {
                return exports.DefaultApiFp(configuration).allCompareHtmlPost(arg, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Returns all info about a date
             * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
             * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
             * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allDateGet(date, dateformat, timeformat, options) {
                return exports.DefaultApiFp(configuration).allDateGet(date, dateformat, timeformat, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileFilenoGet(fileno, key, disposition, options) {
                return exports.DefaultApiFp(configuration).allFileFilenoGet(fileno, key, disposition, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieve list of all customer-wide files
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFileGet(options) {
                return exports.DefaultApiFp(configuration).allFileGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allFilePost(options) {
                return exports.DefaultApiFp(configuration).allFilePost(options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Retrieve license status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLicenseGet(options) {
                return exports.DefaultApiFp(configuration).allLicenseGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Adds a log entry (server side).
             * @param {string} message Message to log
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allLogPost(message, options) {
                return exports.DefaultApiFp(configuration).allLogPost(message, options)(fetch, basePath);
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Monitoring object
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allMonitorGet(options) {
                return exports.DefaultApiFp(configuration).allMonitorGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in all projects
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleGet(search, id, filter, fieldsOut, labels, links, options) {
                return exports.DefaultApiFp(configuration).allNeedleGet(search, id, filter, fieldsOut, labels, links, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in all projects
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allNeedleminimalGet(search, filter, options) {
                return exports.DefaultApiFp(configuration).allNeedleminimalGet(search, filter, options)(fetch, basePath);
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.2
             * @summary The OpenAPI 3.0 definition of our REST API
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allOpenapiGet(options) {
                return exports.DefaultApiFp(configuration).allOpenapiGet(options)(fetch, basePath);
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Lists all reports
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allReportsGet(options) {
                return exports.DefaultApiFp(configuration).allReportsGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Sends an email. Non-optional parameters are sent as a POST JSON payload.
             * @param {SendmailParam} [body] Necessary information to send a mail
             * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user)
             * @param {number} [noreply] (optional) if set to 1 makes it a no-reply email (not sent by the actual user)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSendmailPost(body, system, noreply, options) {
                return exports.DefaultApiFp(configuration).allSendmailPost(body, system, noreply, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload.
             * @param {ServiceDeskParam} [body] Necessary information to send a mail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allServicedeskPost(body, options) {
                return exports.DefaultApiFp(configuration).allServicedeskPost(body, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a customer
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingGet(options) {
                return exports.DefaultApiFp(configuration).allSettingGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allSettingPost(key, value, options) {
                return exports.DefaultApiFp(configuration).allSettingPost(key, value, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get instance status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allStatusGet(options) {
                return exports.DefaultApiFp(configuration).allStatusGet(options)(fetch, basePath);
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Returns all accepted time zones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTimezoneGet(options) {
                return exports.DefaultApiFp(configuration).allTimezoneGet(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for all projects
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allTodoGet(includeDone, includeFuture, options) {
                return exports.DefaultApiFp(configuration).allTodoGet(includeDone, includeFuture, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary WebHook
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            allWebhookPost(options) {
                return exports.DefaultApiFp(configuration).allWebhookPost(options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Retrieves the group list
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGet(details, options) {
                return exports.DefaultApiFp(configuration).groupGet(details, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a group
             * @param {string} groupId group Id
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdDelete(groupId, confirm, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdDelete(groupId, confirm, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
             * @summary Retrieves details of a group
             * @param {string} groupId group Id
             * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdGet(groupId, details, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdGet(groupId, details, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Adds a group to a project (or removes it)
             * @param {string} groupId group Id
             * @param {string} project Project short label
             * @param {number} [permission] Specify the (new) permission for that group in that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdProjectProjectPost(groupId, project, permission, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdProjectProjectPost(groupId, project, permission, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a group
             * @param {string} groupId group Id
             * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdRenamePut(groupId, newName, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdRenamePut(groupId, newName, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.2
             * @summary Adds a user to a group
             * @param {string} groupId group Id
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserUserPut(groupId, user, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdUserUserPut(groupId, user, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Sets all users of a group (replacing potential former content)
             * @param {string} groupId group Id
             * @param {string} users List of all users members of that group, commas-separated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupIdUserlistPut(groupId, users, options) {
                return exports.DefaultApiFp(configuration).groupGroupIdUserlistPut(groupId, users, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Creates a new group
             * @param {string} groupName group name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNamePost(groupName, options) {
                return exports.DefaultApiFp(configuration).groupGroupNamePost(groupName, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Removes a user from a group
             * @param {string} groupName group name
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            groupGroupNameUserUserDelete(groupName, user, options) {
                return exports.DefaultApiFp(configuration).groupGroupNameUserUserDelete(groupName, user, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.3
             * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
             * @param {string} mainproject mainproject
             * @param {string} branchproject branchproject
             * @param {string} reason The reason why the user is doing this
             * @param {MergeParam} [body] Actions to perform
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options) {
                return exports.DefaultApiFp(configuration).mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
             * @summary Retrieves all accesses in a project (list of groups and users who have access)
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAccessGet(project, options) {
                return exports.DefaultApiFp(configuration).projectAccessGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Retrieves all changes in a project
             * @param {string} project Project short label
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
             * @param {string} [tech] (optional) if set to yes, returns the underneath changes
             * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
             * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
             * @param {number} [noReport] (optional) set to 1 to avoid having reports
             * @param {number} [noImport] (optional) set to 1 to avoid having imports
             * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
             * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
             * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options) {
                return exports.DefaultApiFp(configuration).projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
             * @param {string} project Project short label
             * @param {string} label Branch project label
             * @param {string} shortLabel Branch project short label
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
             * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
             * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
             * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
             * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
             * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options) {
                return exports.DefaultApiFp(configuration).projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all dates at which a project has been modified
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCalendarGet(project, options) {
                return exports.DefaultApiFp(configuration).projectCalendarGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryDelete(project, category, reason, options) {
                return exports.DefaultApiFp(configuration).projectCatCategoryDelete(project, category, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} [filter] (optional) specify a filter
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryGet(project, category, filter, options) {
                return exports.DefaultApiFp(configuration).projectCatCategoryGet(project, category, filter, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} order The new order (for reordering)
             * @param {string} shortLabel The new short label for that category (for renaming)
             * @param {string} label The new long label for that category (for renaming)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategoryPut(project, category, order, shortLabel, label, reason, options) {
                return exports.DefaultApiFp(configuration).projectCatCategoryPut(project, category, order, shortLabel, label, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all settings of a category
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingGet(project, category, options) {
                return exports.DefaultApiFp(configuration).projectCatCategorySettingGet(project, category, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatCategorySettingPost(project, category, key, value, options) {
                return exports.DefaultApiFp(configuration).projectCatCategorySettingPost(project, category, key, value, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get all categories of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatGet(project, options) {
                return exports.DefaultApiFp(configuration).projectCatGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a fields in a category
             * @param {string} project Project short label
             * @param {string} label Field label
             * @param {string} category Category short label
             * @param {string} fieldType Type of field
             * @param {string} fieldParam Parameter for the field
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCatPost(project, label, category, fieldType, fieldParam, reason, options) {
                return exports.DefaultApiFp(configuration).projectCatPost(project, label, category, fieldType, fieldParam, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Clones a project
             * @param {string} project Project short label
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {number} keepHistory 1 or 0. Defaults to 0
             * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
             * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options) {
                return exports.DefaultApiFp(configuration).projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
             * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options) {
                return exports.DefaultApiFp(configuration).projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectConfigcheckGet(excludeCategories, options) {
                return exports.DefaultApiFp(configuration).projectConfigcheckGet(excludeCategories, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
             * @summary Copy items from a folder to another one
             * @param {string} project Project short label
             * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
             * @param {string} targetFolder Reference of the target folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [targetProject] (optional) project to copy into (by default, same project)
             * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
             * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
             * @param {string} [ignoreLabels] (optional) can contain a comma-delimited list of labels NOT to copy
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options) {
                return exports.DefaultApiFp(configuration).projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options)(fetch, basePath);
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
             * @param {string} project Project short label
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectDelete(project, confirm, options) {
                return exports.DefaultApiFp(configuration).projectDelete(project, confirm, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExcelxmlPost(project, options) {
                return exports.DefaultApiFp(configuration).projectExcelxmlPost(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Executes UC or TC into XTC items
             * @param {string} project Project short label
             * @param {ExecuteParam} [body] There must be a JSON as a payload. It includes all parameters AND the reason
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExecutePost(project, body, options) {
                return exports.DefaultApiFp(configuration).projectExecutePost(project, body, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for an export of some items. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} itemList Mandatory list of items to export.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectExportGet(project, itemList, options) {
                return exports.DefaultApiFp(configuration).projectExportGet(project, itemList, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Removes (inactivate) a field.
             * @param {string} project Project short label
             * @param {string} category Category short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldCategoryDelete(project, category, field, reason, options) {
                return exports.DefaultApiFp(configuration).projectFieldCategoryDelete(project, category, field, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get 1 field of an item. {item} has the form CATEG-number.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} field Mandatory. Field number (faster) OR field label
             * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
             * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldItemGet(project, item, field, format, download, options) {
                return exports.DefaultApiFp(configuration).projectFieldItemGet(project, item, field, format, download, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Modifies a field's label and parameter OR modifies a field's order.
             * @param {string} project Project short label
             * @param {number} field The field number (like field&#x3D;502)
             * @param {string} label The new label (for renaming)
             * @param {string} fieldParam The new parameter (for renaming)
             * @param {number} order The new order (for reordering)
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFieldPut(project, field, label, fieldParam, order, reason, options) {
                return exports.DefaultApiFp(configuration).projectFieldPut(project, field, label, fieldParam, order, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have the right key to download the file. Valid from version 2.1
             * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
             * @param {string} project Project short label
             * @param {number} fileno file number
             * @param {string} key The key of the file
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileFilenoGet(project, fileno, key, disposition, options) {
                return exports.DefaultApiFp(configuration).projectFileFilenoGet(project, fileno, key, disposition, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all files owned by a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFileGet(project, options) {
                return exports.DefaultApiFp(configuration).projectFileGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
             * @param {string} project Project short label
             * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFilePost(project, url, options) {
                return exports.DefaultApiFp(configuration).projectFilePost(project, url, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Creates a new folder
             * @param {string} project Project short label
             * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
             * @param {string} label folder label
             * @param {string} reason The reason why the user is doing this
             * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectFolderPost(project, parent, label, reason, fxField, options) {
                return exports.DefaultApiFp(configuration).projectFolderPost(project, parent, label, reason, fxField, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get list of project info -  users, settings, categories
             * @param {string} project Project short label
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectGet(project, adminUI, options) {
                return exports.DefaultApiFp(configuration).projectGet(project, adminUI, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Hides a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHidePut(project, reason, options) {
                return exports.DefaultApiFp(configuration).projectHidePut(project, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Launches a server-side hook
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} hook name of the hook
             * @param {string} [body] Payload for the hook, treated as a string.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHookItemPost(project, item, hook, body, options) {
                return exports.DefaultApiFp(configuration).projectHookItemPost(project, item, hook, body, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
             * @param {string} project Project short label
             * @param {GetHmlBlobInput} [body] Payload
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupBlobPost(project, body, options) {
                return exports.DefaultApiFp(configuration).projectHtmlCleanupBlobPost(project, body, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
             * @param {string} project Project short label
             * @param {CleanupSetting} [body] Cleanup setting (optional)
             * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectHtmlCleanupTestPost(project, body, categories, options) {
                return exports.DefaultApiFp(configuration).projectHtmlCleanupTestPost(project, body, categories, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Imports some items into a project
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectImportPost(project, reason, options) {
                return exports.DefaultApiFp(configuration).projectImportPost(project, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options) {
                return exports.DefaultApiFp(configuration).projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemDelete(project, item, confirm, reason, options) {
                return exports.DefaultApiFp(configuration).projectItemItemDelete(project, item, confirm, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get details of an item. {item} has the form CATEG-number[-vN].
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
             * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
             * @param {string} [filter] (optional) specify a filter
             * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
             * @param {number} [withTree] (optional) retrieves the context tree if set to 1, in the field contextTree. Exclusive to filter and atDate
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options) {
                return exports.DefaultApiFp(configuration).projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Restores an item. Item has the form CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPost(project, item, reason, at, options) {
                return exports.DefaultApiFp(configuration).projectItemItemPost(project, item, reason, at, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [title] Specify new title for the item -- if not there, keep the old title
             * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
             * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
             * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
             * @param {string} [filter] (optional) A filter
             * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
             * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
             * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
             * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
             * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options) {
                return exports.DefaultApiFp(configuration).projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
             * @summary Adds an item in a folder
             * @param {string} project Project short label
             * @param {string} title Item title
             * @param {string} folder Reference of the folder (F-categ-serial)
             * @param {string} reason The reason why the user is doing this
             * @param {string} linksUp Comma-delimited (%2C)list of references to up items
             * @param {string} linksDown Comma-delimited (%2C)list of references to down items
             * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
             * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
             * @param {string} [author] The author (login name) - only works when superadmin is issuing this
             * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options) {
                return exports.DefaultApiFp(configuration).projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options)(fetch, basePath);
            },
            /**
             * Permissions - ?. Valid from version 2.1
             * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options) {
                return exports.DefaultApiFp(configuration).projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a link between 2 items. Both items are in the form CATEG-number
             * @param {string} project Project short label
             * @param {string} upitem Item reference (XXX-nn) for the UP item
             * @param {string} downitem Item reference (XXX-nn) for the DOWN item
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options) {
                return exports.DefaultApiFp(configuration).projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get the list of items that are detailed in a DOC/SIGN item.
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectItemlistItemGet(project, item, detailed, options) {
                return exports.DefaultApiFp(configuration).projectItemlistItemGet(project, item, detailed, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Retrieve list of all jobs in a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobGet(project, options) {
                return exports.DefaultApiFp(configuration).projectJobGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.3
             * @summary Aborts a job.
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobDelete(project, job, reason, options) {
                return exports.DefaultApiFp(configuration).projectJobJobDelete(project, job, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} fileno file number
             * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
             * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
             * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options) {
                return exports.DefaultApiFp(configuration).projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a job status, including generated files. The variable part is the jobID (a number)
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobGet(project, job, options) {
                return exports.DefaultApiFp(configuration).projectJobJobGet(project, job, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.2
             * @summary Sets the progress of a job
             * @param {string} project Project short label
             * @param {number} job job number
             * @param {number} progress progress (0 to 100, 200 for error)
             * @param {string} [status] (optional( status text
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectJobJobPost(project, job, progress, status, options) {
                return exports.DefaultApiFp(configuration).projectJobJobPost(project, job, progress, status, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the label history of a project -  list of all label changes for all items
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
             * @param {string} [from] (optional) date from
             * @param {string} [to] (optional) date to - works only if you only specified a from
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectLabelhistoryGet(project, itemRef, from, to, options) {
                return exports.DefaultApiFp(configuration).projectLabelhistoryGet(project, itemRef, from, to, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge history of a project - needs the 'merge' module
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergehistoryGet(project, options) {
                return exports.DefaultApiFp(configuration).projectMergehistoryGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
             * @summary Get the merge information - needs the 'merge' module
             * @param {string} project Project short label
             * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
             * @param {string} [fromDate] (optional) date from which we consider the merges. ISO8601 format -- this parameter was introduced in v 2.3.4
             * @param {number} [push] (optional) set to 1 if you inquire about a push, not a merge -- this parameter was introduced in v 2.3.4
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMergeinfoGet(project, excludeCategories, fromDate, push, options) {
                return exports.DefaultApiFp(configuration).projectMergeinfoGet(project, excludeCategories, fromDate, push, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Move items into this folder
             * @param {string} project Project short label
             * @param {string} folder Folder reference (F-XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {string} [items] List of items to move in
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectMoveinFolderPost(project, folder, reason, items, options) {
                return exports.DefaultApiFp(configuration).projectMoveinFolderPost(project, folder, reason, items, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find items based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
             * @param {number} [labels] (optional) set to 1 to return labels in the output
             * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
             * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options) {
                return exports.DefaultApiFp(configuration).projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Find item ids based on a search string in one project
             * @param {string} project Project short label
             * @param {string} search search term
             * @param {string} [filter] (optional) applies a filter, can be negative
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectNeedleminimalGet(project, search, filter, options) {
                return exports.DefaultApiFp(configuration).projectNeedleminimalGet(project, search, filter, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a category to a project
             * @param {string} project Project short label
             * @param {string} label Category label
             * @param {string} shortLabel Category short label
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPost(project, label, shortLabel, reason, options) {
                return exports.DefaultApiFp(configuration).projectPost(project, label, shortLabel, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Publishes an item. Item has the form PUB-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason reason for the publication
             * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectPublishItemPost(project, item, reason, trainingFor, options) {
                return exports.DefaultApiFp(configuration).projectPublishItemPost(project, item, reason, trainingFor, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.3
             * @summary Find a string in the QMS published items
             * @param {string} project Project short label
             * @param {string} [search] (optional) search term. Return an empty array on PUB &lt; 2.3.1 and et the list of all pub if not specified.
             * @param {string} [pubItem] (optional) PUB-x item if you want to search in another than the last one for that project
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectQmsfindGet(project, search, pubItem, options) {
                return exports.DefaultApiFp(configuration).projectQmsfindGet(project, search, pubItem, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
             * @param {string} project Project short label
             * @param {string} report name of the report
             * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
             * @param {string} includeSignatures List of comma separated users who need to sign
             * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
             * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
             * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
             * @param {string} [url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2), or mf (since 2.3)
             * @param {string} [filter] (optional) specify a comma-delimited filter list. Can be negative filters (with minus before)
             * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
             * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options) {
                return exports.DefaultApiFp(configuration).projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get a project's schema
             * @param {string} project Project short label
             * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
             * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSchemaGet(project, simple, excludeCategories, options) {
                return exports.DefaultApiFp(configuration).projectSchemaGet(project, simple, excludeCategories, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all settings of a project
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingGet(project, options) {
                return exports.DefaultApiFp(configuration).projectSettingGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
             * @param {string} project Project short label
             * @param {string} key setting key
             * @param {string} value value
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSettingPost(project, key, value, options) {
                return exports.DefaultApiFp(configuration).projectSettingPost(project, key, value, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Signs an item. Item has the form SIGN-nnn
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} password signature password - the user who is signing is the one who is logged in
             * @param {string} [acceptComments] (optional) adds an acceptance comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPost(project, item, password, acceptComments, options) {
                return exports.DefaultApiFp(configuration).projectSignItemPost(project, item, password, acceptComments, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Edit the signature parts
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} rejectSign The reason why the user is rejecting the signature
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignItemPut(project, item, rejectSign, options) {
                return exports.DefaultApiFp(configuration).projectSignItemPut(project, item, rejectSign, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Asks for a new report. The job ID is returned as answer
             * @param {string} project Project short label
             * @param {string} [url] (optional) url to generate in the filter
             * @param {string} [resturl] (optional) REST url to generate in the filter
             * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectSignedreportSIGNNPost(project, url, resturl, format, options) {
                return exports.DefaultApiFp(configuration).projectSignedreportSIGNNPost(project, url, resturl, format, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get all tags of a project. Works on any project if user is admin
             * @param {string} project Project short label
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagGet(project, options) {
                return exports.DefaultApiFp(configuration).projectTagGet(project, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Adds a tag to a project
             * @param {string} project Project short label
             * @param {string} label Tag label. Must be unique within a project
             * @param {number} auditId Id of the audit this tag is based on
             * @param {string} type Type of tag (default -  tag)
             * @param {string} comments Free optional comment
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTagPost(project, label, auditId, type, comments, options) {
                return exports.DefaultApiFp(configuration).projectTagPost(project, label, auditId, type, comments, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Get all todos for the current user, for oneproject
             * @param {string} project Project short label
             * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
             * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
             * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
             * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options) {
                return exports.DefaultApiFp(configuration).projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
             * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} text The todo reason
             * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
             * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
             * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
             * @param {string} [atDate] (optional) a date in the future for reminders
             * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options) {
                return exports.DefaultApiFp(configuration).projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.2
             * @summary Removes (mark as done) a todo.
             * @param {string} project Project short label
             * @param {string} todoid todoid
             * @param {string} hardDelete Set to yes to actually remove the record
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTodoTodoidDelete(project, todoid, hardDelete, options) {
                return exports.DefaultApiFp(configuration).projectTodoTodoidDelete(project, todoid, hardDelete, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Touches (set to same date) an item or folder
             * @param {string} project Project short label
             * @param {string} item Item reference (XXX-nn)
             * @param {string} reason The reason why the user is doing this
             * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTouchItemPut(project, item, reason, nbLayers, options) {
                return exports.DefaultApiFp(configuration).projectTouchItemPut(project, item, reason, nbLayers, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
             * @summary Get full tree
             * @param {string} project Project short label
             * @param {string} [fancy] (optional) returns a fancy tree
             * @param {string} [filter] (optional) applies a filter
             * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectTreeGet(project, fancy, filter, atDate, options) {
                return exports.DefaultApiFp(configuration).projectTreeGet(project, fancy, filter, atDate, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Unhides a project.
             * @param {string} project Project short label
             * @param {string} newShort The new project short name to use
             * @param {string} reason The reason why the user is doing this
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectUnhidePut(project, newShort, reason, options) {
                return exports.DefaultApiFp(configuration).projectUnhidePut(project, newShort, reason, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have read/write access to the project. Valid from version 2.1
             * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
             * @param {string} project Project short label
             * @param {string} reason The reason why the user is doing this
             * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
             * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
             * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options) {
                return exports.DefaultApiFp(configuration).projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
             * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
             * @param {string} [output] (optional) comma-delimited list of requested output fields. Returns all fields if parameter is not present
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootGet(adminUI, output, options) {
                return exports.DefaultApiFp(configuration).rootGet(adminUI, output, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
             * @param {string} label Project label
             * @param {string} shortLabel Project short label
             * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
             * @param {string} [importUsers] Must be set to yes if you want to import users. false by default
             * @param {string} [branchLabel] Must be set to branch (optional)
             * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
             * @param {string} [branchComment] Comment for the branch (optional)
             * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options) {
                return exports.DefaultApiFp(configuration).rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Retrieves the user list
             * @param {string} details (optional) -  if set to 1 returns all details
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userGet(details, options) {
                return exports.DefaultApiFp(configuration).userGet(details, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Creates a new user. Arguments are either a set of arguments or json
             * @param {string} login User login name
             * @param {string} email User email
             * @param {string} password User password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userPost(login, email, password, json, first, last, options) {
                return exports.DefaultApiFp(configuration).userPost(login, email, password, json, first, last, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all actions of a user
             * @param {string} user user login name
             * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
             * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserAuditGet(user, startAt, maxResults, options) {
                return exports.DefaultApiFp(configuration).userUserAuditGet(user, startAt, maxResults, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckGet(user, password, options) {
                return exports.DefaultApiFp(configuration).userUserCheckGet(user, password, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Check a user's password
             * @param {string} user user login name
             * @param {string} password Asks for a check of the password1
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserCheckPost(user, password, options) {
                return exports.DefaultApiFp(configuration).userUserCheckPost(user, password, options)(fetch, basePath);
            },
            /**
             * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
             * @summary Removes completely a user (only used for unit testing)
             * @param {string} user user login name
             * @param {string} confirm Needs to be yes for the method to be executed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserDelete(user, confirm, options) {
                return exports.DefaultApiFp(configuration).userUserDelete(user, confirm, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves full details of a user
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserGet(user, options) {
                return exports.DefaultApiFp(configuration).userUserGet(user, options)(fetch, basePath);
            },
            /**
             * Permissions - No permissions needed. Valid from version 2.1
             * @summary Login
             * @param {string} user user login name
             * @param {string} password password in clear
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLoginPost(user, password, options) {
                return exports.DefaultApiFp(configuration).userUserLoginPost(user, password, options)(fetch, basePath);
            },
            /**
             * Permissions - Must have a valid authentication. Valid from version 2.1
             * @summary Logout
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserLogoutPost(user, options) {
                return exports.DefaultApiFp(configuration).userUserLogoutPost(user, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
             * @param {string} user user login name
             * @param {string} token password_reset token
             * @param {string} password New password to use from now on
             * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPasswordResetPost(user, token, password, signaturePassword, options) {
                return exports.DefaultApiFp(configuration).userUserPasswordResetPost(user, token, password, signaturePassword, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Adds a user to a project
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPost(user, project, permission, options) {
                return exports.DefaultApiFp(configuration).userUserProjectPost(user, project, permission, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
             * @param {string} user user login name
             * @param {string} project Project short label
             * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectPut(user, project, permission, options) {
                return exports.DefaultApiFp(configuration).userUserProjectPut(user, project, permission, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
             * @summary Retrieves all projects a user has access to
             * @param {string} user user login name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserProjectsGet(user, options) {
                return exports.DefaultApiFp(configuration).userUserProjectsGet(user, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
             * @param {string} user user login name
             * @param {string} email User new email
             * @param {string} password User new password in clear
             * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
             * @param {string} [first] User first name (optional)
             * @param {string} [last] User last name (optional)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserPut(user, email, password, json, first, last, options) {
                return exports.DefaultApiFp(configuration).userUserPut(user, email, password, json, first, last, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.2
             * @summary Renames a user login
             * @param {string} user user login name
             * @param {string} newLogin The new login name. Cannot be one of the existing
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserRenamePut(user, newLogin, options) {
                return exports.DefaultApiFp(configuration).userUserRenamePut(user, newLogin, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds or deletes a user setting.
             * @param {string} user user login name
             * @param {string} key Name of the setting
             * @param {string} value Value of the setting. If empty, deletes the setting.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserSettingPost(user, key, value, options) {
                return exports.DefaultApiFp(configuration).userUserSettingPost(user, key, value, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin. Valid from version 2.1
             * @summary Sets the new status of the user. Can be normal,blocked or deleted
             * @param {string} user user login name
             * @param {string} status Can be normal,blocked or deleted
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserStatusPut(user, status, options) {
                return exports.DefaultApiFp(configuration).userUserStatusPut(user, status, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Removes a user token
             * @param {string} user user login name
             * @param {string} value The token to be removed
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenDelete(user, value, options) {
                return exports.DefaultApiFp(configuration).userUserTokenDelete(user, value, options)(fetch, basePath);
            },
            /**
             * Permissions - Must be admin or the user. Valid from version 2.1
             * @summary Adds a token for a user
             * @param {string} user user login name
             * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
             * @param {string} [value] Value of the token - by default generated by this call
             * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
             * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            userUserTokenPost(user, purpose, value, reason, validity, options) {
                return exports.DefaultApiFp(configuration).userUserTokenPost(user, purpose, value, reason, validity, options)(fetch, basePath);
            },
        };
    };
    /**
     * DefaultApi - object-oriented interface
     * @export
     * @class DefaultApi
     * @extends {BaseAPI}
     */
    class DefaultApi extends BaseAPI {
        /**
         * Permissions - No permissions needed. Valid from version 2.1
         * @summary Asks for the difference between A and B html exerpts, and produce the B html with annotations
         * @param {string} [arg] json object with the arguments
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allCompareHtmlPost(arg, options) {
            return exports.DefaultApiFp(this.configuration).allCompareHtmlPost(arg, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Returns all info about a date
         * @param {string} [date] (optional) an input date formatted as iso8601. If not present, current date/time is used
         * @param {string} [dateformat] (optional) a date formatter. If not present, current date format is used
         * @param {string} [timeformat] (optional) a date-time formatter. If not present, current date/time format is used
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allDateGet(date, dateformat, timeformat, options) {
            return exports.DefaultApiFp(this.configuration).allDateGet(date, dateformat, timeformat, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have the right key to download the file. Valid from version 2.1
         * @summary Retrieve one customer file. The fileno is a simple fileId. This request returns the actual file
         * @param {number} fileno file number
         * @param {string} key The key of the file
         * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allFileFilenoGet(fileno, key, disposition, options) {
            return exports.DefaultApiFp(this.configuration).allFileFilenoGet(fileno, key, disposition, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Retrieve list of all customer-wide files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allFileGet(options) {
            return exports.DefaultApiFp(this.configuration).allFileGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Creates a new customer-wide file - the file should be uploaded as payload. Its mime type should be sent through the HTTP protocol.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allFilePost(options) {
            return exports.DefaultApiFp(this.configuration).allFilePost(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Retrieve license status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allLicenseGet(options) {
            return exports.DefaultApiFp(this.configuration).allLicenseGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Adds a log entry (server side).
         * @param {string} message Message to log
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allLogPost(message, options) {
            return exports.DefaultApiFp(this.configuration).allLogPost(message, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - No permissions needed. Valid from version 2.1
         * @summary Monitoring object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allMonitorGet(options) {
            return exports.DefaultApiFp(this.configuration).allMonitorGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Find items based on a search string in all projects
         * @param {string} search search term
         * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
         * @param {string} [filter] (optional) applies a filter, can be negative
         * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
         * @param {number} [labels] (optional) set to 1 to return labels in the output
         * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allNeedleGet(search, id, filter, fieldsOut, labels, links, options) {
            return exports.DefaultApiFp(this.configuration).allNeedleGet(search, id, filter, fieldsOut, labels, links, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Find item ids based on a search string in all projects
         * @param {string} search search term
         * @param {string} [filter] (optional) applies a filter, can be negative
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allNeedleminimalGet(search, filter, options) {
            return exports.DefaultApiFp(this.configuration).allNeedleminimalGet(search, filter, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - No permissions needed. Valid from version 2.2
         * @summary The OpenAPI 3.0 definition of our REST API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allOpenapiGet(options) {
            return exports.DefaultApiFp(this.configuration).allOpenapiGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - No permissions needed. Valid from version 2.1
         * @summary Lists all reports
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allReportsGet(options) {
            return exports.DefaultApiFp(this.configuration).allReportsGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Sends an email. Non-optional parameters are sent as a POST JSON payload.
         * @param {SendmailParam} [body] Necessary information to send a mail
         * @param {number} [system] (optional) if set to 1 makes it a system email (not sent by the actual user)
         * @param {number} [noreply] (optional) if set to 1 makes it a no-reply email (not sent by the actual user)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allSendmailPost(body, system, noreply, options) {
            return exports.DefaultApiFp(this.configuration).allSendmailPost(body, system, noreply, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Creates a service desk issue. The parameters are sent as a POST JSON payload.
         * @param {ServiceDeskParam} [body] Necessary information to send a mail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allServicedeskPost(body, options) {
            return exports.DefaultApiFp(this.configuration).allServicedeskPost(body, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get all settings of a customer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allSettingGet(options) {
            return exports.DefaultApiFp(this.configuration).allSettingGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Adds or changes a customer setting. If the value is empty, the setting will be deleted.
         * @param {string} key setting key
         * @param {string} value value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allSettingPost(key, value, options) {
            return exports.DefaultApiFp(this.configuration).allSettingPost(key, value, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get instance status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allStatusGet(options) {
            return exports.DefaultApiFp(this.configuration).allStatusGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - No permissions needed. Valid from version 2.1
         * @summary Returns all accepted time zones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allTimezoneGet(options) {
            return exports.DefaultApiFp(this.configuration).allTimezoneGet(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
         * @summary Get all todos for the current user, for all projects
         * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
         * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allTodoGet(includeDone, includeFuture, options) {
            return exports.DefaultApiFp(this.configuration).allTodoGet(includeDone, includeFuture, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary WebHook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        allWebhookPost(options) {
            return exports.DefaultApiFp(this.configuration).allWebhookPost(options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.2
         * @summary Retrieves the group list
         * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGet(details, options) {
            return exports.DefaultApiFp(this.configuration).groupGet(details, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Removes a group
         * @param {string} groupId group Id
         * @param {string} confirm Needs to be yes for the method to be executed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdDelete(groupId, confirm, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdDelete(groupId, confirm, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.2
         * @summary Retrieves details of a group
         * @param {string} groupId group Id
         * @param {number} [details] (optional) -  if set to 1 returns all details -- in this case user needs to be ADMIN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdGet(groupId, details, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdGet(groupId, details, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Adds a group to a project (or removes it)
         * @param {string} groupId group Id
         * @param {string} project Project short label
         * @param {number} [permission] Specify the (new) permission for that group in that project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdProjectProjectPost(groupId, project, permission, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdProjectProjectPost(groupId, project, permission, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Renames a group
         * @param {string} groupId group Id
         * @param {string} newName The new group name. Cannot be one of the existing. Must start with &#x27;group.&#x27;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdRenamePut(groupId, newName, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdRenamePut(groupId, newName, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.2
         * @summary Adds a user to a group
         * @param {string} groupId group Id
         * @param {string} user user login name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdUserUserPut(groupId, user, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdUserUserPut(groupId, user, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Sets all users of a group (replacing potential former content)
         * @param {string} groupId group Id
         * @param {string} users List of all users members of that group, commas-separated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupIdUserlistPut(groupId, users, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupIdUserlistPut(groupId, users, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Creates a new group
         * @param {string} groupName group name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupNamePost(groupName, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupNamePost(groupName, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Removes a user from a group
         * @param {string} groupName group name
         * @param {string} user user login name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        groupGroupNameUserUserDelete(groupName, user, options) {
            return exports.DefaultApiFp(this.configuration).groupGroupNameUserUserDelete(groupName, user, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.3
         * @summary Merge branch into mainline. First project is the mainline, second is the branch. The payload must contain a json object with a list of actions to perform.
         * @param {string} mainproject mainproject
         * @param {string} branchproject branchproject
         * @param {string} reason The reason why the user is doing this
         * @param {MergeParam} [body] Actions to perform
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options) {
            return exports.DefaultApiFp(this.configuration).mainprojectMergeBranchprojectPost(mainproject, branchproject, reason, body, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.2
         * @summary Retrieves all accesses in a project (list of groups and users who have access)
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectAccessGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectAccessGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Retrieves all changes in a project
         * @param {string} project Project short label
         * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
         * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
         * @param {string} [deleteOnly] (optional) if set to yes, only returns actions of type delete
         * @param {string} [tech] (optional) if set to yes, returns the underneath changes
         * @param {number} [auditIdMin] (optional) sets a minimum ID for audits, as returned by GET calendar
         * @param {number} [auditIdMax] (optional) sets a maximum ID for audits
         * @param {number} [noReport] (optional) set to 1 to avoid having reports
         * @param {number} [noImport] (optional) set to 1 to avoid having imports
         * @param {string} [include] (optional) set to a list of actions to include (delete,undelete,add,edit,...)
         * @param {number} [resolveRef] (optional) set to 1 to resolve item IDs into refs
         * @param {string} [itemRef] (optional) restrict the audit to only those mentionning this item
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options) {
            return exports.DefaultApiFp(this.configuration).projectAuditGet(project, startAt, maxResults, deleteOnly, tech, auditIdMin, auditIdMax, noReport, noImport, include, resolveRef, itemRef, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.3
         * @summary Launches a server-side branch or clone - needs the 'merge' module if actual branching
         * @param {string} project Project short label
         * @param {string} label Branch project label
         * @param {string} shortLabel Branch project short label
         * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after branching)
         * @param {number} keepContent 1 or 0. Defaults to 1. 0 only works without branch and without history
         * @param {number} [branch] (optional) Set to 1 to branch (default), 0 to just copy/clone
         * @param {number} [history] (optional) Set to 1 to branch or copy with history, defaults to 0
         * @param {string} [tagToCreate] (optional) specify a tag (by default auto-generated)
         * @param {string} [branchInThePastTag] (optional) specify a tag to branch in the past (needs history&#x3D;1)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options) {
            return exports.DefaultApiFp(this.configuration).projectBranchPost(project, label, shortLabel, keepPermissions, keepContent, branch, history, tagToCreate, branchInThePastTag, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get all dates at which a project has been modified
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCalendarGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectCalendarGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Removes (inactivate) a category. Will fail on REPORT and FOLDER categories
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatCategoryDelete(project, category, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectCatCategoryDelete(project, category, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get details of a category
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {string} [filter] (optional) specify a filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatCategoryGet(project, category, filter, options) {
            return exports.DefaultApiFp(this.configuration).projectCatCategoryGet(project, category, filter, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Modifies a categorie's labels, and fix the project's settings to reflect that change, OR modifies a category's order.
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {number} order The new order (for reordering)
         * @param {string} shortLabel The new short label for that category (for renaming)
         * @param {string} label The new long label for that category (for renaming)
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatCategoryPut(project, category, order, shortLabel, label, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectCatCategoryPut(project, category, order, shortLabel, label, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get all settings of a category
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatCategorySettingGet(project, category, options) {
            return exports.DefaultApiFp(this.configuration).projectCatCategorySettingGet(project, category, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Adds or changes a category setting. If the value is empty, the setting will be deleted
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {string} key setting key
         * @param {string} value value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatCategorySettingPost(project, category, key, value, options) {
            return exports.DefaultApiFp(this.configuration).projectCatCategorySettingPost(project, category, key, value, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get all categories of a project
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectCatGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Adds a fields in a category
         * @param {string} project Project short label
         * @param {string} label Field label
         * @param {string} category Category short label
         * @param {string} fieldType Type of field
         * @param {string} fieldParam Parameter for the field
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCatPost(project, label, category, fieldType, fieldParam, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectCatPost(project, label, category, fieldType, fieldParam, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Clones a project
         * @param {string} project Project short label
         * @param {string} label Project label
         * @param {string} shortLabel Project short label
         * @param {number} keepHistory 1 or 0. Defaults to 0
         * @param {number} keepContent 1 or 0. Defaults to 0 (only the REPORT part is kept, make sense only if keepHistory is 0)
         * @param {number} keepPermissions 1 or 0. Defaults to 0 (with 0 the project doesn&#x27;t have any permission after cloning)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options) {
            return exports.DefaultApiFp(this.configuration).projectClonePost(project, label, shortLabel, keepHistory, keepContent, keepPermissions, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Asks for the difference between 2 signed documents, as a Word document. The job ID is returned as answer
         * @param {string} project Project short label
         * @param {string} signitem1 SIGN-xx for the first SIGN document to compare
         * @param {string} signitem2 SIGN-xx for the 2nd SIGN document to compare
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options) {
            return exports.DefaultApiFp(this.configuration).projectCompareSignitem1Signitem2Post(project, signitem1, signitem2, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get a project's schema
         * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectConfigcheckGet(excludeCategories, options) {
            return exports.DefaultApiFp(this.configuration).projectConfigcheckGet(excludeCategories, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.2
         * @summary Copy items from a folder to another one
         * @param {string} project Project short label
         * @param {string} itemOrFolder Item reference (XXX-nn) or folder (F-XXX-nn)
         * @param {string} targetFolder Reference of the target folder (F-categ-serial)
         * @param {string} reason The reason why the user is doing this
         * @param {string} [targetProject] (optional) project to copy into (by default, same project)
         * @param {number} [copyLabels] (optional) 0 or 1. Defaults to 0
         * @param {string} [map] (optional) mapN&#x3D;M -  map field N in source to field M in target
         * @param {string} [ignoreLabels] (optional) can contain a comma-delimited list of labels NOT to copy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options) {
            return exports.DefaultApiFp(this.configuration).projectCopyItemOrFolderPost(project, itemOrFolder, targetFolder, reason, targetProject, copyLabels, map, ignoreLabels, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
         * @summary Removes completely a project (only used for unit testing). This is an actual DELETE in the database.
         * @param {string} project Project short label
         * @param {string} confirm Needs to be yes for the method to be executed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectDelete(project, confirm, options) {
            return exports.DefaultApiFp(this.configuration).projectDelete(project, confirm, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Converts an excel file (xls, xlsx) into a XML version that we send straight back as an XML payload.
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectExcelxmlPost(project, options) {
            return exports.DefaultApiFp(this.configuration).projectExcelxmlPost(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Executes UC or TC into XTC items
         * @param {string} project Project short label
         * @param {ExecuteParam} [body] There must be a JSON as a payload. It includes all parameters AND the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectExecutePost(project, body, options) {
            return exports.DefaultApiFp(this.configuration).projectExecutePost(project, body, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Asks for an export of some items. The job ID is returned as answer
         * @param {string} project Project short label
         * @param {string} itemList Mandatory list of items to export.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectExportGet(project, itemList, options) {
            return exports.DefaultApiFp(this.configuration).projectExportGet(project, itemList, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Removes (inactivate) a field.
         * @param {string} project Project short label
         * @param {string} category Category short label
         * @param {number} field The field number (like field&#x3D;502)
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFieldCategoryDelete(project, category, field, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectFieldCategoryDelete(project, category, field, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get 1 field of an item. {item} has the form CATEG-number.
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} field Mandatory. Field number (faster) OR field label
         * @param {string} [format] Optional. Format for the return. Can be text, json, html, xml or xslt. Defaults to html
         * @param {number} [download] Optional. 1 to have in download, 0 as direct result. Defaults to 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFieldItemGet(project, item, field, format, download, options) {
            return exports.DefaultApiFp(this.configuration).projectFieldItemGet(project, item, field, format, download, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Modifies a field's label and parameter OR modifies a field's order.
         * @param {string} project Project short label
         * @param {number} field The field number (like field&#x3D;502)
         * @param {string} label The new label (for renaming)
         * @param {string} fieldParam The new parameter (for renaming)
         * @param {number} order The new order (for reordering)
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFieldPut(project, field, label, fieldParam, order, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectFieldPut(project, field, label, fieldParam, order, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have the right key to download the file. Valid from version 2.1
         * @summary Retrieve one project file. The fileno is a simple fileId. This request returns the actual file
         * @param {string} project Project short label
         * @param {number} fileno file number
         * @param {string} key The key of the file
         * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFileFilenoGet(project, fileno, key, disposition, options) {
            return exports.DefaultApiFp(this.configuration).projectFileFilenoGet(project, fileno, key, disposition, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Retrieve list of all files owned by a project
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFileGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectFileGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Creates a new file - the file should be uploaded as payload (or through the url argument as an alternative). It's mime type should be sent through the HTTP protocol.
         * @param {string} project Project short label
         * @param {string} [url] Optional argument -  the file could also come from an external URL. In this case there will be an error if we can&#x27;t retrieve it on the server
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFilePost(project, url, options) {
            return exports.DefaultApiFp(this.configuration).projectFilePost(project, url, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
         * @summary Creates a new folder
         * @param {string} project Project short label
         * @param {string} parent Reference of the parent folder in the form F-CATEG-serial (example -  F-SPEC-17)
         * @param {string} label folder label
         * @param {string} reason The reason why the user is doing this
         * @param {string} [fxField] (optional) Add one of each of these to set folder&#x27;s fields. fx is followed by the field ID (a number)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectFolderPost(project, parent, label, reason, fxField, options) {
            return exports.DefaultApiFp(this.configuration).projectFolderPost(project, parent, label, reason, fxField, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get list of project info -  users, settings, categories
         * @param {string} project Project short label
         * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have this project data even if you are not assigned to, as an admin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectGet(project, adminUI, options) {
            return exports.DefaultApiFp(this.configuration).projectGet(project, adminUI, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Hides a project
         * @param {string} project Project short label
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectHidePut(project, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectHidePut(project, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.2
         * @summary Launches a server-side hook
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} hook name of the hook
         * @param {string} [body] Payload for the hook, treated as a string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectHookItemPost(project, item, hook, body, options) {
            return exports.DefaultApiFp(this.configuration).projectHookItemPost(project, item, hook, body, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
         * @summary Cleans up an input html blob according to the current html cleanup rules. The blob is passed in the POST payload. The payload must be a json object with {\"htmlToClean\" - \"x\"}
         * @param {string} project Project short label
         * @param {GetHmlBlobInput} [body] Payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectHtmlCleanupBlobPost(project, body, options) {
            return exports.DefaultApiFp(this.configuration).projectHtmlCleanupBlobPost(project, body, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
         * @summary Get the list of items that would be changed if we applied html cleanup. You can pass a cleanup setting in the payload of the POST. If it's not there we take the customer (global) setting and force the cleanup to true
         * @param {string} project Project short label
         * @param {CleanupSetting} [body] Cleanup setting (optional)
         * @param {string} [categories] (optional) list of comma-delimited categories to go through, all by default
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectHtmlCleanupTestPost(project, body, categories, options) {
            return exports.DefaultApiFp(this.configuration).projectHtmlCleanupTestPost(project, body, categories, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Imports some items into a project
         * @param {string} project Project short label
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectImportPost(project, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectImportPost(project, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get details of a folder. {folder} has the form F-CATEG-number[-vN].
         * @param {string} project Project short label
         * @param {string} folder Folder reference (F-XXX-nn)
         * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
         * @param {string} [filter] (optional) specify a filter
         * @param {string} [children] (optional) set to yes if you need the children as well (recursively).
         * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
         * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options) {
            return exports.DefaultApiFp(this.configuration).projectItemFolderGet(project, folder, history, filter, children, atDate, fields, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Removes (inactivate) an item (or a folder). Item has the form (F-)CATEG-number. Will fail on non-empty folders
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} confirm Needs to be yes for the method to be executed IF it is a non-empty folder
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemItemDelete(project, item, confirm, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectItemItemDelete(project, item, confirm, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get details of an item. {item} has the form CATEG-number[-vN].
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {number} [history] (optional) set history&#x3D;1 to retrieve list of all versions
         * @param {number} [fields] (optional) set fields&#x3D;1 to retrieve list of all fields, even the empty ones
         * @param {string} [filter] (optional) specify a filter
         * @param {string} [atDate] (optional) retrieves the item at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z. Not compatible with the version query -vN
         * @param {number} [withTree] (optional) retrieves the context tree if set to 1, in the field contextTree. Exclusive to filter and atDate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options) {
            return exports.DefaultApiFp(this.configuration).projectItemItemGet(project, item, history, fields, filter, atDate, withTree, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Restores an item. Item has the form CATEG-number
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} reason The reason why the user is doing this
         * @param {number} [at] (optional) If set, specifies that the item should be restored as it was in that version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemItemPost(project, item, reason, at, options) {
            return exports.DefaultApiFp(this.configuration).projectItemItemPost(project, item, reason, at, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Modifies an item or a folder. Item has the form CATEG-number, folders -  F-CATEG-number
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} reason The reason why the user is doing this
         * @param {string} [title] Specify new title for the item -- if not there, keep the old title
         * @param {string} [fxid_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
         * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
         * @param {string} [auditAction] (optional) Specify a new verb for the audit action. Defaults to edit
         * @param {string} [newFolder] (optional) Name of a new folder to move the item into (exclusive from title and fx arguments)
         * @param {number} [newPosition] (optional) Indicates a new position within the newfolder. If newFolder is not specified, only changes the position. Exclusive of title and fx arguments. Position is an integer starting at 1
         * @param {string} [filter] (optional) A filter
         * @param {string} [linksUp] (optional) Comma-delimited (%2C)list of references to up items
         * @param {string} [linksDown] (optional) Comma-delimited (%2C)list of references to down items
         * @param {number} [currentVersion] (optional) will not make the change if the current version is not that one
         * @param {number} [onlyThoseFields] (optional) when set to 1 says that the only fields to change are those passed
         * @param {number} [onlyThoseLabels] (optional) when set to 1 says that the only labels to change are those passed. To remove a label in this case, prefix it with minus
         * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options) {
            return exports.DefaultApiFp(this.configuration).projectItemItemPut(project, item, reason, title, fxid_, labels, auditAction, newFolder, newPosition, filter, linksUp, linksDown, currentVersion, onlyThoseFields, onlyThoseLabels, failOnCleanup, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project - admins can impersonate. Valid from version 2.1
         * @summary Adds an item in a folder
         * @param {string} project Project short label
         * @param {string} title Item title
         * @param {string} folder Reference of the folder (F-categ-serial)
         * @param {string} reason The reason why the user is doing this
         * @param {string} linksUp Comma-delimited (%2C)list of references to up items
         * @param {string} linksDown Comma-delimited (%2C)list of references to down items
         * @param {string} [fxID_] Values of each field, the URI parameter name is fx followed by the ID of the field (fx501 for example)
         * @param {string} [labels] (optional) List of labels currently applied to this element. If none is specified, will consider there are none. Should be sent as a comma-delimited list of strings
         * @param {string} [author] The author (login name) - only works when superadmin is issuing this
         * @param {number} [failOnCleanup] (optional) when set to 1 (default) says that the call will fail if any HTML cleanup is involved. With 0 it will clean and not fail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options) {
            return exports.DefaultApiFp(this.configuration).projectItemPost(project, title, folder, reason, linksUp, linksDown, fxID_, labels, author, failOnCleanup, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - ?. Valid from version 2.1
         * @summary Removes (inactivate) a link between 2 items. Items are in the form CATEG-number
         * @param {string} project Project short label
         * @param {string} upitem Item reference (XXX-nn) for the UP item
         * @param {string} downitem Item reference (XXX-nn) for the DOWN item
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectItemlinkUpitemDownitemDelete(project, upitem, downitem, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Adds a link between 2 items. Both items are in the form CATEG-number
         * @param {string} project Project short label
         * @param {string} upitem Item reference (XXX-nn) for the UP item
         * @param {string} downitem Item reference (XXX-nn) for the DOWN item
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectItemlinkUpitemDownitemPost(project, upitem, downitem, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get the list of items that are detailed in a DOC/SIGN item.
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {number} [detailed] Optional. When set to 1 adds a secondaryItems list in the answer. Defaults to 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectItemlistItemGet(project, item, detailed, options) {
            return exports.DefaultApiFp(this.configuration).projectItemlistItemGet(project, item, detailed, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Retrieve list of all jobs in a project
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectJobGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectJobGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.3
         * @summary Aborts a job.
         * @param {string} project Project short label
         * @param {number} job job number
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectJobJobDelete(project, job, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectJobJobDelete(project, job, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get a job file. The job part is the jobID (a number) and the file is the fileID (a number)
         * @param {string} project Project short label
         * @param {number} job job number
         * @param {number} fileno file number
         * @param {string} [mode] (optional) set to mode&#x3D;direct to get the output in the response output instead of as a download file. This assumes the file is HTML
         * @param {string} [format] (optional) set to format&#x3D;json to get a json output instead of XML
         * @param {string} [disposition] (optional, from version 2.3) set to disposition&#x3D;inline to ask the server to send the disposition to &#x27;inline&#x27; instead of &#x27;attachment&#x27;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options) {
            return exports.DefaultApiFp(this.configuration).projectJobJobFilenoGet(project, job, fileno, mode, format, disposition, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get a job status, including generated files. The variable part is the jobID (a number)
         * @param {string} project Project short label
         * @param {number} job job number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectJobJobGet(project, job, options) {
            return exports.DefaultApiFp(this.configuration).projectJobJobGet(project, job, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.2
         * @summary Sets the progress of a job
         * @param {string} project Project short label
         * @param {number} job job number
         * @param {number} progress progress (0 to 100, 200 for error)
         * @param {string} [status] (optional( status text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectJobJobPost(project, job, progress, status, options) {
            return exports.DefaultApiFp(this.configuration).projectJobJobPost(project, job, progress, status, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
         * @summary Get the label history of a project -  list of all label changes for all items
         * @param {string} project Project short label
         * @param {string} [itemRef] (optional) ask for just one item (the return structure is still an array in that case)
         * @param {string} [from] (optional) date from
         * @param {string} [to] (optional) date to - works only if you only specified a from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectLabelhistoryGet(project, itemRef, from, to, options) {
            return exports.DefaultApiFp(this.configuration).projectLabelhistoryGet(project, itemRef, from, to, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
         * @summary Get the merge history of a project - needs the 'merge' module
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectMergehistoryGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectMergehistoryGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.3
         * @summary Get the merge information - needs the 'merge' module
         * @param {string} project Project short label
         * @param {string} [excludeCategories] (optional) comma-delimited list of categories to exclude
         * @param {string} [fromDate] (optional) date from which we consider the merges. ISO8601 format -- this parameter was introduced in v 2.3.4
         * @param {number} [push] (optional) set to 1 if you inquire about a push, not a merge -- this parameter was introduced in v 2.3.4
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectMergeinfoGet(project, excludeCategories, fromDate, push, options) {
            return exports.DefaultApiFp(this.configuration).projectMergeinfoGet(project, excludeCategories, fromDate, push, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Move items into this folder
         * @param {string} project Project short label
         * @param {string} folder Folder reference (F-XXX-nn)
         * @param {string} reason The reason why the user is doing this
         * @param {string} [items] List of items to move in
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectMoveinFolderPost(project, folder, reason, items, options) {
            return exports.DefaultApiFp(this.configuration).projectMoveinFolderPost(project, folder, reason, items, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Find items based on a search string in one project
         * @param {string} project Project short label
         * @param {string} search search term
         * @param {string} id search id. Used by MatrixJira js to match queries with answers. Is returned in the output structure
         * @param {string} [filter] (optional) applies a filter, can be negative
         * @param {string} [fieldsOut] (optional) comma-delimited list of fields to return -  101,102 - or * for all
         * @param {number} [labels] (optional) set to 1 to return labels in the output
         * @param {number} [treeOrder] (optional) set to 1 to return items in tree order (otherwise it&#x27;s project,category,serial)
         * @param {string} [links] (optional) set to up,down to return up and down items, or only up or only down
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options) {
            return exports.DefaultApiFp(this.configuration).projectNeedleGet(project, search, id, filter, fieldsOut, labels, treeOrder, links, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Find item ids based on a search string in one project
         * @param {string} project Project short label
         * @param {string} search search term
         * @param {string} [filter] (optional) applies a filter, can be negative
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectNeedleminimalGet(project, search, filter, options) {
            return exports.DefaultApiFp(this.configuration).projectNeedleminimalGet(project, search, filter, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Adds a category to a project
         * @param {string} project Project short label
         * @param {string} label Category label
         * @param {string} shortLabel Category short label
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectPost(project, label, shortLabel, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectPost(project, label, shortLabel, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Publishes an item. Item has the form PUB-nnn
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} reason reason for the publication
         * @param {string} [trainingFor] (optional) list of items for which we need to add training. If list is not there, all trainings will be generated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectPublishItemPost(project, item, reason, trainingFor, options) {
            return exports.DefaultApiFp(this.configuration).projectPublishItemPost(project, item, reason, trainingFor, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have QMS viewer access (or higher) to the project. Valid from version 2.3
         * @summary Find a string in the QMS published items
         * @param {string} project Project short label
         * @param {string} [search] (optional) search term. Return an empty array on PUB &lt; 2.3.1 and et the list of all pub if not specified.
         * @param {string} [pubItem] (optional) PUB-x item if you want to search in another than the last one for that project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectQmsfindGet(project, search, pubItem, options) {
            return exports.DefaultApiFp(this.configuration).projectQmsfindGet(project, search, pubItem, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) for the reports, read/write for the signed reports. Valid from version 2.1
         * @summary Asks for a new report. The job ID is returned as answer. {report} can be REPORT-n, DOC-n, SIGN-n or a report name.To follow the progress of the job, the GET /{project}/job/{jobid} can be called
         * @param {string} project Project short label
         * @param {string} report name of the report
         * @param {string} isSignedReport If set to true, means the report needs to generate a signed record
         * @param {string} includeSignatures List of comma separated users who need to sign
         * @param {string} newTitle New title for the SIGN- item that is generated (only valid for isSignedReport)
         * @param {string} copyFields List of from-to fields (123,456),(124,457) that we can use to generate the fields in the SIGN record (only valid for isSignedReport)
         * @param {string} [itemList] (optional) list of items to use in the report. By default all categories are used
         * @param {string} [url] (optional) url to generate in the filter
         * @param {string} [resturl] (optional) REST url to generate in the filter
         * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx, zippdf or package (from 2.2), or mf (since 2.3)
         * @param {string} [filter] (optional) specify a comma-delimited filter list. Can be negative filters (with minus before)
         * @param {number} [useOld] (optional) ask to use the old report engine (pre 1.11) if set to 1.
         * @param {string} [atDate] (optional) generates the report at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options) {
            return exports.DefaultApiFp(this.configuration).projectReportReportPost(project, report, isSignedReport, includeSignatures, newTitle, copyFields, itemList, url, resturl, format, filter, useOld, atDate, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get a project's schema
         * @param {string} project Project short label
         * @param {number} [simple] (optional) set to simple&#x3D;1 to have a simpler output (no fields, round shape)
         * @param {string} [excludeCategories] (optional) comma-separated list of categories to exclude, like DOC,SIGN
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSchemaGet(project, simple, excludeCategories, options) {
            return exports.DefaultApiFp(this.configuration).projectSchemaGet(project, simple, excludeCategories, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Get all settings of a project
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSettingGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectSettingGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Adds or changes a project setting. If the value is empty, the setting will be deleted.
         * @param {string} project Project short label
         * @param {string} key setting key
         * @param {string} value value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSettingPost(project, key, value, options) {
            return exports.DefaultApiFp(this.configuration).projectSettingPost(project, key, value, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Signs an item. Item has the form SIGN-nnn
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} password signature password - the user who is signing is the one who is logged in
         * @param {string} [acceptComments] (optional) adds an acceptance comment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSignItemPost(project, item, password, acceptComments, options) {
            return exports.DefaultApiFp(this.configuration).projectSignItemPost(project, item, password, acceptComments, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Edit the signature parts
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} rejectSign The reason why the user is rejecting the signature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSignItemPut(project, item, rejectSign, options) {
            return exports.DefaultApiFp(this.configuration).projectSignItemPut(project, item, rejectSign, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Asks for a new report. The job ID is returned as answer
         * @param {string} project Project short label
         * @param {string} [url] (optional) url to generate in the filter
         * @param {string} [resturl] (optional) REST url to generate in the filter
         * @param {string} [format] (optional) format -  html (default), pdf, docx, odt, xml, zipdocx or zippdf
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectSignedreportSIGNNPost(project, url, resturl, format, options) {
            return exports.DefaultApiFp(this.configuration).projectSignedreportSIGNNPost(project, url, resturl, format, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Get all tags of a project. Works on any project if user is admin
         * @param {string} project Project short label
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTagGet(project, options) {
            return exports.DefaultApiFp(this.configuration).projectTagGet(project, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Adds a tag to a project
         * @param {string} project Project short label
         * @param {string} label Tag label. Must be unique within a project
         * @param {number} auditId Id of the audit this tag is based on
         * @param {string} type Type of tag (default -  tag)
         * @param {string} comments Free optional comment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTagPost(project, label, auditId, type, comments, options) {
            return exports.DefaultApiFp(this.configuration).projectTagPost(project, label, auditId, type, comments, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
         * @summary Get all todos for the current user, for oneproject
         * @param {string} project Project short label
         * @param {string} [itemRef] (optional) set to an item to have all todos linked to an item, regardless of the user
         * @param {number} [includeDone] (optional) set to 1 to include done todos and todo&#x27;s created by the user
         * @param {number} [includeAllUsers] (optional) set to 1 to include all todos for all users
         * @param {number} [includeFuture] (optional) set to 1 to include future todos as well (defaults to 0)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options) {
            return exports.DefaultApiFp(this.configuration).projectTodoGet(project, itemRef, includeDone, includeAllUsers, includeFuture, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.2
         * @summary Creates a todo on an item (note that you only need read access for this POST method) for you or others
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} text The todo reason
         * @param {number} [fieldId] (optional) If set, specifies that the todo is related to that field (review, ...)
         * @param {string} [logins] (optional) If set, a list of user logins or groups to which these todo apply
         * @param {string} [todoType] (optional) The todo type -  &#x27;user&#x27; by default
         * @param {string} [atDate] (optional) a date in the future for reminders
         * @param {number} [auto] (optional) set to 1 to create an auto-notification (0 by default)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options) {
            return exports.DefaultApiFp(this.configuration).projectTodoItemPost(project, item, text, fieldId, logins, todoType, atDate, auto, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.2
         * @summary Removes (mark as done) a todo.
         * @param {string} project Project short label
         * @param {string} todoid todoid
         * @param {string} hardDelete Set to yes to actually remove the record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTodoTodoidDelete(project, todoid, hardDelete, options) {
            return exports.DefaultApiFp(this.configuration).projectTodoTodoidDelete(project, todoid, hardDelete, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Touches (set to same date) an item or folder
         * @param {string} project Project short label
         * @param {string} item Item reference (XXX-nn)
         * @param {string} reason The reason why the user is doing this
         * @param {number} [nbLayers] (optional) Number of layers -- 1 by default
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTouchItemPut(project, item, reason, nbLayers, options) {
            return exports.DefaultApiFp(this.configuration).projectTouchItemPut(project, item, reason, nbLayers, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read access (or higher) to the project. Valid from version 2.1
         * @summary Get full tree
         * @param {string} project Project short label
         * @param {string} [fancy] (optional) returns a fancy tree
         * @param {string} [filter] (optional) applies a filter
         * @param {string} [atDate] (optional) generates the tree at that date - format is ISO8601 like atDate&#x3D;2018-05-30T14 - 48 - 27.223Z
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectTreeGet(project, fancy, filter, atDate, options) {
            return exports.DefaultApiFp(this.configuration).projectTreeGet(project, fancy, filter, atDate, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Unhides a project.
         * @param {string} project Project short label
         * @param {string} newShort The new project short name to use
         * @param {string} reason The reason why the user is doing this
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectUnhidePut(project, newShort, reason, options) {
            return exports.DefaultApiFp(this.configuration).projectUnhidePut(project, newShort, reason, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have read/write access to the project. Valid from version 2.1
         * @summary Converts a word document to an HTML, with images pointing to uploaded files on the server
         * @param {string} project Project short label
         * @param {string} reason The reason why the user is doing this
         * @param {number} [fileNo] If specified, means that the conversion is from an already uploaded file. Otherwise the file must be uploaded as body of this call
         * @param {string} [targetDocumentFolder] target document folder (in this case creates a document)
         * @param {number} [useAsField] set to 1 to have this docx used as a field. In this case the return value is the html equivalent, with some meta
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options) {
            return exports.DefaultApiFp(this.configuration).projectWordconvertPost(project, reason, fileNo, targetDocumentFolder, useAsField, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Get list of all projects, all settings and current user, all todos and JIRA meta create object
         * @param {number} [adminUI] (optional) set to adminUI&#x3D;1 to have all projects even the ones you are not assigned to, as an admin
         * @param {string} [output] (optional) comma-delimited list of requested output fields. Returns all fields if parameter is not present
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        rootGet(adminUI, output, options) {
            return exports.DefaultApiFp(this.configuration).rootGet(adminUI, output, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Creates a new project. Either the full project is sent as XML payload, or the label and shortLabel are given. If uploading data for a whole project, label and shortLabel are optional but overwrite the XML content if present. Branching can be done with an audit report as payload, and branch* must be defined in that case
         * @param {string} label Project label
         * @param {string} shortLabel Project short label
         * @param {string} [overwrite] Must be set to yes if you&#x27;re overwriting an existing project
         * @param {string} [importUsers] Must be set to yes if you want to import users. false by default
         * @param {string} [branchLabel] Must be set to branch (optional)
         * @param {string} [branchTag] Must be set to branch, and match a tag in the audit export (optional)
         * @param {string} [branchComment] Comment for the branch (optional)
         * @param {string} [branchBaseProjectLabel] Label of the base Project (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options) {
            return exports.DefaultApiFp(this.configuration).rootPost(label, shortLabel, overwrite, importUsers, branchLabel, branchTag, branchComment, branchBaseProjectLabel, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Retrieves the user list
         * @param {string} details (optional) -  if set to 1 returns all details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userGet(details, options) {
            return exports.DefaultApiFp(this.configuration).userGet(details, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Creates a new user. Arguments are either a set of arguments or json
         * @param {string} login User login name
         * @param {string} email User email
         * @param {string} password User password in clear
         * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
         * @param {string} [first] User first name (optional)
         * @param {string} [last] User last name (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userPost(login, email, password, json, first, last, options) {
            return exports.DefaultApiFp(this.configuration).userPost(login, email, password, json, first, last, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
         * @summary Retrieves all actions of a user
         * @param {string} user user login name
         * @param {number} [startAt] (optional) Pagination -  starts the audit after N records
         * @param {number} [maxResults] (optional) Pagination -  Retrieve N results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserAuditGet(user, startAt, maxResults, options) {
            return exports.DefaultApiFp(this.configuration).userUserAuditGet(user, startAt, maxResults, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
         * @summary Check a user's password
         * @param {string} user user login name
         * @param {string} password Asks for a check of the password1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserCheckGet(user, password, options) {
            return exports.DefaultApiFp(this.configuration).userUserCheckGet(user, password, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
         * @summary Check a user's password
         * @param {string} user user login name
         * @param {string} password Asks for a check of the password1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserCheckPost(user, password, options) {
            return exports.DefaultApiFp(this.configuration).userUserCheckPost(user, password, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Reserved to Matrix Requirements operations. Valid from version 2.1
         * @summary Removes completely a user (only used for unit testing)
         * @param {string} user user login name
         * @param {string} confirm Needs to be yes for the method to be executed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserDelete(user, confirm, options) {
            return exports.DefaultApiFp(this.configuration).userUserDelete(user, confirm, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
         * @summary Retrieves full details of a user
         * @param {string} user user login name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserGet(user, options) {
            return exports.DefaultApiFp(this.configuration).userUserGet(user, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - No permissions needed. Valid from version 2.1
         * @summary Login
         * @param {string} user user login name
         * @param {string} password password in clear
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserLoginPost(user, password, options) {
            return exports.DefaultApiFp(this.configuration).userUserLoginPost(user, password, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must have a valid authentication. Valid from version 2.1
         * @summary Logout
         * @param {string} user user login name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserLogoutPost(user, options) {
            return exports.DefaultApiFp(this.configuration).userUserLogoutPost(user, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Sets a new password for an account that has a password_reset token in place (the {user} in the URL doesn't matter)
         * @param {string} user user login name
         * @param {string} token password_reset token
         * @param {string} password New password to use from now on
         * @param {string} [signaturePassword] (optional) New password to use from now on for signatures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserPasswordResetPost(user, token, password, signaturePassword, options) {
            return exports.DefaultApiFp(this.configuration).userUserPasswordResetPost(user, token, password, signaturePassword, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Adds a user to a project
         * @param {string} user user login name
         * @param {string} project Project short label
         * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin, 4 for visitor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserProjectPost(user, project, permission, options) {
            return exports.DefaultApiFp(this.configuration).userUserProjectPost(user, project, permission, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Edits the user permissions in a project. If permission is 0, it means the user has no longer access (but we retain its records for audit purposes)
         * @param {string} user user login name
         * @param {string} project Project short label
         * @param {number} permission 0 for no access, 1 for readonly, 2 for read/write (default), 3 for admin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserProjectPut(user, project, permission, options) {
            return exports.DefaultApiFp(this.configuration).userUserProjectPut(user, project, permission, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be that user - Matrix operations can impersonate. Valid from version 2.1
         * @summary Retrieves all projects a user has access to
         * @param {string} user user login name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserProjectsGet(user, options) {
            return exports.DefaultApiFp(this.configuration).userUserProjectsGet(user, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Edits the user details. Arguments are all separated or a single json argument. Regular users can only change their signature and passwords.
         * @param {string} user user login name
         * @param {string} email User new email
         * @param {string} password User new password in clear
         * @param {string} json A json struct with login, email, password, first, last, signatureImage(int), signaturePassword, admin(int)
         * @param {string} [first] User first name (optional)
         * @param {string} [last] User last name (optional)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserPut(user, email, password, json, first, last, options) {
            return exports.DefaultApiFp(this.configuration).userUserPut(user, email, password, json, first, last, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.2
         * @summary Renames a user login
         * @param {string} user user login name
         * @param {string} newLogin The new login name. Cannot be one of the existing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserRenamePut(user, newLogin, options) {
            return exports.DefaultApiFp(this.configuration).userUserRenamePut(user, newLogin, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Adds or deletes a user setting.
         * @param {string} user user login name
         * @param {string} key Name of the setting
         * @param {string} value Value of the setting. If empty, deletes the setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserSettingPost(user, key, value, options) {
            return exports.DefaultApiFp(this.configuration).userUserSettingPost(user, key, value, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin. Valid from version 2.1
         * @summary Sets the new status of the user. Can be normal,blocked or deleted
         * @param {string} user user login name
         * @param {string} status Can be normal,blocked or deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserStatusPut(user, status, options) {
            return exports.DefaultApiFp(this.configuration).userUserStatusPut(user, status, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Removes a user token
         * @param {string} user user login name
         * @param {string} value The token to be removed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserTokenDelete(user, value, options) {
            return exports.DefaultApiFp(this.configuration).userUserTokenDelete(user, value, options)(this.fetch, this.basePath);
        }
        /**
         * Permissions - Must be admin or the user. Valid from version 2.1
         * @summary Adds a token for a user
         * @param {string} user user login name
         * @param {string} purpose Purpose of the token. Not checked. Should contain either \&quot;password_reset\&quot; or \&quot;oauth\&quot;
         * @param {string} [value] Value of the token - by default generated by this call
         * @param {string} [reason] Free text explain where the token will be used (URL or others). Should be set for oauth, not needed for others
         * @param {number} [validity] Validity of the token in hours - if not set, doesn&#x27;t expire
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof DefaultApi
         */
        userUserTokenPost(user, purpose, value, reason, validity, options) {
            return exports.DefaultApiFp(this.configuration).userUserTokenPost(user, purpose, value, reason, validity, options)(this.fetch, this.basePath);
        }
    }
    exports.DefaultApi = DefaultApi;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(185), __webpack_require__(58), __webpack_require__(187), __webpack_require__(188), __webpack_require__(70), __webpack_require__(68), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isomorphic_fetch_1, ItemConfiguration_1, configuration_1, rest_api_1, LoggerTools_1, JSONTools_1, SimpleItemTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.CreateConsoleAPI = exports.StandaloneMatrixAPI = void 0;
    isomorphic_fetch_1 = __importDefault(isomorphic_fetch_1);
    function CreateConsoleAPI(token, baseRestUrl, baseMatrixUrl) {
        let config = new configuration_1.Configuration({ apiKey: token });
        let session = new class {
            getCsrfCookie() { return ""; }
            setComment(comment) { this.comment = comment; }
            getComment() { return this.comment; }
            setProject(project) { this.project = project; }
            getProject() { return this.project; }
        };
        const logger = new LoggerTools_1.LoggerTools((d) => d.toString());
        const json = new JSONTools_1.JSONTools(logger);
        const itemTools = new SimpleItemTools_1.SimpleItemTools();
        const itemConfig = new ItemConfiguration_1.ItemConfiguration(logger, json);
        return new StandaloneMatrixAPI(config, session, itemConfig, baseRestUrl, baseMatrixUrl, logger, json, itemTools);
    }
    exports.CreateConsoleAPI = CreateConsoleAPI;
    class StandaloneMatrixAPI {
        constructor(config, session, initialItemConfig, baseRestUrl, matrixBaseUrl, logger, json, simpleItemTools) {
            this.config = config;
            this.session = session;
            this.baseRestUrl = baseRestUrl;
            this.matrixBaseUrl = matrixBaseUrl;
            this.logger = logger;
            this.json = json;
            this.simpleItemTools = simpleItemTools;
            this.debug = false;
            this.instance = new rest_api_1.DefaultApi(this.config, this.baseRestUrl, isomorphic_fetch_1.default);
            this.setItemConfig(initialItemConfig);
        }
        createNewItemConfig() {
            return new ItemConfiguration_1.ItemConfiguration(this.logger, this.json);
        }
        getItemConfig() {
            return this.ItemConfig;
        }
        setItemConfig(newItemConfig) {
            this.ItemConfig = newItemConfig;
        }
        getHeadersForPost() {
            let headers = {};
            headers['x-csrf'] = this.session.getCsrfCookie();
            return headers;
        }
        // Called by setProject on project change.
        async initializeProject() {
            const p = await this.instance.projectGet(this.getProject(), 1);
        }
        log(arg) {
            if (this.debug) {
                this.logger.info(arg);
            }
        }
        setComment(comment) {
            this.session.setComment(comment);
        }
        getComment() { return this.session.getComment(); }
        async setProject(project) {
            this.session.setProject(project);
            if (project) {
                await this.initializeProject();
            }
        }
        getProject() { return this.session.getProject(); }
        async getProjects() {
            let p = this.instance.rootGet(0);
            return p.then((result) => {
                let projects = [];
                if (result.project) {
                    result.project.forEach((a) => {
                        projects.push(a.shortLabel);
                    });
                }
                return projects;
            });
        }
        parseRef(itemId) {
            return this.simpleItemTools.parseRef(itemId, this.getProject(), this.matrixBaseUrl);
        }
        getType(itemId) {
            var ir = this.parseRef(itemId);
            if (ir.type !== "") {
                return ir.type;
            }
            // no idea... 
            return "";
        }
        /**
         * get an item from the database as json object.
         *
         * Use: await api.getItem("F-DOC-1")
         *
         * @param itemId the id of the item like "REQ-1" or a specific version like "REQ-1-v1"
         * @throws error in case the itemId is bad.
         * @returns Promise to json object with all fields, links and labels
         */
        async getItem(itemId) {
            this.log(`get item "${itemId}`);
            let type = this.parseRef(itemId).type;
            if (!type || this.getItemConfig().getCategories(true).indexOf(type) == -1) {
                const msg = `This is not possibly an item in this project: "${itemId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            return this.appGetItemAsync(itemId);
        }
        /**
         * get the initial tree structure from a project. Project must be set first.
         */
        async getTree() {
            let p = this.instance.projectTreeGet(this.getProject(), "yes");
            return p.then((folders) => {
                let result = [];
                folders.forEach((v) => {
                    const hasChildren = v.children && v.children.length > 0;
                    result.push({ isFolder: hasChildren, title: v.title, id: v.id });
                });
                return result;
            });
        }
        /**
         * get a folder from the database, filling in it's children.
         * @param folderId  the id of the folder like "F-<type>-<id>"
         * @throws error if folderId is invalid
         * @returns Prommise to json object
         */
        async getFolderChildren(folderId) {
            this.log(`get folder "${folderId}`);
            const ref = this.parseRef(folderId);
            if (!ref.isFolder) {
                const msg = `This is not a folder: "${folderId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            let type = ref.type;
            if (!type || this.getItemConfig().getCategories(true).indexOf(type) == -1) {
                const msg = `This is not possibly a folder in this project: "${folderId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            const p = this.instance.projectItemFolderGet(this.getProject(), folderId, 0, "", "yes");
            return p.then((value) => {
                let result = [];
                // Harvest the children's IDs.
                if (value.itemList) {
                    value.itemList.forEach((v) => {
                        result.push({ isFolder: v.isFolder > 0, title: v.title, id: v.itemRef });
                    });
                }
                return result;
            });
        }
        parseItemJSON(itemId, result) {
            var item = {
                id: itemId,
                title: result.title,
                type: this.getType(itemId),
                downLinks: [],
                upLinks: [],
                modDate: result.modDate,
                isUnselected: result.isUnselected,
                labels: result.labels ? result.labels : [],
                maxVersion: result.maxVersion
            };
            if (result.isFolder != undefined) {
                item.isFolder = result.isFolder == 1;
                item.children = [];
            }
            else {
                item.isFolder = false;
            }
            if (result.docHasPackage) {
                item.docHasPackage = result.docHasPackage;
            }
            if (!result.maxVersion) {
                item.isDeleted = true;
            }
            if (result.fieldValList) {
                for (var fieldVal in result.fieldValList.fieldVal) {
                    item[result.fieldValList.fieldVal[fieldVal].id.toString()] = result.fieldValList.fieldVal[fieldVal].value;
                }
            }
            for (var idx = 0; result.downLinkList && idx < result.downLinkList.length; idx++) {
                var tol = result.downLinkList[idx].itemRef;
                item.downLinks.push({ to: this.parseRef(tol).id, title: result.downLinkList[idx].title, modDate: result.downLinkList[idx].modDate });
            }
            for (var idx = 0; result.upLinkList && idx < result.upLinkList.length; idx++) {
                var tol = result.upLinkList[idx].itemRef;
                item.upLinks.push({ to: this.parseRef(tol).id, title: result.upLinkList[idx].title, modDate: result.upLinkList[idx].modDate });
            }
            // copy original up list
            item.upLinkList = result.upLinkList;
            if (result.availableFormats) {
                item["availableFormats"] = result.availableFormats;
            }
            if (result.selectSubTree) {
                item["selectSubTree"] = result.selectSubTree;
            }
            if (result.requireSubTree) {
                item["requireSubTree"] = result.requireSubTree;
            }
            var hoi = [];
            for (var idx = 0; result.itemHistoryList && idx < result.itemHistoryList.itemHistory.length; idx++) {
                var theAction = result.itemHistoryList.itemHistory[idx];
                var historyInfo = {
                    id: itemId,
                    user: theAction.createdByUserLogin,
                    action: theAction.auditAction,
                    version: theAction.version,
                    date: theAction.createdAt,
                    dateUserFormat: theAction.createdAtUserFormat,
                    title: theAction.title,
                    comment: theAction.reason
                };
                // now use the information that undeleted items have been deleted just before
                if (theAction.auditAction === "undelete") {
                    if (result.itemHistoryList.itemHistory.length > idx + 1) {
                        var theDelete = result.itemHistoryList.itemHistory[idx + 1];
                        if (theDelete.auditAction !== "delete") {
                            historyInfo["deletedate"] = theDelete.deletedAtUserFormat;
                        }
                    }
                }
                hoi.push(historyInfo);
            }
            item['history'] = hoi;
            return item;
        }
        async appGetItemAsync(itemId) {
            const p = this.instance.projectItemItemGet(this.getProject(), itemId, 1);
            return p.then((value) => {
                if (value.isFolder) {
                    value["children"] = [];
                }
                const item = this.parseItemJSON(itemId, value);
                return item;
            });
        }
        async getDownlinks(itemId) {
            this.log(`get downlinks of item "${itemId}`);
            const itemPromise = this.getItem(itemId);
            return itemPromise.then((value) => {
                return value.downLinks ? value.downLinks : [];
            });
        }
        async getDownlinkIds(itemId) {
            this.log(`get downlink ids of item "${itemId}`);
            const links = this.getDownlinks(itemId);
            return links.then((value) => {
                return value.map(d => d.to);
            });
        }
        async getUplinks(itemId) {
            this.log(`get Uplinks of item "${itemId}`);
            const itemPromise = this.getItem(itemId);
            return itemPromise.then((value) => {
                return value.upLinks ? value.upLinks : [];
            });
        }
        async getUplinkIds(itemId) {
            this.log(`get uplink ids of item "${itemId}`);
            const links = this.getUplinks(itemId);
            return links.then((value) => {
                return value.map(d => d.to);
            });
        }
        /**
         * search items
         *
         * @param term search expression, e.g. mrql:category=REQ
         * @param includeFields true to include fields
         * @param includeLinks true to include links
         * @param includeLabels true to include labels
         * @returns
         */
        async search(term, includeFields, includeLinks, includeLabels, filter) {
            this.log(`Search for "${term}"`);
            return this.appSearchAsync(term, filter !== null && filter !== void 0 ? filter : null, true, includeFields ? "*" : null, null, includeLabels !== null && includeLabels !== void 0 ? includeLabels : false, includeLinks !== null && includeLinks !== void 0 ? includeLinks : false, includeLinks !== null && includeLinks !== void 0 ? includeLinks : false);
        }
        async uploadProjectFile(url) {
            const options = { headers: this.getHeadersForPost() };
            let result = await this.instance.projectFilePost(this.getProject(), url, options);
            return result;
        }
        async execute(payload) {
            const options = { headers: this.getHeadersForPost() };
            let items = await this.instance.projectExecutePost(this.getProject(), payload, options);
            return items;
        }
        parseSearchResult(needle, fieldList) {
            let fullitem = this.parseRef(needle.itemOrFolderRef);
            const that = this;
            let sr = {
                itemId: fullitem.id, version: fullitem.version, title: needle.title, downlinks: [], uplinks: [], labels: []
            };
            if (fieldList && fieldList.length > 0) {
                sr.fieldVal = needle.fieldVal;
            }
            if (needle.downLinkList) {
                for (let link of needle.downLinkList) {
                    sr.downlinks.push(that.parseRef(link.itemRef).id);
                }
            }
            if (needle.upLinkList) {
                for (let link of needle.upLinkList) {
                    sr.uplinks.push(that.parseRef(link.itemRef).id);
                }
            }
            if (needle.labels) {
                let labels = needle.labels.split(",");
                for (let label of labels) {
                    sr.labels.push(label.substr(1, label.length - 2));
                }
            }
            return sr;
        }
        // TODO: crossProject is not handled (it is a server query, not a project query).
        async appSearchAsync(term, filter, ignoreFilters, fieldList, crossProject, labels, down, up, treeOrder) {
            let linksReq = "";
            if (down && up) {
                linksReq = "up,down";
            }
            else if (down) {
                linksReq = "down";
            }
            else if (up) {
                linksReq = "up";
            }
            const p = this.instance.projectNeedleGet(this.getProject(), term, "", filter, fieldList, labels ? 1 : 0, treeOrder ? 1 : 0, linksReq);
            return p.then((result) => {
                var hoi = [];
                for (var idx = 0; idx < result.needles.length; idx++) {
                    hoi.push(this.parseSearchResult(result.needles[idx], fieldList));
                }
                return hoi;
            });
        }
        async getItemIdsInCategory(category) {
            this.log(`get items of type "${category}"`);
            let items = await this.search("mrql:category=" + category);
            return items.map(item => item.itemId);
        }
        /**
         * gets the value of a field of an item from the database
         *
         * Use: await getField( "REQ-1", "description")
         *
         * @param itemId the id of the item like "REQ-1" or a specific version like "REQ-1-v1"
         * @param fieldName name of the field
         * @throws Error in case of invalid item or field
         * @returns Promise to the value of the field
         */
        async getField(itemId, fieldName) {
            this.log(`get field "${fieldName} of item "${itemId}" `);
            let type = this.parseRef(itemId).type;
            if (!type || this.getItemConfig().getCategories(true).indexOf(type) == -1) {
                const msg = `This is not possibly an item in this project: "${itemId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            let fieldId = this.getItemConfig().getFieldId(type, fieldName);
            if (!fieldId) {
                const msg = `"${fieldName}" is not a field of this item "${itemId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            let itemPromise = this.appGetItemAsync(itemId);
            return itemPromise.then((value) => {
                return value[fieldId];
            });
        }
        /**
         * set a field of an item in the database
         *
         * Use: await api.setField("PROC-83", "plain english", "x");
         *
         * @param itemId itemId the id of the item like "REQ-1"
         * @param fieldName name of the field
         * @param value value of the field
         * @throws Error in case of invalid itemId or fieldName
         * @returns Promise to the updated item
         */
        async setField(itemId, fieldName, value) {
            this.log(`set field "${fieldName} of item "${itemId}" `);
            return this.setFields(itemId, [{ fieldName: fieldName, value: value }]);
        }
        async setTitle(itemId, value) {
            this.log(`set title of item "${itemId}" `);
            let update = {
                id: itemId,
                onlyThoseFields: 1,
                onlyThoseLabels: 1,
                title: value
            };
            let type = this.parseRef(itemId).type;
            if (!type) {
                const msg = `This is not possibly an item in this project: "${itemId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            return this.appUpdateItemInDBAsync(update, "edit");
        }
        appUpdateItemInDBAsync(itemJson, auditAction) {
            const comment = this.getComment();
            let putIt = { reason: comment };
            if (typeof itemJson.title !== "undefined") {
                putIt.title = itemJson.title;
            }
            if (auditAction) {
                putIt["auditAction"] = auditAction;
            }
            const regex = /fx[0-9]+/;
            let fxFields = {};
            for (var par in itemJson) {
                if (!itemJson.hasOwnProperty(par))
                    continue;
                if (putIt.hasOwnProperty(par))
                    continue;
                if (par === "type")
                    continue;
                if (par === "category")
                    continue;
                if (par === "links")
                    continue;
                if (par === "title")
                    continue;
                if (par === "id")
                    continue;
                if (isNaN(par)) {
                    // it's attribute other than a field
                    putIt[par] = itemJson[par];
                }
                else {
                    // it's a number so we assume it's a field
                    fxFields["fx" + par] = itemJson[par];
                }
                // If itemJson already has "fx" fields, we need to put those in the fxFields bucket.
                if (regex.test(par)) {
                    fxFields[par] = itemJson[par];
                }
            }
            const options = { query: fxFields, headers: this.getHeadersForPost() };
            const p = this.instance.projectItemItemPut(this.getProject(), itemJson.id, putIt.reason, putIt.title, undefined, undefined, putIt["auditAction"], undefined, undefined, undefined, undefined, undefined, undefined, itemJson.onlyThoseFields, itemJson.onlyThoseLabels, undefined, options);
            return p.then((result) => {
                var item = this.parseItemJSON(itemJson.id, result);
                return item;
            });
        }
        /**
         * sets multiple fields in the database
         *
         * Use: await api.setFields("PROC-83", [{fieldName:"plain english",value:"x"}]  )
         *
         * @param itemId itemId itemId the id of the item like "REQ-1"
         * @param data array of fieldName and value tupels
         * @throws Error in case of invalid id or fields
         * @returns the updated item
         */
        async setFields(itemId, data) {
            this.log(`set fields "${JSON.stringify(data)} of item "${itemId}" `);
            let update = {
                id: itemId,
                onlyThoseFields: 1,
                onlyThoseLabels: 1
            };
            let type = this.parseRef(itemId).type;
            if (!type) {
                const msg = `This is not possibly an item in this project: "${itemId}"!`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            for (let s of data) {
                let fieldId = this.getItemConfig().getFieldId(type, s.fieldName);
                if (!fieldId) {
                    const msg = `"${s.fieldName}" is not a field of this item "${itemId}"!`;
                    this.logger.error(msg);
                    throw new Error(msg);
                }
                update["fx" + fieldId] = s.value;
            }
            return this.appUpdateItemInDBAsync(update, "edit");
        }
        async addDownLink(fromId, toId) {
            this.log(`Add downlink from "${fromId} to "${toId}"`);
            const options = { headers: this.getHeadersForPost() };
            return this.instance.projectItemlinkUpitemDownitemPost(this.getProject(), fromId, toId, this.getComment(), options);
        }
        async deleteItem(itemId, force) {
            this.log(`Delete Item "${itemId}"`);
            if (force == undefined) {
                force = false;
            }
            return this.appDeleteItem(itemId, force);
        }
        async appDeleteItem(itemId, force) {
            return this.appGetItemAsync(itemId).then((itemJson) => {
                const comment = this.getComment();
                let confirm = "no";
                if (itemJson.isFolder && itemJson.children && force) {
                    confirm = "yes";
                }
                if (!force && itemJson.children.length > 0) {
                    throw new Error(`Item "${itemId}" not deleted because it has children`);
                }
                return this.instance.projectItemItemDelete(this.getProject(), itemId, confirm, comment);
            });
        }
        async deleteDownLink(fromId, toId) {
            this.log(`Delete downlink from "${fromId} to "${toId}"`);
            return this.instance.projectItemlinkUpitemDownitemDelete(this.getProject(), fromId, toId, this.getComment());
        }
        async deleteDownLinks(fromId) {
            this.log(`Delete all downlinks from "${fromId}"`);
            let dls = await this.getDownlinkIds(fromId);
            let results = [];
            for (let dl of dls) {
                results.push(await this.deleteDownLink(fromId, dl));
            }
            return results;
        }
        async deleteUpLinks(fromId) {
            this.log(`Delete all uplinks from "${fromId}"`);
            let uls = await this.getUplinkIds(fromId);
            let results = [];
            for (let ul of uls) {
                results.push(await this.deleteDownLink(ul, fromId));
            }
            return results;
        }
        /**
         * create a new item in the database
         *
         * Use: createItem( "F-REQ-1", "my item", [{fieldName:"description",value:"x"}], ["labelx"], downlinks:["SPEC-1"], uplinks:[] )
         *
         * @param folder where to store the item
         * @param title name of the item
         * @param data array with fieldNames and values
         * @param labels list of labels to set
         * @param downlinks list of downlinks to create
         * @param uplinks list of uplinks to create
         * @returns the created item id
         */
        async createItem(folder, title, data, labels, downlinks, uplinks) {
            this.log(`Create item "${title} in folder "${folder}" with labels:"
            ${labels ? labels.join(",") : ""}" downlinks:"${downlinks ? downlinks.join(",") : ""}" and uplinks:"${uplinks ? uplinks.join(",") : ""}" `);
            let that = this;
            let category = this.parseRef(folder).type;
            let update = { title: title, type: category };
            if (data) {
                for (let s of data) {
                    let fieldId = this.getItemConfig().getFieldId(category, s.fieldName);
                    if (!fieldId) {
                        const msg = `"${s.fieldName}" is not a field of this category "${category}"!`;
                        this.logger.error(msg);
                        throw new Error(msg);
                    }
                    update[fieldId] = s.value;
                }
            }
            if (labels && labels.length)
                update.labels = labels.join(",");
            const result = this.appCreateItemOfTypeAsync(category, update, "add", folder);
            return result.then(async (newItemId) => {
                let itemId = that.parseRef(newItemId).id;
                if (downlinks) {
                    for (let link of downlinks) {
                        await that.addDownLink(itemId, link);
                    }
                }
                if (uplinks) {
                    for (let link of uplinks) {
                        await that.addDownLink(link, itemId);
                    }
                }
                return newItemId;
            });
        }
        // Returns a promise with the id of the created item.
        async appCreateItemOfTypeAsync(category, itemJson, actions, parentId) {
            var _a, _b;
            const comment = this.getComment();
            if (itemJson.children) {
                let postItFolder = {
                    label: itemJson.title,
                    parent: parentId,
                    reason: comment
                };
                let fxFields = {};
                for (var par in itemJson) {
                    if (!itemJson.hasOwnProperty(par))
                        continue;
                    if (postItFolder.hasOwnProperty(par))
                        continue;
                    if (par === "type" || par === "children" ||
                        par === "title" || par === "labels" ||
                        par === "linksUp" || par === "linksDown") {
                        continue;
                    }
                    if (!isNaN(par)) {
                        fxFields["fx" + par] = itemJson[par];
                    }
                }
                const options = { query: fxFields, headers: this.getHeadersForPost() };
                let ack = this.instance.projectFolderPost(this.getProject(), parentId, itemJson.title, comment, undefined, options);
                return ack.then((result) => {
                    itemJson.id = "F-" + itemJson.type + "-" + result.serial;
                    return itemJson.id;
                });
            }
            let fxFields = {};
            for (var par in itemJson) {
                if (!itemJson.hasOwnProperty(par))
                    continue;
                if (par === "type" || par === "labels" ||
                    par === "linksUp" || par === "linksDown") {
                    continue;
                }
                if (!isNaN(par)) {
                    // it's a number so we assume it's a field
                    fxFields["fx" + par] = itemJson[par];
                }
            }
            let linksUp = (_a = itemJson.linksUp) !== null && _a !== void 0 ? _a : [];
            let linksDown = (_b = itemJson.linksDown) !== null && _b !== void 0 ? _b : [];
            const options = { query: fxFields, headers: this.getHeadersForPost() };
            let ack = this.instance.projectItemPost(this.getProject(), itemJson.title, parentId, comment, linksUp, linksDown, undefined, itemJson.labels, undefined, 1, options);
            return ack.then((result) => {
                itemJson.id = itemJson.type + "-" + result.serial;
                return itemJson.id;
            });
        }
        /**
         * Creates a folder
         *
         * @param parent where to store the folder
         * @param title name of the folder
         * @param data array with fieldNames and values
         * @throws error in case of input error (bad fields, etc)
         * @returns Promise to the item id of folder
         */
        async createFolder(parent, title, data) {
            this.log(`Create folder "${title} in folder "${parent}" `);
            let type = this.parseRef(parent).type;
            let update = { title: title, children: [], type: type };
            if (data) {
                for (let s of data) {
                    let fieldId = this.getItemConfig().getFieldId("FOLDER", s.fieldName);
                    if (!fieldId) {
                        const msg = `"${s.fieldName}" is not a field of a FOLDER"!`;
                        this.logger.error(msg);
                        throw new Error(msg);
                    }
                    update[fieldId] = s.value;
                }
            }
            // TODO: is XTC really correct here?
            return this.appCreateItemOfTypeAsync("XTC", update, "add", parent);
        }
        async getItemIdByTitle(category, title) {
            this.log(`get item by title "${title}" in category "${category}"`);
            let that = this;
            let itemsPromise = this.search("mrql:category=" + category);
            return itemsPromise.then((items) => {
                if (!items || items.length == 0) {
                    that.log(`Warning there's no item with title '${title}' in category '${category}'`);
                    return null;
                }
                const itemsFilteredByName = items.filter(item => item.title == title);
                if (itemsFilteredByName.length == 0) {
                    that.log(`Warning there's no item with title '${title}' in category '${category}'`);
                    return null;
                }
                if (itemsFilteredByName.length > 1) {
                    that.log(`Warning there's more than one match. Returning first item with title '${title}' in category '${category}'`);
                }
                that.log(`get item by title "${title}" in category "${category}" => ${itemsFilteredByName[0].itemId}`);
                return itemsFilteredByName[0].itemId;
            });
        }
        async copyItem(fromProject, fromItem, toProject, toFolder, copyLabels) {
            this.log(`Copy Item "${fromProject}/${fromItem}" to  "${toProject}/${toFolder}"`);
            return this.instance.projectCopyItemOrFolderPost(fromProject, fromItem, toFolder, this.getComment(), toProject, copyLabels ? 1 : 0);
        }
    }
    exports.StandaloneMatrixAPI = StandaloneMatrixAPI;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 32:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// example generation of json schema from typescript type
// 
//  typescript-json-schema web/ts/ProjectSettings.ts ITestConfig > test.txt
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ACL_SETTING = exports.defaultNotificationConfig = exports.notificationSetting = exports.autoColumnDefault = exports.autoColumnSetting = exports.smartTextConfigSetting = exports.mailConfigSetting = exports.qmsDefaultConfig = exports.EnumItemPublish = void 0;
    // *******************************
    // qms configuration        
    // *******************************
    var EnumItemPublish;
    (function (EnumItemPublish) {
        EnumItemPublish[EnumItemPublish["IfNotInGroup"] = 0] = "IfNotInGroup";
        EnumItemPublish[EnumItemPublish["Always"] = 1] = "Always";
        EnumItemPublish[EnumItemPublish["Never"] = 2] = "Never"; // items cannot be published by itself 
    })(EnumItemPublish || (EnumItemPublish = {}));
    exports.EnumItemPublish = EnumItemPublish;
    const qmsDefaultConfig = {
        publications: [{
                rules: [
                    {
                        category: "PROC",
                        readyLabels: ["PROCOK"],
                        itemRules: EnumItemPublish.IfNotInGroup,
                        groupName: "SOP",
                        groupLabelType: "SOPS",
                        groupDown: ["WI"]
                    },
                    {
                        category: "WI",
                        readyLabels: ["WIOK"],
                        itemRules: EnumItemPublish.IfNotInGroup,
                    }
                ],
                toCategory: "PUB",
                target: "pub",
                keepFlatList: false,
                publisher: "_" // comma separated list of publishers _ for legacy: look in category setting for PUB,
            }
        ],
        legacyRoles: false // use user groups 
    };
    exports.qmsDefaultConfig = qmsDefaultConfig;
    // *******************************
    // mail config
    // *******************************
    const mailConfigSetting = "mail_config";
    exports.mailConfigSetting = mailConfigSetting;
    // ******************************* 
    // ACL user access lists
    // *******************************
    const ACL_SETTING = "acl";
    exports.ACL_SETTING = ACL_SETTING;
    // *******************************
    // smart text , abbreviations, ....
    // *******************************
    const smartTextConfigSetting = "rtf";
    exports.smartTextConfigSetting = smartTextConfigSetting;
    let notificationSetting = "settingsNotification";
    exports.notificationSetting = notificationSetting;
    let defaultNotificationConfig = {
        enabled: true,
        closeAuto: true,
        manualCreate: true,
        browserNotificationDisabled: false,
        browserNotificationAutoCloseAfter: 9000
    };
    exports.defaultNotificationConfig = defaultNotificationConfig;
    // setting can be for customer (e.g. user titles) and project (user roles)
    const autoColumnSetting = "autoColumn";
    exports.autoColumnSetting = autoColumnSetting;
    const autoColumnDefault = { maps: [] };
    exports.autoColumnDefault = autoColumnDefault;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 10:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.refLinkTooltip = exports.refLinkStyle = void 0;
    var refLinkStyle;
    (function (refLinkStyle) {
        refLinkStyle[refLinkStyle["edit"] = 1] = "edit";
        refLinkStyle[refLinkStyle["link"] = 2] = "link";
        refLinkStyle[refLinkStyle["show"] = 3] = "show";
        refLinkStyle[refLinkStyle["select"] = 4] = "select";
        refLinkStyle[refLinkStyle["selectTree"] = 5] = "selectTree"; // like link, but selects in tree unless ctrl-was clicked
    })(refLinkStyle || (refLinkStyle = {}));
    exports.refLinkStyle = refLinkStyle;
    var refLinkTooltip;
    (function (refLinkTooltip) {
        refLinkTooltip[refLinkTooltip["none"] = 1] = "none";
        refLinkTooltip[refLinkTooltip["html"] = 2] = "html"; // full html tooltip
    })(refLinkTooltip || (refLinkTooltip = {}));
    exports.refLinkTooltip = refLinkTooltip;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 58:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(32)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ProjectSettings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ItemConfiguration = void 0;
    class ItemConfiguration {
        constructor(logger, json) {
            this.configuration = {};
            this.settingsString = {};
            this.settingsJSON = {};
            this.users = []; // server
            this.userList = []; // cleaned up
            this.userGroups = [];
            this.logger = logger;
            this.json = json;
        }
        isConfigured() {
            return this.getCategories() && this.getCategories().length > 0;
        }
        addUsers(userPermission, groupPermission) {
            this.userGroups = groupPermission;
            this.users = userPermission;
            this.userList = [];
            if (userPermission) {
                for (var idx = 0; idx < this.users.length; idx++) {
                    var ignore = false;
                    if (this.users[idx].permission === 3) {
                        // 3 is an admin without write write access
                        ignore = true;
                    }
                    for (var ex = 0; !ignore && ex < this.userList.length; ex++) {
                        if (this.userList[ex].login.toLowerCase() === this.users[idx].login.toLowerCase() || this.userList[ex].id === this.users[idx].id) {
                            // somethings wrong here...
                            this.logger.log("warning", "Ignoring duplicate user... login:" + this.userList[ex].id + " ID:" + this.users[idx].login);
                            ignore = true;
                        }
                    }
                    if (!ignore) {
                        this.userList.push({
                            id: this.users[idx].id,
                            login: this.users[idx].login.toLowerCase(),
                            email: this.users[idx].email,
                            permission: this.users[idx].permission,
                            firstName: this.users[idx].firstName,
                            lastName: this.users[idx].lastName
                        });
                    }
                }
            }
        }
        getUserInfo(login) {
            let theUser = null;
            for (let user of this.getUserNames()) {
                if (user.login.toLowerCase() === login.toLowerCase()) {
                    theUser = user;
                }
            }
            return theUser;
        }
        getFullName(login) {
            let user = this.getUserInfo(login);
            if (user === null) {
                return login;
            }
            else {
                let name = (user.firstName ? user.firstName : "") + " " + (user.lastName ? user.lastName : "");
                return user.login + (name == " " ? "" : (" - ") + name);
            }
        }
        // TODO(modules): we need a single place in the code that does this, but ItemConfiguration doesn't
        // seem like the best (it is a global aspect of the software, not project).
        groupIdToName(groupId) {
            return `g_${groupId}_g`;
        }
        hasGroupInfo(group) {
            return this.getUserGroups().findIndex((g) => { return this.groupIdToName(g.groupId) === group.toLowerCase(); }) > -1;
        }
        // {login} may have been deleted or doesn't exist.
        hasUserInfo(login) {
            return this.getUserInfo(login) !== null;
        }
        getUserIds() {
            return this.getUserNames().map(function (user) { return user.login; });
        }
        getEmail(user) {
            let email = "";
            for (let otherUser of this.getUserNames()) {
                if (otherUser.login.toLowerCase() === user.toLowerCase()) {
                    email = otherUser.email;
                }
            }
            return email;
        }
        activateTimewarp(date) {
            this.timewarpDate = date;
        }
        getTimeWarp() {
            return this.timewarpDate;
        }
        isAfterTimeWarp(date) {
            return this.timewarpDate && new Date(date) > new Date(this.timewarpDate);
        }
        hasWriteAccess(user) {
            if (!user || this.timewarpDate) {
                return false;
            }
            let permission = this.getPermission(user);
            // -1 super admin, 2 read write, 3 admin
            return permission == -1 || permission == 2 || permission == 3;
        }
        getPermission(user) {
            let permission = -1; // (in case the user does not exists, it's a super admin)
            // get permission directly for user
            for (var idx = 0; idx < this.users.length; idx++) {
                if (this.users[idx].login.toLowerCase() === user.toLowerCase()) {
                    permission = this.users[idx].permission;
                }
            }
            // now go through all groups, maybe it's better
            for (let ug of this.getUserGroups()) {
                if (ug.membership.map(member => member.login.toLowerCase()).indexOf(user.toLowerCase()) != -1) {
                    // user is in this group, let's see if we can bump him up
                    if (ug.permission == 3)
                        permission = 3;
                    if (ug.permission == 2 && permission != 3)
                        permission = 2;
                    if (ug.permission == 1 && permission <= 0)
                        permission = 1;
                }
            }
            return permission;
        }
        getUserNames(sorted) {
            let users = this.json.clone(this.userList);
            // add users from user groups if they are not directly in
            for (let ug of this.getUserGroups()) {
                for (let m of ug.membership) {
                    if (users.map(user => user.login).indexOf(m.login) == -1) {
                        users.push({
                            id: -1,
                            login: m.login,
                            email: m.email,
                            permission: -1,
                            firstName: m.firstName,
                            lastName: m.lastName
                        });
                    }
                }
            }
            if (sorted) {
                users.sort(function (a, b) { if (a.login < b.login)
                    return -1;
                else
                    return 1; });
            }
            return users;
        }
        getUserGroups() {
            return this.userGroups;
        }
        // TODO(modules): This is a performance hack. Better if private.
        addGroupMember(gid, user) {
            let gs = this.userGroups.filter(g => g.groupId == gid && g.membership.map(u => u.login).indexOf(user) == -1);
            if (gs.length) {
                gs[0].membership.push({ login: user });
            }
        }
        // TODO(modules): This is a performance hack. Better if private.
        removeGroupMember(gid, user) {
            let gs = this.userGroups.filter(g => g.groupId == gid && g.membership.map(u => u.login).indexOf(user) != -1);
            if (gs.length) {
                gs[0].membership = gs[0].membership.filter(m => m.login != user);
            }
        }
        // TODO(modules): This is a performance hack. Better if private.
        addSettings(s) {
            let that = this;
            this.settings = s;
            this.settingsString = {};
            this.settingsJSON = {};
            if (s.settingList) {
                for (let setting of s.settingList) {
                    that.settingsString[setting.key] = setting.value;
                    if (setting.value && setting.value.indexOf('{') !== -1 && setting.value.indexOf('<') !== 0) {
                        // assume it a json
                        var val = this.json.fromString(setting.value);
                        if (val.status === "ok") {
                            that.settingsJSON[setting.key] = val.value;
                        }
                    }
                }
            }
        }
        getSettings() {
            return this.settings.settingList;
        }
        getSetting(s) {
            return this.settingsString[s];
        }
        getSettingJSON(s, def) {
            return this.settingsJSON[s] ? this.settingsJSON[s] : def;
        }
        getDropDowns(dropdownId) {
            let that = this;
            let dropdowns = [];
            for (let key of Object.keys(this.settingsJSON)) {
                let setting = that.settingsJSON[key];
                if (setting.options && (!dropdownId || dropdownId == key)) {
                    dropdowns.push({
                        id: key,
                        label: key,
                        value: setting
                    });
                }
            }
            return dropdowns;
        }
        getTasksConfig() {
            return this.getSettingJSON("task_config");
        }
        getDHFConfig() {
            return this.getSettingJSON("dhf_config");
        }
        getExtrasConfig() {
            let extras = this.getSettingJSON("extras");
            return (extras ? extras : {});
        }
        getLabelsConfig() {
            return this.getSettingJSON("labels");
        }
        getIncludeConfig() {
            let conf = this.getSettingJSON("imports");
            return (conf ? conf : {
                copies: {
                    importMasters: [],
                    lockLabel: ""
                }, includes: {
                    importMasters: [],
                    lockLabel: ""
                }
            });
        }
        getQMSConfig() {
            // get qms config (as project setting, handle 2.1 and earlier setting in category setting)
            let setting = this.getSettingJSON("qms_config");
            if (!setting) {
                setting = ProjectSettings_1.qmsDefaultConfig; // as in 2.1 and earlier
            }
            for (let p of setting.publications) {
                if (p.publisher == "_") {
                    let legacy = this.getCategorySetting(p.toCategory, "publish");
                    p.publisher = legacy ? legacy.publisher : "";
                }
            }
            return setting;
        }
        getRiskConfig() {
            return this.getSettingJSON("risk_config");
        }
        getCategoryGroupConfig() {
            return this.getSettingJSON("category_groups");
        }
        getACLConfig() {
            return this.getSettingJSON(ProjectSettings_1.ACL_SETTING);
        }
        getTraceConfig() {
            return this.getSettingJSON("trace_config");
        }
        getNavigationBarConfig() {
            return this.getSettingJSON("nav_config");
        }
        getContextPagesConfig() {
            return this.getSettingJSON("project_help");
        }
        getMailConfig() {
            return this.getSettingJSON(ProjectSettings_1.mailConfigSetting);
        }
        getSearchConfig() {
            return this.getSettingJSON("search_config");
        }
        getLabelLockConfig() {
            return this.getSettingJSON("lockingLabels");
        }
        getTestConfig() {
            return this.getSettingJSON("xtc_config");
        }
        setSettingJSON(key, valueJSON) {
            this.settingsString[key] = JSON.stringify(valueJSON);
            this.settingsJSON[key] = valueJSON;
        }
        getSmartText() {
            return this.getSettingJSON(ProjectSettings_1.smartTextConfigSetting);
        }
        addCategorySetting(categorySetting) {
            if (!this.settings || !this.settings.categorySettingList) {
                return;
            }
            this.settings.categorySettingList.push(categorySetting);
        }
        getCategorySettings(category) {
            if (!this.settings || !this.settings.categorySettingList) {
                return [];
            }
            for (var idx = 0; idx < this.settings.categorySettingList.length; idx++) {
                if (this.settings.categorySettingList[idx].categoryShort === category && this.settings.categorySettingList[idx].settingList) {
                    return this.settings.categorySettingList[idx].settingList;
                }
            }
            return [];
        }
        // return the setting for a plugin or null if plugin or setting does not exist
        // TODO(modules): is this ever called?
        getPluginSetting(pluginId, setting) {
            /*
             * pluginSettingsList: [
                {
                    pluginId: 101,
                    settings: [ {
                        setting: "serverType",
                        value: "medical",
                        encrypted: false
                    }, {
                    setting: "baseUrl",
                        value: "https://matrixtest.atlassian.net",
                        encrypted: false
                    } ]
                }
            ]
             */
            if (!this.settings || !this.settings.pluginSettingsList) {
                return null;
            }
            for (var idx = 0; idx < this.settings.pluginSettingsList.length; idx++) {
                var ps = this.settings.pluginSettingsList[idx];
                if (ps.pluginId == pluginId) {
                    for (var jdx = 0; jdx < ps.settings.length; jdx++) {
                        if (ps.settings[jdx].setting === setting) {
                            return ps.settings[jdx].value;
                        }
                    }
                }
            }
            return null;
        }
        getPluginSettings() {
            return this.settings.pluginSettingsList;
        }
        // return tuples {category, field} of all categories which use a type
        // used for tisk traceability in DHF
        getFieldsOfType(fieldType, categoryType) {
            var hits = [];
            if (!this.settings) {
                return hits;
            }
            for (var idx = 0; idx < this.settings.categorySettingList.length; idx++) {
                var category = this.settings.categorySettingList[idx].categoryShort;
                if (!categoryType || categoryType === category) {
                    var cc = this.getItemConfiguration(category);
                    if (cc) {
                        var fields = cc.fieldList;
                        for (var fdx = 0; fdx < fields.length; fdx++) {
                            if (fields[fdx].fieldType === fieldType) {
                                //    var jconfig = this.json.fromString(fields[fdx].parameter);
                                hits.push({ category: category, field: fields[fdx] });
                            }
                        }
                    }
                }
            }
            return hits;
        }
        getCategorySetting(category, setting) {
            var catSettings = this.getCategorySettings(category);
            for (var idx = 0; idx < catSettings.length; idx++) {
                if (catSettings[idx].key === setting) {
                    var jconfig = this.json.fromString(catSettings[idx].value);
                    if (jconfig.status === 'ok') {
                        // apparently parsing went well
                    }
                    else if (jconfig.status === 'error') {
                        this.logger.log("error", "The category setting '" + catSettings[idx].key + "' has an invalid value. Ignoring it.");
                    }
                    else {
                        this.logger.log("warning", "The category setting '" + catSettings[idx].key + "' is empty.");
                    }
                    return jconfig.value;
                }
            }
            return null;
        }
        getCategories(noFolders) {
            let catgories = Object.keys(this.configuration);
            if (noFolders) {
                catgories.splice(catgories.indexOf("FOLDER"), 1);
            }
            return catgories;
        }
        getCategoryLabel(category) {
            if (this.configuration[category]) {
                return this.configuration[category].label;
            }
            return "";
        }
        getCategoryId(category) {
            let cd = this.settings.categoryList.categoryExtended.filter(function (cat) { return cat.category.shortLabel == category; });
            if (cd.length == 1) {
                return "" + cd[0].category.id;
            }
            return "";
        }
        // links for 1.5 and earlier (configured as category setting)
        getDownLinkTypes(category, required) {
            if (required) {
                return this.configuration[category].downLinksRequired;
            }
            return this.configuration[category].downLinksOptional;
        }
        // links for 1.5 and earlier (configured as category setting)
        getUpLinkTypes(category, required) {
            var up = [];
            for (var key in this.configuration) {
                if (key && key != category && this.configuration[key]) {
                    if (required && this.configuration[key].downLinksRequired.indexOf(category) != -1) {
                        up.push(key);
                    }
                    if (!required && this.configuration[key].downLinksOptional.indexOf(category) != -1) {
                        up.push(key);
                    }
                }
            }
            return up;
        }
        addCategories(config) {
            for (var idx = 0; config.categoryList.categoryExtended != undefined && idx < config.categoryList.categoryExtended.length; idx++) {
                this.addCategory(config.categoryList.categoryExtended[idx]);
            }
        }
        init(config) {
            this.addCategories(config);
            this.addSettings(config);
            this.addUsers(config.userPermission, config.groupPermission);
        }
        canEdit(category) {
            return this.canDo(category, "edit");
        }
        canEditTitle(category) {
            return this.canDo(category, "rename");
        }
        canMove(category) {
            return this.canDo(category, "move");
        }
        canCreate(category) {
            return this.canDo(category, "create");
        }
        canDelete(category) {
            return this.canDo(category, "delete");
        }
        canModifyLabels(category) {
            return this.canDo(category, "label");
        }
        canSign(category) {
            return this.canDo(category, "sign");
        }
        canReport(category) {
            return this.canDo(category, "report");
        }
        canDo(category, task) {
            if (!this.configuration[category])
                return false;
            if (!this.configuration[category].enable)
                return true; // no limitation specified for this user
            if (this.configuration[category].enable.indexOf(task) != -1)
                return true;
            return false;
        }
        addCategory(config) {
            this.configuration[config.category.shortLabel] = {
                fieldList: [],
                label: config.category.label,
                downLinksRequired: [],
                downLinksOptional: [],
                enable: config.enable
            };
            var fieldList = config.fieldList.field;
            if (!fieldList) {
                fieldList = [];
            }
            for (var idx = 0; idx < fieldList.length; idx++) {
                var jconfig = this.json.fromString(fieldList[idx].parameter);
                if (jconfig.status === 'ok') {
                    // apparently parsing went well
                }
                else if (jconfig.status === 'error') {
                    this.logger.log("error", "The field with id '" + fieldList[idx].id + "' has an invalid value. Ignoring it.");
                }
                else {
                    // quite normal
                }
                fieldList[idx].parameterJson = jconfig.value;
                this.configuration[config.category.shortLabel].fieldList.push(fieldList[idx]);
                if (fieldList[idx].fieldType === "links") {
                    if (fieldList[idx].parameterJson && fieldList[idx].parameterJson.linkTypes) {
                        for (var l = 0; l < fieldList[idx].parameterJson.linkTypes.length; l++) {
                            var dl = fieldList[idx].parameterJson.linkTypes[l];
                            if (this.json.isTrue(dl.required)) {
                                this.configuration[config.category.shortLabel].downLinksRequired.push(dl.type);
                            }
                            else {
                                this.configuration[config.category.shortLabel].downLinksOptional.push(dl.type);
                            }
                        }
                    }
                }
            }
        }
        getItemConfiguration(category) {
            return this.configuration[category];
        }
        getFieldId(category, fieldLabel) {
            var cc = this.getItemConfiguration(category);
            if (!cc) {
                return 0;
            }
            var fields = cc.fieldList;
            for (var idx = 0; idx < fields.length; idx++) {
                if (fields[idx].label.toLowerCase() === fieldLabel.toLowerCase()) {
                    return fields[idx].id;
                }
            }
            return 0;
        }
        getFields(category) {
            var cc = this.getItemConfiguration(category);
            if (!cc) {
                return null;
            }
            return cc.fieldList;
        }
        getFieldByName(category, name) {
            let fields = this.getFields(category).filter(function (field) { return field.label && field.label.toLowerCase() == name.toLowerCase(); });
            if (fields.length == 1)
                return fields[0];
            return undefined;
        }
        getFieldById(category, fieldId) {
            var cc = this.getItemConfiguration(category);
            if (!cc) {
                return null;
            }
            let fields = cc.fieldList.filter(function (field) { return field.id == fieldId; });
            return fields.length ? fields[0] : null;
        }
        getFieldConfig(fieldId) {
            for (let category of this.getCategories()) {
                let field = this.getFieldById(category, fieldId);
                if (field) {
                    return field.parameterJson;
                }
            }
            return null;
        }
        getFieldName(fieldId) {
            for (let category of this.getCategories()) {
                let field = this.getFieldById(category, fieldId);
                if (field) {
                    return field.label;
                }
            }
            return "";
        }
        getFieldType(category, fieldId) {
            var cc = this.getItemConfiguration(category);
            if (!cc) {
                return null;
            }
            var fields = cc.fieldList;
            for (var idx = 0; idx < fields.length; idx++) {
                // note this is ==: sometimes it is an int sometimes a string 
                if (fields[idx].id == fieldId) {
                    return fields[idx].fieldType;
                }
            }
            return null;
        }
        // gets required or optional up or downlink categories for a given category
        // it uses the project setting for the trace configuration if existing,
        // the category setting (1.5 and earlier) otherwise
        getLinkTypes(category, down, required) {
            var tc = this.getTraceConfig();
            if (!tc) {
                // use 1.5 and before rules
                if (down) {
                    return this.getDownLinkTypes(category, required);
                }
                else {
                    return this.getUpLinkTypes(category, required);
                }
            }
            // get the up/down rule from project setting
            var updown;
            for (let rule of tc.rules) {
                if (rule.category === category) {
                    updown = down ? rule.down_rules : rule.up_rules;
                }
            }
            if (!updown) {
                // no rules.. 
                return [];
            }
            var result = [];
            // rules exist get all required or option links
            for (let updownRule of updown) {
                if (updownRule.rule === "must_have" && updownRule.any_of && required) {
                    for (let any of updownRule.any_of) {
                        // add to must have
                        if (result.indexOf(any) === -1) {
                            result.push(any);
                        }
                    }
                }
                else if (updownRule.rule === "can_have" && updownRule.any_of && !required) {
                    for (let any of updownRule.any_of) {
                        // add to can have
                        if (result.indexOf(any) === -1) {
                            result.push(any);
                        }
                    }
                }
            }
            return result;
        }
        // gets required or optional up or downlink categories for a given category
        // including reason why they should / could exist
        // it uses the project setting for the trace configuration if existing,
        // the category setting (1.5 and earlier) otherwise
        getLinkInfo(category, down, required, groupByRule) {
            var tc = this.getTraceConfig();
            if (!tc) {
                var links = [];
                // use 1.5 and before rules
                if (down) {
                    links = this.getDownLinkTypes(category, required);
                }
                else {
                    links = this.getUpLinkTypes(category, required);
                }
                var result = [];
                for (var idx = 0; idx < links.length; idx++) {
                    result.push({ category: links[idx], reason: (required ? "required" : "optional") });
                }
                return result;
            }
            // get the up/down rule from project setting
            var updown;
            for (let rule of tc.rules) {
                if (rule.category === category) {
                    updown = down ? rule.down_rules : rule.up_rules;
                }
            }
            if (!updown) {
                // no rules.. 
                return [];
            }
            var linkInfo = [];
            // rules exist get all required or optional links
            for (let updownRule of updown) {
                if (updownRule.rule === "must_have" && updownRule.any_of && required) {
                    if (groupByRule) {
                        linkInfo.push({ category: updownRule.any_of, reason: updownRule.name });
                    }
                    else {
                        for (let anys of updownRule.any_of) {
                            // add to must have
                            linkInfo.push({ category: anys, reason: updownRule.name });
                        }
                    }
                }
                else if (updownRule.rule === "can_have" && updownRule.any_of && !required) {
                    if (groupByRule) {
                        linkInfo.push({ category: updownRule.any_of, reason: updownRule.name });
                    }
                    else {
                        for (let anys of updownRule.any_of) {
                            // add to can have
                            linkInfo.push({ category: anys, reason: updownRule.name });
                        }
                    }
                }
            }
            return linkInfo;
        }
        getMitigations() {
            let risk_config = this.getRiskConfig();
            // get the mitigations from the project setting
            let global = [];
            if (risk_config && risk_config.mitigationTypes) {
                global = risk_config.mitigationTypes.map(function (mt) { return mt.type; });
            }
            // for each field, check if there's a field setting, if not use the global setting
            let mitCats = {};
            for (let riskFieldInfo of this.getFieldsOfType("risk2")) {
                mitCats[riskFieldInfo.category] = [];
                let fieldConfig = riskFieldInfo.field.parameterJson;
                if (fieldConfig && fieldConfig.riskConfig) {
                    mitCats[riskFieldInfo.category] =
                        fieldConfig.riskConfig.mitigationTypes.map(mt => mt.type);
                }
                else {
                    mitCats[riskFieldInfo.category] = global;
                }
            }
            return mitCats;
        }
        /** return cleanup rules, if there's a project setting that wins, if there's no rules or it's disabled it returns -1 */
        getCleanupRules() {
            return this.getSettingJSON("htmlCleanup");
        }
    }
    exports.ItemConfiguration = ItemConfiguration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 68:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.JSONTools = void 0;
    class JSONTools {
        constructor(logger) {
            this.logger = logger;
        }
        cloner2(src) {
            return $.extend(true, {}, { x: src }).x;
        }
        mergeOptions(defaultOptions, options) {
            let newOptions = this.clone(defaultOptions);
            // make sure there is a parameter object
            if (!newOptions.parameter) {
                newOptions['parameter'] = {};
            }
            // copy parameters one by one
            if (options.parameter) {
                for (var name in options.parameter) {
                    newOptions.parameter[name] = options.parameter[name];
                }
            }
            // copy other values
            for (var name in options) {
                if (name != 'parameter') {
                    newOptions[name] = options[name];
                }
            }
            // use parameters to overwrite some default values
            if (this.isTrue(newOptions.parameter.readonly)) {
                newOptions.canEdit = false;
            }
            return newOptions;
        }
        // overwrite default options
        setOptions(newOptions, options) {
            // make sure there is a parameter object
            if (!newOptions.parameter) {
                newOptions['parameter'] = {};
            }
            // copy parameters one by one
            if (options.parameter) {
                for (var name in options.parameter) {
                    newOptions.parameter[name] = options.parameter[name];
                }
            }
            // copy other values
            for (var name in options) {
                if (name != 'parameter') {
                    newOptions[name] = options[name];
                }
            }
            // use parameters to overwrite some default values
            if (this.isTrue(newOptions.parameter.readonly)) {
                newOptions.canEdit = false;
            }
            // handle readonly for ACLs
            if (this.isTrue(newOptions.parameter.readonlyACL)) {
                newOptions.canEdit = false;
            }
            return newOptions;
        }
        isTrue(obj) {
            if (obj && (obj.toString().toLowerCase() === "true" || obj.toString() === "1")) {
                return true;
            }
            return false;
        }
        isFalse(obj) {
            if (typeof obj == "undefined") {
                return false;
            }
            if (obj == false || obj == 0 || obj.toString().toLowerCase() === "false" || obj.toString() === "0") {
                return true;
            }
            return false;
        }
        fromString(str) {
            var result = { status: 'empty', value: {} };
            if (str && str !== "") {
                // first replace all single quotes outside of double quotes with "
                var strp = str.replace(/(')(?=(?:[^"]|"[^"]*")*$)/g, '"').replace(/(\r\n|\n|\r)/gm, "");
                try {
                    result.value = JSON.parse(strp);
                    result.status = 'ok';
                }
                catch (err) {
                    try {
                        result.value = JSON.parse(str);
                        result.status = 'ok';
                    }
                    catch (err) {
                        this.logger.log("error", "Error trying to parse configuration parameter: " + str);
                        this.logger.log("error", "Error was:" + err);
                        result.status = 'error';
                    }
                }
            }
            return result;
        }
        clone(src) {
            var b = this.cloner2(src);
            return b;
        }
    }
    exports.JSONTools = JSONTools;
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 70:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.LoggerTools = exports.SERVER_LOG_LEVEL = void 0;
    var SERVER_LOG_LEVEL;
    (function (SERVER_LOG_LEVEL) {
        SERVER_LOG_LEVEL["WEIRD_STATE"] = "WEIRD_STATE";
        SERVER_LOG_LEVEL["BROKEN_STATE"] = "BROKEN_STATE";
    })(SERVER_LOG_LEVEL || (SERVER_LOG_LEVEL = {}));
    exports.SERVER_LOG_LEVEL = SERVER_LOG_LEVEL;
    class LoggerTools {
        constructor(functionRenderHumanDate) {
            this.verbose = false;
            this.lastLogMsg = "none";
            this.logData = [];
            this.logIdx = 0;
            this.logSize = 50;
            this.functionRenderHumanDate = functionRenderHumanDate;
        }
        log(id, msg) {
            if (!this.verbose && id === "debug") {
                return;
            }
            msg = DOMPurify.sanitize(msg) + '';
            if (!msg) {
                return;
            }
            console.log(id + ":" + msg);
            if (this.lastLogMsg === msg) {
                this.logData[this.logIdx] = this.logData[this.logIdx] + ".";
            }
            else {
                this.logIdx++;
                if (this.logIdx === this.logSize) {
                    this.logIdx = 0;
                }
                // this.logData[this.logIdx] = ml.UI.DateTime.renderHumanDate(new Date()) + " [" + id + "]: " + msg;
                this.logData[this.logIdx] = this.functionRenderHumanDate(new Date()) + " [" + id + "]: " + msg;
                this.lastLogMsg = msg;
            }
        }
        debug(message) {
            this.log("debug", message);
        }
        info(message) {
            this.log("info", message);
        }
        warning(message) {
            this.log("warning", message);
        }
        error(message) {
            this.log("error", message);
        }
        getLog() {
            var msg = "";
            for (var idx = this.logIdx + 1; idx < this.logIdx + this.logSize + 1; idx++) {
                if (this.logData[idx % this.logSize]) {
                    msg += this.logData[idx % this.logSize] + "\n";
                }
            }
            return msg;
        }
    }
    exports.LoggerTools = LoggerTools;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, RefLinkDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.SimpleItemTools = void 0;
    // Implements ItemTools functionality with minimal dependencies
    class SimpleItemTools {
        // extract different parts from item ids, like version, category, ...
        parseRef(itemRef, project, matrixBaseUrl) {
            let ref = itemRef; // e.g. F-REQ-13-v12
            var result = {
                id: "",
                number: 0,
                version: 0,
                type: "",
                isFolder: false,
                url: "",
                link: "",
                linkv: "" // <a href=url>url</a>
            };
            var vp = ref.indexOf("-v");
            if (vp !== -1) {
                result.version = parseInt(ref.substr(vp + 2));
                ref = ref.substr(0, vp);
            }
            result.id = ref;
            if (ref.indexOf("F-") === 0) {
                result.isFolder = true;
                ref = ref.substr(2);
            }
            var parts = ref.split("-");
            if (parts.length > 1) {
                result.type = parts[0];
                result.number = Number(parts[1]);
            }
            result.url = matrixBaseUrl + "/" + project + "/" + itemRef;
            result.link = "<a style='color:blue !important' href='" + result.url + "'>" + itemRef + "</a>";
            result.linkv = "<a style='color:blue !important' href='" + result.url + "'>" + result.url + "</a>";
            return result;
        }
        ;
        getCreator(item) {
            return item.history[item.history.length - 1].user;
        }
        getLastEditor(item) {
            return item.history.length > 0 ? item.history[0].user : "";
        }
        // render a list of item ids, to show up as <b>ID</b> name, <b>ID</b> name, 
        refListToDisplayString(inputItems, prefix, getTitleFunction, shorten) {
            function makeLink(itemobj, shorten) {
                if (!itemobj.projectShortLabel) {
                    return "<b>" + itemobj.to + "</b>" + (shorten ? "" : (" " + getTitleFunction(itemobj.to)));
                }
                var label = itemobj.projectShortLabel + ":" + itemobj.to;
                return "#" + itemobj.projectShortLabel + "/" + itemobj.to + "#";
                //return "<a class='crossProjectLink' title='" + itemobj.title + "' href='" + matrixBaseUrl + "/" + itemobj.projectShortLabel + "/" + itemobj.to + "' target='_blank'>" + label + "</a> ";
            }
            if (inputItems) {
                // build the list ItemId Title can take a long time, e.g. if there's dozens of search results and the list should be a short list. In that case only show names if there's less than 5 items 
                let refs = inputItems.map(function (inputItem) { return makeLink(inputItem, shorten && inputItems.length > 4 ? true : false); });
                let list = refs.join(", ");
                if (shorten && list.replace(/<b>/g, "").replace(/<\/b>/g, "").length > shorten) {
                    refs = inputItems.map(function (inputItem) { return makeLink(inputItem, true); });
                    list = refs.join(", ");
                }
                if (shorten && list.replace(/<b>/g, "").replace(/<\/b>/g, "").length > shorten) {
                    list = "<b>" + list.replace(/<b>/g, "").replace(/<\/b>/g, "").substr(0, shorten - 4) + " ...</b>";
                }
                if (prefix) {
                    list = prefix + " " + list;
                }
                return list;
            }
            else {
                return "";
            }
        }
        ;
        renderLink(itemId, itemTitle, newWindow) {
            let dbt = itemTitle;
            return $("<div>").refLink({
                id: itemId,
                folder: false,
                title: dbt ? dbt : "(deleted)",
                style: newWindow ? RefLinkDefines_1.refLinkStyle.link : RefLinkDefines_1.refLinkStyle.selectTree,
                tooltip: RefLinkDefines_1.refLinkTooltip.html
            });
        }
        // update and changes to reference lists
        updateReferences(oldReferences, newReferences, fromId, toId) {
            var changeList = [];
            // find links to add
            for (var idx = 0; idx < newReferences.length; idx++) {
                var found = false;
                for (var jdx = 0; jdx < oldReferences.length; jdx++) {
                    if (newReferences[idx].to === oldReferences[jdx].to) {
                        found = true;
                        continue;
                    }
                }
                if (!found) {
                    if (fromId) {
                        changeList.push({ action: 'addLink', fromId: fromId, toId: newReferences[idx].to });
                    }
                    else if (toId) {
                        changeList.push({ action: 'addLink', fromId: newReferences[idx].to, toId: toId });
                    }
                }
            }
            // find links to remove
            for (var jdx = 0; jdx < oldReferences.length; jdx++) {
                var found = false;
                for (var idx = 0; idx < newReferences.length; idx++) {
                    if (newReferences[idx].to === oldReferences[jdx].to) {
                        found = true;
                        continue;
                    }
                }
                if (!found) {
                    if (fromId) {
                        changeList.push({ action: 'removeLink', fromId: fromId, toId: oldReferences[jdx].to });
                    }
                    else if (toId) {
                        changeList.push({ action: 'removeLink', fromId: oldReferences[jdx].to, toId: toId });
                    }
                }
            }
            return changeList;
        }
        ;
        // clone item from IItemGet to IItemPut
        clone(item, copyLabels) {
            var newItem = {};
            $.each(item, function (idx, val) {
                if (idx !== "maxVersion" && idx !== "labels" && idx !== "labels" && idx !== "downLinks" && idx !== "upLinks" && idx !== "type" && idx !== "children" && idx !== "hide" && idx !== "history" && idx !== "isUnselected" && idx !== "modDate" && idx !== "restricted" && idx !== "upLinkList" && idx !== "userRights") {
                    newItem[idx] = val;
                }
            });
            if (copyLabels) {
                newItem.labels = item.labels.join(",");
            }
            else {
                newItem.labels = "";
            }
            return newItem;
        }
        sort(a, b, project, matrixBaseUrl) {
            let at = this.parseRef(a, project, matrixBaseUrl);
            let bt = this.parseRef(b, project, matrixBaseUrl);
            if (at.type == bt.type) {
                if (at.isFolder && !bt.isFolder)
                    return -1;
                if (bt.isFolder && !at.isFolder)
                    return 1;
                return at.number - bt.number;
            }
            return a < b ? -1 : 1;
        }
    }
    exports.SimpleItemTools = SimpleItemTools;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 190:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(191);
var util = __webpack_require__(192);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(193);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ 192:
/***/ ((module) => {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(184);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=consoleapi.js.map