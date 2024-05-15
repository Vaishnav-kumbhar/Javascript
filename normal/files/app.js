const links = document.querySelector(".links");
const bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
   links.classList.toggle("show-links");
});
