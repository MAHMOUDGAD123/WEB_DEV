// cars
const car = document.getElementById("car");
const playState = document.getElementById("playState");
const iterationPause = document.getElementById("iterationPause");
playState.checked = false; // unchecked by default
iterationPause.checked = false; // unchecked by default
iterationEvent = false; // used with iterationPause

/*
property => data [ 
  animation_property_name,
  default_value_index,
  selections [],
  current_option {}, -> will be different every selection
]
*/
const porp_map = new Map([
  [
    "delay",
    ["animation-delay", 3, ["-3s", "-2s", "-1s", "0s", "1s", "2s", "3s"], null],
  ],
  [
    "duration",
    [
      "animation-duration",
      5,
      ["0s", "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s"],
      null,
    ],
  ],
  [
    "direction",
    [
      "animation-direction",
      0,
      ["normal", "reverse", "alternate", "alternate-reverse"],
      null,
    ],
  ],
  [
    "fillMode",
    ["animation-fill-mode", 0, ["none", "forwards", "backwards", "both"], null],
  ],
  [
    "iterationCount",
    [
      "animation-iteration-count",
      8,
      ["0.5", "1", "2", "3", "4", "5", "6", "7", "infinite"],
      null,
    ],
  ],
  [
    "iterationCount",
    [
      "animation-iteration-count",
      8,
      ["0.5", "1", "2", "3", "4", "5", "6", "7", "infinite"],
      null,
    ],
  ],
  [
    "composition",
    ["animation-composition", 0, ["replace", "add", "accumulate"], null],
  ],
  [
    "timingFunciton",
    [
      "animation-timing-function",
      0,
      [
        "linear",
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "step-start",
        "step-end",
        "steps(5, jump-both)",
      ],
      null,
    ],
  ],
  ["name", ["animation-name", 0, ["none", "race", "left-right"], null]],
]);

// set settings on load
porp_map.forEach((data, propertyId) => {
  const property = document.getElementById(propertyId);
  const default_index = data[1];
  const selections = data[2];
  // get the options element
  const options = property.querySelector(".options");
  // add selections and set defaults
  selections.forEach((sel, i) => {
    if (i === default_index) {
      // default
      options.innerHTML += `<div class="option default" tabindex="0">${sel}</div>`;
    } else {
      // not default
      options.innerHTML += `<div class="option" tabindex="0">${sel}</div>`;
    }
  });
  // get the default option of the property
  const default_option = options.querySelector(".option.default");
  set_option(default_option, data);
  run_animation();
});

// functions & tools
// ---------------------------------------------------
function select(option) {
  option.classList.add("selected");
}

function unselect(option) {
  if (option) option.classList.remove("selected");
}

function set_option(option, data) {
  // get needed data
  const proprty_name = data[0];
  const current_option = data[3];

  // do nothing if the option is already selected
  if (option !== current_option) {
    // unselect the current option
    unselect(current_option);
    // select the new option
    select(option);
    // set property value
    car.style.setProperty(proprty_name, option.textContent);
    // save current_option
    data[3] = option;
  } else {
    console.log("Already Selected");
    setTimeout(console.clear, 5000);
  }
}

function reset_all() {
  porp_map.forEach((data, propertyId) => {
    const property = document.getElementById(propertyId);
    // get the options element
    const options = property.querySelector(".options");
    // get the default option of the property
    const default_option = options.querySelector(".option.default");
    set_option(default_option, data);
  });
}

function run_animation() {
  car.style.animationPlayState = "running";
  playState.checked = true;
  iterationPause.checked = false;
  if (iterationEvent) {
    // remove the event listener
    car.removeEventListener("animationiteration", pause_animation, false);
    iterationEvent = false;
  }
}

function pause_animation() {
  car.style.animationPlayState = "paused";
  playState.checked = false;
}

// ---------------------------------------------------

// events
// ---------------------------------------------------

// add event to all options
document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", (e) => {
    // (1) get the propertyId
    const propertyId = e.target.parentElement.parentElement.id;
    // (2) get the property data
    const data = porp_map.get(propertyId);
    set_option(e.target, data);
  });
});

// add event to all properties reset buttons
document.querySelectorAll(".property .reset").forEach((reset) => {
  reset.addEventListener("click", (e) => {
    // get the property element
    const property = e.target.parentElement.parentElement;
    // get the property data
    const data = porp_map.get(property.id);
    // get the default option
    const default_option = property.querySelector(".options > .option.default");
    set_option(default_option, data);
  });
});

// reset all button event
document.getElementById("resetAll").addEventListener("click", reset_all);

// playState event
playState.addEventListener("input", (e) => {
  if (e.target.checked) {
    run_animation();
  } else {
    pause_animation();
  }
});

// playStateIteration event to stop animaiton at the end of the current iteration
iterationPause.addEventListener("input", (e) => {
  if (e.target.checked) {
    car.addEventListener("animationiteration", pause_animation, false);
    iterationEvent = true;
  } else {
    run_animation();
  }
});

// ---------------------------------------------------

// console logs
// ---------------------------------------------------

const loger = (e) => {
  switch (e.type) {
    case "animationstart":
      console.log(`start: ${e.elapsedTime}s`);
      break;
    case "animationend":
      console.log(`end: ${e.elapsedTime}s`);
      break;
    case "animationiteration":
      console.log(`new iteration: ${e.elapsedTime}s`);
      break;
  }
};

car.addEventListener("animationstart", loger);
car.addEventListener("animationend", loger);
car.addEventListener("animationiteration", loger);

// ---------------------------------------------------

// ex-4 loading
// ---------------------------------------------------
const loading = document.getElementById("loading");
let count = 1;
opacity = 1;

setInterval(() => {
  loading.querySelector(`:nth-child(${count})`).style.opacity = opacity;
  if (++count > 12) {
    count = 1;
    opacity = opacity === 1 ? 0.2 : 1;
  }
}, 100);
// ---------------------------------------------------
