/**
 * Implement a (Singly) Linked List data structure.
 * The Linked List needs to have the following
 * methods/properties for PART ONE:
 * 
 * PART 1
 * insert(val)
 * insertEnd(val)
 * insertHead(val)
 * insertAtIndex(val, index)
 * print()
 * 
 * PART 2
 * exists(val)
 * destroyFirst()
 * destroyLast(prevNode)
 * destroyBetween(prevNode, node)
 * remove(val)
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

    exists(val) {
        let tempNode = this.head;
        while(tempNode) {
            if(tempNode.val === val) {
                console.log(val + ' has been found');
                return true;
            }

            tempNode = tempNode.next;
        }

        console.log(val + ' has not been found')
        return false;
    }

    destroyFirst() {
        let tempNode = this.head;
        this.head = tempNode.next;
    }

    destroyLast(prevNode) {
        prevNode.next = null;
    }

    destroyBetween(prevNode, node) {
        prevNode.next = node.next;
    }

    remove(val) {
        let currentNode = this.head;
        let previousNode = this.head;

        if(!this.isEmpty()){
            while(currentNode) {
                if (currentNode.val === val) {
                    if(currentNode === this.head) {
                        this.destroyFirst();
                        return;
                    } else if (currentNode.next === null) {
                        this.destroyLast(previousNode);
                        return;
                    } else {
                        this.destroyBetween(previousNode, currentNode);
                        return;
                    }
                }

                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
}