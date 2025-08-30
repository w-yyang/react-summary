"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseRedux_tsx"],{

/***/ "./src/pages/UseRedux.tsx":
/*!********************************!*\
  !*** ./src/pages/UseRedux.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar store_1 = __importDefault(__webpack_require__(/*! ../stores/use-redux/store */ \"./src/stores/use-redux/store.ts\"));\nvar reducer_1 = __webpack_require__(/*! ../stores/use-redux/reducer */ \"./src/stores/use-redux/reducer.ts\");\n// 有问题 待修复\nvar default_1 = /** @class */ (function (_super) {\n    __extends(default_1, _super);\n    function default_1(props) {\n        var _this = _super.call(this, props) || this;\n        _this.handleClick = function () {\n            store_1.default.dispatch((0, reducer_1.changeVal)('asdfsgdhfjg'));\n        };\n        _this.state = {\n            value: store_1.default.getState().value\n        };\n        return _this;\n    }\n    default_1.prototype.componentDidMount = function () {\n        var _this = this;\n        store_1.default.subscribe(function () {\n            console.log('监听函数', store_1.default.getState());\n            _this.setState({\n                value: store_1.default.getState().value\n            });\n        });\n    };\n    default_1.prototype.render = function () {\n        return (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(\"button\", { onClick: this.handleClick }, \"\\u70B9\\u51FB\"),\n            react_1.default.createElement(\"div\", null, this.state.value)));\n    };\n    return default_1;\n}(react_1.default.Component));\nexports[\"default\"] = default_1;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseRedux.tsx?");

/***/ }),

/***/ "./src/stores/use-redux/reducer.ts":
/*!*****************************************!*\
  !*** ./src/stores/use-redux/reducer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.changeVal = void 0;\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/cjs/index.js\");\nvar initState = {\n    value: '默认值'\n};\nvar reducer = (0, toolkit_1.createSlice)({\n    name: 'reducer',\n    initialState: initState,\n    reducers: {\n        changeVal: function (state, _a) {\n            var payload = _a.payload;\n            state.value = payload;\n        }\n    }\n});\nexports.changeVal = reducer.actions.changeVal;\nexports[\"default\"] = reducer.reducer;\n\n\n//# sourceURL=webpack://react-summary/./src/stores/use-redux/reducer.ts?");

/***/ }),

/***/ "./src/stores/use-redux/store.ts":
/*!***************************************!*\
  !*** ./src/stores/use-redux/store.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/cjs/index.js\");\nvar reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ \"./src/stores/use-redux/reducer.ts\"));\nvar store = (0, toolkit_1.configureStore)({\n    reducer: reducer_1.default\n});\nexports[\"default\"] = store;\n\n\n//# sourceURL=webpack://react-summary/./src/stores/use-redux/store.ts?");

/***/ })

}]);