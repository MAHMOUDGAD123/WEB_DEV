const shapes = new Map([
  ["inset", "<offsets>{1,4} [ round <border-radius> ]?"],
  ["rect", "<offsets>{4} [ round <border-radius> ]?"],
  ["xywh", "<x, y> <w, h> [ round <border-radius> ]?"],
  ["circle", "<r>? [ at <position> ]?"],
  ["ellipse", "<rx, ry>? [ at <position> ]?"],
  ["polygon", "<fill-rule>?, [ <xi>, <yi> ]#"],
  ["path", ""],
]);

/* mode => [
    mode-btn-bg-color,
    move-btn-bg-color,
    output-bg-color,
    output-box-shadow
  ]
*/
const modes = new Map([
  ["clip", ["#cf2929", "#ffc107", ""]],
  ["move", ["#5338ff", "", "0 0 20px #fff"]],
]);

let mode_theme, output_bg, output_bs;

let curr_shape = "";
let curr_mode = "";
let clip = true; // to check if on move mode
let on_the_move = false; // to check if animation is on

const animate = "move infinite linear 7s";
const main_color_class = "p-fieldset";

// elements
const main = document.getElementById("main");
const legend = document.getElementById("legend");
const options = document.getElementById("options");
const input = document.getElementById("input");
const output = document.getElementById("output");
const space_ship = document.getElementById("space-ship");
const mode_btn = document.getElementById("mode_btn");
const move_btn = document.getElementById("move_btn");

const set_settings = () => {
  // set current shape
  curr_shape = options.value;
  // change the shape legend
  legend.textContent = curr_mode;
  // update the placeholder
  input.placeholder = shapes.get(curr_shape);
  // reset the output
  output.style.clipPath = "";
  // reset the space_shp path
  space_ship.style.offsetPath = "";
};

const set_curr_mode_vals = () => {
  [mode_theme, output_bg, output_bs] = modes.get(curr_mode);

  mode_btn.style.backgroundColor = mode_theme;
  options.style.backgroundColor = mode_theme;
  output.style.background = output_bg;
  output.style.boxShadow = output_bs;
};

const set_clip_mode = () => {
  curr_mode = "clip";
  clip = true;
  set_curr_mode_vals();
  // hide the space_ship
  space_ship.style.display = "none";
  move_btn.style.display = "none";
  set_settings();
  // change main color
  main.classList.remove(main_color_class);
};

const set_move_mode = () => {
  curr_mode = "move";
  clip = false;
  set_curr_mode_vals();
  // show up the space_ship & move_btn
  space_ship.style.display = "unset";
  move_btn.style.display = "unset";
  set_settings();
  // change main color
  main.classList.add(main_color_class);
};

const run_animation = () => {
  move_btn.classList.add("green-bg");
  space_ship.style.animation = animate;
  space_ship.style.offsetPath = input.value;
  on_the_move = true;
};

const stop_animation = () => {
  move_btn.classList.remove("green-bg");
  space_ship.style.animation = "";
  space_ship.style.offsetPath = "";
  on_the_move = false;
};

const toggle_mode = () => {
  stop_animation();

  if (clip) {
    set_move_mode();
  } else {
    set_clip_mode();
  }
};

const toggle_animation = () => {
  if (!clip) {
    if (on_the_move) {
      stop_animation();
    } else {
      run_animation();
    }
  }
};

// events
// ---------------------------------------------

window.addEventListener("load", () => {
  // fill options
  shapes.forEach((_, shape) => {
    options.innerHTML += `
      <option value="${shape}" label="${shape}"></option>
    `;
  });

  // clip-path mode by default
  set_clip_mode();
});

options.addEventListener("change", () => {
  set_settings();
});

input.addEventListener("input", () => {
  if (clip) {
    output.style.clipPath = `${curr_shape}(${input.value})`;
  } else {
    space_ship.style.offsetPath = `${curr_shape}(${input.value})`;
  }
});

mode_btn.addEventListener("click", () => {
  toggle_mode();
});

move_btn.addEventListener("click", () => {
  toggle_animation();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyP") {
    toggle_animation();
  }
});
