for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  setTimeout(function() {
    console.log(i * 10);
  }, 1000);
}
//vs
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  setTimeout(function() {
    console.log(i * 10);
  }, 1000);
}
