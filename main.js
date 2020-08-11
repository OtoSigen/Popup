const popup = () => {
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
};

popup();

const inputValidate = () => {
  const inputName = document.getElementById("input-name");
  const inputPhone = document.getElementById("input-phone");
  const inputBtn = document.getElementById("form-btn");

  inputName.addEventListener("keyup", () => {
    const inputName = document.getElementById("input-name");
    const inputBtn = document.getElementById("form-btn");
    if (inputName.value.length > 5) {
      inputBtn.removeAttribute("disabled");
      inputBtn.style.backgroundColor = "red";
      console.log("checked");
    }
  });
};
inputValidate();
