let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem =inputElement.value;
    let todoDate =dateElement.value;

    if (todoItem.trim() === ''||todoDate==='') {
        return;
    }

    todoList.push({
        item: todoItem,
        dueDate:todoDate
    });
    inputElement.value = '';
    dateElement.value = '';

    saveToStorage();
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';
    for (let i=0; i<todoList.length; i++) {
        let {item, dueDate} =todoList[i];

        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
        `;
    }
    containerElement.innerHTML =newHtml;
}

function deleteTodo(index) {
    todoList.splice(index,1);
    saveToStorage();
    displayItems();
}

function saveToStorage() {
    localStorage.setItem('todoList',JSON.stringify(todoList));
}