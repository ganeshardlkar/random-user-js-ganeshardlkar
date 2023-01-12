//your code here
const fullNameId = document.getElementById("fullNameId");
const imageId = document.getElementById("imageId");
const ageId = document.getElementById("ageId");
const emailId = document.getElementById("emailId");
const phoneId = document.getElementById("phoneId");
const result = document.getElementById("result");
const getUser = document.getElementById("getUser");

ageId.addEventListener("click", showAge);
emailId.addEventListener("click", showEmail);
phoneId.addEventListener("click", showPhone);
getUser.addEventListener("click", showUser);

let fullName = "";
let image = "";
let age = "";
let email = "";
let phone = "";
let user = {};

function showUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      user = data.results[0];
      fullName = data.results[0].name.first + " " + data.results[0].name.last;
      image = data.results[0].picture.large;
      console.log(image);
      console.log(fullName);
      console.log(user);
      imageId.innerHTML = `<img src="${data.results[0].picture.large}" alt="" />`;
      fullNameId.innerText = fullName;
    });
}
showUser();

function showAge() {
  age = user.dob.age;
  console.log(age);
  result.innerText = age;
}

function showEmail() {
  email = user.email;
  console.log(email);
  result.innerText = email;
}

function showPhone() {
  phone = user.phone;
  console.log(phone);
  result.innerText = phone;
}