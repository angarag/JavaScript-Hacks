/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.arr = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.arr[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  this.arr[key] = undefined;
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.arr[key] != undefined ? true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 */ var obj = new MyHashSet();
let key = 7;
obj.add(key);
obj.remove(key);
var param_3 = obj.contains(key);
