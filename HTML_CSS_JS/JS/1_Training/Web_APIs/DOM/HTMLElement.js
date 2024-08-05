// const { gDad, dad, son } = createGrandParentChild();

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'q') {
//     son.hidden = son.hidden ? false : true;
//   }
// });

// - stop the events on this element
// son.inert = true;

// ---> offset____
// log(son.offsetParent);
// log(son.offsetWidth);
// log(son.offsetHeight);
// log(son.offsetTop);
// log(son.offsetLeft);

// ---> innerText vs outerText
// log(dad.innerText);
// log(dad.outerText);
// dad.innerText = 'dad';
// dad.outerText = 'dad';
// log(dad.innerText);
// log(dad.outerText);


// tabIndex
// -----------------------------------------------------
// const p1 = createParagraph('Paragraph 1');
// const p2 = createParagraph('Paragraph 2');
// const p3 = createParagraph('Paragraph 3');

// p1.tabIndex = 1;
// p2.tabIndex = 3;
// p3.tabIndex = 2;

// blur() | focus() | click()
// -----------------------------------------------------
// const warpper = document.createElement('div');
// warpper.className = 'flex-cntr';
// warpper.style.gap = '10px';
// warpper.style.margin = '30px';
// const chkBoxWrapper = warpper.cloneNode();
// const input = document.createElement('input');
// const chkBox = document.createElement('input');
// const inputLabel = document.createElement('label');
// const chkBoxLabel = document.createElement('label');
// warpper.className = 'flex-cntr';
// warpper.style.gap = '10px';
// input.type = 'text';
// chkBox.type = 'checkbox';
// input.id = input.name = 'input';
// chkBox.id = input.name = 'chkBox';
// inputLabel.htmlFor  = 'input';
// inputLabel.innerText = 'Input:';
// chkBoxLabel.htmlFor  = 'chkBox';
// chkBoxLabel.innerText = 'hover to check:';
// warpper.appendChild(inputLabel);
// warpper.appendChild(input);
// chkBoxWrapper.appendChild(chkBoxLabel);
// chkBoxWrapper.appendChild(chkBox);
// bodyAppend(warpper);
// bodyAppend(chkBoxWrapper);

// input.onmouseover = () => {
//   input.focus();
//   input.style.outline = '5px solid orange';
// };
// input.onmouseleave = () => {
//   input.blur();
//   input.style.outline = 'none';
// };

// chkBox.onmouseover = () => {
//   chkBox.click();
// };
// chkBox.onmouseleave = () => {
//   chkBox.click();
// };

// 
// -----------------------------------------------------