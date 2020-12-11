// Declare globals
const form = document.querySelector('#task-form');
const input_box = document.getElementById('input_box');
const todo_list = document.querySelector('#todo-list');

// event listeners
form.addEventListener('submit', addTodo);
todo_list.addEventListener('click', items);
document.addEventListener('DOMContentLoaded', getTodos);

// functions
/**
 * Adds todo-list item using user form input text
 * @param {HTMLFormElement} event
 */
function addTodo(event) {
    event.preventDefault();
    // console.log(event);
    console.log(input_box.value);
    // event.target.reset();
    form.reset();
    
}

function items(event) {
    console.log('items')
}

function getTodos(event) {
    console.log('getTodos')
}


// const newItem = () => {
//     let task_text = document.getElementById('task_text').value;
//     // console.log(task_text);

//     // copying list item and appending new todo-task list item
//     // const list_item = document.createElement('')
//     let todo_item = document.getElementById('todo-list').firstElementChild;
//     console.log(todo_item)
//     let new_todo_item = todo_item.cloneNode(true);

//     new_todo_item.firstElementChild.innerHTML = task_text;
//     const task_form = document.getElementById('task-form').reset();

//     document.getElementById("todo-list").appendChild(new_todo_item);
// }

// const completedTask = (elmnt) => {
//     console.log(elmnt.parentElement);
//     // TODO will move the contents of this element to the Completed list !without! button
//     // completed-list = 
//     // completed-list.appendChild(todo-list)
//     const completed_template = document.getElementById('completed-template');
//     const new_complete = completed_template.cloneNode(true);
//     new_complete.appendChild(elmnt.parentElement.firstElementChild)
//     elmnt.parentElement.remove();
//     new_complete.hidden = 'false';
//     document.getElementById("completed-list").appendChild(new_complete);



// }