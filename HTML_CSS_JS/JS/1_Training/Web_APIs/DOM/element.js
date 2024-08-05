// const code = createCode('My Attributes:\n--------------\n\n');
// code.className = 'code';
// code.id = 'code';

// attributes
// // pint all atributes
// if (code.hasAttributes()) {
//   const attrs = code.attributes;
//   const len = code.attributes.length;
//   for (let i = 0; i < len; ++i) {
//     code.innerText += `# ${attrs[i].nodeName} -> ${attrs[i].nodeValue}\n`;
//   }
// }

// code.innerText += '\ndo i have a class attribute? =>';
// code.innerText += code.hasAttribute('class') ? ' Yes\n\n' : ' No\n\n';

// // classList | className
// code.innerText += 'My Class List:\n--------------\n\n';
// code.classList.add('element', 'HTMLElement');
// for (let i = 0; i < code.classList.length; ++i) {
//   code.innerText += `- ${code.classList.item(i)}\n`;
// }

// code.innerText += '\nMy Class Name:\n--------------\n\n';
// code.innerText += '"' + code.className + '"';

// ================================================================

// clientWidth | clientHeight | clientTop | clientLeft
// const ele = document.createElement('div');

// ele.style.boxSizing = 'content-box';
// ele.style.backgroundColor = '#999';
// ele.style.margin = '30px auto';
// ele.style.width = '300px';
// ele.style.height = '200px';
// ele.style.borderLeft = '20px solid red';
// ele.style.borderTop = '30px solid green';
// bodyAppend(ele);

// const code = createCode('client dimensions:\n------------------\n\n');
// code.innerText += `clientWidth = ${ele.clientWidth}px\n`;
// code.innerText += `clientHeight = ${ele.clientHeight}px\n`;
// code.innerText += `clientTop = ${ele.clientTop}px\n`;
// code.innerText += `clientLeft = ${ele.clientLeft}px\n`;

// code.innerText += '\n\noffset dimensions:\n------------------\n\n';
// code.innerText += `offsetWidth = ${ele.offsetWidth}px\n`;
// code.innerText += `offsetHeight = ${ele.offsetHeight}px\n`;
// code.innerText += `offsetTop = ${ele.offsetTop}px\n`;
// code.innerText += `offsetLeft = ${ele.offsetLeft}px\n`;
// log('offsetParent:', ele.offsetParent);

// ================================================================

// Free Palastine
// const flag = document.createElement('div');
// flag.style.backgroundColor = '#fff';
// flag.style.outline = '30px solid #aaa';
// flag.style.margin = '50px auto';
// flag.style.width = '400px';
// flag.style.height = '300px';
// flag.style.position = 'relative';
// flag.style.backgroundImage = `linear-gradient(#000 0% 33%, white 33% 66%, green 66%)`;
// const redTriangle = document.createElement('div');
// redTriangle.style.display = 'block';
// redTriangle.style.border = '150px solid red';
// redTriangle.style.borderBlockColor = 'transparent';
// redTriangle.style.borderRightColor = 'transparent';
// flag.appendChild(redTriangle);

// bodyAppend(flag);

// const free = document.createElement('div');
// free.innerText = 'Free Palestine';
// free.style.fontSize = '50px';
// free.style.textAlign = 'center';
// free.style.backgroundImage = 'linear-gradient(90deg, red 30%, white, green 70%)';
// free.style.backgroundClip = 'text';
// free.style.color = 'transparent';

// bodyAppend(free);

// ================================================================

// background effect
// const title = createParagraph('Hover on boxes to see numbers');
// title.style.backgroundColor = 'transparent';
// title.style.textAlign = 'center';

// const grid = createCountedDivs(21);
// grid.style.backgroundColor = '#000';
// grid.style.userSelect = 'none';

// document.addEventListener('mousemove', (e) => {
//   grid.style.setProperty('--x', e.clientX + 'px');
//   grid.style.setProperty('--y', e.clientY + 'px');
// });

// grid.childNodes.forEach((node, i) => {
//   node.style.padding = '4px';
//   node.style.backgroundRepeat = 'no-repeat';
//   node.style.backgroundAttachment = 'fixed';
//   node.style.transition = '300ms';

//   const ele = document.createElement('div');
  
//   node.appendChild(ele);

//   ele.style.width = '100%';
//   ele.style.height = '100%';
//   ele.style.backgroundColor = '#000';
//   ele.style.color = '#000';
//   ele.style.fontSize = '3rem';
//   ele.style.display = 'flex';
//   ele.style.justifyContent = 'center';
//   ele.style.alignItems = 'center';
//   ele.style.transition = '300ms';
//   ele.innerText = i + 1;
  
//   node.style.backgroundImage = `radial-gradient(
//     circle at var(--x) var(--y),
//     #777, transparent 15%
//     )`;

//   node.addEventListener('mouseover', (e) => {
//     ele.style.backgroundColor = 'transparent';
//   });

//   node.addEventListener('mouseleave', (e) => {
//     ele.style.backgroundColor = '#000';
//   });
// });

// ================================================================

// scrollWidth | scrollHeight | scrolltop | scrollLeft
// const scroller = document.createElement('div');
// scroller.style.backgroundColor = '#999';
// scroller.style.margin = '30px auto';
// scroller.style.width = '300px';
// scroller.style.height = '300px';
// scroller.style.border = '10px solid red';
// scroller.style.scrollbarWidth = 'auto';
// scroller.style.overflow = 'auto';

// const child = document.createElement('div');
// child.style.width = '1000px';
// child.style.height = '1000px';
// child.style.margin = 'auto';
// child.style.backgroundColor = 'orange';

// scroller.appendChild(child);
// bodyAppend(scroller);

// const code = createCode('client dimensions:\n------------------\n\n');

// scroller.addEventListener('scroll', e => {
//   code.innerText = `scrollWidth = ${scroller.scrollWidth}px\n`;
//   code.innerText += `scrollHeight = ${scroller.scrollHeight}px\n`;
//   code.innerText += `scrollTop = ${scroller.scrollTop}px\n`;
//   code.innerText += `scrollLeft = ${scroller.scrollLeft}px\n`;
//   if (Math.abs(scroller.scrollHeight - scroller.scrollTop) === scroller.clientHeight) {
//     code.innerText += `vertical scroll end ⬇️\n`;
//   }
//   if (Math.abs(scroller.scrollWidth - scroller.scrollLeft) === scroller.clientWidth) {
//     code.innerText += `horizontal scroll end ➡️\n`;
//   }
// });

// ================================================================

// const p = createParagraph('This Is Line1');
// p.innerText += '\nThis Is Line2';
// p.innerText += '\nThis Is Line3';

// log(p.getBoundingClientRect());
// log(p.getClientRects());

// ================================================================

// const cont = createCountedDivs(4, 'grid', 'count');
// const ele = document.createElement('div');
// ele.className = 'slot parasite';
// ele.style.backgroundColor = 'orange';
// ele.style.color = 'red';
// ele.style.fontSize = '2rem';
// ele.innerText = 'Parasite';

// cont.insertAdjacentElement('beforebegin', ele);
// cont.insertAdjacentElement('afterbegin', ele);
// cont.insertAdjacentElement('beforeend', ele);
// cont.insertAdjacentElement('afterend', ele);

// log(ele.matches('.parasite') ? 'yes, it is' : "no, it isn't");

// ele.removeAttribute('class');
// ele.removeAttributeNode(ele.getAttributeNode('class'));

// ================================================================

// const wrapper = document.createElement('div');
// const goto = document.createElement('button');
// wrapper.appendChild(goto);
// goto.innerText = 'Random Jump';

// for (let i = 0; i < 30; ++i) {
//   createParagraph(`Paragraph ${i + 1}`, wrapper);
// }

// bodyAppend(wrapper);

// let previous = 0;

// goto.onclick = () => {
//   wrapper.children[previous].style.outline = 'none';
//   const idx = (Math.random() * 31) >>> 0;
//   const target = wrapper.children[idx];
//   target.scrollIntoView();
//   target.style.outline = '3px solid orange';
//   previous = idx;
// };

// ================================================================

// const ele = createParagraph('Paragraph');
// ele.style.userSelect = 'none';
// ele.style.textAlign = 'center';
// ele.style.fontSize = '50px';
// ele.style.scale = '0.5';
// ele.style.transition = '1s';

// ele.addEventListener('wheel', (e) => {
//   log('wheel rotated');
// });

// ele.addEventListener('auxclick', (e) => {
//   e.preventDefault();
//   ele.style.color = randomCol();
// });

// ele.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// });

// ele.addEventListener('click', (e) => {
//   ele.style.backgroundColor = randomCol();
// });

// ele.addEventListener('dblclick', (e) => {
//   ele.style.scale = ele.style.scale === '1' ? '0.5' : '1';
// });