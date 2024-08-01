import { newTodo } from ".";

function DOM(itemID) {
    const itemEl = document.querySelector(itemID)
    
    itemEl.innerHTML = '';

    itemEl.innerHTML = `<div class="todo">
        <h4 class="todo-header">${newTodo.title}</h4>
        <p class="todo-desc">Description: ${newTodo.desc}</p>
        <p class="todo-date">Date by: ${newTodo.date}</p>
        <p class="todo-priority">Priority: ${newTodo.prio}</p>
      </div>`;
}

export {DOM}