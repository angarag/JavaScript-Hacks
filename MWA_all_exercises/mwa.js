{
  //HW1-1
  const hw1 = function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    let result = "weekday";
    switch (day) {
      case 0:
        result = "weekend";
        break;
      case 6:
        result = "weekend";
        break;
    }
    const map = {
      0: "weekend",
      6: "weekend",
      1: result,
      2: result,
      3: result,
      4: result,
      5: result
    };
    console.log(result, map[day]);
  };
  hw1();
}
{
  //HW1-2
  const item = {
    name: "Avocado",
    type: "Fruit",
    category: "Food",
    price: 200
  };
  const applyCoupon = item => discount => {
    return { price: Math.floor((item.price * (100 - discount)) / 100) };
  };
  console.log(applyCoupon(item)(10).price);
}
(() => {
  this.name = "fake this";
  //arrow function's this refers to execution context!
  Array.prototype.fake_even = () => {
    console.log(this);
  };
  //function's this refers to object instance
  Array.prototype.even = function() {
    process.nextTick(() => {
      console.log(this.filter(i => i % 2 == 0));
    });
  };
  Array.prototype.odd = function() {
    const odd = new Promise((res, rej) => {
      const result = this.filter(i => i % 2 == 1);
      if (result.length > 0) res(result);
      else rej("no odd");
    });
    odd
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //HW2
  console.log("start");
  [1, 2, 3, 4, 5, 6, 7, 8].odd();
  [1, 2, 3, 4, 5, 6, 7, 8].even();
  [2, 4, 6].odd();
  [].fake_even();
  console.log("end");
})();
{
  //HW3
  var dns = require("dns");
  console.log("HW3 start");
  dns.resolve("www.mum.edu", (err, addr) => {
    if (err == null) {
      const result = new Promise((res, rej) => {
        res(addr);
      });
      result.then(data => {
        console.log("hw3_1: promise:", data);
      });
      console.log("HW3_1 end");
    }
  });
  async function hw3_2() {
    function helper() {
      return new Promise((res, rej) => {
        dns.resolve("www.mum.edu", (err, addr) => {
          res(addr);
        });
      });
    }
    try {
      const res = await helper();
      console.log("HW3 part2 done", res);
    } catch (error) {
      console.log("HW3 error");
    }
  }
  hw3_2();
  console.log("HW3 done");
  //HW3-3
  var EventEmitter = require("events");
  class Gym extends EventEmitter {
    constructor() {
      super();
      setImmediate(() => {
        this.emit("boom", "aMessage");
        this.emit("boom", null);
        this.emit("boom", undefined);
      });
    }
    check(message) {
      this.on("boom", msg => {
        if (msg) console.log(msg);
        else console.log(message);
      });
    }
  }
  const gym = new Gym();
  gym.check("Athlete is working out");
  //HW3-4
  const http = require("http");
  const fs = require("fs");
  const fileUrl = new URL("file:/mnt/01D21A6FCDDEABE0/humanBody.iso");
  http
    .createServer()
    .on("request", (req, res) => {
      const stream = fs.createReadStream(fileUrl);
      console.time();
      stream.pipe(res);
      stream.on("end", () => {
        console.timeEnd();
      });
    })
    .listen("7070", () => {
      console.log("HW3-4 server listening on 7070");
    });
}
