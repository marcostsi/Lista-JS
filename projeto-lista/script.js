import { LinkedList } from "./linked-list.js";

const linkedList = new LinkedList();
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
    display.innerHTML = "";
    let current = linkedList.head;
    while (current !== null) {
        const div = document.createElement("div");
        div.textContent = current.element;
        div.classList.add("bg-white", "p-2", "rounded", "shadow-md");
        display.appendChild(div);
        current = current.next;
    }
}

function appendValue() {
    const value = inputElement.value.trim();
    if (value) {
        linkedList.append(value);
        inputElement.value = "";
        updateDisplay();
    }
}

function insertValue() {
    const value = inputElement.value.trim();
    const position = prompt("Digite a posição para inserir:");
    if (value && !isNaN(position)) {
        linkedList.insert(parseInt(position), value);
        updateDisplay();
    }
}

function removeValue() {
    const value = inputElement.value.trim();
    if (value) {
        linkedList.remove(value);
        updateDisplay();
    }
}

function removeAtValue() {
    const position = prompt("Digite a posição para remover:");
    if (!isNaN(position)) {
        linkedList.removeAt(parseInt(position));
        updateDisplay();
    }
}

function indexOfValue() {
    const value = inputElement.value.trim();
    if (value) {
        alert(`Índice do elemento: ${linkedList.indexOf(value)}`);
    }
}

function sizeValue() {
    alert(`Tamanho da lista: ${linkedList.size()}`);
}

function isEmptyValue() {
    alert(linkedList.isEmpty() ? "A lista está vazia" : "A lista contém elementos");
}

function clearValue() {
    linkedList.clear();
    updateDisplay();
}
