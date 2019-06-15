let arr = [1, 2, 3, 4, 5, 6, 7];
delete arr[3];
console.log(arr);
let obj = {};
arr.forEach(a => (obj[a] = a));
console.log(obj);
console.log(arr[3] == undefined);
console.log(Math.min(...arr.filter(i => i != NaN)));
var fs = require("fs");
var stream1;
var stream2;
const from = "/home/angarag/Desktop/old.txt";
let to = "/home/angarag/Desktop/new.txt";
stream1 = fs.createReadStream(from);

try {
  if (fs.existsSync(to)) {
    //file exists
    to += ".new";
  }
  stream2 = fs.createWriteStream(to);
  stream1.on("data", data => {
    var chunk = data.toString();
    stream2.write(chunk);
  });
} catch (err) {
  console.error(err);
}

// mars = new Observable(obs => {
//   obs.next("haha");
//   obs.next("hihi");
// });
// mars.subscribe(data => {
//   console.log(data);
// });

prom = new Promise((res, rej) => {
  res("done");
});
prom
  .then(data => {
    console.log(data);
  })
  .catch(() => {
    console.error("error");
  });
