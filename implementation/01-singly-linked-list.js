// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let node = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = node;
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.length++ 
        return this;
        // Write your hypothesis on the time complexity of this method here
        
       //The time complexity of the addToHead(val) method in the code is O(1), which means it has constant time complexity.The reason for this is that the method performs a fixed number of operations regardless of the size of the linked list. It creates a new node, sets its next reference to the current head (if it exists), updates the head reference to the new node, and increments the length variable.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }
        else{
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
       }
       this.length++
       return this;
        
    }
     // the addToTail() has a time complexity of o(n) i.e linear time complexity. This is because the time required will increase linearly for the increase in the number 
        // of element. the while oparation has to transverse through every single element.

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            // Empty list, return undefined
            return undefined;
        }
    
        const removedNode = this.head;
    
        if (!this.head.next) {
            // Only one node in the list
            this.head = null;
        } else {
            this.head = this.head.next;
        }
    
        this.length--;
    
        return removedNode;
    }
    
        // Write your hypothesis on the time complexity of this method here
        // The time complexity of the removeFromHead() method is O(1), which means it has constant time complexity.

        // The reason for this is that the method performs a fixed number of operations regardless of the size of the linked list. 
        // It checks if the linked list is empty, updates the head reference, and decrements the length variable. 
        // These operations take a constant amount of time, regardless of the number of nodes in the linked list.

    removeFromTail() {
        // Remove node at tail
        let removedNode
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
        }
        else{

            let current = this.head
            while(current.next.next){
                current = current.next
            }
            removedNode = current.next
            current.next = null
           
        }
        this.length--;
        return removedNode
    }
    // Write your hypothesis on the time complexity of this method here
        // the function removeFromtail() has a time complexity of o(n). this is because the time for transverse of element through the while loop increases with increase in element

    peekAtHead() {
        // Return value of head node
        if(!this.head){
            return undefined
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time complexity of 0(1)
    }

    print() {
        // Print out the linked list
        if(!this.head){
            return
        }
        else{
        let current = this.head

        while(current){
            process.stdout.write(`${current.value} -> `)
            current = current.next
        }
     
    }
    console.log("NULL")
        // Write your hypothesis on the time complexity of this method here = time complexity 0(n)
    }
    
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}


ll = new SinglyLinkedList()
ll.addToHead("A")
ll.addToTail("B")
ll.addToHead(1)
ll.print()