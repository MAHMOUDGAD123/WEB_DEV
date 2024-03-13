const csslayerRules = document.styleSheets[0].cssRules[0].nameList;

console.log(
  `%c${csslayerRules.join(" -> ")}`,
  "color: orange; font-size: 20px;"
);

const viewPoetWidth = document.getElementById("vpWidth");

setInterval(() => {
  viewPoetWidth.textContent = `width: ${document.body.offsetWidth}px`;
}, 100);
