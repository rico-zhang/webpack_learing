"use strict";

function Print() {}

var obj = {
  loginId: "abc"
};
Print.call(obj); //相当于：Print.call(obj);