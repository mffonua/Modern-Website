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

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] \\n  ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[27px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px]\",\n                        children: \" Enter The Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/components/ExploreCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3VDO0FBRVI7QUFDVTtBQUV6QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUNYVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqREssV0FBVyxZQUVWLE9BRENKLFdBQVdKLEtBQUssNEJBQTRCLHdCQUF3QixFQUNyRTs7MEJBRUMsOERBQUNTO2dCQUNEQyxLQUFLVDtnQkFDTFUsS0FBS1Q7Z0JBQ0xNLFdBQVU7Ozs7OztZQUNUSixXQUFXSixtQkFDViw4REFBQ1k7Z0JBQUdKLFdBQVU7MEJBQ1hOOzs7OzswQ0FJSCw4REFBQ0k7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVyxHQUFxQixPQUFsQlgsMERBQWlCLEVBQUM7a0NBQ25DLDRFQUFDWTs0QkFBSUMsS0FBSTs0QkFDVEMsS0FBSTs0QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7a0NBRVosOERBQUNNO3dCQUFFTixXQUFVO2tDQUEwQjs7Ozs7Ozs7Ozs7eUJBRTFDOzs7Ozs7O0FBQ1M7S0ExQlJUO0FBNkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwbG9yZUNhcmQuanN4PzIzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEV4cGxvcmVDYXJkID0gKHsgaWQsIGltZ1VybCwgdGl0bGUsIGluZGV4LCBhY3RpdmUsIGhhbmRsZUNsaWNrIH0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNzUpfVxuICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke1xuICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nIDogJ2xnOmZsZXgtWzAuNV0gZmxleC1bMl0nXG4gIH0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctWzE3MHB4XSBoLVs3MDBweF0gdHJhbnNpdGlvbi1bZmxleF0gZHVyYXRpb24tWzAuN3NdIFxuICBlYXNlLW91dC1mbGV4IGN1cnNvci1wb2ludGVyYH0+XG4gICAgPGltZyBcbiAgICBzcmM9e2ltZ1VybH1cbiAgICBhbHQ9e3RpdGxlfVxuICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF0nIC8+XG4gICAge2FjdGl2ZSAhPT0gaWQgPyAoXG4gICAgICA8aDMgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHNtOnRleHQtWzI3cHhdIHRleHQtWzE4cHhdIHRleHQtd2hpdGUgYWJzb2x1dGUgei0wIGxnOmJvdHRvbS0yMCBsZzpyb3RhdGUtWy05MGRlZ10gbGc6b3JpZ2luLVswLDBdJz5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMz5cblxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgcC04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IHctWzYwcHhdIGgtWzYwcHhdIHJvdW5kZWQtWzI0cHhdIGdsYXNzbW9ycGhpc20gbWItWzE2cHhdYH0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9oZWFkc2V0LnN2ZydcbiAgICAgICAgICBhbHQ9J2hlYWRzZXQnXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpbicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ub3JtYWwgdGV4dC1bMTZweF0nPiBFbnRlciBUaGUgTWV0YXZlcnNlPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZUNhcmQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwiZmFkZUluIiwiRXhwbG9yZUNhcmQiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiaW5kZXgiLCJhY3RpdmUiLCJoYW5kbGVDbGljayIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmbGV4Q2VudGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});