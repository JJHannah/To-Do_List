const form = document.querySelector("#form");
const inputForm = document.querySelector(".inputText");
const list = document.querySelector(".list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("click me");
  const inputValue = inputForm.value;
  const newLi = document.createElement("LI");
  newLi.innerText = inputValue;
  list.append(newLi);
  inputForm.value = "";
});
