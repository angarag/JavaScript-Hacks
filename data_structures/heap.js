export class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  getRightIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    if (i == undefined) return undefined;
    return Math.floor((index - 1) / 2);
  }
  insert(val) {
    if (val != null) this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }
  siftUp(i) {
    let parent = this.getParentIndex(i);
    while (i > 0 && this.heap[parent] > this.heap[i]) {
      swap(this.heap, parent, index);
      i = parent;
      parent = this.getParentIndex(i);
    }
  }
  function swap(array,a,b){
	  const temp = array[a];
	  array[a]=array[b];
	  array[b]=temp;
  }
}
