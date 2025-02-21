import { LinkedList } from './linked-list.js'

const linked = new LinkedList();

linked.append("Estudar Python")

function renderTasks() {
	const taskListElement = document.getElementById("taskList");
	taskListElement.innerHTML = "";

	const array = linked.toArray()


	array.forEach((task, index) => {
		const taskItem = document.createElement("li");
		taskItem.textContent = task;

		const removeButton = document.createElement("button");

		removeButton.textContent = "Remover";

		removeButton.setAttribute("data-id", index)
		removeButton.setAttribute("acao", "remover")

		removeButton.style.marginLeft = "10px";

		taskItem.appendChild(removeButton);
		taskListElement.appendChild(taskItem);
	});
}

renderTasks()

document.getElementById("taskList").addEventListener("click", function (e) {
	let acao = e.target.getAttribute("acao")
	if (acao === "remover") {
		linked.removeAt(parseInt(e.target.getAttribute("data-id"), 10))
		renderTasks()

	}

})

document.getElementById("taskForm").addEventListener("submit", function (event) {
	event.preventDefault();
	const taskInput = document.getElementById("taskInput").value;

	if (taskInput) {
		linked.append(taskInput)
		console.log(linked.toArray())
		renderTasks()
	}
});
