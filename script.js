// Declare globals
const form = document.querySelector('#task-form');
const input_box = document.getElementById('input_box');
const todo_list = document.querySelector('#todo-list');
const completed_list = document.querySelector('#completed-list');

// event listeners
form.addEventListener('submit', addTodo);
// form.addEventListener('button', resetLocal);
todo_list.addEventListener('click', items);
document.addEventListener('DOMContentLoaded', getTodos);

// functions
/**
 * Adds todo-list item using user form input text
 * @param {HTMLFormElement} event
 */
function addTodo(event='recreate', text = '') {
    if (event != 'recreate') {
        event.preventDefault();
        // Adding input data to new todo list item
        text = input_box.value;
        // add new todo to local storage
        saveToLocal(text, 'todos');
    } 

    const newTodo = document.createElement('li');
    newTodo.innerHTML = text;
    const completeBtn = document.createElement('button');
    // const editBtn = document.createElement('button');
    const deleBtn = document.createElement('button');

    completeBtn.innerHTML = 'Complete';

    // edit button
    // editBtn.type='button';
    // editBtn.classList.add('btn', 'btn-primary', 'edit');
    // editBtn.setAttribute('data-bs-toggle', "modal");
    // editBtn.setAttribute('data-bs-target', "#staticBackdrop");
    // editBtn.innerHTML = "Edit"

    // delete button
    deleBtn.type='button';
    deleBtn.classList.add('btn', 'btn-danger', 'delete');
    deleBtn.innerHTML = "Delete"

    // adding bootstrap styling classes
    newTodo.classList.add('list-group-item', 'list-group-item-primary');
    completeBtn.classList.add('btn', 'btn-primary', 'complete');
    

    // Adding buttons to new todo list item
    newTodo.appendChild(completeBtn);
    newTodo.appendChild(deleBtn);
    // newTodo.appendChild(editBtn);
    // Adding new todo item to todo list
    todo_list.appendChild(newTodo);

    // event.target.reset();
    form.reset();
}

function items(event) {
    // console.log(event.target.classList.contains('complete'))
    if (event.target.classList.contains('complete')) {
        const newComplete = document.createElement('li');
        newComplete.innerHTML = event.target.parentElement.firstChild.textContent;
        // deleteChildren(newComplete);
        // TODO only text, not button
        newComplete.classList.add('list-group-item', 'list-group-item-secondary');
        completed_list.appendChild(newComplete);

        // remove from local storage todos list
        removeTodos(newComplete.innerHTML);
        // add to local storage complete list
        saveToLocal(newComplete.innerHTML, 'completes');

        event.target.parentElement.remove();
    } else if (event.target.classList.contains('delete')){
        // remove from local storage todos list
        removeTodos(event.target.parentElement.firstChild.textContent);

        event.target.parentElement.remove();
    }
}

function getTodos(event) {
    let todos;
    let completes;
    if (localStorage.getItem('todos') != null) {
        todos = JSON.parse(localStorage.getItem('todos'));
        // Recreate previous session todos
        todos.forEach(function (todo) {
            addTodo(event='recreate', text = todo)
        })
    }

    if (localStorage.getItem('completes') != null) {
        completes = JSON.parse(localStorage.getItem('completes'));
        // Recreate previous session completes
        completes.forEach(function (complete) {
            const newComplete = document.createElement('li');
            newComplete.innerHTML = complete;
            newComplete.classList.add('list-group-item', 'list-group-item-secondary');
            completed_list.appendChild(newComplete);    
        })
    }
}

function saveToLocal(item, listName) {
    let items;
    // if it doesn't exist
    if (localStorage.getItem(listName) === null) {
        items = [];
    } else {
        // parse it back into an array
        items = JSON.parse(localStorage.getItem(listName));
    }
    items.push(item);
    localStorage.setItem(listName, JSON.stringify(items)); // set back teh local storage
}

function removeTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todo.innerHTML); // li
    const todoIndex = todo.innerHTML;
    // console.log(todos.indexOf('soda'))
    todos.splice(todos.indexOf(todoIndex), 1); // second argumenrt is amount.
    localStorage.setItem('todos', JSON.stringify(todos)); // set back the local storage
}

document.getElementById("reset").addEventListener("click", function() {
    localStorage.clear();
    location.reload(); 
}); 