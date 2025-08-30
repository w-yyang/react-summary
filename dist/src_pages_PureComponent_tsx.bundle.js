"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_summary"] = self["webpackChunkreact_summary"] || []).push([["src_pages_PureComponent_tsx"],{

/***/ "./src/pages/PureComponent.tsx":
/*!*************************************!*\
  !*** ./src/pages/PureComponent.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar default_1 = /** @class */ (function (_super) {\n    __extends(default_1, _super);\n    function default_1(props) {\n        var _this = _super.call(this, props) || this;\n        _this.setCount = function () {\n            _this.setState({\n                count: 100,\n                obj: {\n                    num: 1000\n                }\n            });\n        };\n        _this.state = {\n            count: 0,\n            obj: {\n                num: 0\n            }\n        };\n        return _this;\n    }\n    default_1.prototype.render = function () {\n        var count = this.state.count;\n        console.log('render');\n        return (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"h3\", null, \"PureComponentPage\"),\n            react_1.default.createElement(\"button\", { onClick: this.setCount }, count)));\n    };\n    return default_1;\n}(react_1.PureComponent));\nexports[\"default\"] = default_1;\n/**\n * 使用PureComponent不用使用shouldComponentUpdate 内置 已实现 Component为实现\n * 会自动优化\n */ \n\n\n//# sourceURL=webpack://react-summary/./src/pages/PureComponent.tsx?");

/***/ })

}]);