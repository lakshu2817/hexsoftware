const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodobtn = document.getElementById("addTodobtn");

// Function to add a new to-do item
const addTodo = () => {
    const newTodoText = newTodoInput.value.trim(); 

    if (newTodoText !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");

        deleteTodoBtn.addEventListener("click", function() {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);

        newTodoInput.value = ""; 
    } else {
        alert("Please enter a valid to-do item."); 
    }
}

addTodobtn.addEventListener("click", addTodo);

newTodoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});
