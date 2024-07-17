function defaultFunction() {
  return 'Default Function';
}

function f1() { return 'F1' }
function f2() { return 'F1' }
const f3 = () => 'f3';

export { defaultFunction as default, f1, f2, f3 };