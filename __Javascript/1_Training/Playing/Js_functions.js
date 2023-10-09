console.log("\n\n");
//=====================================================
// Playground Start

("use strict");

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
    return (count += 1);
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

// Playground End
//=====================================================

console.log("\n\n");
