"use strict";
const proto = Object.getPrototypeOf;
console.log("\n");
console.time("T");

//=====================================================

class cls {
  constructor(fname, lname, age) {
    this._fname = fname;
    this._lname = lname;
    this._age = age;
  }

  get fullname() {
    return this._fullname;
  }
  set fullname(fn) {
    this._fullname = fn;
  }

  set age(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }

}

const p1 = new cls('Mahmoud', 'Gad', 26);

console.log(p1.fullname);
console.log(p1._age);
p1.fullname = 'Ali Gad';
p1.age = 30;
console.log(p1.fullname);
console.log(p1._age);

//=====================================================

console.log("\n");
console.timeEnd("T");