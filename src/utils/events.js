const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");
  const list = document.querySelector(".list");
  const todoList = localStorage.setItem('text') ? JSON.parse(localStorage.getItem('text') :[];
  
 btnSave.addEventListener("click", saveItem);
  
  function saveItems() {
    for (let i = 0; i < todoList.length; i++) {    
    const value = inputElement.value;
    const newLi = document.createElement("LI");
    newLi.innerText = value;
    list.append(new);
    todoList.push(value);
   inputElement.value = "";
  }
  }
  function reset(){
 
    
};
  function edit(){
        localStorage.clear();
  }

export default eventsForm;
