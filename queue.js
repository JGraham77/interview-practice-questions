/**
 * Implement a Queue data structure.  The Queue
 * needs to have the following methodds/properites:
 * 
 * enqueu(element)
 * dequeue()
 * peek()
 * length()
 * isEmpty()
 */

class Queue {
    constructor() {
        this.elements = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.elements[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.elements[this.front]
        delete this.elements[this.front];
        this.front++;
        return item;
    }

    peek() {
        return this.elements[this.front];
    }

    get length() {
        return this.rear - this.front;
    }

    get isEmpty() {
        return this.length === 0;
    }
}