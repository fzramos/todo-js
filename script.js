const newItem = () => {
    let task_text = document.getElementById('task_text').value;
    // console.log(task_text);

    // copying list item and appending new todo-task list item
    // const list_item = document.createElement('')
    let todo_item = document.getElementById('todo-list').firstElementChild;
    console.log(todo_item)
    let new_todo_item = todo_item.cloneNode(true);

    new_todo_item.firstElementChild.innerHTML = task_text;
    const task_form = document.getElementById('task-form').reset();

    document.getElementById("todo-list").appendChild(new_todo_item);
}

const completedTask = (elmnt) => {
    console.log(elmnt.parentElement);
    // TODO will move the contents of this element to the Completed list !without! button
    // completed-list = 
    // completed-list.appendChild(todo-list)
    const completed_template = document.getElementById('completed-template');
    const new_complete = completed_template.cloneNode(true);
    new_complete.appendChild(elmnt.parentElement.firstElementChild)
    elmnt.parentElement.remove();
    new_complete.hidden = 'false';
    document.getElementById("completed-list").appendChild(new_complete);



}