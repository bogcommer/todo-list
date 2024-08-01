import "./style.css";
import { DOM } from "./show";
import { showDialog } from "./dom";

const addProjectBtn = document.querySelector(".add-project");
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

addProjectBtn.addEventListener("click", () => {
  document.body.appendChild(showDialog());
});

const newTodo = new todo("yo", "eee", "01-02-03", "high");

showBtn.addEventListener("click", () => {
  DOM(".list");
});

export { newTodo };
export { showDialog };
