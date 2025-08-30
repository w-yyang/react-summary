"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseEffect_tsx"],{

/***/ "./src/pages/UseEffect.tsx":
/*!*********************************!*\
  !*** ./src/pages/UseEffect.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nfunction default_1(props) {\n    var _a = (0, react_1.useState)(new Date()), date = _a[0], setDate = _a[1];\n    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];\n    var timer;\n    // 相当于componentDidMount componentDidUpdate  componentWillUnmount的集合\n    (0, react_1.useEffect)(function () {\n        timer = setInterval(function () {\n            setDate(new Date());\n        }, 1000);\n        return function () { return timer && clearInterval(timer); };\n    }, []);\n    (0, react_1.useEffect)(function () {\n        console.log('count effect');\n        document.title = \"\\u70B9\\u51FB\\u4E86\".concat(count, \"\\u6B21\");\n    }, [count]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"p\", null, date.toLocaleTimeString()),\n        react_1.default.createElement(\"p\", null, count),\n        react_1.default.createElement(\"button\", { onClick: function () { return setCount(count + 1); } }, \"ADD\")));\n}\n;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseEffect.tsx?");

/***/ })

}]);