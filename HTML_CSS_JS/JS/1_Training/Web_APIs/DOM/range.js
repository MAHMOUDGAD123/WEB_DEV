// Range interface

// ex1
// =====================================================================
// const cont1 = createCountedDivs(3, 'grid', 'count');
// const cont2 = createCountedDivs(3, 'grid', 'count');
// const cont3 = createCountedDivs(3, 'grid', 'count');
// const cont4 = createCountedDivs(3, 'grid', 'count');

// const r = new Range();

// // set the startContainer of the range & the startOffset
// r.setStart(cont1, 2);

// // set the endContainer of the range & the endOffset
// r.setEnd(cont4, 3);

// r.setStartBefore(cont1.childNodes[1]);
// r.setStartAfter(cont1.childNodes[1]);
// r.setEndBefore(cont1.childNodes[1]);
// r.setEndAfter(cont1.childNodes[1]);

// sets the Range to contain the Node and its contents.
// The parent Node of the start and end of the Range will be the same as the parent of the referenceNode.
// r.selectNode(cont1.firstChild);

// The parent Node of the start and end of the Range will be the reference node. The startOffset is 0,
// and the endOffset is the number of child Nodes or number of characters contained in the reference node.
// r.selectNodeContents(cont1);

// collapse the range
// r.collapse(); // collapse to the end -> (startOffset = endOffset & startContainer = endContainer)
// r.collapse(true); // collapse to the start -> (endOffset = startOffset & endContainer = startContainer)
// log('- Range Collapsed:', r.collapsed);

// log('-> startContainer:', r.startContainer);
// log('-> endContainer:', r.endContainer);
// log('-> commonAncestorContainer:', r.commonAncestorContainer);
// log('-> startNode:', r.startContainer.childNodes[r.startOffset]);
// log('-> endNode:', r.endContainer.childNodes[r.endOffset]);
// log('-> endNode (-1):', r.endContainer.childNodes[r.endOffset - 1]);
// log('-> startOffset:', r.startOffset);
// log('-> endOffset:', r.endOffset);

// ex2
// =====================================================================
const p1 = document.createElement('p');
const code = document.createElement('code');

p1.innerHTML = `this is <i>Paragraph</i> in this funckin <i>Document</i>`;

bodyAppend(p1);
bodyAppend(code);

const r1 = new Range();
r1.setStartBefore(p1.childNodes[1]);
r1.setEndAfter(p1.childNodes[3]);

log(r1);

code.textContent = r1.toString();