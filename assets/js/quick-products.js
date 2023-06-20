// popular products
const popularProductsRow = document.getElementById("popular-product-row");
const popularProductScroller = document.getElementById("scroller-popular");
const lastPopularProduct = document.querySelector('[data-last-product="popular"]');

const leftScrollBtnPopular = document.querySelector('[data-product="popular-left"]');
const rightScrollBtnPopular = document.querySelector('[data-product="popular-right"]');

let popularProductRowRight;
let popularLastProductRight;
let popularScrollTimes;
let popularCurrentMarginLeft = 0;

// flash products
const flashProductsRow = document.getElementById("flash-product-row");
const flashProductScroller = document.getElementById("scroller-flash");
const lastFlashProduct = document.querySelector('[data-last-product="flash"]');

const leftScrollBtnFlash = document.querySelector('[data-product="flash-left"]');
const rightScrollBtnFlash = document.querySelector('[data-product="flash-right"]');

let flashProductRowRight;
let flashLastProductRight;
let flashScrollTimes;
let flashCurrentMarginLeft = 0;

/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */
function getCurrentPositions(rawName) {
  if (rawName == "popular") {
    popularProductRowRight = popularProductsRow.offsetLeft + popularProductsRow.offsetWidth;
    popularLastProductRight = lastPopularProduct.offsetLeft + lastPopularProduct.offsetWidth;

    let productRowTimes = popularLastProductRight / popularProductRowRight;
    popularScrollTimes = Math.floor(productRowTimes);
  }
  if (rawName == "flash") {
    flashProductRowRight = flashProductsRow.offsetLeft + flashProductsRow.offsetWidth;
    flashLastProductRight = lastFlashProduct.offsetLeft + lastFlashProduct.offsetWidth;

    let productRowTimes = flashLastProductRight / flashProductRowRight;
    flashScrollTimes = Math.floor(productRowTimes);
  }
}

getCurrentPositions("popular");
getCurrentPositions("flash");

window.addEventListener("resize", function () {
  getCurrentPositions("popular");
  getCurrentPositions("flash");
});

function changeMargin(scroller, margin) {
  scroller.style.marginLeft = margin + "%";
}

function leftScrollBtnFuncs(leftBtnType, rowName) {
  leftBtnType.addEventListener("click", function () {
    if (rowName == "popular") {
      if (popularCurrentMarginLeft < 0) {
        popularScrollTimes = popularScrollTimes + 1;
        popularCurrentMarginLeft = popularCurrentMarginLeft + 100;
        changeMargin(popularProductScroller, popularCurrentMarginLeft);
        if (popularCurrentMarginLeft == 0) {
          leftScrollBtnPopular.classList.remove("quick-products-scroll-btn-active");
          rightScrollBtnPopular.classList.add("quick-products-scroll-btn-active");
        }
      }
    }
    if (rowName == "flash") {
      if (flashCurrentMarginLeft < 0) {
        flashScrollTimes = flashScrollTimes + 1;
        flashCurrentMarginLeft = flashCurrentMarginLeft + 100;
        changeMargin(flashProductScroller, flashCurrentMarginLeft);
        if (flashCurrentMarginLeft == 0) {
          leftScrollBtnFlash.classList.remove("quick-products-scroll-btn-active");
          rightScrollBtnFlash.classList.add("quick-products-scroll-btn-active");
        }
      }
    }
  });
}

function rightScrollBtnFuncs(rightBtnType, rowName) {
  rightBtnType.addEventListener("click", function () {
    if (rowName == "popular") {
      if (popularScrollTimes > 0) {
        popularScrollTimes = popularScrollTimes - 1;
        popularCurrentMarginLeft = popularCurrentMarginLeft - 100;
        changeMargin(popularProductScroller, popularCurrentMarginLeft);
        if (popularScrollTimes == 0) {
          leftScrollBtnPopular.classList.add("quick-products-scroll-btn-active");
          rightScrollBtnPopular.classList.remove("quick-products-scroll-btn-active");
        }
      }
    }
    if (rowName == "flash") {
      if (flashScrollTimes > 0) {
        flashScrollTimes = flashScrollTimes - 1;
        flashCurrentMarginLeft = flashCurrentMarginLeft - 100;
        changeMargin(flashProductScroller, flashCurrentMarginLeft);
        if (flashScrollTimes == 0) {
          leftScrollBtnFlash.classList.add("quick-products-scroll-btn-active");
          rightScrollBtnFlash.classList.remove("quick-products-scroll-btn-active");
        }
      }
    }
  });
}

leftScrollBtnFuncs(leftScrollBtnPopular, "popular");
rightScrollBtnFuncs(rightScrollBtnPopular, "popular");
leftScrollBtnFuncs(leftScrollBtnFlash, "flash");
rightScrollBtnFuncs(rightScrollBtnFlash, "flash");
