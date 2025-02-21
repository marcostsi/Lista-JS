class Node { 
    constructor(element, next = null, prev = null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    append(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this._size++;
        this.display();
    }


    remove(element) {
        let current = this.head;
        while (current) {
            if (current.element === element) {

                if (current.prev) {
                    current.prev.next = current.next;
                } else {

                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {

                    this.tail = current.prev;
                }


                if (!this.head) {
                    this.tail = null;
                }

                this._size--;
                this.display();
                return; 
            }
            current = current.next;
        }
    }


    display() {
        const listDisplay = document.getElementById("listDisplay");
        listDisplay.innerHTML = ""; 

        let current = this.head;
        while (current) {
            const li = document.createElement("li");
            li.textContent = current.element;
            listDisplay.appendChild(li);
            current = current.next;
        }
    }
}


const list = new DoublyLinkedList();


document.getElementById("addElement").addEventListener("click", () => {
    const input = document.getElementById("elementInput");
    const value = input.value.trim();
    if (value) {
        list.append(value);
        input.value = ""; 
    }
});


document.getElementById("removeElement").addEventListener("click", () => {
    const input = document.getElementById("elementInput");
    const value = input.value.trim();
    if (value) {
        list.remove(value);
        input.value = ""; 
    }
});