const target = document.getElementById("target");
const filters = document.getElementById("filters");
const range = document.getElementById("value");
const value = document.getElementById("curr-val");
const user_chioce = document.getElementById("user-choice");

let curr_filter = "",
  curr_value = 0;

// drop-shadow values
const blur_radius = 3,
  color = "#fd262f";

let [init, step, min, max, unit] = [0, 0, 0, 0, ""];

// filter -> [step, min, max, unit]
const options_map = new Map([
  ["blur", [0, 1, 0, 100, "px"]],
  ["brightness", [1, 0.1, 0, 4, ""]],
  ["contrast", [1, 0.1, 0, 4, ""]],
  ["drop-shadow", [0, 1, -40, 40, "px"]],
  ["grayscale", [0, 0.1, 0, 1, ""]],
  ["hue-rotate", [0, 1, 0, 400, "grad"]],
  ["invert", [0, 0.1, 0, 1, ""]],
  ["opacity", [1, 0.1, 0, 1, ""]],
  ["saturate", [1, 0.1, 0, 4, ""]],
  ["sepia", [0, 0.1, 0, 1, ""]],
]);

// tools
const set_range = () => {
  range.step = step;
  range.min = min;
  range.max = max;
  range.value = init;
};

const set_all = () => {
  curr_filter = filters.value;
  [init, step, min, max, unit] = options_map.get(curr_filter);
  set_range();
  curr_value = range.value;
};

const apply = () => {
  // set current value
  value.textContent = curr_value;

  if (curr_filter === "drop-shadow") {
    const val = `${curr_filter}(${curr_value}${unit} ${curr_value}${unit} ${blur_radius}${unit} ${color})`;
    user_chioce.textContent = `filter: ${val});`;
    target.style.filter = `${val}`;
  } else {
    const val = `${curr_filter}(${curr_value}${unit})`;
    user_chioce.textContent = `filter: ${val};`;
    target.style.filter = `${val}`;
  }
};

// events
window.addEventListener("load", () => {
  // build the filters options list
  options_map.forEach((_, filter) => {
    filters.innerHTML += `
      <option value="${filter}" label="${filter}"></option>
      `;
  });

  set_all();
  apply();
});

filters.addEventListener("change", () => {
  set_all();
  apply();
});

range.addEventListener("input", () => {
  curr_value = range.value;
  apply();
});
