const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);
const port = 8080;

server.on("request", (req, res) => {
  console.log("Request received:", req.method, req.url);
});

const ready = () => console.log("server ready on Port " + port);
server.listen(port, ready);
