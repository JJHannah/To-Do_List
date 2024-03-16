const eventsForm = () => {
  const inputElement = document.querySelector(".inputElement");
  const btnSave = document.querySelector(".btnSave");

  btnSave.addEventListener("click", function (e) {
    e.preventDefault();

    const inputValue = inputElement.value;
    console.log(inputValue);

    inputElement.value = "";
  });
};

export default eventsForm;
