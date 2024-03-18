const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = [];

  renderTodo();
  function renderTodo() {
    let todoListHTML = "";
    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHTML += html;

      list.innerHTML = todoListHTML;
    }
  }
  btnSave.addEventListener("click", addTodo);
  function addTodo() {
    const inputValue = inputElement.value;
    todoList.push(inputValue);
    console.log(todoList);

    inputElement.value = "";

    renderTodo();
  }
};

export default eventsForm;
