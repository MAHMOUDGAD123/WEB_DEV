"use strict";
const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

//=====================================================

// playing with Stirng prototype
// fill hash if string length is less than 11
String.prototype.hashFill = function () {
  let _this = this;
  while (_this.length < 11) {
    _this = '#' + _this;
  }
  return _this.toString();
}

const S1 = '1354';
log(S1);
log(S1.hashFill());

//=====================================================
log();
console.timeEnd("T");
