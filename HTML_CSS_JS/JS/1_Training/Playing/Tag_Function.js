const log = console.log; // alias
"use strict";
console.time("T");
log("\n\n");


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
//=====================================================

const people = [
  {name: 'Alfred', age: 47, sex: 'male'},
  {name: 'George', age: 27, sex: 'famale'},
  {name: 'Regina', age: 31, sex: 'female'},
  {name: 'Trisha', age: 30, sex: 'female'}
];

// this is something like (printf) in C => printf("format", ...substitutions)
// strings => format
// a, b, c  => ...substitutions
function greet(strings, a, b, c) {
  console.log(strings[0] + a + strings[1] + b + strings[2] + c + strings[3]);
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

//=====================================================


log("\n\n");
console.timeEnd("T");