const sel = document.getSelection();
const div = document.createElement("div");
div.style.margin = "30px";
const p1 = createParagraph(
  "Paragraph 1 - This is a text Paragraph Element",
  div
);
const p2 = createParagraph(
  "Paragraph 2 - This is a text Paragraph Element",
  div
);
const p3 = createParagraph(
  "Paragraph 3 - This is a text Paragraph Element",
  div
);
const p4 = createParagraph(
  "Paragraph 4 - This is a text Paragraph Element",
  div
);
bodyAppend(div);
const code = createCode();
const deleteBtn = document.createElement("button");
document.body.insertBefore(deleteBtn, div);
deleteBtn.textContent = "Delete";

// logs all selection information
document.addEventListener("selectionchange", (e) => {
  code.innerText = `- anchorNode: ${sel.anchorNode.nodeValue}
- selected Text: "${sel.toString()}"
- anchorOffset: ${sel.anchorOffset}
- focusNode: ${sel.focusNode.nodeValue}
- focusOffset: ${sel.focusOffset}
- direction: ${sel?.direction ?? "Not Supported🥺"}
- isCollapsed: ${sel.isCollapsed}
- rangeCount: ${sel.rangeCount}
- type: ${sel.type}
  `;
});

// // delete the selected text from document
// // only delete the #TEXt_NODEs
// deleteBtn.addEventListener("click", (e) => {
//   let ok = true;
//   for (let i = 0; i < sel.rangeCount; ++i) {
//     const range = sel.getRangeAt(i);
//     const frag = range.cloneContents();
//     frag.childNodes.forEach((node) => {
//       if (node.nodeType !== Node.TEXT_NODE) ok = false;
//     });
//   }
//   if (ok) sel.deleteFromDocument();
//   else error("You can only delete #TEXT_NODEs");
// });

// ==============================================================

// ex1
// log the selected text
// const logs = createParagraph();
// logs.style.backgroundColor = "#555";
// document.addEventListener("selectionchange", (e) => {
//   const selectedTxt = sel.anchorNode.nodeValue?.slice(
//     sel.anchorOffset,
//     sel.focusOffset
//   );
//   if (selectedTxt?.length)
//     logs.innerText = `${selectedTxt} - {${selectedTxt.length}}`;
// });

// ex2
// select all text inside the clicked node
// div.addEventListener("click", (e) => {
//   const sel = document.getSelection();
//   const rng = new Range();
//   rng.selectNodeContents(sel.anchorNode);
//   sel.addRange(rng);
// });

// ex3
// add ranges to selection
// div.querySelectorAll("p").forEach((p, i) => {
//   // if (!((i + 1) % 2)) { // add even elements to selection
//   if (!(i % 2)) {
//     // add odd elements to selection
//     const rng = new Range();
//     rng.selectNode(p);
//     sel.addRange(rng);
//   }
// });

// ex4
// check if is there anything selected in an element
// document.addEventListener('selectionchange', () => {
//   log(sel.containsNode(p1, true));
//   log('-----------------');
// });

// ex5
// extend the selection -- change the offset to make change
// const offset = 3;
// const rng = new Range();
// rng.selectNodeContents(div);
// sel.addRange(rng);
// sel.extend(div, offset);

// ex6
// modify the selection with some cutomization
bodyAppend(BR());
bodyAppend(document.createElement("hr"));
bodyAppend(BR());

const forwardBtn = document.createElement("button");
const backwardBtn = document.createElement("button");
const wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.gap = "20px";
wrapper.style.width = "fit-content";
wrapper.style.margin = "auto";
wrapper.style.padding = "10px";

forwardBtn.innerHTML = "▶";
backwardBtn.innerHTML = "◀";
forwardBtn.title = "forward";
backwardBtn.title = "backward";
wrapper.appendChild(backwardBtn);
wrapper.appendChild(forwardBtn);
bodyAppend(wrapper);
const selections = document.createElement("select");
bodyAppend(selections);
selections.innerHTML = `
  <option value="character">Character</option>
  <option value="word">Word</option>
  <option value="sentence">Sentence</option>
  <option value="line">Line</option>
  <option value="paragraph">Paragraph</option>
  <option value="lineboundary">Line Boundary</option>
  <option value="sentenceboundary">Sentence Boundary</option>
  <option value="paragraphboundary">Paragraph Boundary</option>
  <option value="documentboundary">Document Boundary</option>
`;

const cloned = wrapper.cloneNode();
const par1 = createParagraph(lorem);
const par2 = createParagraph(lorem);

forwardBtn.addEventListener("click", (e) => {
  try {
    sel.modify("extend", "forward", selections.value);
  } catch (e) {
    error("NOT SUPPORTED");
  }
});
backwardBtn.addEventListener("click", (e) => {
  try {
    sel.modify("extend", "backward", selections.value);
  } catch (e) {
    error("NOT SUPPORTED");
  }
});
