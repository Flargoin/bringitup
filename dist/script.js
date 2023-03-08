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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\User\\Desktop\\bbb\\src\\js\\main.js: Unexpected token (46:0)\n\n\u001b[0m \u001b[90m 44 |\u001b[39m     \u001b[36mnew\u001b[39m \u001b[33mDiffrence\u001b[39m(\u001b[32m'.officerold'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'.officernew'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'.officer__card-item'\u001b[39m)\u001b[33m.\u001b[39minit()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 |\u001b[39m     \u001b[36mnew\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 46 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:64:32)\n    at constructor (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:364:12)\n    at Parser.raise (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:3253:19)\n    at Parser.unexpected (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:3283:16)\n    at Parser.parseExprAtom (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11248:22)\n    at Parser.parseNoCallExpr (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11074:38)\n    at Parser.parseNewCallee (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11560:24)\n    at Parser.parseNew (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11549:10)\n    at Parser.parseNewOrNewTarget (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11546:17)\n    at Parser.parseExprAtom (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11155:21)\n    at Parser.parseExprSubscripts (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10859:23)\n    at Parser.parseUpdate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10842:21)\n    at Parser.parseMaybeUnary (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10818:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10656:61)\n    at Parser.parseExprOps (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10661:23)\n    at Parser.parseMaybeConditional (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10638:23)\n    at Parser.parseMaybeAssign (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10599:21)\n    at Parser.parseExpressionBase (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10553:23)\n    at C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10549:39\n    at Parser.allowInAnd (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:12239:16)\n    at Parser.parseExpression (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10549:17)\n    at Parser.parseStatementContent (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:12682:23)\n    at Parser.parseStatementLike (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:12548:17)\n    at Parser.parseStatementListItem (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:12528:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:13120:61)\n    at Parser.parseBlockBody (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:13113:10)\n    at Parser.parseBlock (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:13101:10)\n    at Parser.parseFunctionBody (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11911:24)\n    at Parser.parseArrowExpression (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11886:10)\n    at Parser.parseParenAndDistinguishExpression (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11489:12)\n    at Parser.parseExprAtom (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11128:23)\n    at Parser.parseExprSubscripts (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10859:23)\n    at Parser.parseUpdate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10842:21)\n    at Parser.parseMaybeUnary (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10818:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10656:61)\n    at Parser.parseExprOps (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10661:23)\n    at Parser.parseMaybeConditional (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10638:23)\n    at Parser.parseMaybeAssign (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10599:21)\n    at C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10569:39\n    at Parser.allowInAnd (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:12244:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10569:17)\n    at Parser.parseExprListItem (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11996:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:11051:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10966:29)\n    at Parser.parseSubscript (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10901:19)\n    at Parser.parseSubscripts (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10872:19)\n    at Parser.parseExprSubscripts (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10863:17)\n    at Parser.parseUpdate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10842:21)\n    at Parser.parseMaybeUnary (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10818:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\User\\Desktop\\bbb\\node_modules\\@babel\\parser\\lib\\index.js:10656:61)");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map