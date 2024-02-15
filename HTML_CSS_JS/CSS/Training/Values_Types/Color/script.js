// Hue Slider Start
const slider = document.querySelector(".hue-slider > #slider");
const hue_val = document.querySelector(".hue-slider > p > #hue-val");
const color_circle = document.querySelector(".hue-slider > #color-circle");

slider.addEventListener("input", () => {
  const val = slider.value;
  hue_val.textContent = `${val}grad`;
  color_circle.style.backgroundColor = `hsl(${val}grad 100% 50% / 1)`;
});

// color test
const output = document.querySelector(".color-test > #output");
const input = document.querySelector(".color-test > #input");

input.addEventListener("input", () => {
  console.log(input.value);
  output.style.backgroundColor = `${input.value}`;
});
