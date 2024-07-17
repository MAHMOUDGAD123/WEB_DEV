'use strict';
const log = console.log;

const buf = new ArrayBuffer(16);
const test = [
  ['setInt8', 'getInt8', 127],
  ['setUint8', 'getUint8', 255],
  ['setInt16', 'getInt16', 32767],
  ['setUint16', 'getUint16', 65535],
  ['setInt32', 'getInt32', 2147483647],
  ['setUint32', 'getUint32', 4294967295],
  ['setBigInt64', 'getBigInt64', 2n ** (64n - 1n) - 1n],
  ['setBigUint64', 'getBigUint64', 2n ** 64n - 1n],
  ['setFloat32', 'getFloat32', Math.PI],
  ['setFloat64', 'getFloat64', Math.PI],
];

log('\n----------------------------------\n');

const view = new DataView(buf);

test.forEach(([set, get, max]) => {
  view[set](0, max);
  log(buf, `value => ${view[get](0)}\n`);
});

log('\n----------------------------------\n');

const v = new DataView(buf);

// little-endian
v.setUint32(0, 4294967295, true);
log(buf);
// big-endian
v.setUint32(0, 4294967295, false);
log(buf);

log('\n----------------------------------\n');