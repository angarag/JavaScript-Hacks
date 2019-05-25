function mars() {
  this.name = "Mars";
}
var mmars = function() {
  this.name = "Angarag";
};
let obj1 = new mars();
let obj2 = new mmars();
console.log(obj1.name, obj2.name);

class Mars {
  constructor(name) {
    this.name = name;
  }
}
let obj3 = new Mars("Garag");
console.log(obj3.name);
const obj4 = {
  name: "Name"
};
obj5 = Object.create(obj4);
obj6 = obj4;
console.log(obj5.name, obj4 == obj5, obj6 == obj4);
