const log = console.log;
const error = console.error;

log('\napply():');
log('--------------------------------------\n');

function sumNums(...args) {
  return args.reduce((s, n) => s + n);
}

const customSum = new Proxy(sumNums, {
  apply(target, thisArg, argList) {
    if (argList.some((n, i, ref) => Number.isNaN(ref[i] = +ref[i]))) return 'Invalid Inputs!';
    return target(...argList);
  }
});

const list1 = [10, 20, 30, 40, 50];
const list2 = [10, 20, 30, '40', 50];
const list3 = [10, 'fd', 30, '40', 50];

log(sumNums(...list1), '-', customSum(...list1));
log(sumNums(...list2), '-', customSum(...list2));
log(sumNums(...list3), '-', customSum(...list3));

log('\nconstruct():');
log('--------------------------------------\n');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const metaPerson = new Proxy(Person, {
  construct(target, argList, newTarget) {
    const [name, age] = argList;
    log(`\nPerson info:`);
    log('=====================');
    log(`- Name => ${name}`);
    log(`- Age => ${age}`);
    log('=====================');
    return new target(name, age);
  }
});

const name = 'Mahmoud';
const age = 26;

log(new Person(name, age));
new metaPerson(name, age);


log('\ndefineProperty() & deleteProperty():');
log('--------------------------------------\n');

// $ means very important info -- can't be modified or deleted
const student = {
  name: 'MG',
  age: 26,
  $id: '1000152612',
};

const secureStudent = new Proxy(student, {
  defineProperty(target, property, descriptor) {
    if (property[0] === '$') throw new Error("$__ properties can't be modified");
    Object.defineProperty(target, property, descriptor);
    return true;
  },
  deleteProperty(target, property) {
    if (property[0] === '$') throw new Error("$__ properties can't be deleted");
    delete target[property];
    return true;
  }
});

try {
  secureStudent.name = 'Ali';
  log(student.name);
  secureStudent.age = 27;
  log(student.age);
  secureStudent.$id = 1054784562;
  log(student.$id);
} catch (e) {
  error(e.message);
}

log();

try {
  delete secureStudent.name;
  log(student.name ? '(name) exists' : '(name) has been deleted');
  delete secureStudent.$id;
  log(student.$id);
} catch (e) {
  error(e.message);
}

log('\nhas() & get() & set()');
log('--------------------------------------\n');

const secretObj = {
  _secret: "my secret is (Bullshit)",
  notSecret: 'this is not a secret'
};

const hideSecrets = new Proxy(secretObj, {
  has(target, key) {
    if (key[0] === '_') throw new Error('this is top secret not your business😡');
    return key in target
  },

  get(target, property, receiver) {
    return (property[0] === '_') ?
        target[property].slice(0, 13) + '.....😈':
        target[property];
  },

  set(target, property, newValue, receiver) {
    if (key[0] === '_') throw new Error("you can't modify a secret");
    target[property] = newValue;
    return true;
  }
});


try {
  log(hideSecrets._secret);
  log(hideSecrets.notSecret);
  '_secret' in hideSecrets;
} catch (e) {
  error(e.message);
}

try {
  hideSecrets.notSecret = 'not secret can be modified';
  hideSecrets._secret = "_secret can't be modified";
} catch (e) {
  error(e.message);
}

log('\n--------------------------------------\n');