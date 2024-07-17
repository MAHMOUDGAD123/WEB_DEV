const log = console.log;

log('\nString.fromCharCode(...codes)')
log('----------------------------------\n');

// 0 – 65535
log(String.fromCharCode(77, 97, 104, 109, 111, 117, 100, 32, 71, 97, 100));
log(String.fromCharCode(650, 32, 8709, 32, 8754));

log('\nString.fromCodePoint(...codes)')
log('----------------------------------\n');

// 0 - 1114111
log(String.fromCodePoint(77, 97, 104, 109, 111, 117, 100, 32, 71, 97, 100));
log(String.fromCodePoint(46578, 32, 8889));

log('\nString.row()')
log('----------------------------------\n');

log(String.raw`C:\Coding\Web\JS\Dom` === 'C:\\Coding\\Web\\JS\\Dom' ? '✅' : '❌');

log();

// with regex the next three are the same:
const reg1 = new RegExp(String.raw`https://www\.google\.com`, 'g');
const reg2 = /https:\/\/www\.google\.com/g;
const reg3 = new RegExp('https://www\\.google\\.com', 'g');
log(reg1.test("https://www.google.com"));
log(reg2.test("https://www.google.com"));
log(reg3.test("https://www.google.com"));

log();

const html = String.raw;

log(html`
<div>
  <span>span1</span>
  <span>span2</span>
  <span>span3</span>
</div>
`);

log();

log(String.raw({ raw: "Mahmoud" }, 1,2,3,4,5,6));
log(String.raw({ raw: ["Gad", "Mad", "Sad"] }, " is ", " and "));

log('\nTag Function:\n');

// tag funciton
function tag_fun(strings, ...vals) { return { strings, vals } };
// reverse the tag function work
const untag_fun = ({ strings, vals }) => String.raw({ raw: strings }, ...vals);

const fname = "Mahmoud", age = 26;

log(tag_fun`My name is ${fname} and i'm ${age} years old`);
log(untag_fun(tag_fun`My name is ${fname} and i'm ${age} years old`))

log('\n----------------------------------\n');
