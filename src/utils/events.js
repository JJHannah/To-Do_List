const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const btnReset = document.querySelector(".btnReset");
  const list = document.querySelector(".list");
  let todoList = JSON.parse(localStorage.getItem("list")) || [];

  btnSave.addEventListener("click", saveItems);
  btnReset.addEventListener("click", reset);

  addItems();

  function saveItems() {
    const value = inputElement.value;
    if (value) {
      todoList.push(value);
      localStorage.setItem("list", JSON.stringify(todoList));
      inputElement.value = "";
      addItems();
    }
  }

  function addItems() {
    list.textContent = "";

    todoList.forEach((item) => {
      const newLi = document.createElement("LI");
      newLi.textContent = item;
      list.appendChild(newLi);
    });
  }

  function addCheckbox() {
    const inputValue = inputText.value;
    console.log(inputValue);
    todoList.push(inputValue);

    todoList.forEach((item) => {
      const id = `item${item}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.name = "item";

      list.appendChild(checkbox);
      list.appendChild(document.createTextNode(item));
    });
  }

  function reset() {
    todoList = [];
    localStorage.clear();
    list.textContent = " ";
  }
};
export default eventsForm;
