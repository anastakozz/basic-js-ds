const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.start = null;
  }
    root() {
      return this.start;
    }
  
    add(item) {
      this.start = addIn(this.start, item);
      function addIn (node, item) {
        if (!node) {
          // console.log(item, "added");
          return new Node(item);
        }
        if (node.data === item) {
          // console.log(item, "exists");
          return node;
        }
        if (item < node.data) {
          // console.log("go left");
          node.left = addIn(node.left, item);
        } else {
          // console.log("go right");
          node.right = addIn(node.right, item);
        }
  
        return node;
      }
    }
  


    has(item) {
      return hasItem(this.start, item);
      
  
      function hasItem(node, item) {
  
        if (!node) {
          // console.log("no node")
          return false;
        } 
        
        if (node.data === item) {
          return true;
        } 
  
        console.log("go right");
  
        if (node.data > item) {
          // console.log("go left");
          return hasItem(node.left, item);
        } else {
          // console.log("go right");
          return hasItem (node.right, item);
        }
  
        
      }
    }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(item) {
    this.start = nodeRemove(this.start, item);
    function nodeRemove (node, item) {
      if (!node) {
        return null;
      }

      if(node.data > item) {
        node.left = nodeRemove(node.left, item);
        return node;
      } else if (node.data < item) {
        node.right = nodeRemove(node.right, item)
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node = node.right;
          return node;
        }

        if (!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;

        // while (minRight.left){
        //   minRight = node.right;
        // // }
        // node.data = minRight.data;
        // node.right = nodeRemove(node.right, minRight.data);
        // return node;
      }
    }
  

  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};