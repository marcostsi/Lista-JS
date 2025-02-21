import { LinkedList } from "./linked-list.js";

const linked = new LinkedList();

const display = document.querySelector("#meuArray");
const inputElement = document.querySelector("#elemento");

const buttonAppend = document.querySelector("#buttonappend");
const buttonInsert = document.querySelector("#buttoninsert");
const buttonRemove = document.querySelector("#buttonremove");
const buttonRemoveAt = document.querySelector("#buttonremoveAt");
const buttonIndexOf = document.querySelector("#buttonindexOf");
const buttonSize = document.querySelector("#buttonsize");
const buttonIsEmpty = document.querySelector("#buttonisEmpty");
const buttonClear = document.querySelector("#buttonclear");

buttonAppend.addEventListener("click", appendValue);
buttonInsert.addEventListener("click", insertValue);
buttonRemove.addEventListener("click", removeValue);
buttonRemoveAt.addEventListener("click", removeAtValue);
buttonIndexOf.addEventListener("click", indexOfValue);
buttonSize.addEventListener("click", sizeValue);
buttonIsEmpty.addEventListener("click", isEmptyValue);
buttonClear.addEventListener("click", clearValue);

linked.append("MP")
linked.append("vaqueiro")

function updateDisplay() {
	document.getElementById("meuArray").innerHTML = "";
	for (const i of linked.toArray()) {
			document.getElementById("meuArray").innerHTML += `<span class="valor_array p-2 bg-blue-300">${i}</span>`;
	}
}

console.log(linked.toArray())
updateDisplay()

function appendValue() {
	const valor = document.getElementById("elemento").value

	linked.append(valor)

	updateDisplay()
}

function insertValue() {
	const pos = parseInt(document.getElementById("addPos").value, 10)
	const valor = document.getElementById("elemento").value

	if (valor && !isNaN(pos)) {
		linked.insert(parseInt(pos), valor);
		updateDisplay();
	}
}

function removeValue() {
	const valor = document.getElementById("elemento").value

	if (valor) {
		linked.remove(valor);
		updateDisplay();
	}
}

function removeAtValue() {
	const pos = parseInt(document.getElementById("addPos").value, 10)

	if (!isNaN(pos)) {
		linked.removeAt(parseInt(pos));
		updateDisplay();
	}
}

function indexOfValue() {
	const valor = document.getElementById("elemento").value

	if (valor) {
		// alert(`Índice do elemento: ${indexOf(valor)}`);
		Swal.fire(`${valor} está na posição ${linked.indexOf(valor)}`);
	}
}

function sizeValue() {
	// alert(`Tamanho da lista: ${linkedList.size()}`);
	Swal.fire(`O tamanho da lista é ${linked.size()}`);
}

function isEmptyValue() {
	Swal.fire(linked.isEmpty() ? "A lista está vazia" : "A lista contém elementos");
	// alert(linkedList.isEmpty() ? "A lista está vazia" : "A lista contém elementos");
}

function clearValue() {
	linked.clear();
	updateDisplay();
}
