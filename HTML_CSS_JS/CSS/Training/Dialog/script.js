// cool dialog
const dialog = document.getElementById("coolDialog");
const output = document.getElementById("output");
const input = document.getElementById("name");
const confirmBtn = document.getElementById("confirmBtn");
const closeBtn = document.getElementById("closeBtn");

dialog.addEventListener("close", (e) => {
  const txt = e.target.returnValue;
  output.textContent = txt ? txt : "🤔";
});

confirmBtn.addEventListener("click", (e) => {
  console.log("Confirm Event");
  dialog.close(input.value);
});

closeBtn.addEventListener("click", () => {
  console.log("Close Event");
  dialog.close();
});

document.getElementById("openBtn").addEventListener("click", () => {
  dialog.showModal();
});

// ex-$
document.querySelectorAll(".open").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dialog = btn.nextElementSibling;
    console.log("Opened");
    dialog.showModal();
    dialog.querySelector(".close").addEventListener(
      "click",
      (e) => {
        console.log("Closed");
        dialog.close();
      },
      { once: true }
    );
  });
});
