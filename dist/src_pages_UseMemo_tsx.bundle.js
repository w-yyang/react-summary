"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseMemo_tsx"],{

/***/ "./src/pages/UseMemo.tsx":
/*!*******************************!*\
  !*** ./src/pages/UseMemo.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n// input输入以及count变化均会触发\n// 但仅与count有关 使用useMemo count改变执行,\n// 类似vue计算属性，依赖项变化，自动重新计算\n// 返回值可为函数，类似useCallback\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nfunction default_1(props) {\n    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];\n    var expensive = (0, react_1.useMemo)(function () {\n        console.log('computed');\n        var sum = 0;\n        for (var i = 0; i < count; i++) {\n            sum += i;\n        }\n        return sum;\n    }, [count]); // 此处为依赖项\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"h3\", null, \"UseMemoPage\"),\n        react_1.default.createElement(\"p\", null, count),\n        react_1.default.createElement(\"p\", null, expensive),\n        react_1.default.createElement(\"button\", { onClick: function () { return setCount(count + 1); } }, \"ADD\")));\n}\n;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseMemo.tsx?");

/***/ })

}]);