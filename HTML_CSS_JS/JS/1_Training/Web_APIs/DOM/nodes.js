
// adopt a node (transfer a node)
//------------------------------------------------------

// const n = 4;
// createTitle('HTML Nodes');
// let oldParent = createCountedDivs(n, 'grid', 'count');
// let newParent = createCountedDivs(n);
// let c = n;

// // adopt - move
// const adoptNode = (from, to) => {
//   to.firstElementChild.before(document.adoptNode(from.firstElementChild));
//   from.appendChild(document.adoptNode(to.lastElementChild));
// };

// // clone - remove
// const cloneNode = (from, to) => {
//   const fromTarget = from.firstElementChild;
//   const toTarget = to.lastElementChild;

//   // use this
//   // to.firstElementChild.before(document.importNode(fromTarget, true));
//   //from.appenChild(document.importNode(toTarget, true));
  
//   // or this
//   to.firstElementChild.before(fromTarget.cloneNode(true));
//   from.appendChild(toTarget.cloneNode(true));
  
//   fromTarget.remove();
//   toTarget.remove();
// };

// // append_prepend - move
// const appendNode = (from, to) => {
//   // append (node | string)
//   to.prepend(from.firstElementChild);
//   from.append(to.lastElementChild);
// };

// setInterval(() => {
//   // adoptNode(oldParent, newParent);
//   cloneNode(oldParent, newParent);
//   // appendNode(oldParent, newParent);
//   if (!--c) {
//     c = n;
//     [oldParent, newParent] = [newParent, oldParent];
//   }
// }, 1000);
//------------------------------------------------------


// insert a break <br> at point in a TextNode
//------------------------------------------------------

// const cache = [];
// const insertBreakAtPoint = (e) => {
//   let range, textNode, offset;

//   if (document.caretPositionFromPoint) {
//     // firefox
//     range = document.caretPositionFromPoint(e.clientX, e.clientY);
//     textNode = range.offsetNode;
//     offset = range.offset;
//   } else if (document.caretRangeFromPoint) {
//     // Use WebKit-proprietary fallback method
//     range = document.caretRangeFromPoint(e.clientX, e.clientY);
//     textNode = range.startContainer;
//     offset = range.startOffset;
//   } else {
//     // Neither method is supported, do nothing
//     return;
//   }

//   if (textNode?.nodeType === 3) { // make sure that the node type is TEXT_NODE
//     const replacement = textNode.splitText(offset);
//     if (replacement.length) {
//       const BR = document.createElement("br");
//       const TextNode = new Text('- ');
//       cache.push([BR, TextNode]);
//       replacement.before(BR);
//       BR.after(TextNode);
//     }
//   }
// };

// createTitle('Playing With TEXT_NODEs');
// const p = document.createElement('p');
// p.innerText = lorem;
// bodyAppend(p);

// p.addEventListener('click', insertBreakAtPoint);
// document.addEventListener('keydown', (e) => {
//   if (e.ctrlKey && e.key === 'z' && cache.length) {
//     const [lastBR, lastTextNode] = cache.pop();
//     lastBR.remove();
//     lastTextNode.remove();
//   }
// });

//------------------------------------------------------

// createAttribute()
//------------------------------------------------------

// const p1 = document.createElement('p');
// const attr = document.createAttribute('data-name');
// attr.value = 'MG';
// p1.textContent = lorem.slice(0, 56);
// p1.setAttributeNode(attr);
// bodyAppend(p1);
// log(attr.name);
// log(attr.value);
// log(attr.ownerElement);

// createComment()
//------------------------------------------------------

// document.body.insertBefore(document.createComment('This is A Comment'), document.body.firstChild);

//------------------------------------------------------

// createDocumentFragment()
//------------------------------------------------------

// const ul = document.createElement('ul');
// const browsers = [ 'firefox', 'chrome', 'edge', 'opera', 'safari' ];
// const docFrag = document.createDocumentFragment();

// browsers.forEach(browser => {
//   const li = document.createElement('li');
//   li.textContent = browser;
//   docFrag.appendChild(li);
// });

// log('Before Appending:', docFrag);
// ul.appendChild(docFrag);
// log('After Appending:', docFrag);

// bodyAppend(ul);

//------------------------------------------------------

// createNodeIterator()
//------------------------------------------------------

// const nodeIter = document.createNodeIterator(document.body, NodeFilter.SHOW_ALL, (node) => {
//   return node.nodeName === 'DIV' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
// });

// const nodes = [];
// let node;
// while((node = nodeIter.nextNode())) {
//   nodes.push(node.isConnected);
// }

// log(nodes);

//------------------------------------------------------


//------------------------------------------------------
//------------------------------------------------------