const button = document.querySelector("input[type='button']");
button.addEventListener("click", () => {
  if (button) {
    button.disabled = true;
    button.value = "Clicked";
    setTimeout(() => {
      button.disabled = false;
      button.value = "Button";
    }, 2000);
  }
});

const _log = document.querySelector("pre.log");
addEventListener(
  "submit",
  (event) => {
    const form = document.querySelector("form");
    const submitter = document.querySelector("input[type='submit']");
    const data = new FormData(form, submitter);
    let output = "";
    for (const [k, v] of data) {
      output += `-> ${k} = ${v}\n`;
    }
    _log.textContent = output;
    _log.style.visibility = "visible";
    event.preventDefault();
  },
  false
);
const reset = document.getElementById("clearlog");
reset.addEventListener("click", () => {
  _log.style.visibility = "hidden";
  _log.textContent = "";
});

const p = document.querySelector("#paragraph");
addEventListener("load", () => {
  if (p) {
    p.style.color = document.querySelector("input[type='color']").value;
  }
});
addEventListener("change", (event) => {
  if (p) {
    p.style.color = event.target.value;
  }
});

const dateTime = document.getElementById("localtime");
const time = document.getElementById("time");
const local_time = () => {
  const d = new Date().toISOString();
  T_index = d.indexOf("T");
  dateTime.value = d.substring(0, T_index + 6);
  time.value = d.substring(T_index + 1, T_index + 6);
};
// set the value of the date at load
addEventListener("load", local_time);
// update the current date every 1 sec
setInterval(local_time, 1000);

const uploads = document.getElementById("uploads");
const output = document.querySelector(".files-list > tbody");
const count = document.querySelector(".count-files");
addEventListener("change", () => {
  count.textContent = uploads.files.length + " file(s)";
  output.innerHTML = "";
  for (const file of uploads.files) {
    output.innerHTML += `
    <tr>
      <td>${file.name}</td>
      <td>${file.size >>> 10}</td>
      <td>${file.type}</td>
    </tr>`;
  }
});

const toggle = document.getElementById("togglePassword");
const PIN = document.getElementById("PIN");
toggle.onclick = () => {
  const type = PIN.getAttribute("type") === "text" ? "password" : "text";
  PIN.setAttribute("type", type);
  toggle.classList.toggle("bi-eye");
};

const vol_value = document.querySelector(".volume-control > input + span");
const input = document.querySelector(".volume-control > #volume");
const level = document.querySelector(".volume-control > meter");
const level_msg = document.querySelector(".volume-control > meter + span");
vol_value.textContent = input.value;
level.value = input.value;
level_msg.textContent = "Good";
input.addEventListener("input", (event) => {
  vol_value.textContent = event.target.value;
  level.value = input.value;
  const val = level.value;
  if (val <= 10) {
    level_msg.textContent = "very low";
  } else if (val <= 30) {
    level_msg.textContent = "low";
  } else if (val <= 50) {
    level_msg.textContent = "good";
  } else if (val <= 65) {
    level_msg.textContent = "high";
  } else if (val <= 80) {
    level_msg.textContent = "very high";
  } else if (val <= 100) {
    level_msg.textContent = "noisy";
  }
});

