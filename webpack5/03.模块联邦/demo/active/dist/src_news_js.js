"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_news_js"],{

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container) {
  const ul = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').appendTo(container);
  let html = '';
  for (var i = 1; i <= 20; i++) {
    html += `<li>新闻${i}</li>`;
  }
  ul.html(html);
}


/***/ })

}]);
//# sourceMappingURL=src_news_js.js.map