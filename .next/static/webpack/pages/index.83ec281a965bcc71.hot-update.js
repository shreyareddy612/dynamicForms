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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Displayedata; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _formdata_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formdata.json */ \"./formdata.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Displayedata() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:4000/formdata').then(function(response) {\n            console.log(response.data);\n            setData(response.data);\n        });\n    }, []);\n    console.log(FormData, \"form data from json\");\n    console.log(data, \"data from json\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-8 border-gray-500 shadow p-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container justify-center \",\n            children: data.map(function(jsonData) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"mb-4\": true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-3\",\n                            children: jsonData === null || jsonData === void 0 ? void 0 : jsonData.fieldname\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                            lineNumber: 23,\n                            columnNumber: 1\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                            placeholder: jsonData === null || jsonData === void 0 ? void 0 : jsonData.placeholder,\n                            required: jsonData === null || jsonData === void 0 ? void 0 : jsonData.requiredfield\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                            lineNumber: 24,\n                            columnNumber: 1\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n            lineNumber: 19,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n        lineNumber: 18,\n        columnNumber: 1\n    }, this));\n};\n_s(Displayedata, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Displayedata;\nvar _c;\n$RefreshReg$(_c, \"Displayedata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3BsYXllZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ3JCO0FBQ2M7O0FBRXhCLFFBQVEsQ0FBQ0ssWUFBWSxHQUFHLENBQUM7OztJQUN0QyxHQUFLLENBQWtCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTNCSyxJQUFJLEdBQVlMLEdBQVksS0FBdkJNLE9BQU8sR0FBSU4sR0FBWTtJQUNyQ0MsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiLEdBQUssQ0FBQ00sTUFBTSxHQUFHTCxnREFBUyxDQUFDLENBQWdDLGlDQUFFTyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBUSxFQUFFLENBQUNDO1lBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUNMLElBQUk7WUFDcEdDLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFJO1FBQ3pCLENBQUM7SUFHRCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0pNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUMsQ0FBcUI7SUFDMUNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLEVBQUMsQ0FBZ0I7SUFFN0IsTUFBTSw2RUFDVFMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7OEZBQzlDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUEyQjtzQkFDakNWLElBQUksQ0FBQ1csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFHLENBQUM7Z0JBQ25CLE1BQU0sNkVBQ0RILENBQUc7b0JBQUNJLENBQUk7O29HQUN4QkMsQ0FBSzs0QkFBQ0osU0FBUyxFQUFDLENBQXNFO3NDQUFFRSxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsUUFBUSxDQUFFRyxTQUFTOzs7Ozs7b0dBQzNHQyxDQUFLOzRCQUFDTixTQUFTLEVBQUMsQ0FBcVE7NEJBQ3JSTyxXQUFXLEVBQUVMLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxRQUFRLENBQUVLLFdBQVc7NEJBQUVDLFFBQVEsRUFBRU4sUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLFFBQVEsQ0FBRU8sYUFBYTs7Ozs7Ozs7Ozs7O1lBRzlELENBQUM7Ozs7Ozs7Ozs7O0FBTVQsQ0FBQztHQTdCdUJwQixZQUFZO0tBQVpBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNwbGF5ZWRhdGEuanM/NzBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGZyb21EYXRhIGZyb20gXCIuLi9mb3JtZGF0YS5qc29uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc3BsYXllZGF0YSgpIHtcclxuICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZm9ybWRhdGEnKS50aGVuKHJlc3BvbnNlPT57Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSkgXHJcbiAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXHJcbn0pXHJcblxyXG5cclxufSxbXSkgXHJcbmNvbnNvbGUubG9nKEZvcm1EYXRhLFwiZm9ybSBkYXRhIGZyb20ganNvblwiKVxyXG5jb25zb2xlLmxvZyhkYXRhLFwiZGF0YSBmcm9tIGpzb25cIilcclxuXHJcbiAgICByZXR1cm4gKFxyXG48ZGl2IGNsYXNzTmFtZT1cIm0tOCBib3JkZXItZ3JheS01MDAgc2hhZG93IHAtNlwiPiBcclxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChqc29uRGF0YSk9PntcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBtYi00ID5cclxuPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMCBwdC0zXCI+e2pzb25EYXRhPy5maWVsZG5hbWV9PC9sYWJlbD5cclxuPGlucHV0IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gcGxhY2Vob2xkZXI9e2pzb25EYXRhPy5wbGFjZWhvbGRlcn0gcmVxdWlyZWQ9e2pzb25EYXRhPy5yZXF1aXJlZGZpZWxkfT48L2lucHV0PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgLyogPGRpdj4ge2RhdGEubGVuZ3RoPjA/ZGF0YS5tYXAoKGUsaSk9PjxpbnB1dCBrZXk9e2luZGV4fS8+KTpudWxsfSA8L2Rpdj4gKi9cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImZyb21EYXRhIiwiRGlzcGxheWVkYXRhIiwiZGF0YSIsInNldERhdGEiLCJyZXN1bHQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiRm9ybURhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJqc29uRGF0YSIsIm1iLTQiLCJsYWJlbCIsImZpZWxkbmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInJlcXVpcmVkZmllbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/displayedata.js\n");

/***/ })

});