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

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"NotReady Player One\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"Crafting Mine\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"War Area \"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Grand Raid Auto\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Peak Legends\"\n    }\n];\nconst startingFeatures = [\n    \"Find a world that matches your intrest\",\n    'Enter the world by reading \"The Metaverse for Dummies\" to be safe',\n    \"But No need to beat around the bush, just full send it and have fun\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try!\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, you can actually die, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/elon-musk.png\",\n        title: \"Elon Musk hates The Metaverse?\",\n        subtitle: \"Elon Musk doesnt find the idea of the metaverse “compelling” — and thinks that bulky headsets being pushed by Mark Zuckerberg and other proponents of virtual reality are too awkward to catch on. \"\n    },\n    {\n        imgUrl: \"/metaverse-for-noobs.png\",\n        title: \"Tips and Tricks to easily master the madness of the Metaverse\",\n        subtitle: \"With these tips and tricks you will never be called a noob again. Once utilizing the things learned here you can make as much money as you want!! Its almost too good to be true.\"\n    },\n    {\n        imgUrl: \"/the-planet.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Are you broke? For only $999.99 you can tour the entire world, visit the ancient wonders of the world, or even be a creep and spy on people. Do what you cant do in real life on .. The Metaverse \"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAxLnBuZycsXG4gICAgdGl0bGU6ICdOb3RSZWFkeSBQbGF5ZXIgT25lJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMicsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMi5wbmcnLFxuICAgIHRpdGxlOiAnQ3JhZnRpbmcgTWluZScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTMnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDMucG5nJyxcbiAgICB0aXRsZTogJ1dhciBBcmVhICcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTQnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDQucG5nJyxcbiAgICB0aXRsZTogJ0dyYW5kIFJhaWQgQXV0bycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTUnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDUucG5nJyxcbiAgICB0aXRsZTogJ1BlYWsgTGVnZW5kcycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcbiAgJ0ZpbmQgYSB3b3JsZCB0aGF0IG1hdGNoZXMgeW91ciBpbnRyZXN0JyxcbiAgJ0VudGVyIHRoZSB3b3JsZCBieSByZWFkaW5nIFwiVGhlIE1ldGF2ZXJzZSBmb3IgRHVtbWllc1wiIHRvIGJlIHNhZmUnLFxuICAnQnV0IE5vIG5lZWQgdG8gYmVhdCBhcm91bmQgdGhlIGJ1c2gsIGp1c3QgZnVsbCBzZW5kIGl0IGFuZCBoYXZlIGZ1bicsXG5dO1xuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXG4gICAgdGl0bGU6ICdBIG5ldyB3b3JsZCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICd3ZSBoYXZlIHRoZSBsYXRlc3QgdXBkYXRlIHdpdGggbmV3IHdvcmxkIGZvciB5b3UgdG8gdHJ5IScsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvaGVhZHNldC5zdmcnLFxuICAgIHRpdGxlOiAnTW9yZSByZWFsaXN0aWMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnSW4gdGhlIGxhdGVzdCB1cGRhdGUsIHlvdSBjYW4gYWN0dWFsbHkgZGllLCBtYWtpbmcgdGhlIHdvcmxkIG1vcmUgcmVhbGlzdGljIHRoYW4gZXZlcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvZWxvbi1tdXNrLnBuZycsXG4gICAgdGl0bGU6ICdFbG9uIE11c2sgaGF0ZXMgVGhlIE1ldGF2ZXJzZT8nLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnRWxvbiBNdXNrIGRvZXNudCBmaW5kIHRoZSBpZGVhIG9mIHRoZSBtZXRhdmVyc2Ug4oCcY29tcGVsbGluZ+KAnSDigJQgYW5kIHRoaW5rcyB0aGF0IGJ1bGt5IGhlYWRzZXRzIGJlaW5nIHB1c2hlZCBieSBNYXJrIFp1Y2tlcmJlcmcgYW5kIG90aGVyIHByb3BvbmVudHMgb2YgdmlydHVhbCByZWFsaXR5IGFyZSB0b28gYXdrd2FyZCB0byBjYXRjaCBvbi4gJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9tZXRhdmVyc2UtZm9yLW5vb2JzLnBuZycsXG4gICAgdGl0bGU6ICdUaXBzIGFuZCBUcmlja3MgdG8gZWFzaWx5IG1hc3RlciB0aGUgbWFkbmVzcyBvZiB0aGUgTWV0YXZlcnNlJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1dpdGggdGhlc2UgdGlwcyBhbmQgdHJpY2tzIHlvdSB3aWxsIG5ldmVyIGJlIGNhbGxlZCBhIG5vb2IgYWdhaW4uIE9uY2UgdXRpbGl6aW5nIHRoZSB0aGluZ3MgbGVhcm5lZCBoZXJlIHlvdSBjYW4gbWFrZSBhcyBtdWNoIG1vbmV5IGFzIHlvdSB3YW50ISEgSXRzIGFsbW9zdCB0b28gZ29vZCB0byBiZSB0cnVlLicsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvdGhlLXBsYW5ldC5wbmcnLFxuICAgIHRpdGxlOiAnV2l0aCBvbmUgcGxhdGZvcm0geW91IGNhbiBleHBsb3JlIHRoZSB3aG9sZSB3b3JsZCB2aXJ0dWFsbHknLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnQXJlIHlvdSBicm9rZT8gRm9yIG9ubHkgJDk5OS45OSB5b3UgY2FuIHRvdXIgdGhlIGVudGlyZSB3b3JsZCwgdmlzaXQgdGhlIGFuY2llbnQgd29uZGVycyBvZiB0aGUgd29ybGQsIG9yIGV2ZW4gYmUgYSBjcmVlcCBhbmQgc3B5IG9uIHBlb3BsZS4gRG8gd2hhdCB5b3UgY2FudCBkbyBpbiByZWFsIGxpZmUgb24gLi4gVGhlIE1ldGF2ZXJzZSAnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbHMgPSBbXG4gIHsgXG4gICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgIHVybDogJy90d2l0dGVyLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxuICAgIHVybDogJy9saW5rZWRpbi5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdXJsOiAnL2luc3RhZ3JhbS5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZhY2Vib29rJyxcbiAgICB1cmw6ICcvZmFjZWJvb2suc3ZnJyxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZXhwbG9yZVdvcmxkcyIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJzdWJ0aXRsZSIsImluc2lnaHRzIiwic29jaWFscyIsIm5hbWUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});