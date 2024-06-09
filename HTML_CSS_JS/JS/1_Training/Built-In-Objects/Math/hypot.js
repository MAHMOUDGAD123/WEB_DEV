const log = console.log;

const __hypot = (...nums) => Math.sqrt(nums.reduce((S, N) => S + N * N, 0));

log('\n- hypot(x)');
log('------------------------------\n');

const arr = [3, 4, 10];

log(Math.hypot(...arr));
log(__hypot(...arr));

log('\n------------------------------\n');