const display = document.querySelector("#display");
const allBtns = document.querySelectorAll(".btn");
const eqaulBtn = document.querySelector("#equal");
const values = new Array();
Array.from(allBtns).forEach((b) => {
  b.addEventListener("click", () => {
    values.push(b.textContent);
    let newValues = values.join(" ");
    display.textContent = newValues;
    console.log(newValues);
    if (
      b.textContent === "AC" ||
      b.textContent === "C" ||
      b.textContent === "D"
    ) {
      display.textContent = 0;
    } else if (newValues.includes("AC")) {
        return "yes"
    }
    eqaulBtn.addEventListener("click", () => {
      display.textContent = eval(newValues);
    });
  });
});
