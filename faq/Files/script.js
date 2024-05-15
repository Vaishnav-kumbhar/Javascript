const showAnsBtn = document.querySelectorAll(".fa-plus");
const minusBtn = document.querySelectorAll(".minusIcon");
const firstAns = document.querySelector(".ans");
const secondAns = document.querySelector(".ans1");
const thirdAns = document.querySelector(".ans2");

showAnsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("plus1")) {
      // adding toggle class
      firstAns.classList.toggle("toggleOne");
    } else if (e.currentTarget.classList.contains("plus2")) {
      // adding toggle class
      secondAns.classList.toggle("toggleTwo");
    } else if (e.currentTarget.classList.contains("plus3")) {
      // adding toggle class
      thirdAns.classList.toggle("toggleThree");
    }
  });
});
