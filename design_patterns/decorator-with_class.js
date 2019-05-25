class Car {
  constructor() {
    // Default Cost
    this.cost = function() {
      return 20000;
    };
  }
}
// Decorator function
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  };
}
// Decorator function
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 2000;
  };
}
// Decorator function
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  };
}
const car = new Car();
console.log(car.cost());
carWithAC(car);
console.log(car, car.cost());
carWithAutoTransmission(car);
console.log(car, car.cost());
carWithPowerLocks(car);
console.log(car, car.cost());
