export class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this._size = 0;
    }

    append(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this._size++;
    }

    insert(position, element) {
        if (position < 0 || position > this._size) return;
        const node = new Node(element);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = node;
            node.next = current;
        }
        this._size++;
    }

    remove(element) {
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.element === element) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                this._size--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    removeAt(position) {
        if (position < 0 || position >= this._size) return;
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let previous;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        this._size--;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.element === element) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    clear() {
        this.head = null;
        this._size = 0;
    }

    toString() {
        if (!this.head) return "Lista vazia";
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.element} -> `;
            current = current.next;
        }
        return result + "null";
    }
}

