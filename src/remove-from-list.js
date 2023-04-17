const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// const l = convertArrayToList([3, 1, 2, 3, 4, 5]);

// function printList (l) {
//   let tmp = l;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;}
// }

// printList(l);

// console.log("next");
// // let tmp = null

function removeKFromList( l, k ) {
 console.log ("check", l)
    if( l.value === k && l.next) {
       l.value = l.next.value;
      l.next = l.next.next
      console.log ("deleted");
      console.log(l);
      removeKFromList(l, k) 
    } else if (l.next.next ) {
      console.log("skip");
      removeKFromList(l.next, k);
    } else if (l.next.value === k) {
      l.next = null;
    }
    
    return l;
}



// removeKFromList(l,3)
// l.next = l.next.next;
// printList(l);


// printList(removeKFromList(l,1));




module.exports = {
  removeKFromList
};


 // let deleted = null;

  // while (l.head && l.head.value === k) {
  //   deleted = l.head;
  //   l.head = l.head.next;
  // }

  // let current = l.head;
  // if (current !== null) {
  //   while (current.next) {
  //     if (current.next.value === k) {
  //       deleted = current.next;
  //       current.next = current.next.next;
  //     } else {
  //       current = current.next;
  //     }
  //   }
  // }

  // if(l.tail && l.tail.value === k){
  //   l.tail = current;
  // }

 

  // return l;
