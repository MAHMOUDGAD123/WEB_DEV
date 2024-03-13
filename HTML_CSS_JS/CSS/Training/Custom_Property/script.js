window.CSS.registerProperty({
  name: "--js-prop",
  syntax: "<color>#",
  inherits: false,
  initialValue: "red, blue",
});

const JS = document.querySelector(".JS");

JS.style.backgroundImage = `linear-gradient(
  to right,
  var(--js-prop, var(--fallback))
)`;

JS.style.transition = `--js-prop 1s linear, color 500ms linear`;

JS.addEventListener("mouseover", () => {
  JS.style.setProperty("--js-prop", "blue, red");
  JS.style.color = "cyan";
});

JS.addEventListener("mouseout", () => {
  JS.style.setProperty("--js-prop", "red, blue");
  JS.style.color = "#fff";
});

console.log(document.styleSheets[0].cssRules[1]);
