// blend_modes
const blend_modes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];

const options = document.getElementById("options");
// build modes options
blend_modes.forEach((mode) => {
  options.innerHTML += `
    <option value="${mode}" label="${mode}"></option>
  `;
});

// *-blend-mode targets
const bg_target = document.getElementById("bg-target");
const mix_target = document.getElementById("mix-target");

options.addEventListener("change", () => {
  bg_target.style.backgroundBlendMode = options.value;
  mix_target.style.mixBlendMode = options.value;
});
