// 1
require("./hello-world");

// 2
const createServer = require("./2");

try {
  createServer();
  console.log("server listening on port http://localhost:3000/");
} catch (e) {
  console.log(e);
}

// 3

const fsops = require("./3");
fsops();

// 4

const passwordGen = require("./password-generator");
console.log(passwordGen(10, true));

// 5




