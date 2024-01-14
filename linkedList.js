/**
 * Implement a (Singly) Linked List data structure.
 * The Linked List needs to have the following
 * methods/properties for PART ONE:
 * 
 * insert(val)
 * insertEnd(val)
 * insertHead(val)
 * insertAtIndex(val, index)
 * print()
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    
    insert(val) {
        if (this.isEmpty()) {
            this.head = new ListNode(val);
        } else {
            this.insertEnd(val);
        }
    }

    insertEnd(val) {
        let newNode = new ListNode(val);
        let tempNode = this.head;
        while (tempNode.next) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }

    insertHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtIndex(val, index) {
        let previousNode;
        let currentNode = this.head;
        let indexCounter = 0;

        let newNode = new ListNode(val);

        while(indexCounter < index) {
            previousNode = currentNode;
            currentNode = previousNode.next;
            indexCounter++;
        }

        previousNode.next = newNode;
        newNode.next = currentNode;
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        let tempNode = this.head;
        let result = '';
        while (tempNode) {
            if (tempNode.next === null) {
                result += tempNode.val + ' --> Null';
            } else {
                result += tempNode.val + ' --> ';
            }
            tempNode = tempNode.next;
        }
        console.log(result);
    }
}