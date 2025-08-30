"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_ReactReduxHooks_tsx"],{

/***/ "./src/pages/ReactReduxHooks.tsx":
/*!***************************************!*\
  !*** ./src/pages/ReactReduxHooks.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar react_redux_2 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar store_1 = __importDefault(__webpack_require__(/*! ../stores/use-react-redux/store */ \"./src/stores/use-react-redux/store.ts\"));\nvar reducer_1 = __webpack_require__(/*! ../stores/use-react-redux/reducer */ \"./src/stores/use-react-redux/reducer.ts\");\nfunction ReactReduxHooks() {\n    var storeCount = (0, react_redux_1.useSelector)(function (state) { return state.testReducer.count; });\n    var dispatch = (0, react_redux_2.useDispatch)();\n    var handleAdd = function () {\n        dispatch((0, reducer_1.addAction)());\n    };\n    var handleSub = function () {\n        dispatch((0, reducer_1.subAction)());\n    };\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"p\", null, storeCount),\n        react_1.default.createElement(\"button\", { onClick: function () { return handleAdd(); } }, \"+1\"),\n        react_1.default.createElement(\"button\", { onClick: function () { return handleSub(); } }, \"-1\")));\n}\nvar default_1 = /** @class */ (function (_super) {\n    __extends(default_1, _super);\n    function default_1() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    default_1.prototype.render = function () {\n        return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },\n            react_1.default.createElement(ReactReduxHooks, null)));\n    };\n    return default_1;\n}(react_1.default.Component));\nexports[\"default\"] = default_1;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/ReactReduxHooks.tsx?");

/***/ }),

/***/ "./src/stores/use-react-redux/reducer.ts":
/*!***********************************************!*\
  !*** ./src/stores/use-react-redux/reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.subAction = exports.addAction = void 0;\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/cjs/index.js\");\nvar testSlice = (0, toolkit_1.createSlice)({\n    name: 'test',\n    initialState: {\n        count: 0\n    },\n    reducers: {\n        addAction: function (state) {\n            state.count++;\n        },\n        subAction: function (state) {\n            state.count--;\n        }\n    }\n});\nexports.addAction = (_a = testSlice.actions, _a.addAction), exports.subAction = _a.subAction;\nexports[\"default\"] = testSlice.reducer;\n\n\n//# sourceURL=webpack://react-summary/./src/stores/use-react-redux/reducer.ts?");

/***/ }),

/***/ "./src/stores/use-react-redux/store.ts":
/*!*********************************************!*\
  !*** ./src/stores/use-react-redux/store.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/cjs/index.js\");\nvar reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ \"./src/stores/use-react-redux/reducer.ts\"));\nvar store = (0, toolkit_1.configureStore)({\n    reducer: {\n        testReducer: reducer_1.default\n    }\n});\nexports[\"default\"] = store;\n\n\n//# sourceURL=webpack://react-summary/./src/stores/use-react-redux/store.ts?");

/***/ })

}]);