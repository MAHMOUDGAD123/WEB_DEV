const log = console.log;

log('\n---------------------------------------\n');

// log(Object.getPrototypeOf(new Int8Array()));

log('\n---------------------------------------\n');

// cearte an array using a buffer
const buf = new ArrayBuffer(8);
const a1 = new Int8Array(buf, 0, 4);
const a2 = new Int16Array(buf, 4);

// [a1, a2].forEach((a, i) => {
//   log(a.fill(i + 1));
//   log('BYTES_PER_ELEMENT:', a.BYTES_PER_ELEMENT);
//   log('btyeOffset:', a.byteOffset);
//   log('btyelength:', a.byteLength);
//   log('length:', a.length);
//   log();
// });
// log(buf);

log('\n---------------------------------------\n');

const clampedUint8 = new Uint8ClampedArray(8);
// log(clampedUint8);
clampedUint8[0] = 10;
clampedUint8[1] = 1024; // clampe to 255
clampedUint8[2] = -1024; // clampes to 0
// log(clampedUint8);

log('\n---------------------------------------\n');

const bigA = new BigInt64Array(8);
log(bigA.fill(-1n));
  log('BYTES_PER_ELEMENT:', bigA.BYTES_PER_ELEMENT);
  log('btyeOffset:', bigA.byteOffset);
  log('btyelength:', bigA.byteLength);
  log('length:', bigA.length);
  log(bigA.buffer);

log('\n---------------------------------------\n');

const _32arr = new Uint32Array(10);
log(_32arr.length);
log(_32arr.BYTES_PER_ELEMENT);
log(_32arr.byteLength);
log(_32arr.fill(1));
log(_32arr.buffer);

log('\n---------------------------------------\n');


