const log = console.log;

log('\ngetTime()');
log('-----------------------------\n');

log(Date.now());
log(new Date().getTime());
log();

// time since my birthday
const birthday = new Date('1997-09-10T00:00:00.000+02:00');
const now = new Date();
let T = now.getTime() - birthday.getTime(); // let T = now - birthday; -- works too

log('- My Age In ms    =', T);
log('- My Age In sec   =', Math.floor(T /= 1000));
log('- My Age In min   =', Math.floor(T /= 60));
log('- My Age In hrs   =', Math.floor(T /= 60));
log('- My Age In days  =', Math.floor(T /= 24));
log('- My Age In weaks =', Math.floor(T / 7));
log('- My Age In weaks =', Math.floor(T / 365));

log('\ngetTimezoneOffset()');
log('-----------------------------\n');
// the difference, in minutes, between this date as evaluated in the UTC time zone,
// and the same date as evaluated in the local time zone.

log(new Date().getTimezoneOffset(), 'min');

log('\n-----------------------------\n');
log('\nto_____() functions');
log('-----------------------------\n');

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

log(new Date().toString());
log(new Date().toDateString());
log(new Date().toTimeString());
log(new Date().toUTCString());
log(new Date().toISOString());
log(new Date().toJSON()); // same as toISOString()
log(JSON.parse(JSON.stringify(new Date().toJSON())));
log(new Date().toLocaleString());
log(new Date().toLocaleDateString());
log(new Date().toLocaleTimeString());

log('\ntoValue() | [Symbol.toPrmitive]()');
log('-----------------------------\n');

log(new Date().valueOf());
log(new Date()[Symbol.toPrimitive]('number'));
log(new Date()[Symbol.toPrimitive]('default'));
log(new Date()[Symbol.toPrimitive]('string'));

log('\n-----------------------------\n');