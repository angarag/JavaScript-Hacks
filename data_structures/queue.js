//FIFO
class Queue {
  constructor() {
    this.count = 0;
    this.lowcount = 0;
    this.items = {};
  }
  enqueue(el) {
    this.items[this.count] = el;
    this.count++;
  }
  //FIFO
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowcount];
    delete this.items[this.lowcount]; //marks it empty==undefined, only frees memory
    this.lowcount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowcount];
  }
  isEmpty() {
    return this.count - this.lowcount === 0; //return this.size()==0;
  }
  size() {
    return this.count - this.lowcount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowcount = 0;
  }
}
//Use cases: Palindrome checker, Hot Potato
