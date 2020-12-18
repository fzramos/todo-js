// Declare globals
const form = document.querySelector('#task-form');
const input_box = document.getElementById('input_box');
const todo_list = document.querySelector('#todo-list');
const completed_list = document.querySelector('#completed-list');

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
    // console.log(input_box.value);


    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    // const editBtn = document.createElement('button');
    const deleBtn = document.createElement('button');

    removeBtn.innerHTML = 'Complete';

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


    // Adding input data to new todo list item
    newTodo.innerHTML = input_box.value;
    // adding bootstrap styling classes
    newTodo.classList.add('list-group-item', 'list-group-item-primary');
    removeBtn.classList.add('btn', 'btn-primary', 'complete');
    

    // Adding complete button to new todo list item
    newTodo.appendChild(removeBtn);
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
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
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