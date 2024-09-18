// assert
// ----------------------------------------------------------------------

// for (let i = 0; i < 10; ++i) 47894 ** 1000;
//   const n = (Math.random() * 9 + 1) >>> 0;
//   console.log(`%cThe number is: ${n}`, "color: orange;");
//   console.assert(isEven(n), "%s", "the number isn't even ❌");
//   console.log("-----------------------");
// }

// ----------------------------------------------------------------------

// count - countReset
// ----------------------------------------------------------------------

// const countUserLogins = (user) => {
//   console.log("------------------");
//   console.count(); // all logins
//   console.count(user); // for a specific user
// };

// countUserLogins("MG");
// countUserLogins("Mera");
// countUserLogins("MG");
// countUserLogins("MO");
// countUserLogins("MG");
// countUserLogins("MO");
// countUserLogins("MG");
// console.log("--------- after reset ---------");
// console.countReset();
// console.countReset("MG");
// countUserLogins("MG");

// ----------------------------------------------------------------------

// debug
// ----------------------------------------------------------------------

// console.debug("debug");
// console.log("log");

// ----------------------------------------------------------------------

// dir
// ----------------------------------------------------------------------

// const o = {
//   a: 10,
//   b: 20,
//   [Symbol("c")]: 30,
// };

// console.log(o);
// console.dir(o);
// console.dirxml(o);

// ----------------------------------------------------------------------

// log - info - error - warn
// ----------------------------------------------------------------------

// console.log("LOG Message");
// console.error("ERROR Message");
// console.info("INFO Message");
// console.warn("WARN Message");

// ----------------------------------------------------------------------

// group - groupCollapsed - groupEnd
// ----------------------------------------------------------------------

// const users = [
//   { name: "Mahmoud", age: 27, sex: "male" },
//   { name: "Mohammed", age: 21, sex: "male" },
//   { name: "Ali", age: 28, sex: "male" },
//   { name: "Reem", age: 25, sex: "female" },
//   { name: "Mera", age: 30, sex: "female" },
//   { name: "Sama", age: 23, sex: "female" },
// ];

// const groupedUsers = Object.groupBy(users, ({ sex }) => sex);

// console.group("Male");
// groupedUsers.male.forEach(({ name, age }) => {
//   console.log("name: %s - age: %i", name, age);
// });
// console.groupEnd();
// console.groupCollapsed("Female");
// groupedUsers.female.forEach(({ name, age }) => {
//   console.log("name: %s - age: %i", name, age);
// });
// console.groupEnd();

// ----------------------------------------------------------------------

// table
// ----------------------------------------------------------------------

// const usersArr = [
//   { name: "Mahmoud", age: 27, sex: "male" },
//   { name: "Mohammed", age: 21, sex: "male" },
//   { name: "Ali", age: 28, sex: "male" },
//   { name: "Reem", age: 25, sex: "female" },
//   { name: "Mera", age: 30, sex: "female" },
//   { name: "Sama", age: 23, sex: "female" },
// ];

// const usersObj = {
//   a: { name: "Mahmoud", age: 27, sex: "male" },
//   b: { name: "Mohammed", age: 21, sex: "male" },
//   c: { name: "Ali", age: 28, sex: "male" },
//   d: { name: "Reem", age: 25, sex: "female" },
//   e: { name: "Mera", age: 30, sex: "female" },
//   f: { name: "Sama", age: 23, sex: "female" },
// };

// console.table(usersArr);
// console.table(usersObj);

// ----------------------------------------------------------------------

// time - timeLog - timeEnd
// ----------------------------------------------------------------------

// const heavyLoad = (n) => {
//   for (let i = 0; i < n; ++i) {
//     47894 ** 10000000;
//   }
// };

// console.time("T1");
// heavyLoad(10 ** 5);
// console.timeLog("T1", "- stage 1");
// heavyLoad(10 ** 7);
// console.timeLog("T1", "- stage 2");
// heavyLoad(10 ** 10);
// console.timeEnd("T1");

// ----------------------------------------------------------------------

// trace
// ----------------------------------------------------------------------

const stack = [];
const f1 = () => {
  console.trace(stack);
  stack.push("f1");
};
const f2 = () => {
  f1();
  stack.push("f2");
};
const f3 = () => {
  f2();
  stack.push("f2");
};
const f4 = () => {
  f3();
  stack.push("f4");
};

f4();

// ----------------------------------------------------------------------
