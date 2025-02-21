let items = ["MP", "Jff"]

function append(element){
    items.push(element)
}

function insert(position, element) {
    // items.splice(position, 0, element);

    if(position > items.length || position < 0) {
        return;
    }
    // realocar do fim ao 'position' os elementos
    for (let i = items.length - 1; i >= position; i-- ) {
        items[i+1] = items[i]
    }

    // alocar o 'element' na 'position'
    items[position] = element
}


// Fazer em casa com for
function remove(element) {
    let index = indexOf(element);
    if (index !== -1){
        for (let i = index; i < items.length - 1; i++) {
            items[i] = items[i + 1] // Move os elementos para a esquerda
        }
        items.pop(); // Remove o último item duplicado
    }
    // return removeAt(indexOf(element), 1)

}

function removeAt(position){
    if (position < 0 || position >= items.length){
        return;
    }
    for (let i = position; i < items.length - 1; i++) {
        items[i] = items[i + 1];
    }
    items.pop();
}

function indexOf(element){
    for (let i = 0; i < items.length; i++) {
        if (items[i] === element) {
            return i;
        }
    }
    return -1;
}

function size() {
    return items.length;
}

function toString() {
    return items.join(", ");
}

function isEmpty(){
    return size() === 0;
}


function print(){
    console.log(toString())
}

function clear(){
    items = [];
}

function search(element) {
    return indexOf(element) !== -1;
}

export {
    append,
    items,
    insert,
    remove,
    removeAt,
    indexOf,
    size,
    toString,
    isEmpty,
    print,
    clear
}