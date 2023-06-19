const imgSlector = document.querySelectorAll("[data-selector]");
const mainImg = document.querySelectorAll("[data-img]");
let currentImgNum = 1;
let currentImg;

function selectImg() {
  imgSlector.forEach((selector) => {
    selector.addEventListener("click", function () {
      imgSlector.forEach((item) => {
        item.classList.remove("active-selector");
      });
      selector.classList.add("active-selector");
      currentImgNum = selector.getAttribute("data-selector");
      mainImg.forEach((img) => {
        img.classList.remove("displayed-img");
      });
      currentImg = document.querySelector(`[data-img="${currentImgNum}"]`);
      currentImg.classList.add("displayed-img");
    });
  });
}

selectImg();
