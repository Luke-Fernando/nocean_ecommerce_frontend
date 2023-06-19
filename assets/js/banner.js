const firstBanner = document.getElementById("banner-1");
const bannerIndicator1 = document.getElementById("banner-indicator-1");
const bannerIndicator2 = document.getElementById("banner-indicator-2");
const bannerIndicator3 = document.getElementById("banner-indicator-3");
const indicatorContainer = document.getElementById("banner-indicator-container");
const bannerPauseBtn = document.getElementById("banner-pause-btn-container");
const bannerPauseIcon = document.getElementById("banner-pause-icon");

function moveBanner(marginLeft, activeIndicator, otherIndiArr) {
  firstBanner.style.marginLeft = marginLeft;
  activeIndicator.classList.add("active-banner-indicator");
  otherIndiArr.forEach((element) => {
    element.classList.remove("active-banner-indicator");
  });
}

bannerIndicator1.addEventListener("click", function () {
  moveBanner("0", this, [bannerIndicator2, bannerIndicator3]);
  bannerNum = 1;
});

bannerIndicator2.addEventListener("click", function () {
  moveBanner("-100%", this, [bannerIndicator1, bannerIndicator3]);
  bannerNum = 2;
});

bannerIndicator3.addEventListener("click", function () {
  moveBanner("-200%", this, [bannerIndicator1, bannerIndicator2]);
  bannerNum = 0;
});
let bannerNum = 1;

function autoChangeBanner() {
  let marginLeft = ["0", "-100%", "-200%"];
  let currentIndicator = indicatorContainer.children[bannerNum];
  firstBanner.style.marginLeft = marginLeft[bannerNum];
  Array.from(indicatorContainer.children).forEach((indicator) => {
    if (indicator !== currentIndicator) {
      indicator.classList.remove("active-banner-indicator");
    } else {
      indicator.classList.add("active-banner-indicator");
    }
  });
  if (bannerNum < marginLeft.length - 1) {
    bannerNum++;
  } else {
    bannerNum = 0;
  }
}

let bannerSlidWorker = setInterval(autoChangeBanner, 3000);

bannerPauseBtn.addEventListener("click", function () {
  if (bannerSlidWorker > 0) {
    clearInterval(bannerSlidWorker);
    bannerPauseIcon.classList.toggle("fa-play");
    bannerPauseIcon.classList.toggle("fa-pause");
    bannerSlidWorker = 0;
  } else {
    bannerSlidWorker = setInterval(autoChangeBanner, 3000);
    bannerPauseIcon.classList.toggle("fa-play");
    bannerPauseIcon.classList.toggle("fa-pause");
  }
});
