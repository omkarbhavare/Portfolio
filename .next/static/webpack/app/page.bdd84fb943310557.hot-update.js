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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\nconst links = [\n    {\n        nameEng: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        nameEng: \"About\",\n        hash: \"#about\"\n    },\n    {\n        nameEng: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        nameEng: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        nameEng: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"IMDB+ Clone\",\n        description: \"Built an IMDb rating clone featuring real-time data, pagination, search, bookmarking, manual ratings, multilingual support, and local storage!\",\n        tags: [\n            \"React\",\n            \"Javascript\",\n            \"Tailwind\",\n            \"NodeJS\"\n        ],\n        imageUrl: \"/imdb.jpg\",\n        link: \"https://cineverse-1x8a2lqhz-omkarbhavares-projects.vercel.app/\"\n    },\n    {\n        title: \"Expense Tracker\",\n        description: \"Developed an Expense Tracker app to manage accounts effectively, enabling users to log expenses, categorize transactions & latest trends in economy.\",\n        tags: [\n            \"React\",\n            \"Restful APIs\",\n            \"NodeJs\"\n        ],\n        imageUrl: \"/money.png\",\n        link: \"https://money-ball.vercel.app/\"\n    },\n    {\n        title: \"Swiggy Clone\",\n        description: \"I'm building a Swiggy clone, a feature-rich food delivery application that includes functionalities like user authentication, restaurant listing, order & payment.\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Swiggy API\",\n            \"Tailwind\",\n            \"NodeJS\",\n            \"JEST\"\n        ],\n        imageUrl: \"/swiggy.png\",\n        link: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s\"\n    },\n    {\n        title: \"Hirit Job Portal + Resume Builder\",\n        description: \"Built an engaging Hirit Job Portal for users to search jobs and create resumes, while recruiters can easily post listings!\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Javascript\",\n            \"Tailwind\",\n            \"Supabase\"\n        ],\n        imageUrl: \"/job.jpeg\",\n        link: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Redux Toolkit\",\n    \"Express\",\n    \"Framer Motion\",\n    \"JAVA\",\n    \"AWS\",\n    \"Docker\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZGF0YS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxRQUFnQjtJQUMzQjtRQUNFQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDR0QsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDRDtRQUNFRCxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGVBQThCO0lBQ3pDO1FBQ0VDLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO1lBQUM7WUFBUztZQUFjO1lBQVk7U0FBUztRQUNuREMsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtZQUFDO1lBQVM7WUFBZ0I7U0FBUztRQUN6Q0MsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtZQUFDO1lBQVM7WUFBUztZQUFjO1lBQVk7WUFBVztTQUFPO1FBQ3JFQyxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBZ0I7UUFDaEJDLE1BQU07WUFBQztZQUFTO1lBQVM7WUFBYztZQUFZO1NBQVc7UUFDOURDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGFBQWE7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9kYXRhLnRzPzY4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluaywgUHJvamVjdEluZm8gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtbXSA9IFtcbiAge1xuICAgIG5hbWVFbmc6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWVFbmc6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgIG5hbWVFbmc6IFwiUHJvamVjdHNcIixcbiAgICAgaGFzaDogXCIjcHJvamVjdHNcIixcbiAgIH0sXG4gIHtcbiAgICBuYW1lRW5nOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZUVuZzogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YTogUHJvamVjdEluZm9bXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIklNREIrIENsb25lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWx0IGFuIElNRGIgcmF0aW5nIGNsb25lIGZlYXR1cmluZyByZWFsLXRpbWUgZGF0YSwgcGFnaW5hdGlvbiwgc2VhcmNoLCBib29rbWFya2luZywgbWFudWFsIHJhdGluZ3MsIG11bHRpbGluZ3VhbCBzdXBwb3J0LCBhbmQgbG9jYWwgc3RvcmFnZSFcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkphdmFzY3JpcHRcIiwgXCJUYWlsd2luZFwiLCBcIk5vZGVKU1wiXSxcbiAgICBpbWFnZVVybDogXCIvaW1kYi5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY2luZXZlcnNlLTF4OGEybHFoei1vbWthcmJoYXZhcmVzLXByb2plY3RzLnZlcmNlbC5hcHAvXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFeHBlbnNlIFRyYWNrZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRGV2ZWxvcGVkIGFuIEV4cGVuc2UgVHJhY2tlciBhcHAgdG8gbWFuYWdlIGFjY291bnRzIGVmZmVjdGl2ZWx5LCBlbmFibGluZyB1c2VycyB0byBsb2cgZXhwZW5zZXMsIGNhdGVnb3JpemUgdHJhbnNhY3Rpb25zICYgbGF0ZXN0IHRyZW5kcyBpbiBlY29ub215LlwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVzdGZ1bCBBUElzXCIsIFwiTm9kZUpzXCJdLFxuICAgIGltYWdlVXJsOiBcIi9tb25leS5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vbW9uZXktYmFsbC52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3dpZ2d5IENsb25lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBidWlsZGluZyBhIFN3aWdneSBjbG9uZSwgYSBmZWF0dXJlLXJpY2ggZm9vZCBkZWxpdmVyeSBhcHBsaWNhdGlvbiB0aGF0IGluY2x1ZGVzIGZ1bmN0aW9uYWxpdGllcyBsaWtlIHVzZXIgYXV0aGVudGljYXRpb24sIHJlc3RhdXJhbnQgbGlzdGluZywgb3JkZXIgJiBwYXltZW50LlwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJTd2lnZ3kgQVBJXCIsIFwiVGFpbHdpbmRcIiwgXCJOb2RlSlNcIiAsIFwiSkVTVFwiXSxcbiAgICBpbWFnZVVybDogXCIvc3dpZ2d5LnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVEN5LS1PZkd3TVRpdWQ3RU53cER4WGdGd0ZvOUlIdGN0NUt3JnNcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkhpcml0IEpvYiBQb3J0YWwgKyBSZXN1bWUgQnVpbGRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiAgICBcIkJ1aWx0IGFuIGVuZ2FnaW5nIEhpcml0IEpvYiBQb3J0YWwgZm9yIHVzZXJzIHRvIHNlYXJjaCBqb2JzIGFuZCBjcmVhdGUgcmVzdW1lcywgd2hpbGUgcmVjcnVpdGVycyBjYW4gZWFzaWx5IHBvc3QgbGlzdGluZ3MhXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkphdmFzY3JpcHRcIiwgXCJUYWlsd2luZFwiLCBcIlN1cGFiYXNlXCJdLFxuICAgIGltYWdlVXJsOiBcIi9qb2IuanBlZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVEN5LS1PZkd3TVRpdWQ3RU53cER4WGdGd0ZvOUlIdGN0NUt3JnNcIixcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gIFwiSFRNTFwiLFxuICBcIkNTU1wiLFxuICBcIkphdmFTY3JpcHRcIixcbiAgXCJUeXBlU2NyaXB0XCIsXG4gIFwiUmVhY3RcIixcbiAgXCJOZXh0LmpzXCIsXG4gIFwiTm9kZS5qc1wiLFxuICBcIkdpdFwiLFxuICBcIlRhaWx3aW5kXCIsXG4gIFwiUHJpc21hXCIsXG4gIFwiTW9uZ29EQlwiLFxuICBcIlJlZHV4IFRvb2xraXRcIixcbiAgXCJFeHByZXNzXCIsXG4gIFwiRnJhbWVyIE1vdGlvblwiLFxuICBcIkpBVkFcIixcbiAgXCJBV1NcIixcbiAgXCJEb2NrZXJcIlxuXTtcbiJdLCJuYW1lcyI6WyJsaW5rcyIsIm5hbWVFbmciLCJoYXNoIiwicHJvamVjdHNEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJpbWFnZVVybCIsImxpbmsiLCJza2lsbHNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/data.ts\n"));

/***/ })

});