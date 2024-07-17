const log = console.log;
const error = console.error;
const line = '\n------------------------------------------------\n';

log(line);


function resolved(v) {
  log(v);
}
function rejected(e) {
  error(e.message);
}

Promise.reject(new Error('Fail ;-(')).then(resolved, rejected);


setTimeout(_=> log(line), 0);