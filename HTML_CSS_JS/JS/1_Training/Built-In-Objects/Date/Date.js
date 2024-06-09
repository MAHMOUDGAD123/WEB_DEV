const log = console.log;

log('\n-----------------------------\n');

// The maximum timestamp
// A Date object can represent a maximum of ±8,640,000,000,000,000 milliseconds

log(new Date(8.64e15).toDateString()); // Anno Domini (A.D.)
log(new Date(-8.64e15).toDateString()); // Before Christ (B.C.)
log(new Date(8.64e15 + 1)); // invalid
log(new Date(-8.64e15 - 1)); // invalid

log('\n-----------------------------\n');

// calling Date with (new)
log(new Date()); // date object
// calling Date without (new)
log(Date()); // string
log(Date() === new Date().toString()); // equal

log('\n-----------------------------\n');

log('Calling Date() constructor:\n');
log(new Date(94651654)); // epoch timestamp
log();
// standard string format ---> YYYY-MM-DDTHH:mm:ss.sssZ
log(new Date('2024')); // YYYY
log(new Date('2024-09-10')); // YYYY-MM-DD
log(new Date('2024-09-10T05:30:40.486Z')); // YYYY-MM-DDTHH:mm:ss.sssZ (Z -> UTC)
log(new Date('2024-09-10T05:30:40.486+02:00').toLocaleString()); // YYYY-MM-DDTHH:mm:ss.sss+HH:mm (UTC+2)
log(new Date('september 10, 2024 05:20:45')); // stirng date and time
log(new Date(new Date())); // using Date object
log(new Date(new Date().valueOf())); // using Date object
log();
log(new Date(undefined));
log(new Date(""));
log(new Date(NaN));
log(new Date(null));
log();
log(new Date(0));
log(new Date(0, 0));
log(new Date(0, 1, 5, 15, 20, 5, 123));
log();
log(new Date(["2024-09-10", "15:25:45.123", "Z"]).toString()); // array of strings (works in v8 engine)

log('\n-----------------------------\n');