(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["matrixClientSdk"] = factory();
	else
		root["matrixClientSdk"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewControlColumns: () => (/* binding */ ReviewControlColumns)
/* harmony export */ });
;
;
class ReviewControlColumns {
}
ReviewControlColumns.COL_COMMENT_LOG = "commentlog";
ReviewControlColumns.COL_ITEM = "reviewitem";
ReviewControlColumns.COL_VERSION = "_version";
ReviewControlColumns.COL_ANNOTATIONS = "_annotation";


/***/ }),

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchState: () => (/* binding */ SearchState),
/* harmony export */   SearchUpdate: () => (/* binding */ SearchUpdate),
/* harmony export */   SelectMode: () => (/* binding */ SelectMode)
/* harmony export */ });

var SelectMode;
(function (SelectMode) {
    /*** DO NOT CHANGED numbers use from baseControl */
    SelectMode[SelectMode["none"] = 0] = "none";
    SelectMode[SelectMode["items"] = 1] = "items";
    SelectMode[SelectMode["folders"] = 2] = "folders";
    SelectMode[SelectMode["singleItem"] = 3] = "singleItem";
    SelectMode[SelectMode["singleFolder"] = 4] = "singleFolder";
    SelectMode[SelectMode["independent"] = 5] = "independent";
    SelectMode[SelectMode["auto"] = 6] = "auto";
    SelectMode[SelectMode["independentAuto"] = 7] = "independentAuto";
    SelectMode[SelectMode["autoPrecise"] = 8] = "autoPrecise"; //  if you select a folder it select everything within, if you unselect something it unselects all parents
})(SelectMode || (SelectMode = {}));
var SearchState;
(function (SearchState) {
    SearchState[SearchState["NoSearch"] = 0] = "NoSearch";
    SearchState[SearchState["FilterDone"] = 1] = "FilterDone";
    SearchState[SearchState["ServerRunning"] = 2] = "ServerRunning";
    SearchState[SearchState["ServerDone"] = 3] = "ServerDone"; // the search results returned
})(SearchState || (SearchState = {}));
var SearchUpdate;
(function (SearchUpdate) {
    SearchUpdate[SearchUpdate["inserted_node"] = 1] = "inserted_node";
    SearchUpdate[SearchUpdate["updated_rec"] = 2] = "updated_rec";
    SearchUpdate[SearchUpdate["filter_status_changed"] = 3] = "filter_status_changed";
    SearchUpdate[SearchUpdate["title_changed"] = 4] = "title_changed";
    SearchUpdate[SearchUpdate["item_dropped"] = 5] = "item_dropped"; // an item was draged and dropped to a new place (if this happens after creating it , it must be refreshed)
})(SearchUpdate || (SearchUpdate = {}));


/***/ }),

/***/ 251:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(240), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ScheduleReviewDefines_1, ProjectViewDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.registerPlugin = exports.getSdkInstance = exports.ReviewControlColumns = exports.SelectMode = void 0;
    Object.defineProperty(exports, "ReviewControlColumns", ({ enumerable: true, get: function () { return ScheduleReviewDefines_1.ReviewControlColumns; } }));
    Object.defineProperty(exports, "SelectMode", ({ enumerable: true, get: function () { return ProjectViewDefines_1.SelectMode; } }));
    function isOutsideMatrixApp() {
        return !(window && window.matrixSdk);
    }
    function getSdkInstance() {
        if (isOutsideMatrixApp()) {
            throw new Error("Client SDK can only be used within Matrix Requirements application");
        }
        return window.matrixSdk;
    }
    exports.getSdkInstance = getSdkInstance;
    function registerPlugin(plugin) {
        getSdkInstance().plugins.register(plugin);
    }
    exports.registerPlugin = registerPlugin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(251);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=clientSdk.js.map