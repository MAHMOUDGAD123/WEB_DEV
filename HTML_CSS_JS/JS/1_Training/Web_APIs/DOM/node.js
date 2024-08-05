const ele = document.createElement('div');

for (let i = 0; i < 5; ++i) {
  createParagraph(`Paragraph ${i + 1}`, ele);
}

bodyAppend(ele);

// log(ele.ownerDocument === document);
// log(ele.parentElement === document.body);

// log(ele.lastChild.compareDocumentPosition(ele.firstChild));

// log(ele.contains(ele.firstChild));

// log(ele.getRootNode());

// log(ele.hasChildNodes());

// ele.insertBefore(createCode('code'), ele.firstChild);

// log(ele.firstChild.isEqualNode(ele.lastChild));
// ele.lastChild.innerText = 'Paragraph 1';
// log(ele.firstChild.isEqualNode(ele.lastChild));

// both the same -- compares the node's reference
// log(ele.firstChild.isSameNode(ele.firstChild));
// log(ele.firstChild === ele.firstChild);

// ele.removeChild(ele.firstChild);

const parasite = createParagraph('Parasite', null, false);
parasite.style.backgroundColor = 'orange';
parasite.style.color = 'red';
parasite.style.textAlign = 'center';

setTimeout(() => {
  ele.replaceChild(parasite, ele.firstChild);
}, 3000);

// ================================================================

// const p = createParagraph();
// p.append('line 1');
// p.append('line 2');
// p.append('line 3');

// log('- Before Nomalization:');
// for (let node = p.firstChild; node; node = node.nextSibling) {
//   log(`${node.nodeName}: ${node.nodeValue}`);
// }

// p.normalize()

// log('- After Nomalization:');
// for (let node = p.firstChild; node; node = node.nextSibling) {
//   log(`${node.nodeName}: ${node.nodeValue}`);
// }

log();