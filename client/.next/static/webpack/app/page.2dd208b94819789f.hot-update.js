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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"NotReady Player One\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"Crafting Mine\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"War Area \"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Grand Raid Auto\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Peak Legends\",\n        link: \"https://www.ea.com/games/apex-legends\"\n    }\n];\nconst startingFeatures = [\n    \"Find a world that matches your intrest\",\n    'Enter the world by reading \"The Metaverse for Dummies\" to be safe',\n    \"But No need to beat around the bush, just full send it and have fun\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, you can actually die, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"The launch of the Metaverse makes Elon musk ketar-ketir\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"7 tips to easily master the madness of the Metaverse\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLE1BQU07SUFFUjtDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGNBQWM7SUFDekI7UUFDRUosUUFBUTtRQUNSQyxPQUFPO1FBQ1BJLFVBQ0k7SUFDTjtJQUNBO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQSSxVQUNJO0lBQ047Q0FDRCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUN0QjtRQUNFTixRQUFRO1FBQ1JDLE9BQU87UUFDUEksVUFDSTtJQUNOO0lBQ0E7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BJLFVBQ0k7SUFDTjtJQUNBO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQSSxVQUNJO0lBQ047Q0FDRCxDQUFDO0FBRUssTUFBTUUsVUFBVTtJQUNyQjtRQUNFQyxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LmpzPzM3MzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGV4cGxvcmVXb3JsZHMgPSBbXG4gIHtcbiAgICBpZDogJ3dvcmxkLTEnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDEucG5nJyxcbiAgICB0aXRsZTogJ05vdFJlYWR5IFBsYXllciBPbmUnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0yJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAyLnBuZycsXG4gICAgdGl0bGU6ICdDcmFmdGluZyBNaW5lJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMycsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMy5wbmcnLFxuICAgIHRpdGxlOiAnV2FyIEFyZWEgJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtNCcsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNC5wbmcnLFxuICAgIHRpdGxlOiAnR3JhbmQgUmFpZCBBdXRvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtNScsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNS5wbmcnLFxuICAgIHRpdGxlOiAnUGVhayBMZWdlbmRzJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZWEuY29tL2dhbWVzL2FwZXgtbGVnZW5kcycsXG4gICAgXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcbiAgJ0ZpbmQgYSB3b3JsZCB0aGF0IG1hdGNoZXMgeW91ciBpbnRyZXN0JyxcbiAgJ0VudGVyIHRoZSB3b3JsZCBieSByZWFkaW5nIFwiVGhlIE1ldGF2ZXJzZSBmb3IgRHVtbWllc1wiIHRvIGJlIHNhZmUnLFxuICAnQnV0IE5vIG5lZWQgdG8gYmVhdCBhcm91bmQgdGhlIGJ1c2gsIGp1c3QgZnVsbCBzZW5kIGl0IGFuZCBoYXZlIGZ1bicsXG5dO1xuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXG4gICAgdGl0bGU6ICdBIG5ldyB3b3JsZCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICd3ZSBoYXZlIHRoZSBsYXRlc3QgdXBkYXRlIHdpdGggbmV3IHdvcmxkIGZvciB5b3UgdG8gdHJ5JyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9oZWFkc2V0LnN2ZycsXG4gICAgdGl0bGU6ICdNb3JlIHJlYWxpc3RpYycsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdJbiB0aGUgbGF0ZXN0IHVwZGF0ZSwgeW91IGNhbiBhY3R1YWxseSBkaWUsIG1ha2luZyB0aGUgd29ybGQgbW9yZSByZWFsaXN0aWMgdGhhbiBldmVyJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbnNpZ2h0cyA9IFtcbiAge1xuICAgIGltZ1VybDogJy9wbGFuZXQtMDYucG5nJyxcbiAgICB0aXRsZTogJ1RoZSBsYXVuY2ggb2YgdGhlIE1ldGF2ZXJzZSBtYWtlcyBFbG9uIG11c2sga2V0YXIta2V0aXInLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnTWFnbmEgZXRpYW0gdGVtcG9yIG9yY2kgZXUgbG9ib3J0aXMgZWxlbWVudHVtIG5pYmggdGVsbHVzIG1vbGVzdGllLiBEaWFtIG1hZWNlbmFzIHNlZCBlbmltIHV0IHNlbSB2aXZlcnJhIGFsaXF1ZS4nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNy5wbmcnLFxuICAgIHRpdGxlOiAnNyB0aXBzIHRvIGVhc2lseSBtYXN0ZXIgdGhlIG1hZG5lc3Mgb2YgdGhlIE1ldGF2ZXJzZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjLiBFdCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIENvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0nLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wOC5wbmcnLFxuICAgIHRpdGxlOiAnV2l0aCBvbmUgcGxhdGZvcm0geW91IGNhbiBleHBsb3JlIHRoZSB3aG9sZSB3b3JsZCB2aXJ0dWFsbHknLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnUXVhbSBxdWlzcXVlIGlkIGRpYW0gdmVsIHF1YW0gZWxlbWVudHVtLiBWaXZlcnJhIG5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMgc2l0LiBNYXVyaXMgaW4gYWxpcXVhbSBzZW0nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgdXJsOiAnL3R3aXR0ZXIuc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaW5rZWRpbicsXG4gICAgdXJsOiAnL2xpbmtlZGluLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW5zdGFncmFtJyxcbiAgICB1cmw6ICcvaW5zdGFncmFtLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZmFjZWJvb2snLFxuICAgIHVybDogJy9mYWNlYm9vay5zdmcnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsImxpbmsiLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJzdWJ0aXRsZSIsImluc2lnaHRzIiwic29jaWFscyIsIm5hbWUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});