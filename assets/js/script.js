var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];



// This function is used to render the todos to the page. 
//It will loop over the todos array and create an li element for each todo. 
//It will also create a button element for each todo. The button will be used to remove the todo from the array. 
//The li element will be appended to the ul element with the id of todo-list. 
//The todoCountSpan will be updated with the length of the todos array.
function renderTodos() {
 
  todoList.innerHTML = "todo-lists from ul element";
  todoCountSpan.textContent = todos.length;
  

  // The purpose of the following for loop is to loop over the todos array and create an li element for each todo.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);

    todoList.appendChild(li);
  }
}




// The purpose of this function is to initialize the application.
function init() {

  // The purpose of the following line of code is to parse the todos from the local storage and store them in the todos array.
  console.log(typeof localStorage.getItem("todos")+ "  "+ localStorage.getItem("todos"));

  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  //storedTodos is an array of strings
  console.log(storedTodos);

  // The purpose of the following if statement is to check if the storedTodos is not equal to null.
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // The purpose of the following line of code is to call the renderTodos function to render the todos
  renderTodos();
}



function storeTodos() {

  // The purpose of the following line of code is to store the todos array in the local storage but we have to convert it to string.
  localStorage.setItem("todos", JSON.stringify(todos));
}





// The purpose of the following line of code is to add an event listener to the form element.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  

  // The purpose of the following if statement is to check if the todoText is empty.
  // If it is empty, the function will return and not add the todo to the todos array.
  if (todoText === "") {
    return;
  }

 // The purpose of the following lines of code is to add the todoText to the todos array and clear the input field. 
  todos.push(todoText);
  todoInput.value = "";
 

  // The storeTodos function will be called to store the todos array in the local storage.
  storeTodos();
  renderTodos();
});





// The purpose of the following line of code is to add an event listener to the todoList element.
todoList.addEventListener("click", function(event) {


  var element = event.target;

  //  The purpose of the following if statement is to check if the element that was clicked is a button.
  if (element.matches("button") === true) {
    //  The purpose of the following line of code is to get the index of the todo that was clicked.
    var index = element.parentElement.getAttribute("data-index");
    //  The purpose of the following line of code is to remove the todo from the todos array.
    console.log(index);
   
    alert(todos[index] + " was removed from the list");
    todos.splice(index, 1);

    // The storeTodos function will be called to store the todos array in the local storage.
    storeTodos();
    renderTodos();
  }
});

init();
