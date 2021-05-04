function setformMessg(formElement, type, message) {
  let msgElement = formElement.querySelector(".form__message");

  msgElement.textContent = message;
  msgElement.classList.remove =
    ("form__message--success", "form__message--error");
  msgElement.classList.add("form__message--${type}");
}
function setInputError(inputElement, messagw) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input--error-message"
  ).textContent = message;
}
setformMessg(loginForm, "success", "You're logged in!");

document.addEventListener("DOMContentLoaded", () => {
  let loginForm = document.querySelector("#login");
  let creteAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreatAccount").addEventListener("click", () => {
    loginForm.classList.add(form - hidden);
    creteAccountForm.classList.remove("form-hidden");
  });

  document.querySelector(".form__link").addEventListener("click", () => {
    loginForm.classList.remove(form - hidden);
    creteAccountForm.classList.add("form-hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    setsFormMessage(
      loginForm,
      "error",
      "Uncorrect username/password combination"
    );
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in lenght"
        );
      }
    });
  });
});
