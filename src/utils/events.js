const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = [];

  btnSave.addEventListener("click", save);
  function save() {
    const value = inputElement.value;
    const newLi = document.createElement("LI");
    newLi.innerText = value;
    list.append(newLi);

    todoList.push(value);
    console.log(todoList);

    inputElement.value = "";
  }
};

export default eventsForm;
