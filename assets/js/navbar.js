const hamContainer = document.getElementById("hamburger-container");
const hamburgerBtn = document.getElementById("newtech-hamburger-icon");
const hamburgerBtnSecondary = document.getElementById("newtech-hamburger-icon-secondary");

hamContainer.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("opacity-0");
  hamburgerBtnSecondary.classList.toggle("opacity-0");
});
