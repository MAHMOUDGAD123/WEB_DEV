const at_top_mode = () => {
  const icons = document.getElementById("icons").children;
  const CD = document.querySelector(".CD");
  const btt = document.getElementById("back-to-top");
  const cont = document.getElementById("cont");

  cont.style.marginTop = "200px";
  btt.style.display = "none";
  CD.style.marginTop = "180px";
  CD.style.height = "fit-content";
  CD.style.rotate = "x 0deg";
  CD.style.opacity = 1;
  for (const i of icons) {
    i.style.rotate = "x 0deg";
  }
};

const scroll_mode = () => {
  const icons = document.getElementById("icons").children;
  const CD = document.querySelector(".CD");
  const btt = document.getElementById("back-to-top");
  const cont = document.getElementById("cont");

  cont.style.marginTop = "50px";
  btt.style.display = "block";
  CD.style.margin = 0;
  CD.style.height = "0px";
  CD.style.rotate = "x 90deg";
  CD.style.opacity = 0;
  for (const i of icons) {
    i.style.rotate = "x 90deg";
  }
};

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      at_top_mode();
    } else {
      scroll_mode();
    }

    const progress = document.getElementById("progress");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  },
  true
);

/* Clock-Date Start */
{
  const frmt = (n) => {
    if (!n) return "00";
    return Math.floor(Math.log10(n)) ? n : "0" + n;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hours = document.querySelector(".CD > .clock > .hr");
  const minutes = document.querySelector(".CD > .clock > .min");
  const seconds = document.querySelector(".CD > .clock > .sec");

  const day = document.querySelector(".CD > .date > .dy");
  const date = document.querySelector(".CD > .date > .dt");
  const month = document.querySelector(".CD > .date > .mn");
  const year = document.querySelector(".CD > .date > .yr");

  setInterval(() => {
    const D = new Date();
    const hrs = frmt(D.getHours());
    const mins = frmt(D.getMinutes());
    const secs = frmt(D.getSeconds());
    const mon = D.getMonth();
    const dt = D.getDate();
    const wd = D.getDay();
    const yr = D.getFullYear();

    hours.textContent = hrs;
    minutes.textContent = mins;
    seconds.textContent = secs;
    day.textContent = days[wd] + ",";
    date.textContent = dt;
    month.textContent = months[mon];
    year.textContent = yr;
  }, 1000);
}
/* Clock-Date End */

/* Responsive content Start */
const backup = [
  ["google", "https://google.com/"],
  ["youtube", "https://youtube.com/"],
  ["google_trans", "https://translate.google.com/"],
  ["gmail", "https://mail.google.com/"],
  ["GPT", "https://chatgpt.com/"],
  ["facebook", "https://facebook.com/"],
  ["github", "https://github.com/"],
  ["git", "https://git-scm.com/docs"],
  ["x", "https://twitter.com/"],
  ["mdn", "https://developer.mozilla.org/"],
  ["linkedin", "https://linkedin.com"],
  ["stackoverflow", "https://stackoverflow.com/"],
  ["roadmap", "https://roadmap.sh/"],
  ["npm", "https://docs.npmjs.com/cli/v10/commands/npm"],
  ["react", "https://react.dev/"],
  ["vite", "https://vitejs.dev/"],
  ["typescript", "https://www.typescriptlang.org/docs/"],
  ["terminal", "https://ss64.com/"],
  ["programmingadvices", "https://programmingadvices.com/"],
  ["programiz", "https://www.programiz.com/"],
  ["colorcode", "https://www.colorcode.io/"],
  ["gfg", "https://www.geeksforgeeks.org/"],
  ["w3s", "https://www.w3schools.com/"],
  ["codewars", "https://www.codewars.com/"],
  ["leetcode", "https://leetcode.com/problemset/"],
  ["cpp", "https://en.cppreference.com/"],
  ["udemy", "https://udemy.com/"],
  ["edclub", "https://www.edclub.com/"],
  ["oxford", "https://www.oxfordlearnersdictionaries.com/"],
  ["mega", "https://mega.nz/fm/KsEinTTJ"],
  ["1337x", "https://1337x.to/"],
  ["dailymotion", "https://www.dailymotion.com/"],
  ["topcinema", "https://web5.topcinema.top/"],
  ["yt1s", "https://www.yt1s.com/en2aef"],
  ["y2mate", "https://en.y2mate.is/v84/"],
  ["savefrom", "https://en1.savefrom.net/2ol/"],
  ["fontawesome", "https://fontawesome.com/"],
  ["flaticon", "https://www.flaticon.com/"],
  ["iconscout", "https://iconscout.com/"],
  ["alphacoders", "https://alphacoders.com/"],
  ["skrill", "https://www.skrill.com/"],
  ["paypal", "https://www.paypal.com/"],
  ["justpasteit", "https://justpaste.it/"],
  ["jumia", "https://www.jumia.com.eg/"],
  ["amazon", "https://www.amazon.eg/"],
];

/**
 * @type {string[][]}
 */
const links = JSON.parse(window.localStorage.getItem("home-links")) || backup;

const createLink = (name, href, i) => {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const removeIcon = document.createElement("div");
  removeIcon.className = "remove-icon";
  removeIcon.title = "remove";
  removeIcon.dataset.index = i;

  const link = document.createElement("a");
  link.href = href;
  link.title = name;
  link.innerHTML = `<img src="./imgs/${name}.png" alt="${name}" width="70"/>`;

  wrapper.appendChild(link);
  wrapper.appendChild(removeIcon);

  // remove btn event
  removeIcon.addEventListener(
    "click",
    (e) => {
      removeLinkFromLocalStorage(e.target.dataset.index);
      wrapper.remove();
    },
    { once: true }
  );

  return wrapper;
};

const addLinkToLocalStorage = (name, href) => {
  links.push([name, href]);
  window.localStorage.setItem("home-links", JSON.stringify(links));
};

const removeLinkFromLocalStorage = (linkIndex) => {
  links.splice(linkIndex, 1);
  window.localStorage.setItem("home-links", JSON.stringify(links));
};

// set links
(() => {
  at_top_mode();
  const cont = document.getElementById("cont");
  links.forEach(([name, href], i) => {
    cont.appendChild(createLink(name, href, i));
  });
  window.localStorage.setItem("home-links", JSON.stringify(links));
})();
/* Responsive content End */

/* Edit Sites Start */
/** @type {HTMLDivElement | null}*/
let newLinkForm = null;
/** @type {HTMLDivElement | null}*/
let addNewLinkBtn = null;
let isEditing = false;

const createNewLinkForm = () => {
  newLinkForm = document.createElement("div");
  newLinkForm.className = "new-link-form";
  // btns
  const btnsWrapper = document.createElement("div");
  btnsWrapper.className = "btns-wrapper";
  const addBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.tabIndex = 0;
  cancelBtn.tabIndex = 0;
  cancelBtn.textContent = "Cancel";
  btnsWrapper.append(addBtn, cancelBtn);
  // inputs
  const hrefIn = document.createElement("input");
  const nameIn = document.createElement("input");
  hrefIn.type = "text";
  hrefIn.name = "linkhref";
  hrefIn.id = "linkhref";
  hrefIn.placeholder = "Enter The Link Here";
  nameIn.type = "text";
  nameIn.name = "linkname";
  nameIn.id = "linkname";
  nameIn.placeholder = "Enter The Name Here";
  // appending
  newLinkForm.append(hrefIn, nameIn, btnsWrapper);
  document.body.appendChild(newLinkForm);

  const addHandler = (e) => {
    const href = hrefIn.value;
    const name = nameIn.value;
    if (!href) {
      hrefIn.focus();
    } else if (!name) {
      nameIn.focus();
    } else {
      addNewLinkBtn.before(createLink(name, href, links.length));
      addBtn.removeEventListener("click", addHandler);
      cancelBtn.removeEventListener("click", cancelHandler);
      newLinkForm.remove();
      newLinkForm = null;
      addLinkToLocalStorage(name, href);
    }
  };

  const cancelHandler = (e) => {
    addBtn.removeEventListener("click", addHandler);
    cancelBtn.removeEventListener("click", cancelHandler);
    newLinkForm.remove();
    newLinkForm = null;
  };

  cancelBtn.addEventListener("click", cancelHandler);
  addBtn.addEventListener("click", addHandler);
};

const createAddNewLinkBtn = () => {
  const btn = document.createElement("div");
  btn.className = "add-new-site-btn";
  btn.innerText = "+";
  btn.title = "add new site";
  btn.addEventListener("click", createNewLinkForm);
  document.getElementById("cont").appendChild(btn);
  return btn;
};

// edit btn event
document.getElementById("edit-btn").addEventListener("click", (e) => {
  const cont = document.getElementById("cont");
  const btn = e.target;
  if (isEditing) {
    addNewLinkBtn.removeEventListener("click", createNewLinkForm);
    addNewLinkBtn.remove();
    addNewLinkBtn = null;
    cont.classList.remove("edit-on");
    btn.src = "./imgs/edit.svg";
    btn.title = "Edit Links";
    isEditing = false;
  } else {
    cont.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    // show sites remove icons
    cont.classList.add("edit-on");
    addNewLinkBtn = createAddNewLinkBtn();
    btn.src = "./imgs/save-btn.svg";
    btn.title = "Save Changes";
    isEditing = true;
  }
});
/* Edit Sites End */

// keyboard events
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && !e.ctrlKey) {
    switch (e.code) {
      case "KeyS":
        window.open("https://google.com/", "_blank");
        break;
      case "KeyY":
        window.open("https://youtube.com/", "_blank");
        break;
      case "KeyT":
        window.open("https://translate.google.com/", "_blank");
        break;
      case "KeyF":
        window.open("https://facebook.com/", "_blank");
        break;
      case "KeyX":
        window.open("https://twitter.com/", "_blank");
        break;
      case "KeyG":
        window.open("https://github.com/", "_blank");
        break;
      case "KeyM":
        window.open("https://developer.mozilla.org/", "_blank");
        break;
      case "KeyD":
        window.open("https://en.savefrom.net/", "_blank");
        break;
      case "KeyR":
        window.open("https://roadmap.sh/", "_blank");
        break;
      case "KeyU":
        window.open("https://udemy.com/", "_blank");
        break;
    }
  }
});
