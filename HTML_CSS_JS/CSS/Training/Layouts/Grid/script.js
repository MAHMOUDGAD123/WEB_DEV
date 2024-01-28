// auto placement algorithm
// -------------------------------------------------------
const auto_flow_options = document.getElementById("auto-flow-options");
const dense = document.getElementById("dense");
const grid_box = document.querySelector("#auto-placement > #grid-box");

const auto_flow_list = ["column", "row"];
let curr_option = "";

if (auto_flow_options) {
  auto_flow_list.forEach((option) => {
    auto_flow_options.innerHTML += `
    <option value="${option}" label="${option}"></option>
    `;
  });
}

const set_box_style = () => {
  if (dense.checked) {
    grid_box.style.gridAutoFlow = curr_option + " dense";
  } else {
    grid_box.style.gridAutoFlow = curr_option;
  }
};

auto_flow_options.addEventListener("change", () => {
  if (auto_flow_options.value === "column") {
    curr_option = "column";
    set_box_style();
  } else {
    curr_option = "row";
    set_box_style();
  }
});

dense.addEventListener("change", () => {
  set_box_style();
});
// -------------------------------------------------------

// grid with { display: contents }
// -------------------------------------------------------
const display_options = document.getElementById("diplay-options");
const target_box = document.querySelector("#grid-contents > #grid-box");

const display_list = ["grid", "contents"];

if (display_options) {
  display_list.forEach((option) => {
    display_options.innerHTML += `
      <option value="${option}" label="${option}"></option>
    `;
  });
}

display_options.addEventListener("change", () => {
  if (display_options.value === "grid") {
    target_box.style.display = "grid";
  } else {
    target_box.style.display = "contents";
  }
});
// -------------------------------------------------------