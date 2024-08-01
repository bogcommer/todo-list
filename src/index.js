import './style.css';
const btn = document.querySelector(".project-btn");
const list = document.querySelector(".list");

function project() {
    const element = document.createElement('div');
    
    element.classList.add = 'todo'
    element.innerHTML = ''

    return element;
}

btn.addEventListener("click", () => {
    list.innerHTML = '';

    list.innerHTML = `<div class="todo">
        <h4 class="todo-header">todo</h4>
        <p class="todo-desc">Description: blablabla</p>
        <p class="todo-date">Date by: 03-04-24</p>
        <p class="todo-priority">Priority: High</p>
      </div>`;
});