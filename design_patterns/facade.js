const carManager = (function() {
  return {
    // request information
    requestInfo: function(model, id) {
      return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function(model, id) {
      return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function(model, id) {
      return (
        "You have successfully booked a viewing of " +
        model +
        " ( " +
        id +
        " ) "
      );
    },
    print: () => {
      console.log("printing");
    },
    print_explicit: () => {
      return "ok";
    }
  };
})();
console.log(carManager);
carManager.print();
carManager.print_explicit();
console.log(carManager.print_explicit());
carManager.arrangeViewing(1, 2);
carManager.execute = function(name) {
  return (
    carManager[name] &&
    carManager[name].apply(carManager, [].slice.call(arguments, 1))
  );
};
console.log(carManager.execute("arrangeViewing", "Ferrari", "14523"));
carManager.execute("requestInfo", "Ford Mondeo", "54323");
carManager.execute("requestInfo", "Ford Escort", "34232");
carManager.execute("buyVehicle", "Ford Escort", "34232");
