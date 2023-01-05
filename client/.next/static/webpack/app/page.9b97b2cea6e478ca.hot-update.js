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

/***/ "./components/InsightCard.jsx":
/*!************************************!*\
  !*** ./components/InsightCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\nconst InsightCard = ()=>(param)=>/*#__PURE__*/ {\n        let { imgUrl , title , subtitle , index  } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"up\", \"spring\", index * 0.5, 1),\n            className: \"flex md:flex-row flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgUrl,\n                    alt: \"planet-01\",\n                    className: \"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 md:ml-[62px] flex flex-col max-w-[650px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-normal lg:text-[42px] text-[26px] text-white\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-[16px] font-normal \",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/InsightCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 3\n        }, undefined);\n    };\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsightCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFdUM7QUFDRTtBQUN6QyxNQUFNRSxjQUFjLElBQU0sdUJBQ3hCO1lBRHlCLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBQztlQUMxRCw4REFBQ04scURBQVU7WUFBQ1EsVUFBVVAscURBQU1BLENBQUMsTUFBTSxVQUFVSyxRQUFRLEtBQUs7WUFDMURHLFdBQVU7OzhCQUNSLDhEQUFDQztvQkFDREMsS0FBS1I7b0JBQ0xTLEtBQUk7b0JBQ0pILFdBQVU7Ozs7Ozs4QkFFViw4REFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNGO3dCQUFJRSxXQUFVOzswQ0FDZiw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQXFETDs7Ozs7OzBDQUNuRSw4REFBQ1U7Z0NBQUVMLFdBQVU7MENBQTBCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHL0I7QUFHZCwrREFBZUgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeD9kOGVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gXCIuLi91dGlscy9tb3Rpb25cIjtcbmNvbnN0IEluc2lnaHRDYXJkID0gKCkgPT4gKHsgaW1nVXJsLCB0aXRsZSwgc3VidGl0bGUsIGluZGV4fSkgPT4gKFxuICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZmFkZUluKCd1cCcsICdzcHJpbmcnLCBpbmRleCAqIDAuNSwgMSl9XG4gIGNsYXNzTmFtZT1cImZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgZ2FwLTRcIj5cbiAgICA8aW1nIFxuICAgIHNyYz17aW1nVXJsfVxuICAgIGFsdD1cInBsYW5ldC0wMVwiXG4gICAgY2xhc3NOYW1lPVwibWQ6dy1bMjcwcHhdIHctZnVsbCBoLVsyNTBweF1cbiAgICByb3VuZGVkLVszMnB4XSBvYmplY3QtY292ZXJcIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtZDptbC1bNjJweF0gZmxleCBmbGV4LWNvbCBtYXgtdy1bNjUwcHhdXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgbGc6dGV4dC1bNDJweF0gdGV4dC1bMjZweF0gdGV4dC13aGl0ZVwiPnt0aXRsZX08L2g0PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtWzE2cHhdIGZvbnQtbm9ybWFsIFwiPntzdWJ0aXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodENhcmQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiZmFkZUluIiwiSW5zaWdodENhcmQiLCJpbWdVcmwiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW5kZXgiLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InsightCard.jsx\n"));

/***/ })

});