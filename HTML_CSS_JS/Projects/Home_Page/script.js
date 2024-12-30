const at_top_mode = () => {
  const icons = document.getElementById("icons").children;
  const CD = document.querySelector(".CD");
  const btt = document.getElementById("back-to-top");
  const cont = document.getElementById("cont");

  cont.style.marginTop = "400px";
  btt.style.display = "none";
  CD.style.marginTop = "170px";
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
  ["google", "google.com/"],
  ["youtube", "youtube.com/"],
  ["google_trans", "translate.google.com/"],
  ["gmail", "mail.google.com/"],
  ["GPT", "chatgpt.com/"],
  ["facebook", "facebook.com/"],
  ["github", "github.com/"],
  ["git", "git-scm.com/docs/"],
  ["x", "twitter.com/"],
  ["tiktok", "tiktok.com/"],
  ["mdn", "developer.mozilla.org/"],
  ["linkedin", "linkedin.com/"],
  ["stackoverflow", "stackoverflow.com/"],
  ["roadmap", "roadmap.sh/"],
  ["npm", "docs.npmjs.com/cli/v10/commands/npm/"],
  ["react", "react.dev/"],
  ["reactnative", "reactnative.dev/"],
  ["next", "nextjs.org/"],
  ["expo", "expo.dev/"],
  ["vite", "vitejs.dev/"],
  ["typescript", "typescriptlang.org/docs/"],
  ["reactrouter", "reactrouter.com/en/main"],
  ["remix", "remix.run/"],
  ["terminal", "ss64.com/"],
  ["programmingadvices", "programmingadvices.com/"],
  ["programiz", "programiz.com/"],
  ["colorcode", "colorcode.io/"],
  ["gfg", "geeksforgeeks.org/"],
  ["w3s", "w3schools.com/"],
  ["codewars", "codewars.com/"],
  ["leetcode", "leetcode.com/problemset/"],
  ["cpp", "en.cppreference.com/"],
  ["udemy", "udemy.com/"],
  ["edclub", "edclub.com/"],
  ["oxford", "oxfordlearnersdictionaries.com/"],
  ["mega", "mega.nz/fm/KsEinTTJ/"],
  ["1337x", "1337x.to/"],
  ["dailymotion", "dailymotion.com/"],
  ["topcinema", "web5.topcinema.top/"],
  ["yt1s", "yt1s.com/en2aef/"],
  ["y2mate", "en.y2mate.is/v84/"],
  ["savefrom", "en1.savefrom.net/"],
  ["fontawesome", "fontawesome.com/"],
  ["ionicons", "ionic.io/ionicons/"],
  ["flaticon", "flaticon.com/"],
  ["iconscout", "iconscout.com/"],
  ["svgrepo", "svgrepo.com/"],
  ["alphacoders", "alphacoders.com/"],
  ["skrill", "skrill.com/"],
  ["paypal", "paypal.com/"],
  ["justpasteit", "justpaste.it/"],
  ["jumia", "jumia.com.eg/"],
  ["amazon", "amazon.eg/"],
];

/** @type {string[][]} */
const links = JSON.parse(window.localStorage.getItem("home-links")) || backup;

const createLink = (name, href, i) => {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const removeIcon = document.createElement("div");
  removeIcon.className = "remove-icon";
  removeIcon.title = "remove";
  removeIcon.dataset.index = i;

  const link = document.createElement("a");
  link.href = `https://www.${href}`;
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
(async () => {
  at_top_mode();
  const frag = document.createDocumentFragment();
  links.forEach(([name, href], i) => {
    frag.appendChild(createLink(name, href, i));
  });
  document.getElementById("cont").appendChild(frag);
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
  hrefIn.autofocus = true;
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
  const keyMap = new Map([
    ["KeyS", "https://google.com/"],
    ["KeyY", "https://youtube.com/"],
    ["KeyT", "https://translate.google.com/"],
    ["KeyF", "https://facebook.com/"],
    ["KeyX", "https://twitter.com/"],
    ["KeyG", "https://github.com/"],
    ["KeyM", "https://developer.mozilla.org/"],
    ["KeyD", "https://en.savefrom.net/"],
    ["KeyR", "https://roadmap.sh/"],
    ["KeyU", "https://udemy.com/"],
  ]);

  if (e.shiftKey && !e.ctrlKey && keyMap.has(e.code)) {
    window.open(keyMap.get(e.code), "_blank");
  }
});
