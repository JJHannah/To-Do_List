const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = JSON.parse(localStorage.getItem("list")) || [];

  addItems();
  //   btnSave.addEventListener("click", saveItems);
  btnSave.addEventListener("click", saveItems);

  function saveItems() {
    const value = inputElement.value;
    if (value) {
      todoList.push(value);
      localStorage.setItem("list", JSON.stringify(todoList));
      inputElement.value = "";
      addItems();
    }

    // inputElement.value = "";
  }

  function addItems() {
    list.textContent = "";
    todoList.forEach((item) => {
      const newLi = document.createElement("LI");
      newLi.textContent = item;
      list.appendChild(newLi);
    });
  }
};
export default eventsForm;
