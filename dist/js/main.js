/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/header/header.js":
/*!**************************************!*\
  !*** ./src/scripts/header/header.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var eyeLeftInner = document.getElementById('svg_2');
var eyeLeftPupil = document.getElementById('svg_4');
var eyeRightPupil = document.getElementById('svg_5');
var innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
var innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
var pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
var pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
var xMovement = innerEyeWidth - pupilWidth;
var yMovement = innerEyeHeight - pupilHeight;
var sootballtest = document.getElementById('sootballtest');
var containerWidth = sootballtest.getBoundingClientRect().width;
var containerHeight = sootballtest.getBoundingClientRect().height;
window.addEventListener('mousemove', updateEyePosition);
var posX = 0;
var posY = 0;

function updateEyePosition(event) {
  if (event.clientX < document.body.clientWidth) {
    posX = (event.clientX / document.body.clientWidth * 2 - 1) * xMovement;
  }

  if (event.clientY < document.body.clientHeight) {
    posY = (event.clientY / document.body.clientHeight * 2 - 1) * yMovement;
  }

  eyeLeftPupil.style.transform = "translate(".concat(posX, "px, ").concat(posY, "px)");
  eyeRightPupil.style.transform = "translate(".concat(posX, "px, ").concat(posY, "px)");
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/scripts/header/header.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_header__WEBPACK_IMPORTED_MODULE_0__);
alert('Hello World!');


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: $map: null is not a map.\n   ╷\n41 │   $default: map-get($typo, default);\n   │             ^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles/mixins/_typography.scss 41:13  typography()\n  src/styles/blocks/_header.scss 27:9       @import\n  src/styles/_blocks.scss 2:9               @import\n  /Users/nicolahogg/code/nikki-website/src/styles/style.scss 11:9                                root stylesheet\n    at runLoaders (/Users/nicolahogg/code/nikki-website/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /Users/nicolahogg/code/nikki-website/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/nicolahogg/code/nikki-website/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/nicolahogg/code/nikki-website/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/Users/nicolahogg/code/nikki-website/node_modules/sass-loader/dist/index.js:73:7)\n    at Function.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:56230:16)\n    at _render_closure1.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:34691:12)\n    at _RootZone.runBinary$3$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20227:18)\n    at _RootZone.runBinary$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20231:19)\n    at _FutureListener.handleError$1 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18696:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18984:40)\n    at Object._Future__propagateToListeners (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3500:88)\n    at _Future._completeError$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18820:9)\n    at _AsyncAwaitCompleter.completeError$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18219:12)\n    at Object._asyncRethrow (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3256:17)\n    at /Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:10615:20\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3279:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18240:12)\n    at _awaitOnObject_closure0.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18232:25)\n    at _RootZone.runBinary$3$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20227:18)\n    at _RootZone.runBinary$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20231:19)\n    at _FutureListener.handleError$1 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18696:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18984:40)\n    at Object._Future__propagateToListeners (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3500:88)\n    at _Future._completeError$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18820:9)\n    at _AsyncAwaitCompleter.completeError$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18219:12)\n    at Object._asyncRethrow (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3256:17)\n    at /Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:12510:20\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3279:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18240:12)\n    at _awaitOnObject_closure0.call$2 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18232:25)\n    at _RootZone.runBinary$3$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20227:18)\n    at _RootZone.runBinary$3 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:20231:19)\n    at _FutureListener.handleError$1 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18696:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:18984:40)\n    at Object._Future__propagateToListeners (/Users/nicolahogg/code/nikki-website/node_modules/sass/sass.dart.js:3500:88)");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nicolahogg/code/nikki-website/src/scripts/main.js */"./src/scripts/main.js");
module.exports = __webpack_require__(/*! /Users/nicolahogg/code/nikki-website/src/styles/style.scss */"./src/styles/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map