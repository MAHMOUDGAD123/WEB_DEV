const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

// ============================================================================

log("Nullish Operator (??)");
log("==========================================");
// nullish coalescing operator (??)
const v1 = null ?? 10;
log(v1);
const v2 = undefined ?? 10;
log(v2);
const v3 = 0 ?? 10;
log(v3);

const f1 = (n) => n ?? "undefined n";
log(f1());
log(f1(10));
log(f1("MG"));

// Nullish coalescing assignment (??=)
const o = { x: undefined, y: "value" };
o.x ??= "assigned";
log(o.x);
o.y ??= "assigned";
log(o.y);
o.z ??= "assigned";
log(o.z);

log("\nBitwise Not Operator (~)");
log("==========================================");

const n1 = 15;
log(~n1);
log(-n1 - 1);
log(-n1);
log(~n1 + 1);

log("\nBitwise Shift Operator (>>|<<|>>>)");
log("==========================================");

// Bitwise shift operators
const n2 = -8;
log(n2 << 1);
log(n2 >> 1);
log(n2 >>> 1);

log("\nOperator (void)");
log("==========================================");

// void operator
const v4 = void 1;
log(v4);

const v5 = void (() => 1);
log(v5);

void function () {
  log("Invoked");
}();

(function () {
  log("Invoked");
})();

log("\nOperator (in)");
log("==========================================");

const arr1 = [ 1,2,3,4,5,6,7 ];
const o1 = { fname: "MG", age: 26 };

log(1 in arr1);
log(arr1.includes(1));
log();
log('age' in o1);
log(o1.hasOwnProperty('age'));
log(Object.hasOwn(o1, 'age'));

log();
for (const k in o1) log("->", o1[k]);

log("\nOperator (instanceof)");
log("==========================================");

function Car(name ,model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

class Audi extends Car {
  constructor(name, model, year) {
    super(name, model, year);
  }
}
const c1 = new Car("BMW", "X6", 2023);
const c2 = new Audi("Audi", "W45", 2024);
const c3 = { __proto__: c2 };

log(c1 instanceof Car);
log(c2 instanceof Car);
log(c3 instanceof Car);

// ============================================================================
console.timeEnd("T");
