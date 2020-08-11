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

  const checkedForm = () => {
    if (inputName.value.length > 4) {
      inputBtn.removeAttribute("disabled");
      inputBtn.style.backgroundColor = "#00ace4";
      inputName.style.border = "none";
    } else {
      inputBtn.setAttribute("disabled", "disabled");
      inputBtn.style.backgroundColor = "rgb(191, 192, 193)";
      inputName.style.border = "1px solid red";
    }
    if (inputPhone.value.length > 7) {
      inputBtn.removeAttribute("disabled");
      inputBtn.style.backgroundColor = "#00ace4";
      inputPhone.style.border = "none";
    } else {
      inputBtn.setAttribute("disabled", "disabled");
      inputBtn.style.backgroundColor = "rgb(191, 192, 193)";
      inputPhone.style.border = "1px solid red";
    }
  };

  inputName.addEventListener("keyup", checkedForm);
  inputPhone.addEventListener("keyup", checkedForm);
};

inputValidate();
