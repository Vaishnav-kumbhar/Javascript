const displayResult = document.querySelector("#value");
let count = 0;
const allBtns = document.querySelectorAll(".btn");
displayResult.style.color = "#4C6B20";

allBtns.forEach((btns) => {
  // adding eventListner in all buttons
  btns.addEventListener("click", (e) => {
    let classes = e.currentTarget.classList;
    if (classes.contains("inc")) {
      count++;
    } else if (classes.contains("dec")) {
      count--;
    } else {
      count = 0;
    }
    displayResult.textContent = count;
  });
});


