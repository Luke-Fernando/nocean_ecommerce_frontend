const menuExpandBtn = document.getElementById("admin-menu-expand-btn");
const collapseMenu = document.getElementById("admin-collapse-menu-container");

menuExpandBtn.addEventListener("click", function () {
  this.classList.toggle("admin-menu-expanded");
  this.querySelector("#admin-menu-expand-icon").classList.toggle("fa-arrow-left");
  this.querySelector("#admin-menu-expand-icon").classList.toggle("fa-arrow-right");
  collapseMenu.classList.toggle("admin-collapse-menu-expanded");
});
