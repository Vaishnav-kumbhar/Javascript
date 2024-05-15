const simpleColor = document.querySelector("#simple-color");
const hexColor = document.querySelector("#Hex-color");
const showResult = document.querySelector("#result");
const colorChangeButton = document.querySelector("#btn");

// color genrate function
const colorGenrator = () => {
  let hex = "01234567890ABCDEF";
  let sym = "#";
  for (let i = 0; i < 6; i++) {
    sym += hex[Math.floor(Math.random() * 16)];
    showResult.textContent = `Backgraound Color : ${sym}`;
  }

  return sym;
};

// color change function
const colorChanger = () => {
  let backGround = document.querySelector("#box");
  backGround.style.backgroundColor = colorGenrator();
};

colorChangeButton.addEventListener("click", colorChanger);
