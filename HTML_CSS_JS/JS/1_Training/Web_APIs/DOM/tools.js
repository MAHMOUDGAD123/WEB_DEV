const log = console.log;
const error = console.error;
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic, vero omnis dolores iusto eius. Excepturi fugit obcaecati nobis, rerum expedita neque. Ullam illo blanditiis deleniti! Cum amet cumque quae?';

/**
 * @param {HTMLElement} el element to appped
 */
const bodyAppend = (el) => {
  document.body.appendChild(el);
};

/**
 * @param {string} txt the text inside the title
 */
const createTitle = (txt = '') => {
  const t1 = document.createElement('code');
  t1.className = 'title';
  t1.textContent = txt;
  bodyAppend(t1);
};

/**
 * @param {string} txt the text inside the title
 * @param {HTMLElement} parent the text inside the title
 * @returns {HTMLParagraphElement}
 */
const createParagraph = (txt = '', parent = null, append = true) => {
  const p = document.createElement('p');
  p.textContent = txt;
  if (append) parent ? parent.appendChild(p) : bodyAppend(p);
  return p;
};

/**
 * @param {string} txt the text inside the title
 * @returns {HTMLElement}
 */
const createCode = (txt = '') => {
  const code = document.createElement('code');
  code.innerText = txt;
  bodyAppend(code);
  return code;
};

/**
 * @returns {HTMLElement}
 */
const BR = () => document.createElement('br');

/**
 * @param {number} n number of boxes
 * @param {string} boxType box-type (flex | grid)
 * @param {string} slotType slot-type (empty | count)
 * @param {boolean} append append to document.body or not
 * @returns {HTMLDivElement} the box
 */
const createCountedDivs = (n = 0, boxType = 'grid', slotType = 'empty', append = true) => {
  const parent = document.createElement('div');
  parent.className = `box ${boxType}`;

  for (let i = 0; i < n; ++i) {
    const slot = document.createElement('div');
    slot.className = `slot ${slotType}`;
    parent.appendChild(slot);
  }
  if (append) bodyAppend(parent);
  return parent;
};

/**
 * @param {*} addEventListeners to add eventLisiner to the elements or not
 * @returns {HTMLElement} the grandParent element
 */
const createGrandParentChild = (addEventListeners = true) => {
  const gParent = document.createElement('div');
  const parent = document.createElement('div');
  const child = document.createElement('div');

  gParent.appendChild(parent);
  parent.appendChild(child);

  gParent.style.backgroundColor = 'green';
  gParent.style.width = '350px';
  gParent.style.height = '350px';
  gParent.style.margin = '30px auto';
  gParent.style.padding = '10px';
  gParent.style.borderRadius = '10px';
  gParent.style.position = 'relative';
  gParent.appendChild(new Text('Grand Parent'));
  
  parent.style.backgroundColor = 'orange';
  parent.style.width = '70%';
  parent.style.height = '70%';
  gParent.style.alignSelf = 'center';
  parent.style.padding = '10px';
  parent.style.borderRadius = '10px';
  parent.className = 'cntr';
  parent.appendChild(new Text('Parent'));
  
  child.style.backgroundColor = 'purple';
  child.style.width = '50%';
  child.style.height = '50%';
  child.style.borderRadius = '10px';
  child.style.padding = '10px';
  child.className = 'cntr';
  child.appendChild(new Text('Child'));
  
  if (addEventListeners) {
    document.addEventListener('click', (e) => {
      log('Document Clicked');
    });

    document.body.addEventListener('click', (e) => {
      log('Body Clicked');
    });

    gParent.addEventListener('click', (e) => {
      log('Grand Parent Clicked');
    });

    parent.addEventListener('click', (e) => {
      log('Parent Clicked');
    });

    child.addEventListener('click', (e) => {
      log('Child Clicked');
    });
  }
  
  bodyAppend(gParent);
  return {
    gDad: gParent,
    dad: parent,
    son: child
  };
};


document.addEventListener('keydown', (e) => {
  if (e.key === 'c') console.clear();
});

/**
 * use it to get a random css rgb color
 * @returns {string}
 */
const randomCol = () => {
  const randomNum = () => Math.random() * 256;
  return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
};