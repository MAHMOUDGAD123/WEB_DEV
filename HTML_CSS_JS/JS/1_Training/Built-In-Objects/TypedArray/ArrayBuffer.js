const log = console.log;

log('\n---------------------------------------\n');

const buf = new ArrayBuffer(8, { maxByteLength: 16 });

log(buf, '-> maxByteLength:', buf.maxByteLength);

log('\nbyteLength:', buf.byteLength);
log('resizable:', buf.resizable);

// resizing buffer
buf.resize(16);

log('\nbyteLength:', buf.byteLength);

// slice a buffer
const a1 = new Int32Array(buf);
a1[0] = 10, a1[2] = 20;
log('\na1 =>', a1, '-->', a1.byteLength);

const a2 = new Int32Array(buf.slice(8, 16));
log('a2 =>', a2, '-->', a2.byteLength);

// transfer buffer (node.js unsupported)
log('\ndetached:', buf.detached);

const buf1 = buf.transfer(8);
const a3 = new Int32Array(buf1);

log('\ndetached:', buf.detached);

log('a1 =>', a1);
log('a2 =>', a2);
log('a3 =>', a3);

log('\n---------------------------------------\n');

const b1 = new ArrayBuffer(8);

const arrays = [
  new Int8Array(b1),
  new Int16Array(b1),
  new Int32Array(b1),
  new Float32Array(b1),
  new Float64Array(b1),
  new BigInt64Array(b1),
];

arrays.forEach((a) => {
  log(a, '-> (', a.BYTES_PER_ELEMENT, '-', a.byteLength, ')\n');
});

log('\n---------------------------------------\n');


