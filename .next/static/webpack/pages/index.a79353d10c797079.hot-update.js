"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/displayedata.js":
/*!************************************!*\
  !*** ./components/displayedata.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Displayedata; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Displayedata() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:4000/formdata').then(function(response) {\n            console.log(response.data);\n            setData(response.data);\n        });\n    }, []);\n    console.log(data, \"data from json\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-8 border-gray-500 shadow p-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container justify-center \",\n            children: data.map(function(jsonData) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"mb-4\": true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-3\",\n                            children: jsonData === null || jsonData === void 0 ? void 0 : jsonData.fieldname\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                            lineNumber: 21,\n                            columnNumber: 1\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                            placeholder: jsonData === null || jsonData === void 0 ? void 0 : jsonData.placeholder,\n                            required: jsonData === null || jsonData === void 0 ? void 0 : jsonData.requiredfield\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                            lineNumber: 22,\n                            columnNumber: 1\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n            lineNumber: 17,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n        lineNumber: 16,\n        columnNumber: 1\n    }, this));\n};\n_s(Displayedata, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Displayedata;\nvar _c;\n$RefreshReg$(_c, \"Displayedata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3BsYXllZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDckI7O0FBRVYsUUFBUSxDQUFDSSxZQUFZLEdBQUcsQ0FBQzs7O0lBQ3RDLEdBQUssQ0FBa0JILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBM0JJLElBQUksR0FBWUosR0FBWSxLQUF2QkssT0FBTyxHQUFJTCxHQUFZO0lBQ3JDQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsR0FBSyxDQUFDSyxNQUFNLEdBQUdKLGdEQUFTLENBQUMsQ0FBZ0MsaUNBQUVNLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFRLEVBQUUsQ0FBQ0M7WUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0wsSUFBSTtZQUNwR0MsT0FBTyxDQUFDSSxRQUFRLENBQUNMLElBQUk7UUFDekIsQ0FBQztJQUdELENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksRUFBQyxDQUFnQjtJQUU3QixNQUFNLDZFQUNUUSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFnQzs4RkFDOUNELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTJCO3NCQUNqQ1QsSUFBSSxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUcsQ0FBQztnQkFDbkIsTUFBTSw2RUFDREgsQ0FBRztvQkFBQ0ksQ0FBSTs7b0dBQ3hCQyxDQUFLOzRCQUFDSixTQUFTLEVBQUMsQ0FBc0U7c0NBQUVFLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxRQUFRLENBQUVHLFNBQVM7Ozs7OztvR0FDM0dDLENBQUs7NEJBQUNOLFNBQVMsRUFBQyxDQUFxUTs0QkFDclJPLFdBQVcsRUFBRUwsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLFFBQVEsQ0FBRUssV0FBVzs0QkFBRUMsUUFBUSxFQUFFTixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsUUFBUSxDQUFFTyxhQUFhOzs7Ozs7Ozs7Ozs7WUFHOUQsQ0FBQzs7Ozs7Ozs7Ozs7QUFNVCxDQUFDO0dBNUJ1Qm5CLFlBQVk7S0FBWkEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rpc3BsYXllZGF0YS5qcz83MGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzcGxheWVkYXRhKCkge1xyXG4gIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9mb3JtZGF0YScpLnRoZW4ocmVzcG9uc2U9Pntjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKSBcclxuICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcclxufSlcclxuXHJcblxyXG59LFtdKSBcclxuY29uc29sZS5sb2coZGF0YSxcImRhdGEgZnJvbSBqc29uXCIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuPGRpdiBjbGFzc05hbWU9XCJtLTggYm9yZGVyLWdyYXktNTAwIHNoYWRvdyBwLTZcIj4gXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoanNvbkRhdGEpPT57XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgbWItNCA+XHJcbjxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDAgcHQtM1wiPntqc29uRGF0YT8uZmllbGRuYW1lfTwvbGFiZWw+XHJcbjxpbnB1dCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuIHBsYWNlaG9sZGVyPXtqc29uRGF0YT8ucGxhY2Vob2xkZXJ9IHJlcXVpcmVkPXtqc29uRGF0YT8ucmVxdWlyZWRmaWVsZH0+PC9pbnB1dD48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIC8qIDxkaXY+IHtkYXRhLmxlbmd0aD4wP2RhdGEubWFwKChlLGkpPT48aW5wdXQga2V5PXtpbmRleH0vPik6bnVsbH0gPC9kaXY+ICovXHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJEaXNwbGF5ZWRhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJlc3VsdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJqc29uRGF0YSIsIm1iLTQiLCJsYWJlbCIsImZpZWxkbmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInJlcXVpcmVkZmllbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/displayedata.js\n");

/***/ })

});