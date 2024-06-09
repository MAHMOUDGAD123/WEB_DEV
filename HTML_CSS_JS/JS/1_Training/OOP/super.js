const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

// ============================================================================

function Car(name ,model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
  
  this.info = () => {
    return "-> " + this.name + " - " + this.model + " - " + this.year;
  }
}

class Sport extends Car {
  constructor(name, model, year) {
    super(name, model, year);
  }
}
const c1 = new Car("BMW", "X6", 2023);
const c2 = new Sport("Audi", "W45", 2024);


log("==========================================");

log(c1.info());
log(c2.info());

log("==========================================");

// ============================================================================
console.timeEnd("T");