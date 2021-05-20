const sumbitBtn = document.querySelector("#button");

const errorIconName = document.querySelector("#icon1")
const errorTextName = document.querySelector("#errortext1")
const errorIconSurname = document.querySelector("#icon2")
const errorTextSurname = document.querySelector("#errortext2")
const errorIconEmail = document.querySelector("#icon3")
const errorTextEmail = document.querySelector("#errortext3")
const errorIconPassword = document.querySelector("#icon4")
const errorTextPassword = document.querySelector("#errortext4")
const errorBorderName = document.querySelector("#fname")
const errorBorderSurname = document.querySelector("#lname")
const errorBorderEmail = document.querySelector("#email")
const errorBorderPassword = document.querySelector("#password")



const checkName = () => {
    let inputName = document.forms["claim"]["fname"].value;
    if (inputName == "") {
        errorIconName.classList.remove("hidden");
        errorTextName.classList.remove("hidden");
        document.getElementById("fname").style.borderColor = "red";

    } else {
        errorIconName.classList.add("hidden");
        errorTextName.classList.add("hidden");
        document.getElementById("fname").style.borderColor = "lightgrey";
    }
  };

const checkSurame = () => {
    let inputSurname = document.forms["claim"]["lname"].value;
    if (inputSurname == "") {
        errorIconSurname.classList.remove("hidden");
        errorTextSurname.classList.remove("hidden");
        document.getElementById("lname").style.borderColor = "red";
    } else {
        errorIconSurname.classList.add("hidden");
        errorTextSurname.classList.add("hidden");
        document.getElementById("lname").style.borderColor = "lightgrey";
    }
  };

  const checkEmail = () => {
    let inputEmail = document.forms["claim"]["email"].value;
    if (inputEmail == "" || inputEmail.includes("@") == false) {
        errorIconEmail.classList.remove("hidden");
        errorTextEmail.classList.remove("hidden");
        document.getElementById("email").style.borderColor = "red";
    } else {
        errorIconEmail.classList.add("hidden");
        errorTextEmail.classList.add("hidden");
        document.getElementById("email").style.borderColor = "lightgrey";
    }
  };

const checkPassword = () => {
    let inputPassword = document.forms["claim"]["password"].value;
    if (inputPassword == "") {
        errorIconPassword.classList.remove("hidden");
        errorTextPassword.classList.remove("hidden");
        document.getElementById("password").style.borderColor = "red";
    } else {
        errorIconPassword.classList.add("hidden");
        errorTextPassword.classList.add("hidden");
        document.getElementById("password").style.borderColor = "lightgrey";
    }
  };

const allCheck = () => {
    checkName();
    checkEmail();
    checkSurame();
    checkPassword();
};

sumbitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    allCheck();
})