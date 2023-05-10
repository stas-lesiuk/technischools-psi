// Selektory
const todosList = document.querySelector(".todos-list");
const todosInput = document.querySelector("#todo-name");

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
];

renderTodos();

function renderTodos() {
  todosList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = renderSingleTodo(todo, index);
    todosList.appendChild(todoItem);
  });
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
