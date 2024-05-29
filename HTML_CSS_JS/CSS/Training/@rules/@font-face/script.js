const font_face = new FontFace(
  "cairo",
  "url(./fonts/Cairo/Cairo-VariableFont_slnt_wght.woff2), \
  url(./fonts/Cairo/Cairo-VariableFont_slnt_wght.woff), \
  url(./fonts/Cairo/Cairo-VariableFont_slnt_wght.ttf)"
);

document.fonts.add(font_face);

font_face
  .load()
  .then((font) => {
    console.log(font.status);
    const element = document.getElementById("font-face-api");
    element.style.font = "20px cairo";
    element.style.fontWeight = "100";
  })
  .catch((er) => {
    console.log(font_face.status);
    console.error("Error: ", er.message);
  });
