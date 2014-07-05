var fs = require("fs");

var filePath = process.argv[2];

var file = fs.readFileSync(filePath);
var lines = file.toString().split("\n").length - 1;

console.log(lines);