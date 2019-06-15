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
