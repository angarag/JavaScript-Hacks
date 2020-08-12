//https://javascript.info/async-await
const test = () => {
  console.log("when will I be printed");
};

const all = async arr => {
  let result = [];
  console.log("this will be printed only after func call");
  // setTimeout(() => {
  //   result.push(-1);
  // }, 1);
  for (let i = 0; i < arr.length; i++) {
    //result.push(i);
    //console.log("   before pushing result to array", result);
    temp = await arr[i];
    result.push(temp);
    //console.log("   after pushing result to array", result);
  }
  return result;
};
const p2 = new Promise(res => {
  console.log("pre p2");
  setTimeout(() => {
    res("p2");
  }, 0);
});
const p1 = new Promise(res => {
  setTimeout(() => {
    res("p1");
  }, 0);
  console.log("pre p1");
});
const p3 = Promise.resolve("p3");
all([p3, p1, p2, p3]).then(values => {
  console.log("Custom Promise all:", values);
});

console.log("regular Promise all beginning");
Promise.all([p3, p1, p2, p3]).then(r => {
  console.log("Regular Promise all:", r);
});

const pp2 = new Promise(resolve => {
  console.log("pp2");
  setTimeout(() => {
    resolve("Angarag");
  }, 0);
});
const pp1 = new Promise((_, reject) => _("User does not exists!"));
const pp3 = new Promise(resolve => resolve("Batjargal"));
Promise.all([pp1, pp2, pp3])
  .then(response => {
    console.log("Regular Promise 2 all:", response);
  })
  .catch(error => console.error("not all fulfilled:", error));
Promise.all([pp1, pp3]).then(r => {
  console.log("Regular Promise all without setTimeout:", r);
});
