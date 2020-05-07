const { fork } = require("child_process");
const http = require("http");

if (false) {
  const processes = [
    fork("./scaleApp", [3001]),
    fork("./scaleApp", [3002]),
    fork("./scaleApp", [3003]),
  ];
  console.log(processes.map((i) => i.pid));
  console.log(`forked ${processes.length} processes`);

  setTimeout(() => {
    processes[0].kill("SIGINT");
  }, 10000);
}

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(process.pid);
  for (let i = 0; i < numCPUs; i++) cluster.fork();
  cluster.on("exit", (worker) => {
    console.log(`${process.pid} died`);
    console.log(`${Object.keys(cluster.workers).length} remaining`);
    cluster.fork();
  });
} else {
  console.log("worker pid:", process.pid);
  http
    .createServer(function (req, res) {
      res.writeHead(200);
      res.end(`Hello, World! ${process.pid}`);
      if (req.url == "/kill") {
        process.exit();
      }
    })
    .listen(3000);
}

//npm install loadtest -g
//loadtest -n 300 http://localhost:3000

//npm install pm2
//pm2 start app.js -i 3
//pm2 list
//pm2 delete app
//pm2 logs
//pm2 reload app
//pm2 monit
