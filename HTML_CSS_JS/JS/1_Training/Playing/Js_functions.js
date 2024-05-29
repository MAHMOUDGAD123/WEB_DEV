// "use strict";
const log = console.log;
console.log("\n\n");
//=====================================================
// Playground Start

// const fun = Function("x", "y", "return x + y");
// const _fun = (x, y) => x << y;
// const _returnFun = ((x, y) => x << y)(10, 2);

// // anonymous self-invoking function
// (function () {
//   let __sum = 0;
//   for (const arg of arguments) __sum += arg;
//   console.log("length =", arguments.length);
//   console.log("__sum  =", __sum);
// })(50, 50, 50, 50, 1000);

// (function anyThing(x, y, z, ...rest) {
//   console.log(x, y, x, rest);
// })(1, 2, 3, 4, 5, 6, 7, 8, 9);

const counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());

/*===========================================================*/
// function.{ bind() | call() | apply() }

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },

//   fullAddress: function (city, country) {
//     return city + " - " + country;
//   },
// };

// const person1 = {
//   firstName: "Mahmoud",
//   lastName: "Gad",
// };

// console.log(
//   "address (bind) :",
//   person.fullAddress.bind(person1, "Mansoura", "Egypt")()
// );
// console.log(
//   "address (call) :",
//   person.fullAddress.call(person1, "Mansoura", "Egypt")
// );
// console.log(
//   "address (apply):",
//   person.fullAddress.apply(person1, ["Mansoura", "Egypt"])
// );

// const __arr = [5, 7, 9, 1, 1, 4, 7];

// console.log(Math.max.bind(null, 1, 2, 4, 8, 9, 1, 4)());
// console.log(Math.max.call(null, 1, 2, 4, 8, 9, 1, 4));
// console.log(Math.max.apply(null, [1, 2, 4, 8, 9, 1, 4]));

//=====================================================

const rec = (n) => {
  if (n <= 0) return;
  log(n);
  rec(n - 1);
  log(n);
};
// rec(3);

function a(x) {
  return function b(y) {
    return function c(z) {
      log(x + y + z);
    };
  };
}
// a(1)(2)(3);

//=====================================================

function f1(name, age) {
  this.name = name;
  this.age = age;
  return new.target ? this : null;
}

const p1 = f1("mahmoud", 26);
const p2 = new f1("mahmoud", 26);

log("p1:", p1);
log("p2:", p2.name + " -- " + p2.age);

//=====================================================

// function vs arrow-function
function count_down1(from) {
  this.counter = from;

  const intId = setInterval(function () {
    log(this.counter--);
    if (!this.counter) clearInterval(intId);
  }, 1000);
}

function count_down2(from) {
  this.counter = from;
  self = this;

  const intId = setInterval(function () {
    log(self.counter--);
    if (!self.counter) clearInterval(intId);
  }, 1000);
}

function count_down3(from) {
  this.counter = from;

  const intId = setInterval(() => {
    log(this.counter--);
    if (!this.counter) clearInterval(intId);
  }, 1000);
}

// const c1 = new count_down1(10); // ❌
// const c2 = new count_down2(10); // 🆗
const c3 = new count_down3(10); // ✅

// Playground End
//=====================================================

console.log("\n\n");
