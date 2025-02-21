import { append, clear, indexOf, insert, isEmpty, items, remove, removeAt, size } from "./list.js";

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


function updateDisplay() {
	document.getElementById("meuArray").innerHTML = "";
	for (const i of items) {
			document.getElementById("meuArray").innerHTML += `<span class="valor_array p-2 bg-blue-300">${i}</span>`;
	}
}

updateDisplay()

function appendValue() {
	const valor = document.getElementById("elemento").value

	append(valor)

	updateDisplay()
}

function insertValue() {
	const pos = parseInt(document.getElementById("addPos").value, 10)
	const valor = document.getElementById("elemento").value

	if (valor && !isNaN(pos)) {
		insert(parseInt(pos), valor);
		updateDisplay();
	}
}

function removeValue() {
	const valor = document.getElementById("elemento").value

	if (valor) {
		remove(valor);
		updateDisplay();
	}
}

function removeAtValue() {
	const pos = parseInt(document.getElementById("addPos").value, 10)

	if (!isNaN(pos)) {
		removeAt(parseInt(pos));
		updateDisplay();
	}
}

function indexOfValue() {
	const valor = document.getElementById("elemento").value

	if (valor) {
		// alert(`Índice do elemento: ${indexOf(valor)}`);
		Swal.fire(`${valor} está na posição ${indexOf(valor)}`);
	}
}

function sizeValue() {
	// alert(`Tamanho da lista: ${linkedList.size()}`);
	Swal.fire(`O tamanho da lista é ${size()}`);
}

function isEmptyValue() {
	Swal.fire(isEmpty() ? "A lista está vazia" : "A lista contém elementos");
	// alert(linkedList.isEmpty() ? "A lista está vazia" : "A lista contém elementos");
}

function clearValue() {
	clear();
	updateDisplay();
}
