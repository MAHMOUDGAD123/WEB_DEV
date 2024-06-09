// use WeakMap to create a private property

// Example 1
const SecretHolder = (() => {
  const secrets = new WeakMap();

  return class {
    set mySecret(newSecret) {
      secrets.set(this, newSecret);
    }
    get mySecret() {
      return secrets.get(this);
    }
  }
})();

console.log('---------------------------------');
const secret = new SecretHolder();
secret.mySecret = "My secret is { I Love U 💘 } Don't tell anyone it okay 😎";
console.log(secret.mySecret);
console.log('---------------------------------');

// Example 2
const Car = (() => {
  const _gear = new WeakMap();

  return class {
    constructor(vendor, year) {
      this.vendor = vendor;
      this.year = year;
      this.userGears = ['P', 'N', 'R', 'D'];
      _gear.set(this, { userGear: this.userGears[0] })
    }

    get userGear() { return _gear.get(this).userGear }
    set userGear(newGear) {
      if(this.userGears.indexOf(newGear) < 0) {
        console.log("("+newGear+")"+" Is An Invalid Gear");
        return;
      }
      _gear.get(this).userGear = newGear;
    }
  }
})();


const Tesla = new Car("Tesla", 2023);

console.log(Tesla.userGear);
Tesla.userGear = "g";
console.log(Tesla.userGear);
Tesla.userGear = "R";
console.log(Tesla.userGear);
console.log('---------------------------------');