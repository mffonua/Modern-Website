"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/Insights.jsx":
/*!*******************************!*\
  !*** ./sections/Insights.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\n\n\n\n\n\nconst Insights = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            variant: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: \"false\",\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex  flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TypingText, {\n                    title: \"| Insight\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TitleText, {\n                    title: \"Insight about The Metaverse\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex flex-col gap-[30px]\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_4__.insights.map((insight, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.InsightCard, {\n                            ...insight,\n                            index: index\n                        }, \"insight-\".concat(index), false, {\n                            fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/Insights.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9JbnNpZ2h0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ3VDO0FBQ1I7QUFHb0I7QUFDaUI7QUFDNUI7QUFFeEMsTUFBTU8sV0FBVyxrQkFDZiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQlIsd0RBQWUsRUFBQztrQkFDakMsNEVBQUNELHFEQUFVO1lBQ2JZLFNBQVNWLDJEQUFnQkE7WUFDekJXLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFDQyxNQUFNO2dCQUFTQyxRQUFRO1lBQUk7WUFDdENSLFdBQVcsR0FBcUIsT0FBbEJSLDBEQUFpQixFQUFDOzs4QkFDOUIsOERBQUNJLG1EQUFVQTtvQkFBQ2MsT0FBTTtvQkFDbEJDLFlBQVc7Ozs7Ozs4QkFDWCw4REFBQ2hCLGtEQUFTQTtvQkFBQ2UsT0FBTTtvQkFDakJDLFlBQVc7Ozs7Ozs4QkFDWCw4REFBQ1Q7b0JBQUlGLFdBQVU7OEJBQ1pILG9EQUFZLENBQUMsQ0FBQ2dCLFNBQVNDLHNCQUN0Qiw4REFBQ3BCLG9EQUFXQTs0QkFBMkIsR0FDdkNtQixPQUFPOzRCQUFFQyxPQUFPQTsyQkFERSxXQUFpQixPQUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZG5DaEI7QUFzQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvSW5zaWdodHMuanN4PzBhMTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5cblxuaW1wb3J0IHsgc3RhZ2dlckNvbnRhaW5lciB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5pbXBvcnQgeyBJbnNpZ2h0Q2FyZCwgVGl0bGVUZXh0LCBUeXBpbmdUZXh0ICB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaW5zaWdodHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBJbnNpZ2h0cyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnQ9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPSdoaWRkZW4nXG4gICAgICB3aGlsZUluVmlldz0nc2hvdydcbiAgICAgIHZpZXdwb3J0PXt7b25jZTogJ2ZhbHNlJywgYW1vdW50OiAwLjI1fX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCAgZmxleC1jb2xgfT5cbiAgICAgICAgPFR5cGluZ1RleHQgdGl0bGU9XCJ8IEluc2lnaHRcIiBcbiAgICAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCIvPlxuICAgICAgICA8VGl0bGVUZXh0IHRpdGxlPVwiSW5zaWdodCBhYm91dCBUaGUgTWV0YXZlcnNlXCIgXG4gICAgICAgIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LVs1MHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bMzBweF0nPlxuICAgICAgICAgIHtpbnNpZ2h0cy5tYXAoKGluc2lnaHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8SW5zaWdodENhcmQga2V5PXtgaW5zaWdodC0ke2luZGV4fWB9IHsuLi5cbiAgICAgICAgICAgIGluc2lnaHR9IGluZGV4PXtpbmRleCB9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHM7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwic3RhZ2dlckNvbnRhaW5lciIsIkluc2lnaHRDYXJkIiwiVGl0bGVUZXh0IiwiVHlwaW5nVGV4dCIsImluc2lnaHRzIiwiSW5zaWdodHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50IiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aCIsInRpdGxlIiwidGV4dFN0eWxlcyIsIm1hcCIsImluc2lnaHQiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Insights.jsx\n"));

/***/ })

});