const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = [];

  btnSave.addEventListener("click", saveItems);

  function saveItems() {
    const value = inputElement.value;
    const newLi = document.createElement("LI");
    newLi.innerText = value;
    todoList.push(value);
    list.append(newLi);
    localStorage.setItem("list", JSON.stringify(todoList));
    inputElement.value = "";
  }
};
export default eventsForm;
