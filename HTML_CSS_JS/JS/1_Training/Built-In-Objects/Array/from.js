const log = console.log;

log('\n-----------------------------------\n');

// log(Array.from([1,2,3,4,5], (v, i) => v ** i));

// log(Array.from('Mahmoud'));

// log(Array.from({ length: 10 }, (_, i) => i));

// log(new Set([1,2,3,4,2,6,2]));

// log(Array.from(new Map([[1, 'a'], [2, 'b'], [3, 'c']])));
// log(Array.from(new Map([[1, 'a'], [2, 'b'], [3, 'c']]).values()));

function fun() {
  return Array.from(arguments);
}
// log(fun(1,2,3,4,5));

// sequence generator function (range)
/**
 * @param {number} start 
 * @param {number} stop 
 * @param {number} step 
 * @returns {number[]}
 */
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

log(range(1, 10, 1));
log(range(1, 10, 2));
log(range(0, 100, 10));

log('\n-----------------------------------\n');