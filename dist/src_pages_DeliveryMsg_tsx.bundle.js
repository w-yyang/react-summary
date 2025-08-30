"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_DeliveryMsg_tsx"],{

/***/ "./src/pages/DeliveryMsg.tsx":
/*!***********************************!*\
  !*** ./src/pages/DeliveryMsg.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Child = function (props) {\n    var handleClick = props.handleClick;\n    return (react_1.default.createElement(\"div\", { className: 'child' },\n        react_1.default.createElement(\"button\", { onClick: function () { return handleClick(4); } }, \"+4\")));\n};\nvar default_1 = /** @class */ (function (_super) {\n    __extends(default_1, _super);\n    function default_1(props) {\n        var _this = _super.call(this, props) || this;\n        _this.state = {\n            number: 0\n        };\n        _this.handleClick = _this.handleClick.bind(_this);\n        return _this;\n    }\n    default_1.prototype.handleClick = function (data) {\n        this.setState(function (prev) { return ({\n            number: data + prev.number\n        }); });\n    };\n    default_1.prototype.render = function () {\n        return (react_1.default.createElement(\"div\", { className: \"parent\" },\n            react_1.default.createElement(\"h4\", null,\n                \"number: \",\n                this.state.number),\n            react_1.default.createElement(Child, { handleClick: this.handleClick })));\n    };\n    return default_1;\n}(react_1.default.Component));\nexports[\"default\"] = default_1;\n\n\n//# sourceURL=webpack://react-summary/./src/pages/DeliveryMsg.tsx?");

/***/ })

}]);