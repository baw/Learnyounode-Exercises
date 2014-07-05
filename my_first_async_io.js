var fs = require("fs");

var filePath = process.argv[2];

fs.readFile(filePath, "utf8", function readFileCallback(err, file) {
  if (err) {
    console.warn(err)
  } else {
    console.log(file.split("\n").length - 1)
  }
});