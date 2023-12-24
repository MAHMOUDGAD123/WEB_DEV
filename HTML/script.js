// to check the mode of doctype "document type declaration"
if (document.compatMode === "CSS1Compat") console.log("Standard Mode 😊");
else console.log("Quirks Mode 😖");

// const docType = document.doctype;
// console.log(docType);

// reload the page every 7 secs
// setInterval(() => {
//   location.reload();
// }, 7000);

// dialog
const openDialog = document.getElementById("openBut");
const closeDialog = document.getElementById("closeBut");
const dialog = document.querySelector("dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
});
closeDialog.addEventListener("click", () => {
  dialog.close();
});


