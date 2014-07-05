var fs = require("fs");
var path = require("path");

var fileDirectory = path.normalize(process.argv[2]);
var fileExtension = process.argv[3];

fs.readdir(fileDirectory, function readdirCallback(err, files) {
  var results = [];
  files.forEach(function filesForEach(file) {
    if (path.extname(file).indexOf("." + fileExtension) !== -1) {
      console.log(file);
    }
  });
});