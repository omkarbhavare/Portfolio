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

/***/ "(app-pages-browser)/./src/components/contact.tsx":
/*!************************************!*\
  !*** ./src/components/contact.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-heading */ \"(app-pages-browser)/./src/components/section-heading.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_useInView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/useInView */ \"(app-pages-browser)/./src/lib/useInView.ts\");\n/* harmony import */ var _submitBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submitBtn */ \"(app-pages-browser)/./src/components/submitBtn.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ \"(app-pages-browser)/./node_modules/emailjs-com/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Contact() {\n    _s();\n    const { ref } = (0,_lib_useInView__WEBPACK_IMPORTED_MODULE_3__.useSectionInView)(\"#contact\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        senderEmail: \"\",\n        message: \"\"\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // EmailJS configuration\n    const SERVICE_ID = \"service_9hcj9pf\"; // Your EmailJS service ID\n    const TEMPLATE_ID = \"template_9nx5odh\"; // Your EmailJS template ID\n    const USER_ID = \"akreZzG01YIIoqy5a\"; // Your EmailJS user ID\n    // Handle change of input values\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    // Handle form submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        // Send the email using EmailJS\n        emailjs_com__WEBPACK_IMPORTED_MODULE_5__[\"default\"].send(SERVICE_ID, TEMPLATE_ID, {\n            senderEmail: formData.senderEmail,\n            message: formData.message\n        }, USER_ID).then(()=>{\n            setStatus(\"Email sent successfully!\");\n            setIsSubmitting(false);\n            setFormData({\n                senderEmail: \"\",\n                message: \"\"\n            });\n        }).catch((error)=>{\n            // Log detailed error for debugging\n            console.error(\"EmailJS Error:\", error.text || error);\n            setStatus(\"Failed to send email. Please try again.\");\n            setIsSubmitting(false);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.section, {\n        id: \"contact\",\n        ref: ref,\n        className: \"mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center\",\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Contact Me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 -mt-6 dark:text-white/80\",\n                children: \"Feel free to contact me directly through this form\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"mt-10 flex flex-col dark:text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none\",\n                        name: \"senderEmail\",\n                        type: \"email\",\n                        required: true,\n                        maxLength: 500,\n                        placeholder: \"Your email\",\n                        value: formData.senderEmail,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none\",\n                        name: \"message\",\n                        placeholder: \"Your message\",\n                        required: true,\n                        maxLength: 5000,\n                        value: formData.message,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_submitBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: isSubmitting ? \"Sending...\" : \"Submit\",\n                        disabled: isSubmitting\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-gray-700 dark:text-white/80\",\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\\\src\\\\components\\\\contact.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"tp2zr5De26W/DioHNKry+ArJW5E=\", false, function() {\n    return [\n        _lib_useInView__WEBPACK_IMPORTED_MODULE_3__.useSectionInView\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ087QUFDUjtBQUNZO0FBQ2Y7QUFDRjtBQUVuQixTQUFTTzs7SUFDdEIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0osZ0VBQWdCQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUFFVSxhQUFhO1FBQUlDLFNBQVM7SUFBRztJQUN4RSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUM7SUFFckMsd0JBQXdCO0lBQ3hCLE1BQU1nQixhQUFhLG1CQUFtQiwwQkFBMEI7SUFDaEUsTUFBTUMsY0FBYyxvQkFBb0IsMkJBQTJCO0lBQ25FLE1BQU1DLFVBQVUscUJBQXFCLHVCQUF1QjtJQUU1RCxnQ0FBZ0M7SUFDaEMsTUFBTUMsZUFBZSxDQUFDQztRQUNwQlgsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDWSxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUM3RDtJQUVBLHlCQUF5QjtJQUN6QixNQUFNQyxlQUFlLENBQUNKO1FBQ3BCQSxFQUFFSyxjQUFjO1FBQ2hCWixnQkFBZ0I7UUFFaEIsK0JBQStCO1FBQy9CUix3REFDTyxDQUFDVyxZQUFZQyxhQUFhO1lBQzdCUCxhQUFhRixTQUFTRSxXQUFXO1lBQ2pDQyxTQUFTSCxTQUFTRyxPQUFPO1FBQzNCLEdBQUdPLFNBQ0ZTLElBQUksQ0FBQztZQUNKWixVQUFVO1lBQ1ZGLGdCQUFnQjtZQUNoQkosWUFBWTtnQkFBRUMsYUFBYTtnQkFBSUMsU0FBUztZQUFHO1FBQzdDLEdBQ0NpQixLQUFLLENBQUMsQ0FBQ0M7WUFDTixtQ0FBbUM7WUFDbkNDLFFBQVFELEtBQUssQ0FBQyxrQkFBa0JBLE1BQU1FLElBQUksSUFBSUY7WUFDOUNkLFVBQVU7WUFDVkYsZ0JBQWdCO1FBQ2xCO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ1gsaURBQU1BLENBQUM4QixPQUFPO1FBQ2JDLElBQUc7UUFDSDFCLEtBQUtBO1FBQ0wyQixXQUFVO1FBQ1ZDLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxhQUFhO1lBQUVELFNBQVM7UUFBRTtRQUMxQkUsWUFBWTtZQUFFQyxVQUFVO1FBQUU7UUFDMUJDLFVBQVU7WUFBRUMsTUFBTTtRQUFLOzswQkFFdkIsOERBQUN4Qyx3REFBY0E7MEJBQUM7Ozs7OzswQkFDaEIsOERBQUN5QztnQkFBRVIsV0FBVTswQkFBeUM7Ozs7OzswQkFJdEQsOERBQUNTO2dCQUFLQyxVQUFVcEI7Z0JBQWNVLFdBQVU7O2tDQUN0Qyw4REFBQ1c7d0JBQ0NYLFdBQVU7d0JBQ1ZaLE1BQUs7d0JBQ0x3QixNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxXQUFXO3dCQUNYQyxhQUFZO3dCQUNaMUIsT0FBT2YsU0FBU0UsV0FBVzt3QkFDM0J3QyxVQUFVL0I7Ozs7OztrQ0FFWiw4REFBQ2dDO3dCQUNDakIsV0FBVTt3QkFDVlosTUFBSzt3QkFDTDJCLGFBQVk7d0JBQ1pGLFFBQVE7d0JBQ1JDLFdBQVc7d0JBQ1h6QixPQUFPZixTQUFTRyxPQUFPO3dCQUN2QnVDLFVBQVUvQjs7Ozs7O2tDQUVaLDhEQUFDZixrREFBU0E7d0JBQUMyQixNQUFNbkIsZUFBZSxlQUFlO3dCQUFVd0MsVUFBVXhDOzs7Ozs7Ozs7Ozs7WUFHcEVFLHdCQUNDLDhEQUFDNEI7Z0JBQUVSLFdBQVU7MEJBQXlDcEI7Ozs7Ozs7Ozs7OztBQUk5RDtHQW5Gd0JSOztRQUNOSCw0REFBZ0JBOzs7S0FEVkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC50c3g/NzIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSBcIi4vc2VjdGlvbi1oZWFkaW5nXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU2VjdGlvbkluVmlldyB9IGZyb20gXCJAL2xpYi91c2VJblZpZXdcIjtcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSBcIi4vc3VibWl0QnRuXCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiZW1haWxqcy1jb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgeyByZWYgfSA9IHVzZVNlY3Rpb25JblZpZXcoXCIjY29udGFjdFwiKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IHNlbmRlckVtYWlsOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH0pO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gRW1haWxKUyBjb25maWd1cmF0aW9uXG4gIGNvbnN0IFNFUlZJQ0VfSUQgPSBcInNlcnZpY2VfOWhjajlwZlwiOyAvLyBZb3VyIEVtYWlsSlMgc2VydmljZSBJRFxuICBjb25zdCBURU1QTEFURV9JRCA9IFwidGVtcGxhdGVfOW54NW9kaFwiOyAvLyBZb3VyIEVtYWlsSlMgdGVtcGxhdGUgSURcbiAgY29uc3QgVVNFUl9JRCA9IFwiYWtyZVp6RzAxWUlJb3F5NWFcIjsgLy8gWW91ciBFbWFpbEpTIHVzZXIgSURcblxuICAvLyBIYW5kbGUgY2hhbmdlIG9mIGlucHV0IHZhbHVlc1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAvLyBTZW5kIHRoZSBlbWFpbCB1c2luZyBFbWFpbEpTXG4gICAgZW1haWxqc1xuICAgICAgLnNlbmQoU0VSVklDRV9JRCwgVEVNUExBVEVfSUQsIHtcbiAgICAgICAgc2VuZGVyRW1haWw6IGZvcm1EYXRhLnNlbmRlckVtYWlsLFxuICAgICAgICBtZXNzYWdlOiBmb3JtRGF0YS5tZXNzYWdlLFxuICAgICAgfSwgVVNFUl9JRClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRGb3JtRGF0YSh7IHNlbmRlckVtYWlsOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gTG9nIGRldGFpbGVkIGVycm9yIGZvciBkZWJ1Z2dpbmdcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVtYWlsSlMgRXJyb3I6XCIsIGVycm9yLnRleHQgfHwgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoXCJGYWlsZWQgdG8gc2VuZCBlbWFpbC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uc2VjdGlvblxuICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPVwibWItMjAgc206bWItMjggc2Nyb2xsLW10LTI4IHctW21pbigxMDAlLDM4cmVtKV0gdGV4dC1jZW50ZXJcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgPlxuICAgICAgPFNlY3Rpb25IZWFkaW5nPkNvbnRhY3QgTWU8L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCAtbXQtNiBkYXJrOnRleHQtd2hpdGUvODBcIj5cbiAgICAgICAgRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgZGlyZWN0bHkgdGhyb3VnaCB0aGlzIGZvcm1cbiAgICAgIDwvcD5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LWNvbCBkYXJrOnRleHQtYmxhY2tcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCBweC00IHJvdW5kZWQtbGcgYm9yZGVyQmxhY2sgZGFyazpiZy13aGl0ZSBkYXJrOmJnLW9wYWNpdHktMjAgZGFyazpmb2N1czpiZy1vcGFjaXR5LTEwIHRyYW5zaXRpb24tYWxsIGRhcms6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICBuYW1lPVwic2VuZGVyRW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBtYXhMZW5ndGg9ezUwMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zZW5kZXJFbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTUyIG15LTMgcm91bmRlZC1sZyByZXNpemUtbm9uZSBib3JkZXJCbGFjayBwLTQgZGFyazpiZy13aGl0ZSBkYXJrOmJnLW9wYWNpdHktMjAgZGFyazpmb2N1czpiZy1vcGFjaXR5LTEwIHRyYW5zaXRpb24tYWxsIGRhcms6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MDAwfVxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdWJtaXRCdG4gdGV4dD17aXNTdWJtaXR0aW5nID8gXCJTZW5kaW5nLi4uXCIgOiBcIlN1Ym1pdFwifSBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7c3RhdHVzICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZS84MFwiPntzdGF0dXN9PC9wPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWN0aW9uSGVhZGluZyIsIm1vdGlvbiIsInVzZVNlY3Rpb25JblZpZXciLCJTdWJtaXRCdG4iLCJlbWFpbGpzIiwiQ29udGFjdCIsInJlZiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzZW5kZXJFbWFpbCIsIm1lc3NhZ2UiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJTRVJWSUNFX0lEIiwiVEVNUExBVEVfSUQiLCJVU0VSX0lEIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VuZCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInRleHQiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidmlld3BvcnQiLCJvbmNlIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/contact.tsx\n"));

/***/ })

});