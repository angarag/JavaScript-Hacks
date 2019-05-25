function Car(name) {
  this.name = name;
  // Default values
  this.color = "White";
}
// Creating a new Object to decorate
const tesla = new Car("Tesla Model 3");
// Decorating the object with new functionality
tesla.setColor = function(color) {
  this.color = color;
};
tesla.setPrice = function(price) {
  this.price = price;
};
tesla.setColor("black");
tesla.setPrice(49000);
// prints black
console.log(tesla.color);
