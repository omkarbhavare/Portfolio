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

/***/ "(app-pages-browser)/./src/lib/data.ts":
/*!*************************!*\
  !*** ./src/lib/data.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\nconst links = [\n    {\n        nameEng: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        nameEng: \"About\",\n        hash: \"#about\"\n    },\n    {\n        nameEng: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        nameEng: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        nameEng: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"IMDB+ Clone\",\n        description: \"Built an IMDb rating clone featuring real-time data, pagination, search, bookmarking, manual ratings, multilingual support, and local storage!\",\n        tags: [\n            \"React\",\n            \"Javascript\",\n            \"Tailwind\",\n            \"NodeJS\"\n        ],\n        imageUrl: \"assets/swiggy.jpeg\",\n        link: \"https://cineverse-1x8a2lqhz-omkarbhavares-projects.vercel.app/\"\n    },\n    {\n        title: \"Expense Tracker\",\n        description: \"Developed an Expense Tracker app to manage accounts effectively, enabling users to log expenses, categorize transactions & latest trends in economy.\",\n        tags: [\n            \"React\",\n            \"Restful APIs\",\n            \"NodeJs\"\n        ],\n        imageUrl: \"/image2.png\",\n        link: \"https://money-ball.vercel.app/\"\n    },\n    {\n        title: \"Swiggy Clone\",\n        description: \"I'm building a Swiggy clone, a feature-rich food delivery application that includes functionalities like user authentication, restaurant listing, order & payment.\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Swiggy API\",\n            \"Tailwind\",\n            \"NodeJS\",\n            \"JEST\"\n        ],\n        imageUrl: \"/image3.png\",\n        link: \"https://www.google.com\"\n    },\n    {\n        title: \"Hirit Job Portal + Resume Builder\",\n        description: \"Built an engaging Hirit Job Portal for users to search jobs and create resumes, while recruiters can easily post listings!\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Javascript\",\n            \"Tailwind\",\n            \"Supabase\"\n        ],\n        imageUrl: \"/image4.png\",\n        link: \"https://www.google.com\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Redux Toolkit\",\n    \"Express\",\n    \"Framer Motion\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZGF0YS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxRQUFnQjtJQUMzQjtRQUNFQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDR0QsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDRDtRQUNFRCxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGVBQThCO0lBQ3pDO1FBQ0VDLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO1lBQUM7WUFBUztZQUFjO1lBQVk7U0FBUztRQUNuREMsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtZQUFDO1lBQVM7WUFBZ0I7U0FBUztRQUN6Q0MsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtZQUFDO1lBQVM7WUFBUztZQUFjO1lBQVk7WUFBVztTQUFPO1FBQ3JFQyxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBZ0I7UUFDWkMsTUFBTTtZQUFDO1lBQVM7WUFBUztZQUFjO1lBQVk7U0FBVztRQUNsRUMsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUssTUFBTUMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2RhdGEudHM/NjgxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rLCBQcm9qZWN0SW5mbyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua1tdID0gW1xuICB7XG4gICAgbmFtZUVuZzogXCJIb21lXCIsXG4gICAgaGFzaDogXCIjaG9tZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZUVuZzogXCJBYm91dFwiLFxuICAgIGhhc2g6IFwiI2Fib3V0XCIsXG4gIH0sXG4gIHtcbiAgICAgbmFtZUVuZzogXCJQcm9qZWN0c1wiLFxuICAgICBoYXNoOiBcIiNwcm9qZWN0c1wiLFxuICAgfSxcbiAge1xuICAgIG5hbWVFbmc6IFwiU2tpbGxzXCIsXG4gICAgaGFzaDogXCIjc2tpbGxzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lRW5nOiBcIkNvbnRhY3RcIixcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhOiBQcm9qZWN0SW5mb1tdID0gW1xuICB7XG4gICAgdGl0bGU6IFwiSU1EQisgQ2xvbmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnVpbHQgYW4gSU1EYiByYXRpbmcgY2xvbmUgZmVhdHVyaW5nIHJlYWwtdGltZSBkYXRhLCBwYWdpbmF0aW9uLCBzZWFyY2gsIGJvb2ttYXJraW5nLCBtYW51YWwgcmF0aW5ncywgbXVsdGlsaW5ndWFsIHN1cHBvcnQsIGFuZCBsb2NhbCBzdG9yYWdlIVwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiSmF2YXNjcmlwdFwiLCBcIlRhaWx3aW5kXCIsIFwiTm9kZUpTXCJdLFxuICAgIGltYWdlVXJsOiBcImFzc2V0cy9zd2lnZ3kuanBlZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jaW5ldmVyc2UtMXg4YTJscWh6LW9ta2FyYmhhdmFyZXMtcHJvamVjdHMudmVyY2VsLmFwcC9cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkV4cGVuc2UgVHJhY2tlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXZlbG9wZWQgYW4gRXhwZW5zZSBUcmFja2VyIGFwcCB0byBtYW5hZ2UgYWNjb3VudHMgZWZmZWN0aXZlbHksIGVuYWJsaW5nIHVzZXJzIHRvIGxvZyBleHBlbnNlcywgY2F0ZWdvcml6ZSB0cmFuc2FjdGlvbnMgJiBsYXRlc3QgdHJlbmRzIGluIGVjb25vbXkuXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZXN0ZnVsIEFQSXNcIiwgXCJOb2RlSnNcIl0sXG4gICAgaW1hZ2VVcmw6IFwiL2ltYWdlMi5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vbW9uZXktYmFsbC52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3dpZ2d5IENsb25lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBidWlsZGluZyBhIFN3aWdneSBjbG9uZSwgYSBmZWF0dXJlLXJpY2ggZm9vZCBkZWxpdmVyeSBhcHBsaWNhdGlvbiB0aGF0IGluY2x1ZGVzIGZ1bmN0aW9uYWxpdGllcyBsaWtlIHVzZXIgYXV0aGVudGljYXRpb24sIHJlc3RhdXJhbnQgbGlzdGluZywgb3JkZXIgJiBwYXltZW50LlwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJTd2lnZ3kgQVBJXCIsIFwiVGFpbHdpbmRcIiwgXCJOb2RlSlNcIiAsIFwiSkVTVFwiXSxcbiAgICBpbWFnZVVybDogXCIvaW1hZ2UzLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGlyaXQgSm9iIFBvcnRhbCArIFJlc3VtZSBCdWlsZGVyXCIsXG4gICAgZGVzY3JpcHRpb246ICAgIFwiQnVpbHQgYW4gZW5nYWdpbmcgSGlyaXQgSm9iIFBvcnRhbCBmb3IgdXNlcnMgdG8gc2VhcmNoIGpvYnMgYW5kIGNyZWF0ZSByZXN1bWVzLCB3aGlsZSByZWNydWl0ZXJzIGNhbiBlYXNpbHkgcG9zdCBsaXN0aW5ncyFcIixcbiAgICAgICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkphdmFzY3JpcHRcIiwgXCJUYWlsd2luZFwiLCBcIlN1cGFiYXNlXCJdLFxuICAgIGltYWdlVXJsOiBcIi9pbWFnZTQucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2tpbGxzRGF0YSA9IFtcbiAgXCJIVE1MXCIsXG4gIFwiQ1NTXCIsXG4gIFwiSmF2YVNjcmlwdFwiLFxuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJSZWFjdFwiLFxuICBcIk5leHQuanNcIixcbiAgXCJOb2RlLmpzXCIsXG4gIFwiR2l0XCIsXG4gIFwiVGFpbHdpbmRcIixcbiAgXCJQcmlzbWFcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiUmVkdXggVG9vbGtpdFwiLFxuICBcIkV4cHJlc3NcIixcbiAgXCJGcmFtZXIgTW90aW9uXCIsXG5dO1xuIl0sIm5hbWVzIjpbImxpbmtzIiwibmFtZUVuZyIsImhhc2giLCJwcm9qZWN0c0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsImltYWdlVXJsIiwibGluayIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/data.ts\n"));

/***/ })

});