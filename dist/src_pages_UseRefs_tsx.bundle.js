"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_UseRefs_tsx"],{

/***/ "./src/pages/UseRefs.tsx":
/*!*******************************!*\
  !*** ./src/pages/UseRefs.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ControlBtn = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(\"button\", __assign({ ref: ref }, props), props.children)); });\n//通过forwardRef来传入创建的ref并获取内部要操控的dom  forwardRef可以精确定位 ref不可\n//通过ref来获取内部的dom组件\nvar RefsComp = /** @class */ (function (_super) {\n    __extends(RefsComp, _super);\n    function RefsComp() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.btnRef = react_1.default.createRef();\n        _this.btnClick = function () {\n            console.log(_this.btnRef.current);\n        };\n        return _this;\n    }\n    RefsComp.prototype.render = function () {\n        return (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(\"h3\", { className: 'ctx-title' }, \"Refs\\u8F6C\\u53D1\"),\n            react_1.default.createElement(\"div\", { className: 'example' },\n                react_1.default.createElement(ControlBtn, { ref: this.btnRef, onClick: this.btnClick }, \"click\"))));\n    };\n    return RefsComp;\n}(react_1.default.Component));\n;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/UseRefs.tsx?");

/***/ })

}]);