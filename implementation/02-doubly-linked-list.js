// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this
    }
     // the time complexity is 0(1)
    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val)

        if(this.length > 0){
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode
        }
        else{
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this

        // Write your hypothesis on the time complexity of this method here
    }
    // the complexity is 0(1)

    removeFromHead() {
        // Remove node at head
        this.length--
        if(!this.head){
            return undefined
        }

        const removedNode = this.head
        if(!this.head.next){
            this.head = null
            this.tail = null    
        }
        else{
            this.head = this.head.next;
            this.head.prev = null
        }

        return removedNode.value

        

        // Write your hypothesis on the time complexity of this method here
        //this has a time complexity of 0(1)

       
    }
    
    removeFromTail() {
        // Remove node at tail
        const removedNode = this.tail;
        this.length--;
    
        if (!this.tail) {
            return undefined;
        }
    
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    
        return removedNode.value;
    }
    

    peekAtHead() {
        // Return value of head node
        if(!this.head){
            return undefined
        }
        else{
            return this.head.value
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.head){
            return undefined
        }
        else{
            return this.tail.value;
        }
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}


let ll = new DoublyLinkedList()

ll.addToHead("A")
ll.addToTail("B")
ll.addToTail("C")
ll.addToTail("D")

ll.removeFromTail()