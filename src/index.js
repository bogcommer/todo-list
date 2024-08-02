import "./style.css";
import { DOM } from "./show";
import { showDialog } from "./showDialog";
import { newTask } from "./newTask";

const addTaskBtn = document.querySelector(".add-todo");
const showBtn = document.querySelector(".project-btn");
const list = document.querySelector(".list");
class todo {
  constructor(title, desc, date, prio) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.prio = prio;
  }
  
  get Title() {
    return this.title;
  }
  
  set Title(value) {
    this.title = value;
  }
}

let newTodo;

addTaskBtn.addEventListener("click", () => {
  document.body.appendChild(showDialog());
  const taskSubmit = document.querySelector(".submit-btn");
  
  if (taskSubmit !== null) {
    taskSubmit.addEventListener("click", () => {
      const dialog = document.querySelector(".create-dialog");

      newTask();
      dialog.close();
      newTodo = new todo(newTask().Title, newTask().Desc, newTask().Date, newTask().Prio);
    });
  }
  const formClose = document.getElementById("form-close");

  formClose.addEventListener("click", () => {
    const dialog = document.querySelector(".create-dialog");

    dialog.close();
  });
});



showBtn.addEventListener("click", () => {
  DOM(".list");
});

export { newTodo };
