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

/***/ "(app-pages-browser)/./src/components/project-card.tsx":
/*!*****************************************!*\
  !*** ./src/components/project-card.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Project(param) {\n    let { title, description, tags, imageUrl, link } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.33 1\"\n        ]\n    });\n    const scaleProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    const opacityProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.6,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        ref: ref,\n        style: {\n            scale: scaleProgess,\n            opacity: opacityProgess\n        },\n        className: \"group mb-3 sm:mb-8 last:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-3 pb-6 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-semibold\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 leading-relaxed text-gray-700 dark:text-white/70\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-wrap mt-4 gap-2 sm:mt-auto\",\n                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70\",\n                                    children: tag\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition\",\n                                children: \"Visit Project\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: imageUrl,\n                    alt: \"Project I worked on\",\n                    quality: 95,\n                    width: 300,\n                    height: 100,\n                    className: \"absolute sm:block top-8 -right-20 rounded-t-lg shadow-2xl transition group-even:right-25 group-even:-left-5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\project-card.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"bUn7Yqu7iysk+L6Z0DhRIR4HchU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNBO0FBQ2lDO0FBS2pELFNBQVNLLFFBQVEsS0FNakI7UUFOaUIsRUFDOUJDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxJQUFJLEVBQ0pDLFFBQVEsRUFDUkMsSUFBSSxFQUNTLEdBTmlCOztJQU85QixNQUFNQyxNQUFNWCw2Q0FBTUEsQ0FBaUI7SUFDbkMsTUFBTSxFQUFFWSxlQUFlLEVBQUUsR0FBR1Qsd0RBQVNBLENBQUM7UUFDcENVLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFPO1NBQVM7SUFDM0I7SUFDQSxNQUFNQyxlQUFlWCwyREFBWUEsQ0FBQ1EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFLO0tBQUU7SUFDbkUsTUFBTUksaUJBQWlCWiwyREFBWUEsQ0FBQ1EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFLO0tBQUU7SUFFckUscUJBQ0UsOERBQUNWLGlEQUFNQSxDQUFDZSxHQUFHO1FBQ1ROLEtBQUtBO1FBQ0xPLE9BQU87WUFDTEMsT0FBT0o7WUFDUEssU0FBU0o7UUFDWDtRQUNBSyxXQUFVO2tCQUVWLDRFQUFDQztZQUFRRCxXQUFVOzs4QkFDakIsOERBQUNKO29CQUFJSSxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQTBCZjs7Ozs7O3NDQUN4Qyw4REFBQ2tCOzRCQUFFSCxXQUFVO3NDQUNWZDs7Ozs7O3NDQUVILDhEQUFDa0I7NEJBQUdKLFdBQVU7c0NBQ1hiLEtBQUtrQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2QsOERBQUNDO29DQUNDUixXQUFVOzhDQUdUTTttQ0FGSUM7Ozs7Ozs7Ozs7c0NBUVgsOERBQUNFOzRCQUFFQyxNQUFNckI7NEJBQU1HLFFBQU87NEJBQVNtQixLQUFJO3NDQUNqQyw0RUFBQ0M7Z0NBQU9aLFdBQVU7MENBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPeEcsOERBQUNwQixrREFBS0E7b0JBQ0ppQyxLQUFLekI7b0JBQ0wwQixLQUFJO29CQUNKQyxTQUFTO29CQUNUQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSakIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E3RHdCaEI7O1FBUU1GLG9EQUFTQTtRQUloQkMsdURBQVlBO1FBQ1ZBLHVEQUFZQTs7O0tBYmJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtY2FyZC50c3g/NjQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUHJvamVjdEluZm8gfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxudHlwZSBQcm9qZWN0UHJvcHMgPSBQcm9qZWN0SW5mbztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdGFncyxcbiAgaW1hZ2VVcmwsICAvLyBpbWFnZVVybCBpcyBwYXNzZWQgaGVyZVxuICBsaW5rLCAgLy8gVVJMIGZvciB0aGUgcHJvamVjdFxufTogUHJvamVjdFByb3BzKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogcmVmLFxuICAgIG9mZnNldDogW1wiMCAxXCIsIFwiMS4zMyAxXCJdLFxuICB9KTtcbiAgY29uc3Qgc2NhbGVQcm9nZXNzID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMC44LCAxXSk7XG4gIGNvbnN0IG9wYWNpdHlQcm9nZXNzID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMC42LCAxXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBzY2FsZTogc2NhbGVQcm9nZXNzLFxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5UHJvZ2VzcyxcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJncm91cCBtYi0zIHNtOm1iLTggbGFzdDptYi0wXCJcbiAgICA+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYXgtdy1bNTByZW1dIGJvcmRlciBib3JkZXItYmxhY2svNSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzbTpwci04IHJlbGF0aXZlIHNtOmgtWzI1cmVtXSBob3ZlcjpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uIHNtOmdyb3VwLWV2ZW46cGwtOCBkYXJrOnRleHQtd2hpdGUgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmhvdmVyOmJnLXdoaXRlLzIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi02IHB4LTQgc206cGwtMTAgc206cHItMiBzbTpwdC0xMCBzbTptYXgtdy1bNTAlXSBmbGV4IGZsZXgtY29sIGgtZnVsbCBzbTpncm91cC1ldmVuOm1sLVsxOHJlbV1cIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlLzcwXCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtdC00IGdhcC0yIHNtOm10LWF1dG9cIj5cbiAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay9bMC43XSBweC0zIHB5LTEgdGV4dC1bMC43cmVtXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZGFyazp0ZXh0LXdoaXRlLzcwXCJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICB7LyogQnV0dG9uIHRoYXQgbGlua3MgdG8gdGhlIHByb2plY3QgVVJMICovfVxuICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCBweC00IHB5LTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICBWaXNpdCBQcm9qZWN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBEeW5hbWljYWxseSBzZXQgdGhlIGltYWdlVXJsICovfVxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgIGFsdD1cIlByb2plY3QgSSB3b3JrZWQgb25cIlxuICAgICAgICAgIHF1YWxpdHk9ezk1fVxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgc206YmxvY2sgdG9wLTggLXJpZ2h0LTIwIHJvdW5kZWQtdC1sZyBzaGFkb3ctMnhsIHRyYW5zaXRpb24gZ3JvdXAtZXZlbjpyaWdodC0yNSBncm91cC1ldmVuOi1sZWZ0LTVcIlxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJJbWFnZSIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIlByb2plY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsImltYWdlVXJsIiwibGluayIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInNjYWxlUHJvZ2VzcyIsIm9wYWNpdHlQcm9nZXNzIiwiZGl2Iiwic3R5bGUiLCJzY2FsZSIsIm9wYWNpdHkiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDMiLCJwIiwidWwiLCJtYXAiLCJ0YWciLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJyZWwiLCJidXR0b24iLCJzcmMiLCJhbHQiLCJxdWFsaXR5Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/project-card.tsx\n"));

/***/ })

});