"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeNextClerkPropsWithEnv: function() { return /* binding */ mergeNextClerkPropsWithEnv; }\n/* harmony export */ });\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nconst mergeNextClerkPropsWithEnv = (props) => {\n  return {\n    ...props,\n    frontendApi: props.frontendApi || process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || \"\",\n    publishableKey: props.publishableKey || \"pk_test_cG9saXNoZWQtc3R1ZC01Ni5jbGVyay5hY2NvdW50cy5kZXYk\" || 0,\n    clerkJSUrl: props.clerkJSUrl || process.env.NEXT_PUBLIC_CLERK_JS,\n    clerkJSVersion: props.clerkJSVersion || process.env.NEXT_PUBLIC_CLERK_JS_VERSION,\n    proxyUrl: props.proxyUrl || process.env.NEXT_PUBLIC_CLERK_PROXY_URL || \"\",\n    domain: props.domain || process.env.NEXT_PUBLIC_CLERK_DOMAIN || \"\",\n    isSatellite: props.isSatellite || process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === \"true\",\n    signInUrl: props.signInUrl || \"/sign-in\" || 0,\n    signUpUrl: props.signUpUrl || \"/sign-up\" || 0,\n    afterSignInUrl: props.afterSignInUrl || \"/\" || 0,\n    afterSignUpUrl: props.afterSignUpUrl || \"/\" || 0,\n    sdkMetadata: {\n      name: \"@clerk/nextjs\",\n      version: \"4.29.3\"\n    }\n  };\n};\n\n//# sourceMappingURL=mergeNextClerkPropsWithEnv.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY2xlcmsvbmV4dGpzL2Rpc3QvZXNtL3V0aWxzL21lcmdlTmV4dENsZXJrUHJvcHNXaXRoRW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0MsNENBQTRDLDBEQUE2QyxJQUFJLENBQUU7QUFDL0Ysb0NBQW9DLE9BQU87QUFDM0MsNENBQTRDLE9BQU87QUFDbkQsZ0NBQWdDLE9BQU87QUFDdkMsNEJBQTRCLE9BQU87QUFDbkMsc0NBQXNDLE9BQU87QUFDN0Msa0NBQWtDLFVBQXlDLElBQUksQ0FBRTtBQUNqRixrQ0FBa0MsVUFBeUMsSUFBSSxDQUFFO0FBQ2pGLDRDQUE0QyxHQUErQyxJQUFJLENBQUU7QUFDakcsNENBQTRDLEdBQStDLElBQUksQ0FBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xlcmsvbmV4dGpzL2Rpc3QvZXNtL3V0aWxzL21lcmdlTmV4dENsZXJrUHJvcHNXaXRoRW52LmpzPzE2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVyZ2VOZXh0Q2xlcmtQcm9wc1dpdGhFbnYgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICBmcm9udGVuZEFwaTogcHJvcHMuZnJvbnRlbmRBcGkgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfRlJPTlRFTkRfQVBJIHx8IFwiXCIsXG4gICAgcHVibGlzaGFibGVLZXk6IHByb3BzLnB1Ymxpc2hhYmxlS2V5IHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1BVQkxJU0hBQkxFX0tFWSB8fCBcIlwiLFxuICAgIGNsZXJrSlNVcmw6IHByb3BzLmNsZXJrSlNVcmwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfSlMsXG4gICAgY2xlcmtKU1ZlcnNpb246IHByb3BzLmNsZXJrSlNWZXJzaW9uIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX0pTX1ZFUlNJT04sXG4gICAgcHJveHlVcmw6IHByb3BzLnByb3h5VXJsIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1BST1hZX1VSTCB8fCBcIlwiLFxuICAgIGRvbWFpbjogcHJvcHMuZG9tYWluIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX0RPTUFJTiB8fCBcIlwiLFxuICAgIGlzU2F0ZWxsaXRlOiBwcm9wcy5pc1NhdGVsbGl0ZSB8fCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTEVSS19JU19TQVRFTExJVEUgPT09IFwidHJ1ZVwiLFxuICAgIHNpZ25JblVybDogcHJvcHMuc2lnbkluVXJsIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1NJR05fSU5fVVJMIHx8IFwiXCIsXG4gICAgc2lnblVwVXJsOiBwcm9wcy5zaWduVXBVcmwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfU0lHTl9VUF9VUkwgfHwgXCJcIixcbiAgICBhZnRlclNpZ25JblVybDogcHJvcHMuYWZ0ZXJTaWduSW5VcmwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfQUZURVJfU0lHTl9JTl9VUkwgfHwgXCJcIixcbiAgICBhZnRlclNpZ25VcFVybDogcHJvcHMuYWZ0ZXJTaWduVXBVcmwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfQUZURVJfU0lHTl9VUF9VUkwgfHwgXCJcIixcbiAgICBzZGtNZXRhZGF0YToge1xuICAgICAgbmFtZTogXCJAY2xlcmsvbmV4dGpzXCIsXG4gICAgICB2ZXJzaW9uOiBcIjQuMjkuM1wiXG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCB7XG4gIG1lcmdlTmV4dENsZXJrUHJvcHNXaXRoRW52XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VOZXh0Q2xlcmtQcm9wc1dpdGhFbnYuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1bb82e197227\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzhjZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxYmI4MmUxOTcyMjdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ })

});