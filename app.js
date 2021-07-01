const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

let addTodo = (e) => {
    e.preventDefault();
    // **********************************Create div***************************
    const divTodo = document.createElement("div");
    divTodo.classList.add("todo");

    const divLi = document.createElement("li");

    divLi.innerText = todoInput.value;
    divLi.classList.add("todo-li");
    divTodo.appendChild(divLi);

    // ********************************Check Button*************************

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="far fa-check"></i>`;
    checkBtn.classList.add("check-btn");
    divTodo.appendChild(checkBtn);

    // *******************************Trash Button****************************

    const trashbtn = document.createElement("button");
    trashbtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashbtn.classList.add("trash-btn");
    divTodo.appendChild(trashbtn);

    // ****************************Combine all in one****************************

    todoList.appendChild(divTodo);
};

let deleteCheck = (e) => {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todoParent = item.parentElement;
        todoParent.classList.add("fall");
        todoParent.addEventListener("transitionend", () => {
            todoParent.remove();
        });
    }

    if (item.classList[0] === "check-btn") {
        const todoParent = item.parentElement;
        todoParent.classList.toggle("completed");
    }

}

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);