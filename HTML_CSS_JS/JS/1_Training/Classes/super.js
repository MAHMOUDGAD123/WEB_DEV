const log = console.log;

log('\n-----------------------------------------\n');

// you can acces any methods and static properties only using (super).
// But you can't access instance prorperties using (super).
class Base {
  instanceProperty = 'instance-property';
  static staticProperty = 'static-property';
  normalMethod() {
    return 'normal-method';
  }
  static staticMethod() {
    return 'static-method';
  }
}

class Derived extends Base {
  getBaseInstanceProperty() {
    return super.instanceProperty;
  }
  static getBaseStaticProperty() {
    return super.staticProperty;
  }
  getBaseNormalMethod() {
    return super.normalMethod();
  }
  static getBaseStaticMethod() {
    return super.staticMethod();
  }
}

const instance = new Derived();

log(instance.getBaseInstanceProperty()); // undefined
log(Derived.getBaseStaticProperty()); // ok
log(instance.getBaseNormalMethod()); // ok
log(Derived.getBaseStaticMethod()); // ok

log('\n-----------------------------------------\n');

// using super in object initializer notation {}
const A = {
  MethodA() {
    return 'Method-A';
  }
}

const B = {
  MethodB() {
    return super.MethodA();
  }
};

Object.setPrototypeOf(B, A);
log(B.MethodB());

log('\n-----------------------------------------\n');

// Methods that read super.prop do not behave differently when bound to other objects
class ParentX {
  baseGetName() {
    return 'X';
  }
  static staticBaseGetName() {
    return 'X_s';
  }
}

class ParentY {
  baseGetName() {
    return 'Y';
  }
  static staticBaseGetName() {
    return 'Y_s';
  }
}

class Child extends ParentX {
  getName() {
    return super.baseGetName();
  }
  static staticGetName() {
    return super.staticBaseGetName();
  }
}

const C1 = new Child();
log(C1.getName()); // X
log(Child.staticGetName()); // X_s

// after binding
const { getName } = C1;
const { staticGetName } = Child;

log();
log(getName()); // X
log(staticGetName()); // X_s

// Only resetting the entire inheritance chain will change the reference of super.
Object.setPrototypeOf(Child.prototype, ParentY.prototype);
const C2 = new Child();
log();
log(C2.getName()); // Y
log(Child.staticGetName()); // X_s -- logs the same because we haven't modified the static part yet

// now we changed the prototype for static
Object.setPrototypeOf(Child, ParentY);
log();
log(Child.staticGetName()); // now logs 'Y_s'

log('\n---------\n');

// the same happens on literal objects
const Parent1 = { name: 'one' };
const Parent2 = { name: 'two' };

const son = {
  myParent() {
    return super.name;
  }
};

Object.setPrototypeOf(son, Parent1);
log(son.myParent());

// after binding
const { myParent } = son;

const anotherSon = {
  __proto__: Parent2,
  myParent
};

log(anotherSon.myParent()); // still get one

log('\n-----------------------------------------\n');

class XXXX {
  static getName() {
    log(this.name);
  }
}
class YYYY extends XXXX {
  static getName() {
    super.getName();
  }
  // this is equivalent to
  static _getName() {
    log(this.name);
  }
}

YYYY.getName(); // logs 'YYYY' instead of 'XXXX'
YYYY._getName(); // logs 'YYYY'

log('\n-----------------------------------------\n');