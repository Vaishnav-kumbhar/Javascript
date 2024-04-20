const persons = [
  {
    id: 1,
    name: "Anna Johnson",
    job: "HR",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: `Human resources (HR) is the division of a business responsible for
     finding, recruiting, screening, and training job applicants. HR
     departments also handle employee compensation, benefits, and
     terminations.`,
  },

  {
    id: 2,
    name: "Ruchi Khanna",
    job: "Intern",
    img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: `intern in microsoft is the division of a business responsible for
  finding, recruiting, screening, and training job applicants. HR
  departments also handle employee compensation, benefits, and
  terminations.
  `,
  },

  {
    id: 3,
    name: "Sam",
    job: "Senior Devloper",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: `Senior Devloper in microsoft is the division of a business responsible for
  finding, recruiting, screening, and training job applicants. HR
  departments also handle employee compensation, benefits, and
  terminations.`,
  },

  {
    id: 4,
    name: "Mark",
    job: "Full Stack Web Developer",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: `Full Stack Web Developer in microsoft is the division of a business responsible for
  finding, recruiting, screening, and training job applicants. HR
  departments also handle employee compensation, benefits, and
  terminations.`,
  },

  {
    id: 5,
    name: "Harry",
    job: "IT Consultant",
    img: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: ` IT Consultant in microsoft is the division of a business responsible for
  finding, recruiting, screening, and training job applicants. HR
  departments also handle employee compensation, benefits, and
  terminations.`,
  },
];

// select elements
const image = document.querySelector("#pics");
const name = document.querySelector("#name");
const job = document.querySelector(".job");
const aboutInfo = document.querySelector("#aboutInfo");

// select buttons
const prev = document.querySelector(".fa-less-than");
const next = document.querySelector(".fa-greater-than");
const randomBtn = document.querySelector("button");

// adding photos
let currentPicNo = 0;
function setIem(picNO) {
  const pics = persons[picNO];
  image.src = pics.img;
  name.textContent = pics.name;
  job.textContent = pics.job;
  aboutInfo.textContent = pics.info;
}

// adding event
window.document.addEventListener("DOMContentLoaded", function () {
  setIem(currentPicNo);
});

// prev Button
prev.addEventListener("click", () => {
  currentPicNo--;
  if (currentPicNo < 0) {
    currentPicNo = persons.length - 1;
  }
  setIem(currentPicNo);
});

// next button
next.addEventListener("click", () => {
  currentPicNo++;
  if (currentPicNo > persons.length - 1) {
    currentPicNo = 0;
  }
  setIem(currentPicNo);
});

// random button
randomBtn.addEventListener("click", () => {
  currentPicNo = Math.floor(Math.random() * persons.length);
  setIem(currentPicNo);
});
