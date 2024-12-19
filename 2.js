const http = require("http");

const createServer = () => http
  .createServer((req, res) => {
    res.write("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
  
module.exports = createServer;