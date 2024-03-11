const eventsForm = () => {
  const form = document.querySelector("#form");
  const inputText = document.querySelector(".inputText");
  const ullist = document.querySelector(".list");

  form.addEventListener("click", function (e) {
    e.preventDefault();

    const inputValue = inputText.value;

    const newLi = document.createElement("LI");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLi.appendChild(checkBox);

    const textNode = document.createTextNode(inputValue);
    ullist.appendChild(textNode);

    ullist.appendChild(newLi);

    inputText.value = "";
  });
};

// eventsForm();
export default eventsForm;
