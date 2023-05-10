// Selektory
const todosList = document.querySelector(".todos-list");
const todosInput = document.querySelector("#todo-name");
const addTodoBtn = document.querySelector("#add-todo");

// Stan aplikacji
const todos = [
  {
    name: "Nakarm psa",
    completed: true,
  },
  {
    name: "Sprzedaj psa",
    completed: false,
  },
  {
    name: "Świętuj",
    completed: false,
  },
];

// Eventy - reagujemy na zdarzenia takie jak kliknięcie, wpisanie tekstu, itp.
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
  todos.push({
    name: todosInput.value,
    completed: false,
  });
  todosInput.value = "";
  renderTodos();
}

// UI - wyświetlamy dane na stronie
renderTodos();

function renderTodos() {
  todosList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todoItem = renderSingleTodo(todos[i], i);
    todosList.appendChild(todoItem);
  }
}

function renderSingleTodo(todo, index) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  if (todo.completed) {
    todoItem.classList.add("todo-item--completed");
  }

  const todoName = document.createElement("span");
  todoName.classList.add("todo-name");
  todoName.innerText = todo.name;

  todoItem.appendChild(todoName);

  return todoItem;
}
