"use strict";

var _this = void 0;

var a = 1;
var b = 2;

var c = function c() {
  console.log(_this);

  var d = function d() {
    console.log(_this);
  };
};

var arr = [];

var _loop = function _loop(i) {
  arr[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}