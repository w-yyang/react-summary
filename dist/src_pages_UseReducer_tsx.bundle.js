"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseReducer_tsx"],{

/***/ "./src/pages/UseReducer.tsx":
/*!**********************************!*\
  !*** ./src/pages/UseReducer.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar initState = {\n    name: '',\n    count: 0\n};\nfunction initFunc(initObj) {\n    return {\n        count: initObj.count,\n        name: initObj.name\n    };\n}\nfunction reducer(state, action) {\n    switch (action.type) {\n        case \"add\":\n            return __assign(__assign({}, state), { count: state.count + 1 });\n        case \"sub\":\n            return __assign(__assign({}, state), { count: state.count - 1 });\n        case \"strchange\":\n            return __assign(__assign({}, state), { name: action.value });\n        default:\n            return new Error(\"未定义动作\");\n    }\n}\nfunction default_1() {\n    // 三个参数 reducer 初始化state 函数初始化\n    // useReducer类似useState\n    var _a = (0, react_1.useReducer)(reducer, initState, initFunc), state = _a[0], dispatch = _a[1];\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"h3\", null, \"useReducer\"),\n        state.count,\n        react_1.default.createElement(\"ul\", null,\n            react_1.default.createElement(\"li\", { onClick: function () { return dispatch({ type: \"add\" }); } }, \"+1\"),\n            react_1.default.createElement(\"li\", { onClick: function () { return dispatch({ type: \"sub\" }); } }, \"-1\"),\n            react_1.default.createElement(\"li\", null,\n                react_1.default.createElement(\"input\", { type: \"text\", value: state.name, onChange: function (event) { return dispatch({ type: \"strchange\", value: event.target.value }); } })))));\n}\n;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseReducer.tsx?");

/***/ })

}]);