const hourHand = document.getElementById("hour-hand");

const minuteHand = document.getElementById("minute-hand");

const secondHand = document.getElementById("second-hand");

function clock() {
  const date = new Date();
  const seconds = date.getSeconds() * 6;
  const minutes = date.getMinutes() * 6;
  const hours = date.getHours() * 30 + Math.round(minutes / 12); // it return exact hours
  console.log(hours);
  //   adding rotaion property to the hands elements
  secondHand.style.transform = "rotate(" + seconds + "deg)";
  minuteHand.style.transform = "rotate(" + minutes + "deg)";
  hourHand.style.transform = "rotate(" + hours + "deg)";
}
document.addEventListener("DOMContentLoaded", clock);
setInterval(clock, 1000);
