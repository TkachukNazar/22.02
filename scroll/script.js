window.onload = function () {
  let imgDin = document.getElementById("din");
  let nav = document.querySelector("nav");
  let menuBottom = 100; // значення відступу від верхнього краю при прокрутці
  let up = document.getElementById("up");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      if (imgDin.classList.contains("fade")) {
        imgDin.classList.remove("fade");
      }
      up.style.opacity = 1;
    } else {
      up.style.opacity = 0;
    }
    if (document.documentElement.scrollTop < 300) {
      imgDin.src = "./images/wizard.png";
      imgDin.style.left = "400px";
      imgDin.style.bottom = "400px";
    }
    if (document.documentElement.scrollTop > 600) {
      imgDin.src = "./images/портер-21774949.jpg";
      imgDin.style.bottom = "40px";
    }
    if (document.documentElement.scrollTop < menuBottom) {
      // або document.body.scrollTop > menuBottom
      nav.classList.remove("fixed"); // видаляємо клас 'fixed'
    } else {
      nav.classList.add("fixed"); // додаємо клас 'fixed'
    }
  };

  let state = document.readyState;
  if (state == "interactive") {
    document.getElementById("wrap").style.visibility = "hidden";
    document.getElementById("loader").style.visibility = "visible";
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("loader").style.visibility = "hidden";
      document.getElementById("wrap").style.visibility = "visible";
    }, 1000);
  }
};
