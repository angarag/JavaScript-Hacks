var x = 1;
function f() {
  var y = 2;
  var summ = () => {
    var z = 3;
    console.log(x + y + z);
  };
  y = 10;
  //14
  return summ;
  //6
  return () => {
    var z = 3;
    console.log(x + y + z);
  };
}
var g = f();
g(); //14

//Var scope is defined by the nearest function block
(function a() {
  for (var x = 0; x < 10; x++) console.log(x);
  console.log(x); //10
})();
//Let scope is defined by the nearest enclosing block
(function a() {
  for (let x = 0; x < 10; x++) console.log(x);
  console.log(x); //1, look at the first line
  let y = "isGlobal";
  console.log(this.x, this.y, y);
})();

this.name = "global name";

function test() {
  console.log(this.name);
}
//global name
console.log(this.name);
//undefined as this refers to func scope
test();
//undefined again
setImmediate(test);
//this refers to execution context, so will print global name
setImmediate(() => {
  console.log(this.name);
});
//undefined.
setImmediate(function() {
  console.log(this.name);
});

//Inheritance
var protoCircle = { x: 0, y: 0, radius: 1, color: "black" };
var c1 = Object.create(protoCircle);
c1.x = 4;
c1.color = "green";
var c2 = protoCircle;
c2.color = "white";
//Inspect elements now. c1._proto.color==="white"

this.arr = [9, 10, 11, 12];
var arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  const arr = [20, 30, 40, 50];
  this.arr = [5, 6, 7, 8, 9];
  this.arr2 = this.arr;
  this.arr3 = this.arr.slice();
  delete this.arr[2];
  delete this.arr2[0];
  setTimeout(() => {
    this.arr = [77, 77, 77, 77, 77];
    console.log(i, arr, this.arr, this.arr2, this.arr3);
  }, 1000);
  setTimeout(function() {
    this.arr = [50, 60, 70, 80, 90];
    console.log(i, arr, this.arr, this.arr2, this.arr3);
  }, 1000);
}
//Prototype vs proto
//https://www.javascripttutorial.net/javascript-prototype/
