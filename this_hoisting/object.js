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
