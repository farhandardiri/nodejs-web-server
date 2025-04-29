const http = require("http");

const requetsListerner = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method } = request;

  if (method === "GET") {
    response.end("<h1>GET request</h1>");
  }
  if (method === "POST") {
    let body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }
  if (method === "PUT") {
    response.end("<h1>PUT request</h1>");
  }
  if (method === "DELETE") {
    response.end("<h1>DELETE request</h1>");
  }

  //   response.end("<h1>hello world server</h1>");
};

const server = http.createServer(requetsListerner);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
