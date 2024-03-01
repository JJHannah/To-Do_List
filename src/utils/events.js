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
  let checkBoxID = "checkbox" + inputForm;
  const checkBox = document.createElement("INPUT");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", checkBoxID);
  newLi.append(checkBox);
  inputForm.value = "";
});

export default events;
