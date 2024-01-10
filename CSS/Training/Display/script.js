const conts = document.querySelectorAll(".container");
const sel = document.getElementById("select");

const set_display = () => {
  conts.forEach((cont) => {
    cont.style.display = sel.value;
  });
};
set_display();

sel.addEventListener("change", set_display);