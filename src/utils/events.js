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
      const newSpan = document.createElement("SPAN");
      const deleteButton = document.createElement("BUTTON");
      deleteButton.textContent = "delete";
      // newLi.textContent = item;
      // list.appendChild(newLi);

      newLi.appendChild(newSpan);
      newSpan.textContent = item;
      newLi.appendChild(deleteButton);
      list.appendChild(newLi);
    });
  }

  function reset() {
    todoList = [];
    localStorage.clear();
    list.textContent = " ";
  }

  list.addEventListener("click", (e) => {
    e.target.nodeName === "LI" && e.target.remove();
  });
};
export default eventsForm;
