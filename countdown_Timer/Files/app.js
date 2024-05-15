const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "February",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway-sentence");

const countContainer = document.querySelector("#counter-container");

const items = document.querySelectorAll("#counter-container h1");
// console.log(items);

let futureDate = new Date(2024, 4, 10, 12, 15, 0);

// extract dates year day time and minutes
let year = futureDate.getFullYear();
let date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends On ${day}, ${date} May ${year} at ${hours}:${minutes}pm`;

// future time in ms
const futureTime = futureDate.getTime();

// logical function
function getRemainingTime() {
  const currentTime = new Date().getTime();
  const todaysTime = futureDate - currentTime;

  // values in ms
  /* 
    1s = 1000ms
    1m = 60s
    1hr = 60m
    1d = 24hr
    */

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  //   calculate values
  let days = Math.floor(todaysTime / oneDay);
  let hours = Math.floor((todaysTime % oneDay) / oneHour);
  let minute = Math.floor((todaysTime % oneHour) / oneMinute);
  let second = Math.floor((todaysTime % oneMinute) / 1000);

  //   set values arrays

  function format(value) {
    if (value < 10) {
      return (value = `0${value}`);
    }
    return value;
  }
  const values = [days, hours, minute, second];
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (todaysTime < 0) {
    clearInterval(countdown);
    countContainer.innerHTML = `<h3> Sorry , Giveaway has been expired</h3>`;
  }
}


// setTime interval
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
