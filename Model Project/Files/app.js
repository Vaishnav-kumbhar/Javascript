const modelBtn = document.querySelector(".modal-btn");
const box = document.querySelector(".box");
const showBox = document.querySelector(".model-overlay");
const closeBtn = document.querySelector(".cancel-image");
const body = document.querySelector(".bg");

modelBtn.addEventListener("click", function () {
  box.classList.add("hide-box");
  showBox.classList.add("show-box");
  //   add class to body
  body.classList.add("bg-color");
});

closeBtn.addEventListener("click", function () {
  // removing all classes
  showBox.classList.remove("show-box");
  box.classList.remove("hide-box");
  body.classList.remove("bg-color");
});
