class Task {
    constructor(name) {
        this.name = name;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
        this.renderTasks();
    }

    addTask(taskName) {
        if (taskName.trim() === "") return;
        const task = new Task(taskName);
        this.tasks.push(task);
        this.renderTasks();
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.renderTasks();
        }
    }

    renderTasks() {
        const taskListElement = document.getElementById("taskList");
        taskListElement.innerHTML = "";

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task.name;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.onclick = () => this.removeTask(index);
            removeButton.style.marginLeft = "10px";

            taskItem.appendChild(removeButton);
            taskListElement.appendChild(taskItem);
        });
    }
}

const taskList = new TaskList();

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput");
    taskList.addTask(taskInput.value);
    taskInput.value = "";
});