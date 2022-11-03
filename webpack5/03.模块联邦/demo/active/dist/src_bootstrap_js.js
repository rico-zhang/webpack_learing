"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "webpack/sharing/consume/default/jquery/jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ "./src/news.js");
/* harmony import */ var home_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! home/now */ "webpack/container/remote/home/now");
/* harmony import */ var home_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(home_now__WEBPACK_IMPORTED_MODULE_2__);



home_now__WEBPACK_IMPORTED_MODULE_2___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(document.body));

// 生成活动页标题
jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1>').text('活动页').appendTo(document.body);

// 活动页中有一个新闻列表
(0,_news__WEBPACK_IMPORTED_MODULE_1__["default"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(document.body));


/***/ }),

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
//# sourceMappingURL=src_bootstrap_js.js.map