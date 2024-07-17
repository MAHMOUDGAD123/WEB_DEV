const log = console.log;

/**
 * @param {number} n 
 * @returns {boolean}
 */
const gap = n => (n.toString(2).match(/0*(?=1)/g).reduce((p, c) => p > c ? p : c)).length;

log('\n---------------------------\n');

for (let i = 70; i < 101; ++i) {
  // log(i.toString(2));
  log(`${i.toString(2)} ->`, gap(i));
}

log('\n---------------------------\n');