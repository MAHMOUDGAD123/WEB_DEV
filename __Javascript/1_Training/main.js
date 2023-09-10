const myname = "Mahmoud Gad";
const arr = ["Mahmoud", "Amira", "Mohammed"];
const arr2d = [
  ["Mahmoud", "Gad"],
  ["Amira", "Gad"],
  ["Mohammed", "Gad"],
];

function name(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

const Mahmoud = new name("Mahmoud", "Gad");
const Amira = new name("Amira", "Gad");
const Mohammed = new name("Mohammed", "Gad");

const map = {
  name1: Mahmoud,
  name2: Amira,
  name3: Mohammed,
};

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], "=> length =", arr.length);
console.log("===========================================");
console.log(
  "%cMahmoud %cGad",
  "color: pink; font-size:20px;",
  "color: yellow; font-size:30px;"
);
console.log("===========================================");
console.table(arr);
console.log("===========================================");
console.table(arr2d);
console.log("===========================================");
console.log(Mahmoud, Amira, Mohammed);
console.log("===========================================");
console.log(map);
console.log("===========================================");
console.table(map);
console.log("===========================================");
console.log("My Name is -> " + myname);
console.log(`My Name is -> ${myname}`);
console.log("===========================================");

//========================================================================
