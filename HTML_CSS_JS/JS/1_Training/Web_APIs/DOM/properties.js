// some properties
{
  // characterSet property
  // log(document.characterSet);

  // childElementCount property
  // log(document.childElementCount);
  // log(document.body.childElementCount);

  // chldren property
  // log(document.body.children[0]);

  // compatMode property { BackCompat -> quirks-mode  || CSS1Compat -> standard-mode}
  // log(document.compatMode);
  // log(document.contentType);
  // log(document.currentScript);
  // log(document.doctype);
  // log(document.doctype);

  // document object
  // log(document.documentElement);
  // for (const ele of document.documentElement.children) {
  //   log(ele);
  // }

  // log(document.documentURI);
  // log(document.URL);
  // log(document.URL === document.documentURI);

  // for (let i = 0; i < 5; ++i) {
    // document.documentElement.appendChild(document.createElement('embed'));
    // document.documentElement.appendChild(document.createElement('img'));
    // const a = document.createElement('a');
    // a.href = 'www.google.com';
    // document.documentElement.appendChild(a);
  // }
  // log('embed count:', document.embeds.length);
  // log('image count:', document.images.length);
  // log('form count:', document.forms.length);
  // log('links count:', document.links.length);
  // log('links count:', document.scripts.length);
  // log('CSS fontface count:', document.fonts.size);

  // log(document.firstChild);
  // log(document.firstElementChild);
  // log(document.lastChild);
  // log(document.lastElementChild);

  // document.querySelector('.DOM').innerText = 'Document Object Model';
  // log(document.lastModified);
  // document.querySelector('.DOM').innerText = 'DOM';

  // log(document.scrollingElement === document.documentElement);

  // const styleSheet = document.styleSheets[0];
  // log(styleSheet);
  // setInterval(() => { // toggle the stylesheet effect every 3s
  //   if (styleSheet.disabled) {
  //     styleSheet.disabled = false; // enable the stylesheet effect
  //   } else {
  //     styleSheet.disabled = true; // disable the stylesheet effect
  //   }
  // }, 3000);
  // log(styleSheet.cssRules);
  // for (const rule of styleSheet.cssRules) log(rule.cssText);

  // log(document.timeline.currentTime);

  // log('------------ Cookies ------------');
  // document.cookie = `name=Mahmoud;age=26;expires=${new Date(2025, 0, 1).toDateString()}`;
  // document.cookie = `age=26;expires=${new Date(2025, 0, 1).toDateString()}`;
  // document.cookie = `gig=web-developer;expires=${new Date(2025, 0, 1).toDateString()}`;
  // log('---------------------------------');

  // log(document.defaultView === window);

  // log(document.fullscreenEnabled);

  // log(document.location.assign('https://www.youtube.com'));

  // log(document.readyState);

  // log(document.title);
  // document.title = 'Document Object Model';
  // log(document.title)

}