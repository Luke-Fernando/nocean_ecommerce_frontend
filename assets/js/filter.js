const filterBar = document.querySelectorAll("[data-filter]");
const layoutBtn = document.querySelectorAll("[data-layout]");
const productFavouriteBtn = document.querySelectorAll('[data-product-favourite="btn"]');
let activeLayout = "list"; //grid

function toggleOptions() {
  filterBar.forEach((element) => {
    element.addEventListener("click", function () {
      console.log("clicked");
      this.parentNode.querySelector("#filter-items").classList.toggle("toggle-options");
      this.parentNode.querySelector(".filter-arrow").classList.toggle("fa-chevron-up");
      this.parentNode.querySelector(".filter-arrow").classList.toggle("fa-chevron-down");
    });
  });
}

toggleOptions();

function changeActiveLayoutBtn() {
  layoutBtn.forEach((element) => {
    element.addEventListener("click", function () {
      layoutBtn.forEach((ele) => {
        ele.classList.toggle("active-layout");
      });
      activeLayout = element.getAttribute("data-layout");
      changeLayout();
      console.log(activeLayout);
    });
  });
}

changeActiveLayoutBtn();

function setProductFavourite() {
  productFavouriteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log("Clicked");
      this.querySelector('[data-product-favourite="icon"]').classList.toggle("fa-regular");
      this.querySelector('[data-product-favourite="icon"]').classList.toggle("fa-solid");
      this.classList.toggle("product-favourite-active");
    });
  });
}

setProductFavourite();

const productContainer = document.querySelectorAll('[data-product="main"]');

function changeLayout() {
  productContainer.forEach((product) => {
    let productSubContainer = product.querySelector('[data-product="sub"]');
    let productImgContainer = product.querySelector('[data-product="image"]');
    let productDetailsContainer = product.querySelector('[data-product="details"]');

    product.classList.toggle("col-12");
    product.classList.toggle("col-6");
    product.classList.toggle("col-md-4");
    product.classList.toggle("col-xxl-3");
    product.classList.toggle("layout-grid");
    productSubContainer.classList.toggle("flex-column");
    productSubContainer.classList.toggle("flex-row");
    productImgContainer.classList.toggle("col-12");
    productImgContainer.classList.toggle("col-3");
    productDetailsContainer.classList.toggle("col-12");
    productDetailsContainer.classList.toggle("col-9");
  });
}

const mainFilterContainer = document.getElementById("main-filters-container");
const expandFilterBtn = document.getElementById("expand-filter-btn");
const expandFilterIcon = document.getElementById("expand-filter-icon");

function expandFilter() {
  expandFilterBtn.addEventListener("click", function () {
    expandFilterIcon.classList.toggle("fa-square-caret-left");
    expandFilterIcon.classList.toggle("fa-square-caret-right");
    mainFilterContainer.classList.toggle("main-filter-show");
  });
}

expandFilter();
