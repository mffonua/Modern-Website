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

/***/ "./sections/World.jsx":
/*!****************************!*\
  !*** ./sections/World.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\n\n\n\n\nconst World = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: \"false\",\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex  flex-col \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TypingText, {\n                    title: \"| People around the world\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/World.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 3\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TitleText, {\n                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"Track the friends on your account and invite them to play together in the same world !\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/World.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 3\n                }, undefined),\n                \"text\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/World.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mffonua/Desktop/Code/challenges/Modern-Website/client/sections/World.jsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n_c = World;\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\nvar _c;\n$RefreshReg$(_c, \"World\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Xb3JsZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDdUM7QUFJUjtBQUM0QjtBQUNIO0FBR3hELE1BQU1NLFFBQVEsa0JBQ1osOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJQLHdEQUFlLEVBQUM7a0JBQ3JDLDRFQUFDRCxxREFBVTtZQUNiVyxVQUFVVCwyREFBZ0JBO1lBQzFCVSxTQUFRO1lBQ1JDLGFBQVk7WUFDWkMsVUFBVTtnQkFBQ0MsTUFBTTtnQkFBU0MsUUFBUTtZQUFJO1lBQ3RDUixXQUFXLEdBQXFCLE9BQWxCUCwwREFBaUIsRUFBQzs7OEJBRWhDLDhEQUFDSSxtREFBVUE7b0JBQUNhLE9BQU07b0JBQ2xCQyxZQUFXOzs7Ozs7OEJBQ1gsOERBQUNmLGtEQUFTQTtvQkFBQ2MscUJBQVE7a0NBQUU7Ozs7Ozs7Z0JBQ25COzs7Ozs7Ozs7Ozs7S0FaRVo7QUFrQk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvV29ybGQuanN4PzhmY2EiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBzdGFnZ2VyQ29udGFpbmVyLCBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuaW1wb3J0IHsgIFRpdGxlVGV4dCwgVHlwaW5nVGV4dCAgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuXG5jb25zdCBXb3JsZCA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgICA8bW90aW9uLmRpdlxuICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgaW5pdGlhbD0naGlkZGVuJ1xuICB3aGlsZUluVmlldz0nc2hvdydcbiAgdmlld3BvcnQ9e3tvbmNlOiAnZmFsc2UnLCBhbW91bnQ6IDAuMjV9fVxuICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggIGZsZXgtY29sIGB9XG4gID5cbiAgPFR5cGluZ1RleHQgdGl0bGU9J3wgUGVvcGxlIGFyb3VuZCB0aGUgd29ybGQnXG4gIHRleHRTdHlsZXM9J3RleHQtY2VudGVyJy8+XG4gIDxUaXRsZVRleHQgdGl0bGU9eyg8PlRyYWNrIHRoZSBmcmllbmRzIG9uIHlvdXIgYWNjb3VudCBhbmQgaW52aXRlIHRoZW0gdG8gcGxheSB0b2dldGhlciBpbiB0aGUgc2FtZSB3b3JsZCAhPC8+KX1cbiAgLz5cbiAgdGV4dFxuICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsInN0YWdnZXJDb250YWluZXIiLCJmYWRlSW4iLCJUaXRsZVRleHQiLCJUeXBpbmdUZXh0IiwiV29ybGQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImlubmVyV2lkdGgiLCJ0aXRsZSIsInRleHRTdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/World.jsx\n"));

/***/ })

});