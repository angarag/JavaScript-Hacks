
const pp1 = new Promise(resolve => resolve("Angarag"));
const pp2 = new Promise((_, reject) => reject("User does not exists!"));
const pp3 = new Promise(resolve => resolve("Batjargal"));
Promise.all([pp1, pp3, pp2])
  .then(response => {
    console.log("all fulfilled:", response);
  })
  .catch(error => console.error("not all fulfilled:", error));
  
Promise.allSettled([pp1, pp2, pp3])
  .then(response => {
    console.log("all with status and value:", response);
  })

const test = () => {
  console.log("when will I be printed");
};
const all = arr => {
  let result = [];
  console.log("this will be printed only after func call");
  setTimeout(() => {
    result.push(-1);
  }, 0);
  return helper(arr);
  async function helper(arr) {
    let temp = null;
    console.log("main operation");
    setTimeout(() => {
      result.push(1111);
    }, 0);
    for (let i = 0; i < arr.length; i++) {
      result.push(i);
      console.log("before pushing result to array", result);
      temp = await arr[i];
      result.push(temp);
      console.log("after pushing result to array", result);
      if (i == arr.length - 1)
        return new Promise(res => {
          res(result);
        });
    }
    console.log("main operation after loop");
  }
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
  console.log(values);
});

console.log("regular Promise all beginning");
Promise.all([p1, p2]).then(r => {
  console.log(r);
});
