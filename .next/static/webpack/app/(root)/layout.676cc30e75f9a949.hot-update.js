"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventDefaultValues: function() { return /* binding */ eventDefaultValues; },\n/* harmony export */   headerLinks: function() { return /* binding */ headerLinks; }\n/* harmony export */ });\nconst headerLinks = [\n    {\n        label: \"Home\",\n        route: \"/\"\n    },\n    {\n        label: \"Book Bus\",\n        route: \"/events/create\"\n    },\n    {\n        label: \"My Profile\",\n        route: \"/profile\"\n    }\n];\nconst eventDefaultValues = {\n    title: \"\",\n    description: \"\",\n    location: \"\",\n    imageUrl: \"\",\n    startDateTime: new Date(),\n    endDateTime: new Date(),\n    categoryId: \"\",\n    price: \"\",\n    isFree: false,\n    url: \"\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnN0YW50cy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGNBQWM7SUFDekI7UUFDRUMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFTSxNQUFNQyxxQkFBcUI7SUFDaENDLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsZUFBZSxJQUFJQztJQUNuQkMsYUFBYSxJQUFJRDtJQUNqQkUsWUFBWTtJQUNaQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsS0FBSztBQUNQLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LnRzPzY2NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhlYWRlckxpbmtzID0gW1xuICB7XG4gICAgbGFiZWw6ICdIb21lJyxcbiAgICByb3V0ZTogJy8nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdCb29rIEJ1cycsXG4gICAgcm91dGU6ICcvZXZlbnRzL2NyZWF0ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ015IFByb2ZpbGUnLFxuICAgIHJvdXRlOiAnL3Byb2ZpbGUnLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgZXZlbnREZWZhdWx0VmFsdWVzID0ge1xuICB0aXRsZTogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgbG9jYXRpb246ICcnLFxuICBpbWFnZVVybDogJycsXG4gIHN0YXJ0RGF0ZVRpbWU6IG5ldyBEYXRlKCksXG4gIGVuZERhdGVUaW1lOiBuZXcgRGF0ZSgpLFxuICBjYXRlZ29yeUlkOiAnJyxcbiAgcHJpY2U6ICcnLFxuICBpc0ZyZWU6IGZhbHNlLFxuICB1cmw6ICcnLFxufVxuIl0sIm5hbWVzIjpbImhlYWRlckxpbmtzIiwibGFiZWwiLCJyb3V0ZSIsImV2ZW50RGVmYXVsdFZhbHVlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsImltYWdlVXJsIiwic3RhcnREYXRlVGltZSIsIkRhdGUiLCJlbmREYXRlVGltZSIsImNhdGVnb3J5SWQiLCJwcmljZSIsImlzRnJlZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./constants/index.ts\n"));

/***/ })

});