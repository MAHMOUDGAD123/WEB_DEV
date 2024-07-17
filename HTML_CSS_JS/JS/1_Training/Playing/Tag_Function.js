const log = console.log; // alias
("use strict");
console.time("T");
log("\n");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
//=====================================================

const people = [
  { name: "Alfred", age: 47, sex: "male" },
  { name: "George", age: 27, sex: "famale" },
  { name: "Regina", age: 31, sex: "female" },
  { name: "Trisha", age: 30, sex: "female" },
];

// this is something like (printf) in C => printf("format", ...substitutions)
// strings => format
// a, b, c  => ...substitutions
function greet(strings, ...info) {
  console.log(strings[0] + info[0] + strings[1] + info[1] + strings[2] + info[2] + strings[3]);
}

// using arguments object of function
function greet_arg() {
  console.log(arguments[0][0] + arguments[1] + arguments[0][1] + arguments[2] + arguments[0][2] + arguments[3] + arguments[0][3]);
}

/*
  (first parameter): strings => ["Woah,", "is", "and gender is"]
  strings[0] ==> "Woah,"
  strings[1] ==> "is"
  strings[2] ==> "and gender is"

  (the rest parameters): a, b, c => template ${substitutions}
  a => ${p.name}
  b => ${p.age}
  c => ${p.sex}
*/

people.forEach((p) => {
  greet`Woah, ${p.name} is ${p.age} and gender is ${p.sex}`;
});

log();

people.forEach((p) => {
  greet_arg`Woah, ${p.name} is ${p.age} and gender is ${p.sex}`;
});

//=====================================================

log("\n");
console.timeEnd("T");
