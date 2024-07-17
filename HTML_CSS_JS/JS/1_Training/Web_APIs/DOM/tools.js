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
 * @returns {HTMLParagraphElement}
 */
const createParagraph = (txt = '') => {
  const p = document.createElement('p');
  p.textContent = txt;
  bodyAppend(p);
  return p;
};

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
  if(append) bodyAppend(parent);
  return parent;
};
