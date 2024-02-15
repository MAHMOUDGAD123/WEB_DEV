// global variables
// ----------------------------------------------------------------------
const ball = document.getElementById("ball");
const selections = document.getElementById("selections");
const guideOptions = document.getElementById("options");
const syntax = document.getElementById("syntax");
const img = document.getElementById("img");
const inputText = document.getElementById("inputText");
const inputField = document.getElementById("inputWrapper");
let motion = false; // for animation mode
let curr_selection;
let curr_guide;
// ----------------------------------------------------------------------

// selections map
// selection => value
const selection_map = new Map([
  ["linear", "linear"],
  ["ease", "ease"],
  ["easeIn", "ease-in"],
  ["easeOut", "ease-out"],
  ["easeInOut", "ease-in-out"],
  ["stepStart", "step-start"],
  ["stepEnd", "step-end"],
  ["userInput", "input..."],
]);
// guide map
// option => [syntax, image]
const guide_map = new Map([
  [
    "linearEF",
    [
      `linear( <linear-stop-list> )

      <linear-stop-list> = [ <linear-stop> ]#
      <linear-stop> = <number> && <linear-stop-length>?
      <linear-stop-length> = <percentage>{1,2}

      hint: linear( output [ stop-start stop-end ]? )

      ex:

      - linear(0, 1) === linear(0 0%, 1 100%) === linear
      - linear(0, 0.25 75%, 1)
      - linear(0.5 25% 75%, 1)
  `,
      "./guide/linear_function.svg",
    ],
  ],
  [
    "cubicBezierEF",
    [
      `cubic-beizer(
        ease |
        ease-in |
        ease-out |
        ease-in-out |
        <number [0,1]> , <number> , <number [0,1]> , <number>
      )

        ex:

        - cubic-bezier(0,-0.8,1,1.95)
        `,
      "./guide/cubic-bezier_out_of_range.svg",
    ],
  ],
  [
    "stepEF",
    [
      `step(
        step-start |
        step-end |
        <integer> , <step-position>?
      )

      <step-position> = jump-start | jump-end | jump-none | jump-both | start | end

      default is -> jump-end

      ex:

      - step(5, jump-start)
      - step(5, jump-end)
  `,
      "./guide/jump.svg",
    ],
  ],
  [
    "examples",
    [
      `
      - linear(0.20 0% 20%, 0.4 20% 40%, 0.6 40% 60%, 0.8 60% 80%, 1 80% 100%) === steps(5, jump-start)

      - linear(0 0% 20%, 0.2 20% 40%, 0.4 40% 60%, 0.6 60% 80%, 0.8 80% 100%) === steps(5, jump-end)

      - linear(0.2 0% 20%, 0.35 20% 40%, 0.5 40% 60%, 0.65 60% 80%, 0.8 80% 100%) === steps(5, jump-both)
      
      - linear(0 0% 20%, 0.25 20% 40%, 0.5 40% 60%, 0.75 60% 80%, 1 80% 100%) === steps(5, jump-none)
      `,
      "",
    ],
  ],
]);

// add selections
selection_map.forEach((value, selectionID) => {
  selections.innerHTML += `
    <div id="${selectionID}" class="option" tabindex="0">${value}</div>
  `;
});

curr_selection = linear; // linear as default selection

// add guides
guide_map.forEach((_, optionID) => {
  guideOptions.innerHTML += `
    <div id="${optionID}" class="option" tabindex="0">${optionID}</div>
  `;
});

curr_guide = linearEF; // linear easing function guide as default

// functions & tools
// ----------------------------------------------------------------------

const reset_previous = (target) => {
  target.classList.remove("selected");
};

const set_selection = () => {
  curr_selection.classList.add("selected");
  if (curr_selection === userInput) {
    inputField.style.display = "flex";
  } else {
    inputField.style.display = "none";
    ball.style.animationTimingFunction = curr_selection.textContent;
  }
};
set_selection();

const set_guide = () => {
  curr_guide.classList.add("selected");
  const [info, figure] = guide_map.get(curr_guide.textContent);
  syntax.innerText = info;
  img.src = figure;
};
set_guide();

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

function enable_animation() {
  motion = true;
  animate.checked = true;
  ball.style.animationPlayState = "running";
}

function disable_animation() {
  motion = false;
  animate.checked = false;
  ball.style.animationPlayState = "paused";
}
disable_animation();

// -------------------------------------------------------

// events
// -------------------------------------------------------

// selections events
selections.childNodes.forEach((selction) => {
  selction.addEventListener("click", (e) => {
    reset_previous(curr_selection);
    curr_selection = e.target;
    set_selection();
  });

  selction.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "Space") {
      reset_previous(curr_selection);
      curr_selection = e.target;
      set_selection();
    }
  });
});

// input:text field event
inputText.addEventListener("input", (e) => {
  ball.style.animationTimingFunction = e.target.value;
});

// guide events
guideOptions.childNodes.forEach((guide) => {
  guide.addEventListener("click", (e) => {
    reset_previous(curr_guide);
    curr_guide = e.target;
    set_guide();
  });

  guide.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "Space") {
      reset_previous(curr_guide);
      curr_guide = e.target;
      set_guide();
    }
  });
});

// show information button event
showGuide.addEventListener("click", () => {
  show_hide_info();
});

// activate animation checkbox event
animate.addEventListener("change", (e) => {
  if (e.target.checked) {
    enable_animation();
  } else {
    disable_animation();
  }
});

// -------------------------------------------------------
