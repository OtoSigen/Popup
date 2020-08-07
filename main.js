const modalOpen = document.getElementById("popup-open");
const modalClose = document.getElementById("popup-close");
const modal = document.getElementById("popup");

modalOpen.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
});
