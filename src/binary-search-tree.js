const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class InnerClass {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  } 
}
class BinarySearchTree {
  /* constructor() {
    this.root = null;
  } */
  
  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    /* this.root = addNode(this.root, data);
    function addNode(node, data) { 
      if (!node) return new InnerClass(data);
      else {
        if (data === node.value) return node;
        else if (data < node.value) {
          node.left = addNode(node.left, data)
        } else node.right = addNode(node.right, data)
      }
      return node;
    } */
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    /* return ifHasData(this.root, data);
    function ifHasData(node, data) {
      if (!node) return false;
      if (node.value === data) return true;
      else if (node.value > data) {
        ifHasData(node.left, data);
      } else ifHasData(node.right, data);
    } */
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    /* return returnData(this.root, data);
    function returnData(node, data) {
      if (!node) return null;
      if (node.value === data) return data;
      else if (node.value > data) {
        returnData(node.left, data);
      } else returnData(node.right, data);
    }
     */
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    /* this.root = removeNode(this.root, data);
    function removeNode(node, data){
      if (!node) return null;
      if (data < node.value) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.value) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data === node.value) {
        if (!node.right && !node.left) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
      }
    } */
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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