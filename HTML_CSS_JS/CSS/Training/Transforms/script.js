// global variables
// ----------------------------------------------------------------------
// cube element
const cube = document.getElementById("cube");
const cube_cont = document.getElementById("cube-container");

let advanced = true; // default mode is basic

// animation object
const animation = new Animation();
let motion = false; // for animation mode
const duration = 2000;

// transform value
const transform = `
rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) 
translate3d(var(--translateX), var(--translateY), var(--translateZ)) 
scale3d(var(--scaleX), var(--scaleY), var(--scaleZ)) 
skewX(var(--skewX)) skewY(var(--skewY))`;

// all reversed except the scale
const transform_reverserd = `
rotateX(calc(var(--rotateX) * -1)) rotateY(calc(var(--rotateY) * -1)) rotateZ(calc(var(--rotateZ) * -1)) 
translate3d(calc(var(--translateX) * -1), calc(var(--translateY) * -1), calc(var(--translateZ) * -1)) 
scale3d(var(--scaleX), var(--scaleY), var(--scaleZ)) 
skewX(calc(var(--skewX) * -1)) skewY(calc(var(--skewY) * -1))`;

// ----------------------------------------------------------------------

// Basic Settings Start
// =============================================================================
// =============================================================================

// properties map
// element => [ property-name, unit, unit-symbol, initial-value ]
const range_map = new Map([
  [rotateX, ["--rotateX", "deg", "°", "0"]],
  [rotateY, ["--rotateY", "deg", "°", "0"]],
  [rotateZ, ["--rotateZ", "deg", "°", "0"]],
  [translateX, ["--translateX", "px", "px", "0"]],
  [translateY, ["--translateY", "px", "px", "0"]],
  [translateZ, ["--translateZ", "px", "px", "0"]],
  [scaleX, ["--scaleX", "", "x", "1"]],
  [scaleY, ["--scaleY", "", "x", "1"]],
  [scaleZ, ["--scaleZ", "", "x", "1"]],
  [skewX, ["--skewX", "deg", "°", "0"]],
  [skewY, ["--skewY", "deg", "°", "0"]],
  [transformOriginX, ["--transformOriginX", "%", "%", "50"]],
  [transformOriginY, ["--transformOriginY", "%", "%", "50"]],
  [transformOriginZ, ["--transformOriginZ", "px", "px", "0"]],
  [prespective, ["--prespective", "px", "px", "500"]],
  [prespectiveOriginX, ["--prespectiveOriginX", "%", "%", "50"]],
  [prespectiveOriginY, ["--prespectiveOriginY", "%", "%", "50"]],
]);

// element => cube-property-name
const radio_map = new Map([
  [preserve_3d, "transform-style"],
  [flat, "transform-style"],
  [visible_bf, "backface-visibility"],
  [hidden_bf, "backface-visibility"],
]);
// dafault radio values used for reseting
const radio_defaults = [preserve_3d, visible_bf];

// functions & tools
// ----------------------------------------------------------------------
const set_transform = () => {
  cube.style.transform = transform;
};

const update_range = (input) => {
  const value = input.value;
  const data = range_map.get(input);
  cube_cont.style.setProperty(data[0], value + data[1]);
  input.parentElement.querySelector(".value").textContent = value + data[2];

  if (motion) {
    set_keyframes();
  }
};

// reset properties
const reset_range = (input, data) => {
  if (!data) {
    data = range_map.get(input);
  }
  const init_val = data[3];
  cube_cont.style.setProperty(data[0], init_val + data[1]);
  input.value = init_val;
  input.parentElement.querySelector(".value").textContent = init_val + data[2];

  if (motion) {
    set_keyframes();
  }
};

const update_radio = (input) => {
  const property_name = radio_map.get(input);
  cube.style.setProperty(property_name, input.value);
  input.checked = true;

  // to give the cube a bg color at flat mode
  if (input === flat) {
    cube.style.setProperty("background-color", "#f005");
  } else {
    cube.style.setProperty("background-color", "transparent");
  }
};

// initialization & reset all
const reset_all_ranges = () => {
  range_map.forEach((data, ele) => {
    reset_range(ele, data);
  });
};

const reset_all_radios = () => {
  // set default radios
  radio_defaults.forEach((ele) => {
    update_radio(ele);
  });
};

const basic_mode_rest = () => {
  if (motion) {
    remove_effect();
  }
  reset_all_ranges();
  reset_all_radios();
};
basic_mode_rest();
// ----------------------------------------------------------------------

/* input:range event */
basicSettings.querySelectorAll("input[type='range']").forEach((ele) => {
  ele.addEventListener("input", () => {
    update_range(ele);
  });

  // reset range at double click
  ele.addEventListener("dblclick", () => {
    reset_range(ele);
  });
});

/* input:radio event */
basicSettings.querySelectorAll("input[type='radio']").forEach((ele) => {
  ele.addEventListener("change", () => {
    update_radio(ele);
  });
});

// reset ranges buttons
basicSettings.querySelectorAll(".reset.range").forEach((reset_button) => {
  reset_button.addEventListener("click", (e) => {
    e.target.parentElement.parentElement
      .querySelectorAll("input[type='range']")
      .forEach((ele) => {
        reset_range(ele);
      });
  });
});

// Basic Settings End
// =============================================================================
// =============================================================================

// Advanced Settings Start
// =============================================================================
// =============================================================================

let curr_option = "";

// property => syntax
const selection_map = new Map([
  ["rotate", "none | <angle> | [ x | y | z | <number>{3} ] && <angle>"],
  ["scale", "none | [ <number> | <percentage> ]{1,3}"],
  [
    "translate",
    "none | <length-percentage> [ <length-percentage> <length>? ]?",
  ],
  ["transform", "none | <transform-list>"],
]);

// add selections
selection_map.forEach((_, property) => {
  selections.innerHTML += `
    <option value="${property}" label="${property}"></option>
  `;
});

const transform_syntax_map = new Map([
  [
    "matrix",
    `matrix(
  scaleX(n), skewY(n),
  skewX(n), scaleY(n),
  translateX(n), translateY(n)
)`,
  ],
  [
    "matrix3d",
    `matrix3d(
  scaleX(n), skewY(n), (n), (n)
  skewX(n), scaleY(n), (n), (n)
  (n), (n), scaleZ(n), (n)
  translateX(n), translateY(n), translateZ(n), scaleZ(n)
)`,
  ],
  ["perspective", `prespective(length)`],
  [
    "rotate*",
    `note: rotate === rotateZ

rotate(angle)
rotateX(angle)
rotateY(angle)
rotateZ(angle)
rotate3d(vx, vy, vz, angle) -> (vector, angle)`,
  ],
  [
    "scale*",
    `scale(sx, sy) -> (number | percentage)
scaleX(n)
scaleY(n)
scaleZ(n)
scale3d(sx, sy, sz)`,
  ],
  [
    "skew*",
    `skew(ax, ay?) -> (angle)
skewX(angle)
skewY(angle)`,
  ],
  [
    "translate*",
    `t -> (length-percentage)
translate(tx, ty?)
translateX(t)
translateY(t)
translateZ(t)
translate3d(tx, ty, tz) -> tz is <length> only`,
  ],
]);

// add information options
transform_syntax_map.forEach((_, func) => {
  options.innerHTML += `
    <div class="radio-box option">
      <label for="${func}">${func}</label>
      <input type="radio" name="functions" value="${func}" />
    </div>
  `;
});

// functions & tools
// ----------------------------------------------------------------------
const reset_previuos = () => {
  cube.style.setProperty(curr_option, "none");
};

const set_option = () => {
  if (motion) {
    remove_effect();
  } else {
    reset_previuos();
  }
  curr_option = selections.value;
  prop_input.placeholder = selection_map.get(curr_option);
  prop_input.value = "";

  // only show info at transform selection
  if (curr_option === "transform") {
    transformGuide.style.display = "flex";
  } else {
    transformGuide.style.display = "none";
  }
};
set_option();

const advanced_mode_reset = () => {
  if (motion) {
    remove_effect();
  }
  reset_previuos();
  prop_input.value = "";
};

// show & hide information element
const show_hide_info = () => {
  const isOpened = showGuide.classList.toggle("open");
  if (isOpened) {
    information.style.display = "flex";
    setTimeout(() => {
      information.style.transform = "rotateX(0deg)";
    }, 100);
  } else {
    information.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      information.style.display = "none";
    }, 400);
  }
};
// ----------------------------------------------------------------------

// selections event
selections.addEventListener("change", () => {
  set_option();
});

// property input field event
prop_input.addEventListener("input", (e) => {
  if (motion) {
    set_keyframes();
  } else {
    cube.style.setProperty(curr_option, e.target.value);
  }
});

// show information button event
showGuide.addEventListener("click", () => {
  show_hide_info();
});

// information options events
options.querySelectorAll(".option").forEach((ele) => {
  ele.addEventListener("change", (e) => {
    syntax.innerText = transform_syntax_map.get(e.target.value);
  });
});

// Advanced Settings End
// =============================================================================
// =============================================================================

// switch mode & reset_all settings start
// =============================================================================
// =============================================================================
const set_mode = () => {
  if (advanced) {
    modeLabel.textContent = "Advenced";
    basicSettings.style.display = "none";
    advancedSettings.style.display = "flex";
    basic_mode_rest();
  } else {
    modeLabel.textContent = "Basic";
    basicSettings.style.display = "flex";
    advancedSettings.style.display = "none";
    advanced_mode_reset();
    set_transform();
  }
  disable_animation();
};
set_mode();

const toggle_mode = () => {
  switchMode.classList.toggle("on");
  advanced = advanced ? false : true;
  set_mode();
};

// mode switch events
switchMode.addEventListener("click", () => {
  toggle_mode();
});
switchMode.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "Space") {
    toggle_mode();
  }
});

// reset all button
resetAll.addEventListener("click", () => {
  if (advanced) {
    advanced_mode_reset();
  } else {
    basic_mode_rest();
  }
});

// switch mode & reset_all settings End
// =============================================================================
// =============================================================================

// Animaton Settings Start
// =============================================================================
// =============================================================================

// animation functions
// -------------------------------------------------------
function remove_effect() {
  animation.cancel();
  // clear keyframes
  animation.effect = null;
  keyframes = null;
  playState.checked = false;
  alternate.checked = false;
}

function enable_animation() {
  if (advanced) {
    advanced_mode_reset();
  } else {
    basic_mode_rest();
  }
  motion = true;
  animate.checked = true;
  playState.checked = false;
  alternate.checked = false;
  // show buttons
  playState.style.display = "unset";
  alternate.style.display = "unset";
}

function disable_animation() {
  if (advanced) {
    advanced_mode_reset();
  } else {
    basic_mode_rest();
  }
  animate.checked = false;
  motion = false;
  // hide button
  playState.style.display = "none";
  alternate.style.display = "none";
}

function get_keyframes() {
  // at advanced mode
  if (advanced) {
    const effects = prop_input.value.split("->");
    return effects.map((eff) => ({ [curr_option]: eff }));
  }
  // at basic mode
  return [{ transform: transform_reverserd }, { transform: transform }];
}

function set_keyframes() {
  // update animation with new keyframes
  const keyframes = get_keyframes();
  animation.effect = new KeyframeEffect(cube, keyframes, {
    duration: duration,
    iterations: Infinity,
    direction: alternate.checked ? "alternate" : "normal",
  });
}

// -------------------------------------------------------

// activate animation checkbox event
animate.addEventListener("change", (e) => {
  if (e.target.checked) {
    enable_animation();
  } else {
    disable_animation();
  }
});

// run & pause animation checkbox event
playState.addEventListener("change", (e) => {
  if (e.target.checked) {
    animation.play();
  } else {
    animation.pause();
  }
});

// alternate animation checkbox event
alternate.addEventListener("change", (e) => {
  set_keyframes();
});

// Animaton Settings End
// =============================================================================
// =============================================================================
