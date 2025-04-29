const http = require("http");

const requetsListerner = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  response.end("<h1>hello world server</h1>");
};

const server = http.createServer(requetsListerner);

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
