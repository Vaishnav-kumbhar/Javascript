/*
const log = () => {
  document.querySelector("h1").textContent = "Mac";
};

const change = setTimeout(log, 2000);
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(change);
  console.log("cleared");
});
*/

/*
// setinterval
let interval;
const date = (str) => {
  console.log(str, Date.now());
};

function set() {
  interval = setInterval(date, 1000, "hi");
}


document.getElementById("start").addEventListener("click", set);
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  console.log("cleared");
});
*/

let interval;
function randomColor() {
  const colors = "1234567890abcdef";
  let hex = "#";
  for (let i = 1; i <= 6; i++) {
    hex += colors[Math.floor(Math.random() * 16)];
  }
  return hex;
}

const changeColor = () => {
  document.querySelector("body").style.backgroundColor = randomColor();
};

const setColorInInterval = () => {
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }
};

document.getElementById("start").addEventListener("click", setColorInInterval);
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
