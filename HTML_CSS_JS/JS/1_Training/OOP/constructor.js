const log = console.log;

// class is a function

function Fun_Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = () => {
    return "{ name: " + this.name + ", age: " + this.age + " }";
  }
}

class Cls_Person {
  constructor(name, age) {
    this.name = name;
  this.age = age;
  }

  info() {
    return "{ name: " + this.name + ", age: " + this.age + " }";
  }
}

const P1 = new Fun_Person("Mahmoud", 26);
const P2 = new Cls_Person("Mera", 30);

log(typeof Fun_Person);
log(typeof Cls_Person);
log();
log(P1.info());
log(P2.info());
