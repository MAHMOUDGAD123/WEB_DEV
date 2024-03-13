const scroll_up = document.querySelector(".button.up");
const scroll_down = document.querySelector(".button.down");
const scroller = document.querySelector(".container");

scroll_up.addEventListener("click", (e) => {
  scroller.scrollBy({
    top: -200,
    behavior: "smooth",
  });
});

scroll_down.addEventListener("click", (e) => {
  scroller.scrollBy({
    top: 200,
    behavior: "smooth",
  });
});
