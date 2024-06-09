const log = console.log;

// min <= n < max
const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => (Math.random() * (max - min) + min) >>> 0;
// min <= n <= max
const randInt_inclusive = (min, max) => (Math.random() * (max - min + 1) + min) >>> 0;

log('\n--------------------------\n');

const n = 5;

log("Float:");
for (let i = 0; i < n; ++i) log(rand(1, 5));

log("\nInt:");
for (let i = 0; i < n; ++i) log(randInt(1, 5));

log("\nInt Inclusive:");
for (let i = 0; i < n; ++i) log(randInt_inclusive(1, 5));

log('\n--------------------------\n');