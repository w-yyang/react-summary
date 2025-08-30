"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseJsx_tsx"],{

/***/ "./src/pages/UseJsx.tsx":
/*!******************************!*\
  !*** ./src/pages/UseJsx.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n// @ts-ignore\nvar logo_svg_1 = __importDefault(__webpack_require__(/*! ../components/header/logo.svg */ \"./src/components/header/logo.svg\"));\nvar name = 'aaaaa';\nvar show = false;\nvar arr = ['a', 'b', 'c'];\nvar obj = {\n    first: 'asdf',\n    last: 'csadw'\n};\nvar good = (react_1.default.createElement(\"h1\", null, \"great\"));\nvar jsx = (react_1.default.createElement(\"div\", null,\n    \"hello react, \",\n    name,\n    react_1.default.createElement(\"h2\", null, formatName(obj)),\n    good,\n    show ? good : 'qqqq',\n    show && good,\n    react_1.default.createElement(\"ul\", null, arr.map(function (item) {\n        return (react_1.default.createElement(\"li\", { key: item }, item));\n    })),\n    react_1.default.createElement(\"img\", { src: logo_svg_1.default, className: \"logo\", style: { width: '50px', height: '40px' } })));\nfunction formatName(name) {\n    return name.first + ' ' + name.last;\n}\nfunction default_1() {\n    return (react_1.default.createElement(\"div\", null, jsx));\n}\n;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseJsx.tsx?");

/***/ })

}]);