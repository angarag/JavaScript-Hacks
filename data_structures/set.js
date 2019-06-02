class Set {
  constructor() {
    this.items = {};
  }
  has(el) {
    return el in this.items;
  }
  add(el) {
    this.items[el] = el;
  }
  delete(el) {
    delete this.items[el];
  }
  clear() {
    this.items = {};
  }
  values() {
    return Object.values(this.items);
  }
}
