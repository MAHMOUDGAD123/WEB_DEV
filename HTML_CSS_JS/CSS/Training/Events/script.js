const gParent = document.querySelector(".gParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const logName = (e) => {
  console.log(e.target.className);
  // e.stopPropagation();
};

const options = {
  capture: true, // to capture events instead of bubbling
  // once: true, // to run the event once and remove it
  // passive: true, // to ignore calling e.preventDefault()
};

gParent.addEventListener(
  "click",
  (e) => {
    console.log("G Parent");
  },
  options
);
parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent");
  },
  options
);
child.addEventListener(
  "click",
  (e) => {
    console.log("Child");
  },
  options
);

// clear console event
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyC") {
    console.clear();
  }
});
