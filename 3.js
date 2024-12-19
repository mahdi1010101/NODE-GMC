const fs = require("fs");

module.exports = function performFsOperations() {
  fs.writeFileSync("welcome.txt", "Hello Node", (err) => {
    if (err) {
      console.log(err);
    }
  });

  console.log(fs.readFileSync("welcome.txt").toString());
};
