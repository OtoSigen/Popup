const modalOpen = document.getElementById("popup-open");
const modalClose = document.getElementById("content__popup-close");
const modal = document.getElementById("popup");

modalOpen.addEventListener("click", function () {
  modal.classList.add("show");
  modal.classList.remove("hide");
});

modalClose.addEventListener("click", function () {
  modal.classList.add("hide");
  modal.classList.remove("show");
});
