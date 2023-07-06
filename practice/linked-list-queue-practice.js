// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0
    }

    addToTail(val) {

        this.length++
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;

    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // let current = this.head
        // let count = 0;

        // while(current){
        // count++
        // current = current.next;
        // }
        // return count
        return this.length

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0
        let current = this.head

        while(current){
            sum += current.value
            current = current.next
        }
        return sum

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let sum = this.sumOfNodes()
        let length = this.listLength()

        return sum/length

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if(n < 0 || n >= this.length){
            return null
        }

        let current= this.head
        let count = 0

        while(count < n){
            current = current.next
            count++
        }

        return current.value

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        let midIndex = Math.floor(this.listLength()/2)
        let current = this.head
        let count = 0

        while(count < midIndex){
            current = current.next
            count++
        }
        return current.value

    }

    reverse() {
        const reversedList = new SinglyLinkedList();
    let current = this.head;

    while (current !== null) {
      const newNode = new SinglyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head = newNode;
      current = current.next;
    }

    return reversedList;
      }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        let next = null;
    
        while (current !== null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
    
        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
    }
}

let ll = new SinglyLinkedList()
ll.addToTail(50)
ll.addToTail(60)
ll.addToTail(70)
ll.addToTail(80)
ll.addToTail(90)
console.log(ll.reverse())


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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        if (this.head === null) {
            return null;
          }
      
          let slow = this.head;
          let fast = this.head;
      
          while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
          }
      
          return slow;
        
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        const reversedList = new DoublyLinkedList();
    let current = this.tail;

    while (current !== null) {
      reversedList.addToTail(current.value);
      current = current.prev;
    }

    return reversedList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    // Swap head and tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
