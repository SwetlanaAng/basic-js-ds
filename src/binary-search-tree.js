const { NotImplementedError } = require('../lib/errors');

const { Node } = require('../extensions/list-tree.js');

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
  constructor() {
    this.head = null;
  }
  
  root() {
    return this.head;
  }

  add(data) {
    this.head = addNode(this.head, data);
    function addNode(node, data) { 
      if (!node) return new Node(data);
      else {
        if (data === node.data) return node;
        else if (data < node.data) {
          node.left = addNode(node.left, data)
        } else node.right = addNode(node.right, data)
      }
      return node;
    }
    

  }

  has(data) {
    function ifHasData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      else if (node.data > data) {
        return ifHasData(node.left, data);
      } else return ifHasData(node.right, data);
    }
    return ifHasData(this.head, data);
  }
  find(data) {
    function returnData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      else if (node.data > data) {
        return returnData(node.left, data);
      } else return returnData(node.right, data);
    }
    return returnData(this.head, data);
  }

  remove(data) {
    this.head = removeNode(this.head, data);
    function removeNode(node, data){
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data === node.data) {
        if (!node.right && !node.left) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        } else if(node.right && node.left){
        let minRightItem = node.right;
        while(minRightItem.left){
          minRightItem = minRightItem.left;
        }
        node.data = minRightItem.data;
        node.right = removeNode(node.right, minRightItem.data);
        return node;
      }
      } 

    }
  }

  min() {
    let minimum = this.head;
    while(minimum.left){
      minimum = minimum.left;
    }
    return minimum.data;
  }

  max() {
    let maximum =  this.head;
    while(maximum.right){
      maximum = maximum.right;
    }
    return maximum.data;
  }
}

module.exports = {
  BinarySearchTree
};