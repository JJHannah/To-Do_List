const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const btnReset = document.querySelector(".btnReset");
  const list = document.querySelector(".list");
  const container = document.querySelector(".container");
  const colorInput = document.querySelector(".colorInput");
  let todoList = JSON.parse(localStorage.getItem("list")) || [];

  btnSave.addEventListener("click", saveItems);
  btnReset.addEventListener("click", reset);
  container.addEventListener("change", changeBackGround);

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
      deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      deleteButton.id = "deleteBtn";

      newLi.appendChild(newSpan);
      newSpan.textContent = item;
      newLi.appendChild(deleteButton);
      list.appendChild(newLi);

      deleteButton.addEventListener("click", () => {
        list.removeChild(newLi);
        todoList = [];
      });
    });
  }

  function reset() {
    todoList = [];
    localStorage.clear();
    list.textContent = " ";
  }

  function changeBackGround(e) {
    container.style.background = e.target.value;
  }
};
export default eventsForm;
