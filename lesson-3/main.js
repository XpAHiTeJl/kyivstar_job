import "./style.scss";

const burgerMenu = document.getElementById("burger");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
