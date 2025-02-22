let img_d = document.getElementById("din");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    if (img_d.classList.contains("hide")) img_d.classList.remove("hide");
  }
  if (document.documentElement.scrollTop < 300) {
    img_d.src = "images/fl1.jpg";
    img_d.style.right = 10 + "px";
    img_d.style.top = 10 + "px";
  }
  if (document.documentElement.scrollTop > 450) {
    img_d.src = "images/fl2.jpg";
    img_d.style.left = 300 + "px";
    img_d.style.top = 250 + "px";
  }
  if (document.documentElement.scrollTop > 700) {
    img_d.src = "images/wizard.png";
    img_d.style.left = 0 + "px";
    img_d.style.top = 10 + "px";
  }
  if (document.documentElement.scrollTop > 1100) {
    img_d.src = "images/wizard.png";
    img_d.style.top = 200 + "px";
  }
};
