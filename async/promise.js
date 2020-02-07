
const pp1 = new Promise(resolve => resolve("Angarag"));
const pp2 = new Promise((_, reject) => reject("User does not exists!"));
const pp3 = new Promise(resolve => resolve("Batjargal"));
Promise.all([pp1, pp3, pp2])
  .then(response => {
    console.log("all fulfilled:", response);
  })
  .catch(error => console.error("not all fulfilled:", error));
  
  
  const p1 = new Promise(res => {
  setTimeout(() => {
    res("p1");
  }, 0);
});
const p2 = new Promise(res => {
  console.log("pre p2");
  setTimeout(() => {
    res("p2");
  }, 0);
});
function all(arr) {
  let result = [];
  return helper(arr);
  async function helper(arr) {
    let temp = null;
    console.log("main operation after pre2 because of hoisting");
    for (let i = 0; i < arr.length; i++) {
      result.push(i);
      temp = await arr[i];
      console.log("first or");
      result.push(temp);
      if (i == arr.length - 1)
        return new Promise(res => {
          res(result);
        });
    }
  }
}
all([p1, p2]).then(values => {
  console.log(values);
});

Promise.allSettled([pp1, pp2, pp3])
  .then(response => {
    console.log("all with status and value:", response);
  })
