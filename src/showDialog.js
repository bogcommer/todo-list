const dialog = document.createElement("DIALOG");
function showDialog() {
  const textNode = document.createTextNode("Open");
  const submit = document.createElement('button');

  dialog.classList.add("create-dialog");
  dialog.show();

  dialog.innerHTML = `
  <button id="form-close">x</button>
  <label for="form-title">Title:</label>
  <input id="form-title" type="text"></input>
  <label for="form-desc">Description:</label>
  <input id="form-desc" type="text"></input>
  <label for="form-date">Date by:</label>
  <input id="form-date" type="date"></input>
  <label for="form-priority">Priority:</label>
  <input id="form-priority" type="checkbox"></input>
  <br>
  `


  submit.classList.add("submit-btn");
  submit.textContent = "Submit"
  dialog.appendChild(submit);

  return dialog;
}

export { showDialog };
