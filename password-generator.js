var generator = require("generate-password");

module.exports = function generatePassword(length, numbers) {
  return generator.generate({
    length: length,
    numbers: numbers,
  });
};

