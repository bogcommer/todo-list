function showDialog() {
  const dialog = document.createElement("DIALOG");
  const textNode = document.createTextNode("Open");

  dialog.classList.add("create-dialog");
  dialog.setAttribute("open", "open");

  return dialog;
}

export { showDialog };
