const log = console.log;

/**
 * @param {number} base - base
 * @param {number} n - number
 */
const get_log_base = (n, base) => Math.log(n) / Math.log(base);

log('\n- log(n) === ln(n)'); // base: e
log('------------------------------\n');

log(Math.log(0));
log(Math.log(1));
log(Math.log(Infinity));
log(get_log_base(8, 2));
log(get_log_base(625, 5));
log(get_log_base(9, 3));
log(get_log_base(1000, 10));

log('\n------------------------------\n');

const get_digits_count_10 = (n) => (Math.log10(n) >>> 0) + 1;

log('\n- log10(n)'); // base: 10
log('------------------------------\n');

log(Math.log10(0));
log(Math.log10(1));
log(Math.log10(Infinity));
log(get_digits_count_10(5));
log(get_digits_count_10(55));
log(get_digits_count_10(555));
log(get_digits_count_10(1000));

log('\n------------------------------\n');

const get_digits_count_2 = (n) => (Math.log2(n) >>> 0) + 1;

log('\n- log2(n)'); // base: 2
log('------------------------------\n');

log(Math.log2(0));
log(Math.log2(1));
log(Math.log2(Infinity));
log(get_digits_count_2(0b00000001111)); // 0xF => 15
log(get_digits_count_2(5)); // 0b0101
log(get_digits_count_2(0b111111111111111111111111));
log(get_digits_count_2(0b000000000000000000000000));

log('\n------------------------------\n');