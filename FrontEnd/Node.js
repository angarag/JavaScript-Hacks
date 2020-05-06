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
} else {
  console.log("worker pid:", process.pid);
  http
    .createServer(function (req, res) {
      res.writeHead(200);
      res.end(`Hello, World! ${process.pid}`);
    })
    .listen(3000);
}

//npm install loadtest -g
//loadtest -n 300 http://localhost:3000
