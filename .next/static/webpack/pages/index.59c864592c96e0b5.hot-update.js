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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Displayedata; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Displayedata() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:4000/formdata').then(function(response) {\n            console.log(response.data);\n            setData(response.data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" hello \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HOME\\\\All vscode projects\\\\form-automation-main\\\\components\\\\displayedata.js\",\n        lineNumber: 14,\n        columnNumber: 1\n    }, this));\n};\n_s(Displayedata, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Displayedata;\nvar _c;\n$RefreshReg$(_c, \"Displayedata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3BsYXllZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDckI7O0FBRVYsUUFBUSxDQUFDSSxZQUFZLEdBQUcsQ0FBQzs7SUFDdEMsR0FBSyxDQUFrQkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUEzQkksSUFBSSxHQUFZSixHQUFZLEtBQXZCSyxPQUFPLEdBQUlMLEdBQVk7SUFDckNDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixHQUFLLENBQUNLLE1BQU0sR0FBR0osZ0RBQVMsQ0FBQyxDQUFnQyxpQ0FBRU0sSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVEsRUFBRSxDQUFDQztZQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDTCxJQUFJO1lBQ3BHQyxPQUFPLENBQUNJLFFBQVEsQ0FBQ0wsSUFBSTtRQUN6QixDQUFDO0lBRUQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVBLE1BQU0sNkVBQ1RRLENBQUc7a0JBQUMsQ0FBTzs7Ozs7O0FBR1osQ0FBQztHQWJ1QlQsWUFBWTtLQUFaQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGlzcGxheWVkYXRhLmpzPzcwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNwbGF5ZWRhdGEoKSB7XHJcbiAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Zvcm1kYXRhJykudGhlbihyZXNwb25zZT0+e2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpIFxyXG4gICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxyXG59KVxyXG4gICAgXHJcbn0sW10pIFxyXG5cclxuICAgIHJldHVybiAoXHJcbjxkaXY+IGhlbGxvIDwvZGl2PlxyXG4gICAgLyogPGRpdj4ge2RhdGEubGVuZ3RoPjA/ZGF0YS5tYXAoKGUsaSk9PjxpbnB1dCBrZXk9e2luZGV4fS8+KTpudWxsfSA8L2Rpdj4gKi9cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkRpc3BsYXllZGF0YSIsImRhdGEiLCJzZXREYXRhIiwicmVzdWx0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/displayedata.js\n");

/***/ })

});