// "use strict";
const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

//=====================================================

// var
{
  var x = "1997";
  log(`- x from inside: ${x}`);
}
log(`- x from outside: ${x}`);

// f1(); // ReferenceError
f2();

const f1 = function () {
  log("- this is f1");
};
function f2() {
  log("- this is f2");
}

//=====================================================

log("\n");
console.timeEnd("T");
