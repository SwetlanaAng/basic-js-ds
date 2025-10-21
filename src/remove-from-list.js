
const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

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
/* class List {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  addElement(val){
    if(this.length === 0) this.head = new ListNode(val);
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      };
      current.next = new ListNode(val);
    }
    this.length++;
  }
  removeElement(index){
    let cur = this.head;
    if(index === 0){
      this.head = cur.next;
    }else {
      let prev = null;
      let position = 0;
      while(position < index){
        prev = cur;
        cur = cur.next;
        position ++
      }
      prev.next = cur.next;
    }
    this.length--;
  }
  showList(){
    let current = this.head;
    const ans = [];
    while(current.next){
      ans.push(current.value);
      current = current.next;
    }
    return ans;
  }
} */
function removeKFromList(l, k) {
  function findInd(l,value){
    let cur = l;
    let index = 0;
    while(cur.next){
      if(cur.value === value) return index;
      cur = cur.next;
      index++
    }
    if(cur.value === value) return index;
    return -1;
  }
  function removeElement(index){
    let cur = l;
    if(index === 0){
      l = cur.next;
    }else {
      let prev = null;
      let position = 0;
      while(position < index){
        prev = cur;
        cur = cur.next;
        position ++
      }
      prev.next = cur.next;
    }
  }
  
  let indexK = findInd(l, k);
  while(indexK !== -1){
    removeElement(indexK);
    indexK = findInd(l, k);
  }
  return l;
}

module.exports = {
  removeKFromList
};
