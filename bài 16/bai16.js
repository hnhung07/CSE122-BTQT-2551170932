let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let count = document.getElementById("count");

let tasks = [
    { name: "Đọc chương HTML5 cơ bản", done: true },
    { name: "Làm bài tập CSS Grid", done: false },
    { name: "Quay video OBS nộp bài", done: false }
];

function showTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let task = document.createElement("div");
        task.className = "task";

        if (tasks[i].done) {
            task.classList.add("done");
        }

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].done;

        checkbox.onclick = function () {
            tasks[i].done = checkbox.checked;
            showTasks();
        };

        let name = document.createElement("span");
        name.textContent = tasks[i].name;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xoá";
        deleteButton.className = "delete-button";

        deleteButton.onclick = function () {
            tasks.splice(i, 1);
            showTasks();
        };

        task.appendChild(checkbox);
        task.appendChild(name);
        task.appendChild(deleteButton);

        taskList.appendChild(task);
    }

    let remaining = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done == false) {
            remaining++;
        }
    }

    count.textContent = "Còn " + remaining + " việc chưa hoàn thành";
}

addButton.onclick = function () {
    let name = taskInput.value.trim();

    if (name == "") {
        alert("Bạn chưa nhập công việc!");
        return;
    }

    tasks.push({ name: name, done: false });
    taskInput.value = "";
    showTasks();
};

taskInput.onkeydown = function (event) {
    if (event.key == "Enter") {
        addButton.click();
    }
};

showTasks();
