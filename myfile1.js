var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


function addTodo(event) {

    event.preventDefault();

    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    var newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);



    var completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check" ></i >';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    var trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fas fa-trash" ></i >';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(e) {
    var item = e.target;
    if (item.classList[0] === "trash-btn") {
        var todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function () {
            todo.remove();

        });

    }
    if (item.classList[0] === "complete-btn") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
function filterTodo(e) {
    var todos = [...todoList.children];
    todos.forEach(function (todo, index) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

        }

    });
}
