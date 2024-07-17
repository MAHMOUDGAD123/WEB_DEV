const log = console.log;

log('\n--------------------------------\n');

const A = new Set([1,2,3,4,5,6,7]);
const B = new Set([1,3,5,7]);

log(A.difference(B));
log(A.intersection(B));
log(A.symmetricDifference(B));
log(A.union(B));
log(A.isDisjointFrom(B));
log(A.isSubsetOf(B));
log(B.isSubsetOf(A));
log(A.isSupersetOf(B));

log('\n--------------------------------\n');

const iter = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (++i < 6) {
          return { value: i, done: false };
        }
        return { value: undefined, done: true };
      }
    }
  }
};

// convert from Set => Array
log(Array.from(new Set(iter)));
log([...new Set(iter)]);

// convert from Array => Set
log(new Set([1,2,3,4,5]));

log('\n--------------------------------\n');

const arr = [1,2,NaN,4,5];
const set = new Set(arr);

log(arr);
log(set);

log(arr.includes(NaN));
log(arr.indexOf(NaN));
log(set.has(NaN));

log('\n--------------------------------\n');
