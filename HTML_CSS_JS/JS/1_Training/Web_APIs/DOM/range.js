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
// const p1 = document.createElement('p');
// const code = document.createElement('code');

// p1.innerHTML = `this is <u>Paragraph</u> in this funckin <u>Document</u>`;

// bodyAppend(p1);
// bodyAppend(code); 

// const r1 = new Range();
// r1.setStartBefore(p1.childNodes[1]);
// r1.setEndAfter(p1.childNodes[3]);
// code.textContent = r1.toString();

// ex3 - ranges comparison
// =====================================================================
// const rng1 = new Range();
// const rng2 = new Range();
// const c1 = createCountedDivs(3, 'grid', 'count');
// const c2 = createCountedDivs(3, 'grid', 'count');
// const c3 = createCountedDivs(3, 'grid', 'count');

// rng1.setStart(c1, 0);
// rng1.setEnd(c2, 2);

// rng2.setStart(c2, 0);
// rng2.setEnd(c3, 2);

// log(rng1.startContainer.childNodes[rng1.startOffset]);
// log(rng1.endContainer.childNodes[rng1.endOffset]);
// log(rng2.startContainer.childNodes[rng2.startOffset]);
// log(rng2.endContainer.childNodes[rng2.endOffset]);

// log('END_TO_END:', rng1.compareBoundaryPoints(Range.END_TO_END, rng2));
// log('END_TO_START:', rng1.compareBoundaryPoints(Range.END_TO_START, rng2));
// log('START_TO_END:', rng1.compareBoundaryPoints(Range.START_TO_END, rng2));
// log('START_TO_START:', rng1.compareBoundaryPoints(Range.START_TO_START, rng2));

// //                                         -1       0        1
// // this means -> is c1.childNodes[0] is (before | inside | after) the rng1 ?
// log(rng1.comparePoint(c1, 0));
// log(rng2.comparePoint(c1, 0));
// log(rng1.comparePoint(c3, 0));

// log(rng1.isPointInRange(c1, 1));
// log(rng1.isPointInRange(c3, 1));

// log(rng1.intersectsNode(c1));
// log(rng1.intersectsNode(c3));

// ex4 -- clone the content of a range
// =====================================================================
// const c1 = createCountedDivs(3, 'grid', 'count');
// const c2 = createCountedDivs(3, 'grid', 'count');
// const r2 = new Range();

// r2.setStart(c1, 0);
// r2.setEnd(c2, 1);
// bodyAppend(r2.cloneContents());

// ex5 -- extract & delete the content of the range
// =====================================================================
// const c1 = createCountedDivs(3, 'grid', 'count');
// const c2 = createCountedDivs(0, 'grid', 'count');
// const r3 = new Range();

// r3.setStart(c1, 0);
// r3.setEnd(c1, 2);

// log(r3);
// // r3.deleteContents(); // delete the nodes in the range from the dom tree
// const extracted = r3.extractContents(); // extract the range content
// c2.appendChild(extracted); // append them to c2
// log(r3); // r3 is empty now (collapsed)

// ex6 -- getBoundingClientRect & getClientRects
// =====================================================================
// const c1 = createCountedDivs(6, 'grid', 'count');
// const marker = document.createElement('div');
// document.styleSheets.item(0).insertRule(`.marker {
//   background-color: orange;
//   opacity: 0.35;
//   position: absolute;
// }`);
// marker.className = 'marker';
// bodyAppend(marker);

// const r4 = new Range();
// r4.setStart(c1, 0);
// r4.setEnd(c1, 3);

// const clientRect = r4.getBoundingClientRect();
// marker.style.top = `${clientRect.y}px`;
// marker.style.left = `${clientRect.x}px`;
// marker.style.width = `${clientRect.width}px`;
// marker.style.height = `${clientRect.height}px`;

// const clientRects = r4.getClientRects();
// const code = createCode();
// code.style.textAlign = 'center';

// for (let i = 0, len = clientRects.length; i < len; ++i) {
//   code.append('Width = ', Math.round(clientRects.item(i).width), ' -- ');
//   code.append('Height= ', Math.round(clientRects.item(i).height), ' -- ');
//   code.append('X = ', Math.round(clientRects.item(i).x), ' -- ');
//   code.append('Y = ', Math.round(clientRects.item(i).y), ' -- ');
//   code.append('Left = ', Math.round(clientRects.item(i).left), ' -- ');
//   code.append('Top = ', Math.round(clientRects.item(i).top), ' -- ');
//   code.append('Bottom = ', Math.round(clientRects.item(i).bottom), ' -- ');
//   code.append('Right = ', Math.round(clientRects.item(i).right));
//   if (i + 1 < len) code.appendChild(document.createElement('hr'));
// }

