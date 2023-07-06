const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        
      
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let node = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            
        }


        this.length++
        return this.length

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (this.length === 0) {
          return null;
        }
      
        const removedNode = this.head.value;
        this.length--;
      
        if (!this.head.next) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev = null;
        }
      
        return removedNode;
      }
      

}

module.exports = {
    Queue,
    SinglyLinkedNode
}

let q = new Queue
console.log(q.enqueue(50))
