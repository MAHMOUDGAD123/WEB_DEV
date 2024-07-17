const log = console.log;

log('\n---------------------------------\n');

const o1 = {
  logs: [],
  get last() { return this.logs.at(-1) },
  set last(v) { this.logs.push(v); },
};

log(o1.logs);
o1.last = 10;
log(o1.logs);
o1.last = 20;
log(o1.logs, '->', o1.last);

log('\n---------------------------------\n');

// defining using Object.create
const o2 = Object.create(null, {
  id: {
    value: 1000152612,
    writable: true,
  },
  _id: {
    get() { return this.id; },
    set(id) { this.id = id; },
  },
});

log(o2._id);
o2._id = 1234567890;
log(o2._id);

log('\n---------------------------------\n');

// defining using Object.defineProperties
const o3 = {
  queue: [],
  get ['print']() { return this.queue.join(' --> '); }
};

Object.defineProperties(o3, {
  first: {
    get() { return this.queue[0]; },
  },
  push: {
    set(v) { this.queue.push(v); }
  },
  shift: {
    set(i = 0) { this.queue.shift(); }
  }
});

log(o3.print);
o3.push = 'Ali';
o3.push = 'Samy';
o3.push = 'Mera';
log(o3.print);
o3.shift;
log(o3.print);
log(o3.first);

log('\n---------------------------------\n');

// get and set with classes
class Queue {
  #q = [];
  get first() { return this.#q[0]; };
  get ['print']() { return this.#q.join(' --> '); };
  set push(v) { this.#q.push(v); }
  set shift(i = 0) { this.#q.shift(); };
}

const Q = new Queue();

log(Q.print);
Q.push = 'Ali';
Q.push = 'Samy';
Q.push = 'Mera';
log(Q.print);
Q.shift;
log(Q.print);
log(Q.first);

log('\n---------------------------------\n');