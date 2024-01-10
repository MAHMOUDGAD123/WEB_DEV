const move = document.getElementById("move");
const change = document.getElementById("change");
const cont = document.getElementById("container");

const positions = [
  "top left, center",
  "top right, center",
  "bottom left, center",
  "bottom right, center",
  "10% 10%, center",
  "top 200px left 250px, center",
  "top 500px right 250px, center",
  "bottom 500px left 250px, center",
  "bottom 500px right 300px, center",
  "center 500px, center",
  "300px 500px, center",
  "center",
];
const sex = [
  `url(../../Files/images/Female-ass.png),
  linear-gradient(
    0.25turn,
    #000111,
    #111222,
    #222333,
    #333444,
    #444555,
    #555666
  )`,
  `url(../../Files/images/Assassins.png),
  linear-gradient(
    0.25turn,
    #000111,
    #111222,
    #222333,
    #333444,
    #444555,
    #555666
  )`,
];

let gender = 1;
change.textContent = "female";

move.addEventListener("click", () => {
  cont.style.backgroundPosition = positions[(Math.random() * 12) >>> 0];
});

change.addEventListener("click", () => {
  switch (gender) {
    case 0:
      gender = 1;
      change.textContent = "female";
      cont.style.backgroundImage = sex[1];
      break;
    case 1:
      gender = 0;
      change.textContent = "male";
      cont.style.backgroundImage = sex[0];
      break;
  }
});
