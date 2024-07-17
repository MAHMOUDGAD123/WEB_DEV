const log = console.log;

log('\n-----------------------------------\n');

const a1 = [1,2,3,4,5,6,7];

// log(a1.at(-1));

log('\n-----------------------------------\n');

const arr_like = {
  0: 1,
  1: 2,
  2: [3, 4],
  3: { length: 3, 0: 5, 1: 6, 2: 7 },
  length: 4,
};

// log(Array.prototype.flat.call(arr_like));

log('\n-----------------------------------\n');

const a2 = [4,8,9,5,7,4,3,6,2,1];

// log(a2.sort()); // ascending
// log(a2.sort((a,b) => b - a)); // descending

const grades = [
  { name: "Sli", grade: 75 },
  { name: "Sam", grade: 45 },
  { name: "Dan", grade: 100 },
  { name: "Ali", grade: 50 },
];

log(grades.sort((a, b) => a.grade - b.grade));
log(grades.sort((a, b) => b.grade - a.grade));

log('\n-----------------------------------\n');