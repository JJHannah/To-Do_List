const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = [];

  for (let i = 0; i < todoList.length; i++) {
     btnSave.addEventListener("click", save);
  function save() {
    const value = inputElement.value;
    const newLi = document.createElement("LI");
    newLi.innerText = value;
    list.append(newLi);

    todoList.push(value);


    inputElement.value = "";
  }

 
  }
};

export default eventsForm;
