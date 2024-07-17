const log = console.log;

log('\n--------------------------------------\n');

class A {
  static X = 'MG';
  static thisX = this.X;

  static getX() {
    return this.X;
  }
}

class B extends A {
  static superX = this.getX();
}

log(A.X);
log(A.thisX);
log(A.getX());
log(B.superX);

log('\n--------------------------------------\n');

// Calling static members from a class constructor and other methods
class cls {
  constructor() {
    log(cls.X);
    log(this.constructor.X);
    log(cls.getX());
    log(this.constructor.getX());
  }

  static X = 'X Property';
  static getX() {
    return 'X Method';
  }
}

new cls();

log('\n--------------------------------------\n');

// static initialization blocks

// SIB evaluated with during class initialization.

// Any static initialization of a super class is performed first,
// before that of its sub classes.

class Base {
  static baseProp1 = 'Base Property 1';
  static baseProp2;
  static {
    log('SIB From Base');
    this.baseProp2 = 'Base Property 2';
  }
}

class Derived extends Base {
  static derivedProp1 = 'Derived Property 1';
  static derivedProp2;
  static {
    log('SIB From Derived');
    this.derivedProp2 = 'Derived Property 2';
  }
}

log(Base.baseProp1);
log(Base.baseProp2);

log('\n--------------------------------------\n');