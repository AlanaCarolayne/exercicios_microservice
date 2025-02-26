// EXERCICIO 2 - TO DO LIST

document.querySelector(".formToDo").addEventListener("submit", (e) => {
  e.preventDefault();
  let itemInput = document.querySelector(".list-item");
  let item = itemInput.value.trim();
  if (item === "") return;
  addItemLista(item);
  itemInput.value = "";
});

const addItemLista = (item) => {
  let lista = document.querySelector(".lisToDo");
  let listItem = document.createElement("li");
  listItem.textContent = item;
  lista.appendChild(listItem);
  listItem.addEventListener("click", function () {
    lista.removeChild(listItem);
  });
};
