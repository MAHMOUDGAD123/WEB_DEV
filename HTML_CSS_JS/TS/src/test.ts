const log: Function = console.log;

// const arr: (string | number | boolean | (string | number)[] | { a: number; b: number })[] = [
//   "A", "B", 1, 2, 3, true, ["C", "D", 1, 2, 3], { a: 10, b: 20 }
// ];
// arr.forEach((v => {
//   log(v);
// }));

// ============================================================================

// type User = {
//   name: string,
//   age: number,
//   __id: string
// };

// // optinal parameter

// function printUserInfo(user: User, isAdmin?: boolean): string {
//   return `\n- Name: ${user.name}\n- age: ${user.age}\n- __id: ${user.__id}\n` + `- isAdmin: ${isAdmin ? 'yes\n' : 'no\n'}`;
// }

// log(printUserInfo({ name: 'Mahmoud Gad', age: 26, __id: '1000152612' }));
// log(printUserInfo({ name: 'Mahmoud Gad', age: 26, __id: '1000152612' }, true));
// log(printUserInfo({ name: 'Mahmoud Gad', age: 26, __id: '1000152612' }, false));

// ============================================================================

// rest parameter

// const addAll = (...nums: number[]): number => nums.reduce((S, N) => S + N)
// log(addAll(10, 20, 30, 40.7, 50, 60.78));

// ============================================================================

// type alias

// type Person = {
//   name: string,
//   age: number
// };

// type Employee = Person & {
//   salary: number
// };

// type Programmer = Employee & {
//   stack: string
// };

// function printInfo(p: Programmer) {
//   log('\nname: ' + p.name);
//   log('age: ' + p.age);
//   log('salary: ' + p.salary);
//   log('stack: ' + p.stack, '\n');
// }

// printInfo({ name: "Mahmoud", age: 26, salary: 10000000, stack: "Full-Stack" })

// ============================================================================

// literal types

// type compareResult = -1 | 0 | 1;

// const compare = (num1: number, num2: number): compareResult => num1 === num2 ? 0 : num1 > num2 ? 1 : -1;

// log(compare(10, 20));
// log(compare(30, 30));
// log(compare(30, 20));

// ============================================================================

// tuple

// const data1: [string, number, boolean] = ["Mahmoud", 26, false];
// const data2: readonly [string, number, boolean] = ["Amira", 30, false];

// data1.push(1997); // ok
// data2.push(1997); // error

// log(data1);
// log(data2);

// ============================================================================

// vo__id | never

// const valueReturns = (): string => {
//   log('log from valueReturns function');
//   return 'value';
// }

// const vo__idReturns = (): vo__id => {
//   log('log from vo__idReturns function');
//   return;
// }

// const neverReturns = (): never => {
//   log('log from vo__idReturn function');
//   throw new Error('ERROR FROM nerverRetrns');
//   // return 10; // Unreachable
// }

// const infiniteLoop = (): never => {
//   log('log from infiniteLoop function');
//   while(true) {}
// }

// valueReturns();
// vo__idReturns();
// neverReturns();
// infiniteLoop();

// ============================================================================

// enums

// const enum levels {
//   one = 1,
//   two = 2,
//   three = 3,
//   four = 4,
// };

// enum lvls {
//   one = 1,
//   two = levels.four - 2,
//   three = (() => 3)(),
//   four = three + 1,
// };

// log(levels['one']);
// log(lvls['one']);

// log(levels[1]); // error
// log(lvls[1]);

// ============================================================================

// Type Assertions (as) - (<type>)
// as type === <type>

// const num = '10000000';

// log((num as string).replace(/0/g, '$'));
// log((<string>num).replace(/0/g, '$'));

// log((+num as number).toExponential());
// log((<number>+num).toExponential());

// using it with dom elements

// const img1 = document.getElementBy__id('img') as (HTMLImageElement | null); // method 1
// const img2 = <(HTMLImageElement | null)>document.getElementBy__id('img'); // method 2

// ============================================================================

// intersection(&) and union(|)

// type stringOrNumber = string | number;

// const O1: stringOrNumber = "100";
// const O2: stringOrNumber = 100;
// log(O1);
// log(O2);

// type A = {
//   a: string,
//   b: number,
//   c: boolean
// };

// type B = {
//   d: Date,
//   e: bigint
// };

// type X = A & B; // intersection

// this is bad - you have to use type-casting
// const fun = (params: X): vo__id => {
//   log((<A>params).a);
//   log((<A>params).b);
//   log((<A>params).c);
//   log((<B>params).d.toISOString());
//   log((<B>params).e);
// };

// fun({ a: "a", b: 10, c: true, d: new Date(), e: 10n });

// ============================================================================

// object annotation

// type info = {
//   name: string,
//   age: number,
//   hired?: boolean,
//   salary: number
// };

// const me: info = {
//   name: 'Mahmoud Gad',
//   age: 26,
//   hired: false,
//   salary: 10e5
// };

// const him: info = {
//   name: 'Ali Gad',
//   age: 30,
//   salary: 10e3
// };

// log(me);
// log(him);

// ============================================================================

// type vs interface
// (type and interface) are like (funciton and function expression)

// type UserType = {
//   name: string;
//   age: number;
//   sayHello(): string;
//   sayHi: () => string;
//   updateName(newName: string): vo__id;
// };

// interface UserInterface {
//   name: string;
//   age: number;
//   sayHello(): string;
//   sayHi: () => string;
//   updateName(newName: string): vo__id;
// }

// const u1: UserType = {
//   name: "MG",
//   age: 26,
//   sayHello() {
//     return "Hello, " + this.name;
//   },
//   sayHi: () => "Hi, " + u1.name,
//   updateName(newName) {
//     this.name = newName;
//   },
// };

// log(u1.sayHello());
// u1.updateName("Mera");
// log(u1.sayHi());

// ============================================================================

// interface User {
//   __id: string;
//   username: string;
// }

// interface Moderator {
//   role?: string | number;
// }

// interface SuperUser extends User, Moderator {
//   superAdmin: boolean;
// }

// class SuperUserCls implements SuperUser {
//   __id: string;
//   username: string;
//   role: string | number;
//   superAdmin: boolean;
//   printInfo: () => vo__id;

//   constructor(__id: string, username: string, role: string, superAdmin: boolean) {
//     this.__id = __id;
//     this.username = username;
//     this.role = role;
//     this.superAdmin = superAdmin;
//     this.printInfo = () => {
//       log("\n------------------------------");
//       log("__id:", this.__id);
//       log("username:", this.username);
//       log("role:", this.role);
//       log("isSuperAdmin:", this.superAdmin ? "Yes" : "No");
//       log("------------------------------\n");
//     };
//   }
// }

// const SA: SuperUserCls = new SuperUserCls("1000152612", "MG", "admin", true);
// SA.printInfo();

// ============================================================================

// access modifiers & parameter properties

// class Person {
//   private readonly __id: string;
//   protected readonly _fullname: string;
//   public address: string;
//   public married: boolean;

//   constructor(id: string, fullname: string, address: string, married: boolean) {
//     this.__id = id;
//     this._fullname = fullname;
//     this.address = address;
//     this.married = married;
//   }

//   public get id() {
//     return this.__id;
//   }

//   public get fullname() {
//     return this._fullname;
//   }
// }

// we can create the class person using the folowing syntax

// class _Person {
//   constructor(
//     private readonly __id: string,
//     protected readonly _fullname: string,
//     public address: string,
//     public married: boolean
//   ) {}

//   public get id() {
//     return this.__id;
//   }

//   public get fullname() {
//     return this._fullname;
//   }
// }

// const P = new Person("987654321", "Samy", "Cairo", false);
// const _P = new _Person("123456789", "MG", "Mansourah", true);

// log(P);
// log(_P);

// ============================================================================

// static

// class User {
//   private static count: number = 0;
//   public readonly id: number;

//   constructor() {
//     this.id = ++User.count;
//   }

//   static get usersCount() {
//     return `${User.count} users created`;
//   }
// }

// log(User.usersCount);

// const users: User[] = [];
// for (let i = 0; i < 10; ++i) users.push(new User());

// log(User.usersCount);

// ============================================================================

// interface Human {
//   fname: string;
//   sayHi: () => void;
//   sayBye(): void;
// }

// class Person implements Human {
//   constructor(public readonly fname) {}
//   sayHi() {
//     log(`${this.fname} saying Hi`);
//   }

//   sayBye() {
//     log(`${this.fname} saying Bye`);
//   }
// }

// const p = new Person("MG");
// p.sayHi();
// p.sayBye();

// ============================================================================

// abstract class

// abstract class Food {
//   constructor(public readonly title: string) {}
//   public abstract getCookingTime: () => string;
//   public abstract getPrice: () => string;
// }

// class Pizza extends Food {
//   constructor(title: string, public readonly size: "L" | "M" | "S") {
//     super(title);
//   }

//   getCookingTime = () => {
//     return `Pizza Cooking Time is ${
//       this.size === "L" ? "1hr" : this.size === "M" ? "30hr" : "15min"
//     }`;
//   };

//   getPrice = () => {
//     return `The Price is ${
//       this.size === "L" ? 200 : this.size === "M" ? 150 : 100
//     } Pounds`;
//   };
// }

// class Burger extends Food {
//   constructor(
//     title: string,
//     public readonly size: "big" | "small",
//     public readonly type: "beef" | "chicken"
//   ) {
//     super(title);
//   }

//   getCookingTime = () => {
//     return `Burger Cooking Time is ${this.size === "big" ? "1hr" : "30hr"}`;
//   };

//   getPrice = () => {
//     const price: number =
//       (this.size === "big" ? 200 : 100) + (this.type === "beef" ? 30 : 0);
//     return `The Price is ${price} Pound`;
//   };
// }

// const pizza = new Pizza("Awesome Pizza", "M");
// log(pizza.getPrice());
// log(pizza.getCookingTime());

// const burger = new Burger("Awesome Pizza", "big", "beef");
// log(burger.getPrice());
// log(burger.getCookingTime());

// ============================================================================

// polymorphism & override

// class Player {
//   constructor(public name: string) {}
//   attack(): void {
//     log("Attacking Now");
//   }
// }

// class Assassin extends Player {
//   constructor(name: string) {
//     super(name);
//   }
//   override attack(): void {
//     log(`${this.name} is Attacking With Knife 🗡️`);
//   }
// }

// const assassin = new Assassin("killer Assassin");
// assassin.attack();

// ============================================================================

// Generics

// Generic function

// function genericFunction<T>(val: T): void {
//   log(val);
// }

// Generic arrow function

// const genericArrowFunction = <T>(val: T): T => val;

// genericFunction<number>(10);
// genericFunction<string>("string");
// genericFunction<boolean>(true);
// genericFunction<number[]>([1, 2, 3, 4, 5]);
// genericFunction<{ a: 10; b: 20 }>({ a: 10, b: 20 });

// ============================================================================

// multible generic types

// function multibleGenerics<T, S>(v1: T, v2: S): void {
//   log(`\nValue One -> ${v1} of type { ${typeof v1} }`);
//   log(`Value Two -> ${v2} of type { ${typeof v2} }`);
// }

// multibleGenerics<string, number>("MG", 1997);
// multibleGenerics<boolean, bigint>(true, 1997n);

// default type

// const genericFunctionWithDefaulType = <T = string>(val: T): void => {
//   log(`The Value Is (${val}) - Of Type { ${typeof val} }`);
// };

// genericFunctionWithDefaulType("MG");
// genericFunctionWithDefaulType<number>(1997);

// ============================================================================

// generics with classes

// class Person<T = string> {
//   constructor(public fname: T, private readonly id: T) {}
//   printInfo(): void {
//     log(`The Name IS { ${this.fname} - ID IS { ${this.id} } }`);
//   }
// }

// const p1 = new Person("MG", "10001");
// const p2 = new Person('MG', 10001); // error
// const p2 = new Person<number | string>("MG", 10001); // ok

// example:

// class _Array<T> extends Array<T> {
//   constructor(...vals: T[]) {
//     super(...vals);
//   }
// }

// type Human = {
//   name: string;
//   age: number;
// };

// interface Animal {
//   type: string;
//   speed: number;
// }

// const arrOfNumbers = new _Array<number>(1, 2, 3, 4, 5);
// log(arrOfNumbers.map((v) => v ** 2));

// const arrOfStrings = new _Array<string>("A", "B", "C");
// log(arrOfStrings.map((v) => v.repeat(3)));

// const Humans = new _Array<Human>(
//   { name: "MG", age: 26 },
//   { name: "MO", age: 40 },
//   { name: "KO", age: 50 }
// );
// const Animals = new _Array<Animal>(
//   { type: "Lion", speed: 50 },
//   { type: "Cheeta", speed: 120 },
//   { type: "Bear", speed: 55 }
// );

// log(Humans);
// log(Animals);

// ============================================================================

// object notation

type objKey = number | string | symbol;

const obj: { [i: objKey]: any } = {
  1: 100,
  "2": "100",
  [Symbol.for("3")]: 123n,
};
log(obj);

// ============================================================================
// advanced types

const f1 = () => 10;
const f2 = () => "10";

type T1 = ReturnType<typeof f1>; // number
type T2 = ReturnType<typeof f2>; // string

// custom - Prettify<T>
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  hasAccess: boolean;
};

type Prettify<T> = {
  [k in keyof T]: T[k];
};

type PrettifiedAdmin = Prettify<Admin>;
