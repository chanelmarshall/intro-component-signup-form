// Checks for empty input fields and is called in
function checkInputField() {
  var input = document.querySelectorAll(".field");

  var field = [];

  for (var i = 0; i < input.length; i++) {
    field[i] = input[i].value;

    if (field[i] === '') {
      input[i].nextElementSibling.classList.add("show");
      input[i].nextElementSibling.nextElementSibling.classList.add("show");
      input[i].classList.add("red-border");
      email.setAttribute("value", "email@example.com");
      email.classList.add("email-error", "red-border");
      email.nextElementSibling.classList.add("show");
      email.nextElementSibling.nextElementSibling.classList.add("show");
    }
  }
  checkEmail();
}

// Check for valid email and is called in checkInputField function
function checkEmail() {
  var email = document.querySelector("#email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    console.log("Valid email");

  } else {
    email.setAttribute("value", "email@example.com");
    email.classList.add("email-error", "red-border");
    email.nextElementSibling.classList.add("show");
    email.nextElementSibling.nextElementSibling.classList.add("show");
  }
}

// Click Event
document.querySelector(".submit").addEventListener("click", checkInputField);
