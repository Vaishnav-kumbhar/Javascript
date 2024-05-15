const links = document.querySelector(".links");
const socialIcons = document.querySelector(".social-icons");
const logoImage = document.querySelector(".logo");
const cancelImage = document.querySelector(".cancel-image");
const bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
  bar.style.display = "none";
  links.classList.add("show-links");
  socialIcons.classList.add("show-icons");
  logoImage.classList.add("show-image");
  cancelImage.classList.add("remove-image");
});

cancelImage.addEventListener("click", () => {
  bar.style.display = "block";
  links.classList.contains("show-links")
    ? links.classList.remove("show-links")
    : alert("classList not removed");

  socialIcons.classList.contains("show-icons")
    ? socialIcons.classList.remove("show-icons")
    : alert("classList not removed");

  logoImage.classList.contains("show-image")
    ? logoImage.classList.remove("show-image")
    : alert("classList not removed");

  cancelImage.classList.contains("remove-image")
    ? cancelImage.classList.remove("remove-image")
    : console.log("classList not removed");
});
