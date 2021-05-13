const jsonServer = require("json-server");
const path = require("path");

const { db } = require("./db");
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add custom routes before JSON Server router
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use("/", router);

server.listen(3007, () => {
  console.log("JSON Server is running: http://localhost:3007");
});
