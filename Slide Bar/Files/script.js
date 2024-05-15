const images = [
  {
    imgNO: 0,
    src: "../Assets/img-1.jpeg",
  },
  {
    imgNO: 1,
    src: "../Assets/img-2.jpeg",
  },

  {
    imgNO: 2,
    src: "../Assets/photo-1715091362978-363c843c1045.avif",
  },

  {
    imgNO: 3,
    src: "../Assets/photo-1715128083376-06b7eca1b981.avif",
  },
];

const image = document.querySelector(".img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const number = document.querySelector("h1");
let index = 1;

nextBtn.addEventListener("click", () => {
  prevBtn.style.visibility = "visible";
  image.src = images[index].src;
  number.textContent = index + 1;
  index++;
  setIndex();
});

prevBtn.addEventListener("click", () => {
  number.textContent = index--;
  image.src = images[index].src;
  setIndex();
});

function setIndex() {
  if (index === 0) {
    prevBtn.style.visibility = "hidden";
  } else if (index < 0 || index >= 5) {
    image.src = images[0].src;
  }
}
