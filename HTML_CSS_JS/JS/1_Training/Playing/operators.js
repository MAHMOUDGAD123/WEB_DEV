const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

// ============================================================================

// nullish coalescing operator (??)
const v1 = null ?? 10;
// log(v1);
const v2 = undefined ?? 10;
// log(v2);
const v3 = 0 ?? 10;
// log(v3);

const f1 = (n) => n ?? "undefined n";
// log(f1());
// log(f1(10));
// log(f1("MG"));

// Nullish coalescing assignment (??=)
const o = { x: undefined, y: "value" };
o.x ??= "assigned";
log(o.x);
o.y ??= "assigned";
log(o.y);
o.z ??= "assigned";
log(o.z);

log("===========================");

// Bitwise NOT (~)
const n1 = 15;
log(~n1);
log(-n1 - 1);
log(-n1);
log(~n1 + 1);

log("===========================");

// Bitwise shift operators
const n2 = -8;
log(n2 << 1);
log(n2 >> 1);
log(n2 >>> 1);

// ============================================================================
console.timeEnd("T");
