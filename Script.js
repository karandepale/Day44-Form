var form = document.getElementById("my-Form");

const username = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const url = document.getElementById("url");
const number = document.getElementById("number");
const search = document.getElementById("search");
const datetime = document.getElementById("datetime");
const salary = document.getElementById("range");

const textError = document.getElementsByClassName("usernameError")[0];
const passErr = document.getElementsByClassName("PasswordError")[0];
const EmailError = document.getElementsByClassName("EmailError")[0];
const urlError = document.getElementsByClassName("urlError")[0];
const phoneError = document.getElementsByClassName("phoneError")[0];
const searchError = document.getElementsByClassName("searchError")[0];
const dateTimeError = document.getElementsByClassName("dateTimeError")[0];
const salaryError = document.getElementsByClassName("RangeError")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let usernameRegex = new RegExp("^[a-zA-Z0-9_-]{3,16}$");
  let passRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()])[a-zA-Z\\d!@#$%^&*()]{8,}$"
  );
  let emailRegex = new RegExp(
    "^\\w+[.-]?\\w+@[a-zA-Z_-]+?(?:\\.[a-zA-Z]{2,})+$"
  );
  let urlRegex = new RegExp(/^https?:\/\/[^\s/$.?#].[^\s]*(\.com|\.in)/i);
  let phoneRegex = new RegExp(
    /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
  );

  let isValid = true; // Flag variable to track validation errors

  if (!usernameRegex.test(username.value)) {
    textError.innerHTML = "Invalid username";
    isValid = false;
  }

  if (!passRegex.test(password.value)) {
    passErr.innerHTML = "Incorrect Password";
    isValid = false;
  }

  if (!emailRegex.test(email.value)) {
    EmailError.innerHTML = "Invalid Email";
    isValid = false;
  }

  

  if (isValid) {
    textError.innerHTML = "";
    passErr.innerHTML = "";
    salaryError.innerHTML = "";
    EmailError.innerHTML = "";
    urlError.innerHTML = "";
    phoneError.innerHTML = "";
    searchError.innerHTML = "";
    alert("Form Data Saved...");
    form.reset();
  }
});
