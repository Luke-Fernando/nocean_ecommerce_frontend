const chbxLabel = document.querySelectorAll('[data-chbx="label"]');

chbxLabel.forEach((item) => {
  item.addEventListener("click", function () {
    let chbxInputCus = this.querySelector('[data-chbx="custom-input"]');
    chbxInputCus.classList.toggle("active-chbx");
    let chbxInputIcon = chbxInputCus.querySelector('[data-chbx="custom-icon"]');
    chbxInputIcon.classList.toggle("active-chbx-icon");
  });
});
