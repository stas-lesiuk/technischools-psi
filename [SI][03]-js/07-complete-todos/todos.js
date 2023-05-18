// Selektory
const todosList = document.querySelector(".todos-list");
const todosInput = document.querySelector("#todo-name");
const addTodoBtn = document.querySelector("#add-todo");

// Stan aplikacji
let todos = [
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

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn--danger");
  deleteBtn.innerText = "Usuń";

  const deleteTodo = (event) => {
    console.log("usuwam todo o indeksie " + index, "event to jest", event);
    event.stopPropagation();
    console.log(
      "zatrzymałem propagację eventu, TODO zostanie usunięte, ale żadne inne nie zostanie skreślone"
    );
    todos = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ];
    renderTodos();
  };

  deleteBtn.addEventListener("click", deleteTodo);

  todoItem.appendChild(todoName);
  todoItem.appendChild(deleteBtn);

  const handleTodoClick = (event) => {
    console.log(
      "zmieniam status todo o indeksie " + index,
      "event to jest",
      event
    );
    todos[index].completed = !todos[index].completed;
    renderTodos();
  };

  todoItem.addEventListener("click", handleTodoClick);

  return todoItem;
}

{
  /* <li class="todo-item">
            <span class="todo-name">Zadanie 1</span>
            <button type="button" class="btn btn--danger">Usuń</button>
          </li>
          <li class="todo-item todo-item--completed">
            <span class="todo-name">Zadanie 2</span>
            <button type="button" class="btn btn--danger">Usuń</button>
          </li> */
}
