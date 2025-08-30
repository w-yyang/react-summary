"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseProps_tsx"],{

/***/ "./src/pages/UseProps.tsx":
/*!********************************!*\
  !*** ./src/pages/UseProps.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar PropsComp = /** @class */ (function (_super) {\n    __extends(PropsComp, _super);\n    function PropsComp(props) {\n        return _super.call(this, props) || this;\n    }\n    PropsComp.prototype.render = function () {\n        var propsParam = this.props;\n        console.log('propsParam', propsParam);\n        return (react_1.default.createElement(\"div\", null, \"test\"));\n    };\n    return PropsComp;\n}(react_1.default.Component));\nfunction default_1(props) {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(PropsComp, { test: '1234567' })));\n}\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseProps.tsx?");

/***/ })

}]);