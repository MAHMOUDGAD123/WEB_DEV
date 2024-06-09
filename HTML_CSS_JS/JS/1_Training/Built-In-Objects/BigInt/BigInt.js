const log = console.log;
const time = console.time;
const timeEnd = console.timeEnd;

// log('\n=============================================\n');

// const bi1 = 10n;
// const bi2 = BigInt(10);
// const bi3 = Object(10n);

// log(bi1 >> 1n);
// log(bi2 << 1n);
// // log(bi2 >>> 1n); // ❌
// log();
// log(bi3);
// log(bi3.valueOf());

log('\n=============================================\n');

/**
 * @param {number} bits number of bits to return
 * @param {bigint} big the bigint number to truncate
 * @returns {bigint} a unsigned big int number
 */
const __asUintN = (bits, big) => {
  return bits ? big & BigInt(`0b${'1'.repeat(bits)}`) : 0n;
}

/**
 * @param {number} bits number of bits to return
 * @param {bigint} big the bigint number to truncate
 * @returns {bigint} a signed big int number
 */
const __asIntN = (bits, big) => {
  if (!bits) return 0n;
  const mask = BigInt(`0b${'1'.repeat(bits)}`);
  let N = big & mask;
  let bin_s = N.toString(2);
  const isNegative = bits - bin_s.length ? false : true;
  log('isNegative ->', isNegative); // test
  log('\nN ->', N, '{ bin ->', bin_s, '}\n'); // test

  let masked = false; // test
  if (isNegative) {
    N = -N;
    if (N & (mask >> 1n)) {
      N &= (mask >> 1n);
      bin_s = bin_s.slice(1); // test
      masked = true; // test
      return -N;
    }
    log('masked ->', masked); // test
    log('\nN ->', N, '{ bin ->', bin_s, '}\n'); // test
  }
  return N;
};

// ================================== Testing ==================================

const test = true;
const max = 2 ** 20;
const min = 2 ** 10;
const bits_max = 10;
const iterations = 5;

if (test) {
  for (let i = 0; i < iterations; ++i) {
    const big = BigInt((Math.random() * (max - min + 1) + min) >>> 0);
    const bits = (Math.random() * bits_max) >>> 0;
    log(`------------ iteration[${i + 1}] -------------`);
    log("\nbig ->", big, "{ " + big.toString(2) + " }\n");

    const asIntN = [BigInt.asIntN(bits, big), __asIntN(bits, big)];
    // const asUintN = [BigInt.asUintN(bits, big), __asUintN(bits, big)];

    log(`asIntN(${bits}):`, asIntN[0], ' | ', asIntN[1], asIntN[0] === asIntN[1] ? ' ✅' : ' ❌');
    // log(`\nasUintN(${bits}):`, asUintN[0], ' | ', asUintN[1], asUintN[0] === asUintN[1] ? ' ✅' : ' ❌');
    log('\n---------------------------------------\n');
  }
} else { // performance
  const big = 456732121n;
  const bits = 6;
  time("T1");
  for (let i = 0; i < iterations; ++i) {
    // BigInt.asIntN(bits, big);
    BigInt.asUintN(bits, big);
  }
  timeEnd("T1");
    
  time("T2");
  for (let i = 0; i < iterations; ++i) {
    // __asIntN(bits, big);
    __asUintN(bits, big);
  }
  timeEnd("T2");
}

log('=============================================\n');