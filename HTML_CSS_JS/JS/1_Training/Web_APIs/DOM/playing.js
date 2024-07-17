// rainbow effect
(() => {
  const getNextRainbowColor = (() => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;
    const len = colors.length;
    return () => {
      if (++i >= len) i = 0;
      return colors[i];
    };
  })();

  const rain_bow = document.getElementById("rainbow");
  rain_bow.style.backgroundColor = "red";
  rain_bow.style.transition = "1s";
  setInterval(() => void (rain_bow.style.backgroundColor = getNextRainbowColor()), 2000);
})();

// activeElement property
(() => {
  const handler = (e) => {
    const activeOut = document.querySelector('.active-ele');
    const selTxt = document.querySelector('.selected-txt');
    const activeEle = document.activeElement;
    const selection = activeEle.value?.substring(activeEle.selectionStart, activeEle.selectionEnd);

    activeOut.innerText = activeEle.id;
    selTxt.innerText = selection ?? '';
  };

  document.getElementById('textarea1').addEventListener('mouseup', handler);
  document.getElementById('textarea2').addEventListener('mouseup', handler);
})();