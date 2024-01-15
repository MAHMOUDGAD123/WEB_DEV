// :fullscreen pseudo class
const fullscreen_toggle = document.querySelector(".fullscreen_toggle");
const fullscreen_test = document.querySelector(".fullscreen_test");
const fullscreen_text = document.querySelector(".fullscreen_test > p");
fullscreen_toggle.textContent = "Open Fullscreen";
fullscreen_text.textContent = "I'm Not Fullscreen";
fullscreen_toggle.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreen_toggle.textContent = "Open Fullscreen";
    fullscreen_text.textContent = "I'm Not Fullscreen";
    return;
  }
  fullscreen_test.requestFullscreen();
  fullscreen_toggle.textContent = "Close Fullscreen";
  fullscreen_text.textContent = "I'm Fullscreen";
});

// :modal & ::backdrop
const dialog = document.querySelector("fieldset > dialog");
const show_number = document.querySelector("fieldset > dialog + button");
show_number.addEventListener("click", () => {
  document.querySelector("form > p").textContent = `${
    (Math.random() * 1000) >>> 0
  }`;
  dialog.showModal();
});

// :scope
const content = document.querySelector(".light-content");
const all_paragraphs = content.querySelectorAll(":scope > p");
const search_res = document.getElementById("search-results");
Array.prototype.forEach.call(all_paragraphs, (p) => {
  search_res.innerHTML += `<p>#${p.getAttribute("id")}</p>`;
});

// ::after
const list = document.querySelector(".before > ul");
const doneAll = document.querySelector(
  ".before > .controls > button:first-child"
);
const clear = document.querySelector(".before > .controls > button:last-child");
let completed = false;
let empty = true;

list.addEventListener(
  "click",
  (event) => {
    const ul = event.target;
    if (ul.tagName === "LI") {
      ul.classList.toggle("done");
    }
    for (const li of list.children) {
      if (!li.classList.contains("done")) {
        list.style.borderColor = "red";
        completed = false;
        empty = false;
        return;
      }
    }
    list.style.borderColor = "#5ff45f";
    completed = true;
    empty = false;
  },
  false
);
clear.addEventListener("click", () => {
  if (!empty) {
    list.style.borderColor = "red";
    for (const li of list.children) {
      li.classList.remove("done");
    }
    completed = false;
    empty = true;
  }
});
doneAll.addEventListener("click", () => {
  if (!completed) {
    list.style.borderColor = "#5ff45f";
    for (const li of list.children) {
      li.classList.add("done");
    }
    completed = true;
    empty = false;
  }
});
