const setCoordinates = (e) => {
  testArea.innerText = `
    Offset X/Y: ${e.offsetX}, ${e.offsetY}
    Viewport X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Screen X/Y: ${e.screenX}, ${e.screenY}
  `;
};

testArea.addEventListener("mousemove", setCoordinates);
testArea.addEventListener("mouseenter", setCoordinates);
testArea.addEventListener("mouseleave", setCoordinates);
