/**
 * Implement a Stack data structure.  The Stack
 * needs to have the following methods:
 * 
 * push(item)
 * pop()
 * peek()
 * isEmpty()
 * printStack()
 */

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) return false;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    // All below are valid solutions
    printStack() {
        let items = '';
        for (const item of this.items) {
            // console.log(item);
            items += `${item}`
        }

        return items;
        // console.log(this.items);
    }
}

const stack = new Stack();