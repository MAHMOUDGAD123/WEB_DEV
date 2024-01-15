/* 'download' attribute Start */

const logoLink = document.getElementById("downloadLogo");

logoLink.addEventListener("click", () => {
  logoLink.style.backgroundColor = "orange";
  setTimeout(() => {
    logoLink.style.backgroundColor = "#fff";
  }, 1500);
});

/* 'download' attribute End */

/* 'spellcheck' attribute Start */

document.querySelectorAll("#spell-check").forEach((e) => {
  e.textContent = "mi nume es ma7moud gad und i'am viry saad";
});

/* 'spellcheck' attribute End */

/* 'data-*' attribute Start */

const data_att = document.getElementById("dataAtt");
// console.log(data_att.dataset);
for (const [k, v] of Object.entries(data_att.dataset)) {
  console.log(k, "->", v);
}

/* 'data-*' attribute End */