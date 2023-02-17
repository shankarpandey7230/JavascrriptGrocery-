// selecting items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");

const container = document.querySelector(".grocery-container");

const list = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editId = "";
// event listeners
//submit forms
form.addEventListener("submit", addItem);
// functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    console.log("add item");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    console.log("empty value");
  }
}
