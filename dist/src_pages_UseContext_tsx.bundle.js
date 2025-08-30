"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseContext_tsx"],{

/***/ "./src/pages/UseContext.tsx":
/*!**********************************!*\
  !*** ./src/pages/UseContext.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar initValObj = {\n    num: 0,\n    add: function (num) { }\n};\nvar GlobalContext = (0, react_1.createContext)(initValObj);\nvar GlobalProvider = function (_a) {\n    var children = _a.children;\n    var _b = (0, react_1.useState)(0), numState = _b[0], setNumState = _b[1];\n    var valueObj = {\n        num: numState,\n        add: function (baseNum) {\n            setNumState(function (prev) { return prev + baseNum; });\n        }\n    };\n    return (react_1.default.createElement(GlobalContext.Provider, { value: valueObj }, children));\n};\nvar ChildElem = function () {\n    var globalObj = (0, react_1.useContext)(GlobalContext);\n    console.log('globalObj', globalObj);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"span\", null, globalObj.num),\n        react_1.default.createElement(\"button\", { onClick: function () { return globalObj.add(4); } }, \"add func\")));\n};\nfunction default_1() {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(GlobalProvider, null,\n            react_1.default.createElement(ChildElem, null))));\n}\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseContext.tsx?");

/***/ })

}]);