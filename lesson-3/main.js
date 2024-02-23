import "./style.scss";

const burgerMenu = document.getElementById("burger");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  menu.classList.toggle("active");
});
