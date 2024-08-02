function newTask() {
    const title = document.getElementById("form-title").value;
    const desc = document.getElementById("form-desc").value;
    const date = document.getElementById("form-date").value;
    const prio = document.getElementById("form-priority").checked;


    let obj = {
        Title: title,
        Desc: desc,
        Date: date,
        Prio: prio
    };

    return obj;
}

export { newTask };
