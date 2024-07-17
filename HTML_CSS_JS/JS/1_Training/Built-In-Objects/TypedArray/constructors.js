const log = console.log;

log('\n-------------------------------------\n');

// log(new Int8Array()); // none
// log(new Int8Array(8)); // length
// log(new Int8Array([1,2,3,4,5,6,7,8])); // array
// log(new Int8Array({ length: 8 })); // araryLike
// log(new Int8Array((function* () { yield* [1,2,3,4,5,6,7,8] })())); // generator
// log(new Int8Array(new Set([1,2,3,4,5,6,7,8]))); // using Set
// log(new Int8Array(new Int8Array(8))); // another TypedArray
// log(new Int8Array(new ArrayBuffer(8), 0, 8)); // ArrayBuffer

log('\n-------------------------------------\n');

const buf = new ArrayBuffer(16);

[
  new Int8Array(buf),
  new Uint8Array(buf),
  new Uint8ClampedArray(buf),
  new Int16Array(buf),
  new Uint16Array(buf),
  new Int32Array(buf),
  new Uint32Array(buf),
  new Float32Array(buf),
  new Float64Array(buf),
  new BigInt64Array(buf),
  new BigUint64Array(buf),
].forEach((a, i) => {
  log(a, '=> ( len:', a.length, ')');
});

log('\n-------------------------------------\n');