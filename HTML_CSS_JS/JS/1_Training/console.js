/* Global Variables Colors */
const red = "color: red; font-size: 17px;"; // red color
const pink = "color: pink; font-size: 17px;"; // blue color
const c0 = "color: #ff0000"; //  color
const c1 = "color: #00ff00"; //  color
const c2 = "color: #0000ff"; //  color
const c3 = "color: #fdbb00"; //  color
const c4 = "color: #5acf65;"; //  color
const c5 = "color: #5662f6;"; //  color
const c6 = "color: #9995f6;"; //  color

// JS Data Type & Data Structure Start
//===============================================================

/* Primitive Data-Types  */
console.group("%cPrimitive Data-Types:", red);
console.log("1- " + typeof "String");
console.log("2- " + "number");
console.groupCollapsed("/");
console.log(typeof 10 + " (int)");
console.log(typeof 10.5 + " (float)");
console.log(typeof Infinity + " (infinity)");
console.groupCollapsed("Ex:");
console.log(100 / +0); // 0 == +0
console.log(100 / -0);
console.groupEnd();
console.groupEnd();
console.log("3- " + typeof BigInt(1245689213116120));
console.log("4- null (" + typeof null + ")");
console.log("5- " + typeof undefined);
console.log("6- " + typeof true);
console.log("7- " + typeof Symbol("M"));
console.groupCollapsed("/");
const Symb = Symbol("M");
console.log(Symbol.for("M"));
console.log(Symbol.keyFor(Symb));
console.groupEnd();
console.groupEnd();

/* Non-Primitive Data-Types  (Object) */
console.group("%cNon-Premative Data-Types:", red);
console.log("1- array (" + typeof [1, 2, 3, 4] + ")");
console.log(
  "2- map (" + typeof { name: "Mahmoud", age: 26, gig: "Web_Dev" } + ")"
);
console.groupCollapsed("/");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`${arr[0]} ${arr[1]}`);
const map = { name: "Mahmoud", age: 26, gig: "Web_Dev" };
console.log(map.name + " - " + map.age + " - " + map.gig);
console.groupEnd();
console.groupEnd();

// JS Data Type & Data Structure Start
//===============================================================
