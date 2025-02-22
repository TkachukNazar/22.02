function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top * 3 < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}
function showVisible() {
  for (let img of document.querySelectorAll(".hide")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

showVisible();
window.onscroll = showVisible;
