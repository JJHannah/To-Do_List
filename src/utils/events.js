const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const todoList = [];

  btnSave.addEventListener("click", addTodo);
  function addTodo() {
    const inputValue = inputElement.value;
    todoList.push(inputValue);
    console.log(todoList);

    inputElement.value = "";
  }
};

export default eventsForm;
