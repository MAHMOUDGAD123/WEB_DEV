const log = console.log;

log('\n--------------------------------\n');

const buf = new ArrayBuffer(8);
const a1 = new Int8Array(buf);

// random fill
a1.forEach((v, i, ref) => ref[i] = Math.random() * 51);

// sort()
log(buf);
a1.sort((a, b) => b - a); // this will sort the buffer itself
log(buf);

log('\n--------------------------------\n');

const a2 = new Int8Array(8);

// set()
a2.set([1,2,3], 5);
log(a2);

log('\n--------------------------------\n');

const a3 = Int8Array.from({ length: 4 }, (v, i) => i + 1);
log(a3);

// subarray()
const a4 = a3.subarray(2); // using the same buffer
log(a4);
a3.fill(1);
log(a4);
log(a3.buffer === a4.buffer);

log('\n--------------------------------\n');

const a5 = Int8Array.from({ length: 4 }, (v, i) => i + 1);

// slice()
const a6 = a5.slice(2); // create a new buffer
log(a6);
log(a5.buffer === a6.buffer);

log('\n--------------------------------\n');