const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {

  constructor () {
    this.first = 0;
    this.last = 0;
    this.size = 0;
  }

  

  getUnderlyingList() {
    return this.first;

  }

  enqueue(item) {
    let newNode = new Node(item);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    this.size++;
    // this.items[this.tail] = item;
    // this.tail += 1;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    let itemDequeued = this.first;

    this.first = this.first.next;
    this.size--;

    return itemDequeued.value;
    // let result = this.items[this.head];
    // delete this.items[this.head];
    // this.head += 1;
    // return result;
  }
}


module.exports = {
  Queue
};
